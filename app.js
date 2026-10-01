'use strict';

/* ---------- Tiện ích ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const view = $('#view');
const DAY = 864e5;
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const dayKey = (d = new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const startOfDay = (t = Date.now()) => { const d = new Date(t); d.setHours(0, 0, 0, 0); return d.getTime(); };
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

const store = {
  get(k, d) { try { const v = JSON.parse(localStorage.getItem('hta:' + k)); return v ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem('hta:' + k, JSON.stringify(v)); } catch { /* bộ nhớ đầy hoặc bị chặn */ } },
};

const settings = Object.assign({ accent: 'en-GB', rate: 0.9, newPerDay: 10, sentenceMode: 'type' }, store.get('settings', {}));
const saveSettings = () => store.set('settings', settings);

let toastTimer;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ---------- Phát âm (Text-to-Speech) ---------- */
let voices = [];
if ('speechSynthesis' in window) {
  const load = () => { voices = speechSynthesis.getVoices(); };
  load();
  speechSynthesis.onvoiceschanged = load;
}
function pickVoice() {
  const lang = settings.accent.toLowerCase();
  const same = voices.filter(v => v.lang.replace('_', '-').toLowerCase() === lang);
  return same.find(v => /google|natural|enhanced|premium/i.test(v.name)) || same[0]
    || voices.find(v => v.lang.toLowerCase().startsWith('en'));
}
function speak(text, rate) {
  if (!('speechSynthesis' in window)) { toast('Thiết bị không hỗ trợ đọc'); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = settings.accent;
  u.rate = rate || settings.rate;
  const v = pickVoice();
  if (v) u.voice = v;
  speechSynthesis.speak(u);
}

/* ---------- Nhận giọng nói ---------- */
function listen(expected, out) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) { toast('Trình duyệt chưa hỗ trợ nhận giọng nói, hãy dùng Chrome'); return; }
  const r = new SR();
  r.lang = settings.accent;
  r.maxAlternatives = 3;
  out.textContent = '🎙️ Đang nghe… hãy đọc câu';
  r.onresult = e => {
    const alts = [...e.results[0]].map(a => a.transcript);
    const ok = alts.some(a => normalize(a) === normalize(expected));
    out.innerHTML = ok
      ? `✅ Chuẩn rồi! Máy nghe được: “${esc(alts[0])}”`
      : `🔸 Máy nghe được: “${esc(alts[0])}”. Thử lại nhé!`;
  };
  r.onerror = e => { out.textContent = e.error === 'not-allowed' ? 'Bạn chưa cho phép dùng micro' : 'Chưa nghe rõ, thử lại nhé'; };
  r.onend = () => { if (out.textContent.startsWith('🎙️')) out.textContent = 'Chưa nghe rõ, thử lại nhé'; };
  r.start();
}

/* ---------- So khớp câu ---------- */
const CONTRACTIONS = {
  "i'm": 'i am', "you're": 'you are', "we're": 'we are', "they're": 'they are',
  "he's": 'he is', "she's": 'she is', "it's": 'it is', "that's": 'that is', "what's": 'what is', "where's": 'where is',
  "isn't": 'is not', "aren't": 'are not', "wasn't": 'was not', "weren't": 'were not',
  "don't": 'do not', "doesn't": 'does not', "didn't": 'did not', "can't": 'cannot', "won't": 'will not',
  "i'll": 'i will', "you'll": 'you will', "we'll": 'we will', "they'll": 'they will', "he'll": 'he will', "she'll": 'she will', "it'll": 'it will',
  "i've": 'i have', "you've": 'you have', "we've": 'we have', "they've": 'they have', "haven't": 'have not', "hasn't": 'has not',
  "let's": 'let us',
};
const cleanWord = w => w.toLowerCase().replace(/[’‘`]/g, "'").replace(/[^a-z0-9']/g, '');
function normalize(s) {
  return s.toLowerCase().replace(/[’‘`]/g, "'").replace(/[^a-z0-9' ]/g, ' ')
    .split(/\s+/).filter(Boolean).map(w => CONTRACTIONS[w] || w).join(' ')
    .replace(/\bcan not\b/g, 'cannot');
}

/* ---------- Thống kê, chuỗi ngày ---------- */
function logActivity(field, n = 1) {
  const days = store.get('days', {});
  const k = dayKey();
  days[k] = days[k] || {};
  days[k][field] = (days[k][field] || 0) + n;
  store.set('days', days);
}
function streak() {
  const days = store.get('days', {});
  const d = new Date();
  if (!days[dayKey(d)]) d.setDate(d.getDate() - 1);
  let s = 0;
  while (days[dayKey(d)]) { s++; d.setDate(d.getDate() - 1); }
  return s;
}
const today = () => store.get('days', {})[dayKey()] || {};

/* ---------- Lặp lại ngắt quãng (SRS) ---------- */
const ALL_WORDS = VOCAB.flatMap(t => t.words.map(w => ({
  en: w[0], ipa: w[1], pos: w[2], vi: w[3], ex: w[4], syn: w[5] || '', col: w[6] || [], topic: t.id,
})));
const WORD = Object.fromEntries(ALL_WORDS.map(w => [w.en, w]));

function gradeCard(card, g) {
  const c = Object.assign({ reps: 0, interval: 0, ease: 2.5, lapses: 0, due: 0 }, card);
  if (g === 0) {
    c.reps = 0; c.lapses++; c.interval = 0;
    c.ease = Math.max(1.3, c.ease - 0.2);
    c.due = Date.now() + 60e3;
    return c;
  }
  let iv;
  if (c.reps === 0) iv = [0, 1, 1, 3][g];
  else if (c.reps === 1) iv = [0, 2, 3, 6][g];
  else iv = Math.round(c.interval * [0, 1.2, c.ease, c.ease * 1.3][g]);
  iv = Math.max(iv, c.reps > 0 ? c.interval + 1 : 1);
  c.interval = iv;
  c.ease = Math.min(3, Math.max(1.3, c.ease + [0, -0.15, 0, 0.15][g]));
  c.reps++;
  c.due = startOfDay() + iv * DAY;
  return c;
}
const ivLabel = (card, g) => g === 0 ? '<1 phút' : `${gradeCard(card, g).interval} ngày`;

function newLeftToday() {
  const nt = store.get('newToday', { date: '', count: 0 });
  return Math.max(0, settings.newPerDay - (nt.date === dayKey() ? nt.count : 0));
}
function bumpNewToday() {
  const nt = store.get('newToday', { date: '', count: 0 });
  store.set('newToday', { date: dayKey(), count: (nt.date === dayKey() ? nt.count : 0) + 1 });
}
function dueList(srs = store.get('srs', {})) {
  const now = Date.now();
  return Object.entries(srs).filter(([k, c]) => WORD[k] && c.due <= now).sort((a, b) => a[1].due - b[1].due).map(([k]) => k);
}
function newList(topic, srs = store.get('srs', {})) {
  return ALL_WORDS.filter(w => !srs[w.en] && (!topic || w.topic === topic)).map(w => w.en);
}
const learnedCount = (srs = store.get('srs', {})) => Object.keys(srs).filter(k => WORD[k]).length;

/* ---------- Router ---------- */
let keyHandler = null;
document.addEventListener('keydown', e => { if (keyHandler) keyHandler(e); });

const routes = [
  [/^\/?$/, homeView, 'home'],
  [/^\/sentences$/, sentenceListView, 'sentences'],
  [/^\/sentences\/(\w+)$/, sentencePlayer, 'sentences', true],
  [/^\/vocab$/, vocabView, 'vocab'],
  [/^\/vocab\/review(?:\/(\w+))?$/, reviewView, 'vocab', true],
  [/^\/vocab\/topic\/(\w+)$/, topicView, 'vocab'],
  [/^\/vocab\/colloc(?:\/(\w+))?$/, collocView, 'vocab', true],
  [/^\/ipa$/, ipaView, 'ipa'],
  [/^\/grammar$/, grammarListView, 'grammar'],
  [/^\/grammar\/(\w+)$/, grammarLessonView, 'grammar'],
  [/^\/settings$/, settingsView, 'home'],
];

function router() {
  const path = location.hash.replace(/^#/, '') || '/';
  keyHandler = null;
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  for (const [re, fn, tab, full] of routes) {
    const m = path.match(re);
    if (m) {
      document.body.classList.toggle('hide-tabs', !!full);
      view.classList.toggle('full', !!full);
      $$('#tabbar a').forEach(a => a.classList.toggle('active', a.dataset.tab === tab));
      fn(...m.slice(1));
      window.scrollTo(0, 0);
      return;
    }
  }
  location.hash = '#/';
}
window.addEventListener('hashchange', router);

const topbar = (title, back) =>
  `<div class="topbar"><button class="back" onclick="location.hash='${back}'" aria-label="Quay lại">←</button><div class="title">${title}</div></div>`;

/* ---------- Trang chủ ---------- */
let installPrompt = null;
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installPrompt = e; });

