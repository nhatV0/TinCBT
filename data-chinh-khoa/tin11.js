// Tin học ứng dụng 11 — chuyển đổi từ KHBD cả năm trong thư mục KHBD.
(() => {
    "use strict";
    const L = window.createInteractiveLesson;
    const mk = (title, overview, points, warmup, warmupAnswer, check, checkAnswer, task, criteria = [], resources = []) => L({
        title,
        overview,
        goals: [overview, "Hoàn thành nhiệm vụ học tập và giải thích được kết quả.", "Tạo được minh chứng hoặc sản phẩm phù hợp yêu cầu KHBD."],
        warmup: { question: warmup, answer: warmupAnswer, feedback: "Đối chiếu với dữ kiện, thuật ngữ và tình huống trong KHBD." },
        concepts: [{ heading: "Kiến thức và thao tác trọng tâm", points }],
        practice: [
            { question: check, answer: checkAnswer, feedback: "Nếu chưa đúng, xác định khái niệm hoặc bước thao tác đang bị nhầm rồi thử lại." },
            { question: "Hãy tóm tắt bài học bằng ba ý và nêu một minh chứng thực hành.", answer: `${points.slice(0, 3).join("; ")}. Minh chứng phải là câu trả lời, tệp hoặc kết quả thao tác quan sát được.`, feedback: "Không chỉ chép định nghĩa; cần gắn kiến thức với minh chứng." }
        ],
        application: {
            task,
            criteria: criteria.length ? criteria : ["Đúng yêu cầu và thuật ngữ.", "Có kết quả hoặc sản phẩm kiểm chứng được.", "Trình bày rõ ràng, bảo vệ dữ liệu và tôn trọng bản quyền."],
            support: ["Đọc lại kiến thức trọng tâm.", "Chia nhiệm vụ thành từng bước.", "Dùng dữ liệu mẫu hoặc phương án ngoại tuyến khi thiếu tài khoản/mạng."]
        },
        resources
    });

    window.courseContent = [
        {
            chapterName: "Chương 0: Sách",
            lessons: [{ title: "Sách Giáo Khoa Tin học 11", videoId: "", desc: "Sách giáo khoa Kết nối tri thức với cuộc sống.", downloadUrl: "https://drive.google.com/file/d/1kuWgKPERcCXQU13OUndYyUm05w1oPKRB/view?usp=sharing" }]
        },
        {
            chapterName: "Chủ đề 1: Máy tính và xã hội tri thức",
            lessons: [
                mk("Bài 1: Hệ điều hành", "Trình bày chức năng, lịch sử phát triển và đặc điểm hệ điều hành máy tính cá nhân, thiết bị di động.", ["Năm nhóm chức năng: quản lí thiết bị, lưu trữ, môi trường chạy ứng dụng, giao tiếp người dùng và tiện ích.", "Windows là hệ điều hành thương mại; Linux có nguồn gốc UNIX và là hệ điều hành nguồn mở phổ biến.", "Hệ điều hành di động ưu tiên giao diện cảm biến, kết nối không dây và tiện ích cá nhân.", "Hệ điều hành là môi trường trung gian giữa phần cứng, ứng dụng và người dùng."], "Hãy kể một số công việc hệ điều hành thực hiện khi máy tính khởi động và hoạt động.", "Khởi động/điều phối thiết bị, quản lí tệp và ứng dụng, cung cấp giao diện và tiện ích.", "Nhóm chức năng nào thể hiện rõ tính thân thiện của máy tính cá nhân?", "Cung cấp môi trường giao tiếp với người sử dụng.", "Lập sơ đồ Phần cứng – Hệ điều hành – Ứng dụng – Người dùng; đối chiếu thông tin hệ điều hành tìm bằng công cụ số/AI với SGK.", ["Đúng vai trò từng tầng.", "Nguồn tìm kiếm được đối chiếu.", "Nêu rõ AI chỉ hỗ trợ, người học kiểm chứng kết luận."]),
                mk("Bài 2: Thực hành sử dụng hệ điều hành", "Sử dụng giao diện, quản lí tệp/thư mục và một số tiện ích trên máy tính, thiết bị di động.", ["Nhận diện màn hình nền, cửa sổ, thanh công việc và biểu tượng.", "Tạo, đổi tên, sao chép, di chuyển, xóa tệp/thư mục và khởi động ứng dụng.", "Kiểm tra đĩa; chỉ hợp mảnh ổ đĩa từ, không áp dụng như vậy cho SSD.", "Quản lí danh bạ, lịch, hẹn giờ và ứng dụng trên thiết bị di động."], "Windows và Ubuntu có những điểm giao diện nào tương đồng?", "Đều có biểu tượng, cửa sổ, vùng khởi chạy ứng dụng và công cụ quản lí tệp.", "Vì sao không nên hợp mảnh SSD như ổ đĩa từ?", "SSD không dùng đầu từ và hợp mảnh không mang lại lợi ích tương tự, còn có thể tăng ghi không cần thiết.", "Tạo cấu trúc thư mục học tập, thao tác sao chép/di chuyển và lập phiếu kết quả; thực hành bằng dữ liệu mẫu, không dùng dữ liệu cá nhân thật.", ["Đúng cấu trúc và thao tác.", "Không làm mất dữ liệu.", "Có ảnh/chứng cứ hoặc mô tả kết quả."]),
                mk("Bài 3: Phần mềm nguồn mở và phần mềm chạy trên Internet", "Phân biệt phần mềm thương mại, nguồn mở và phần mềm chạy trên Internet; hiểu quyền sử dụng.", ["Phần mềm nguồn mở công bố mã nguồn theo giấy phép tương ứng.", "Miễn phí không đồng nghĩa nguồn mở; nguồn mở không có nghĩa được dùng không điều kiện.", "Phần mềm chạy trên Internet cung cấp dịch vụ qua trình duyệt/mạng.", "Cần xem giấy phép, dữ liệu đưa lên dịch vụ và khả năng làm việc ngoại tuyến."], "Một phần mềm miễn phí có chắc chắn là phần mềm nguồn mở không?", "Không. Miễn phí nói về chi phí; nguồn mở liên quan quyền truy cập và giấy phép mã nguồn.", "Khi chọn phần mềm trực tuyến cho lớp cần đánh giá gì?", "Chức năng, giấy phép, quyền riêng tư, tài khoản/mạng, khả năng xuất dữ liệu và phương án dự phòng.", "So sánh một phần mềm cài đặt với một dịch vụ web cùng mục đích theo năm tiêu chí."),
                mk("Bài 4: Bên trong máy tính", "Nhận biết các thành phần phần cứng và quan hệ giữa bộ xử lí, bộ nhớ, lưu trữ, thiết bị vào/ra.", ["CPU thực hiện lệnh và điều khiển hoạt động.", "RAM lưu tạm dữ liệu/chương trình đang chạy; mất dữ liệu khi mất điện.", "Thiết bị lưu trữ giữ dữ liệu lâu dài.", "Bo mạch chủ và cổng kết nối liên kết các thành phần."], "Vì sao máy có ổ lưu trữ lớn nhưng RAM ít vẫn có thể chạy chậm khi mở nhiều ứng dụng?", "Ứng dụng đang chạy cần RAM; thiếu RAM làm hệ thống phải trao đổi dữ liệu với lưu trữ chậm hơn.", "RAM và ổ lưu trữ khác nhau ở điểm nào?", "RAM nhanh, tạm thời; ổ lưu trữ lâu dài và thường chậm hơn.", "Quan sát cấu hình một máy tính mẫu; lập bảng Thành phần – Chức năng – Thông số – Ảnh hưởng."),
                mk("Bài 5: Kết nối máy tính với các thiết bị số", "Lựa chọn cổng, giao thức và quy trình kết nối thiết bị số an toàn.", ["Thiết bị có thể kết nối có dây qua USB/HDMI và không dây qua Bluetooth/Wi-Fi.", "Cần đúng cổng, cáp, trình điều khiển và chế độ thiết bị.", "Thiết bị vào, ra hoặc vừa vào vừa ra có hướng truyền dữ liệu khác nhau.", "Ngắt kết nối và cấp quyền truy cập dữ liệu đúng cách."], "Vì sao không có một loại cáp chung phù hợp mọi thiết bị?", "Thiết bị khác nhau về cổng, chuẩn tín hiệu, nguồn và chức năng.", "Máy quét là thiết bị vào hay ra?", "Thiết bị vào vì chuyển ảnh/tài liệu thành dữ liệu cho máy tính.", "Lập hướng dẫn kết nối điện thoại hoặc loa Bluetooth với máy tính, có bước xử lí khi không nhận thiết bị.")
            ]
        },
        {
            chapterName: "Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
            lessons: [
                mk("Bài 6: Lưu trữ và chia sẻ tệp tin trên Internet", "Sử dụng ổ đĩa trực tuyến để lưu trữ, tổ chức và chia sẻ tệp đúng quyền.", ["Ổ đĩa trực tuyến hỗ trợ tải lên, tải xuống, đồng bộ và cộng tác.", "Tổ chức thư mục và tên tệp giúp tìm kiếm, quản lí phiên bản.", "Quyền thường gồm xem, nhận xét và chỉnh sửa.", "Không chia sẻ công khai dữ liệu cá nhân hoặc tệp không có quyền."], "Nhóm cùng làm một tài liệu nên gửi nhiều bản qua email hay dùng một tệp chia sẻ?", "Một tệp chia sẻ giúp cộng tác và tránh nhiều phiên bản, nếu quyền được thiết lập đúng.", "Quyền xem và quyền chỉnh sửa khác nhau thế nào?", "Xem chỉ đọc; chỉnh sửa cho phép thay đổi nội dung.", "Tải tệp mẫu lên, tổ chức thư mục và thử ba mức quyền với tài khoản lớp hoặc mô phỏng ngoại tuyến.", ["Tệp đúng vị trí/tên.", "Quyền đúng đối tượng.", "Không dùng dữ liệu thật nhạy cảm."]),
                mk("Bài 7: Thực hành tìm kiếm thông tin trên Internet", "Tạo truy vấn, dùng bộ lọc, so sánh máy tìm kiếm và đánh giá nguồn.", ["Từ khóa cụ thể, dấu ngoặc kép và toán tử giúp thu hẹp kết quả.", "Bộ lọc thời gian, loại tệp, ngôn ngữ và miền hỗ trợ truy vấn.", "Đánh giá tác giả, bằng chứng, thời điểm và mục đích nguồn.", "Tìm kiếm bằng giọng nói cần kiểm tra lại truy vấn nhận dạng."], "Vì sao hai người tìm cùng chủ đề có thể nhận kết quả khác nhau?", "Khác từ khóa, bộ lọc, công cụ, ngữ cảnh và cá nhân hóa kết quả.", "Một nguồn đứng đầu có mặc nhiên đáng tin nhất không?", "Không; thứ hạng không thay thế đánh giá nguồn và đối chiếu.", "Tìm một thông tin bằng hai truy vấn và hai công cụ; lập bảng kết quả, tiêu chí và kết luận.", ["Truy vấn có chủ đích.", "Ít nhất hai nguồn được đối chiếu.", "Ghi nguồn và lí do chọn."]),
                mk("Bài 8: Thực hành nâng cao sử dụng thư điện tử và mạng xã hội", "Phân loại thư, tìm kiếm hiệu quả và thiết lập quyền riêng tư trên mạng xã hội.", ["Nhãn, bộ lọc và toán tử tìm kiếm giúp quản lí thư.", "Tiêu đề, người gửi, thời gian và tệp đính kèm là tiêu chí tìm kiếm.", "Quyền riêng tư quyết định người xem bài viết và thông tin tài khoản.", "Cần kiểm tra phiên đăng nhập, xác thực và ứng dụng được cấp quyền."], "Hộp thư nhiều năm có thể tìm thư cũ bằng cách nào?", "Dùng từ khóa, người gửi, thời gian, nhãn và loại tệp đính kèm.", "Thiết lập công khai mọi bài viết có rủi ro gì?", "Lộ thông tin, bị thu thập dữ liệu hoặc tiếp cận ngoài mong muốn.", "Tạo hệ thống nhãn thư học tập trên dữ liệu mẫu và lập checklist quyền riêng tư mạng xã hội.")
            ]
        },
        {
            chapterName: "Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số",
            lessons: [
                mk("Bài 9: Giao tiếp an toàn trên Internet", "Nhận diện tình huống bất thường và áp dụng quy tắc ứng xử, phòng chống lừa đảo.", ["Ba nguyên tắc: chậm lại, kiểm tra ngay, dừng lại không gửi.", "Không chuyển tiền/cung cấp mã khi chưa xác minh qua kênh độc lập.", "Tôn trọng, không phát tán thông tin sai hoặc làm tổn thương người khác.", "Lưu bằng chứng, chặn và báo cáo khi cần."], "Tài khoản mang tên bạn nhắn xin chuyển tiền gấp: em làm gì trước?", "Không chuyển; liên hệ bạn bằng kênh khác để xác minh và báo cáo tài khoản nếu giả mạo.", "Áp dụng ba nguyên tắc chống lừa đảo vào tin nhắn khẩn cấp.", "Chậm lại để không bị thúc ép; kiểm tra người gửi/nội dung; dừng giao dịch và không cung cấp thông tin.", "Xử lí ba tình huống số theo bảng Dấu hiệu – Rủi ro – Hành động – Người cần báo.")
            ]
        },
        {
            chapterName: "Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu",
            lessons: [
                mk("Bài 10: Lưu trữ dữ liệu và khai thác thông tin phục vụ quản lí", "Giải thích nhu cầu thu thập, cập nhật và khai thác dữ liệu trong bài toán quản lí.", ["Quản lí cần dữ liệu về đối tượng và hoạt động.", "Cập nhật phản ánh thay đổi; truy xuất tạo thông tin phục vụ quyết định.", "Dữ liệu có thể thu thập thủ công hoặc tự động.", "Chỉ thu thập dữ liệu cần thiết và bảo vệ dữ liệu cá nhân."], "Quản lí điểm học tập cần lưu những dữ liệu nào?", "Học sinh, môn, loại điểm, giá trị, thời điểm và thông tin cần thiết theo quy định.", "Điểm trung bình nên lưu hay có thể tính từ dữ liệu thành phần?", "Có thể tính khi cần nếu công thức và dữ liệu thành phần đầy đủ.", "Chọn một bài toán quản lí, xác định đối tượng, dữ liệu cần thu thập và thông tin cần khai thác."),
                mk("Bài 11: Cơ sở dữ liệu", "Hiểu CSDL, yêu cầu tổ chức dữ liệu và tính độc lập giữa dữ liệu với phần mềm.", ["CSDL là tập dữ liệu có liên quan, được tổ chức để lưu trữ và khai thác.", "Dữ liệu cần cấu trúc nhất quán, hạn chế dư thừa và mâu thuẫn.", "Lưu dữ liệu độc lập giúp nhiều ứng dụng cùng khai thác.", "Không lưu dữ liệu suy ra nếu có thể tính đáng tin cậy từ dữ liệu gốc."], "Chuyển hồ sơ giấy thành nhiều tệp văn bản rời đã tạo CSDL tốt chưa?", "Chưa; cần cấu trúc, quan hệ và cơ chế khai thác nhất quán.", "Vì sao không nhất thiết lưu cột điểm trung bình?", "Có thể tính từ các điểm thành phần theo công thức đã định.", "Thiết kế cấu trúc dữ liệu đơn giản cho quản lí sách hoặc điểm, chỉ rõ dữ liệu gốc và dữ liệu tính được."),
                mk("Bài 12: Hệ quản trị cơ sở dữ liệu và hệ cơ sở dữ liệu", "Phân biệt CSDL, hệ QTCSDL và hệ CSDL; hiểu chức năng, mô hình tập trung/phân tán.", ["Hệ QTCSDL hỗ trợ định nghĩa, cập nhật/truy xuất và bảo mật/an toàn dữ liệu.", "Hệ CSDL gồm CSDL, hệ QTCSDL, ứng dụng, người dùng và hạ tầng liên quan.", "Hệ tập trung lưu tại một nơi; hệ phân tán lưu trên nhiều nút phối hợp.", "Mỗi mô hình có đánh đổi về quản lí, sẵn sàng và đồng bộ."], "Người dùng có cần biết cấu trúc tệp vật lí để tra cứu CSDL không?", "Không; hệ QTCSDL và ứng dụng cung cấp giao diện, ngôn ngữ khai thác.", "Ba nhóm chức năng chính của hệ QTCSDL?", "Định nghĩa dữ liệu; cập nhật/truy xuất; bảo mật và an toàn.", "Phân tích một hệ CSDL thực tế, chỉ rõ thành phần và chọn tập trung hay phân tán."),
                mk("Bài 13: Cơ sở dữ liệu quan hệ", "Mô tả bảng, bản ghi, trường, khóa và quan hệ trong CSDL quan hệ.", ["Bảng gồm hàng/bản ghi và cột/trường.", "Khóa chính xác định duy nhất bản ghi.", "Khóa ngoài tham chiếu khóa chính của bảng khác.", "Tách bảng giảm lặp dữ liệu và tăng tính nhất quán."], "Vì sao website âm nhạc không nên lặp đầy đủ tên nhạc sĩ trong mọi bản thu?", "Dễ dư thừa và mâu thuẫn; nên lưu nhạc sĩ ở bảng riêng và tham chiếu bằng khóa.", "Khóa chính cần đặc điểm gì?", "Giá trị duy nhất, không rỗng và ổn định trong phạm vi bảng.", "Từ dữ liệu âm nhạc, xác định bốn bảng, khóa chính và quan hệ khóa ngoài."),
                L({
                    title: "Bài 14: SQL – Ngôn ngữ truy vấn có cấu trúc",
                    periods: 2,
                    overview: "Hiểu ở mức nguyên lí cách SQL định nghĩa, cập nhật, truy xuất và kiểm soát quyền trên cơ sở dữ liệu quan hệ; đọc, giải thích và viết được các câu truy vấn cơ bản trên dữ liệu âm nhạc mẫu.",
                    goals: [
                        "MT1 — Giải thích được lợi ích của ngôn ngữ truy vấn và phân biệt vai trò của DDL, DML, DCL.",
                        "MT2 — Đọc và viết được câu lệnh cơ bản để tạo cơ sở dữ liệu, bảng, khóa chính và khóa ngoài.",
                        "MT3 — Đọc, dự đoán kết quả và viết được câu lệnh SELECT, INSERT, UPDATE, DELETE; liên kết bảng bằng INNER JOIN.",
                        "MT4 — Giải thích được mục đích của GRANT, REVOKE và lựa chọn quyền theo nguyên tắc chỉ cấp đủ dùng.",
                        "MT5 — Phân tích, kiểm thử và sửa được truy vấn liên kết ba bảng, kể cả khi truy vấn do công cụ AI đề xuất."
                    ],
                    resources: [
                        "Nguồn KHBD: KHBD/Giáo án Tin học 11-THUD -HKI.docx, Bài 14, các hoạt động Khởi động, Hình thành kiến thức 1–4, Luyện tập và Vận dụng.",
                        "Nguồn SGK: Tin học 11 – Định hướng Tin học ứng dụng, Kết nối tri thức với cuộc sống, Bài 14, trang 69–72.",
                        "Thời lượng đề xuất: 2 tiết (90 phút). KHBD nguồn không ghi số tiết; phân bổ này cần được giáo viên điều chỉnh theo kế hoạch nhà trường.",
                        "Điều kiện: trình duyệt; giấy nháp hoặc hệ quản trị CSDL trong môi trường thực hành. Chỉ dùng dữ liệu mẫu, không nhập dữ liệu cá nhân.",
                        "Điểm lệch nguồn: KHBD ghi Sid là INT nhưng bài chèn dữ liệu dùng các mã 'TK', 'QD', 'YM'. Bài học dùng CHAR(4) để kiểu dữ liệu thống nhất với dữ liệu mẫu và yêu cầu học sinh giải thích quyết định."
                    ],
                    warmup: {
                        question: "Cần lấy tên các bản nhạc của nhạc sĩ có Aid = 1. Cách A: viết chương trình mở tệp, đọc từng bản ghi, tự kiểm tra Aid rồi lấy TenBN. Cách B: gửi yêu cầu SELECT TenBN FROM bannhac WHERE Aid = 1; cho hệ QTCSDL. Hai cách khác nhau ở điều người dùng phải mô tả như thế nào?",
                        answer: "Cách A mô tả cả thủ tục thực hiện: mở tệp, đọc, tách và kiểm tra từng bản ghi. Cách B chủ yếu mô tả kết quả cần lấy; hệ QTCSDL quyết định cách truy cập và thực hiện.",
                        feedback: "Không kết luận rằng SQL không cần thuật toán. Thuật toán truy xuất vẫn tồn tại nhưng do hệ QTCSDL lựa chọn và thực hiện thay cho người viết truy vấn."
                    },
                    concepts: [
                        {
                            id: "DV1",
                            heading: "Lợi ích của ngôn ngữ truy vấn và ba thành phần SQL",
                            time: "13 phút",
                            source: "KHBD Hoạt động Thảo luận về hai cách truy xuất dữ liệu; SGK mục 1, trang 69–70.",
                            lead: "Nếu mỗi yêu cầu dữ liệu đều buộc người dùng biết cấu trúc tệp và tự viết thuật toán đọc tệp, việc khai thác dữ liệu sẽ phụ thuộc chặt vào cách lưu vật lí.",
                            sections: [
                                {
                                    heading: "SQL mô tả yêu cầu thay vì mô tả toàn bộ thủ tục",
                                    paragraphs: [
                                        "SQL (Structured Query Language) là ngôn ngữ truy vấn chuẩn dùng với cơ sở dữ liệu quan hệ. Người dùng nêu dữ liệu hoặc thao tác mong muốn; hệ quản trị cơ sở dữ liệu tiếp nhận câu truy vấn, kiểm tra quyền, chọn cách thực hiện và trả kết quả.",
                                        "Cùng một dạng yêu cầu có thể áp dụng cho nhiều cơ sở dữ liệu mà không phải viết lại thuật toán đọc từng tệp. SQL vì vậy làm giảm phụ thuộc vào cách dữ liệu được lưu vật lí, nhưng người viết vẫn phải hiểu bảng, trường, khóa và quan hệ để diễn đạt đúng yêu cầu."
                                    ]
                                },
                                {
                                    heading: "Ba nhóm chức năng",
                                    points: [
                                        "DDL — Data Definition Language: định nghĩa cấu trúc, ví dụ CREATE DATABASE, CREATE TABLE, ALTER TABLE, PRIMARY KEY, FOREIGN KEY.",
                                        "DML — Data Manipulation Language: truy xuất và cập nhật dữ liệu, ví dụ SELECT, INSERT, UPDATE, DELETE.",
                                        "DCL — Data Control Language: kiểm soát quyền người dùng, ví dụ GRANT và REVOKE."
                                    ]
                                }
                            ],
                            examples: [
                                {
                                    title: "Đối chứng từ SGK",
                                    text: "SELECT TenBN FROM bannhac WHERE Aid = 1 chỉ nêu cột cần lấy, bảng nguồn và điều kiện chọn. Nó không mô tả cách mở tệp, duyệt bản ghi hay tổ chức bộ nhớ."
                                }
                            ],
                            questions: [
                                {
                                    level: "Quan sát",
                                    question: "Trong câu SELECT TenBN FROM bannhac WHERE Aid = 1, phần nào cho biết kết quả cần lấy và phần nào giới hạn các dòng?",
                                    hint: "Tách câu lệnh theo SELECT, FROM và WHERE.",
                                    answer: "SELECT TenBN chỉ cột kết quả; FROM bannhac chỉ bảng nguồn; WHERE Aid = 1 giới hạn các dòng có Aid bằng 1.",
                                    feedback: "Nếu chỉ nêu SELECT, em chưa giải thích được nguồn dữ liệu và điều kiện chọn."
                                },
                                {
                                    level: "Giải thích",
                                    question: "Vì sao cách dùng SQL ít phụ thuộc cấu trúc tệp vật lí hơn cách tự viết chương trình đọc tệp?",
                                    hint: "Ai chịu trách nhiệm chọn cách truy cập dữ liệu?",
                                    answer: "Người dùng mô tả yêu cầu logic; hệ QTCSDL chịu trách nhiệm ánh xạ yêu cầu đó sang cách truy cập dữ liệu vật lí.",
                                    feedback: "Cần nêu rõ sự chuyển giao trách nhiệm cho hệ QTCSDL, không chỉ nói SQL ngắn hơn."
                                },
                                {
                                    level: "Áp dụng",
                                    question: "Xếp CREATE TABLE, SELECT và GRANT lần lượt vào DDL, DML hay DCL và giải thích theo tác động của từng câu lệnh.",
                                    hint: "Xét câu lệnh tác động lên cấu trúc, dữ liệu hay quyền.",
                                    answer: "CREATE TABLE thuộc DDL vì tạo cấu trúc; SELECT thuộc DML vì truy xuất dữ liệu; GRANT thuộc DCL vì cấp quyền.",
                                    feedback: "Không phân loại chỉ theo vị trí trong bài; hãy dựa vào đối tượng mà câu lệnh tác động."
                                }
                            ],
                            recap: [
                                "SQL diễn đạt yêu cầu logic; hệ QTCSDL tổ chức việc thực hiện.",
                                "DDL tác động cấu trúc, DML tác động dữ liệu, DCL tác động quyền."
                            ]
                        },
                        {
                            id: "DV2",
                            heading: "Định nghĩa cơ sở dữ liệu, bảng và khóa bằng DDL",
                            time: "20 phút",
                            source: "KHBD Hoạt động 2; SGK mục 2, Bảng 14.1–14.2 và ví dụ trang 70–71.",
                            lead: "Trước khi thêm hay truy xuất dữ liệu, hệ QTCSDL cần biết các bảng gồm những trường nào, mỗi trường nhận kiểu giá trị gì và trường nào định danh hoặc tham chiếu bản ghi.",
                            sections: [
                                {
                                    heading: "Từ cơ sở dữ liệu đến bảng",
                                    paragraphs: [
                                        "CREATE DATABASE tạo một cơ sở dữ liệu. CREATE TABLE tạo bảng và khai báo danh sách trường cùng kiểu dữ liệu. ALTER TABLE thay đổi định nghĩa bảng sau khi bảng đã được tạo.",
                                        "Kiểu dữ liệu là cam kết về dạng giá trị: CHAR(n) dành cho chuỗi có độ dài cố định, VARCHAR(n) cho chuỗi có độ dài thay đổi, INT cho số nguyên, REAL cho số thực, DATE cho ngày và TIME cho thời gian. Chọn kiểu phải dựa trên giá trị thực sự cần lưu, không dựa vào vẻ ngoài của mã."
                                    ]
                                },
                                {
                                    heading: "Khóa duy trì định danh và liên kết",
                                    paragraphs: [
                                        "PRIMARY KEY khai báo trường hoặc nhóm trường định danh duy nhất mỗi bản ghi. FOREIGN KEY ... REFERENCES ... khai báo trường tham chiếu khóa của bảng khác. Khóa ngoài giúp hệ QTCSDL kiểm tra rằng giá trị tham chiếu có tồn tại.",
                                        "Tên cơ sở dữ liệu, bảng và trường trong phạm vi bài học dùng chữ La-tinh, chữ số, không có khoảng trắng hay kí tự đặc biệt. Mỗi câu truy vấn trong ví dụ kết thúc bằng dấu chấm phẩy."
                                    ]
                                }
                            ],
                            examples: [
                                {
                                    title: "Bảng ca sĩ nhất quán với dữ liệu mẫu",
                                    text: "CREATE TABLE casi (Sid CHAR(4), TenCS VARCHAR(128)); ALTER TABLE casi ADD PRIMARY KEY (Sid); Dùng CHAR(4) vì các mã mẫu 'TK', 'QD', 'YM' là chuỗi, không phải số nguyên."
                                }
                            ],
                            questions: [
                                {
                                    level: "Quan sát",
                                    question: "Trong khai báo bảng casi, trường nào phù hợp làm khóa chính và kiểu nào phù hợp với các giá trị 'TK', 'QD', 'YM'?",
                                    hint: "Xét trường định danh và dạng giá trị thực tế.",
                                    answer: "Sid phù hợp làm khóa chính; CHAR(4) phù hợp vì mã gồm kí tự và có độ dài ngắn, giới hạn.",
                                    feedback: "INT không lưu trực tiếp được các mã có chữ; TenCS không ổn định và có thể trùng."
                                },
                                {
                                    level: "Giải thích",
                                    question: "Vì sao cần khai báo khóa ngoài Mid trong banthuam tham chiếu bannhac(Mid) thay vì chỉ đặt hai trường cùng tên?",
                                    hint: "Tên giống nhau có tự tạo ra ràng buộc không?",
                                    answer: "Hai trường cùng tên chưa tạo ràng buộc. Khóa ngoài yêu cầu mỗi Mid ở banthuam phải tham chiếu một Mid hợp lệ ở bannhac, giúp bảo đảm toàn vẹn liên kết.",
                                    feedback: "Cần nêu tác dụng kiểm tra dữ liệu, không chỉ nói để JOIN được."
                                },
                                {
                                    level: "Áp dụng",
                                    question: "Một bạn khai báo Sid INT nhưng sau đó chèn Sid = 'TK'. Hãy chỉ ra lỗi thiết kế và đề xuất cách sửa mà không làm mất ý nghĩa mã ca sĩ.",
                                    hint: "Ưu tiên sửa kiểu hay đổi toàn bộ mã?",
                                    answer: "Kiểu INT không phù hợp mã chứa chữ. Nên đổi Sid thành CHAR(4) hoặc VARCHAR với độ dài phù hợp rồi giữ các mã 'TK', 'QD', 'YM'.",
                                    feedback: "Đổi 'TK' thành một số tùy ý làm thay đổi hệ mã; sửa kiểu dữ liệu là quyết định nhất quán hơn với dữ liệu mẫu."
                                }
                            ],
                            recap: [
                                "Cấu trúc bảng phải phù hợp dữ liệu sẽ lưu.",
                                "Khóa chính định danh; khóa ngoài bảo vệ liên kết tham chiếu."
                            ]
                        },
                        {
                            id: "DV3",
                            heading: "Cập nhật, truy xuất và liên kết dữ liệu bằng DML",
                            time: "25 phút",
                            source: "KHBD Hoạt động 3; SGK mục 3, Bảng 14.3–14.4 và ví dụ trang 71–72.",
                            lead: "Sau khi cấu trúc đã có, DML cho phép thêm, sửa, xóa và lấy dữ liệu. Điều kiện đúng quyết định câu lệnh tác động đến bản ghi nào.",
                            sections: [
                                {
                                    heading: "Bốn thao tác cốt lõi",
                                    points: [
                                        "SELECT cột FROM bảng WHERE điều_kiện ORDER BY cột: chọn cột, lọc dòng và sắp xếp kết quả.",
                                        "INSERT INTO bảng VALUES (...): thêm bản ghi theo thứ tự trường đã định nghĩa.",
                                        "UPDATE bảng SET trường = giá_trị WHERE điều_kiện: sửa các dòng thỏa điều kiện.",
                                        "DELETE FROM bảng WHERE điều_kiện: xóa các dòng thỏa điều kiện."
                                    ]
                                },
                                {
                                    heading: "JOIN kết hợp các bảng theo quan hệ",
                                    paragraphs: [
                                        "INNER JOIN ghép các dòng của hai bảng khi điều kiện sau ON đúng. Trong mô hình âm nhạc, bannhac.Aid là khóa ngoài tham chiếu nhacsi.Aid; vì vậy ON bannhac.Aid = nhacsi.Aid là điều kiện liên kết có căn cứ.",
                                        "Thiếu điều kiện ON hoặc nối sai cặp khóa có thể tạo nhiều tổ hợp không có ý nghĩa. Trước UPDATE hoặc DELETE, nên chạy SELECT với cùng điều kiện để kiểm tra phạm vi tác động; đây là thói quen an toàn khi thực hành."
                                    ]
                                }
                            ],
                            examples: [
                                {
                                    title: "Truy xuất bản nhạc và tác giả",
                                    text: "SELECT bannhac.TenBN, nhacsi.TenNS FROM bannhac INNER JOIN nhacsi ON bannhac.Aid = nhacsi.Aid; Kết quả chỉ gồm những cặp bản nhạc–nhạc sĩ có Aid khớp."
                                },
                                {
                                    title: "Cập nhật có điều kiện",
                                    text: "UPDATE nhacsi SET TenNS = 'Hoàng Hiệp' WHERE Aid = 6; Nếu bỏ WHERE, mọi dòng của bảng có thể bị đổi thành cùng một tên."
                                }
                            ],
                            questions: [
                                {
                                    level: "Quan sát",
                                    question: "Trong truy vấn JOIN ví dụ, hai trường nào được so sánh và chúng đại diện cho quan hệ gì?",
                                    hint: "Đọc phần sau ON.",
                                    answer: "bannhac.Aid được so sánh với nhacsi.Aid; đó là quan hệ khóa ngoài của bản nhạc tham chiếu khóa định danh nhạc sĩ.",
                                    feedback: "Nếu chỉ nói hai trường cùng tên, em chưa xác định vai trò khóa của chúng."
                                },
                                {
                                    level: "Giải thích",
                                    question: "Vì sao nên chạy SELECT với cùng điều kiện trước khi thực hiện UPDATE hoặc DELETE?",
                                    hint: "SELECT có làm thay đổi dữ liệu không?",
                                    answer: "SELECT cho xem trước đúng tập bản ghi sẽ bị tác động mà chưa sửa hoặc xóa dữ liệu, giúp phát hiện điều kiện thiếu hoặc sai.",
                                    feedback: "Đây là bước kiểm tra phạm vi; nó không thay thế sao lưu khi thao tác trên dữ liệu quan trọng."
                                },
                                {
                                    level: "Áp dụng",
                                    question: "Viết truy vấn lấy Mid, Sid và TenBN bằng cách liên kết banthuam với bannhac.",
                                    hint: "Mid là trường nối hai bảng.",
                                    answer: "SELECT a.Mid, a.Sid, b.TenBN FROM banthuam a INNER JOIN bannhac b ON a.Mid = b.Mid;",
                                    feedback: "Cần đủ SELECT, FROM, JOIN và điều kiện ON đúng cặp khóa; bí danh chỉ giúp câu lệnh gọn hơn."
                                }
                            ],
                            recap: [
                                "WHERE giới hạn dòng; thiếu WHERE trong UPDATE hoặc DELETE có thể tác động toàn bảng.",
                                "JOIN phải dựa trên quan hệ khóa và điều kiện ON chính xác."
                            ]
                        },
                        {
                            id: "DV4",
                            heading: "Kiểm soát quyền truy cập bằng DCL",
                            time: "10 phút",
                            source: "KHBD Hoạt động 4; SGK mục 4, Bảng 14.5, trang 72.",
                            lead: "Biết viết truy vấn không đồng nghĩa người dùng được phép thực hiện mọi truy vấn. Hệ QTCSDL phải kiểm soát ai được làm gì trên đối tượng nào.",
                            sections: [
                                {
                                    heading: "Cấp và thu hồi quyền",
                                    paragraphs: [
                                        "GRANT cấp một hoặc nhiều quyền cho tài khoản; REVOKE thu hồi quyền đã cấp. Đối tượng có thể là toàn bộ bảng trong cơ sở dữ liệu hoặc một bảng cụ thể. Các quyền thường gặp trong bài gồm CREATE, SELECT, INSERT, UPDATE và DELETE.",
                                        "Nguyên tắc chỉ cấp đủ dùng làm giảm thiệt hại do nhầm lẫn hoặc lạm dụng. Người chỉ lập báo cáo cần SELECT, không mặc nhiên cần UPDATE hay DELETE. Cú pháp chi tiết có thể khác giữa các hệ QTCSDL; khi thực hành phải đối chiếu đúng hệ đang dùng."
                                    ]
                                }
                            ],
                            examples: [
                                {
                                    title: "Quyền theo nhiệm vụ",
                                    text: "GRANT SELECT ON music.* TO guest; cho guest đọc các bảng trong music. REVOKE DELETE ON music.nhacsi FROM mod; thu hồi quyền xóa trên bảng nhacsi của mod."
                                }
                            ],
                            questions: [
                                {
                                    level: "Quan sát",
                                    question: "Trong GRANT SELECT ON music.* TO guest, quyền, đối tượng và người nhận lần lượt là gì?",
                                    hint: "Đọc ba phần sau GRANT, ON và TO.",
                                    answer: "Quyền là SELECT; đối tượng là tất cả bảng trong music; người nhận là guest.",
                                    feedback: "Cần chỉ đủ ba thành phần để tránh nhầm quyền với đối tượng."
                                },
                                {
                                    level: "Giải thích",
                                    question: "Vì sao tài khoản chỉ xem báo cáo không nên được cấp DELETE?",
                                    hint: "So sánh nhiệm vụ cần làm với hậu quả quyền cho phép.",
                                    answer: "Nhiệm vụ chỉ cần đọc dữ liệu; DELETE vượt quá nhu cầu và có thể gây mất dữ liệu nếu tài khoản bị dùng sai hoặc thao tác nhầm.",
                                    feedback: "Lập luận phải gắn quyền với nhiệm vụ, không chỉ nói DELETE nguy hiểm."
                                },
                                {
                                    level: "Áp dụng",
                                    question: "Viết câu lệnh cấp UPDATE trên tất cả bảng của music cho mod và câu lệnh thu hồi DELETE trên music.nhacsi.",
                                    hint: "Dùng GRANT ... ON ... TO ... và REVOKE ... ON ... FROM ....",
                                    answer: "GRANT UPDATE ON music.* TO mod; REVOKE DELETE ON music.nhacsi FROM mod;",
                                    feedback: "Kiểm tra đúng TO cho GRANT, FROM cho REVOKE và đúng phạm vi đối tượng."
                                }
                            ],
                            recap: [
                                "GRANT cấp quyền; REVOKE thu hồi quyền.",
                                "Chỉ cấp những quyền cần thiết cho vai trò thực tế."
                            ]
                        }
                    ],
                    practice: [
                        {
                            question: "Phân loại các câu lệnh sau: CREATE TABLE, INSERT, SELECT, GRANT, REVOKE.",
                            answer: "DDL: CREATE TABLE. DML: INSERT, SELECT. DCL: GRANT, REVOKE.",
                            feedback: "Phân loại theo đối tượng bị tác động: cấu trúc, dữ liệu hay quyền."
                        },
                        {
                            question: "Chọn khai báo nhất quán nhất cho Sid khi dữ liệu mẫu là 'TK', 'QD', 'YM'.",
                            options: ["Sid INT", "Sid REAL", "Sid CHAR(4)", "Sid DATE"],
                            answer: "C. Sid CHAR(4).",
                            feedback: "Mã có chữ nên không dùng kiểu số; CHAR(4) đủ chứa các mã mẫu và thể hiện đây là mã, không phải đại lượng để tính toán."
                        },
                        {
                            question: "Truy vấn UPDATE nhacsi SET TenNS = 'Hoàng Hiệp'; có rủi ro gì và sửa thế nào nếu chỉ muốn đổi dòng Aid = 6?",
                            answer: "Truy vấn thiếu WHERE nên có thể đổi TenNS của mọi dòng. Sửa thành UPDATE nhacsi SET TenNS = 'Hoàng Hiệp' WHERE Aid = 6;",
                            feedback: "Trước khi UPDATE, có thể chạy SELECT * FROM nhacsi WHERE Aid = 6; để kiểm tra đúng phạm vi."
                        },
                        {
                            question: "Viết câu lệnh tạo bảng banthuam gồm Mid CHAR(4), Sid CHAR(4), sau đó thêm hai khóa ngoài tham chiếu bannhac(Mid) và casi(Sid).",
                            answer: "CREATE TABLE banthuam (Mid CHAR(4), Sid CHAR(4)); ALTER TABLE banthuam ADD FOREIGN KEY (Mid) REFERENCES bannhac(Mid); ALTER TABLE banthuam ADD FOREIGN KEY (Sid) REFERENCES casi(Sid);",
                            feedback: "Kiểu của khóa ngoài phải tương thích với khóa được tham chiếu; cần tạo các bảng cha trước."
                        },
                        {
                            question: "Một truy vấn dùng INNER JOIN nhưng không có điều kiện ON. Hãy dự đoán lỗi logic và nêu cách sửa.",
                            answer: "Các dòng có thể bị kết hợp không theo quan hệ khóa, tạo nhiều cặp sai hoặc truy vấn không hợp lệ tùy hệ. Phải thêm ON khóa_ngoài = khóa_chính, ví dụ ON banthuam.Mid = bannhac.Mid.",
                            feedback: "Không sửa bằng WHERE tùy ý; trước hết phải xác định đúng quan hệ giữa hai bảng."
                        }
                    ],
                    application: {
                        task: "Tạo truy vấn lấy Mid, Sid từ banthuam, TenBN từ bannhac và TenCS từ casi. Nếu dùng công cụ AI để gợi ý, hãy lưu lại truy vấn ban đầu, chỉ ra từng cặp khóa dùng để JOIN, kiểm thử trên dữ liệu mẫu và ghi ít nhất một xác nhận hoặc chỉnh sửa do nhóm tự thực hiện.",
                        criteria: [
                            "SELECT đúng bốn cột và ghi rõ bảng hoặc bí danh.",
                            "Liên kết banthuam.Mid = bannhac.Mid và banthuam.Sid = casi.Sid.",
                            "Giải thích được khác biệt giữa INNER JOIN và LEFT JOIN trong trường hợp có bản thu thiếu dữ liệu tham chiếu.",
                            "Kiểm thử bằng dữ liệu mẫu; không dùng dữ liệu cá nhân hoặc thông tin đăng nhập thật.",
                            "Nếu có dùng AI, nêu bằng chứng đã kiểm chứng cú pháp, logic và kết quả thay vì sao chép thụ động."
                        ],
                        support: [
                            "Tầng 1: vẽ ba bảng và nối các trường cùng biểu diễn Mid, Sid.",
                            "Tầng 2: viết JOIN bannhac trước, kiểm tra kết quả rồi thêm JOIN casi.",
                            "Tầng 3: dùng mẫu SELECT ... FROM banthuam a INNER JOIN ... ON ...; và thay đúng bảng, bí danh, cặp khóa."
                        ]
                    },
                    assessment: {
                        items: [
                            {
                                target: "MT1 · DV1",
                                question: "Giải thích bằng 2–3 câu vì sao SQL giảm phụ thuộc vào cách lưu tệp và phân loại CREATE TABLE, SELECT, GRANT.",
                                answer: "SQL cho phép mô tả yêu cầu logic để hệ QTCSDL chọn cách truy cập vật lí. CREATE TABLE thuộc DDL, SELECT thuộc DML, GRANT thuộc DCL.",
                                feedback: "Đạt khi giải thích được vai trò hệ QTCSDL và phân loại đúng cả ba câu lệnh.",
                                evidence: "Lời giải có quan hệ nguyên nhân–kết quả và 3/3 phân loại đúng."
                            },
                            {
                                target: "MT2 · DV2",
                                question: "Viết khai báo bảng casi có Sid phù hợp các mã 'TK', 'QD', 'YM', TenCS tối đa 128 kí tự và khóa chính Sid; giải thích lựa chọn kiểu.",
                                answer: "CREATE TABLE casi (Sid CHAR(4), TenCS VARCHAR(128)); ALTER TABLE casi ADD PRIMARY KEY (Sid); CHAR phù hợp mã có chữ, VARCHAR phù hợp tên có độ dài thay đổi.",
                                feedback: "Đạt khi cấu trúc, kiểu và khóa thống nhất với dữ liệu mẫu.",
                                evidence: "Câu lệnh hợp lí và giải thích được ít nhất hai lựa chọn kiểu/khóa."
                            },
                            {
                                target: "MT3, MT5 · DV3",
                                question: "Viết và giải thích truy vấn liên kết banthuam, bannhac, casi để lấy Mid, Sid, TenBN, TenCS.",
                                answer: "SELECT a.Mid, a.Sid, b.TenBN, c.TenCS FROM banthuam a INNER JOIN bannhac b ON a.Mid = b.Mid INNER JOIN casi c ON a.Sid = c.Sid;",
                                feedback: "Đạt khi đúng cột, đủ hai JOIN và giải thích đúng hai điều kiện ON. Chấp nhận LEFT JOIN nếu giải thích đúng mục đích giữ dòng chưa khớp.",
                                evidence: "Truy vấn chạy được trên dữ liệu mẫu hoặc được đối chiếu cú pháp và logic từng mệnh đề."
                            },
                            {
                                target: "MT4 · DV4",
                                question: "Vai trò báo cáo chỉ cần xem dữ liệu music. Hãy chọn quyền và viết câu cấp quyền phù hợp; nêu một quyền không nên cấp.",
                                answer: "GRANT SELECT ON music.* TO report_user; Không nên cấp DELETE hoặc UPDATE vì vượt quá nhiệm vụ chỉ đọc.",
                                feedback: "Đạt khi quyền phù hợp nhiệm vụ và có lập luận theo nguyên tắc chỉ cấp đủ dùng.",
                                evidence: "Câu GRANT đúng vai trò và nêu được rủi ro của ít nhất một quyền vượt nhu cầu."
                            }
                        ],
                        threshold: "Hoàn thành đúng ít nhất 3/4 nhiệm vụ và bắt buộc đạt nhiệm vụ MT3–MT5 về truy vấn liên kết; không có lỗi làm UPDATE/DELETE tác động ngoài phạm vi dự kiến.",
                        rules: [
                            "MT1 đạt khi giải thích đúng lợi ích SQL và phân loại đủ DDL/DML/DCL.",
                            "MT2 đạt khi kiểu dữ liệu, khóa và dữ liệu mẫu nhất quán.",
                            "MT3–MT5 đạt khi truy vấn liên kết đúng cặp khóa, đúng cột và người học giải thích/kiểm chứng được kết quả.",
                            "MT4 đạt khi quyền được chọn theo nhiệm vụ và câu lệnh đúng đối tượng."
                        ],
                        retry: [
                            "Chưa đạt MT1: quay lại DV1 và phân loại câu lệnh theo cấu trúc–dữ liệu–quyền.",
                            "Chưa đạt MT2: lập bảng Giá trị mẫu → Kiểu dữ liệu → Ràng buộc rồi viết lại DDL.",
                            "Chưa đạt MT3–MT5: kiểm thử từng JOIN với hai bảng trước khi ghép bảng thứ ba.",
                            "Chưa đạt MT4: lập ma trận Vai trò → Nhiệm vụ → Quyền cần thiết và loại quyền dư thừa."
                        ]
                    },
                    traceability: {
                        goals: [
                            ["MT1", "Khởi động; Hoạt động thảo luận hai cách truy xuất", "Khởi động, DV1", "Giải thích lợi ích; phân loại DDL/DML/DCL", "20 phút"],
                            ["MT2", "Hoạt động 2: Khởi tạo CSDL", "DV2", "DDL tạo casi/banthuam, kiểu và khóa nhất quán", "20 phút"],
                            ["MT3", "Hoạt động 3; Luyện tập 1–3", "DV3, Luyện tập", "DML và JOIN đúng cột, điều kiện", "30 phút"],
                            ["MT4", "Hoạt động 4: Kiểm soát quyền", "DV4", "GRANT/REVOKE theo vai trò", "10 phút"],
                            ["MT5", "Hoạt động Vận dụng có kiểm chứng AI", "Vận dụng, Đánh giá", "Truy vấn ba bảng và biên bản kiểm chứng", "10 phút"]
                        ],
                        units: [
                            ["DV1", "Hình thành kiến thức: thảo luận hai cách truy xuất", "Mục 1, tr. 69–70", "Lợi ích SQL; DDL, DML, DCL", "Áp dụng/phân loại", "Không"],
                            ["DV2", "Hoạt động 2", "Mục 2, Bảng 14.1–14.2, tr. 70", "CREATE, ALTER, kiểu, khóa", "Phân tích lỗi kiểu", "KHBD ghi Sid INT nhưng dữ liệu mẫu là chuỗi; đã nêu và dùng CHAR(4)."],
                            ["DV3", "Hoạt động 3; Luyện tập", "Mục 3, Bảng 14.3–14.4, tr. 71–72", "SELECT, INSERT, UPDATE, DELETE, JOIN", "Tạo và kiểm chứng truy vấn", "SGK nêu nguyên lí; bài học thêm bước SELECT kiểm tra an toàn trước UPDATE/DELETE."],
                            ["DV4", "Hoạt động 4", "Mục 4, Bảng 14.5, tr. 72", "GRANT, REVOKE, quyền tối thiểu", "Lựa chọn và bảo vệ quyết định", "Bài học làm rõ cú pháp DCL có thể khác theo hệ QTCSDL."],
                            ["Vận dụng", "Hoạt động Vận dụng", "Vận dụng, tr. 72", "JOIN ba bảng; kiểm chứng gợi ý AI", "Đánh giá/kiểm thử", "Yêu cầu kiểm chứng AI lấy từ KHBD, không phải yêu cầu cốt lõi của SGK."]
                        ]
                    }
                }),
                mk("Bài 15: Bảo mật và an toàn hệ cơ sở dữ liệu", "Áp dụng phân quyền, sao lưu và trách nhiệm người dùng để bảo vệ CSDL.", ["Xác thực và phân quyền giới hạn người được phép và thao tác được phép.", "Mỗi người dùng phải bảo vệ tài khoản và chịu trách nhiệm hành động.", "Sao lưu, nhật kí và kế hoạch phục hồi giảm thiệt hại sự cố.", "Bảo mật cần con người, quy trình và công nghệ phối hợp."], "Mật khẩu mạnh có đủ bảo vệ CSDL nếu cấp quyền quá rộng không?", "Không; cần phân quyền tối thiểu, giám sát và quy trình an toàn.", "Vì sao người vận hành cần quy định trách nhiệm riêng?", "Họ có quyền cao; sai sót hoặc lạm dụng có thể ảnh hưởng toàn hệ thống.", "Lập ma trận Vai trò – Dữ liệu – Quyền cho hệ quản lí nhỏ, kèm kế hoạch sao lưu."),
            ]
        },
        {
            chapterName: "Chủ đề 5: Hướng nghiệp với tin học",
            lessons: [
                mk("Bài 16: Công việc quản trị cơ sở dữ liệu", "Tìm hiểu nhiệm vụ, năng lực, phẩm chất và cơ hội nghề quản trị CSDL.", ["DBA cài đặt, cấu hình, phân quyền, theo dõi, sao lưu và phục hồi CSDL.", "Cần kiến thức hệ QTCSDL, hệ điều hành, mạng, bảo mật và xử lí sự cố.", "Cần trách nhiệm, cẩn trọng, giao tiếp và học liên tục.", "Thông tin nghề/tuyển dụng phải được kiểm tra thời điểm và nguồn."], "Ai đảm bảo CSDL luôn sẵn sàng và phục hồi khi có sự cố?", "Nhà quản trị CSDL phối hợp với các vai trò vận hành liên quan.", "Nêu ba nhóm nhiệm vụ của DBA.", "Vận hành/giám sát; bảo mật/phân quyền; sao lưu/phục hồi và tối ưu.", "Tìm hai mô tả tuyển dụng DBA, lập bảng nhiệm vụ – năng lực – minh chứng học tập và ghi nguồn.")
            ]
        },
        {
            chapterName: "Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu",
            lessons: [
                mk("Bài 17: Quản trị cơ sở dữ liệu trên máy tính", "Làm quen MySQL và HeidiSQL để quản trị CSDL trên máy tính.", ["MySQL là hệ QTCSDL; HeidiSQL là công cụ giao diện kết nối và thao tác.", "Cần thông tin máy chủ, cổng, tài khoản và quyền phù hợp.", "Môi trường thực hành chỉ dùng dữ liệu mẫu.", "Kiểm tra kết nối trước khi tạo hoặc sửa dữ liệu."], "HeidiSQL có phải là CSDL không?", "Không; đó là công cụ khách để làm việc với hệ QTCSDL và CSDL.", "Cần những thông tin gì để kết nối?", "Máy chủ, cổng, tài khoản, mật khẩu/cơ chế xác thực và CSDL nếu có.", "Kết nối môi trường mẫu và lập phiếu xác nhận máy chủ – phiên – quyền, không ghi mật khẩu.", ["Kết nối đúng môi trường.", "Không lộ thông tin xác thực.", "Mô tả được vai trò MySQL/HeidiSQL."]),
                mk("Bài 18: Thực hành xác định cấu trúc bảng và các trường khóa", "Phân tích bài toán âm nhạc để xác định bảng, trường, kiểu dữ liệu và khóa.", ["Tách thực thể nhạc sĩ, ca sĩ, bản nhạc, bản thu âm thành bảng.", "Chọn trường và kiểu dữ liệu theo giá trị cần lưu.", "Khóa chính định danh; khóa ngoài tạo liên kết.", "Chuẩn hóa giúp hạn chế lặp và bất nhất."], "Vì sao bản thu âm cần tham chiếu bản nhạc và ca sĩ?", "Một bản thu gắn với bản nhạc và người thể hiện; khóa ngoài biểu diễn quan hệ đó.", "Nếu thêm nơi sinh của nhạc sĩ nên thay đổi thế nào?", "Có thể thêm bảng tỉnh/thành và trường khóa ngoài phù hợp để tránh lặp.", "Thiết kế lược đồ mymusic gồm bảng, trường, kiểu, khóa chính và khóa ngoài."),
                mk("Bài 19: Thực hành tạo lập cơ sở dữ liệu và các bảng", "Tạo CSDL mymusic và các bảng theo cấu trúc đã thiết kế.", ["Tạo CSDL đúng tên và bộ kí tự phù hợp.", "Tạo bảng với tên trường, kiểu và ràng buộc.", "Tạo khóa chính trước khi thiết lập quan hệ.", "Kiểm tra cấu trúc sau mỗi bảng."], "Vì sao nên thiết kế cấu trúc trước khi thao tác trên HeidiSQL?", "Giảm sửa sai, bảo đảm kiểu/khóa nhất quán và dễ kiểm tra.", "Sau khi tạo bảng cần kiểm tra gì?", "Tên trường, kiểu, cho phép rỗng, mặc định và khóa.", "Tạo mymusic và các bảng từ lược đồ Bài 18; nộp ảnh/cấu trúc xuất, không nộp thông tin đăng nhập.", ["Đủ bảng/trường.", "Kiểu đúng.", "Khóa chính đúng."]),
                mk("Bài 20: Thực hành tạo lập bảng có khóa ngoài", "Thiết lập khóa ngoài và chỉ mục để liên kết bảng đúng toàn vẹn tham chiếu.", ["Kiểu trường khóa ngoài phải tương thích khóa được tham chiếu.", "Chọn đúng bảng/trường tham chiếu.", "UNIQUE có thể áp dụng cho tổ hợp trường cần duy nhất.", "Kiểm tra quan hệ sau khi lưu cấu trúc."], "Vì sao chỉ đặt UNIQUE riêng cho tên bản nhạc có thể không phù hợp?", "Nhiều nhạc sĩ có thể có bài trùng tên; tổ hợp tên bản nhạc và mã nhạc sĩ mới cần duy nhất theo bài toán.", "Điều kiện kiểu dữ liệu của khóa ngoài?", "Phải tương thích với khóa chính được tham chiếu.", "Tạo bảng bannhac có khóa chính, UNIQUE tổ hợp và khóa ngoài tới nhacsi.", ["Đúng trường và kiểu.", "UNIQUE đúng tổ hợp.", "Khóa ngoài đúng bảng/trường."]),
                mk("Bài 21: Thực hành cập nhật và truy xuất dữ liệu các bảng", "Thêm, sửa, xóa và truy xuất dữ liệu ở bảng đơn giản.", ["INSERT hoặc giao diện thêm bản ghi.", "UPDATE sửa đúng bản ghi với điều kiện.", "DELETE cần điều kiện để tránh xóa diện rộng.", "SELECT và bộ lọc dùng truy xuất/kiểm tra dữ liệu."], "Vì sao phải xem điều kiện trước khi UPDATE hoặc DELETE?", "Điều kiện sai hoặc thiếu có thể thay đổi/xóa nhiều bản ghi ngoài ý muốn.", "Cách kiểm tra an toàn trước DELETE?", "Chạy SELECT với cùng điều kiện và sao lưu khi cần.", "Cập nhật bảng nhacsi/casi bằng dữ liệu mẫu rồi truy xuất theo ba tiêu chí.", ["Dữ liệu đúng.", "Điều kiện giới hạn đúng bản ghi.", "Có truy vấn kiểm tra."]),
                mk("Bài 22: Thực hành cập nhật bảng dữ liệu có tham chiếu", "Cập nhật bảng có khóa ngoài và bảo đảm toàn vẹn tham chiếu.", ["Giá trị khóa ngoài phải tồn tại ở bảng tham chiếu hoặc được phép rỗng theo thiết kế.", "Nhập dữ liệu theo thứ tự bảng cha trước, bảng con sau.", "Hệ QTCSDL từ chối tham chiếu không hợp lệ.", "Không xóa bản ghi cha khi còn bản ghi con nếu chính sách không cho phép."], "Vì sao thêm bản nhạc với mã nhạc sĩ chưa tồn tại bị từ chối?", "Vi phạm toàn vẹn tham chiếu của khóa ngoài.", "Thứ tự nhập dữ liệu hợp lí?", "Nhập nhạc sĩ/ca sĩ trước, rồi bản nhạc và bản thu tham chiếu.", "Cập nhật bannhac và banthuam bằng dữ liệu mẫu, ghi lại một lỗi tham chiếu và cách sửa."),
                mk("Bài 23: Thực hành truy xuất dữ liệu qua liên kết các bảng", "Dùng JOIN để lấy thông tin từ nhiều bảng theo quan hệ khóa.", ["JOIN kết hợp dòng dựa trên điều kiện liên kết.", "Dùng bí danh giúp truy vấn rõ và tránh trùng tên cột.", "Chọn đúng chuỗi quan hệ từ bản thu → bản nhạc/ca sĩ/nhạc sĩ.", "WHERE lọc sau khi xác định bảng và liên kết."], "Tên bản nhạc và tên ca sĩ nằm ở hai bảng khác nhau, cần thao tác gì?", "JOIN các bảng qua khóa chính/khóa ngoài rồi SELECT các cột cần.", "Nếu thiếu điều kiện JOIN có thể xảy ra gì?", "Tích Descartes tạo rất nhiều kết hợp sai.", "Viết truy vấn lấy id bản thu, tên bản nhạc, ca sĩ và tác giả; kiểm tra số dòng bằng dữ liệu mẫu.", ["JOIN đúng khóa.", "Đúng cột và bí danh.", "Kết quả không lặp sai."]),
                mk("Bài 24: Thực hành sao lưu dữ liệu", "Sao lưu và phục hồi CSDL theo quy trình an toàn.", ["Sao lưu tạo bản dự phòng độc lập với dữ liệu đang vận hành.", "Ghi rõ thời điểm, phạm vi, phiên bản và nơi lưu.", "Phục hồi cần thử trên môi trường an toàn trước khi ghi đè.", "Một bản sao lưu chưa được thử phục hồi chưa đủ bằng chứng tin cậy."], "Sao lưu thành công nhưng chưa từng thử phục hồi có đủ an toàn không?", "Chưa; phải kiểm tra tệp và thử phục hồi để chứng minh sử dụng được.", "Hai thao tác cốt lõi của bài?", "Backup CSDL và restore từ bản sao.", "Sao lưu mymusic, phục hồi vào CSDL thử nghiệm và đối chiếu số bảng/bản ghi.", ["Tệp sao lưu được tạo.", "Phục hồi không ghi đè dữ liệu gốc.", "Đối chiếu cấu trúc và dữ liệu."])
            ]
        },
        {
            chapterName: "Chủ đề 7: Phần mềm chỉnh sửa ảnh và làm video",
            lessons: [
                mk("Bài 25: Phần mềm chỉnh sửa ảnh", "Làm quen ảnh số, độ phân giải và thao tác cơ bản trong GIMP.", ["Ảnh bitmap gồm các điểm ảnh; kích thước và độ phân giải ảnh hưởng chất lượng/sử dụng.", "GIMP là phần mềm chỉnh sửa ảnh; giao diện gồm vùng ảnh, hộp công cụ và bảng tùy chọn.", "Các thao tác cơ bản: mở, phóng/thu, xoay, cắt, đổi kích thước và xuất.", "Giữ tệp nguồn để tiếp tục chỉnh sửa."], "Ảnh 2560×1920 có xấp xỉ bao nhiêu megapixel?", "Khoảng 4,9 triệu điểm ảnh, thường gọi xấp xỉ 5 MP.", "Đổi kích thước và đổi độ phân giải có giống nhau không?", "Không; kích thước pixel và mật độ in liên quan nhưng là các thuộc tính khác.", "Mở ảnh mẫu, cắt/xoay/đổi kích thước và xuất bản sao; giữ nguyên ảnh gốc.", ["Đúng thao tác.", "Không ghi đè ảnh gốc.", "Định dạng xuất phù hợp."]),
                mk("Bài 26: Công cụ tinh chỉnh màu sắc và công cụ chọn", "Điều chỉnh màu và tạo vùng chọn phù hợp trong GIMP.", ["Brightness/Contrast, Levels, Curves và Hue/Saturation tác động khác nhau.", "Vùng chọn giới hạn khu vực chịu tác động.", "Công cụ chọn chữ nhật, elip, tự do hoặc theo màu phù hợp từng biên.", "Feather làm mềm biên để ghép/chỉnh tự nhiên hơn."], "Vì sao cần tạo vùng chọn trước khi chỉnh một phần ảnh?", "Để giới hạn hiệu ứng, tránh thay đổi vùng không mong muốn.", "Một vùng có màu tương đối đồng nhất nên thử công cụ chọn nào?", "Chọn theo màu, rồi tinh chỉnh ngưỡng và biên.", "Chỉnh màu một đối tượng trong ảnh mẫu mà giữ nền gần như không đổi; nộp trước/sau."),
                mk("Bài 27: Công cụ vẽ và một số ứng dụng", "Sử dụng lớp ảnh, công cụ vẽ và thiết lập màu để tạo/chỉnh sản phẩm.", ["Lớp ảnh cho phép chỉnh từng phần độc lập và sắp xếp chồng lớp.", "Cọ, bút chì, tẩy, tô màu và đường dẫn phục vụ mục đích khác nhau.", "Màu tiền cảnh/nền, kích thước và độ cứng cọ ảnh hưởng nét.", "Tạo lớp mới trước khi vẽ giúp sửa dễ hơn."], "Vì sao nên vẽ trên lớp mới thay vì trực tiếp lên ảnh gốc?", "Dễ chỉnh, ẩn, xóa hoặc thay đổi mà không phá dữ liệu gốc.", "Độ cứng cọ ảnh hưởng gì?", "Mức sắc/mềm của biên nét cọ.", "Tạo sản phẩm có ít nhất ba lớp, hai công cụ vẽ và bảng màu có chủ đích."),
                mk("Bài 28: Tạo ảnh động", "Tạo GIF từ các lớp ảnh và thiết lập trình tự, thời gian khung hình.", ["Mỗi lớp có thể trở thành một khung hình.", "Thứ tự lớp quyết định thứ tự phát.", "Thời gian trễ ảnh hưởng nhịp chuyển động.", "Xuất GIF cần chọn chế độ ảnh động và lặp phù hợp."], "Vì sao tệp ảnh động thường lớn hơn ảnh tĩnh tương tự?", "Chứa nhiều khung hình và thông tin thời gian thay vì một ảnh.", "Muốn một khung dừng lâu hơn cần thay đổi gì?", "Tăng thời gian trễ của khung đó.", "Tạo GIF ngắn 4–8 khung, có chuyển động rõ và tốc độ dễ quan sát."),
                mk("Bài 29: Khám phá phần mềm làm phim", "Nhận biết giao diện và tạo đoạn phim từ ảnh/video có sẵn.", ["Dự án phim tổ chức tư liệu, dòng thời gian, màn hình xem trước và công cụ xuất.", "Tư liệu cần có quyền sử dụng và định dạng phù hợp.", "Kéo tư liệu lên timeline, sắp xếp và xem thử.", "Lưu dự án khác với xuất tệp video."], "Tệp dự án có phải là tệp video hoàn chỉnh không?", "Không; dự án lưu cấu trúc biên tập, cần xuất/render để tạo video.", "Ba vùng giao diện chính của phần mềm làm phim?", "Kho tư liệu, timeline và màn hình xem trước; tên có thể khác theo phần mềm.", "Tạo dự án 30–60 giây từ tư liệu được cung cấp và lưu đúng cấu trúc thư mục."),
                mk("Bài 30: Biên tập phim", "Cắt ghép, sắp xếp, thêm chuyển cảnh, chữ và âm thanh có chủ đích.", ["Cắt bỏ phần thừa và sắp xếp theo kịch bản.", "Chuyển cảnh dùng tiết chế để hỗ trợ mạch nội dung.", "Chữ cần đủ thời gian đọc và tương phản.", "Âm thanh phải cân bằng, có bản quyền và không che lời thoại."], "Có nên dùng một hiệu ứng khác nhau cho mọi lần chuyển cảnh không?", "Không; quá nhiều hiệu ứng làm phân tán và giảm tính nhất quán.", "Điều gì quyết định điểm cắt tốt?", "Mạch nội dung, hành động, nhịp và khả năng người xem hiểu liên tục.", "Biên tập đoạn phim ngắn có mở–thân–kết, tiêu đề và âm thanh phù hợp."),
                mk("Bài 31: Thực hành tạo phim hoạt hình", "Xây dựng kịch bản, chuẩn bị tư liệu, tạo hoạt hình, phụ đề và hội thoại.", ["Kịch bản xác định chủ đề, nhân vật, cảnh và thông điệp.", "Tư liệu cần đồng nhất phong cách, đúng quyền sử dụng.", "Tạo cảnh theo kịch bản rồi bổ sung phụ đề/hội thoại.", "Xem thử, sửa lỗi và xuất bản theo tiêu chí."], "Vì sao nên hoàn thiện kịch bản trước khi tạo các cảnh?", "Giúp xác định tư liệu, thứ tự, thời lượng và tránh làm lại không cần thiết.", "Phụ đề tốt cần đặc điểm gì?", "Đúng nội dung, đủ thời gian đọc, tương phản và không che thông tin quan trọng.", "Tạo phim hoạt hình ngắn theo một chủ đề gợi ý trong KHBD và trình bày quyết định thiết kế.", ["Có kịch bản và thông điệp.", "Cảnh liên tục, dễ hiểu.", "Phụ đề/hội thoại dễ tiếp cận.", "Tư liệu đúng bản quyền."])
            ]
        }
    ];
})();
