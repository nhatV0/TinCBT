---
name: khbd-tolesson
description: Skill này được dùng khi chuyển Kế hoạch bài dạy (KHBD), giáo án hoặc tiến trình dạy học có sẵn thành bài học tương tác hoàn chỉnh cho học sinh; bắt buộc bóc tách từng đơn vị kiến thức, đối chiếu KHBD với sách giáo khoa (SGK), trình bày lý thuyết đủ chiều sâu và xây dựng câu hỏi gợi mở theo tầng nhận thức, kèm phản hồi, đánh giá và bảng truy vết nguồn.
---

# Chuyển KHBD thành bài học tương tác

## Mục đích

Chuyển KHBD đã có thành hành trình học tập sẵn sàng sử dụng, bám đúng mục tiêu, yêu cầu cần đạt, nội dung, thời lượng và điều kiện tổ chức. Thiết kế tương tác để tạo minh chứng học tập, không trang trí hoặc biến KHBD thành bản trình chiếu tuyến tính.

## Phạm vi

- Nhận KHBD dưới dạng văn bản, PDF, DOCX hoặc tệp đính kèm.
- Tạo kịch bản không phụ thuộc nền tảng cho học sinh tự học hoặc giáo viên tổ chức trên lớp.
- Mặc định chỉ tạo nội dung và kịch bản; không viết mã khi người dùng chưa yêu cầu.
- Khi cần mã triển khai, xác định nền tảng trước rồi kích hoạt skill kỹ thuật phù hợp.
- Không dùng skill này để tạo KHBD mới từ đầu; dùng skill KHBD chuyên môn tương ứng cho yêu cầu đó.

## Thứ tự ưu tiên nguồn

Phân vai nguồn trước khi viết:

1. Dùng **KHBD** để khóa mục tiêu/YCCĐ, thời lượng, chuỗi hoạt động, sản phẩm, hình thức tổ chức và cách đánh giá.
2. Dùng **đúng SGK của môn, lớp, bộ sách và bài học** để triển khai thuật ngữ, mạch kiến thức, giải thích, ví dụ, hình/bảng và câu hỏi học tập.
3. Dùng tài liệu giáo viên hoặc tài liệu kèm theo để làm rõ cách tổ chức khi không mâu thuẫn với KHBD và SGK.

Không dùng trí nhớ chung thay cho việc đọc SGK. Không tự chọn SGK khác bộ. Không ghi số trang, tên mục, hình hoặc bảng nếu chưa kiểm tra trực tiếp. Khi KHBD và SGK khác nhau, giữ YCCĐ/phạm vi của KHBD, ghi rõ điểm lệch và chỉ dùng SGK để làm sáng tỏ phần nằm trong phạm vi đó.

## Phân tuyến chuyên môn

Nạp quy tắc chuyên môn phù hợp để hiểu và kiểm tra KHBD nguồn:

- Môn Tin học: dùng `tao-khbd-tin-hoc`.
- Hoạt động trải nghiệm, hướng nghiệp lớp 10–12: dùng `tao-khbd`.
- Các môn khác: dùng `tao-khbd-da-mon`.

Chỉ dùng các skill trên để kiểm tra cấu trúc, thuật ngữ, YCCĐ và minh chứng. Không tự sửa hoặc thay mục tiêu của KHBD nguồn nếu người dùng chỉ yêu cầu chuyển đổi.

## Quy trình bắt buộc

### 1. Nạp và khóa nguồn

Đọc toàn bộ KHBD, đúng bài/chủ đề trong SGK và tài liệu kèm theo trước khi thiết kế. Với PDF hoặc DOCX, kích hoạt skill đọc định dạng tương ứng; giữ được bảng, bố cục, chú thích, số trang và cấu trúc đề mục.

Xác định:

1. môn học, lớp, bộ sách, tên bài/chủ đề và phạm vi trang SGK;
2. thời lượng và hình thức tổ chức;
3. mục tiêu/YCCĐ;
4. chuỗi **đơn vị bài học** theo các đề mục, khái niệm, quy trình hoặc thao tác thực hành trong KHBD và SGK;
5. kiến thức, kĩ năng, thuật ngữ, ví dụ, hình/bảng và điều kiện áp dụng bắt buộc của từng đơn vị;
6. chuỗi hoạt động, nhiệm vụ, sản phẩm;
7. phương tiện, học liệu và điều kiện lớp học;
8. cách đánh giá đã có trong KHBD.

