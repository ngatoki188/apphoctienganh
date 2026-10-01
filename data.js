// Dữ liệu bài học. Muốn thêm nội dung thì chỉ cần sửa file này.

// Ghép câu kiểu Earthworm: [nghĩa tiếng Việt, câu tiếng Anh], từ ngắn đến dài.
const SENTENCE_LESSONS = [
  {
    id: 's1', title: 'Giới thiệu bản thân', note: 'Động từ to be: am / is / are',
    items: [
      ['tôi', 'I'],
      ['là (đi với "I")', 'am'],
      ['tôi là', 'I am'],
      ['một học sinh', 'a student'],
      ['tôi là một học sinh', 'I am a student.'],
      ['tôi là Nam', 'I am Nam.'],
      ['bạn', 'you'],
      ['bạn là', 'you are'],
      ['bạn là một giáo viên', 'You are a teacher.'],
      ['anh ấy', 'he'],
      ['anh ấy là một bác sĩ', 'He is a doctor.'],
      ['cô ấy là một y tá', 'She is a nurse.'],
      ['chúng tôi là bạn bè', 'We are friends.'],
      ['tôi không phải là một giáo viên', 'I am not a teacher.'],
      ['bạn có phải là học sinh không?', 'Are you a student?'],
      ['vâng, đúng vậy', 'Yes, I am.'],
      ['tên của bạn là gì?', 'What is your name?'],
      ['tên tôi là Lan', 'My name is Lan.'],
      ['rất vui được gặp bạn', 'Nice to meet you.'],
    ],
  },
  {
    id: 's2', title: 'Thói quen hằng ngày', note: 'Thì hiện tại đơn',
    items: [
      ['thích', 'like'],
      ['tôi thích', 'I like'],
      ['cà phê', 'coffee'],
      ['tôi thích cà phê', 'I like coffee.'],
      ['tôi uống cà phê', 'I drink coffee.'],
      ['tôi uống cà phê mỗi sáng', 'I drink coffee every morning.'],
      ['anh ấy thích trà', 'He likes tea.'],
      ['cô ấy làm việc ở một bệnh viện', 'She works at a hospital.'],
      ['tôi thức dậy lúc sáu giờ', "I get up at six o'clock."],
      ['chúng tôi ăn sáng lúc bảy giờ', 'We have breakfast at seven.'],
      ['tôi đi làm bằng xe máy', 'I go to work by motorbike.'],
      ['anh ấy đi học bằng xe buýt', 'He goes to school by bus.'],
      ['tôi đọc sách vào buổi tối', 'I read books in the evening.'],
      ['cô ấy xem TV mỗi tối', 'She watches TV every night.'],
      ['tôi thường đi ngủ lúc mười một giờ', 'I usually go to bed at eleven.'],
    ],
  },
  {
    id: 's3', title: 'Phủ định và câu hỏi', note: 'do / does / don\'t / doesn\'t',
    items: [
      ['tôi không thích', "I don't like"],
      ['tôi không thích sữa', "I don't like milk."],
      ['anh ấy không ăn thịt', "He doesn't eat meat."],
      ['họ không sống ở Hà Nội', "They don't live in Hanoi."],
      ['bạn có thích âm nhạc không?', 'Do you like music?'],
      ['có, tôi có', 'Yes, I do.'],
      ['không, tôi không', "No, I don't."],
      ['cô ấy có nói tiếng Anh không?', 'Does she speak English?'],
      ['bạn sống ở đâu?', 'Where do you live?'],
      ['tôi sống ở Đà Nẵng', 'I live in Da Nang.'],
      ['bạn làm nghề gì?', 'What do you do?'],
      ['tôi là một kỹ sư', 'I am an engineer.'],
      ['anh ấy làm việc ở đâu?', 'Where does he work?'],
      ['bạn thức dậy lúc mấy giờ?', 'What time do you get up?'],
    ],
  },
  {
    id: 's4', title: 'Bạn đang làm gì?', note: 'Thì hiện tại tiếp diễn',
    items: [
      ['tôi đang học', 'I am studying.'],
      ['tôi đang học tiếng Anh', 'I am studying English.'],
      ['cô ấy đang nấu ăn', 'She is cooking.'],
      ['cô ấy đang nấu bữa tối', 'She is cooking dinner.'],
      ['họ đang chơi bóng đá', 'They are playing football.'],
      ['trời đang mưa', 'It is raining.'],
      ['bây giờ tôi không xem TV', 'I am not watching TV now.'],
      ['bạn đang làm gì vậy?', 'What are you doing?'],
      ['tôi đang đọc một cuốn sách', 'I am reading a book.'],
      ['anh ấy đang nói chuyện điện thoại', 'He is talking on the phone.'],
      ['bạn đang đi đâu vậy?', 'Where are you going?'],
      ['tôi đang đi chợ', 'I am going to the market.'],
      ['bọn trẻ đang ngủ', 'The children are sleeping.'],
    ],
  },
  {
    id: 's5', title: 'Chuyện hôm qua', note: 'Thì quá khứ đơn',
    items: [
      ['hôm qua', 'yesterday'],
      ['hôm qua tôi ở nhà', 'I was at home yesterday.'],
      ['họ đã rất mệt', 'They were very tired.'],
      ['tôi đã xem một bộ phim', 'I watched a movie.'],
      ['tối qua tôi đã xem một bộ phim', 'I watched a movie last night.'],
      ['cô ấy đã gọi cho mẹ', 'She called her mother.'],
      ['tuần trước chúng tôi đã đi Đà Lạt', 'We went to Da Lat last week.'],
      ['anh ấy đã mua một chiếc điện thoại mới', 'He bought a new phone.'],
      ['hôm qua tôi đã không đi làm', "I didn't go to work yesterday."],
      ['sáng nay bạn có ăn sáng không?', 'Did you have breakfast this morning?'],
      ['có, tôi đã ăn một ít bánh mì', 'Yes, I ate some bread.'],
      ['cuối tuần trước bạn đã làm gì?', 'What did you do last weekend?'],
      ['tôi đã gặp bạn bè của tôi', 'I met my friends.'],
    ],
  },
  {
    id: 's6', title: 'Kế hoạch tương lai', note: 'will / be going to',
    items: [
      ['tôi sẽ giúp bạn', 'I will help you.'],
      ['ngày mai tôi sẽ gọi cho bạn', 'I will call you tomorrow.'],
      ['trời sẽ mưa', 'It will rain.'],
      ['tôi sẽ không quên', "I won't forget."],
      ['bạn sẽ đến chứ?', 'Will you come?'],
      ['tôi định học tiếng Anh', 'I am going to learn English.'],
      ['chúng tôi định đi du lịch', 'We are going to travel.'],
      ['họ định mua một ngôi nhà', 'They are going to buy a house.'],
      ['tối nay bạn định làm gì?', 'What are you going to do tonight?'],
      ['tôi định ở nhà', 'I am going to stay at home.'],
      ['tháng sau anh ấy sẽ bắt đầu một công việc mới', 'He will start a new job next month.'],
    ],
  },
  {
    id: 's7', title: 'Nhờ giúp đỡ', note: 'can / could và câu giao tiếp',
    items: [
      ['tôi có thể bơi', 'I can swim.'],
      ['tôi không biết lái ô tô', "I can't drive a car."],
      ['bạn có thể giúp tôi không?', 'Can you help me?'],
      ['bạn có thể nói chậm hơn không?', 'Can you speak more slowly?'],
      ['bạn có thể nhắc lại được không?', 'Could you repeat that, please?'],
      ['tôi có thể dùng điện thoại của bạn không?', 'Can I use your phone?'],
      ['tất nhiên rồi', 'Of course.'],
      ['tôi không hiểu', "I don't understand."],
      ['cái này tiếng Anh nói thế nào?', 'How do you say this in English?'],
      ['cảm ơn bạn rất nhiều', 'Thank you very much.'],
      ['không có gì', "You're welcome."],
    ],
  },
  {
    id: 's8', title: 'Mua sắm và hỏi đường', note: 'How much / Where / How',
    items: [
      ['cái này bao nhiêu tiền?', 'How much is this?'],
      ['năm mươi nghìn đồng', 'It is fifty thousand dong.'],
      ['đắt quá', 'It is too expensive.'],
      ['bạn có cái nào rẻ hơn không?', 'Do you have a cheaper one?'],
      ['tôi sẽ lấy cái này', 'I will take this one.'],
      ['xin lỗi, nhà vệ sinh ở đâu?', 'Excuse me, where is the toilet?'],
      ['nó ở tầng hai', 'It is on the second floor.'],
      ['làm sao để tôi đến ga tàu?', 'How do I get to the train station?'],
      ['đi thẳng rồi rẽ trái', 'Go straight and turn left.'],
      ['nó có gần đây không?', 'Is it near here?'],
      ['nó ở cạnh ngân hàng', 'It is next to the bank.'],
    ],
  },

  // ----- Ngữ cảnh TOEIC -----
  {
    id: 't1', group: 'TOEIC', title: 'Viết email công việc', note: 'Mở đầu, nội dung, kết thư',
    items: [
      ['kính gửi ông Smith', 'Dear Mr Smith,'],
      ['tôi viết thư này', 'I am writing'],
      ['tôi viết thư này về đơn hàng của ông', 'I am writing regarding your order.'],
      ['tôi viết thư để xác nhận cuộc họp của chúng ta', 'I am writing to confirm our meeting.'],
      ['vui lòng xem bản báo cáo đính kèm', 'Please find attached the report.'],
      ['cảm ơn bạn đã gửi email', 'Thank you for your email.'],
      ['cảm ơn bạn đã phản hồi nhanh', 'Thank you for your quick response.'],
      ['xin lỗi vì trả lời muộn', 'Sorry for the late reply.'],
      ['chúng tôi xin lỗi vì sự bất tiện này', 'We apologize for the inconvenience.'],
      ['bạn có thể gửi cho tôi bảng báo giá không?', 'Could you send me a quote?'],
      ['tôi sẽ rất cảm kích nếu bạn có thể trả lời sớm', 'I would appreciate it if you could reply soon.'],
      ['nếu bạn có câu hỏi nào, vui lòng liên hệ với tôi', 'If you have any questions, please contact me.'],
      ['tôi mong nhận được hồi âm của bạn', 'I look forward to hearing from you.'],
      ['trân trọng', 'Best regards,'],
    ],
  },
  {
    id: 't2', group: 'TOEIC', title: 'Trong cuộc họp', note: 'Mở đầu, góp ý, đồng ý / phản đối',
    items: [
      ['chúng ta hãy bắt đầu cuộc họp', "Let's start the meeting."],
      ['mục đầu tiên trong chương trình họp là ngân sách', 'The first item on the agenda is the budget.'],
      ['ai sẽ ghi biên bản?', 'Who will take the minutes?'],
      ['tôi muốn đề xuất một kế hoạch mới', 'I would like to propose a new plan.'],
      ['bạn nghĩ sao về ý tưởng này?', 'What do you think about this idea?'],
      ['theo ý tôi, chúng ta cần thêm thời gian', 'In my opinion, we need more time.'],
      ['tôi đồng ý với bạn', 'I agree with you.'],
      ['tôi e là tôi không đồng ý', "I'm afraid I disagree."],
      ['bạn có thể làm rõ ý đó không?', 'Could you clarify that point?'],
      ['chúng ta đang chậm tiến độ', 'We are behind schedule.'],
      ['chúng ta cần kịp hạn chót', 'We need to meet the deadline.'],
      ['hãy để tôi tóm tắt các ý chính', 'Let me summarize the main points.'],
      ['chúng ta hãy dời cuộc họp sang thứ Sáu', "Let's reschedule the meeting for Friday."],
      ['cảm ơn mọi người đã tham dự', 'Thank you all for attending.'],
    ],
  },
  {
    id: 't3', group: 'TOEIC', title: 'Gọi điện thoại', note: 'Nối máy, để lại lời nhắn',
    items: [
      ['xin chào, tôi là Lan đây', 'Hello, this is Lan.'],
      ['tôi có thể nói chuyện với ông Brown không?', 'May I speak to Mr Brown?'],
      ['xin hỏi ai đang gọi ạ?', 'Who is calling, please?'],
      ['xin vui lòng giữ máy', 'Please hold the line.'],
      ['tôi sẽ nối máy cho bạn', 'I will put you through.'],
      ['xin lỗi, ông ấy đang họp', 'Sorry, he is in a meeting.'],
      ['bạn có muốn để lại lời nhắn không?', 'Would you like to leave a message?'],
      ['bạn có thể bảo ông ấy gọi lại cho tôi không?', 'Could you ask him to call me back?'],
      ['số điện thoại của bạn là gì?', 'What is your phone number?'],
      ['bạn có thể đánh vần tên của bạn không?', 'Could you spell your name, please?'],
      ['xin lỗi, đường dây không rõ', 'Sorry, the line is bad.'],
      ['tôi gọi để hỏi về đơn hàng của tôi', 'I am calling about my order.'],
      ['cảm ơn bạn đã gọi', 'Thank you for calling.'],
    ],
  },
  {
    id: 't4', group: 'TOEIC', title: 'Lịch hẹn và việc văn phòng', note: 'Đặt lịch, giao việc, hạn chót',
    items: [
      ['bạn có rảnh vào thứ Hai không?', 'Are you available on Monday?'],
      ['tôi muốn đặt một lịch hẹn', 'I would like to make an appointment.'],
      ['thứ Ba lúc mười giờ có tiện cho bạn không?', 'Is Tuesday at ten convenient for you?'],
      ['tôi e là hôm đó tôi bận', "I'm afraid I am busy that day."],
      ['chúng ta có thể gặp vào tuần sau không?', 'Can we meet next week?'],
      ['tôi phải hoàn thành báo cáo này trước thứ Sáu', 'I have to finish this report by Friday.'],
      ['quản lý đã giao cho tôi một dự án mới', 'My manager assigned me a new project.'],
      ['tuần này tôi đang làm thêm giờ', 'I am working overtime this week.'],
      ['bạn có thể giúp tôi việc này không?', 'Could you help me with this?'],
      ['máy in bị hỏng rồi', 'The printer is out of order.'],
      ['tôi sẽ gửi cho bạn trước cuối ngày', 'I will send it to you by the end of the day.'],
      ['cuộc họp đã bị hoãn đến thứ Tư', 'The meeting has been postponed until Wednesday.'],
    ],
  },
  {
    id: 't5', group: 'TOEIC', title: 'Chăm sóc khách hàng', note: 'Khiếu nại, đổi trả, hoàn tiền',
    items: [
      ['tôi có thể giúp gì cho bạn?', 'How can I help you?'],
      ['tôi muốn khiếu nại', 'I would like to make a complaint.'],
      ['sản phẩm tôi nhận được bị lỗi', 'The product I received is defective.'],
      ['đơn hàng của tôi vẫn chưa đến', 'My order has not arrived yet.'],
      ['tôi có thể xem biên lai của bạn không?', 'May I see your receipt?'],
      ['chúng tôi sẽ gửi cho bạn hàng thay thế', 'We will send you a replacement.'],
      ['bạn có thể được hoàn tiền toàn bộ', 'You can get a full refund.'],
      ['sản phẩm này vẫn còn bảo hành', 'This product is still under warranty.'],
      ['mặt hàng này đã hết hàng', 'This item is out of stock.'],
      ['chúng tôi xin lỗi vì sự chậm trễ', 'We apologize for the delay.'],
      ['tôi còn có thể giúp gì khác cho bạn không?', 'Is there anything else I can help you with?'],
    ],
  },
  {
    id: 't6', group: 'TOEIC', title: 'Đi công tác', note: 'Khách sạn, sân bay, chi phí',
    items: [
      ['tôi muốn đặt một phòng đơn', 'I would like to book a single room.'],
      ['tôi đã đặt phòng dưới tên Nam', 'I have a reservation under the name Nam.'],
      ['mấy giờ phải trả phòng?', 'What time is check-out?'],
      ['chuyến bay của tôi bị hoãn hai tiếng', 'My flight was delayed by two hours.'],
      ['tôi có thể xem thẻ lên máy bay của bạn không?', 'May I see your boarding pass?'],
      ['cổng số năm ở đâu?', 'Where is Gate 5?'],
      ['tôi đang đi công tác', 'I am on a business trip.'],
      ['công ty sẽ hoàn trả chi phí đi lại cho tôi', 'The company will reimburse my travel expenses.'],
      ['giá phòng có bao gồm bữa sáng không?', 'Does the price include breakfast?'],
      ['bạn có thể gọi taxi giúp tôi không?', 'Could you call a taxi for me?'],
      ['tôi cần một hóa đơn cho công ty', 'I need an invoice for my company.'],
    ],
  },
];