function homeView() {
  const srs = store.get('srs', {});
  const due = dueList(srs).length;
  const fresh = Math.min(newLeftToday(), newList(null, srs).length);
  const sprog = store.get('sprog', {});
  const nextLesson = SENTENCE_LESSONS.find(l => !sprog[l.id]?.done) || SENTENCE_LESSONS[0];
  const sDone = SENTENCE_LESSONS.filter(l => sprog[l.id]?.done).length;
  const gDone = Object.keys(store.get('gprog', {})).length;
  const learned = learnedCount(srs);
  const t = today();
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.navigator.standalone;

  view.innerHTML = `
    <div class="spread">
      <div><h1>Chào bạn 👋</h1><p class="sub" style="margin:0">Mỗi ngày một chút, đều đặn là tiến bộ.</p></div>
      <a class="icon-btn" href="#/settings" aria-label="Cài đặt">⚙️</a>
    </div>
    <div class="stats">
      <div class="card stat"><b>🔥 ${streak()}</b><span>ngày liên tiếp</span></div>
      <div class="card stat"><b>${t.cards || 0}</b><span>thẻ hôm nay</span></div>
      <div class="card stat"><b>${t.sentences || 0}</b><span>câu hôm nay</span></div>
    </div>

    <h2>Hôm nay học gì?</h2>
    <a class="card list-item" href="#/vocab/review">
      <div class="emoji">📚</div>
      <div class="grow"><div class="name">Ôn từ vựng</div>
        <div class="muted small">${due} thẻ cần ôn · ${fresh} từ mới</div></div>
      <span class="badge">${due + fresh > 0 ? 'Học ngay' : 'Xong ✓'}</span>
    </a>
    <a class="card list-item" href="#/sentences/${nextLesson.id}">
      <div class="emoji">🧩</div>
      <div class="grow"><div class="name">Ghép câu: ${esc(nextLesson.title)}</div>
        <div class="muted small">${esc(nextLesson.note)}</div></div>
      <span class="badge">Tiếp tục</span>
    </a>
    <a class="card list-item" href="#/vocab/colloc">
      <div class="emoji">🔗</div>
      <div class="grow"><div class="name">Luyện cụm từ</div>
        <div class="muted small">10 câu điền từ đi kèm</div></div>
      <span class="badge">${t.colloc ? `${t.colloc} câu ✓` : 'Luyện'}</span>
    </a>

    <h2>Lộ trình của bạn</h2>
    <div class="card">
      ${stage(1, 'Phát âm và từ vựng', `${learned}/${ALL_WORDS.length} từ đã học`, learned / ALL_WORDS.length, '#/ipa')}
      ${stage(2, 'Ngữ pháp nền tảng', `${gDone}/${GRAMMAR.length} bài`, gDone / GRAMMAR.length, '#/grammar')}
      ${stage(3, 'Ghép câu, nghe và nói', `${sDone}/${SENTENCE_LESSONS.length} bài`, sDone / SENTENCE_LESSONS.length, '#/sentences', true)}
    </div>

    <div id="install"></div>
  `;

  const ins = $('#install');
  if (installPrompt) {
    ins.innerHTML = `<button class="btn primary block">📲 Cài app vào điện thoại</button>`;
    ins.firstChild.onclick = async () => { installPrompt.prompt(); await installPrompt.userChoice; installPrompt = null; ins.innerHTML = ''; };
  } else if (isIOS) {
    ins.innerHTML = `<div class="card small muted">📲 <b>Cài lên iPhone:</b> mở bằng Safari, bấm nút Chia sẻ rồi chọn "Thêm vào MH chính".</div>`;
  }
}
function stage(n, name, info, ratio, href, last) {
  return `<a class="stage" href="${href}" style="${last ? '' : 'margin-bottom:16px'}">
    <div class="num">${n}</div>
    <div style="flex:1"><div class="spread"><b>${name}</b><span class="muted small">${info}</span></div>
    <div class="progress" style="margin-top:6px"><div style="width:${Math.round(ratio * 100)}%"></div></div></div></a>`;
}

