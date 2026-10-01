// Từ điển bổ sung để tra nghĩa khi chạm vào từ (ngoài từ vựng và họ từ đã có).
// Mỗi dòng: từ|loại từ|nghĩa
const DICT_TEXT = `
a|det|một
abandon|v|từ bỏ, bỏ dở
ability|n|khả năng
about|prep|về; khoảng
accountability|n|trách nhiệm giải trình
accountable|adj|có trách nhiệm (giải trình)
achieve|v|đạt được
achievement|n|thành tựu
acquire|v|có được; mua lại
act|v|hành động
active|adj|tích cực, chủ động
add|v|thêm
additional|adj|thêm, bổ sung
address|n/v|địa chỉ; giải quyết
addressee|n|người nhận
admission|n|sự cho vào; phí vào cửa
admit|v|thừa nhận; cho vào
advance|n/v|khoản ứng trước; tiến lên
advantage|n|lợi thế
advice|n|lời khuyên
advise|v|khuyên
adviser|n|cố vấn
affordable|adj|giá phải chăng
afraid|adj|sợ; e rằng (I'm afraid…)
after|prep|sau, sau khi
afternoon|n|buổi chiều
age|n|tuổi
agency|n|công ty, cơ quan
agent|n|đại lý, người đại diện
ago|adv|cách đây
agree|v|đồng ý
ahead|adv|phía trước, sớm hơn
aim|n/v|mục tiêu; nhắm tới
air|n|không khí; hàng không
airport|n|sân bay
all|det|tất cả
allocate|v|phân bổ
allowance|n|trợ cấp, hạn mức
already|adv|đã, rồi
always|adv|luôn luôn
amend|v|sửa đổi
amount|n|số lượng, khoản
an|det|một (trước nguyên âm)
and|conj|và
announcement|n|thông báo
annual|adj|hằng năm
another|det|khác, thêm một
any|det|bất kỳ, nào
anyone|pron|bất kỳ ai
anything|pron|bất cứ thứ gì
app|n|ứng dụng
apply|v|nộp đơn; áp dụng
appointment|n|cuộc hẹn
approach|n/v|cách tiếp cận; tiếp cận
approximation|n|sự ước lượng
argue|v|tranh luận, lập luận
arrangement|n|sự sắp xếp
arrive|v|đến nơi
article|n|bài báo; mặt hàng
as|conj|như; khi; với tư cách
ask|v|hỏi; yêu cầu
assembly|n|sự lắp ráp; hội đồng
assess|v|đánh giá
associate|n|cộng sự, đồng nghiệp
at|prep|ở, tại; lúc
attendee|n|người tham dự
attorney|n|luật sư
audience|n|khán giả, đối tượng
auditor|n|kiểm toán viên
authorization|n|sự cho phép
authorize|v|ủy quyền, cho phép
autograph|n|chữ ký (người nổi tiếng)
awareness|n|nhận thức
back|adv|lại, trở lại
background|n|nền tảng, lý lịch
badge|n|thẻ, huy hiệu
badly|adv|tệ, nặng
baggage|n|hành lý
ball|n|quả bóng
bank|n|ngân hàng
bargain|n/v|món hời; mặc cả
base|v|đặt (trụ sở) tại
bath|n|bồn tắm; việc tắm
be|v|thì, là, ở
because|conj|bởi vì
before|prep|trước, trước khi
behave|v|cư xử
behaviour|n|hành vi
behind|prep|phía sau; chậm
between|prep|giữa
bill|n|hóa đơn
bird|n|con chim
birthday|n|sinh nhật
blue|adj|màu xanh dương
bonus|n|tiền thưởng
bookkeeper|n|người giữ sổ sách
border|n|biên giới
boss|n|sếp
both|det|cả hai
bother|n/v|sự phiền; làm phiền
box|n|cái hộp
boy|n|cậu bé
break|n/v|giờ nghỉ; làm vỡ, vi phạm
breakdown|n|sự hỏng hóc
briefly|adv|ngắn gọn
bring|v|mang theo
broken|adj|bị vỡ, hỏng
brown|adj|màu nâu
build|v|xây dựng
building|n|tòa nhà
bundle|n|bó, gói
bus|n|xe buýt
business|n|kinh doanh, doanh nghiệp
busy|adj|bận
button|n|nút
buyer|n|người mua
by|prep|bởi, bằng; trước (thời hạn)
call|v/n|gọi; cuộc gọi
can|modal|có thể
cannot|modal|không thể
can't|modal|không thể (= cannot)
card|n|thẻ
carefully|adv|cẩn thận
carry-on|adj|xách tay
cash|n|tiền mặt
cat|n|con mèo
cause|v/n|gây ra; nguyên nhân
celebration|n|lễ kỷ niệm
centre|n|trung tâm
ceo|n|giám đốc điều hành
certificate|n|chứng chỉ, giấy chứng nhận
change|v/n|thay đổi; sự thay đổi
channel|n|kênh
characteristic|n|đặc điểm
charge|n/v|phí; tính phí
charity|n|tổ chức từ thiện
check|v|kiểm tra
check-out|n|thủ tục trả phòng
chemical|adj|thuộc hóa chất
chief|adj|trưởng, chính
class|n|lớp học
click|v|nhấp, bấm
client|n|khách hàng
close|v/adj|đóng; thân, gần
closing|adj|bế mạc, kết thúc
clothing|n|quần áo
cloud|n|đám mây
coaching|n|sự huấn luyện
coin|n|đồng xu
commemorate|v|tưởng niệm, kỷ niệm
comment|n|bình luận, góp ý
communication|n|sự giao tiếp
compensate|v|bồi thường
competent|adj|có năng lực
complaint|n|lời phàn nàn, khiếu nại
complete|v/adj|hoàn thành; đầy đủ
compliance|n|sự tuân thủ
compromise|v|thỏa hiệp; hạ thấp
compulsory|adj|bắt buộc
computerize|v|tin học hóa
concerning|prep|về, liên quan đến
condition|n|điều kiện
conduct|v|tiến hành
confirmation|n|sự xác nhận
connect|v|kết nối
consignment|n|lô hàng gửi
consistent|adj|nhất quán
consult|v|hỏi ý kiến
consultation|n|buổi tư vấn
continue|v|tiếp tục
control|n/v|sự kiểm soát; kiểm soát
convention|n|hội nghị lớn
cook|v/n|nấu ăn; đầu bếp
copy|n/v|bản sao; sao chép
cordless|adj|không dây
cost|n/v|chi phí; có giá
could|modal|có thể (lịch sự / quá khứ của can)
counter|n|quầy
country|n|đất nước
course|n|khóa học; món (ăn)
cover|v|chi trả; bao gồm
coworker|n|đồng nghiệp
credit|n|tín dụng
crisis|n|khủng hoảng
cry|v|khóc
cup|n|cái cốc, tách
current|adj|hiện tại
curriculum|n|chương trình học
cut|n/v|sự cắt giảm; cắt
cv|n|sơ yếu lý lịch
daily|adj|hằng ngày
danger|n|mối nguy hiểm
data|n|dữ liệu
date|n|ngày tháng
deal|n/v|thỏa thuận; giải quyết (deal with)
dear|adj|kính gửi, thân mến
debate|n/v|cuộc tranh luận; tranh luận
declare|v|tuyên bố
decline|v|từ chối; giảm
decorate|v|trang trí
degree|n|bằng cấp
delegate|n/v|đại biểu; ủy thác
delicious|adj|ngon
delivery|n|sự giao hàng
departure|n|sự khởi hành
depot|n|kho, trạm
design|n/v|thiết kế
designer|n|nhà thiết kế
desk|n|bàn làm việc
detail|n|chi tiết
detailed|adj|chi tiết
develop|v|phát triển
developer|n|nhà phát triển, lập trình viên
didn't|aux|đã không (= did not)
disagree|v|không đồng ý
dispatcher|n|người điều phối, gửi hàng
display|v/n|trưng bày; sự trưng bày
distribution|n|sự phân phối
division|n|bộ phận, phòng ban
do|v|làm; trợ động từ
doesn't|aux|không (= does not)
dog|n|con chó
dollar|n|đô la
dong|n|đồng (tiền Việt)
donor|n|người quyên góp, nhà tài trợ
don't|aux|không (= do not)
down|adv|xuống; (máy) bị sập
downtown|adv|ở trung tâm thành phố
drive|v|lái xe
driving|n|việc lái xe
due|adj|đến hạn; do (due to)
during|prep|trong suốt
duty|n|nhiệm vụ; thuế
each|det|mỗi
ear|n|cái tai
early|adj|sớm
earnings|n|thu nhập
effective|adj|hiệu quả; có hiệu lực
eight|num|tám
eighty|num|tám mươi
electric|adj|(chạy bằng) điện
electronic|adj|điện tử
element|n|yếu tố
eleven|num|mười một
eligible|adj|đủ điều kiện
else|adv|khác
email|n/v|thư điện tử; gửi email
embark|v|lên (tàu, máy bay)
employ|v|thuê, tuyển dụng
enclosure|n|tài liệu gửi kèm
end|n/v|phần cuối; kết thúc
energy|n|năng lượng
energy-efficient|adj|tiết kiệm năng lượng
english|n|tiếng Anh
enrol|v|đăng ký (học)
enter|v|nhập; đi vào
entrance|n|lối vào
entry|n|sự vào; mục
evening|n|buổi tối
event|n|sự kiện
ever|adv|từng
every|det|mỗi, mọi
everyone|pron|mọi người
examine|v|xem xét, kiểm tra
example|n|ví dụ
excuse|v|thứ lỗi (excuse me: xin lỗi)
exit|n|lối ra
expenditure|n|khoản chi tiêu
expertise|n|chuyên môn
expiry|n|sự hết hạn
explain|v|giải thích
express|v|bày tỏ
extra|adj|thêm
face|v|đối mặt
fast|adj|nhanh
fault|n|lỗi
faulty|adj|bị lỗi
feast|n|bữa tiệc lớn
fifteen|num|mười lăm
fifty|num|năm mươi
figure|n|số liệu
file|n/v|tệp, hồ sơ; lưu
fill|v|điền (fill in)
film|n|bộ phim
final|adj|cuối cùng
finance|n/v|tài chính; cấp vốn
financial|adj|thuộc tài chính
find|v|tìm thấy
finish|v|hoàn thành
fire|n/v|lửa, cháy; sa thải
first|adj|đầu tiên
fit|v|lắp; vừa
five|num|năm
fix|v|sửa
floor|n|tầng; sàn
follow|v|theo, làm theo
follow-up|adj|tiếp theo, liên hệ lại
food-related|adj|liên quan đến ăn uống
football|n|bóng đá
for|prep|cho; trong (khoảng thời gian)
forget|v|quên
form|n|mẫu đơn
former|adj|cũ, trước đây
four|num|bốn
free|adj|miễn phí; rảnh
friday|n|thứ Sáu
fried|adj|chiên, rán
friendly|adj|thân thiện
from|prep|từ
front|n|phía trước
fruit|n|trái cây
full|adj|đầy, toàn bộ
full-time|adj|toàn thời gian
fully|adv|hoàn toàn
function|n|chức năng
fund|n/v|quỹ; tài trợ
future|n|tương lai
gadget|n|đồ dùng công nghệ
gain|n|lợi ích, phần lãi
gear|n|đồ dùng, trang bị
general|adj|chung
generate|v|tạo ra
get|v|nhận được; đến; trở nên
gift|n|quà tặng
give|v|đưa, cho
goal|n|mục tiêu
grade|n|cấp độ, loại
grandparents|n|ông bà
grateful|adj|biết ơn
great|adj|tuyệt vời; lớn
greatly|adv|rất nhiều
grow|v|tăng trưởng, phát triển
guarantee|n/v|sự bảo đảm; bảo đảm
guide|n|người hướng dẫn; sách hướng dẫn
guideline|n|hướng dẫn, quy tắc
hair|n|tóc
hall|n|sảnh, hội trường
hand|n/v|bàn tay; đưa (hand in: nộp)
hanoi|n|Hà Nội
harm|v|làm hại
harmony|n|sự hòa hợp
hat|n|cái mũ
have|v|có; trợ động từ
he|pron|anh ấy, ông ấy
head|n|người đứng đầu
health|n|sức khỏe
hear|v|nghe
heavily|adv|nhiều, nặng nề
heavy|adj|nặng
her|pron|cô ấy; của cô ấy
here|adv|ở đây
high|adj|cao
highly|adv|rất, ở mức cao
him|pron|anh ấy (tân ngữ)
his|det|của anh ấy
hold|v|tổ chức; giữ (hold the line: giữ máy)
hold-up|n|sự chậm trễ
holiday|n|kỳ nghỉ, ngày lễ
home|n|nhà
homework|n|bài tập về nhà
honour|n|vinh dự
hope|v|hy vọng
hotel|n|khách sạn
hour|n|giờ, tiếng
how|adv|như thế nào
i|pron|tôi
i'd|pron|tôi muốn / tôi sẽ (= I would)
i'm|pron|tôi là / tôi đang (= I am)
id|n|giấy tờ tùy thân
idea|n|ý tưởng
ideal|adj|lý tưởng
if|conj|nếu
image|n|hình ảnh
immediate|adj|ngay lập tức; trực tiếp
immediately|adv|ngay lập tức
import|n/v|hàng nhập khẩu; nhập khẩu
important|adj|quan trọng
impose|v|áp đặt
improve|v|cải thiện
in|prep|trong, ở
include|v|bao gồm
income|n|thu nhập
increase|v/n|tăng; sự tăng
induction|n|buổi hội nhập (nhân viên mới)
inspection|n|sự kiểm tra
instruction|n|hướng dẫn
insurance|n|bảo hiểm
intend|v|dự định
interim|adj|tạm thời
internal|adj|nội bộ
international|adj|quốc tế
internet|n|mạng internet
introduce|v|giới thiệu
introduction|n|sự giới thiệu
investment|n|sự đầu tư
invite|v|mời
isn't|v|không phải là (= is not)
issue|v/n|phát hành; vấn đề
it|pron|nó
its|det|của nó
japan|n|Nhật Bản
journey|n|chuyến đi
jubilee|n|lễ kỷ niệm
judge|v|đánh giá
june|n|tháng Sáu
just|adv|vừa mới; chỉ
keep|v|giữ
kind|adj|tốt bụng
label|n|nhãn
land|v|hạ cánh
laptop|n|máy tính xách tay
large|adj|lớn
last|adj/v|cuối, vừa qua; kéo dài
late|adj|muộn
latest|adj|mới nhất
law|n|luật
lawful|adj|hợp pháp
layout|n|bố cục
leader|n|người lãnh đạo
leadership|n|khả năng lãnh đạo
leaflet|n|tờ rơi
learn|v|học
leave|v|rời đi; để lại
lecture|n|bài giảng
leg|n|cái chân
legitimate|adj|hợp pháp, chính đáng
let|v|để, cho phép
let's|v|chúng ta hãy (= let us)
letter|n|lá thư
level|n|mức độ
levy|n|thuế, khoản thu
light|adj|nhẹ
limit|n|giới hạn
limitation|n|sự hạn chế
line|n|đường dây; hàng; dòng
link|n|liên kết
list|n|danh sách
live|v|sống
local|adj|địa phương
locate|v|đặt ở (be located: nằm ở)
location|n|địa điểm
lodging|n|chỗ ở
log|v|ghi lại (log in: đăng nhập)
login|n|đăng nhập
long|adj|dài
look|v|nhìn; trông có vẻ (look forward to: mong đợi)
lose|v|mất; thua
love|v|yêu, rất thích
low|adj|thấp
lower|v|hạ thấp
loyal|adj|trung thành
lunch|n|bữa trưa
machine|n|máy móc
main|adj|chính
make|v|làm, tạo ra
man|n|người đàn ông
manage|v|quản lý; xoay xở
manager|n|người quản lý
manner|n|cách thức, thái độ
many|det|nhiều
mark|v|đánh dấu; kỷ niệm
mass|adj|hàng loạt
material|n|vật liệu
matter|n|vấn đề
may|modal|có thể (xin phép)
me|pron|tôi (tân ngữ)
meal|n|bữa ăn
measure|n/v|biện pháp; đo
mechanic|n|thợ máy
mechanical|adj|thuộc cơ khí
mechanize|v|cơ giới hóa
media|n|truyền thông
medical|adj|thuộc y tế
meet|v|gặp; đáp ứng
meeting|n|cuộc họp
member|n|thành viên
membership|n|tư cách thành viên
mend|v|sửa
mention|v|đề cập
merger|n|sự sáp nhập
message|n|tin nhắn, lời nhắn
messenger|n|người đưa tin
method|n|phương pháp
mill|n|nhà máy, xưởng
million|num|triệu
miss|v|lỡ, bỏ lỡ; nhớ
mistake|n|lỗi
mobile|adj|di động
model|n|mẫu, kiểu
modify|v|chỉnh sửa
moment|n|lúc, khoảnh khắc
monday|n|thứ Hai
monkey|n|con khỉ
more|adv|hơn, nhiều hơn
most|adv|nhất; hầu hết
motorbike|n|xe máy
move|v|di chuyển
movie|n|bộ phim
mr|n|ông (danh xưng)
much|adv|nhiều
museum|n|bảo tàng
music|n|âm nhạc
must|modal|phải
my|det|của tôi
nam|n|Nam (tên người)
lan|n|Lan (tên người)
da|n|Da Nang: Đà Nẵng · Da Lat: Đà Lạt
nang|n|Da Nang: Đà Nẵng
lat|n|Da Lat: Đà Lạt
ho|n|Ho Chi Minh City: TP. Hồ Chí Minh
chi|n|Ho Chi Minh City: TP. Hồ Chí Minh
minh|n|Ho Chi Minh City: TP. Hồ Chí Minh
nation|n|quốc gia
nationwide|adv|trên toàn quốc
near|prep|gần
need|v|cần
net|adj|ròng (sau khi trừ)
never|adv|không bao giờ
newly|adv|mới
next|adj|tiếp theo, kế tiếp
nice|adj|đẹp, tốt, dễ chịu
nine|num|chín
nominee|n|người được đề cử
noon|n|buổi trưa
norm|n|chuẩn mực
not|adv|không
note|n|ghi chú
notice|n|thông báo
now|adv|bây giờ
number|n|số
o'clock|adv|giờ (đúng)
obey|v|tuân theo
of|prep|của
off|adv|tắt; hết (pay off: trả hết)
offer|v/n|đưa ra, cung cấp; lời đề nghị
officer|n|nhân viên, cán bộ
official|adj/n|chính thức; quan chức
often|adv|thường
on|prep|trên; vào (ngày)
online|adj|trực tuyến
only|adv|chỉ
open|v/adj|mở; đang mở
opening|adj|khai mạc
opponent|n|đối thủ
opportunity|n|cơ hội
orange|n|quả cam
our|det|của chúng tôi
out|adv|ra ngoài; hết
outline|n/v|dàn ý; phác thảo
outstanding|adj|còn nợ; xuất sắc
over|prep|hơn; trên
pack|v|đóng gói
page|n|trang
pamphlet|n|tờ rơi, sách mỏng
paper|n|giấy; giấy tờ
parcel|n|bưu kiện
park|v/n|đỗ xe; công viên
parking|n|việc đỗ xe
part|n|bộ phận, phần
participate|v|tham gia
party|n|bữa tiệc; bên (hợp đồng)
pass|n|thẻ, vé
passcode|n|mã khóa
pastry|n|bánh ngọt
path|n|con đường
patience|n|sự kiên nhẫn
pattern|n|khuôn mẫu, xu hướng
pay|v/n|trả tiền; tiền lương
pen|n|cây bút
percent|n|phần trăm
perform|v|thực hiện, làm việc
period|n|giai đoạn
perk|n|phúc lợi thêm
piece|n|mảnh, món
pin|n|mã PIN
place|v/n|đặt; nơi chốn
placement|n|chỗ thực tập
plan|n/v|kế hoạch; lên kế hoạch
plane|n|máy bay
play|v|chơi
plenty|n|nhiều, dư dả
point|n|ý, điểm
poll|n|cuộc thăm dò
popular|adj|phổ biến
positive|adj|tích cực
post|n|vị trí, chức vụ
potential|adj|tiềm năng
power|n|điện; quyền lực
prepare|v|chuẩn bị
presence|n|sự có mặt
present|v|trình bày
pressing|adj|cấp bách
price|n/v|giá; định giá
printer|n|máy in
printout|n|bản in
priority|n|sự ưu tiên
private|adj|riêng tư
prize|n|giải thưởng
problem|n|vấn đề
process|n|quy trình
profile|n|hồ sơ
program|n|chương trình
project|n|dự án
promise|v|hứa
prompt|adj/n|nhanh chóng; lời nhắc
proof|n|bằng chứng
property|n|tài sản, bất động sản
proposal|n|đề xuất
protect|v|bảo vệ
protection|n|sự bảo vệ
provide|v|cung cấp
provider|n|nhà cung cấp
provision|n|điều khoản; sự cung cấp
publicize|v|quảng bá
pure|adj|tinh khiết
pursue|v|theo đuổi
put|v|đặt (put through: nối máy)
quarterly|adj|hằng quý
questionnaire|n|bảng câu hỏi
quick|adj|nhanh
quickly|adv|nhanh chóng
quiet|adj|yên tĩnh
quit|v|nghỉ việc, bỏ
rain|n/v|mưa
range|n|loạt, phạm vi
rate|n|tỷ lệ, mức
raw|adj|thô
reach|v|đạt tới; liên lạc được
readily|adv|sẵn có, dễ dàng
ready|adj|sẵn sàng
rearrange|v|sắp xếp lại
receive|v|nhận
receiver|n|người nhận
recognize|v|công nhận
recommendation|n|lời giới thiệu, đề xuất
record|n|hồ sơ, bản ghi
recruitment|n|sự tuyển dụng
red|adj|màu đỏ
reduce|v|giảm
reduction|n|sự giảm
refer|v|tham khảo, xem (refer to)
referee|n|người giới thiệu (cho CV)
refresh|v|làm mới
regard|n|lời chúc (Best regards: trân trọng)
region|n|khu vực
registration|n|sự đăng ký
regret|v|lấy làm tiếc
regular|adj|định kỳ, thường xuyên
reimbursement|n|sự hoàn trả
release|v|phát hành
remainder|n|phần còn lại
remove|v|loại bỏ
repay|v|trả lại (nợ)
repayment|n|sự trả nợ
repeat|v|lặp lại
replace|v|thay thế
report|n/v|bản báo cáo; báo cáo
require|v|yêu cầu
requirement|n|yêu cầu
reset|v|đặt lại
resignation|n|sự từ chức
resolve|v|giải quyết
resource|n|nguồn lực
result|n|kết quả
retirement|n|sự nghỉ hưu
return|v/n|trả lại; sự trở về
rewarding|adj|bổ ích, đáng làm
rider|n|người đi xe
right|adj|đúng; bên phải
rise|v/n|tăng; sự tăng
risk|n|rủi ro
rival|n|đối thủ
road|n|con đường
role|n|vai trò
rose|n|hoa hồng
rough|adj|sơ bộ, ước chừng
round|adj|tròn; khứ hồi (round trip)
rule|n|quy tắc
run|v|chạy; vận hành
sale|n|việc bán; giảm giá (on sale)
sales|n|doanh số; bán hàng
save|v|lưu; tiết kiệm
say|v|nói
season|n|mùa
seat|n|chỗ ngồi
seating|n|chỗ ngồi
second|adj|thứ hai
secret|adj|bí mật
section|n|phần, bộ phận
see|v|nhìn thấy, xem
self-service|adj|tự phục vụ
sell|v|bán
seller|n|người bán
send|v|gửi
senior|adj|cấp cao
serious|adj|nghiêm trọng
seriously|adv|nghiêm túc
service|n|dịch vụ
servicing|n|sự bảo dưỡng
session|n|buổi, phiên
set|adj/v|cố định; đặt ra
settlement|n|sự thanh toán; dàn xếp
seven|num|bảy
several|det|một vài
she|pron|cô ấy, bà ấy
shield|v|che chắn
shirt|n|áo sơ mi
shop|n|cửa hàng
shopping|n|việc mua sắm
short-term|adj|ngắn hạn
shortlist|v|lọc danh sách vòng trong
should|modal|nên
show|v|cho xem, trình
side|n|bên, phía
sign|v|ký
sign-off|n|sự phê duyệt
since|prep|từ khi
sincerely|adv|chân thành
sing|v|hát
single|adj|đơn (single room: phòng đơn)
sit|v|ngồi
site|n|địa điểm; trang web
situation|n|tình huống
six|num|sáu
skill|n|kỹ năng
skilled|adj|lành nghề
slow|adj|chậm
smith|n|Smith (họ người)
snack|n|đồ ăn vặt
social|adj|thuộc xã hội
solution|n|giải pháp
solve|v|giải quyết
some|det|một vài, một ít
somebody|pron|ai đó
sometimes|adv|đôi khi
soon|adv|sớm
source|v/n|tìm nguồn; nguồn
space|n|không gian, chỗ
spare|adj|dự phòng
speaker|n|diễn giả, người nói
special|adj|đặc biệt
specimen|n|mẫu vật
speech|n|bài phát biểu
spell|v|đánh vần
sport|n|thể thao
staff|n|nhân viên
start|v|bắt đầu
starter|n|món khai vị
state|v|nêu rõ
statement|n|bản sao kê; tuyên bố
station|n|nhà ga
stay|v|ở lại
step|v|bước (step down: từ chức)
still|adv|vẫn
stop|v|dừng
store|n/v|cửa hàng; lưu trữ
storehouse|n|nhà kho
straight|adv|thẳng
strict|adj|nghiêm ngặt
strictly|adv|nghiêm ngặt, tuyệt đối
subscription|n|gói đăng ký
substitute|n|vật thay thế
suggest|v|gợi ý, đề xuất
suitable|adj|phù hợp
sum|v|tổng (sum up: tóm tắt)
summer|n|mùa hè
sun|n|mặt trời
sunday|n|Chủ nhật
supermarket|n|siêu thị
supply|n/v|nguồn cung, vật tư; cung cấp
support|n/v|sự hỗ trợ; hỗ trợ
sure|adj|chắc chắn
survive|v|tồn tại, sống sót
sushi|n|món sushi
swap|v|đổi
swim|v|bơi
system|n|hệ thống
take|v|lấy, mang; mất (thời gian)
talk|v/n|nói chuyện; bài nói
task|n|nhiệm vụ
taxi|n|xe taxi
teach|v|dạy
team|n|nhóm, đội
technological|adj|thuộc công nghệ
technology|n|công nghệ
tell|v|nói, bảo
tendency|n|xu hướng
tenth|adj|thứ mười
term|n|điều khoản; thời hạn
test|v/n|kiểm tra, thử nghiệm
than|conj|hơn
thank|v|cảm ơn
that|pron|đó, kia; rằng
the|det|(mạo từ xác định) cái, này
their|det|của họ
there|adv|ở đó (there is: có)
these|det|những … này
they|pron|họ
think|v|nghĩ
thirsty|adj|khát
thirty|num|ba mươi
this|det|này
those|det|những … kia
thousand|num|nghìn
three-month|adj|ba tháng
through|prep|qua, xuyên qua
ticket|n|vé
tight|adj|eo hẹp, chặt
timetable|n|thời gian biểu
tired|adj|mệt
title|n|tiêu đề
to|prep|đến; để
toilet|n|nhà vệ sinh
token|n|vật làm tin, biểu tượng
tonight|adv|tối nay
too|adv|quá; cũng
tool|n|công cụ
top|adj|hàng đầu
topic|n|chủ đề
total|n|tổng số
touch|n|sự liên lạc (get in touch)
tourist|n|khách du lịch
toy|n|đồ chơi
track|v|theo dõi
trade|v|trao đổi
trademark|n|nhãn hiệu
train|n/v|tàu hỏa; đào tạo
transit|n|sự vận chuyển
transport|n|phương tiện, vận tải
travel|v/n|đi lại, du lịch
traveller|n|du khách
treat|v|đối xử
tree|n|cái cây
trip|n|chuyến đi
trouble|n|rắc rối
try|v|thử, cố gắng
tuesday|n|thứ Ba
turn|v|rẽ (turn in: nộp; turn off: tắt)
turnout|n|số người tham dự
tv|n|tivi
twenty|num|hai mươi
twice|adv|hai lần
two-year|adj|hai năm
under|prep|dưới; theo
unit|n|đơn vị, chiếc
university|n|trường đại học
until|prep|cho đến khi
up|adv|lên
upkeep|n|sự bảo dưỡng
upon|prep|khi, ngay khi
us|pron|chúng tôi (tân ngữ)
use|v|sử dụng
user-friendly|adj|dễ sử dụng
usually|adv|thường xuyên
valuable|adj|quý giá
value|v/n|coi trọng; giá trị
van|n|xe tải nhỏ
verify|v|xác minh
version|n|phiên bản
very|adv|rất
vietnam|n|Việt Nam
vietnamese|adj|thuộc Việt Nam
view|n|quan điểm
violation|n|sự vi phạm
vision|n|tầm nhìn; thị lực
visit|v|thăm, ghé
visitor|n|khách
vitae|n|(curriculum vitae) sơ yếu lý lịch
volume|n|khối lượng
voucher|n|phiếu, chứng từ
wage|n|tiền lương (theo giờ/tuần)
wait|v|chờ
walk|v|đi bộ
wall|n|bức tường
wasn't|v|đã không (= was not)
watch|v|xem
way|n|con đường; cách
we|pron|chúng tôi, chúng ta
wear|v|mặc, đeo
weather|n|thời tiết
web|n|mạng, web
wedding|n|đám cưới
wednesday|n|thứ Tư
weekend|n|cuối tuần
welcome|adj|được chào đón (You're welcome: không có gì)
well|adv|tốt
well-known|adj|nổi tiếng
wet|adj|ướt
what|pron|cái gì
when|adv|khi nào
where|adv|ở đâu
which|pron|cái nào
who|pron|ai
why|adv|tại sao
wi-fi|n|mạng không dây
will|modal|sẽ
win|v|thắng, giành được
winter|n|mùa đông
with|prep|với
within|prep|trong vòng
won't|modal|sẽ không (= will not)
worker|n|công nhân
would|modal|sẽ (lịch sự)
writer|n|người viết
yet|adv|chưa (câu phủ định/hỏi)
yield|n|sản lượng
you|pron|bạn
your|det|của bạn
you're|pron|bạn là / bạn đang (= you are)
zoo|n|sở thú
`;