// Từ vựng TOEIC: [từ, IPA (Anh-Anh), loại từ, nghĩa, câu ví dụ, từ đồng nghĩa, [[cụm từ hay đi kèm, nghĩa]]]
const TOEIC_VOCAB = [
  { id: 'office', name: 'Văn phòng, công việc', icon: '💼', words: [
    ['colleague', '/ˈkɒliːɡ/', 'n', 'đồng nghiệp', 'I discussed the report with a colleague.', 'coworker, associate',
      [['a close colleague', 'đồng nghiệp thân'], ['consult a colleague', 'hỏi ý kiến đồng nghiệp']]],
    ['deadline', '/ˈdedlaɪn/', 'n', 'hạn chót', 'We must meet the deadline by Friday.', 'due date, time limit',
      [['meet a deadline', 'kịp hạn'], ['miss a deadline', 'trễ hạn'], ['extend the deadline', 'gia hạn']]],
    ['supervisor', '/ˈsuːpəvaɪzə(r)/', 'n', 'người giám sát, cấp trên', 'Please report to your supervisor.', 'manager, boss',
      [['report to a supervisor', 'báo cáo với cấp trên'], ['immediate supervisor', 'cấp trên trực tiếp']]],
    ['assign', '/əˈsaɪn/', 'v', 'giao (việc), phân công', 'The manager assigned me a new task.', 'allocate, delegate',
      [['assign a task', 'giao nhiệm vụ'], ['be assigned to a project', 'được phân vào dự án']]],
    ['submit', '/səbˈmɪt/', 'v', 'nộp', 'Please submit your report by noon.', 'hand in, turn in',
      [['submit a report', 'nộp báo cáo'], ['submit an application', 'nộp đơn']]],
    ['schedule', '/ˈʃedjuːl/', 'n/v', 'lịch trình; lên lịch', 'The project is behind schedule.', 'timetable, plan',
      [['ahead of schedule', 'sớm hơn dự kiến'], ['behind schedule', 'chậm tiến độ'], ['schedule a meeting', 'lên lịch họp']]],
    ['attend', '/əˈtend/', 'v', 'tham dự', 'All staff must attend the meeting.', 'participate in, be present at',
      [['attend a meeting', 'dự họp'], ['attend a conference', 'dự hội nghị']]],
    ['postpone', '/pəˈspəʊn/', 'v', 'hoãn lại', 'The meeting was postponed until Monday.', 'delay, put off',
      [['postpone a meeting', 'hoãn cuộc họp'], ['postpone until next week', 'hoãn đến tuần sau']]],
    ['efficient', '/ɪˈfɪʃnt/', 'adj', 'hiệu quả, năng suất', 'The new system is more efficient.', 'productive, effective',
      [['highly efficient', 'rất hiệu quả'], ['energy-efficient', 'tiết kiệm năng lượng']]],
    ['responsible', '/rɪˈspɒnsəbl/', 'adj', 'chịu trách nhiệm', 'She is responsible for the sales team.', 'in charge of, accountable',
      [['be responsible for', 'chịu trách nhiệm về'], ['take responsibility for', 'nhận trách nhiệm về']]],
  ]},
  { id: 'hr', name: 'Tuyển dụng, nhân sự', icon: '👔', words: [
    ['applicant', '/ˈæplɪkənt/', 'n', 'ứng viên', 'We interviewed ten applicants.', 'candidate',
      [['qualified applicant', 'ứng viên đủ điều kiện'], ['successful applicant', 'ứng viên trúng tuyển']]],
    ['resume', '/ˈrezjuːmeɪ/', 'n', 'sơ yếu lý lịch, CV', 'Please send us your resume.', 'CV, curriculum vitae',
      [['submit a resume', 'nộp CV'], ['update your resume', 'cập nhật CV']]],
    ['qualified', '/ˈkwɒlɪfaɪd/', 'adj', 'đủ năng lực, đủ tiêu chuẩn', 'She is highly qualified for the job.', 'eligible, competent',
      [['highly qualified', 'rất có năng lực'], ['qualified for the position', 'đủ tiêu chuẩn cho vị trí']]],
    ['hire', '/ˈhaɪə(r)/', 'v', 'thuê, tuyển dụng', 'The company plans to hire twenty new staff.', 'employ, recruit',
      [['hire staff', 'tuyển nhân viên'], ['newly hired employee', 'nhân viên mới tuyển']]],
    ['position', '/pəˈzɪʃn/', 'n', 'vị trí (công việc)', 'He applied for the position of sales manager.', 'post, role, job',
      [['apply for a position', 'ứng tuyển vị trí'], ['fill a position', 'tuyển đủ người cho vị trí']]],
    ['experience', '/ɪkˈspɪəriəns/', 'n', 'kinh nghiệm', 'Applicants must have three years of experience.', 'background, expertise',
      [['work experience', 'kinh nghiệm làm việc'], ['have experience in', 'có kinh nghiệm về']]],
    ['promote', '/prəˈməʊt/', 'v', 'thăng chức; quảng bá', 'She was promoted to senior manager.', 'advance, upgrade',
      [['be promoted to manager', 'được thăng lên quản lý'], ['promote a product', 'quảng bá sản phẩm']]],
    ['salary', '/ˈsæləri/', 'n', 'lương', 'The job offers a competitive salary.', 'wage, pay, income',
      [['annual salary', 'lương hằng năm'], ['salary increase', 'tăng lương'], ['competitive salary', 'lương cạnh tranh']]],
    ['benefit', '/ˈbenɪfɪt/', 'n', 'phúc lợi, lợi ích', 'The company offers excellent benefits.', 'advantage, perk',
      [['employee benefits', 'phúc lợi nhân viên'], ['health benefits', 'phúc lợi y tế']]],
    ['resign', '/rɪˈzaɪn/', 'v', 'từ chức, nghỉ việc', 'He resigned from his job last month.', 'quit, step down',
      [['resign from a position', 'từ chức'], ['letter of resignation', 'đơn xin nghỉ việc']]],
  ]},
  { id: 'marketing', name: 'Tiếp thị, bán hàng', icon: '📈', words: [
    ['customer', '/ˈkʌstəmə(r)/', 'n', 'khách hàng', 'Customer satisfaction is our priority.', 'client, consumer',
      [['customer service', 'dịch vụ khách hàng'], ['loyal customer', 'khách hàng trung thành']]],
    ['launch', '/lɔːntʃ/', 'v/n', 'ra mắt, tung ra', 'We will launch the new model in May.', 'introduce, release',
      [['launch a product', 'ra mắt sản phẩm'], ['product launch', 'buổi ra mắt sản phẩm']]],
    ['advertise', '/ˈædvətaɪz/', 'v', 'quảng cáo', 'They advertise on social media.', 'promote, publicize',
      [['advertise a product', 'quảng cáo sản phẩm'], ['advertising campaign', 'chiến dịch quảng cáo']]],
    ['competitor', '/kəmˈpetɪtə(r)/', 'n', 'đối thủ cạnh tranh', 'Our main competitor lowered its prices.', 'rival, opponent',
      [['main competitor', 'đối thủ chính'], ['compete with', 'cạnh tranh với']]],
    ['discount', '/ˈdɪskaʊnt/', 'n', 'sự giảm giá', 'We offer a ten percent discount to members.', 'reduction, price cut',
      [['offer a discount', 'giảm giá'], ['at a discount', 'với giá đã giảm']]],
    ['survey', '/ˈsɜːveɪ/', 'n', 'cuộc khảo sát', 'We conducted a survey of five hundred customers.', 'poll, questionnaire',
      [['conduct a survey', 'tiến hành khảo sát'], ['customer survey', 'khảo sát khách hàng']]],
    ['target', '/ˈtɑːɡɪt/', 'n/v', 'mục tiêu; nhắm tới', 'We reached our sales target this quarter.', 'goal, aim',
      [['sales target', 'chỉ tiêu doanh số'], ['reach a target', 'đạt mục tiêu'], ['target audience', 'đối tượng khách hàng mục tiêu']]],
    ['demand', '/dɪˈmɑːnd/', 'n', 'nhu cầu', 'There is high demand for electric cars.', 'need, request',
      [['high demand', 'nhu cầu cao'], ['in demand', 'đang được ưa chuộng'], ['meet demand', 'đáp ứng nhu cầu']]],
    ['revenue', '/ˈrevənjuː/', 'n', 'doanh thu', 'Revenue increased by fifteen percent last year.', 'income, earnings',
      [['generate revenue', 'tạo ra doanh thu'], ['annual revenue', 'doanh thu hằng năm']]],
    ['promotion', '/prəˈməʊʃn/', 'n', 'khuyến mãi; sự thăng chức', 'The store is running a summer promotion.', 'special offer, campaign',
      [['sales promotion', 'chương trình khuyến mãi'], ['get a promotion', 'được thăng chức']]],
  ]},
  { id: 'finance', name: 'Tài chính, kế toán', icon: '💰', words: [
    ['budget', '/ˈbʌdʒɪt/', 'n', 'ngân sách', 'The project was completed within budget.', 'funds, allowance',
      [['within budget', 'trong ngân sách'], ['over budget', 'vượt ngân sách'], ['tight budget', 'ngân sách eo hẹp']]],
    ['invoice', '/ˈɪnvɔɪs/', 'n', 'hóa đơn', 'Please pay the invoice within thirty days.', 'bill, statement',
      [['issue an invoice', 'xuất hóa đơn'], ['pay an invoice', 'thanh toán hóa đơn']]],
    ['expense', '/ɪkˈspens/', 'n', 'chi phí', 'The company will cover your travel expenses.', 'cost, expenditure',
      [['travel expenses', 'chi phí đi lại'], ['cover the expenses', 'chi trả chi phí']]],
    ['profit', '/ˈprɒfɪt/', 'n', 'lợi nhuận', 'The company made a large profit this year.', 'gain, earnings',
      [['make a profit', 'có lãi'], ['net profit', 'lợi nhuận ròng']]],
    ['invest', '/ɪnˈvest/', 'v', 'đầu tư', 'They invested heavily in new technology.', 'fund, finance',
      [['invest in', 'đầu tư vào'], ['investment opportunity', 'cơ hội đầu tư']]],
    ['account', '/əˈkaʊnt/', 'n', 'tài khoản', "I'd like to open a bank account.", 'record, profile',
      [['bank account', 'tài khoản ngân hàng'], ['open an account', 'mở tài khoản']]],
    ['estimate', '/ˈestɪmət/', 'n', 'bản ước tính, báo giá', 'Can you give me a rough estimate?', 'quote, approximation',
      [['rough estimate', 'ước tính sơ bộ'], ['cost estimate', 'dự toán chi phí']]],
    ['refund', '/ˈriːfʌnd/', 'n', 'tiền hoàn lại', 'You can get a full refund within seven days.', 'reimbursement, repayment',
      [['full refund', 'hoàn tiền toàn bộ'], ['request a refund', 'yêu cầu hoàn tiền']]],
    ['reimburse', '/ˌriːɪmˈbɜːs/', 'v', 'hoàn trả (chi phí)', 'Employees will be reimbursed for travel costs.', 'repay, compensate',
      [['reimburse expenses', 'hoàn trả chi phí'], ['be reimbursed for', 'được hoàn tiền cho']]],
    ['fee', '/fiː/', 'n', 'phí, lệ phí', 'There is no fee for this service.', 'charge, cost',
      [['registration fee', 'phí đăng ký'], ['late fee', 'phí trả chậm'], ['pay a fee', 'trả phí']]],
  ]},
  { id: 'travel', name: 'Du lịch, đi lại', icon: '✈️', words: [
    ['reservation', '/ˌrezəˈveɪʃn/', 'n', 'sự đặt chỗ', "I'd like to make a reservation for two.", 'booking',
      [['make a reservation', 'đặt chỗ'], ['confirm a reservation', 'xác nhận đặt chỗ']]],
    ['itinerary', '/aɪˈtɪnərəri/', 'n', 'lịch trình chuyến đi', 'Please check the itinerary before you leave.', 'travel plan, schedule',
      [['detailed itinerary', 'lịch trình chi tiết'], ['travel itinerary', 'lịch trình du lịch']]],
    ['depart', '/dɪˈpɑːt/', 'v', 'khởi hành', 'The flight departs at nine in the morning.', 'leave, set off',
      [['depart from', 'khởi hành từ'], ['departure time', 'giờ khởi hành']]],
    ['delay', '/dɪˈleɪ/', 'n/v', 'sự chậm trễ; làm trễ', 'The train was delayed by two hours.', 'hold-up, postpone',
      [['flight delay', 'chuyến bay bị trễ'], ['be delayed by', 'bị trễ (bao lâu)']]],
    ['accommodation', '/əˌkɒməˈdeɪʃn/', 'n', 'chỗ ở', 'The price includes accommodation and meals.', 'lodging, housing',
      [['provide accommodation', 'cung cấp chỗ ở'], ['hotel accommodation', 'chỗ ở khách sạn']]],
    ['luggage', '/ˈlʌɡɪdʒ/', 'n', 'hành lý', 'Each passenger can bring one piece of luggage.', 'baggage',
      [['carry-on luggage', 'hành lý xách tay'], ['luggage allowance', 'hạn mức hành lý']]],
    ['destination', '/ˌdestɪˈneɪʃn/', 'n', 'điểm đến', 'Da Nang is a popular tourist destination.', 'end point, stop',
      [['popular destination', 'điểm đến được ưa chuộng'], ['final destination', 'điểm đến cuối cùng']]],
    ['fare', '/feə(r)/', 'n', 'giá vé (xe, tàu, máy bay)', 'The bus fare is ten thousand dong.', 'ticket price, charge',
      [['bus fare', 'giá vé xe buýt'], ['air fare', 'giá vé máy bay']]],
    ['board', '/bɔːd/', 'v', 'lên (tàu, xe, máy bay)', 'Passengers may now board the plane.', 'get on, embark',
      [['board a plane', 'lên máy bay'], ['boarding pass', 'thẻ lên máy bay']]],
    ['cancel', '/ˈkænsl/', 'v', 'hủy', 'The flight was cancelled due to bad weather.', 'call off, abandon',
      [['cancel a flight', 'hủy chuyến bay'], ['cancel an order', 'hủy đơn hàng']]],
  ]},
  { id: 'meeting', name: 'Họp, giao tiếp công sở', icon: '🗣️', words: [
    ['agenda', '/əˈdʒendə/', 'n', 'chương trình họp', 'What is the first item on the agenda?', 'schedule, plan',
      [['on the agenda', 'trong chương trình họp'], ['set the agenda', 'lên chương trình họp']]],
    ['conference', '/ˈkɒnfərəns/', 'n', 'hội nghị', 'She will speak at the conference.', 'convention, meeting',
      [['attend a conference', 'dự hội nghị'], ['conference call', 'cuộc gọi hội nghị']]],
    ['negotiate', '/nɪˈɡəʊʃieɪt/', 'v', 'đàm phán', 'We negotiated a better price with the supplier.', 'bargain, discuss terms',
      [['negotiate a contract', 'đàm phán hợp đồng'], ['negotiate with', 'đàm phán với']]],
    ['announce', '/əˈnaʊns/', 'v', 'thông báo, công bố', 'The CEO announced a new strategy.', 'declare, inform',
      [['announce a plan', 'công bố kế hoạch'], ['make an announcement', 'đưa ra thông báo']]],
    ['propose', '/prəˈpəʊz/', 'v', 'đề xuất', 'I propose that we start earlier.', 'suggest, recommend',
      [['propose a plan', 'đề xuất kế hoạch'], ['a proposal for', 'một đề xuất về']]],
    ['inform', '/ɪnˈfɔːm/', 'v', 'báo cho biết', 'Please inform us of any changes.', 'notify, tell',
      [['inform somebody of', 'báo cho ai biết về'], ['keep somebody informed', 'cập nhật thông tin cho ai']]],
    ['confirm', '/kənˈfɜːm/', 'v', 'xác nhận', 'Please confirm your attendance by email.', 'verify, approve',
      [['confirm a booking', 'xác nhận đặt chỗ'], ['confirmation email', 'email xác nhận']]],
    ['feedback', '/ˈfiːdbæk/', 'n', 'phản hồi, góp ý', 'Thank you for your feedback.', 'comments, response',
      [['give feedback', 'góp ý'], ['positive feedback', 'phản hồi tích cực']]],
    ['representative', '/ˌreprɪˈzentətɪv/', 'n', 'người đại diện', 'A sales representative will call you.', 'agent, delegate',
      [['sales representative', 'nhân viên kinh doanh'], ['customer service representative', 'nhân viên chăm sóc khách hàng']]],
    ['presentation', '/ˌpreznˈteɪʃn/', 'n', 'bài thuyết trình', 'He gave a presentation on the new product.', 'talk, speech',
      [['give a presentation', 'thuyết trình'], ['presentation on', 'bài thuyết trình về']]],
  ]},
  { id: 'purchase', name: 'Mua hàng, giao hàng', icon: '📦', words: [
    ['order', '/ˈɔːdə(r)/', 'n/v', 'đơn hàng; đặt hàng', "I'd like to place an order for one hundred units.", 'purchase, request',
      [['place an order', 'đặt hàng'], ['confirm an order', 'xác nhận đơn hàng']]],
    ['supplier', '/səˈplaɪə(r)/', 'n', 'nhà cung cấp', 'We changed suppliers last year.', 'vendor, provider',
      [['main supplier', 'nhà cung cấp chính'], ['local supplier', 'nhà cung cấp địa phương']]],
    ['deliver', '/dɪˈlɪvə(r)/', 'v', 'giao hàng', 'We deliver within three working days.', 'ship, send',
      [['deliver goods', 'giao hàng hóa'], ['free delivery', 'miễn phí giao hàng']]],
    ['shipment', '/ˈʃɪpmənt/', 'n', 'lô hàng', 'The shipment will arrive on Monday.', 'consignment, delivery',
      [['track a shipment', 'theo dõi lô hàng'], ['shipment arrives', 'lô hàng đến nơi']]],
    ['inventory', '/ˈɪnvəntri/', 'n', 'hàng tồn kho', 'We need to check our inventory.', 'stock, supplies',
      [['take inventory', 'kiểm kê hàng'], ['inventory control', 'quản lý tồn kho']]],
    ['warehouse', '/ˈweəhaʊs/', 'n', 'nhà kho', 'The goods are stored in the warehouse.', 'storehouse, depot',
      [['warehouse manager', 'quản lý kho'], ['store goods in a warehouse', 'lưu hàng trong kho']]],
    ['purchase', '/ˈpɜːtʃəs/', 'n/v', 'sự mua; mua', 'Please keep your proof of purchase.', 'buy, acquire',
      [['make a purchase', 'mua hàng'], ['proof of purchase', 'bằng chứng mua hàng (hóa đơn)']]],
    ['available', '/əˈveɪləbl/', 'adj', 'có sẵn; rảnh', 'This item is not available in blue.', 'in stock, free',
      [['readily available', 'luôn có sẵn'], ['available for', 'sẵn sàng cho']]],
    ['warranty', '/ˈwɒrənti/', 'n', 'sự bảo hành', 'The laptop is still under warranty.', 'guarantee',
      [['under warranty', 'còn bảo hành'], ['two-year warranty', 'bảo hành hai năm']]],
    ['defective', '/dɪˈfektɪv/', 'adj', 'bị lỗi, hỏng', 'We will replace any defective products.', 'faulty, damaged',
      [['defective product', 'sản phẩm lỗi'], ['replace a defective item', 'đổi hàng lỗi']]],
  ]},
  { id: 'contract', name: 'Hợp đồng, quy định', icon: '📑', words: [
    ['contract', '/ˈkɒntrækt/', 'n', 'hợp đồng', 'Both parties signed the contract.', 'agreement, deal',
      [['sign a contract', 'ký hợp đồng'], ['renew a contract', 'gia hạn hợp đồng']]],
    ['agreement', '/əˈɡriːmənt/', 'n', 'sự thỏa thuận', 'The two companies reached an agreement.', 'deal, arrangement',
      [['reach an agreement', 'đạt được thỏa thuận'], ['in agreement with', 'đồng ý với']]],
    ['policy', '/ˈpɒləsi/', 'n', 'chính sách', 'Please read our return policy.', 'rule, guideline',
      [['company policy', 'chính sách công ty'], ['return policy', 'chính sách đổi trả']]],
    ['comply', '/kəmˈplaɪ/', 'v', 'tuân thủ', 'All staff must comply with safety rules.', 'obey, follow',
      [['comply with regulations', 'tuân thủ quy định'], ['in compliance with', 'phù hợp với, tuân theo']]],
    ['regulation', '/ˌreɡjuˈleɪʃn/', 'n', 'quy định', 'The factory follows strict safety regulations.', 'rule, law',
      [['safety regulations', 'quy định an toàn'], ['strict regulations', 'quy định nghiêm ngặt']]],
    ['terms', '/tɜːmz/', 'n', 'điều khoản', 'Please read the terms and conditions carefully.', 'conditions, provisions',
      [['terms and conditions', 'điều khoản và điều kiện'], ['payment terms', 'điều khoản thanh toán']]],
    ['expire', '/ɪkˈspaɪə(r)/', 'v', 'hết hạn', 'My passport expires next year.', 'end, run out',
      [['expiry date', 'ngày hết hạn'], ['the contract expires', 'hợp đồng hết hạn']]],
    ['renew', '/rɪˈnjuː/', 'v', 'gia hạn, làm mới', 'I need to renew my membership.', 'extend, continue',
      [['renew a contract', 'gia hạn hợp đồng'], ['renew a subscription', 'gia hạn gói đăng ký']]],
    ['approve', '/əˈpruːv/', 'v', 'phê duyệt, chấp thuận', 'The manager approved my request.', 'authorize, accept',
      [['approve a request', 'duyệt yêu cầu'], ['approve of', 'tán thành']]],
    ['mandatory', '/ˈmændətəri/', 'adj', 'bắt buộc', 'Attendance at the training is mandatory.', 'compulsory, required',
      [['mandatory training', 'khóa đào tạo bắt buộc'], ['mandatory for', 'bắt buộc đối với']]],
  ]},
];

