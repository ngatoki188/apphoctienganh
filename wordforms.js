// Họ từ (word families) cho bài tập loại từ.
// n = danh từ, v = động từ, adj = tính từ, adv = trạng từ ('' nếu không dùng)
// s = câu luyện tập: [câu có ___, loại từ cần điền, giải thích vị trí]
const WORD_FAMILIES = [
  { vi: 'quyết định', n: 'decision', v: 'decide', adj: 'decisive', adv: 'decisively', s: [
    ['The board will make a final ___ next week.', 'n', 'sau "a final" (mạo từ + tính từ) → danh từ'],
    ['We need to ___ which supplier to use.', 'v', 'sau "to" → động từ nguyên mẫu'],
    ['She is a ___ leader.', 'adj', 'trước danh từ "leader" → tính từ'],
    ['The manager acted ___ during the crisis.', 'adv', 'sau động từ "acted" → trạng từ'],
  ]},
  { vi: 'thành công', n: 'success', v: 'succeed', adj: 'successful', adv: 'successfully', s: [
    ['The product launch was a great ___.', 'n', 'sau "a great" → danh từ'],
    ['The new campaign was very ___.', 'adj', 'sau "was very" → tính từ'],
    ['The team ___ completed the project.', 'adv', 'đứng trước động từ "completed" → trạng từ'],
    ['Everyone wants the new branch to ___.', 'v', 'sau "to" → động từ'],
  ]},
  { vi: 'tạo ra, sáng tạo', n: 'creation', v: 'create', adj: 'creative', adv: 'creatively', s: [
    ['The ___ of new jobs is our main goal.', 'n', 'sau "The", trước "of" → danh từ'],
    ['We are looking for a ___ designer.', 'adj', 'trước danh từ "designer" → tính từ'],
    ['The office was ___ decorated.', 'adv', 'giữa "was" và "decorated" (câu bị động) → trạng từ'],
    ['The company plans to ___ fifty new jobs.', 'v', 'sau "to" → động từ'],
  ]},
  { vi: 'sản xuất, năng suất', n: 'production', v: 'produce', adj: 'productive', adv: 'productively', s: [
    ['___ increased by ten percent last year.', 'n', 'đứng đầu câu, làm chủ ngữ → danh từ'],
    ['It was a very ___ meeting.', 'adj', 'sau "very", trước danh từ "meeting" → tính từ'],
    ['Staff work more ___ in a quiet office.', 'adv', 'bổ nghĩa cho động từ "work" → trạng từ'],
  ]},
  { vi: 'hiệu quả', n: 'efficiency', v: '', adj: 'efficient', adv: 'efficiently', s: [
    ['The new software improved our ___.', 'n', 'sau tính từ sở hữu "our" → danh từ'],
    ['This printer is more ___ than the old one.', 'adj', 'sau "is more" (so sánh hơn) → tính từ'],
    ['Please use energy ___.', 'adv', 'bổ nghĩa cho động từ "use" → trạng từ'],
  ]},
  { vi: 'thu hút', n: 'attraction', v: 'attract', adj: 'attractive', adv: 'attractively', s: [
    ['The museum is the main tourist ___ in the city.', 'n', 'cuối cụm "the main tourist ___" → danh từ'],
    ['The company offers an ___ salary.', 'adj', 'giữa "an" và danh từ "salary" → tính từ'],
    ['We need to ___ more customers.', 'v', 'sau "to" → động từ'],
    ['The products are ___ displayed.', 'adv', 'giữa "are" và "displayed" → trạng từ'],
  ]},
  { vi: 'cạnh tranh', n: 'competition', v: 'compete', adj: 'competitive', adv: 'competitively', s: [
    ['There is strong ___ in the market.', 'n', 'sau tính từ "strong" → danh từ'],
    ['We offer ___ prices.', 'adj', 'trước danh từ "prices" → tính từ'],
    ['Small shops cannot ___ with supermarkets.', 'v', 'sau "cannot" → động từ nguyên mẫu'],
    ['Our products are ___ priced.', 'adv', 'giữa "are" và "priced" → trạng từ'],
  ]},
  { vi: 'thông tin', n: 'information', v: 'inform', adj: 'informative', adv: '', s: [
    ['For more ___, please visit our website.', 'n', 'sau "more", nằm trong cụm giới từ "For…" → danh từ'],
    ['The presentation was very ___.', 'adj', 'sau "was very" → tính từ'],
    ['Please ___ us of any changes.', 'v', 'sau "Please" (câu mệnh lệnh) → động từ'],
  ]},
  { vi: 'đáng tin cậy', n: 'reliability', v: 'rely', adj: 'reliable', adv: 'reliably', s: [
    ['Customers value the ___ of our products.', 'n', 'sau "the", trước "of" → danh từ'],
    ['We need a ___ supplier.', 'adj', 'giữa "a" và danh từ "supplier" → tính từ'],
    ['The machine works ___.', 'adv', 'sau động từ "works" → trạng từ'],
    ['You can ___ on our team.', 'v', 'sau "can" → động từ'],
  ]},
  { vi: 'chính xác', n: 'accuracy', v: '', adj: 'accurate', adv: 'accurately', s: [
    ['Please check the ___ of the figures.', 'n', 'sau "the", trước "of" → danh từ'],
    ['The report must be ___.', 'adj', 'sau "be" → tính từ'],
    ['Please fill in the form ___.', 'adv', 'bổ nghĩa cho động từ "fill in" → trạng từ'],
  ]},
  { vi: 'mở rộng, gia hạn', n: 'extension', v: 'extend', adj: 'extensive', adv: 'extensively', s: [
    ['He asked for an ___ of the deadline.', 'n', 'sau "an" → danh từ'],
    ['She has ___ experience in sales.', 'adj', 'trước danh từ "experience" → tính từ'],
    ['The product was ___ tested.', 'adv', 'giữa "was" và "tested" → trạng từ'],
    ['We will ___ the contract for another year.', 'v', 'sau "will" → động từ'],
  ]},
  { vi: 'ấn tượng', n: 'impression', v: 'impress', adj: 'impressive', adv: 'impressively', s: [
    ['She made a good ___ at the interview.', 'n', 'sau "a good" → danh từ'],
    ['The sales figures are ___.', 'adj', 'sau "are" → tính từ'],
    ['The team performed ___ this year.', 'adv', 'sau động từ "performed" → trạng từ'],
  ]},
  { vi: 'hài lòng', n: 'satisfaction', v: 'satisfy', adj: 'satisfactory', adv: 'satisfactorily', s: [
    ['Customer ___ is our top priority.', 'n', 'cụm danh từ "Customer ___" làm chủ ngữ → danh từ'],
    ['The results were ___.', 'adj', 'sau "were" → tính từ'],
    ['Our goal is to ___ every customer.', 'v', 'sau "to" → động từ'],
    ['The problem was resolved ___.', 'adv', 'bổ nghĩa cho "was resolved" → trạng từ'],
  ]},
  { vi: 'cân nhắc; đáng kể', n: 'consideration', v: 'consider', adj: 'considerable', adv: 'considerably', s: [
    ['Thank you for your ___.', 'n', 'sau "your" → danh từ'],
    ['The project required a ___ amount of time.', 'adj', 'giữa "a" và danh từ "amount" → tính từ'],
    ['Sales have increased ___ this year.', 'adv', 'bổ nghĩa cho "have increased" → trạng từ'],
    ['Please ___ our offer carefully.', 'v', 'sau "Please" → động từ'],
  ]},
  { vi: 'ưa thích hơn', n: 'preference', v: 'prefer', adj: 'preferable', adv: 'preferably', s: [
    ['Please tell us your seating ___.', 'n', 'sau "your seating" → danh từ'],
    ['Morning flights are ___ to evening ones.', 'adj', 'sau "are", đi với "to" → tính từ'],
    ['Applicants should ___ have a degree.', 'adv', 'giữa "should" và "have" → trạng từ'],
    ['Many customers ___ online shopping.', 'v', 'sau chủ ngữ "Many customers" → động từ'],
  ]},
  { vi: 'phản hồi', n: 'response', v: 'respond', adj: 'responsive', adv: 'responsively', s: [
    ['We are waiting for a ___ from the client.', 'n', 'sau "a" → danh từ'],
    ['Our support team is very ___.', 'adj', 'sau "is very" → tính từ'],
    ['Please ___ to this email by Friday.', 'v', 'sau "Please" → động từ'],
  ]},
  { vi: 'đổi mới', n: 'innovation', v: 'innovate', adj: 'innovative', adv: 'innovatively', s: [
    ['___ is the key to our success.', 'n', 'đứng đầu câu, làm chủ ngữ → danh từ'],
    ['The company is known for its ___ products.', 'adj', 'trước danh từ "products" → tính từ'],
    ['Companies must ___ to survive.', 'v', 'sau "must" → động từ'],
  ]},
  { vi: 'mạnh', n: 'strength', v: 'strengthen', adj: 'strong', adv: 'strongly', s: [
    ['Good customer service is our greatest ___.', 'n', 'sau "our greatest" → danh từ'],
    ['There is a ___ demand for this product.', 'adj', 'giữa "a" và danh từ "demand" → tính từ'],
    ['I ___ recommend this hotel.', 'adv', 'giữa chủ ngữ và động từ "recommend" → trạng từ'],
    ['We want to ___ our position in the market.', 'v', 'sau "to" → động từ'],
  ]},
  { vi: 'rộng', n: 'width', v: 'widen', adj: 'wide', adv: 'widely', s: [
    ['Please measure the ___ of the room.', 'n', 'sau "the", trước "of" → danh từ'],
    ['We offer a ___ range of products.', 'adj', 'giữa "a" và danh từ "range" → tính từ'],
    ['The software is ___ used in Vietnam.', 'adv', 'giữa "is" và "used" → trạng từ'],
    ['The city plans to ___ the road.', 'v', 'sau "to" → động từ'],
  ]},
  { vi: 'đơn giản', n: 'simplicity', v: 'simplify', adj: 'simple', adv: 'simply', s: [
    ['Customers love the ___ of the design.', 'n', 'sau "the", trước "of" → danh từ'],
    ['The instructions are very ___.', 'adj', 'sau "are very" → tính từ'],
    ['___ click the button to start.', 'adv', 'đứng trước động từ "click" trong câu mệnh lệnh → trạng từ'],
    ['We need to ___ the process.', 'v', 'sau "to" → động từ'],
  ]},
  { vi: 'rõ ràng', n: 'clarity', v: 'clarify', adj: 'clear', adv: 'clearly', s: [
    ['The new layout improves the ___ of the report.', 'n', 'sau "the", trước "of" → danh từ'],
    ['The instructions were not ___.', 'adj', 'sau "were not" → tính từ'],
    ['Please speak ___.', 'adv', 'bổ nghĩa cho động từ "speak" → trạng từ'],
    ['Could you ___ the point you made?', 'v', 'sau "Could you" → động từ'],
  ]},
  { vi: 'kinh tế, tiết kiệm', n: 'economy', v: 'economize', adj: 'economic', adv: 'economically', s: [
    ['The ___ is growing quickly.', 'n', 'sau "The", làm chủ ngữ → danh từ'],
    ['The country faces serious ___ problems.', 'adj', 'trước danh từ "problems" → tính từ'],
    ['The region is ___ strong.', 'adv', 'đứng trước tính từ "strong" → trạng từ'],
    ['We must ___ on energy costs.', 'v', 'sau "must" → động từ'],
  ]},
  { vi: 'vận hành', n: 'operation', v: 'operate', adj: 'operational', adv: 'operationally', s: [
    ['The ___ of this machine is simple.', 'n', 'sau "The", trước "of" → danh từ'],
    ['The new plant will be fully ___ next month.', 'adj', 'sau "be fully" → tính từ'],
    ['Only trained staff can ___ this machine.', 'v', 'sau "can" → động từ'],
  ]},
  { vi: 'khác biệt', n: 'difference', v: 'differ', adj: 'different', adv: 'differently', s: [
    ['What is the ___ between these two models?', 'n', 'sau "the" → danh từ'],
    ['We offer three ___ plans.', 'adj', 'trước danh từ "plans" → tính từ'],
    ['Each customer is treated ___.', 'adv', 'sau "is treated" → trạng từ'],
  ]},
  { vi: 'đa dạng', n: 'variety', v: 'vary', adj: 'various', adv: 'variously', s: [
    ['The store sells a wide ___ of goods.', 'n', 'sau "a wide", trước "of" → danh từ'],
    ['We have offices in ___ countries.', 'adj', 'trước danh từ "countries" → tính từ'],
    ['Prices ___ from season to season.', 'v', 'sau chủ ngữ "Prices" → động từ'],
  ]},
  { vi: 'thuận tiện', n: 'convenience', v: '', adj: 'convenient', adv: 'conveniently', s: [
    ['Please reply at your earliest ___.', 'n', 'sau "your earliest" → danh từ'],
    ['Is Monday ___ for you?', 'adj', 'sau "Is Monday" (sau to be) → tính từ'],
    ['The hotel is ___ located near the airport.', 'adv', 'giữa "is" và "located" → trạng từ'],
  ]},
  { vi: 'thường xuyên', n: 'frequency', v: '', adj: 'frequent', adv: 'frequently', s: [
    ['The ___ of meetings has increased.', 'n', 'sau "The", trước "of" → danh từ'],
    ['___ customers receive a discount.', 'adj', 'trước danh từ "customers" → tính từ'],
    ['The bus runs ___.', 'adv', 'sau động từ "runs" → trạng từ'],
  ]},
  { vi: 'có thể', n: 'possibility', v: '', adj: 'possible', adv: 'possibly', s: [
    ['We are discussing the ___ of a merger.', 'n', 'sau "the", trước "of" → danh từ'],
    ['Please reply as soon as ___.', 'adj', 'cụm cố định "as soon as possible" → tính từ'],
    ['The meeting will ___ be postponed.', 'adv', 'giữa "will" và "be" → trạng từ'],
  ]},
  { vi: 'trách nhiệm', n: 'responsibility', v: '', adj: 'responsible', adv: 'responsibly', s: [
    ["Safety is everyone's ___.", 'n', `sau sở hữu "everyone's" → danh từ`],
    ['Who is ___ for this project?', 'adj', 'sau "is", đi với "for" → tính từ'],
    ['Please use company resources ___.', 'adv', 'bổ nghĩa cho động từ "use" → trạng từ'],
  ]},
  { vi: 'chấp nhận', n: 'acceptance', v: 'accept', adj: 'acceptable', adv: 'acceptably', s: [
    ['We received your letter of ___.', 'n', 'sau giới từ "of" → danh từ'],
    ['The price is ___ to both sides.', 'adj', 'sau "is" → tính từ'],
    ['We cannot ___ late applications.', 'v', 'sau "cannot" → động từ'],
  ]},
  { vi: 'hào phóng', n: 'generosity', v: '', adj: 'generous', adv: 'generously', s: [
    ['Thank you for your ___.', 'n', 'sau "your" → danh từ'],
    ['The company offers a ___ bonus.', 'adj', 'giữa "a" và danh từ "bonus" → tính từ'],
    ['Donors gave ___ to the charity.', 'adv', 'sau động từ "gave" → trạng từ'],
  ]},
  { vi: 'nghề nghiệp, chuyên nghiệp', n: 'profession', v: '', adj: 'professional', adv: 'professionally', s: [
    ['Teaching is a rewarding ___.', 'n', 'sau "a rewarding" → danh từ'],
    ['Please behave in a ___ manner.', 'adj', 'giữa "a" và danh từ "manner" → tính từ'],
    ['The staff handled the complaint ___.', 'adv', 'cuối câu, bổ nghĩa cho "handled" → trạng từ'],
  ]},
  { vi: 'môi trường', n: 'environment', v: '', adj: 'environmental', adv: 'environmentally', s: [
    ['We must protect the ___.', 'n', 'sau "the", làm tân ngữ → danh từ'],
    ['The factory follows strict ___ rules.', 'adj', 'trước danh từ "rules" → tính từ'],
    ['Our packaging is ___ friendly.', 'adv', 'đứng trước tính từ "friendly" → trạng từ'],
  ]},
  { vi: 'xuất sắc', n: 'excellence', v: 'excel', adj: 'excellent', adv: 'excellently', s: [
    ['The award recognizes ___ in customer service.', 'n', 'sau động từ "recognizes", làm tân ngữ → danh từ'],
    ['She has ___ communication skills.', 'adj', 'trước cụm danh từ "communication skills" → tính từ'],
    ['He continues to ___ in his new role.', 'v', 'sau "to" → động từ'],
  ]},
  { vi: 'tự tin', n: 'confidence', v: '', adj: 'confident', adv: 'confidently', s: [
    ['She speaks with great ___.', 'n', 'sau "great", trong cụm giới từ "with…" → danh từ'],
    ['We are ___ that sales will rise.', 'adj', 'sau "are" → tính từ'],
    ['He answered the questions ___.', 'adv', 'cuối câu, bổ nghĩa cho "answered" → trạng từ'],
  ]},
  { vi: 'phân tích', n: 'analysis', v: 'analyze', adj: 'analytical', adv: 'analytically', s: [
    ['The ___ shows a rise in sales.', 'n', 'sau "The", làm chủ ngữ → danh từ'],
    ['The job requires strong ___ skills.', 'adj', 'trước danh từ "skills" → tính từ'],
    ['We need to ___ the data carefully.', 'v', 'sau "to" → động từ'],
  ]},
  { vi: 'thuyết phục', n: 'persuasion', v: 'persuade', adj: 'persuasive', adv: 'persuasively', s: [
    ['She gave a very ___ presentation.', 'adj', 'sau "very", trước danh từ "presentation" → tính từ'],
    ['He argued ___ for the new plan.', 'adv', 'sau động từ "argued" → trạng từ'],
    ['We tried to ___ the client to sign.', 'v', 'sau "to" → động từ'],
  ]},
  { vi: 'chiến lược', n: 'strategy', v: '', adj: 'strategic', adv: 'strategically', s: [
    ['We need a new marketing ___.', 'n', 'cuối cụm "a new marketing ___" → danh từ'],
    ['The store is in a ___ location.', 'adj', 'giữa "a" và danh từ "location" → tính từ'],
    ['The office is ___ located in the city centre.', 'adv', 'giữa "is" và "located" → trạng từ'],
  ]},
  { vi: 'cảm kích', n: 'appreciation', v: 'appreciate', adj: 'appreciative', adv: 'appreciatively', s: [
    ['Please accept this gift as a token of our ___.', 'n', 'sau "our" → danh từ'],
    ['We are very ___ of your help.', 'adj', 'sau "are very" → tính từ'],
    ['We ___ your patience.', 'v', 'sau chủ ngữ "We" → động từ'],
  ]},
  { vi: 'đàm phán', n: 'negotiation', v: 'negotiate', adj: 'negotiable', adv: '', s: [
    ['The ___ lasted three hours.', 'n', 'sau "The", làm chủ ngữ → danh từ'],
    ['The salary is ___.', 'adj', 'sau "is" → tính từ'],
    ['We hope to ___ a better price.', 'v', 'sau "to" → động từ'],
  ]},
];