/* ---------- Ghép câu (kiểu Earthworm) ---------- */
function sentenceListView() {
  const sprog = store.get('sprog', {});
  view.innerHTML = `
    <h1>Ghép câu</h1>
    <p class="sub">Nhìn nghĩa tiếng Việt rồi gõ lại câu tiếng Anh. Câu sẽ dài dần từ từ đơn đến câu hoàn chỉnh.</p>
    ${SENTENCE_LESSONS.map((l, i) => {
      const p = sprog[l.id] || {};
      const pct = p.done ? 100 : Math.round(((p.i || 0) / l.items.length) * 100);
      const group = l.group || 'Cơ bản';
      const head = group !== (SENTENCE_LESSONS[i - 1]?.group || 'Cơ bản') || i === 0
        ? `<h2>${group === 'TOEIC' ? '🎯 Ngữ cảnh TOEIC' : '🌱 Cơ bản'}</h2>` : '';
      const num = SENTENCE_LESSONS.slice(0, i + 1).filter(x => (x.group || 'Cơ bản') === group).length;
      return `${head}<a class="card list-item" href="#/sentences/${l.id}">
        <div class="emoji">${p.done ? '✅' : num}</div>
        <div class="grow"><div class="name">${esc(l.title)}</div>
          <div class="muted small">${esc(l.note)} · ${l.items.length} câu</div>
          <div class="progress" style="margin-top:8px"><div style="width:${pct}%"></div></div></div>
      </a>`;
    }).join('')}`;
}

