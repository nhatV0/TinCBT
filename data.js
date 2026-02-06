// FILE NÀY LÀ TRẠM ĐIỀU HƯỚNG CHÍNH
// Quản lý 4 nhóm khóa học: Chính khóa, Chuyên Tin, Chuyên đề và Khóa học khác.

const chinhKhoa = [
    { 
        id: 'tk10', title: 'Tin học 10', icon: 'monitor', color: 'blue', dataPath: 'tin10.js',
        description: 'Chương trình tin học lớp 10 (Chân trời sáng tạo), trọng tâm kiến thức về tư duy máy tính và lập trình cơ bản.'
    },
    { 
        id: 'tk11', title: 'Tin học 11', icon: 'server', color: 'blue', dataPath: 'tin11.js',
        description: 'Chương trình tin học lớp 11 (Chân trời sáng tạo). trọng tâm kiến thức về hệ điều hành, mạng máy tính và cơ sở dữ liệu.'
    },
    { 
        id: 'tk12', title: 'Tin học 12', icon: 'globe', color: 'blue', dataPath: 'tin12.js',
        description: 'Chương trình tin học lớp 12 (Chân trời sáng tạo). Trọng tâm kiến thức về ứng dụng tin học trong định hướng nghề nghiệp và các công nghệ hiện đại.'
    }
];

const chuyenTin = [
    { 
        id: 'cp10', title: 'Giải thuật C++ (Lớp 10)', icon: 'terminal', color: 'purple', dataPath: 'cpp10.js',
        description: 'Nền tảng lập trình C++, các thuật toán cơ bản, kỹ thuật đệ quy và quy hoạch động cơ bản.'
    },
    { 
        id: 'cp11', title: 'Cấu trúc dữ liệu và đồ thị (Lớp 11)', icon: 'share-2', color: 'purple', dataPath: 'ctdl.js',
        description: 'Đi sâu vào danh sách liên kết, cây, ngăn xếp, hàng đợi và các thuật toán đồ thị nâng cao.'
    },
    { 
        id: 'cp12', title: 'Khoa học máy tính và AI (Lớp 12)', icon: 'brain-circuit', color: 'purple', dataPath: 'ai12.js',
        description: 'Giới thiệu về trí tuệ nhân tạo, học máy và các mô hình tính toán hiện đại.'
    }
];

const chuyenDe = [
    { 
        id: 'cd1', title: 'Tin học văn phòng', icon: 'file-text', color: 'emerald', dataPath: 'office.js',
        description: 'Thành thạo Word, Excel, PowerPoint theo tiêu chuẩn quốc tế MOS.'
    },
    { 
        id: 'cd2', title: 'Thiết kế & Chỉnh sửa đồ họa', icon: 'palette', color: 'emerald', dataPath: 'design.js',
        description: 'Kỹ năng sử dụng Photoshop, Illustrator và tư duy thẩm mỹ trong thiết kế.'
    },
    { 
        id: 'cd3', title: 'Quản trị dự án & Máy tính', icon: 'settings', color: 'emerald', dataPath: 'admin.js',
        description: 'Kỹ năng quản lý dự án công nghệ, lắp ráp và tối ưu hóa hệ thống máy tính.'
    }
];

const khac = [
    // Hiện tại để trống để thầy thêm sau
];

window.courses = {
    chinhKhoa: chinhKhoa,
    chuyenTin: chuyenTin,
    chuyenDe: chuyenDe,
    khac: khac
};

