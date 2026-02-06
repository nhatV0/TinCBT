/**
 * FILE DỮ LIỆU VỆ TINH: TIN HỌC 10
 * Nhiệm vụ: Chứa toàn bộ bài giảng chi tiết của khối 10.
 * Cấu trúc: Mỗi chương (chapter) gồm nhiều bài học (lessons).
 */

window.courseContent = [
    {
        chapterName: "Chương 1: Máy tính và xã hội tri thức",
        lessons: [
            {
                title: "Bài 1: Thông tin và xử lý thông tin",
                videoId: "01fCqS8iLTo",
                desc: "Học sinh hiểu được các khái niệm về thông tin, dữ liệu và vật mang tin trong đời sống.",
                downloadUrl: "https://example.com/bai-1-tai-lieu.pdf" // Thay bằng link Drive hoặc Dropbox của thầy
            },
            {
                title: "Bài 2: Vai trò của thiết bị thông minh",
                videoId: "dQw4w9WgXcQ",
                desc: "Nhận biết các thiết bị thông minh và sự đóng góp của chúng trong cuộc cách mạng công nghiệp 4.0.",
                downloadUrl: null // Để null nếu bài này chưa có tài liệu
            }
        ]
    },
    {
        chapterName: "Chương 2: Mạng máy tính và Internet",
        lessons: [
            {
                title: "Bài 4: Mạng máy tính",
                videoId: "dQw4w9WgXcQ",
                desc: "Tìm hiểu khái niệm mạng máy tính, các thành phần của mạng và lợi ích của việc kết nối.",
                downloadUrl: "#"
            },
            {
                title: "Bài 5: Internet",
                videoId: "01fCqS8iLTo",
                desc: "Lịch sử hình thành và tầm quan trọng của mạng Internet toàn cầu.",
                downloadUrl: null
            }
        ]
    }
];
