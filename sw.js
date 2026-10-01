// Service worker: lưu app vào bộ nhớ đệm để dùng offline.
// Khi sửa nội dung, tăng số phiên bản để máy người dùng tải bản mới.
const CACHE = 'hoc-tieng-anh-v2';
const ASSETS = [
  './', './index.html', './style.css', './app.js', './data.js', './toeic-words.js', './manifest.webmanifest',
  './icons/icon.svg', './icons/icon-192.png', './icons/icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Có mạng thì lấy bản mới nhất (và lưu lại), mất mạng thì dùng bản đã lưu.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    caches.open(CACHE).then(cache =>
      fetch(e.request).then(res => {
        if (res.ok) cache.put(e.request, res.clone());
        return res;
      }).catch(() => cache.match(e.request, { ignoreSearch: true }))
    )
  );
});