Không khẳng định nội dung không đọc được. Không dùng kiến thức ngoài nguồn để lấp chỗ trống. Nếu người dùng chỉ cung cấp KHBD, tìm SGK trong tệp, thư mục hoặc liên kết mà người dùng đã cung cấp. Nếu vẫn không có đúng SGK, nêu thiếu nguồn và chỉ thiết kế khung theo KHBD; không tự nhận phần lý thuyết đã được đối chiếu SGK.

### 2. Xử lý thông tin thiếu

Chỉ hỏi tối đa 3 câu khi thiếu thông tin thiết yếu khiến không thể thiết kế đúng, ví dụ:

- không có nội dung KHBD hoặc tệp không thể truy cập;
- không xác định được đối tượng học sinh;
- không xác định được đúng SGK/bộ sách hoặc không đọc được bài tương ứng;
- mâu thuẫn lớn về thời lượng, mục tiêu hoặc phạm vi giữa KHBD và SGK.

Với chi tiết nhỏ, nêu giả định ngắn và tiếp tục. Không giả định bộ sách, số trang hoặc nội dung SGK. Nếu chưa có nền tảng, thiết kế không phụ thuộc nền tảng. Nếu chưa rõ hình thức, ưu tiên giáo viên tổ chức trên lớp và ghi giả định.

### 3. Lập bản kiểm soát nội bộ

Lập hai bảng nội bộ, không xuất quá trình suy luận:

1. `Mục tiêu/YCCĐ → hoạt động KHBD → đơn vị bài học → sản phẩm/minh chứng → tiêu chí đánh giá → thời lượng`.
2. `Đơn vị bài học → vị trí trong KHBD → mục/tiểu mục và trang SGK → kiến thức phải giải thích → ví dụ/đối chứng → lỗi hiểu thường gặp → câu hỏi theo tầng`.

Khóa hai bảng trước khi viết. Mỗi mục tiêu phải có ít nhất một hoạt động và một minh chứng; mỗi tương tác phải phục vụ một mục tiêu. Mỗi đơn vị bài học phải truy được đồng thời về KHBD và SGK, hoặc được đánh dấu rõ `Chỉ có trong KHBD`/`Chỉ có trong SGK`. Không gộp nhiều đơn vị thành một cụm “kiến thức trọng tâm” chung.

### 4. Phân rã đơn vị và thiết kế hành trình

Chia bài thành các đơn vị nhỏ theo cấu trúc thật của bài: một khái niệm, quan hệ, nguyên lí, quy trình, kĩ năng hoặc nhiệm vụ thực hành có thể học và kiểm tra độc lập. Không mặc định một bài SGK là một đơn vị duy nhất. Không chia máy móc theo số đoạn hoặc số trang.

Tổ chức thành các chặng:

1. Khởi động và nêu vấn đề.
2. Khám phá/hình thành kiến thức theo từng đơn vị.
3. Luyện tập ngay sau mỗi đơn vị, từ nhận biết đến giải thích và áp dụng.
4. Tích hợp các đơn vị trong nhiệm vụ vận dụng.
5. Tổng kết, đánh giá và tự đánh giá.

Giữ các hoạt động cần thiết của KHBD. Cho phép chia nhỏ hoặc đổi cách trình bày nhưng không xóa mục tiêu, đổi bản chất nhiệm vụ hoặc thêm kiến thức ngoài phạm vi. Gắn thời lượng cho từng chặng và bảo đảm tổng thời gian khớp KHBD. Đọc `references/content-depth-and-questioning.md` trước khi viết nội dung.

### 5. Chọn tương tác

Chọn tương tác theo hành vi cần đánh giá, không theo độ hấp dẫn bề mặt:

- nhận biết/phân biệt: trắc nghiệm, đúng–sai, phân loại;
- liên hệ khái niệm: ghép đôi;
- quy trình/thứ tự: sắp xếp;
- thuật ngữ/cú pháp: điền khuyết;
- quan sát trực quan: chọn điểm trên hình;
- giải thích/lập luận: trả lời ngắn;
- tạo sản phẩm/thao tác: nhiệm vụ thực hành.