function sentencePlayer(id) {
  const lesson = SENTENCE_LESSONS.find(l => l.id === id);
  if (!lesson) { location.hash = '#/sentences'; return; }
  const sprog = store.get('sprog', {});
  let i = sprog[lesson.id]?.done ? 0 : Math.min(sprog[lesson.id]?.i || 0, lesson.items.length - 1);
  let phase, wrong, typed, picked, tiles, marks;

  const saveProg = (extra = {}) => {
    const p = store.get('sprog', {});
    p[lesson.id] = Object.assign({}, p[lesson.id], { i }, extra);
    store.set('sprog', p);
  };
  const item = () => lesson.items[i];
  const answer = () => item()[1];
  const tokens = () => answer().split(' ');

  function frame() {
    view.innerHTML = `
      ${topbar(esc(lesson.title), '#/sentences')}
      <div class="spread small muted">
        <span id="count"></span>
        <div class="seg" id="mode">
          <button data-m="type">⌨️ Gõ</button><button data-m="tiles">🧱 Xếp từ</button>
        </div>
      </div>
      <div class="progress" style="margin-top:8px"><div id="bar"></div></div>
      <div id="stage"></div>`;
    $$('#mode button').forEach(b => b.onclick = () => {
      settings.sentenceMode = b.dataset.m; saveSettings(); renderItem();
    });
    renderItem();
  }

  function renderItem() {
    phase = 'input'; wrong = 0; typed = ''; picked = []; marks = [];
    $$('#mode button').forEach(b => b.classList.toggle('on', b.dataset.m === settings.sentenceMode));
    $('#count').textContent = `Câu ${i + 1}/${lesson.items.length}`;
    $('#bar').style.width = `${(i / lesson.items.length) * 100}%`;
    const typeMode = settings.sentenceMode === 'type';
    $('#stage').innerHTML = `
      <div class="prompt">${esc(item()[0])}</div>
      <div class="prompt-note" id="hint"></div>
      ${typeMode ? `
        <div class="slots-wrap" id="slotsWrap">
          <div class="slots" id="slots"></div>
          <input id="typer" class="typer" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" aria-label="Gõ câu tiếng Anh">
        </div>` : `
        <div class="picked-area" id="picked"></div>
        <div class="tiles" id="tiles"></div>`}
      <div class="feedback" id="fb"></div>
      <div id="after"></div>
      <div class="controls" id="ctrls">
        <button class="btn small" id="bSpeak">🔊 Nghe</button>
        <button class="btn small" id="bShow">💡 Xem đáp án</button>
        ${typeMode ? `<button class="btn small primary" id="bCheck">Kiểm tra</button>` : ''}
      </div>
      ${typeMode ? `<div class="kbd-hint"><kbd>Enter</kbd> kiểm tra / tiếp · <kbd>Ctrl</kbd>+<kbd>'</kbd> nghe · <kbd>Ctrl</kbd>+<kbd>;</kbd> xem đáp án</div>` : ''}`;

    $('#bSpeak').onclick = () => speak(answer());
    $('#bShow').onclick = showAnswer;

    if (typeMode) {
      const inp = $('#typer');
      inp.addEventListener('input', () => { typed = inp.value; marks = []; $('#fb').textContent = ''; renderSlots(); });
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); submit(); } });
      $('#bCheck').onclick = submit;
      renderSlots();
      inp.focus();
    } else {
      tiles = shuffle(tokens().map(cleanDisplay));
      if (tiles.length > 1 && tiles.join(' ') === tokens().map(cleanDisplay).join(' ')) tiles.reverse();
      renderTiles();
    }
  }

  const cleanDisplay = w => w.replace(/[.,!?;:"]/g, '');

  function renderSlots() {
    const exp = tokens();
    const parts = typed.split(' ');
    const n = Math.max(exp.length, parts.length);
    let html = '';
    for (let k = 0; k < n; k++) {
      const shown = phase === 'done' ? (exp[k] || '') : (parts[k] || '');
      const w = Math.max(cleanDisplay(exp[k] || '').length, shown.length, 1) + 1;
      const cls = ['slot'];
      if (phase === 'done') cls.push('right');
      else if (marks[k]) cls.push('wrong');
      else if (k === parts.length - 1) cls.push('active');
      html += `<span class="${cls.join(' ')}" style="min-width:${w}ch">${esc(shown)}</span>`;
    }
    $('#slots').innerHTML = html;
  }

  function renderTiles() {
    const area = $('#picked');
    area.className = 'picked-area' + (phase === 'done' ? ' right' : marks.length ? ' wrong' : '');
    area.innerHTML = picked.map((ti, k) => `<button class="tile" data-k="${k}">${esc(tiles[ti])}</button>`).join('')
      || '<span class="muted small">Chạm vào các từ bên dưới theo đúng thứ tự</span>';
    if (phase === 'done') { $('#tiles').innerHTML = ''; return; }
    $('#tiles').innerHTML = tiles.map((t, ti) =>
      `<button class="tile ${picked.includes(ti) ? 'used' : ''}" data-ti="${ti}">${esc(t)}</button>`).join('');
    $$('#picked .tile').forEach(b => b.onclick = () => {
      picked.splice(+b.dataset.k, 1); marks = []; $('#fb').textContent = ''; renderTiles();
    });
    $$('#tiles .tile').forEach(b => b.onclick = () => {
      if (picked.includes(+b.dataset.ti)) return;
      speak(tiles[+b.dataset.ti]);
      picked.push(+b.dataset.ti);
      renderTiles();
      if (picked.length === tiles.length) submit();
    });
  }

  function currentAttempt() {
    return settings.sentenceMode === 'type' ? typed : picked.map(ti => tiles[ti]).join(' ');
  }

  function submit() {
    if (phase === 'done') { next(); return; }
    const attempt = currentAttempt();
    if (!attempt.trim()) return;
    if (normalize(attempt) === normalize(answer())) { success(); return; }

    wrong++;
    const exp = tokens().map(cleanWord);
    const got = settings.sentenceMode === 'type' ? typed.trim().split(/\s+/) : picked.map(ti => tiles[ti]);
    marks = got.map((w, k) => cleanWord(w) !== exp[k]);
    if (!marks.some(Boolean)) marks = got.map(() => true);
    const fb = $('#fb');
    fb.className = 'feedback bad';
    fb.textContent = wrong >= 3 ? 'Chưa đúng. Xem đáp án bên dưới rồi gõ lại nhé.' : 'Chưa đúng, thử lại nhé!';
    if (wrong >= 3) showAnswer();
    const box = settings.sentenceMode === 'type' ? $('#slots') : $('#picked');
    box.classList.remove('shake'); void box.offsetWidth; box.classList.add('shake');
    if (settings.sentenceMode === 'type') { renderSlots(); $('#typer').focus(); } else renderTiles();
  }

  function showAnswer() {
    $('#hint').innerHTML = `Đáp án: <b>${esc(answer())}</b>`;
    speak(answer());
    if (settings.sentenceMode === 'type') $('#typer').focus();
  }

  function success() {
    phase = 'done';
    logActivity('sentences');
    saveProg();
    const fb = $('#fb');
    fb.className = 'feedback good';
    fb.textContent = ['Chính xác! 🎉', 'Tuyệt vời! ✨', 'Giỏi lắm! 👏', 'Đúng rồi! 💯'][Math.floor(Math.random() * 4)];
    $('#hint').textContent = '';
    if (settings.sentenceMode === 'type') renderSlots(); else renderTiles();
    speak(answer());
    $('#after').innerHTML = `
      <div class="answer-box">
        <div class="en">${esc(answer())}</div>
        <div class="muted">${esc(item()[0])}</div>
        <div class="row" style="justify-content:center;margin-top:10px">
          <button class="btn small" id="aSpeak">🔊 Nghe lại</button>
          <button class="btn small" id="aSlow">🐢 Nghe chậm</button>
          <button class="btn small" id="aMic">🎤 Luyện nói</button>
        </div>
        <div class="small" id="micOut" style="margin-top:8px"></div>
      </div>`;
    $('#ctrls').innerHTML = `<button class="btn primary block" id="bNext">Tiếp tục →</button>`;
    $('#aSpeak').onclick = () => speak(answer());
    $('#aSlow').onclick = () => speak(answer(), 0.55);
    $('#aMic').onclick = () => listen(answer(), $('#micOut'));
    $('#bNext').onclick = next;
    if (settings.sentenceMode === 'type') $('#typer').focus();
  }

  function next() {
    i++;
    if (i >= lesson.items.length) { finish(); return; }
    saveProg();
    renderItem();
  }

  function finish() {
    i = 0;
    saveProg({ done: true });
    logActivity('lessons');
    const idx = SENTENCE_LESSONS.indexOf(lesson);
    const nxt = SENTENCE_LESSONS[idx + 1];
    keyHandler = null;
    view.innerHTML = `
      ${topbar(esc(lesson.title), '#/sentences')}
      <div class="big-emoji">🏆</div>
      <h1 class="center">Hoàn thành bài học!</h1>
      <p class="sub center">Bạn đã luyện ${lesson.items.length} câu. Hãy học lại bài này vào ngày mai để nhớ lâu hơn.</p>
      <div class="row" style="justify-content:center">
        <a class="btn" href="#/sentences">Danh sách bài</a>
        ${nxt ? `<a class="btn primary" href="#/sentences/${nxt.id}">Bài tiếp: ${esc(nxt.title)} →</a>` : ''}
      </div>`;
  }

  keyHandler = e => {
    if (e.ctrlKey && e.key === "'") { e.preventDefault(); speak(answer()); }
    else if (e.ctrlKey && e.key === ';') { e.preventDefault(); showAnswer(); }
    else if (e.key === 'Enter' && settings.sentenceMode === 'tiles' && phase === 'done') { e.preventDefault(); next(); }
  };

  frame();
  $('#stage').addEventListener('click', e => {
    if (settings.sentenceMode === 'type' && !e.target.closest('button')) $('#typer')?.focus();
  });
}

/* ---------- Từ vựng ---------- */
function vocabView() {
  const srs = store.get('srs', {});
  const due = dueList(srs).length;
  const fresh = Math.min(newLeftToday(), newList(null, srs).length);
  view.innerHTML = `
    <h1>Từ vựng</h1>
    <p class="sub">Học bằng thẻ và ôn đúng lúc sắp quên (lặp lại ngắt quãng).</p>
    <div class="card">
      <div class="spread">
        <div><b>Hôm nay</b><div class="muted small">${due} thẻ cần ôn · ${fresh} từ mới</div></div>
        <a class="btn primary" href="#/vocab/review">${due + fresh ? 'Bắt đầu' : 'Học thêm'}</a>
      </div>
    </div>
    <a class="card list-item" href="#/vocab/colloc">
      <div class="emoji">🔗</div>
      <div class="grow"><div class="name">Luyện cụm từ</div>
        <div class="muted small">Điền từ còn thiếu: ___ a deadline → meet</div></div>
      <span class="badge">10 câu</span>
    </a>
    ${VOCAB.map((t, i) => {
      const n = t.words.filter(w => srs[w[0]]).length;
      const head = t.group !== VOCAB[i - 1]?.group ? `<h2>${t.group === 'TOEIC' ? '🎯 Từ vựng TOEIC' : '🌱 Từ vựng cơ bản'}</h2>` : '';
      return `${head}<a class="card list-item" href="#/vocab/topic/${t.id}">
        <div class="emoji">${t.icon}</div>
        <div class="grow"><div class="name">${esc(t.name)}</div>
          <div class="progress" style="margin-top:8px"><div style="width:${(n / t.words.length) * 100}%"></div></div></div>
        <span class="muted small">${n}/${t.words.length}</span>
      </a>`;
    }).join('')}`;
}

function topicView(id) {
  const t = VOCAB.find(x => x.id === id);
  if (!t) { location.hash = '#/vocab'; return; }
  const srs = store.get('srs', {});
  const left = t.words.filter(w => !srs[w[0]]).length;
  view.innerHTML = `
    ${topbar(`${t.icon} ${esc(t.name)}`, '#/vocab')}
    <div class="row" style="margin-bottom:12px">
      ${left ? `<a class="btn primary" style="flex:1" href="#/vocab/review/${t.id}">Học ${Math.min(left, 10)} từ mới</a>` : ''}
      ${COL_ITEMS.some(q => q.word.topic === t.id) ? `<a class="btn" style="flex:1" href="#/vocab/colloc/${t.id}">🔗 Luyện cụm từ</a>` : ''}
    </div>
    <div class="card">
      ${t.words.map(w => {
        const c = srs[w[0]];
        const lv = !c ? '' : c.interval >= 7 ? 'l2' : 'l1';
        return `<div class="word-row">
          <span class="lv ${lv}" title="${!c ? 'Chưa học' : lv === 'l2' ? 'Đã nhớ' : 'Đang học'}"></span>
          <div class="grow"><span class="en">${esc(w[0])}</span> <span class="muted small">${esc(w[1])} · ${w[2]}</span>
            <div class="small">${esc(w[3])}</div>
            ${w[5] ? `<div class="small muted">≈ ${esc(w[5])}</div>` : ''}
            ${w[6] ? `<div class="small muted">🔗 ${w[6].map(c => esc(c[0])).join(' · ')}</div>` : ''}</div>
          <button class="icon-btn" data-say="${esc(w[0])}" aria-label="Nghe">🔊</button>
        </div>`;
      }).join('')}
    </div>
    <p class="muted small">🟡 đang học · 🟢 đã nhớ (ôn cách nhau từ 7 ngày trở lên)</p>`;
  bindSay(view);
}

// Từ đồng nghĩa và cụm từ hay đi kèm, bấm vào để nghe
function wordExtras(w) {
  let html = '';
  if (w.syn) {
    html += `<div class="extra"><div class="label">≈ Đồng nghĩa</div><div class="chips">
      ${w.syn.split(', ').map(s => `<button class="chip" data-say="${esc(s)}">${esc(s)}</button>`).join('')}</div></div>`;
  }
  if (w.col.length) {
    html += `<div class="extra"><div class="label">🔗 Cụm từ hay dùng</div>
      ${w.col.map(([p, v]) => `<button class="col-row" data-say="${esc(p)}"><b>${esc(p)}</b><span>${esc(v)}</span></button>`).join('')}</div>`;
  }
  return html;
}
function bindSay(root) {
  $$('[data-say]', root).forEach(b => b.onclick = e => { e.stopPropagation(); speak(b.dataset.say); });
}

/* ---------- Luyện cụm từ (điền từ còn thiếu) ---------- */
const TOPIC = Object.fromEntries(VOCAB.map(t => [t.id, t]));
const COL_STOP = new Set(['a', 'an', 'the', 'be', 'somebody', 'your', 'my', 'of', 'and']);
const PREPS = new Set(['in', 'on', 'at', 'for', 'with', 'to', 'from', 'by', 'about', 'under', 'behind', 'ahead', 'out', 'up', 'upon', 'into', 'through']);
const ALL_PHRASES = new Set(ALL_WORDS.flatMap(w => w.col.map(c => c[0].toLowerCase())));

// Che một từ đi kèm (không che từ khóa); ưu tiên từ đứng sát từ khóa, bên trái trước
function blankCollocation(w, [phrase, vi]) {
  const toks = phrase.split(' ');
  const low = toks.map(t => t.toLowerCase());
  const stems = w.en.toLowerCase().split(/[\s-]/).map(s => s.slice(0, 5));
  const isHead = t => stems.some(s => t.split('-').some(p => p.startsWith(s)));
  const heads = low.map((t, i) => (isHead(t) ? i : -1)).filter(i => i >= 0);
  let cands = low.map((_, i) => i).filter(i => !heads.includes(i) && !COL_STOP.has(low[i]));
  // Chỉ còn giới từ như "of" (inform somebody of) thì che luôn giới từ đó
  if (!cands.length) cands = low.map((_, i) => i).filter(i => !heads.includes(i) && !['a', 'an', 'the', 'somebody'].includes(low[i]));
  if (!cands.length) return null;
  const h = heads.length ? heads[0] : toks.length;
  cands.sort((a, b) => Math.abs(a - h) - Math.abs(b - h) || a - b);
  return { word: w, phrase, vi, idx: cands[0], answer: toks[cands[0]], toks };
}
const COL_ITEMS = ALL_WORDS.flatMap(w => w.col.map(c => blankCollocation(w, c)).filter(Boolean));
const ANSWER_POOL = [...new Set(COL_ITEMS.map(q => q.answer.toLowerCase()))];

function distractors(q) {
  const ans = q.answer.toLowerCase();
  const isPrep = PREPS.has(ans);
  const filled = t => q.toks.map((x, i) => (i === q.idx ? t : x)).join(' ').toLowerCase();
  return shuffle(ANSWER_POOL.filter(a => a !== ans && PREPS.has(a) === isPrep && !ALL_PHRASES.has(filled(a)))).slice(0, 3);
}

function collocView(topic) {
  const srs = store.get('srs', {});
  let items;
  if (topic) items = COL_ITEMS.filter(q => q.word.topic === topic);
  else {
    // Ưu tiên cụm từ của những từ đã học, thiếu thì bù bằng từ TOEIC
    items = COL_ITEMS.filter(q => srs[q.word.en]);
    if (items.length < 10) {
      const more = COL_ITEMS.filter(q => !srs[q.word.en] && TOPIC[q.word.topic].group === 'TOEIC');
      items = items.concat(shuffle(more).slice(0, 10 - items.length));
    }
  }
  const qs = shuffle(items).slice(0, 10).map(q => ({ ...q, opts: shuffle([q.answer, ...distractors(q)]) }));
  const back = topic ? `#/vocab/topic/${topic}` : '#/vocab';
  let i = 0, score = 0, picked = null;

  function render() {
    if (i >= qs.length) { finish(); return; }
    const q = qs[i];
    const phraseHtml = q.toks.map((t, k) => k !== q.idx ? esc(t)
      : picked === null ? '<span class="blank">______</span>'
      : `<span class="blank filled">${esc(q.answer)}</span>`).join(' ');
    view.innerHTML = `
      ${topbar('🔗 Luyện cụm từ', back)}
      <div class="spread small muted"><span>Câu ${i + 1}/${qs.length}</span><span>Đúng ${score}</span></div>
      <div class="progress" style="margin:8px 0 16px"><div style="width:${(i / qs.length) * 100}%"></div></div>
      <div class="card center">
        <div class="phrase">${phraseHtml}</div>
        <div class="muted">${esc(q.vi)}</div>
        <div class="small muted" style="margin-top:10px">Từ khóa: <b>${esc(q.word.en)}</b> · ${esc(q.word.vi)}</div>
      </div>
      <div class="opt-grid">
        ${q.opts.map((o, k) => {
          let cls = 'opt';
          if (picked !== null && o === q.answer) cls += ' right';
          else if (picked === k) cls += ' wrong';
          return `<button class="${cls}" data-k="${k}" ${picked !== null ? 'disabled' : ''}><span class="muted small">${k + 1}</span> ${esc(o)}</button>`;
        }).join('')}
      </div>
      ${picked !== null ? `
        <div class="card small">
          <div class="row" style="justify-content:space-between;flex-wrap:nowrap">
            <span>“${esc(q.word.ex)}”</span>
            <button class="icon-btn" data-say="${esc(q.word.ex)}" aria-label="Nghe câu ví dụ">🔊</button>
          </div>
          ${q.word.syn ? `<div class="muted" style="margin-top:6px">≈ ${esc(q.word.syn)}</div>` : ''}
        </div>
        <button class="btn primary block" id="next">Tiếp tục →</button>` : ''}`;
    $$('.opt-grid .opt').forEach(b => b.onclick = () => choose(+b.dataset.k));
    bindSay(view);
    $('#next')?.addEventListener('click', next);
  }

  function choose(k) {
    if (picked !== null) return;
    const q = qs[i];
    picked = k;
    const ok = q.opts[k] === q.answer;
    if (ok) score++;
    else {
      // Trả lời sai thì đưa từ đó về hàng ôn ngay
      const all = store.get('srs', {});
      if (all[q.word.en]) { all[q.word.en].due = Date.now(); store.set('srs', all); }
    }
    logActivity('colloc');
    speak(q.phrase);
    render();
  }
  function next() { i++; picked = null; render(); }

  function finish() {
    keyHandler = null;
    view.innerHTML = `
      ${topbar('🔗 Luyện cụm từ', back)}
      <div class="big-emoji">${score >= qs.length * 0.8 ? '🏆' : '💪'}</div>
      <h1 class="center">${score}/${qs.length} câu đúng</h1>
      <p class="sub center">${qs.length ? 'Những từ bạn làm sai (nếu đã học) sẽ được đưa vào lượt ôn tiếp theo.' : 'Chưa có cụm từ nào để luyện.'}</p>
      <div class="row" style="justify-content:center">
        <a class="btn" href="${back}">Quay lại</a>
        <button class="btn primary" onclick="router()">Làm lượt mới</button>
      </div>`;
  }

  keyHandler = e => {
    if (i >= qs.length) return;
    if (picked === null && ['1', '2', '3', '4'].includes(e.key)) choose(+e.key - 1);
    else if (picked !== null && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); next(); }
  };
  render();
}

