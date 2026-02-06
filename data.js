// FILE NÀY QUẢN LÝ ĐƯỜNG DẪN ĐẾN CÁC THƯ MỤC CON

const chinhKhoa = [
    { 
        id: 'tk10', title: 'Tin học 10', icon: 'monitor', color: 'blue', 
        dataPath: 'data-chinh-khoa/tin10.js', // Thêm tên folder vào trước
        description: 'Chương trình tin học lớp 10 theo bộ sách mới, trọng tâm về tư duy máy tính và lập trình cơ bản.'
    },
    { 
        id: 'tk11', title: 'Tin học 11', icon: 'server', color: 'blue', 
        dataPath: 'data-chinh-khoa/tin11.js',
        description: 'Kiến thức về hệ điều hành, mạng máy tính và cơ sở dữ liệu cho học sinh khối 11.'
    },
    { 
        id: 'tk12', title: 'Tin học 12', icon: 'globe', color: 'blue', 
        dataPath: 'data-chinh-khoa/tin12.js',
        description: 'Ứng dụng tin học trong định hướng nghề nghiệp và các công nghệ hiện đại.'
    }
];

const chuyenTin = [
    { 
        id: 'cp10', title: 'Giải thuật C++ (Lớp 10)', icon: 'terminal', color: 'purple', 
        dataPath: 'data-chuyen-tin/cpp10.js',
        description: 'Nền tảng lập trình C++, các thuật toán cơ bản, kỹ thuật đệ quy và quy hoạch động cơ bản.'
    },
    { 
        id: 'cp11', title: 'Cấu trúc dữ liệu và đồ thị (Lớp 11)', icon: 'share-2', color: 'purple', 
        dataPath: 'data-chuyen-tin/ctdl.js',
        description: 'Đi sâu vào danh sách liên kết, cây, ngăn xếp, hàng đợi và các thuật toán đồ thị nâng cao.'
    },
    { 
        id: 'cp12', title: 'Khoa học máy tính và AI (Lớp 12)', icon: 'brain-circuit', color: 'purple', 
        dataPath: 'data-chuyen-tin/ai12.js',
        description: 'Giới thiệu về trí tuệ nhân tạo, học máy và các mô hình tính toán hiện đại.'
    }
];

const chuyenDe = [
    { 
        id: 'cd1', title: 'Tin học văn phòng', icon: 'file-text', color: 'emerald', 
        dataPath: 'data-chuyen-de/office.js',
        description: 'Thành thạo Word, Excel, PowerPoint theo tiêu chuẩn quốc tế MOS.'
    },
    { 
        id: 'cd2', title: 'Thiết kế & Chỉnh sửa đồ họa', icon: 'palette', color: 'emerald', 
        dataPath: 'data-chuyen-de/design.js',
        description: 'Kỹ năng sử dụng Photoshop, Illustrator và tư duy thẩm mỹ trong thiết kế.'
    },
    { 
        id: 'cd3', title: 'Quản trị dự án & Máy tính', icon: 'settings', color: 'emerald', 
        dataPath: 'data-chuyen-de/admin.js',
        description: 'Kỹ năng quản lý dự án công nghệ, lắp ráp và tối ưu hóa hệ thống máy tính.'
    }
];

const khac = [];

window.courses = {
    chinhKhoa: chinhKhoa,
    chuyenTin: chuyenTin,
    chuyenDe: chuyenDe,
    khac: khac
};
