# Hệ thống học liệu Tin học THPT

Website học liệu tĩnh dành cho học sinh Trường THPT Chuyên Bến Tre. Có thể triển khai trực tiếp bằng GitHub Pages hoặc bất kỳ máy chủ tĩnh nào.

## Cấu trúc

- `index.html`: khung HTML và các vùng giao diện.
- `styles.css`: giao diện responsive, focus và reduced motion.
- `app.js`: điều hướng bằng URL hash, tải dữ liệu khóa học, trình đọc PDF và các tương tác.
- `data.js`: thông tin giáo viên, danh mục khóa học và công cụ dạy học.
- `data-chinh-khoa/`, `data-chuyen/`, `data-khac/`: nội dung từng khóa học.

## Phạm vi khóa học

- `data-chinh-khoa/tin10.js`: chương trình Tin học 10 chính khóa, chuẩn hóa từ nội dung khóa hiện có.
- `Bài 1: Thông tin và xử lí thông tin` dùng cấu trúc chi tiết theo từng đơn vị kiến thức, đối chiếu SGK Kết nối tri thức trang 6–10 và câu hỏi gợi mở theo ba mức.
- `data-chinh-khoa/tin11.js`: 31 bài Tin học ứng dụng 11, chuyển đổi từ `KHBD/Giáo án Tin học 11-THUD -HKI.docx`.
- Mỗi bài dùng cùng hành trình: Mục tiêu → Khởi động → Khám phá → Luyện tập → Vận dụng và tự đánh giá.
- `Bài 14: SQL – Ngôn ngữ truy vấn có cấu trúc` có 4 đơn vị kiến thức, đánh giá cuối bài và bảng đối chiếu KHBD–SGK trang 69–72.
- Nội dung tương tác phải dùng phần tử semantic, hoạt động bằng bàn phím và hướng tới WCAG 2.2 AA.

## Cập nhật bài học

Mở file dữ liệu tương ứng và thêm bài học vào mảng `lessons`:

```js
{
    title: "Tên bài học",
    videoId: "Mã_YouTube",
    desc: "Mô tả ngắn",
    downloadUrl: "Liên kết tài liệu"
}
```

- `videoId` chỉ chứa phần mã sau `watch?v=` trong URL YouTube.
- Dùng `pdfUrl` khi muốn hiển thị PDF trực tiếp trong trang.
- Đặt trường không sử dụng thành `null`.
- `dataPath` trong `data.js` phải trùng chính xác với đường dẫn file.
- Đặt `available: false` cho khóa học chưa có file nội dung; giao diện sẽ hiển thị trạng thái “Chưa khả dụng” và không gửi yêu cầu lỗi.

## Chạy cục bộ

```bash
python -m http.server 8765 --bind 127.0.0.1
```

Mở `http://127.0.0.1:8765`.