function reviewView(topic) {
  const srs = store.get('srs', {});
  let queue = dueList(srs);
  let newWords;
  if (topic) newWords = newList(topic, srs).slice(0, 10);
  else newWords = newList(null, srs).slice(0, newLeftToday());
  // Xen từ mới vào giữa các thẻ ôn để đỡ nhàm
  newWords.forEach((w, k) => queue.splice(Math.min(queue.length, k * 3 + 1), 0, w));
  if (!queue.length && !topic) queue = newList(null, srs).slice(0, 5);
  const newSet = new Set(newWords);
  let flipped = false, done = 0;
  const total = queue.length;

  function render() {
    if (!queue.length) {
      keyHandler = null;
      view.innerHTML = `
        ${topbar('Ôn từ vựng', '#/vocab')}
        <div class="big-emoji">🎉</div>
        <h1 class="center">${done ? 'Xong phần ôn hôm nay!' : 'Chưa có thẻ nào cần ôn'}</h1>
        <p class="sub center">${done ? `Bạn đã ôn ${done} lượt thẻ. Mai quay lại nhé!` : 'Bạn đã học hết từ vựng hiện có. Tuyệt vời!'}</p>
        <div class="row" style="justify-content:center"><a class="btn" href="#/vocab">Về trang từ vựng</a>
        <a class="btn primary" href="#/sentences">Luyện ghép câu</a></div>`;
      return;
    }
    const en = queue[0];
    const w = WORD[en];
    const card = store.get('srs', {})[en];
    view.innerHTML = `
      ${topbar('Ôn từ vựng', '#/vocab')}
      <div class="spread small muted"><span>Còn ${queue.length} thẻ</span><span>${done} đã ôn</span></div>
      <div class="progress" style="margin:8px 0 16px"><div style="width:${total ? Math.min(100, (done / total) * 100) : 0}%"></div></div>
      <div class="card flash" id="flash">
        ${newSet.has(en) && !card ? '<span class="badge corner">Mới</span>' : ''}
        <div class="word">${esc(w.en)}</div>
        <div class="ipa">${esc(w.ipa)} · ${w.pos}</div>
        <button class="icon-btn" id="say" aria-label="Nghe">🔊</button>
        ${flipped ? `
          <div class="meaning">${esc(w.vi)}</div>
          <div class="ex"><span>“${esc(w.ex)}”</span><button class="icon-btn" id="sayEx" aria-label="Nghe câu ví dụ">🔊</button></div>
          ${wordExtras(w)}
        ` : `<div class="tap-hint">Chạm để xem nghĩa (phím Space)</div>`}
      </div>
      ${flipped ? `
        <div class="grades">
          ${['Quên', 'Khó', 'Nhớ', 'Dễ'].map((l, g) =>
            `<button class="btn g${g}" data-g="${g}">${l}<small>${ivLabel(card, g)}</small></button>`).join('')}
        </div>
        <p class="muted small center">Phím 1 · 2 · 3 · 4</p>` : `
        <button class="btn primary block" id="flip">Xem nghĩa</button>`}`;
    $('#say').onclick = e => { e.stopPropagation(); speak(w.en); };
    if (flipped) {
      $('#sayEx').onclick = e => { e.stopPropagation(); speak(w.ex); };
      bindSay(view);
      $$('[data-g]').forEach(b => b.onclick = () => grade(+b.dataset.g));
    } else {
      $('#flash').onclick = flip;
      $('#flip').onclick = flip;
      speak(w.en);
    }
  }
  function flip() { flipped = true; render(); }
  function grade(g) {
    const en = queue.shift();
    const all = store.get('srs', {});
    if (!all[en]) bumpNewToday();
    all[en] = gradeCard(all[en], g);
    store.set('srs', all);
    logActivity('cards');
    done++;
    if (g === 0) queue.splice(Math.min(queue.length, 3), 0, en);
    flipped = false;
    render();
  }
  keyHandler = e => {
    if (!queue.length) return;
    if (!flipped && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); flip(); }
    else if (flipped && ['1', '2', '3', '4'].includes(e.key)) grade(+e.key - 1);
  };
  render();
}

