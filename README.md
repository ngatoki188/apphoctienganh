# Học Tiếng Anh

Web app học tiếng Anh (PWA), cài được lên điện thoại và dùng offline. Không cần build, không cần thư viện.

## Tính năng
- **Ghép câu** (theo cơ chế Earthworm): 14 bài với 182 câu, gồm 8 bài cơ bản và 6 bài ngữ cảnh TOEIC (email, họp, gọi điện, lịch hẹn, chăm sóc khách hàng, công tác). Nhìn nghĩa tiếng Việt rồi gõ câu tiếng Anh, câu dài dần. Có chế độ xếp từ cho điện thoại, nghe phát âm, luyện nói bằng micro.
- **Từ vựng**: 300 từ TOEIC trong 12 chủ đề (kèm từ đồng nghĩa và cụm từ hay dùng) và 120 từ cơ bản, ôn bằng flashcard lặp lại ngắt quãng.
- **Luyện cụm từ**: điền từ còn thiếu, ví dụ `___ a deadline` → meet. Câu hỏi được tạo tự động từ các cụm từ trong dữ liệu. Làm sai một từ đã học thì từ đó được đưa vào lượt ôn ngay.
- **Phát âm**: bảng 44 âm IPA kèm mẹo đọc cho người Việt.
- **Ngữ pháp**: 9 bài nền tảng, mỗi bài có 5 câu luyện tập.

## Chạy trên máy tính
```
python -m http.server 5173
```
Sau đó mở http://localhost:5173

## Đưa lên điện thoại
PWA cần chạy qua HTTPS, nên cần đưa app lên mạng (miễn phí):
- **Netlify Drop**: vào https://app.netlify.com/drop rồi kéo thả cả thư mục này vào, bạn sẽ nhận được một đường link.
- **GitHub Pages**: đẩy thư mục lên một repo GitHub, rồi bật Settings → Pages.

Mở link đó trên điện thoại:
- **Android (Chrome)**: bấm nút "Cài app" trên trang chủ.
- **iPhone (Safari)**: bấm nút Chia sẻ rồi chọn "Thêm vào MH chính".

## Thêm nội dung
- `data.js`: bài ghép câu, 80 từ TOEIC gốc, từ cơ bản, IPA, ngữ pháp.
- `toeic-words.js`: từ TOEIC bổ sung và 4 chủ đề mới. Định dạng mỗi từ: `[từ, IPA, loại từ, nghĩa, ví dụ, 'đồng nghĩa 1, đồng nghĩa 2', [[cụm từ, nghĩa], ...]]`.

Khi có mạng, app luôn tải bản mới nhất. Bản lưu trong bộ nhớ đệm chỉ dùng khi mất mạng.

Tiến độ học lưu trên từng máy. Muốn chuyển sang máy khác thì vào Cài đặt → Xuất file / Nhập file.
