// File dữ liệu đặc biệt dành cho ôn thi THPT Quốc Gia
window.courseContent = {
    // Cấu hình giao diện riêng cho khóa học này
    settings: {
        theme: "exam-mode", // Giao diện tối, màu vàng/đỏ chủ đạo
        allowPractice: true,
        showTimer: true
    },
    
    // Phân loại nội dung theo lộ trình ôn thi
    chapters: [
        {
            chapterName: "CHẶNG 1: TỔNG ÔN KIẾN THỨC CỐT LÕI",
            items: [
                {
                    title: "Tóm tắt toàn bộ lý thuyết Tin 12",
                    type: "pdf",
                    url: "documents/summary-tin12.pdf",
                    desc: "Hệ thống lại toàn bộ kiến thức trọng tâm theo sơ đồ tư duy."
                },
                {
                    title: "Kỹ thuật giải nhanh trắc nghiệm trên máy tính",
                    type: "video",
                    videoId: "VIDEO_ID_HERE",
                    desc: "Các mẹo loại trừ đáp án và xử lý câu hỏi hóc búa."
                }
            ]
        },
        {
            chapterName: "CHẶNG 2: NGÂN HÀNG ĐỀ THI MÔ PHỎNG (MỚI NHẤT)",
            items: [
                {
                    id: "DE_001_2026",
                    title: "Đề minh họa số 01 - Cấu trúc 2026",
                    type: "quiz", // Loại bài tập trắc nghiệm
                    duration: 50, // 50 phút
                    totalQuestions: 40,
                    questions: [
                        {
                            q: "Trong các thiết bị sau, thiết bị nào là thiết bị mạng?",
                            options: ["Chuột", "Bàn phím", "Router", "Máy in"],
                            correct: 2, // Chỉ số của đáp án đúng (Router)
                            explain: "Router (Bộ định tuyến) là thiết bị kết nối các mạng khác nhau và điều phối dữ liệu."
                        },
                        {
                            q: "Giao thức nào được sử dụng phổ biến để truyền tải trang web?",
                            options: ["FTP", "HTTP", "SMTP", "POP3"],
                            correct: 1,
                            explain: "HTTP (Hypertext Transfer Protocol) là giao thức truyền tải siêu văn bản cho web."
                        }
                        // Thầy có thể thêm hàng trăm câu hỏi ở đây cho mỗi năm
                    ]
                },
                {
                    id: "DE_002_2026",
                    title: "Đề ôn luyện số 02 - Chuyên đề Mạng máy tính",
                    type: "quiz",
                    duration: 45,
                    questions: [] // Tương tự cấu trúc trên
                }
            ]
        },
        {
            chapterName: "KHO LƯU TRỮ ĐỀ CÁC NĂM TRƯỚC",
            items: [
                {
                    title: "Bộ đề chính thức Bộ GD&ĐT 2025",
                    type: "pdf",
                    url: "documents/de-chinh-thuc-2025.pdf",
                    desc: "Tham khảo đề thi thực tế năm trước để đánh giá độ khó."
                }
            ]
        }
    ]
};