// Từ vựng cơ bản: [từ, IPA (Anh-Anh), loại từ, nghĩa, câu ví dụ]
const BASIC_VOCAB = [
  { id: 'greet', name: 'Giao tiếp cơ bản', icon: '👋', words: [
    ['hello', '/həˈləʊ/', 'int', 'xin chào', 'Hello, how are you?'],
    ['thank you', '/ˈθæŋk juː/', 'phr', 'cảm ơn', 'Thank you for your help.'],
    ['sorry', '/ˈsɒri/', 'adj', 'xin lỗi', 'Sorry, I am late.'],
    ['please', '/pliːz/', 'adv', 'làm ơn, vui lòng', 'Please sit down.'],
    ['yes', '/jes/', 'adv', 'vâng, có', 'Yes, I do.'],
    ['no', '/nəʊ/', 'adv', 'không', 'No, thank you.'],
    ['goodbye', '/ˌɡʊdˈbaɪ/', 'int', 'tạm biệt', 'Goodbye, see you soon.'],
    ['excuse me', '/ɪkˈskjuːz miː/', 'phr', 'xin lỗi (khi làm phiền)', 'Excuse me, where is the bank?'],
    ['name', '/neɪm/', 'n', 'tên', 'What is your name?'],
    ['question', '/ˈkwestʃən/', 'n', 'câu hỏi', 'Can I ask a question?'],
    ['answer', '/ˈɑːnsə(r)/', 'n', 'câu trả lời', "I don't know the answer."],
    ['understand', '/ˌʌndəˈstænd/', 'v', 'hiểu', "I don't understand."],
    ['know', '/nəʊ/', 'v', 'biết', 'I know him.'],
    ['again', '/əˈɡen/', 'adv', 'lại, lần nữa', 'Say it again, please.'],
    ['slowly', '/ˈsləʊli/', 'adv', 'chậm', 'Please speak slowly.'],
  ]},
  { id: 'family', name: 'Gia đình', icon: '👨‍👩‍👧', words: [
    ['family', '/ˈfæməli/', 'n', 'gia đình', 'I love my family.'],
    ['father', '/ˈfɑːðə(r)/', 'n', 'bố, cha', 'My father is a teacher.'],
    ['mother', '/ˈmʌðə(r)/', 'n', 'mẹ', 'My mother cooks dinner.'],
    ['parents', '/ˈpeərənts/', 'n', 'bố mẹ', 'My parents live in Hanoi.'],
    ['brother', '/ˈbrʌðə(r)/', 'n', 'anh/em trai', 'I have one brother.'],
    ['sister', '/ˈsɪstə(r)/', 'n', 'chị/em gái', 'My sister is ten years old.'],
    ['son', '/sʌn/', 'n', 'con trai', 'Their son is a student.'],
    ['daughter', '/ˈdɔːtə(r)/', 'n', 'con gái', 'She has two daughters.'],
    ['husband', '/ˈhʌzbənd/', 'n', 'chồng', 'Her husband is a doctor.'],
    ['wife', '/waɪf/', 'n', 'vợ', 'His wife works in a bank.'],
    ['child', '/tʃaɪld/', 'n', 'đứa trẻ, con', 'The child is sleeping.'],
    ['baby', '/ˈbeɪbi/', 'n', 'em bé', 'The baby is crying.'],
    ['grandfather', '/ˈɡrænfɑːðə(r)/', 'n', 'ông', 'My grandfather is eighty.'],
    ['grandmother', '/ˈɡrænmʌðə(r)/', 'n', 'bà', 'My grandmother makes good food.'],
    ['friend', '/frend/', 'n', 'bạn bè', 'She is my best friend.'],
  ]},
  { id: 'time', name: 'Số và thời gian', icon: '⏰', words: [
    ['one', '/wʌn/', 'num', 'một', 'I have one sister.'],
    ['two', '/tuː/', 'num', 'hai', 'I drink two cups of tea.'],
    ['three', '/θriː/', 'num', 'ba', 'We have three children.'],
    ['ten', '/ten/', 'num', 'mười', "It is ten o'clock."],
    ['hundred', '/ˈhʌndrəd/', 'num', 'trăm', 'It costs one hundred dollars.'],
    ['day', '/deɪ/', 'n', 'ngày', 'Have a nice day!'],
    ['week', '/wiːk/', 'n', 'tuần', 'I work five days a week.'],
    ['month', '/mʌnθ/', 'n', 'tháng', 'I will visit you next month.'],
    ['year', '/jɪə(r)/', 'n', 'năm', 'Happy New Year!'],
    ['today', '/təˈdeɪ/', 'adv', 'hôm nay', 'It is hot today.'],
    ['tomorrow', '/təˈmɒrəʊ/', 'adv', 'ngày mai', 'See you tomorrow.'],
    ['yesterday', '/ˈjestədeɪ/', 'adv', 'hôm qua', 'I was busy yesterday.'],
    ['morning', '/ˈmɔːnɪŋ/', 'n', 'buổi sáng', 'I drink coffee in the morning.'],
    ['night', '/naɪt/', 'n', 'ban đêm', 'Good night!'],
    ['time', '/taɪm/', 'n', 'thời gian, giờ', 'What time is it?'],
  ]},
  { id: 'food', name: 'Đồ ăn, đồ uống', icon: '🍜', words: [
    ['food', '/fuːd/', 'n', 'đồ ăn', 'Vietnamese food is delicious.'],
    ['water', '/ˈwɔːtə(r)/', 'n', 'nước', 'Can I have some water?'],
    ['rice', '/raɪs/', 'n', 'cơm, gạo', 'We eat rice every day.'],
    ['bread', '/bred/', 'n', 'bánh mì', 'I eat bread for breakfast.'],
    ['egg', '/eɡ/', 'n', 'quả trứng', 'I want two eggs.'],
    ['chicken', '/ˈtʃɪkɪn/', 'n', 'thịt gà, con gà', 'I like fried chicken.'],
    ['fish', '/fɪʃ/', 'n', 'cá', 'My mother cooks fish.'],
    ['meat', '/miːt/', 'n', 'thịt', "He doesn't eat meat."],
    ['apple', '/ˈæpl/', 'n', 'quả táo', 'I eat an apple every day.'],
    ['banana', '/bəˈnɑːnə/', 'n', 'quả chuối', 'Monkeys love bananas.'],
    ['milk', '/mɪlk/', 'n', 'sữa', 'The baby drinks milk.'],
    ['coffee', '/ˈkɒfi/', 'n', 'cà phê', 'I drink coffee every morning.'],
    ['tea', '/tiː/', 'n', 'trà', 'Would you like some tea?'],
    ['breakfast', '/ˈbrekfəst/', 'n', 'bữa sáng', 'I have breakfast at seven.'],
    ['dinner', '/ˈdɪnə(r)/', 'n', 'bữa tối', 'Dinner is ready!'],
  ]},
  { id: 'verbs', name: 'Động từ thường dùng', icon: '🏃', words: [
    ['go', '/ɡəʊ/', 'v', 'đi', 'I go to work by bus.'],
    ['come', '/kʌm/', 'v', 'đến', 'Come here, please.'],
    ['eat', '/iːt/', 'v', 'ăn', 'What do you want to eat?'],
    ['drink', '/drɪŋk/', 'v', 'uống', 'Drink more water.'],
    ['sleep', '/sliːp/', 'v', 'ngủ', 'I sleep eight hours a day.'],
    ['work', '/wɜːk/', 'v', 'làm việc', 'She works at a bank.'],
    ['study', '/ˈstʌdi/', 'v', 'học', 'I study English every day.'],
    ['read', '/riːd/', 'v', 'đọc', 'I read a book before bed.'],
    ['write', '/raɪt/', 'v', 'viết', 'Please write your name here.'],
    ['speak', '/spiːk/', 'v', 'nói', 'Do you speak English?'],
    ['listen', '/ˈlɪsn/', 'v', 'nghe', 'Listen to me, please.'],
    ['buy', '/baɪ/', 'v', 'mua', 'I want to buy a new phone.'],
    ['want', '/wɒnt/', 'v', 'muốn', 'I want some coffee.'],
    ['like', '/laɪk/', 'v', 'thích', 'I like music.'],
    ['help', '/help/', 'v', 'giúp đỡ', 'Can you help me?'],
  ]},
  { id: 'home', name: 'Nhà cửa, đồ vật', icon: '🏠', words: [
    ['house', '/haʊs/', 'n', 'ngôi nhà', 'This is my house.'],
    ['room', '/ruːm/', 'n', 'căn phòng', 'My room is small.'],
    ['door', '/dɔː(r)/', 'n', 'cửa ra vào', 'Please close the door.'],
    ['window', '/ˈwɪndəʊ/', 'n', 'cửa sổ', 'Open the window, please.'],
    ['table', '/ˈteɪbl/', 'n', 'cái bàn', 'The book is on the table.'],
    ['chair', '/tʃeə(r)/', 'n', 'cái ghế', 'Sit on the chair.'],
    ['bed', '/bed/', 'n', 'cái giường', 'I go to bed at eleven.'],
    ['kitchen', '/ˈkɪtʃɪn/', 'n', 'nhà bếp', 'My mother is in the kitchen.'],
    ['phone', '/fəʊn/', 'n', 'điện thoại', 'Where is my phone?'],
    ['book', '/bʊk/', 'n', 'quyển sách', 'This book is interesting.'],
    ['bag', '/bæɡ/', 'n', 'cái túi, cặp', 'My bag is heavy.'],
    ['key', '/kiː/', 'n', 'chìa khóa', "I can't find my key."],
    ['car', '/kɑː(r)/', 'n', 'ô tô', 'He has a red car.'],
    ['money', '/ˈmʌni/', 'n', 'tiền', "I don't have much money."],
    ['computer', '/kəmˈpjuːtə(r)/', 'n', 'máy tính', 'I use a computer at work.'],
  ]},
  { id: 'adj', name: 'Tính từ miêu tả', icon: '🎨', words: [
    ['good', '/ɡʊd/', 'adj', 'tốt, giỏi', 'This is a good idea.'],
    ['bad', '/bæd/', 'adj', 'xấu, tệ', 'The weather is bad today.'],
    ['big', '/bɪɡ/', 'adj', 'to, lớn', 'They live in a big house.'],
    ['small', '/smɔːl/', 'adj', 'nhỏ', 'I have a small dog.'],
    ['hot', '/hɒt/', 'adj', 'nóng', 'The coffee is very hot.'],
    ['cold', '/kəʊld/', 'adj', 'lạnh', 'It is cold in winter.'],
    ['happy', '/ˈhæpi/', 'adj', 'vui vẻ', 'I am happy today.'],
    ['sad', '/sæd/', 'adj', 'buồn', 'Why are you sad?'],
    ['beautiful', '/ˈbjuːtɪfl/', 'adj', 'đẹp', 'What a beautiful day!'],
    ['new', '/njuː/', 'adj', 'mới', 'I have a new job.'],
    ['old', '/əʊld/', 'adj', 'cũ, già', 'This car is old.'],
    ['easy', '/ˈiːzi/', 'adj', 'dễ', 'English is easy.'],
    ['difficult', '/ˈdɪfɪkəlt/', 'adj', 'khó', 'This test is difficult.'],
    ['cheap', '/tʃiːp/', 'adj', 'rẻ', 'This shirt is cheap.'],
    ['expensive', '/ɪkˈspensɪv/', 'adj', 'đắt', 'The hotel is expensive.'],
  ]},
  { id: 'places', name: 'Nơi chốn, nghề nghiệp', icon: '🏢', words: [
    ['school', '/skuːl/', 'n', 'trường học', 'My son goes to school.'],
    ['office', '/ˈɒfɪs/', 'n', 'văn phòng', 'I work in an office.'],
    ['hospital', '/ˈhɒspɪtl/', 'n', 'bệnh viện', 'She works at a hospital.'],
    ['market', '/ˈmɑːkɪt/', 'n', 'chợ', 'I buy fruit at the market.'],
    ['restaurant', '/ˈrestrɒnt/', 'n', 'nhà hàng', "Let's eat at a restaurant."],
    ['city', '/ˈsɪti/', 'n', 'thành phố', 'Hanoi is a big city.'],
    ['street', '/striːt/', 'n', 'con phố', 'I live on this street.'],
    ['teacher', '/ˈtiːtʃə(r)/', 'n', 'giáo viên', 'Our teacher is very kind.'],
    ['student', '/ˈstjuːdnt/', 'n', 'học sinh, sinh viên', 'I am a student.'],
    ['doctor', '/ˈdɒktə(r)/', 'n', 'bác sĩ', 'You should see a doctor.'],
    ['nurse', '/nɜːs/', 'n', 'y tá', 'The nurse helps the doctor.'],
    ['engineer', '/ˌendʒɪˈnɪə(r)/', 'n', 'kỹ sư', 'My brother is an engineer.'],
    ['driver', '/ˈdraɪvə(r)/', 'n', 'tài xế', 'The bus driver is friendly.'],
    ['job', '/dʒɒb/', 'n', 'công việc', 'I love my job.'],
    ['company', '/ˈkʌmpəni/', 'n', 'công ty', 'He works for a big company.'],
  ]},
];