/* ---------- Phát âm IPA ---------- */
function ipaView() {
  const groups = [
    ['short', 'Nguyên âm ngắn'], ['long', 'Nguyên âm dài'], ['diph', 'Nguyên âm đôi'], ['cons', 'Phụ âm'],
  ];
  view.innerHTML = `
    <h1>Bảng phiên âm IPA</h1>
    <p class="sub">44 âm của tiếng Anh. Chạm vào từng âm để xem cách đọc và nghe từ ví dụ.</p>
    ${groups.map(([g, name]) => `
      <h2>${name}</h2>
      <div class="ipa-grid">
        ${IPA.filter(x => x[1] === g).map(x =>
          `<button class="ipa-tile" data-sym="${esc(x[0])}"><b>/${esc(x[0])}/</b><span>${esc(x[2][0])}</span></button>`).join('')}
      </div>`).join('')}
    <div class="sheet" id="sheet"></div>`;

  const sheet = $('#sheet');
  $$('.ipa-tile').forEach(b => b.onclick = () => {
    const x = IPA.find(i => i[0] === b.dataset.sym);
    $$('.ipa-tile').forEach(t => t.classList.toggle('sel', t === b));
    sheet.innerHTML = `
      <div class="spread"><div class="sym">/${esc(x[0])}/</div>
        <button class="icon-btn" id="close" aria-label="Đóng">✕</button></div>
      <p>${esc(x[3])}</p>
      <div class="ex-words">${x[2].map(w => `<button class="btn small" data-w="${esc(w)}">🔊 ${esc(w)}</button>`).join('')}</div>
      <p class="muted small">Mẹo: nghe từ ví dụ, đọc theo 3 lần, rồi tự ghi âm giọng mình để so sánh.</p>`;
    sheet.classList.add('open');
    $$('[data-w]', sheet).forEach(w => w.onclick = () => speak(w.dataset.w, 0.75));
    $('#close').onclick = () => { sheet.classList.remove('open'); $$('.ipa-tile').forEach(t => t.classList.remove('sel')); };
    speak(x[2][0], 0.75);
  });
}

