// 1. THÔNG TIN GIÁO VIÊN
// Thầy thay đổi thông tin cá nhân ở đây để cập nhật toàn hệ thống
window.teacherInfo = {
    name: "Thầy Võ Minh Nhật",
    role: "Giáo viên Tin học - THPT Chuyên Bến Tre",
    phone: "094.454.0402",
    email: "vominhnhat080402@gmail.com",
    facebook: " ", // https://www.facebook.com/nhat.vo.5030927
    zalo: "https://zalo.me/0944540402",
    avatar: "https://cdn-icons-png.flaticon.com/512/1995/1995515.png"
};

// 2. DANH MỤC KHÓA HỌC (Dashboard)
window.courses = {
    // Nhóm 1: Chương trình Chính khoa
    chinhKhoa: [
        { 
            id: 'tin10', 
            title: 'Tin học 10', 
            icon: 'monitor', 
            dataPath: 'data-chinh-khoa/tin10.js', 
            description: 'Chương trình Tin học 10 - Bộ sách Kết nối tri thức với cuộc sống.' 
        },
        { 
            id: 'tin11', 
            title: 'Tin học 11', 
            icon: 'database', 
            dataPath: 'data-chinh-khoa/tin11.js', 
            description: 'Chương trình Tin học 11 - Bộ sách Kết nối tri thức với cuộc sống.' 
        },
        { 
            id: 'tin12', 
            title: 'Tin học 12', 
            icon: 'network', 
            dataPath: 'data-chinh-khoa/tin12.js', 
            description: 'Chương trình Tin học 12 - Bộ sách Kết nối tri thức với cuộc sống.' 
        },
        { 
            id: 'tin12plus', 
            title: 'CHINH PHỤC 10 ĐIỂM THPT', 
            icon: 'flame', // Sử dụng icon ngọn lửa thay vì award
            dataPath: 'data-chinh-khoa/tin12plus.js', 
            description: 'Chiến dịch ôn thi cuối cùng. Hệ thống đề thi thử mô phỏng 100% cấu trúc thật của Bộ GD&ĐT.' 
        }
    ],

    // Nhóm 2: Lớp Chuyên Tin 
    chuyenTin: [
        { 
            id: 'cpp-basic', 
            title: 'Basic', 
            icon: 'terminal', 
            dataPath: 'data-chuyen/cpp_basic.js', 
            description: 'Làm quen với ngôn ngữ lập trình C++.' 
        },
        { 
            id: 'cpp-avanced', 
            title: 'Avanced', 
            icon: 'code-2', 
            dataPath: 'data-chuyen/cpp_avanced.js', 
            description: 'bắt đầu học, đọc hiểu về các kỹ thuật lập trình.' 
        },
        { 
            id: 'aldesaan', 
            title: 'Algorithm Design and Analysis', 
            icon: 'cpu', 
            dataPath: 'data-chuyen/aldesaan.js', 
            description: 'tìm hiểu về các thuật toán và giải thuật trong lập trình' 
        },
        { 
            id: 'datastruc', 
            title: 'Data Structure', 
            icon: 'layers', 
            dataPath: 'data-chuyen/datastruc.js', 
            description: 'Tìm hiểu về cấu trúc dữ liệu, tìm kiếm, ngăn xếp và cây' 
        },
        { 
            id: 'graph', 
            title: 'Graph theory', 
            icon: 'share-2', 
            dataPath: 'data-chuyen/graph.js', 
            description: 'Tìm hiểu về lý thuyết đồ thị các cách duyệt của đồ thị' 
        },
        { 
            id: 'oop', 
            title: 'Object-Oriented Programming', 
            icon: 'box', 
            dataPath: 'data-chuyen/oop.js', 
            description: 'Lập trình hướng đối tượng sẽ không nằm trong chương trình nhưng là phần giúp các bạn hiểu về hướng đối tượng' 
        }
    ],

    // Nhóm 3: Chuyên đề tự chọn
    chuyenDe: [
        { 
            id: 'web-design', 
            title: 'Thiết kế Website', 
            icon: 'layout', 
            dataPath: 'data-chuyen-de/web.js', 
            description: 'Hướng dẫn xây dựng website cá nhân với HTML, CSS và JavaScript.' 
        }
    ],

    // Nhóm 4: Các nội dung khác
    khac: [
        { 
            id: 'mos-cert', // ID duy nhất cho MOS
            title: 'Chứng chỉ MOS', 
            icon: 'award', 
            dataPath: 'data-khac/mos.js', // Thầy đã đổi sang data-khac
            description: 'Luyện thi chứng chỉ Microsoft Office Specialist.' 
        }, // <--- PHẢI CÓ DẤU PHẨY Ở ĐÂY ĐỂ NGĂN CÁCH
        { 
            id: 'office-tips', // ID duy nhất cho Thủ thuật
            title: 'Thủ thuật Tin học', 
            icon: 'mouse-pointer-2', 
            dataPath: 'data-khac/tips.js', 
            description: 'Các mẹo hay giúp xử lý công việc văn phòng hiệu quả.' 
        },
        { 
            id: 'vex-robotics', 
            title: 'Lập trình Robotics với VEX IQ (cơ bản)', 
            icon: 'cpu', 
            dataPath: 'data-khac/vex-iq.js', 
            description: 'Khóa học cơ bản lập trình với VEX IQ phiên bản Education giúp học sinh làm quen với bộ KIT và phần mềm học tập.' 
        }
    ]  
};
// 3. CÔNG CỤ GIẢNG DẠY (Dành cho Giáo viên)
// Mảng này dùng để hiển thị các tiện ích nhanh ở thanh bên hoặc Dashboard
window.teachingTools = [
    {
        id: 'wheel',
        title: "Vòng quay may mắn",
        description: "Dùng để gọi tên học sinh hoặc chọn phần thưởng ngẫu nhiên.",
        icon: "refresh-cw", // Tên icon Lucide
        url: "https://wheelofnames.com/vi/" 
    },
    {
        id: 'timer',
        title: "Đồng hồ đếm ngược",
        description: "Quản lý thời gian làm bài tập hoặc thảo luận nhóm trên lớp.",
        icon: "timer",
        url: "https://stopwatch-app.com/timer"
    },
    {
        id: 'whiteboard',
        title: "Bảng trắng Online",
        description: "Phác thảo ý tưởng, vẽ sơ đồ giải thuật trực quan.",
        icon: "pen-tool",
        url: "https://excalidraw.com/"
    },
    {
        id: 'compiler',
        title: "Trình biên dịch Online",
        description: "Chạy thử code C++, Python nhanh mà không cần cài đặt.",
        icon: "code",
        url: "https://www.programiz.com/python-programming/online-compiler/"
    },
    {
        id: 'GIMP',
        title: "Công cụ chỉnh sửa ảnh",
        description: "Công cụ giúp chỉnh sửa ảnh online",
        icon: "image",
        url: "https://fixthephoto.com/vi/gimp-online.html"
    },
    {
        id: 'mindmap',
        title: "Sơ đồ tư duy",
        description: "Công cụ giúp hệ thống hóa kiến thức bài học nhanh chóng.",
        icon: "git-branch",
        url: "https://www.mindmup.com/"
    }
];