Không bắt buộc dùng mọi loại. Với kéo thả, chọn điểm hoặc tương tác phụ thuộc nền tảng, luôn nêu phương án thay thế bằng lựa chọn, đánh số hoặc phiếu học tập.

### 6. Viết nội dung hoàn chỉnh theo từng đơn vị

Với mỗi đơn vị bài học, viết đủ:

- tên đơn vị và thời gian;
- mục tiêu liên kết;
- vị trí đối chiếu trong KHBD và SGK;
- câu dẫn nối với đơn vị trước;
- phần lý thuyết đầy đủ theo chuẩn chiều sâu, không chỉ liệt kê ý chính;
- ví dụ, trường hợp đối chứng hoặc thao tác minh họa có trong nguồn;
- hành động học sinh thực hiện;
- chuỗi câu hỏi gợi mở theo tầng;
- nhiệm vụ luyện tập đầy đủ;
- đáp án hoặc tiêu chí;
- phản hồi đúng, phản hồi sai và lỗi hiểu thường gặp;
- điều kiện chuyển tiếp;
- hỗ trợ khi chưa hoàn thành;
- mở rộng khi phù hợp;
- tư liệu cần chuẩn bị;
- ghi chú GV/người thiết kế tách biệt.

Diễn giải bằng lời mới, ngắn gọn hơn SGK nhưng không làm mất định nghĩa, quan hệ, điều kiện, trình tự hoặc ngoại lệ cần thiết. Không sao chép dài nguyên văn SGK. Với câu hỏi mở, cung cấp câu trả lời tham khảo và rubric ngắn; chấp nhận nhiều cách diễn đạt đúng. Với tài nguyên chưa có, mô tả tài nguyên cần chuẩn bị và không bịa URL.

### 7. Thiết kế đánh giá cuối bài

Tạo bộ đánh giá bao phủ toàn bộ mục tiêu, không chỉ kiểm tra ghi nhớ. Kết hợp câu hỏi đóng, câu hỏi giải thích hoặc nhiệm vụ sản phẩm khi phù hợp.

Quy định rõ:

- đáp án và giải thích;
- điểm hoặc tiêu chí;
- ngưỡng đạt;
- cách hỗ trợ hoặc học lại khi chưa đạt;
- minh chứng dùng để kết luận mục tiêu đã đạt.

### 8. Xuất và tự kiểm tra

Đọc `references/content-depth-and-questioning.md` và `references/output-contract.md`, rồi tuân thủ cấu trúc A–D. Tự đối chiếu riêng với KHBD và SGK trước khi trả kết quả. Không xuất bản kiểm soát nội bộ hoặc chuỗi suy luận.

## Nguyên tắc chất lượng

- Viết trực tiếp cho học sinh, rõ nghĩa và phù hợp lứa tuổi.
- Phân biệt rõ `Học sinh nhìn thấy` và `Ghi chú GV/người thiết kế`.
- Giữ ranh giới rõ giữa `Tóm tắt` và `Nội dung học`: phần nội dung học không được rút thành 3–5 gạch đầu dòng chung chung.
- Mỗi đơn vị có ít nhất một câu hỏi buộc học sinh giải thích, so sánh, dự đoán hoặc áp dụng; không dùng toàn câu hỏi nhớ lại.
- Viết câu hỏi, lựa chọn, đáp án và phản hồi thật; không ghi “tạo câu hỏi tại đây”.
- Phản hồi sai phải giải thích lỗi và gợi ý thử lại, không chỉ báo “Sai”.
- Không bịa nguồn, đường dẫn, số liệu, hình ảnh, video hoặc yêu cầu chính thức.
- Không thêm AI, công nghệ hoặc trò chơi nếu không tạo minh chứng cho mục tiêu.
- Không viết mã, JSON, HTML hoặc cấu hình nền tảng nếu chưa được yêu cầu.

## Tài nguyên

- `references/content-depth-and-questioning.md`: chuẩn phân rã đơn vị, đối chiếu SGK, chiều sâu lý thuyết và câu hỏi gợi mở.
- `references/output-contract.md`: hợp đồng đầu ra, mẫu từng đơn vị/chặng, tiêu chí tương tác và checklist cuối.