// 44 âm IPA: [ký hiệu, nhóm, ví dụ, mẹo phát âm]
const IPA = [
  ['ɪ', 'short', ['sit', 'big', 'fish'], '"i" ngắn và lỏng, bật nhanh, miệng hơi mở. Ngắn hơn "i" tiếng Việt.'],
  ['e', 'short', ['bed', 'red', 'ten'], 'Gần "e" tiếng Việt, miệng mở vừa phải.'],
  ['æ', 'short', ['cat', 'bad', 'apple'], 'Giữa "a" và "e": miệng mở rộng, hạ hàm dưới, như nói "e" với miệng thật to.'],
  ['ʌ', 'short', ['cup', 'bus', 'love'], 'Gần "ă" tiếng Việt, ngắn và dứt khoát.'],
  ['ɒ', 'short', ['hot', 'dog', 'stop'], 'Gần "o" tiếng Việt nhưng ngắn, môi hơi tròn.'],
  ['ʊ', 'short', ['put', 'book', 'good'], 'Gần "u" nhưng ngắn, môi tròn và lỏng.'],
  ['ə', 'short', ['about', 'teacher', 'banana'], '"ơ" rất nhẹ và ngắn, nằm ở âm tiết không nhấn. Đây là âm phổ biến nhất tiếng Anh.'],
  ['iː', 'long', ['see', 'eat', 'tree'], '"i" kéo dài, môi dẹt sang hai bên như đang cười.'],
  ['ɑː', 'long', ['car', 'father', 'start'], '"a" kéo dài, miệng mở rộng, lưỡi hạ thấp.'],
  ['ɔː', 'long', ['door', 'four', 'walk'], '"o" kéo dài, môi tròn.'],
  ['uː', 'long', ['too', 'food', 'blue'], '"u" kéo dài, môi tròn và chu ra.'],
  ['ɜː', 'long', ['bird', 'work', 'learn'], '"ơ" kéo dài, lưỡi ở giữa miệng.'],
  ['eɪ', 'diph', ['day', 'name', 'rain'], 'Từ "e" lướt nhanh sang "i", nghe gần như "ây".'],
  ['aɪ', 'diph', ['my', 'time', 'five'], 'Từ "a" lướt sang "i", nghe như "ai".'],
  ['ɔɪ', 'diph', ['boy', 'toy', 'coin'], 'Từ "o" lướt sang "i", nghe như "oi".'],
  ['aʊ', 'diph', ['now', 'house', 'down'], 'Từ "a" lướt sang "u", nghe như "ao".'],
  ['əʊ', 'diph', ['go', 'home', 'phone'], 'Từ "ơ" lướt sang "u", nghe như "âu".'],
  ['ɪə', 'diph', ['ear', 'here', 'near'], 'Từ "i" lướt sang "ơ", nghe như "ia".'],
  ['eə', 'diph', ['hair', 'where', 'chair'], 'Từ "e" lướt sang "ơ", nghe như "e-ơ".'],
  ['ʊə', 'diph', ['tour', 'pure', 'sure'], 'Từ "u" lướt sang "ơ", nghe như "ua".'],
  ['p', 'cons', ['pen', 'cup', 'happy'], 'Mím môi rồi bật mạnh hơi ra (để tay trước miệng sẽ thấy luồng hơi). Ở cuối từ vẫn phải bật nhẹ.'],
  ['b', 'cons', ['bad', 'job', 'baby'], 'Như "b" tiếng Việt. Ở cuối từ (job) vẫn phải nghe rõ.'],
  ['t', 'cons', ['tea', 'cat', 'water'], 'Đầu lưỡi chạm lợi trên rồi bật hơi, gần "th" nhẹ. Không được bỏ âm "t" ở cuối từ.'],
  ['d', 'cons', ['dog', 'bed', 'day'], 'Gần "đ" tiếng Việt, đầu lưỡi chạm lợi trên.'],
  ['k', 'cons', ['cat', 'book', 'key'], 'Như "c/k" nhưng bật hơi mạnh. Phải có âm cuối (book).'],
  ['ɡ', 'cons', ['get', 'big', 'go'], 'Như "g" tiếng Việt.'],
  ['f', 'cons', ['fish', 'off', 'phone'], 'Như "ph": răng trên chạm môi dưới rồi thổi hơi.'],
  ['v', 'cons', ['van', 'love', 'very'], 'Như "v": răng trên chạm môi dưới, cổ họng rung.'],
  ['θ', 'cons', ['think', 'three', 'bath'], 'Đặt đầu lưỡi giữa hai hàm răng rồi thổi hơi, không rung. Đừng đọc thành "th" hay "t".'],
  ['ð', 'cons', ['this', 'mother', 'they'], 'Giống θ (lưỡi giữa hai răng) nhưng cổ họng rung, nghe gần "đ".'],
  ['s', 'cons', ['see', 'bus', 'city'], 'Như "x" tiếng Việt, âm gió. Âm "s" cuối rất quan trọng (cats, books).'],
  ['z', 'cons', ['zoo', 'is', 'rose'], 'Giống "s" nhưng cổ họng rung, như tiếng ong "zzz".'],
  ['ʃ', 'cons', ['she', 'fish', 'nation'], 'Như "s" nặng, môi chu ra phía trước.'],
  ['ʒ', 'cons', ['vision', 'usually', 'measure'], 'Giống ʃ nhưng cổ họng rung.'],
  ['h', 'cons', ['hat', 'hello', 'who'], 'Như "h" tiếng Việt, chỉ là một hơi thở nhẹ.'],
  ['tʃ', 'cons', ['chair', 'watch', 'teacher'], 'Gần "ch" nhưng môi chu ra và bật mạnh hơn.'],
  ['dʒ', 'cons', ['job', 'age', 'orange'], 'Giống tʃ nhưng cổ họng rung, nghe như "dj".'],
  ['m', 'cons', ['man', 'home', 'summer'], 'Như "m" tiếng Việt.'],
  ['n', 'cons', ['no', 'sun', 'ten'], 'Như "n" tiếng Việt. Ở cuối từ, đầu lưỡi chạm lợi trên.'],
  ['ŋ', 'cons', ['sing', 'long', 'English'], 'Như "ng" tiếng Việt.'],
  ['l', 'cons', ['leg', 'ball', 'hello'], 'Như "l". Ở cuối từ (ball), đầu lưỡi vẫn phải chạm lợi trên, đừng bỏ âm này.'],
  ['r', 'cons', ['red', 'very', 'sorry'], 'Không rung lưỡi như "r" tiếng Việt: cong lưỡi ra sau, không chạm vòm miệng, môi hơi tròn.'],
  ['w', 'cons', ['wet', 'we', 'window'], 'Môi tròn rồi mở nhanh ra, như "qu" hoặc "oa".'],
  ['j', 'cons', ['yes', 'you', 'year'], 'Như "i" lướt nhanh: "yes" đọc gần như "i-ét".'],
];