/* ---------- Ngữ pháp ---------- */
function grammarListView() {
  const gp = store.get('gprog', {});
  view.innerHTML = `
    <h1>Ngữ pháp nền tảng</h1>
    <p class="sub">Chỉ học phần cốt lõi. Mỗi bài có lý thuyết ngắn và 5 câu luyện tập.</p>
    ${GRAMMAR.map((g, i) => `
      <a class="card list-item" href="#/grammar/${g.id}">
        <div class="emoji">${gp[g.id] != null ? '✅' : i + 1}</div>
        <div class="grow"><div class="name">${esc(g.title)}</div><div class="muted small">${esc(g.sub)}</div></div>
        ${gp[g.id] != null ? `<span class="badge">${gp[g.id]}/${g.quiz.length}</span>` : ''}
      </a>`).join('')}`;
}

function grammarLessonView(id) {
  const g = GRAMMAR.find(x => x.id === id);
  if (!g) { location.hash = '#/grammar'; return; }
  const answers = [];
  view.innerHTML = `
    ${topbar(esc(g.title), '#/grammar')}
    <div class="card lesson-body">${g.html}</div>
    <h2>Luyện tập</h2>
    <div class="card">
      ${g.quiz.map((q, qi) => `
        <div class="q" data-q="${qi}">
          <div class="qt">${qi + 1}. ${esc(q[0])}</div>
          <div class="opts">${q[1].map((o, oi) => `<button class="opt" data-o="${oi}">${esc(o)}</button>`).join('')}</div>
          <div class="explain" hidden></div>
        </div>`).join('')}
      <div id="score" class="center" style="font-weight:600"></div>
    </div>`;
  $$('.q').forEach(qEl => {
    const qi = +qEl.dataset.q;
    const q = g.quiz[qi];
    $$('.opt', qEl).forEach(b => b.onclick = () => {
      const oi = +b.dataset.o;
      answers[qi] = oi === q[2];
      $$('.opt', qEl).forEach((x, k) => {
        x.disabled = true;
        if (k === q[2]) x.classList.add('right');
        else if (k === oi) x.classList.add('wrong');
      });
      const ex = $('.explain', qEl);
      ex.hidden = false;
      ex.textContent = (answers[qi] ? '✅ ' : '❌ ') + q[3];
      if (answers.filter(a => a !== undefined).length === g.quiz.length) {
        const s = answers.filter(Boolean).length;
        const gp = store.get('gprog', {});
        gp[g.id] = Math.max(s, gp[g.id] || 0);
        store.set('gprog', gp);
        logActivity('lessons');
        $('#score').innerHTML = `Kết quả: ${s}/${g.quiz.length} ${s === g.quiz.length ? '🎉' : '💪'}
          <div class="row" style="justify-content:center;margin-top:10px">
            <button class="btn small" onclick="router()">Làm lại</button>
            <a class="btn small primary" href="#/grammar">Bài khác</a></div>`;
      }
    });
  });
}