// Động từ bất quy tắc và danh từ số nhiều đặc biệt → từ gốc
const IRREGULAR = {
  went: 'go', gone: 'go', ate: 'eat', eaten: 'eat', had: 'have', has: 'have', saw: 'see', seen: 'see',
  bought: 'buy', made: 'make', took: 'take', taken: 'take', came: 'come', got: 'get', did: 'do', does: 'do', done: 'do',
  was: 'be', were: 'be', is: 'be', are: 'be', am: 'be', been: 'be', met: 'meet', gave: 'give', given: 'give',
  told: 'tell', said: 'say', paid: 'pay', sent: 'send', left: 'leave', found: 'find', thought: 'think',
  knew: 'know', known: 'know', wrote: 'write', written: 'write', lost: 'lose', won: 'win', felt: 'feel', kept: 'keep',
  held: 'hold', risen: 'rise', led: 'lead', ran: 'run', sat: 'sit', spoke: 'speak', spoken: 'speak', began: 'begin',
  became: 'become', brought: 'bring', chose: 'choose', built: 'build', grew: 'grow', grown: 'grow', drove: 'drive',
  children: 'child', men: 'man', women: 'woman', people: 'person', better: 'good', best: 'good', worse: 'bad',
  sold: 'sell', taught: 'teach', understood: 'understand', read: 'read', put: 'put', cut: 'cut', set: 'set',
};
