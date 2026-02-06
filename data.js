<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hệ thống học tập Tin học THPT</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <style>
        :root {
            --primary: #2563eb;
            --primary-light: #eff6ff;
            --bg-page: #f8fafc;
            --bg-card: #ffffff;
            --text-main: #1e293b;
            --radius: 12px;
        }

        body {
            background-color: var(--bg-page);
            color: var(--text-main);
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        .lesson-active {
            background-color: var(--primary-light);
            color: var(--primary);
            border-right: 4px solid var(--primary);
            font-weight: 600;
        }

        .video-container {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
            border-radius: var(--radius);
            background: #000;
        }

        .video-container iframe {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
        }

        .hidden { display: none; }
        
        /* Smooth scrolling */
        html { scroll-behavior: smooth; }
    </style>
</head>
<body class="h-screen flex flex-col overflow-hidden">

    <!-- NAVIGATION BAR -->
    <nav class="h-16 bg-white border-b flex items-center justify-between px-6 shrink-0 z-20 shadow-sm">
        <div class="flex items-center gap-3 cursor-pointer" onclick="showDashboard()">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <i data-lucide="layout-dashboard" class="w-5 h-5"></i>
            </div>
            <span class="font-bold text-xl tracking-tight uppercase">IT<span class="text-blue-600">SCHOOL</span></span>
        </div>
        <div id="nav-info" class="hidden md:flex items-center gap-4 text-sm font-medium text-gray-500">
            <span id="course-progress">Tiến độ: 0%</span>
            <div class="w-32 h-2 bg-gray-100 rounded-full overflow-hidden border">
                <div id="progress-bar" class="h-full bg-blue-600 transition-all duration-500" style="width: 0%"></div>
            </div>
            <button onclick="showDashboard()" class="ml-4 px-4 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors font-semibold">Đổi khóa học</button>
        </div>
    </nav>

    <!-- 1. DASHBOARD: CHỌN KHÓA HỌC -->
    <div id="dashboard" class="flex-1 overflow-y-auto">
        <div class="max-w-7xl mx-auto p-6 md:p-12">
            <header class="mb-12 text-center">
                <h1 class="text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">Hệ Thống Học Liệu Tin Học THPT</h1>
                <p class="text-slate-500 text-lg max-w-2xl mx-auto">Kho lưu trữ bài giảng, chuyên đề và tài liệu ôn tập dành cho học sinh. Chọn một khóa học để bắt đầu.</p>
            </header>

            <!-- Group: Chính khóa -->
            <section class="mb-16">
                <div class="flex items-center gap-3 mb-8 border-l-4 border-blue-600 pl-4">
                    <h2 class="text-2xl font-bold text-slate-800">Chương trình Chính khóa</h2>
                </div>
                <div id="group-chinh-khoa" class="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            </section>

            <!-- Group: Chuyên Tin -->
            <section class="mb-16">
                <div class="flex items-center gap-3 mb-8 border-l-4 border-purple-600 pl-4">
                    <h2 class="text-2xl font-bold text-slate-800">Lớp Chuyên Tin</h2>
                </div>
                <div id="group-chuyen" class="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            </section>

            <!-- Group: Chuyên đề -->
            <section class="mb-20">
                <div class="flex items-center gap-3 mb-8 border-l-4 border-emerald-600 pl-4">
                    <h2 class="text-2xl font-bold text-slate-800">Chuyên đề tự chọn</h2>
                </div>
                <div id="group-chuyen-de" class="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            </section>
        </div>

        <!-- FOOTER: THÔNG TIN LIÊN HỆ -->
        <footer class="bg-white border-t py-12 px-6">
            <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <div class="flex items-center gap-2 mb-4">
                        <div class="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white">
                            <i data-lucide="book" class="w-4 h-4"></i>
                        </div>
                        <span class="font-bold text-lg uppercase">IT School</span>
                    </div>
                    <p class="text-gray-500 text-sm leading-relaxed">Nền tảng chia sẻ học liệu Tin học trực tuyến giúp học sinh tiếp cận kiến thức mọi lúc, mọi nơi.</p>
                </div>
                <div>
                    <h3 class="font-bold text-slate-800 mb-4 uppercase text-sm tracking-widest">Thông tin liên hệ</h3>
                    <ul class="space-y-3 text-sm text-gray-600">
                        <li class="flex items-center gap-3"><i data-lucide="user" class="w-4 h-4 text-blue-600"></i> Giáo viên: Nguyễn Văn A</li>
                        <li class="flex items-center gap-3"><i data-lucide="mail" class="w-4 h-4 text-blue-600"></i> email@truonghoc.edu.vn</li>
                        <li class="flex items-center gap-3"><i data-lucide="phone" class="w-4 h-4 text-blue-600"></i> +84 123 456 789</li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-bold text-slate-800 mb-4 uppercase text-sm tracking-widest">Mạng xã hội</h3>
                    <div class="flex gap-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all"><i data-lucide="facebook"></i></a>
                        <a href="#" class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all"><i data-lucide="youtube"></i></a>
                        <a href="#" class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 hover:bg-slate-800 hover:text-white transition-all"><i data-lucide="github"></i></a>
                    </div>
                </div>
            </div>
            <div class="max-w-7xl mx-auto border-t mt-10 pt-6 text-center text-gray-400 text-xs">
                &copy; 2024 IT School - Nền tảng học tập dành cho THPT. Phát triển bởi Gemini.
            </div>
        </footer>
    </div>

    <!-- 2. LEARNING SCREEN -->
    <div id="learning-screen" class="hidden flex flex-1 overflow-hidden">
        <aside class="w-full md:w-80 lg:w-96 bg-white border-r flex flex-col shrink-0 z-10" id="sidebar">
            <div class="p-4 border-b bg-gray-50">
                <h2 id="sidebar-course-title" class="font-bold text-blue-700 text-base line-clamp-1 uppercase tracking-tight">Khóa học</h2>
            </div>
            <div class="overflow-y-auto flex-1 pb-20" id="playlist-container"></div>
        </aside>

        <main class="flex-1 overflow-y-auto bg-[#f8fafc] relative">
            <div class="max-w-5xl mx-auto p-4 md:p-8">
                <!-- Nút Mobile Menu -->
                <button onclick="toggleSidebar()" class="md:hidden mb-4 flex items-center gap-2 text-blue-600 font-bold bg-white px-4 py-2 rounded-lg border shadow-sm">
                    <i data-lucide="menu"></i> Danh sách bài học
                </button>

                <div class="video-container shadow-2xl mb-8 border-4 border-white">
                    <iframe id="main-video" src="" frameborder="0" allowfullscreen></iframe>
                </div>

                <div class="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-dashed">
                        <div>
                            <h1 id="current-lesson-title" class="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">Tiêu đề bài học</h1>
                        </div>
                        <div id="download-zone">
                            <!-- Nút tài liệu sẽ xuất hiện ở đây -->
                        </div>
                    </div>
                    <div id="current-lesson-desc" class="text-slate-600 leading-relaxed text-lg prose max-w-none"></div>
                </div>
            </div>
        </main>
    </div>

    <script>
        // --- CẤU TRÚC DỮ LIỆU ĐỂ THẦY DỄ DÀNG THÊM BÀI ---
        const courses = {
            chinhKhoa: [
                { 
                    id: 'tk10', 
                    title: 'Tin học 10', 
                    icon: 'monitor', 
                    color: 'blue', 
                    content: [
                        { 
                            chapterName: "Chương 1: Máy tính & Xã hội", 
                            lessons: [
                                { 
                                    title: "Bài 1: Thông tin và dữ liệu", 
                                    videoId: "01fCqS8iLTo", 
                                    desc: "Phân biệt khái niệm thông tin, dữ liệu, vật mang tin. Tầm quan trọng của thông tin.",
                                    downloadUrl: "#" // Link bài tập/tài liệu PDF
                                },
                                { 
                                    title: "Bài 2: Vai trò của thiết bị thông minh", 
                                    videoId: "dQw4w9WgXcQ", 
                                    desc: "Tìm hiểu về các thiết bị số hóa xung quanh chúng ta.",
                                    downloadUrl: null
                                },
                                { 
                                    title: "Bài 3: Thực hành sử dụng thiết bị số", 
                                    videoId: "SqcY0GlETPk", 
                                    desc: "Hướng dẫn thực hành kết nối và sử dụng các thiết bị ngoại vi cơ bản.",
                                    downloadUrl: "https://example.com/tai-lieu-bai-3.pdf" 
                                }
                            ]
                        },
                        {
                            chapterName: "Chương 2: Mạng máy tính & Internet",
                            lessons: [
                                { title: "Bài 4: Mạng máy tính", videoId: "dQw4w9WgXcQ", desc: "Khái niệm và lợi ích của mạng máy tính." }
                            ]
                        }
                    ]
                },
                { id: 'tk11', title: 'Tin học 11 (Lập trình Python)', icon: 'server', color: 'blue', content: [
                    { 
                        chapterName: "Cấu trúc dữ liệu Python", 
                        lessons: [
                            { title: "Bài 1: Kiểu dữ liệu danh sách", videoId: "dQw4w9WgXcQ", desc: "Thao tác với List trong Python." }
                        ]
                    }
                ]},
                { id: 'tk12', title: 'Tin học 12', icon: 'globe', color: 'blue', content: [] }
            ],
            chuyenTin: [
                { id: 'cp1', title: 'Giải thuật C++ 10', icon: 'terminal', color: 'purple', content: [
                    { 
                        chapterName: "Độ phức tạp thuật toán", 
                        lessons: [
                            { title: "Kỹ thuật đếm & Độ phức tạp", videoId: "dQw4w9WgXcQ", desc: "Cách tính Big O trong lập trình C++." }
                        ]
                    }
                ]},
                { id: 'cp2', title: 'Cấu trúc dữ liệu & Giải thuật', icon: 'share-2', color: 'purple', content: [] },
                { id: 'cp3', title: 'Luyện thi Olympic Tin học', icon: 'award', color: 'purple', content: [] }
            ],
            chuyenDe: [
                { id: 'cd1', title: 'Thiết kế Web (HTML/CSS/JS)', icon: 'layout', color: 'emerald', content: [
                    { 
                        chapterName: "Giao diện hiện đại", 
                        lessons: [
                            { title: "Bài 1: Flexbox và Grid", videoId: "dQw4w9WgXcQ", desc: "Xây dựng layout chuyên nghiệp cho website." }
                        ]
                    }
                ]},
                { id: 'cd2', title: 'Khoa học dữ liệu (Data Science)', icon: 'database', color: 'emerald', content: [] },
                { id: 'cd3', title: 'Lập trình Game cơ bản', icon: 'gamepad-2', color: 'emerald', content: [] }
            ]
        };

        let activeCourse = null;
        let currentPath = { chapter: 0, lesson: 0 };

        // --- HÀM ĐIỀU KHIỂN ---

        function renderDashboard() {
            const renderGroup = (groupId, data) => {
                const container = document.getElementById(groupId);
                container.innerHTML = data.map(course => `
                    <div onclick="selectCourse('${course.id}')" class="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-24 h-24 bg-${course.color}-50 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform opacity-50"></div>
                        <div class="w-14 h-14 rounded-2xl bg-${course.color}-100 text-${course.color}-600 flex items-center justify-center mb-6 group-hover:bg-${course.color}-600 group-hover:text-white transition-all shadow-inner">
                            <i data-lucide="${course.icon}"></i>
                        </div>
                        <h3 class="font-bold text-xl text-slate-800 leading-tight">${course.title}</h3>
                        <p class="text-slate-500 text-sm mt-3 flex items-center gap-2">
                             ${course.content.length > 0 ? `<i data-lucide="check-circle" class="w-4 h-4 text-emerald-500"></i> Có nội dung` : 'Đang cập nhật...'}
                        </p>
                    </div>
                `).join('');
            };

            renderGroup('group-chinh-khoa', courses.chinhKhoa);
            renderGroup('group-chuyen', courses.chuyenTin);
            renderGroup('group-chuyen-de', courses.chuyenDe);
            lucide.createIcons();
        }

        function selectCourse(courseId) {
            let found = null;
            Object.values(courses).forEach(group => {
                const c = group.find(item => item.id === courseId);
                if(c) found = c;
            });

            if (!found || !found.content.length) {
                alert("Khóa học này đang được chuẩn bị tài liệu. Thầy vui lòng quay lại sau!");
                return;
            }

            activeCourse = found;
            document.getElementById('dashboard').classList.add('hidden');
            document.getElementById('learning-screen').classList.remove('hidden');
            document.getElementById('nav-info').classList.remove('hidden');
            document.getElementById('sidebar-course-title').innerText = activeCourse.title;

            renderPlaylist();
            playLesson(0, 0);
            window.scrollTo(0, 0);
        }

        function showDashboard() {
            document.getElementById('dashboard').classList.remove('hidden');
            document.getElementById('learning-screen').classList.add('hidden');
            document.getElementById('nav-info').classList.add('hidden');
            window.scrollTo(0, 0);
        }

        function renderPlaylist() {
            const container = document.getElementById('playlist-container');
            let html = '';
            activeCourse.content.forEach((chapter, cIndex) => {
                html += `<div class="px-5 py-4 bg-slate-100 border-y text-[10px] font-black text-slate-500 uppercase tracking-[2px]">${chapter.chapterName}</div>`;
                chapter.lessons.forEach((lesson, lIndex) => {
                    html += `
                        <div onclick="playLesson(${cIndex}, ${lIndex})" id="l-${cIndex}-${lIndex}"
                             class="flex items-center gap-4 px-6 py-5 cursor-pointer hover:bg-slate-50 border-b text-sm transition-all lesson-item">
                            <div class="w-8 h-8 rounded-lg bg-slate-50 border flex items-center justify-center shrink-0 text-xs font-bold text-slate-400 num-box">${lIndex + 1}</div>
                            <span class="flex-1 font-medium text-slate-600">${lesson.title}</span>
                            <i data-lucide="play" class="w-3 h-3 text-slate-300"></i>
                        </div>
                    `;
                });
            });
            container.innerHTML = html;
            lucide.createIcons();
        }

        function playLesson(cIndex, lIndex) {
            const lesson = activeCourse.content[cIndex].lessons[lIndex];
            currentPath = { chapter: cIndex, lesson: lIndex };
            
            // Video
            document.getElementById('main-video').src = `https://www.youtube.com/embed/${lesson.videoId}?autoplay=1`;
            
            // Nội dung
            document.getElementById('current-lesson-title').innerText = lesson.title;
            document.getElementById('current-lesson-desc').innerHTML = lesson.desc;

            // Nút tài liệu
            const downloadZone = document.getElementById('download-zone');
            if (lesson.downloadUrl && lesson.downloadUrl !== "#") {
                downloadZone.innerHTML = `
                    <a href="${lesson.downloadUrl}" target="_blank" class="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl border border-emerald-100 hover:bg-emerald-100 transition-colors font-bold text-sm">
                        <i data-lucide="file-text" class="w-4 h-4"></i> Tài liệu / Bài tập
                    </a>
                `;
            } else {
                downloadZone.innerHTML = '';
            }

            // UI
            document.querySelectorAll('.lesson-item').forEach(el => el.classList.remove('lesson-active'));
            const activeEl = document.getElementById(`l-${cIndex}-${lIndex}`);
            if(activeEl) activeEl.classList.add('lesson-active');
            
            updateProgress();
            lucide.createIcons();
        }

        function updateProgress() {
            let total = 0, currentIdx = 0, passed = false;
            activeCourse.content.forEach((c, ci) => {
                c.lessons.forEach((l, li) => {
                    total++;
                    if(!passed) {
                        currentIdx++;
                        if(ci === currentPath.chapter && li === currentPath.lesson) passed = true;
                    }
                });
            });
            const percent = Math.round((currentIdx/total)*100);
            document.getElementById('progress-bar').style.width = percent + '%';
            document.getElementById('course-progress').innerText = `Tiến độ: ${percent}%`;
        }

        function toggleSidebar() {
            const s = document.getElementById('sidebar');
            s.classList.toggle('-translate-x-full');
            if (!s.classList.contains('fixed')) {
                s.classList.add('fixed', 'inset-0', 'z-50', 'w-4/5');
            }
        }

        window.onload = renderDashboard;
    </script>
</body>
</html>
