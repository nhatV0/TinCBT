<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hệ thống học tập Tin học THPT</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <!-- GỌI FILE ĐIỀU HƯỚNG -->
    <script src="data.js"></script>
    
    <style>
        :root { --primary: #2563eb; --bg-page: #f8fafc; --radius: 12px; }
        body { background-color: var(--bg-page); font-family: 'Inter', sans-serif; }
        .lesson-active { background-color: #eff6ff; color: #2563eb; border-right: 4px solid #2563eb; font-weight: 600; }
        .video-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: var(--radius); background: #000; }
        .video-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .hidden { display: none; }
        .loading-overlay { position: fixed; inset: 0; background: rgba(255,255,255,0.8); display: flex; align-items: center; justify-content: center; z-index: 100; }
    </style>
</head>
<body class="h-screen flex flex-col overflow-hidden">
    <div id="loader" class="hidden loading-overlay"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>

    <!-- Thanh điều hướng -->
    <nav class="h-16 bg-white border-b flex items-center justify-between px-6 shrink-0 z-20 shadow-sm">
        <div class="flex items-center gap-3 cursor-pointer" onclick="showDashboard()">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white"><i data-lucide="layout-dashboard" class="w-5 h-5"></i></div>
            <span class="font-bold text-xl uppercase text-slate-800">IT<span class="text-blue-600">SCHOOL</span></span>
        </div>
        <div id="nav-info" class="hidden md:flex items-center gap-4 text-sm font-medium text-gray-500">
            <span id="course-progress">Tiến độ: 0%</span>
            <div class="w-32 h-2 bg-gray-100 rounded-full overflow-hidden border">
                <div id="progress-bar" class="h-full bg-blue-600 transition-all duration-500" style="width: 0%"></div>
            </div>
            <button onclick="showDashboard()" class="ml-4 px-4 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors font-semibold">Đổi khóa học</button>
        </div>
    </nav>

    <!-- Dashboard -->
    <div id="dashboard" class="flex-1 overflow-y-auto">
        <div class="max-w-7xl mx-auto p-6 md:p-12">
            <header class="mb-12 text-center">
                <h1 class="text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">Học liệu Tin học THPT</h1>
                <p class="text-slate-500 text-lg">Hệ thống quản lý bài giảng thông minh.</p>
            </header>
            <div id="dashboard-content"></div>
        </div>
        <footer class="bg-white border-t py-12 px-6 mt-10">
            <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-gray-600">
                <div><h3 class="font-bold text-slate-800 mb-4 uppercase">IT School</h3><p>Học tập không giới hạn.</p></div>
                <div><h3 class="font-bold text-slate-800 mb-4 uppercase">Liên hệ</h3><p>Giáo viên: Nguyễn Văn A<br>Email: email@truonghoc.edu.vn</p></div>
                <div><h3 class="font-bold text-slate-800 mb-4 uppercase">Kết nối</h3><div class="flex gap-4"><i data-lucide="facebook"></i><i data-lucide="youtube"></i></div></div>
            </div>
        </footer>
    </div>

    <!-- Màn hình học tập -->
    <div id="learning-screen" class="hidden flex flex-1 overflow-hidden">
        <aside class="w-full md:w-80 lg:w-96 bg-white border-r flex flex-col shrink-0 z-10" id="sidebar">
            <div class="p-4 border-b bg-gray-50"><h2 id="sidebar-course-title" class="font-bold text-blue-700 uppercase">Khóa học</h2></div>
            <div class="overflow-y-auto flex-1 pb-20" id="playlist-container"></div>
        </aside>
        <main class="flex-1 overflow-y-auto bg-[#f8fafc] p-4 md:p-8">
            <button onclick="toggleSidebar()" class="md:hidden mb-4 flex items-center gap-2 text-blue-600 font-bold bg-white px-4 py-2 rounded-lg border shadow-sm"><i data-lucide="menu"></i> Danh sách bài học</button>
            <div class="max-w-5xl mx-auto">
                <div class="video-container shadow-2xl mb-8 border-4 border-white"><iframe id="main-video" src="" frameborder="0" allowfullscreen></iframe></div>
                <div class="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100">
                    <div class="flex justify-between items-center mb-6 pb-6 border-b border-dashed">
                        <h1 id="current-lesson-title" class="text-2xl font-extrabold text-slate-800">Tiêu đề bài học</h1>
                        <div id="download-zone"></div>
                    </div>
                    <div id="current-lesson-desc" class="text-slate-600 text-lg leading-relaxed"></div>
                </div>
            </div>
        </main>
    </div>

    <script>
        let activeCourse = null;
        let currentPath = { chapter: 0, lesson: 0 };

        function renderDashboard() {
            const container = document.getElementById('dashboard-content');
            const sections = [
                { label: 'Chương trình Chính khóa', key: 'chinhKhoa', color: 'blue' },
                { label: 'Lớp Chuyên Tin', key: 'chuyenTin', color: 'purple' },
                { label: 'Chuyên đề tự chọn', key: 'chuyenDe', color: 'emerald' }
            ];

            container.innerHTML = sections.map(sec => `
                <section class="mb-12">
                    <h2 class="text-2xl font-bold mb-6 border-l-4 border-${sec.color}-600 pl-4">${sec.label}</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        ${window.courses[sec.key].map(course => `
                            <div onclick="selectCourse('${course.id}')" class="bg-white p-6 rounded-2xl border hover:shadow-xl transition-all cursor-pointer">
                                <div class="w-12 h-12 rounded-xl bg-${sec.color}-100 text-${sec.color}-600 flex items-center justify-center mb-4"><i data-lucide="${course.icon}"></i></div>
                                <h3 class="font-bold text-lg">${course.title}</h3>
                                <p class="text-xs text-slate-400 mt-2">Dữ liệu từ: ${course.dataPath}</p>
                            </div>
                        `).join('')}
                    </div>
                </section>
            `).join('');
            lucide.createIcons();
        }

        async function selectCourse(courseId) {
            let found = null;
            Object.values(window.courses).forEach(group => {
                const c = group.find(item => item.id === courseId);
                if(c) found = c;
            });

            if (!found) return;
            document.getElementById('loader').classList.remove('hidden');

            // Xóa file dữ liệu cũ nếu có
            const oldScript = document.getElementById('course-data-script');
            if(oldScript) oldScript.remove();

            // Nạp file dữ liệu mới
            const script = document.createElement('script');
            script.id = 'course-data-script';
            script.src = found.dataPath + '?v=' + Date.now(); // Tránh cache
            document.head.appendChild(script);

            script.onload = () => {
                document.getElementById('loader').classList.add('hidden');
                activeCourse = { ...found, content: window.courseContent };
                document.getElementById('dashboard').classList.add('hidden');
                document.getElementById('learning-screen').classList.remove('hidden');
                document.getElementById('nav-info').classList.remove('hidden');
                document.getElementById('sidebar-course-title').innerText = activeCourse.title;
                renderPlaylist();
                playLesson(0, 0);
            };

            script.onerror = () => {
                document.getElementById('loader').classList.add('hidden');
                alert("File " + found.dataPath + " chưa được tạo hoặc bị lỗi!");
            };
        }

        function showDashboard() {
            document.getElementById('dashboard').classList.remove('hidden');
            document.getElementById('learning-screen').classList.add('hidden');
            document.getElementById('nav-info').classList.add('hidden');
            document.getElementById('main-video').src = '';
        }

        function renderPlaylist() {
            const container = document.getElementById('playlist-container');
            let html = '';
            activeCourse.content.forEach((chapter, cIndex) => {
                html += `<div class="px-5 py-3 bg-slate-100 border-y text-[10px] font-bold text-slate-500 uppercase">${chapter.chapterName}</div>`;
                chapter.lessons.forEach((lesson, lIndex) => {
                    html += `<div onclick="playLesson(${cIndex}, ${lIndex})" id="l-${cIndex}-${lIndex}" class="flex items-center gap-4 px-6 py-4 cursor-pointer hover:bg-slate-50 border-b text-sm lesson-item"><span class="flex-1">${lesson.title}</span><i data-lucide="play-circle" class="w-4 h-4 opacity-20"></i></div>`;
                });
            });
            container.innerHTML = html;
            lucide.createIcons();
        }

        function playLesson(cIndex, lIndex) {
            const lesson = activeCourse.content[cIndex].lessons[lIndex];
            currentPath = { chapter: cIndex, lesson: lIndex };
            document.getElementById('main-video').src = `https://www.youtube.com/embed/${lesson.videoId}?autoplay=1`;
            document.getElementById('current-lesson-title').innerText = lesson.title;
            document.getElementById('current-lesson-desc').innerText = lesson.desc;
            const dz = document.getElementById('download-zone');
            dz.innerHTML = lesson.downloadUrl && lesson.downloadUrl !== "#" ? `<a href="${lesson.downloadUrl}" target="_blank" class="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md">Tải tài liệu</a>` : '';
            document.querySelectorAll('.lesson-item').forEach(el => el.classList.remove('lesson-active'));
            document.getElementById(`l-${cIndex}-${lIndex}`).classList.add('lesson-active');
            updateProgress();
        }

        function updateProgress() {
            let total = 0, currentIdx = 0, passed = false;
            activeCourse.content.forEach((c, ci) => {
                c.lessons.forEach((l, li) => {
                    total++;
                    if(!passed) { currentIdx++; if(ci === currentPath.chapter && li === currentPath.lesson) passed = true; }
                });
            });
            document.getElementById('progress-bar').style.width = Math.round((currentIdx/total)*100) + '%';
        }

        function toggleSidebar() { document.getElementById('sidebar').classList.toggle('-translate-x-full'); }
        window.onload = renderDashboard;
    </script>
</body>
</html>
