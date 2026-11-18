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
                    videoId: "2bu2F_gBSpc",
                    journey: [
                        { label: "1 · Nêu yêu cầu", text: "Phân biệt muốn lấy gì với phải làm từng bước như thế nào." },
                        { label: "2 · Tạo cấu trúc", text: "Dùng DDL để tạo bảng, chọn kiểu và khai báo khóa." },
                        { label: "3 · Làm việc với dữ liệu", text: "Dùng DML để thêm, sửa, xóa, lọc và liên kết." },
                        { label: "4 · Kiểm soát quyền", text: "Dùng DCL để cấp đúng quyền và thu hồi quyền dư thừa." },
                        { label: "5 · Kiểm thử", text: "Chạy từng phần, đọc kết quả và sửa truy vấn ba bảng." }
                    ],
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
                        "Phân bổ 2 tiết (90 phút): Khởi động 5; DV1 10; DV2 15; DV3 20; DV4 8; Luyện tập 10; Thực hành 12; Vận dụng và đánh giá 10 phút.",
                        "Điều kiện: trình duyệt; giấy nháp hoặc hệ quản trị CSDL trong môi trường thực hành. Chỉ dùng dữ liệu mẫu, không nhập dữ liệu cá nhân.",
                        "Điểm lệch nguồn: KHBD ghi Sid là INT nhưng dữ liệu mẫu dùng các mã 'TK', 'QD', 'YM'. Bài học dùng CHAR(4) để kiểu dữ liệu nhất quán với dữ liệu mẫu và yêu cầu học sinh giải thích quyết định."
                    ],
                    videos: [
                        {
                            title: "SQL là gì? Database là gì?",
                            publisher: "Vịt làm Data",
                            url: "https://www.youtube.com/watch?v=2bu2F_gBSpc",
                            language: "Tiếng Việt",
                            duration: "15:28",
                            segment: "0:00–3:45",
                            purpose: "Hình dung SQL là ngôn ngữ để diễn đạt yêu cầu với cơ sở dữ liệu trước khi học DDL, DML và DCL.",
                            before: "Theo em, SQL mô tả kết quả cần lấy hay mô tả toàn bộ thuật toán truy cập tệp?",
                            after: "Nêu một điểm video giúp em hiểu vai trò của SQL và một điểm vẫn cần đối chiếu với SGK.",
                            accessed: "18/11/2026",
                            fallback: "Đọc tình huống hai cách truy xuất ở phần Khởi động và đối chiếu các bước người dùng phải mô tả."
                        }
                    ],
                    warmup: {
                        time: "5 phút",
                        question: "Cần lấy tên các bản nhạc của nhạc sĩ có Aid = 1. Cách A: viết chương trình mở tệp, đọc từng bản ghi, tự kiểm tra Aid rồi lấy TenBN. Cách B: gửi yêu cầu SELECT TenBN FROM bannhac WHERE Aid = 1; cho hệ QTCSDL. Hai cách khác nhau ở điều người dùng phải mô tả như thế nào?",
                        answer: "Cách A mô tả cả thủ tục thực hiện: mở tệp, đọc, tách và kiểm tra từng bản ghi. Cách B chủ yếu mô tả kết quả cần lấy; hệ QTCSDL quyết định cách truy cập và thực hiện.",
                        feedback: "Không kết luận rằng SQL không cần thuật toán. Thuật toán truy xuất vẫn tồn tại nhưng do hệ QTCSDL lựa chọn và thực hiện thay cho người viết truy vấn."
                    },
                    concepts: [
                        {
                            id: "DV1",
                            heading: "Lợi ích của ngôn ngữ truy vấn và ba thành phần SQL",
                            time: "10 phút",
                            source: "KHBD Hoạt động Thảo luận về hai cách truy xuất dữ liệu; SGK mục 1, trang 69–70.",
                            lead: "Nếu mỗi yêu cầu dữ liệu đều buộc người dùng biết cấu trúc tệp và tự viết thuật toán đọc tệp, việc khai thác dữ liệu sẽ phụ thuộc chặt vào cách lưu vật lí.",
                            visual: {
                                type: "cards",
                                title: "Ba nhánh của SQL — phân loại theo đối tượng bị tác động",
                                items: [
                                    { badge: "DDL", title: "Cấu trúc", text: "CREATE, ALTER và các khai báo khóa làm thay đổi định nghĩa cơ sở dữ liệu hoặc bảng." },
                                    { badge: "DML", title: "Dữ liệu", text: "SELECT, INSERT, UPDATE, DELETE đọc hoặc thay đổi các dòng dữ liệu." },
                                    { badge: "DCL", title: "Quyền", text: "GRANT và REVOKE quyết định tài khoản được phép làm gì trên đối tượng dữ liệu." }
                                ],
                                caption: "Câu hỏi đọc sơ đồ: câu lệnh tác động lên cấu trúc, dữ liệu hay quyền? Đó là tiêu chí phân loại, không phải vị trí câu lệnh trong bài."
                            },
                            sections: [
                                {
                                    heading: "SQL mô tả yêu cầu thay vì mô tả toàn bộ thủ tục",
                                    paragraphs: [
                                        "SQL (Structured Query Language) là ngôn ngữ truy vấn chuẩn dùng với cơ sở dữ liệu quan hệ. Người dùng nêu dữ liệu hoặc thao tác mong muốn; hệ quản trị cơ sở dữ liệu tiếp nhận câu truy vấn, kiểm tra quyền, chọn cách thực hiện và trả kết quả.",
                                        "Cùng một dạng yêu cầu có thể áp dụng cho nhiều cơ sở dữ liệu mà không phải viết lại thuật toán đọc từng tệp. SQL vì vậy làm giảm phụ thuộc vào cách dữ liệu được lưu vật lí, nhưng người viết vẫn phải hiểu bảng, trường, khóa và quan hệ để diễn đạt đúng yêu cầu."
                                    ]
                                },
                                {
                                    heading: "Phân loại bằng câu hỏi “tác động lên cái gì?”",
                                    paragraphs: [
                                        "Không cần học thuộc một danh sách rời. Hãy xác định đối tượng chính của câu lệnh: định nghĩa cấu trúc, thao tác dữ liệu hay kiểm soát quyền; từ đó suy ra DDL, DML hoặc DCL."
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
                            closure: {
                                conclusion: "SQL cho phép người dùng diễn đạt yêu cầu logic; hệ QTCSDL chịu trách nhiệm chọn cách truy cập và thực hiện.",
                                condition: "Muốn viết yêu cầu đúng vẫn phải hiểu bảng, trường, khóa và quan hệ của CSDL.",
                                misconception: "SQL không loại bỏ thuật toán; thuật toán thực thi được chuyển cho hệ QTCSDL lựa chọn.",
                                next: "Tiếp theo, dùng DDL để mô tả chính xác cấu trúc mà các truy vấn dữ liệu sẽ dựa vào."
                            }
                        },
                        {
                            id: "DV2",
                            heading: "Định nghĩa cơ sở dữ liệu, bảng và khóa bằng DDL",
                            time: "15 phút",
                            source: "KHBD Hoạt động 2; SGK mục 2, Bảng 14.1–14.2 và ví dụ trang 70–71.",
                            lead: "Trước khi thêm hay truy xuất dữ liệu, hệ QTCSDL cần biết các bảng gồm những trường nào, mỗi trường nhận kiểu giá trị gì và trường nào định danh hoặc tham chiếu bản ghi.",
                            visual: {
                                type: "schema",
                                title: "Sơ đồ cấu trúc dữ liệu âm nhạc",
                                nodes: [
                                    { title: "nhacsi", fields: ["Aid INT · khóa chính", "TenNS VARCHAR(64)"] },
                                    { title: "bannhac", fields: ["Mid CHAR(4) · khóa chính", "Aid INT · khóa ngoài", "TenBN VARCHAR(128)"] },
                                    { title: "casi", fields: ["Sid CHAR(4) · khóa chính", "TenCS VARCHAR(128)"] },
                                    { title: "banthuam", fields: ["Mid CHAR(4) · khóa ngoài", "Sid CHAR(4) · khóa ngoài"] }
                                ],
                                relations: [
                                    "bannhac.Aid → nhacsi.Aid: mỗi bản nhạc tham chiếu một nhạc sĩ.",
                                    "banthuam.Mid → bannhac.Mid và banthuam.Sid → casi.Sid: bản thu âm nối bản nhạc với ca sĩ."
                                ],
                                caption: "Mũi tên đi từ khóa ngoài tới khóa được tham chiếu. Kiểu dữ liệu hai đầu liên kết phải tương thích."
                            },
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
                            closure: {
                                conclusion: "DDL tạo cấu trúc; kiểu dữ liệu mô tả dạng giá trị, khóa chính định danh và khóa ngoài bảo vệ liên kết tham chiếu.",
                                condition: "Kiểu của khóa ngoài phải tương thích với khóa được tham chiếu; bảng cha phải tồn tại trước khi thêm ràng buộc.",
                                misconception: "Hai trường cùng tên chưa tự tạo quan hệ và mã có chữ không thể khai báo là INT.",
                                next: "Khi cấu trúc hợp lệ, DML mới có thể cập nhật và liên kết dữ liệu đúng quan hệ."
                            }
                        },
                        {
                            id: "DV3",
                            heading: "Cập nhật, truy xuất và liên kết dữ liệu bằng DML",
                            time: "20 phút",
                            source: "KHBD Hoạt động 3; SGK mục 3, Bảng 14.3–14.4 và ví dụ trang 71–72.",
                            lead: "Sau khi cấu trúc đã có, DML cho phép thêm, sửa, xóa và lấy dữ liệu. Điều kiện đúng quyết định câu lệnh tác động đến bản ghi nào.",
                            visual: {
                                type: "flow",
                                title: "Đọc một truy vấn SELECT có liên kết theo sáu bước",
                                steps: [
                                    { label: "SELECT", text: "Chọn các cột phải xuất hiện trong kết quả." },
                                    { label: "FROM", text: "Xác định bảng xuất phát." },
                                    { label: "JOIN", text: "Bổ sung bảng có dữ liệu cần lấy." },
                                    { label: "ON", text: "Nối khóa ngoài với khóa chính tương ứng." },
                                    { label: "WHERE", text: "Giới hạn những dòng cần giữ." },
                                    { label: "ORDER BY", text: "Sắp xếp kết quả khi đề bài yêu cầu." }
                                ],
                                caption: "Không phải truy vấn nào cũng có đủ sáu phần; SELECT và FROM là lõi, các phần còn lại xuất hiện theo yêu cầu."
                            },
                            sections: [
                                {
                                    heading: "Bốn thao tác dữ liệu và phạm vi tác động",
                                    paragraphs: [
                                        "SELECT đọc dữ liệu; INSERT thêm dòng; UPDATE sửa dòng; DELETE xóa dòng. WHERE xác định phạm vi của SELECT, UPDATE hoặc DELETE, vì vậy một điều kiện thiếu hoặc sai có thể làm kết quả quá rộng.",
                                        "Trước UPDATE hoặc DELETE, nên chạy SELECT với cùng điều kiện để xem trước tập bản ghi sẽ bị tác động."
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
                            closure: {
                                conclusion: "DML đọc hoặc thay đổi dữ liệu; JOIN chỉ có ý nghĩa khi ON nối đúng cặp khóa biểu diễn cùng quan hệ.",
                                condition: "WHERE phải đủ chặt với UPDATE/DELETE; nên xem trước bằng SELECT và sao lưu khi dữ liệu quan trọng.",
                                misconception: "Tên trường giống nhau không bảo đảm điều kiện JOIN đúng; phải xét vai trò khóa.",
                                next: "Sau khi biết truy vấn có thể làm gì, cần giới hạn tài khoản nào được phép thực hiện từng thao tác."
                            }
                        },
                        {
                            id: "DV4",
                            heading: "Kiểm soát quyền truy cập bằng DCL",
                            time: "8 phút",
                            source: "KHBD Hoạt động 4; SGK mục 4, Bảng 14.5, trang 72.",
                            lead: "Biết viết truy vấn không đồng nghĩa người dùng được phép thực hiện mọi truy vấn. Hệ QTCSDL phải kiểm soát ai được làm gì trên đối tượng nào.",
                            visual: {
                                type: "table",
                                title: "Ma trận quyền theo nhiệm vụ",
                                headers: ["Vai trò", "Nhiệm vụ", "Quyền cần", "Quyền không nên cấp"],
                                rows: [
                                    ["Người xem báo cáo", "Đọc số liệu", "SELECT", "INSERT, UPDATE, DELETE"],
                                    ["Người nhập dữ liệu", "Thêm bản ghi", "SELECT, INSERT", "DELETE nếu không có trách nhiệm xóa"],
                                    ["Người hiệu chỉnh", "Sửa dữ liệu sai", "SELECT, UPDATE", "CREATE hoặc DELETE nếu không cần"]
                                ],
                                caption: "Cấp quyền theo nhiệm vụ thực tế. Quyền rộng hơn không làm công việc tốt hơn nhưng làm tăng hậu quả khi thao tác nhầm."
                            },
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
                            closure: {
                                conclusion: "GRANT cấp quyền, REVOKE thu hồi quyền; mỗi quyền phải gắn với tài khoản, đối tượng và nhiệm vụ cụ thể.",
                                condition: "Cú pháp chi tiết có thể khác giữa các hệ QTCSDL nên phải đối chiếu đúng hệ đang dùng.",
                                misconception: "Đăng nhập được không đồng nghĩa có toàn quyền trên mọi bảng.",
                                next: "Dùng ma trận vai trò–quyền để kiểm tra các câu DCL trong phần luyện tập."
                            }
                        }
                    ],
                    practiceTime: "10 phút",
                    practice: [
                        {
                            label: "Ghép nhóm lệnh",
                            question: "Phân loại CREATE TABLE, INSERT, SELECT, GRANT và REVOKE theo đối tượng bị tác động.",
                            answer: "Cấu trúc/DDL: CREATE TABLE. Dữ liệu/DML: INSERT, SELECT. Quyền/DCL: GRANT, REVOKE.",
                            feedback: "Dựa vào đối tượng bị tác động: cấu trúc, dữ liệu hay quyền."
                        },
                        {
                            type: "single-choice",
                            label: "Trắc nghiệm một đáp án",
                            question: "Khai báo nào nhất quán nhất cho Sid khi dữ liệu mẫu là 'TK', 'QD', 'YM'?",
                            options: ["Sid INT", "Sid REAL", "Sid CHAR(4)", "Sid DATE"],
                            correctIndex: 2,
                            maxAttempts: 2,
                            correctFeedback: "Đúng. Sid là mã có chữ, không phải đại lượng dùng để tính toán.",
                            incorrectFeedback: "Xét dạng giá trị thực tế của ba mã, không xét độ dài riêng lẻ."
                        },
                        {
                            type: "number",
                            label: "Ô nhập số · dự đoán kết quả",
                            question: "Bảng bannhac có 5 dòng với Aid lần lượt là 1, 2, 1, 3, 1. Truy vấn SELECT Mid FROM bannhac WHERE Aid = 1; trả về bao nhiêu dòng?",
                            inputLabel: "Số dòng kết quả",
                            unit: "dòng",
                            expected: 3,
                            tolerance: 0,
                            min: 0,
                            max: 5,
                            maxAttempts: 2,
                            correctFeedback: "Đúng. Có ba dòng thỏa điều kiện Aid = 1.",
                            incorrectFeedback: "Chỉ đếm các dòng có Aid đúng bằng 1.",
                            solution: "Aid = 1 xuất hiện ở vị trí 1, 3 và 5."
                        },
                        {
                            label: "Tìm và sửa lỗi",
                            question: "Truy vấn UPDATE nhacsi SET TenNS = 'Hoàng Hiệp'; có rủi ro gì và sửa thế nào nếu chỉ muốn đổi dòng Aid = 6?",
                            answer: "Thiếu WHERE nên có thể đổi mọi dòng. Sửa thành UPDATE nhacsi SET TenNS = 'Hoàng Hiệp' WHERE Aid = 6;",
                            feedback: "Chạy SELECT * FROM nhacsi WHERE Aid = 6; trước để kiểm tra phạm vi."
                        },
                        {
                            label: "Viết truy vấn liên kết",
                            question: "Viết truy vấn lấy Mid, Sid và TenBN bằng cách liên kết banthuam với bannhac.",
                            answer: "SELECT a.Mid, a.Sid, b.TenBN FROM banthuam a INNER JOIN bannhac b ON a.Mid = b.Mid;",
                            feedback: "Kiểm tra đủ cột, hai bảng và điều kiện ON nối banthuam.Mid với bannhac.Mid."
                        }
                    ],
                    handsOn: {
                        title: "TH1 — Kiểm thử truy vấn JOIN hai bảng (12 phút)",
                        product: "Một truy vấn lấy Mid, Sid, TenBN từ banthuam và bannhac, kèm ảnh/kết quả chạy hoặc bảng mô phỏng và một câu giải thích điều kiện ON.",
                        preparation: [
                            "Hệ QTCSDL có hai bảng mẫu hoặc phiếu dữ liệu giấy; không dùng dữ liệu cá nhân.",
                            "Bảng bannhac có khóa chính Mid; banthuam có Mid tham chiếu bannhac(Mid)."
                        ],
                        prediction: "Nếu một Mid trong banthuam không tồn tại ở bannhac, INNER JOIN sẽ giữ hay loại dòng đó? Ghi dự đoán trước khi chạy.",
                        steps: [
                            ["1", "Vẽ hai bảng và đánh dấu Mid ở mỗi bảng.", "Xác định cặp khóa dùng để nối.", "Chỉ có một đường nối banthuam.Mid → bannhac.Mid.", "Nối theo Sid hoặc tên cột khác: quay lại sơ đồ khóa."],
                            ["2", "Viết SELECT a.Mid, a.Sid, b.TenBN và FROM banthuam a.", "Khóa đúng cột đầu ra và bảng xuất phát.", "Ba cột đầu ra có nguồn rõ ràng.", "Tên cột mơ hồ: thêm bí danh a. hoặc b."],
                            ["3", "Thêm INNER JOIN bannhac b ON a.Mid = b.Mid.", "Ghép các dòng theo quan hệ khóa.", "Câu lệnh có đủ JOIN và ON đúng cặp Mid.", "Không có kết quả: kiểm tra dữ liệu Mid ở hai bảng."],
                            ["4", "Chạy truy vấn hoặc mô phỏng từng cặp dòng.", "Kiểm chứng dự đoán bằng kết quả.", "Mỗi dòng kết quả có Mid, Sid và TenBN khớp.", "Kết quả lặp bất thường: kiểm tra tính duy nhất của bannhac.Mid."],
                            ["5", "Đổi INNER JOIN thành LEFT JOIN và so sánh.", "Nhận ra ảnh hưởng của kiểu JOIN.", "Giải thích được dòng không khớp được giữ hay loại.", "Hai kết quả giống nhau: thêm một dòng Mid chưa khớp để thử."]
                        ],
                        evidence: [
                            "Câu SQL cuối cùng hoặc phiếu mô phỏng truy vấn.",
                            "Kết quả chạy/ảnh chụp hoặc bảng kết quả viết tay.",
                            "Một câu giải thích ON và một câu so sánh INNER JOIN với LEFT JOIN."
                        ],
                        criteria: [
                            "Đúng ba cột đầu ra và đúng hai bảng.",
                            "Điều kiện ON nối banthuam.Mid = bannhac.Mid.",
                            "Kết quả hoặc mô phỏng khớp dữ liệu mẫu.",
                            "Giải thích được tác động của kiểu JOIN."
                        ],
                        checklist: [
                            "Tôi đã kiểm tra nguồn của từng cột.",
                            "Tôi đã thử truy vấn trước khi kết luận.",
                            "Tôi không đưa dữ liệu cá nhân hoặc thông tin đăng nhập vào công cụ."
                        ],
                        troubleshooting: [
                            ["Báo cột không rõ ràng", "Thêm bí danh bảng trước tên cột, ví dụ a.Mid hoặc b.Mid."],
                            ["Không có dòng kết quả", "So sánh giá trị Mid và kiểu dữ liệu ở hai bảng; thử SELECT từng bảng."],
                            ["Có quá nhiều dòng", "Kiểm tra điều kiện ON và tính duy nhất của khóa chính Mid."]
                        ],
                        fallback: "Nếu không có hệ QTCSDL, dùng hai bảng dữ liệu in sẵn, nối từng dòng theo Mid và ghi bảng kết quả bằng tay."
                    },
                    application: {
                        time: "10 phút",
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
                            ["MT1", "Khởi động; Hoạt động thảo luận hai cách truy xuất", "Khởi động, DV1", "Giải thích lợi ích; phân loại DDL/DML/DCL", "15 phút"],
                            ["MT2", "Hoạt động 2: Khởi tạo CSDL", "DV2", "DDL tạo casi/banthuam, kiểu và khóa nhất quán", "15 phút"],
                            ["MT3", "Hoạt động 3; Luyện tập 1–3", "DV3, Luyện tập, Thực hành", "DML và JOIN đúng cột, điều kiện", "30 phút"],
                            ["MT4", "Hoạt động 4: Kiểm soát quyền", "DV4", "GRANT/REVOKE theo vai trò", "8 phút"],
                            ["MT5", "Hoạt động Vận dụng có kiểm chứng AI", "Thực hành, Vận dụng, Đánh giá", "Truy vấn ba bảng và biên bản kiểm chứng", "22 phút"]
                        ],
                        units: [
                            ["DV1", "Hình thành kiến thức: thảo luận hai cách truy xuất", "Mục 1, tr. 69–70", "Lợi ích SQL; DDL, DML, DCL", "Áp dụng/phân loại", "Không"],
                            ["DV2", "Hoạt động 2", "Mục 2, Bảng 14.1–14.2, tr. 70", "CREATE, ALTER, kiểu, khóa", "Phân tích lỗi kiểu", "KHBD ghi Sid INT nhưng dữ liệu mẫu là chuỗi; đã nêu và dùng CHAR(4)."],
                            ["DV3", "Hoạt động 3; Luyện tập", "Mục 3, Bảng 14.3–14.4, tr. 71–72", "SELECT, INSERT, UPDATE, DELETE, JOIN", "Tạo và kiểm chứng truy vấn", "SGK nêu nguyên lí; bài học thêm bước SELECT kiểm tra an toàn trước UPDATE/DELETE."],
                            ["DV4", "Hoạt động 4", "Mục 4, Bảng 14.5, tr. 72", "GRANT, REVOKE, quyền tối thiểu", "Lựa chọn và bảo vệ quyết định", "Bài học làm rõ cú pháp DCL có thể khác theo hệ QTCSDL."],
                            ["Vận dụng", "Hoạt động Vận dụng", "Vận dụng, tr. 72", "JOIN ba bảng; kiểm chứng gợi ý AI", "Đánh giá/kiểm thử", "Yêu cầu kiểm chứng AI lấy từ KHBD, không phải yêu cầu cốt lõi của SGK."]
                        ],
                        media: [
                            ["SQL là gì? Database là gì? — Vịt làm Data", "Khởi động, DV1", "Hình dung SQL là ngôn ngữ diễn đạt yêu cầu với CSDL", "https://www.youtube.com/watch?v=2bu2F_gBSpc", "0:00–3:45 / 15:28", "Tiếng Việt", "18/11/2026"]
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
