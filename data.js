// 1. THÔNG TIN GIÁO VIÊN
// Thầy thay đổi thông tin cá nhân ở đây để cập nhật toàn hệ thống
window.teacherInfo = {
    name: "Thầy Võ Minh Nhật",
    role: "Giáo viên Tin học - THPT Chuyên Bến Tre",
    phone: "094.454.0402",
    email: "vominhnhat080402@gmail.com",
    facebook: "https://www.facebook.com/nhat.vo.5030927",
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
        }
    ],

    // Nhóm 2: Lớp Chuyên Tin 
    chuyenTin: [
        { 
            id: 'cpp-basic', 
            title: 'Giải thuật C++', 
            icon: 'terminal', 
            dataPath: 'data-chuyen-tin/cpp_basic.js', 
            description: 'Luyện tập giải thuật và kỹ năng lập trình C++.' 
        },
        { 
            id: 'dsa', 
            title: 'Cấu trúc dữ liệu & Giải thuật', 
            icon: 'binary', 
            dataPath: 'data-chuyen-tin/dsa.js', 
            description: 'Kiến thức chuyên sâu về thuật toán và cấu trúc dữ liệu.' 
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
            id: 'mos-cert', 
            title: 'Chứng chỉ MOS', 
            icon: 'award', 
            dataPath: 'data-mos/mos.js', 
            description: 'Luyện thi chứng chỉ Microsoft Office Specialist (Word, Excel, PPT).' 
        },
        { 
            id: 'office-tips', 
            title: 'Thủ thuật Tin học', 
            icon: 'mouse-pointer-2', 
            dataPath: 'data-khac/tips.js', 
            description: 'Các mẹo hay giúp xử lý công việc văn phòng hiệu quả.' 
        }
    ]
};
