// FILE NÀY LÀ TRẠM ĐIỀU HƯỚNG CHÍNH
// Thầy liệt kê danh sách 9 khóa học tại đây.
// Lưu ý: dataPath phải khớp chính xác với tên file bài học thầy tạo trên GitHub.

const chinhKhoa = [
    { id: 'tk10', title: 'Tin học 10', icon: 'monitor', color: 'blue', dataPath: 'tin10.js' },
    { id: 'tk11', title: 'Tin học 11', icon: 'server', color: 'blue', dataPath: 'tin11.js' },
    { id: 'tk12', title: 'Tin học 12', icon: 'globe', color: 'blue', dataPath: 'tin12.js' }
];

const chuyenTin = [
    { id: 'cp1', title: 'Giải thuật C++ 10', icon: 'terminal', color: 'purple', dataPath: 'cpp10.js' },
    { id: 'cp2', title: 'Cấu trúc dữ liệu', icon: 'share-2', color: 'purple', dataPath: 'ctdl.js' },
    { id: 'cp3', title: 'Olympic Tin học', icon: 'award', color: 'purple', dataPath: 'olympic.js' }
];

const chuyenDe = [
    { id: 'cd1', title: 'Thiết kế Web', icon: 'layout', color: 'emerald', dataPath: 'web.js' },
    { id: 'cd2', title: 'Khoa học dữ liệu', icon: 'database', color: 'emerald', dataPath: 'data_science.js' },
    { id: 'cd3', title: 'Lập trình Game', icon: 'gamepad-2', color: 'emerald', dataPath: 'game.js' }
];

// Xuất dữ liệu ra cửa sổ trình duyệt để index.html có thể truy cập
window.courses = {
    chinhKhoa: chinhKhoa,
    chuyenTin: chuyenTin,
    chuyenDe: chuyenDe
};