/* ---------- Cài đặt ---------- */
function settingsView() {
  view.innerHTML = `
    ${topbar('Cài đặt', '#/')}
    <div class="card">
      <div class="field"><label for="acc">Giọng đọc</label>
        <select id="acc"><option value="en-GB">Anh – Anh (UK)</option><option value="en-US">Anh – Mỹ (US)</option></select></div>
      <div class="field"><label for="rate">Tốc độ đọc: <span id="rv"></span></label>
        <input type="range" id="rate" min="0.5" max="1.2" step="0.05"></div>
      <button class="btn small" id="test">🔊 Nghe thử</button>
    </div>
    <div class="card">
      <div class="field"><label for="npd">Số từ mới mỗi ngày</label>
        <input type="number" id="npd" min="1" max="50" style="width:90px"></div>
    </div>
    <div class="card">
      <label style="font-weight:600;display:block;margin-bottom:6px">Sao lưu tiến độ</label>
      <p class="muted small" style="margin-top:0">Tiến độ chỉ lưu trên máy này. Hãy xuất file để chuyển sang máy khác.</p>
      <div class="row">
        <button class="btn small" id="exp">⬇️ Xuất file</button>
        <label class="btn small" style="margin:0">⬆️ Nhập file<input type="file" id="imp" accept=".json" hidden></label>
        <button class="btn small" id="reset" style="color:var(--danger)">Xóa tiến độ</button>
      </div>
    </div>`;
  const acc = $('#acc'), rate = $('#rate'), npd = $('#npd');
  acc.value = settings.accent; rate.value = settings.rate; npd.value = settings.newPerDay;
  $('#rv').textContent = settings.rate + 'x';
  acc.onchange = () => { settings.accent = acc.value; saveSettings(); };
  rate.oninput = () => { settings.rate = +rate.value; $('#rv').textContent = settings.rate + 'x'; saveSettings(); };
  npd.onchange = () => { settings.newPerDay = Math.max(1, Math.min(50, +npd.value || 10)); npd.value = settings.newPerDay; saveSettings(); };
  $('#test').onclick = () => speak('Hello! Nice to meet you.');
  $('#exp').onclick = () => {
    const data = {};
    ['settings', 'srs', 'sprog', 'gprog', 'days', 'newToday'].forEach(k => { data[k] = store.get(k, null); });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(data)], { type: 'application/json' }));
    a.download = `hoc-tieng-anh-${dayKey()}.json`;
    a.click();
  };
  $('#imp').onchange = async e => {
    try {
      const data = JSON.parse(await e.target.files[0].text());
      Object.entries(data).forEach(([k, v]) => { if (v != null) store.set(k, v); });
      toast('Đã nhập tiến độ. Đang tải lại…');
      setTimeout(() => location.reload(), 800);
    } catch { toast('File không hợp lệ'); }
  };
  $('#reset').onclick = () => {
    if (!confirm('Xóa toàn bộ tiến độ học? Việc này không thể hoàn tác.')) return;
    ['srs', 'sprog', 'gprog', 'days', 'newToday'].forEach(k => store.set(k, null));
    toast('Đã xóa tiến độ');
  };
}

/* ---------- Khởi động ---------- */
router();
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