// Ngữ pháp: nội dung HTML + câu hỏi [câu hỏi, lựa chọn, đáp án đúng (chỉ số), giải thích]
const GRAMMAR = [
  {
    id: 'g1', title: 'Động từ to be', sub: 'am / is / are',
    html: `
<p>Động từ <b>to be</b> nghĩa là <b>"thì, là, ở"</b>. Nó được dùng để nói về tên, nghề nghiệp, tuổi, quê quán, tính chất và vị trí.</p>
<div class="formula">I → <b>am</b><br>He / She / It / danh từ số ít → <b>is</b><br>You / We / They / danh từ số nhiều → <b>are</b></div>
<table class="gtable">
<tr><th>Khẳng định</th><td>She <b>is</b> a nurse.</td></tr>
<tr><th>Phủ định</th><td>She <b>is not</b> (isn't) a nurse.</td></tr>
<tr><th>Câu hỏi</th><td><b>Is</b> she a nurse? — Yes, she is.</td></tr>
</table>
<div class="tip">⚠️ <b>Lỗi hay gặp:</b> người Việt hay quên to be trước tính từ.<br>❌ I happy. → ✅ I <b>am</b> happy.<br>❌ I have 20 years old. → ✅ I <b>am</b> 20 years old.</div>`,
    quiz: [
      ['She ___ a teacher.', ['am', 'is', 'are'], 1, 'She là ngôi thứ ba số ít nên dùng "is".'],
      ['We ___ from Vietnam.', ['am', 'is', 'are'], 2, 'We đi với "are".'],
      ['I ___ not tired.', ['am', 'is', 'are'], 0, 'I luôn đi với "am".'],
      ['___ they your friends?', ['Is', 'Are', 'Am'], 1, 'Câu hỏi thì đảo "are" lên đầu, vì they đi với are.'],
      ['Câu nào đúng?', ['I happy.', 'I am happy.', 'I is happy.'], 1, 'Trước tính từ phải có to be: I am happy.'],
    ],
  },
  {
    id: 'g2', title: 'Hiện tại đơn', sub: 'Thói quen, sự thật',
    html: `
<p>Dùng để nói về <b>thói quen</b>, <b>sự thật hiển nhiên</b> và <b>lịch trình</b>.</p>
<div class="formula">I / You / We / They + <b>V</b><br>He / She / It + <b>V-s/es</b></div>
<ul>
<li>Động từ tận cùng bằng <b>o, s, x, ch, sh, z</b> thì thêm <b>es</b>: go → goes, watch → watches</li>
<li>Phụ âm + <b>y</b> thì đổi thành <b>ies</b>: study → studies</li>
<li>have → <b>has</b></li>
</ul>
<table class="gtable">
<tr><th>Phủ định</th><td>I <b>don't</b> like milk. / He <b>doesn't</b> like milk.</td></tr>
<tr><th>Câu hỏi</th><td><b>Do</b> you like tea? / <b>Does</b> she like tea?</td></tr>
</table>
<div class="tip">💡 <b>Dấu hiệu nhận biết:</b> always, usually, often, sometimes, never, every day.<br>⚠️ Sau don't/doesn't/does thì động từ <b>không thêm s</b>: He doesn't <b>like</b> (không phải likes).</div>`,
    quiz: [
      ['He ___ coffee every morning.', ['drink', 'drinks', 'drinking'], 1, 'He là ngôi thứ ba số ít nên thêm s: drinks.'],
      ['She ___ TV in the evening.', ['watchs', 'watches', 'watch'], 1, 'Watch tận cùng bằng "ch" nên thêm es.'],
      ['They ___ like fish.', ["doesn't", "don't", 'not'], 1, "They đi với don't."],
      ['___ your brother work here?', ['Do', 'Does', 'Is'], 1, 'Your brother là ngôi thứ ba số ít nên dùng Does.'],
      ['My mother ___ English.', ['studies', 'studys', 'study'], 0, 'Study tận cùng là phụ âm + y nên đổi thành studies.'],
    ],
  },
  {
    id: 'g3', title: 'Hiện tại tiếp diễn', sub: 'Đang xảy ra',
    html: `
<p>Dùng cho hành động <b>đang xảy ra</b> ngay lúc nói, hoặc kế hoạch gần đã sắp xếp.</p>
<div class="formula">S + <b>am / is / are</b> + <b>V-ing</b></div>
<ul>
<li>Tận cùng là <b>e</b> thì bỏ e: make → making</li>
<li>Một nguyên âm + một phụ âm thì gấp đôi phụ âm: run → running, sit → sitting</li>
</ul>
<table class="gtable">
<tr><th>Phủ định</th><td>I <b>am not</b> watching TV.</td></tr>
<tr><th>Câu hỏi</th><td><b>Are</b> you listening?</td></tr>
</table>
<div class="tip">💡 <b>Dấu hiệu:</b> now, right now, at the moment, Look!, Listen!<br>⚠️ Không dùng V-ing với động từ chỉ trạng thái: like, love, know, want, understand.</div>`,
    quiz: [
      ['Look! It ___.', ['rains', 'is raining', 'rain'], 1, '"Look!" cho thấy việc đang xảy ra, nên dùng is raining.'],
      ['I ___ dinner now.', ['am cooking', 'cook', 'cooks'], 0, '"now" là dấu hiệu của hiện tại tiếp diễn.'],
      ['They ___ football at the moment.', ['is playing', 'are playing', 'play'], 1, 'They đi với are, rồi thêm V-ing.'],
      ['Câu nào đúng?', ['I am knowing him.', 'I know him.', 'I knowing him.'], 1, '"know" là động từ trạng thái nên không chia tiếp diễn.'],
      ['She is ___ in the park.', ['runing', 'running', 'runs'], 1, 'Run có một nguyên âm và một phụ âm cuối nên gấp đôi n: running.'],
    ],
  },
  {
    id: 'g4', title: 'Quá khứ đơn', sub: 'Việc đã xảy ra',
    html: `
<p>Dùng cho việc <b>đã xảy ra và đã kết thúc</b> trong quá khứ.</p>
<div class="formula">to be: I / He / She / It + <b>was</b> — You / We / They + <b>were</b><br>Động từ thường: S + <b>V-ed</b> (hoặc cột 2 của động từ bất quy tắc)</div>
<table class="gtable">
<tr><th>Phủ định</th><td>I <b>didn't go</b> to work.</td></tr>
<tr><th>Câu hỏi</th><td><b>Did</b> you <b>see</b> the film?</td></tr>
</table>
<p><b>Động từ bất quy tắc thường gặp:</b></p>
<table class="gtable">
<tr><td>go → went</td><td>eat → ate</td></tr>
<tr><td>have → had</td><td>see → saw</td></tr>
<tr><td>buy → bought</td><td>make → made</td></tr>
<tr><td>take → took</td><td>come → came</td></tr>
<tr><td>get → got</td><td>do → did</td></tr>
</table>
<div class="tip">💡 <b>Dấu hiệu:</b> yesterday, last week, ago, in 2020.<br>⚠️ Sau didn't/did thì dùng động từ nguyên mẫu: I didn't <b>go</b> (không phải went).</div>`,
    quiz: [
      ['I ___ at home yesterday.', ['was', 'were', 'am'], 0, 'I đi với was.'],
      ['She ___ to Hanoi last week.', ['go', 'goes', 'went'], 2, '"last week" nên dùng quá khứ: go → went.'],
      ['We ___ watch TV last night.', ["didn't", "don't", "wasn't"], 0, "Phủ định quá khứ đơn: didn't + V."],
      ['___ you see the film?', ['Did', 'Do', 'Were'], 0, 'Câu hỏi quá khứ: Did + S + V?'],
      ['They ___ a new car two years ago.', ['buyed', 'bought', 'buy'], 1, 'Buy là động từ bất quy tắc: bought.'],
    ],
  },
  {
    id: 'g5', title: 'Tương lai', sub: 'will / be going to',
    html: `
<div class="formula"><b>will</b> + V: quyết định ngay lúc nói, dự đoán, lời hứa<br><b>am/is/are going to</b> + V: kế hoạch đã định trước, dự đoán có căn cứ</div>
<table class="gtable">
<tr><th>will</th><td>I'm thirsty. — I <b>will</b> get you some water.</td></tr>
<tr><th>going to</th><td>I <b>am going to</b> visit my parents next week.</td></tr>
<tr><th>Phủ định</th><td>I <b>won't</b> (will not) forget.</td></tr>
<tr><th>Câu hỏi</th><td><b>Will</b> you come? / <b>Are</b> you <b>going to</b> travel?</td></tr>
</table>
<div class="tip">💡 Nhìn thấy mây đen: "It <b>is going to</b> rain." (có căn cứ). Đoán chung chung: "I think it <b>will</b> rain."</div>`,
    quiz: [
      ["I'm thirsty. — I ___ get you some water.", ['will', 'am going to', 'going'], 0, 'Quyết định ngay lúc nói thì dùng will.'],
      ['Look at those clouds! It ___ rain.', ['is going to', 'will to', 'goes'], 0, 'Dự đoán có căn cứ (thấy mây) thì dùng be going to.'],
      ['We ___ visit our grandparents next Sunday. (đã lên kế hoạch)', ['are going to', 'will to', 'going to'], 0, 'Kế hoạch có từ trước thì dùng be going to.'],
      ['I promise I ___ tell anyone.', ["won't", "don't", 'am not'], 0, "Lời hứa thì dùng will/won't."],
      ['Will you ___ me?', ['helping', 'help', 'to help'], 1, 'Sau will là động từ nguyên mẫu.'],
    ],
  },
  {
    id: 'g6', title: 'Hiện tại hoàn thành', sub: 'have / has + V3',
    html: `
<p>Dùng để nói về <b>trải nghiệm</b> (đã từng), việc <b>vừa mới xong</b>, hoặc việc <b>kéo dài từ quá khứ đến nay</b>.</p>
<div class="formula">I / You / We / They + <b>have</b> + V3<br>He / She / It + <b>has</b> + V3</div>
<table class="gtable">
<tr><th>Trải nghiệm</th><td>I <b>have been</b> to Da Lat.</td></tr>
<tr><th>Vừa xong</th><td>She <b>has just finished</b> her work.</td></tr>
<tr><th>Kéo dài</th><td>I <b>have lived</b> here <b>for</b> 5 years / <b>since</b> 2019.</td></tr>
</table>
<div class="tip">💡 <b>for</b> + khoảng thời gian (for 2 years). <b>since</b> + mốc thời gian (since Monday).<br>Dấu hiệu: ever, never, just, already, yet.</div>`,
    quiz: [
      ['I ___ never been to Japan.', ['have', 'has', 'am'], 0, 'I đi với have.'],
      ['She ___ just finished her homework.', ['have', 'has', 'is'], 1, 'She đi với has.'],
      ['I have lived here ___ 2019.', ['for', 'since', 'in'], 1, '2019 là mốc thời gian nên dùng since.'],
      ['They have worked here ___ five years.', ['since', 'for', 'ago'], 1, '"five years" là khoảng thời gian nên dùng for.'],
      ['Have you ever ___ sushi?', ['eat', 'ate', 'eaten'], 2, 'Sau have là V3: eat → eaten.'],
    ],
  },
  {
    id: 'g7', title: 'Mạo từ', sub: 'a / an / the',
    html: `
<table class="gtable">
<tr><th>a</th><td>trước từ bắt đầu bằng <b>phụ âm</b> (theo cách đọc): a book, a <b>u</b>niversity /juː/</td></tr>
<tr><th>an</th><td>trước từ bắt đầu bằng <b>nguyên âm</b> (theo cách đọc): an apple, an <b>h</b>our /aʊə/</td></tr>
<tr><th>the</th><td>vật đã xác định, đã nhắc đến, hoặc duy nhất: the sun, the book on the table</td></tr>
</table>
<div class="tip">💡 <b>Không dùng mạo từ</b> khi nói chung về danh từ số nhiều hoặc không đếm được (I like cats, I like music), trước bữa ăn (have breakfast), môn học và hầu hết tên nước.</div>`,
    quiz: [
      ['I have ___ apple.', ['a', 'an', 'the'], 1, 'Apple bắt đầu bằng nguyên âm nên dùng an.'],
      ['She is ___ university student.', ['a', 'an', 'the'], 0, 'University đọc là /juː/, tức bắt đầu bằng âm phụ âm, nên dùng a.'],
      ['___ sun is very hot today.', ['A', 'An', 'The'], 2, 'Mặt trời là duy nhất nên dùng the.'],
      ['I waited for ___ hour.', ['a', 'an', 'the'], 1, 'Chữ h trong hour là âm câm, từ này đọc bắt đầu bằng nguyên âm nên dùng an.'],
      ['I like ___ music.', ['the', 'a', '(không dùng)'], 2, 'Nói chung về âm nhạc thì không dùng mạo từ.'],
    ],
  },
  {
    id: 'g8', title: 'Giới từ in / on / at', sub: 'Thời gian và nơi chốn',
    html: `
<p><b>Thời gian:</b></p>
<table class="gtable">
<tr><th>at</th><td>giờ, thời điểm: at 7 o'clock, at night, at noon</td></tr>
<tr><th>on</th><td>ngày, thứ: on Monday, on 2nd May, on my birthday</td></tr>
<tr><th>in</th><td>tháng, năm, mùa, buổi: in May, in 2025, in summer, in the morning</td></tr>
</table>
<p><b>Nơi chốn:</b></p>
<table class="gtable">
<tr><th>at</th><td>một điểm cụ thể: at home, at school, at the bus stop</td></tr>
<tr><th>on</th><td>trên bề mặt: on the table, on the wall, on the second floor</td></tr>
<tr><th>in</th><td>bên trong, khu vực lớn: in the room, in Hanoi, in Vietnam</td></tr>
</table>
<div class="tip">💡 Mẹo nhớ theo kích thước: <b>in</b> (lớn nhất) → <b>on</b> → <b>at</b> (nhỏ, cụ thể nhất).</div>`,
    quiz: [
      ["I get up ___ 6 o'clock.", ['in', 'on', 'at'], 2, 'Giờ cụ thể thì dùng at.'],
      ['My birthday is ___ June.', ['in', 'on', 'at'], 0, 'Tháng thì dùng in.'],
      ['See you ___ Monday.', ['in', 'on', 'at'], 1, 'Thứ trong tuần thì dùng on.'],
      ['The book is ___ the table.', ['in', 'on', 'at'], 1, 'Trên bề mặt thì dùng on.'],
      ['She lives ___ Ho Chi Minh City.', ['in', 'on', 'at'], 0, 'Thành phố là khu vực lớn nên dùng in.'],
    ],
  },
  {
    id: 'g9', title: 'Câu hỏi Wh-', sub: 'What, Where, When…',
    html: `
<table class="gtable">
<tr><th>What</th><td>cái gì</td><th>Where</th><td>ở đâu</td></tr>
<tr><th>When</th><td>khi nào</td><th>Who</th><td>ai</td></tr>
<tr><th>Why</th><td>tại sao</td><th>How</th><td>như thế nào</td></tr>
<tr><th>How much</th><td>bao nhiêu (tiền)</td><th>What time</th><td>mấy giờ</td></tr>
</table>
<div class="formula">Wh- + <b>trợ động từ</b> (am/is/are/do/does/did/can/will) + S + V?</div>
<ul>
<li><b>Where</b> do you live? — In Hanoi.</li>
<li><b>What</b> is your name? — My name is Lan.</li>
<li><b>Why</b> are you sad? — <b>Because</b> I lost my phone.</li>
</ul>`,
    quiz: [
      ['___ do you live? — In Hanoi.', ['What', 'Where', 'When'], 1, 'Câu trả lời là một nơi chốn nên dùng Where.'],
      ['___ is your birthday? — On 5th May.', ['When', 'Who', 'Why'], 0, 'Câu trả lời là thời gian nên dùng When.'],
      ['___ are you sad? — Because I lost my phone.', ['How', 'Why', 'What'], 1, 'Câu trả lời có Because nên hỏi bằng Why.'],
      ['___ much is this shirt?', ['What', 'How', 'Which'], 1, 'Hỏi giá tiền thì dùng How much.'],
      ['Where ___ she work?', ['do', 'does', 'is'], 1, 'She là ngôi thứ ba số ít nên dùng does.'],
    ],
  },
];
