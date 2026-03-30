// File dữ liệu bài học Tin học 11 - Định hướng Tin học ứng dụng (Kết nối tri thức)
window.courseContent = [
    {
        chapterName: "Chương 0: Sách",
        lessons: [
            {    
                title: "Sách Giáo Khoa Tin học 11",
                videoId: "", 
                desc: "Sách giáo khóa - Kết nối Tri thức và Cuộc sống",
                downloadUrl: "https://drive.google.com/file/d/1xO4SkeZZ7jZqF_aU8B7U1uJRWUslZGxe/view?usp=sharing" }
        ]
    },
    {
        chapterName: "Chủ đề 1: Máy tính và xã hội tri thức",
        lessons: [
            { title: "Bài 1: Hệ điều hành", videoId: "", desc: "Khái niệm, vai trò và các loại hệ điều hành phổ biến.", downloadUrl: "#" },
            { title: "Bài 2: Thực hành sử dụng hệ điều hành", videoId: "", desc: "Các thao tác cơ bản và nâng cao với hệ điều hành.", downloadUrl: "#" },
            { title: "Bài 3: Phần mềm nguồn mở và phần mềm chạy trên Internet", videoId: "", desc: "Tìm hiểu về bản quyền phần mềm và dịch vụ trực tuyến.", downloadUrl: "#" },
            { title: "Bài 4: Bên trong máy tính", videoId: "", desc: "Kiến trúc máy tính và các thành phần phần cứng.", downloadUrl: "#" },
            { title: "Bài 5: Kết nối máy tính với các thiết bị số", videoId: "", desc: "Cách thức giao tiếp và truyền dữ liệu giữa các thiết bị.", downloadUrl: "#" }
        ]
    },
    {
        chapterName: "Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
        lessons: [
            { title: "Bài 6: Lưu trữ và chia sẻ tệp tin trên Internet", videoId: "", desc: "Sử dụng các dịch vụ lưu trữ đám mây.", downloadUrl: "#" },
            { title: "Bài 7: Thực hành tìm kiếm thông tin trên Internet", videoId: "", desc: "Kỹ thuật tìm kiếm nâng cao và đánh giá nguồn tin.", downloadUrl: "#" },
            { title: "Bài 8: Thực hành nâng cao sử dụng thư điện tử và mạng xã hội", videoId: "", desc: "Giao tiếp chuyên nghiệp và an toàn trên môi trường số.", downloadUrl: "#" }
        ]
    },
    {
        chapterName: "Chủ đề 3: Đạo đức, pháp luật và văn hoá trong môi trường số",
        lessons: [
            { title: "Bài 9: Giao tiếp an toàn trên Internet", videoId: "", desc: "Bảo mật thông tin và ứng xử văn minh mạng.", downloadUrl: "#" }
        ]
    },
    {
        chapterName: "Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu",
        lessons: [
            { title: "Bài 10: Lưu trữ dữ liệu và khai thác thông tin phục vụ quản lí", videoId: "", desc: "Tầm quan trọng của CSDL trong quản lý.", downloadUrl: "#" },
            { title: "Bài 11: Cơ sở dữ liệu", videoId: "", desc: "Khái niệm và đặc điểm của hệ cơ sở dữ liệu.", downloadUrl: "#" },
            { title: "Bài 12: Hệ quản trị cơ sở dữ liệu và hệ cơ sở dữ liệu", videoId: "", desc: "Phân biệt DBMS và CSDL.", downloadUrl: "#" },
            { title: "Bài 13: Cơ sở dữ liệu quan hệ", videoId: "", desc: "Mô hình dữ liệu quan hệ và các ràng buộc.", downloadUrl: "#" },
            { title: "Bài 14: SQL – Ngôn ngữ truy vấn có cấu trúc", videoId: "", desc: "Làm quen với ngôn ngữ SQL.", downloadUrl: "#" },
            { title: "Bài 15: Bảo mật và an toàn hệ cơ sở dữ liệu", videoId: "", desc: "Các giải pháp bảo vệ dữ liệu.", downloadUrl: "#" }
        ]
    },
    {
        chapterName: "Chủ đề 5: Hướng nghiệp với tin học",
        lessons: [
            { title: "Bài 16: Công việc quản trị cơ sở dữ liệu", videoId: "", desc: "Tìm hiểu về nghề nghiệp DBA.", downloadUrl: "#" }
        ]
    },
    {
        chapterName: "Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu",
        lessons: [
            { title: "Bài 17: Quản trị cơ sở dữ liệu trên máy tính", videoId: "", desc: "Cài đặt và sử dụng phần mềm quản trị CSDL.", downloadUrl: "#" },
            { title: "Bài 18: Thực hành xác định cấu trúc bảng và các trường khoá", videoId: "", desc: "Thiết kế bảng dữ liệu và xác định khóa chính.", downloadUrl: "#" },
            { title: "Bài 19: Thực hành tạo lập cơ sở dữ liệu và các bảng", videoId: "", desc: "Thực thi các lệnh tạo CSDL và Table.", downloadUrl: "#" },
            {     
                 title: "Bài 20: Thực hành tạo lập các bảng có khoá ngoài", 
                videoId: "", 
                desc: "Thiết lập mối quan hệ giữa các bảng thông qua khóa ngoài và chỉ mục.",
                downloadUrl: "#",
                contentHtml: `
                    <div class="space-y-6 mt-4 text-left">
                        <!-- Mục I: Mục tiêu bài học -->
                        <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm" open>
                            <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                                <div class="flex items-center gap-3">
                                    <div class="p-2 bg-blue-600 text-white rounded-lg shadow-md"><i data-lucide="target" class="w-5 h-5"></i></div>
                                    <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">I. Mục tiêu bài học</span>
                                </div>
                                <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                            </summary>
                            <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-3 leading-relaxed text-sm md:text-base">
                                <p class="font-bold text-blue-700 underline underline-offset-4 decoration-2">Kiến thức và kỹ năng:</p>
                                <ul class="list-disc ml-5 space-y-2">
                                    <li>Biết cách tạo mới các bảng có khóa ngoài trong hệ quản trị cơ sở dữ liệu.</li>
                                    <li>Hiểu và thực hiện được việc thiết lập các thuộc tính cho trường dữ liệu như $INT$, $VARCHAR$, $AUTO\\_INCREMENT$.</li>
                                    <li>Thành thạo thao tác khai báo khóa chính ($PRIMARY$), khóa chống trùng lặp ($UNIQUE$) và khóa ngoài ($Foreign Key$).</li>
                                </ul>
                            </div>
                        </details>

                        <!-- Mục II: Lý thuyết trọng tâm -->
                        <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                            <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                                <div class="flex items-center gap-3">
                                    <div class="p-2 bg-emerald-600 text-white rounded-lg shadow-md"><i data-lucide="book-open" class="w-5 h-5"></i></div>
                                    <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">II. Lý thuyết trọng tâm</span>
                                </div>
                                <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                            </summary>
                            <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-4 text-sm md:text-base">
                                <div class="bg-emerald-50 p-4 rounded-xl border-l-4 border-emerald-500 italic">
                                    <strong>Khái niệm khóa ngoài:</strong> Là một hoặc một nhóm trường trong một bảng tham chiếu đến khóa chính của một bảng khác, dùng để thiết lập mối liên kết giữa dữ liệu của hai bảng.
                                </div>
                                <p class="font-bold text-emerald-800 underline underline-offset-4 decoration-2">Quy tắc khai báo khóa ngoài:</p>
                                <ul class="list-decimal ml-5 space-y-2">
                                    <li>Trường được chọn làm khóa ngoài phải có kiểu dữ liệu <strong>tương thích</strong> với trường khóa chính mà nó tham chiếu đến.</li>
                                    <li>Cần xác định chính xác bảng tham chiếu ($Reference table$) và trường tham chiếu tương ứng.</li>
                                </ul>
                                <p class="bg-slate-100 p-3 rounded-lg border-l-4 border-slate-400">
                                    <strong>Khóa chống trùng lặp ($UNIQUE$):</strong> Sử dụng khi một cặp giá trị (ví dụ: $tenBannhac, idNhacsi$) cần duy nhất trong toàn bộ bảng để đảm bảo tính toàn vẹn dữ liệu.
                                </p>
                            </div>
                        </details>

                        <!-- Mục III: Thực hành -->
                        <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                            <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                                <div class="flex items-center gap-3">
                                    <div class="p-2 bg-orange-500 text-white rounded-lg shadow-md"><i data-lucide="pen-tool" class="w-5 h-5"></i></div>
                                    <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">III. Thực hành</span>
                                </div>
                                <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                            </summary>
                            <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-6 text-sm md:text-base">
                                <div class="bg-orange-50 p-4 rounded-xl mt-4">
                                    <p class="font-bold text-orange-800">Nhiệm vụ: Tạo lập bảng $bannhac$</p>
                                    <p class="italic">Cấu trúc: $bannhac (idBannhac, tenBannhac, idNhacsi)$</p>
                                </div>

                                <div class="space-y-6">
                                    <div class="border-b pb-4">
                                        <p class="font-bold text-slate-900 mb-3 uppercase text-xs tracking-widest text-orange-600">Các bước thực hiện khai báo khóa:</p>
                                        <div class="space-y-4">
                                            <!-- Bước a -->
                                            <div class="flex items-start gap-3">
                                                <div class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">a</div>
                                                <div>
                                                    <p class="font-bold text-slate-800">Khai báo khóa chính:</p>
                                                    <p class="text-slate-600">Nháy nút phải chuột vào ô $idBannhac$, chọn <span class="text-blue-600 font-semibold">Create new index</span>, chọn <span class="text-blue-600 font-semibold">PRIMARY</span>.</p>
                                                </div>
                                            </div>

                                            <!-- Bước b -->
                                            <div class="flex items-start gap-3">
                                                <div class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">b</div>
                                                <div class="w-full">
                                                    <p class="font-bold text-slate-800">Khai báo khóa chống trùng lặp ($UNIQUE$):</p>
                                                    <p class="text-slate-600 mb-2">Đánh dấu cả hai trường $tenBannhac$ và $idNhacsi$, nháy nút phải chuột vào vùng đánh dấu, chọn <span class="text-blue-600 font-semibold">Create new index</span>, chọn <span class="text-blue-600 font-semibold">UNIQUE</span>.</p>
                                                    <div class="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400 text-xs italic text-blue-800">
                                                        <strong>Lưu ý quan trọng:</strong> Ta phải chọn cả 2 trường này để tạo khóa $UNIQUE$ (thay vì từng trường riêng lẻ) vì trong thực tế, nhiều nhạc sĩ có thể cùng có bài hát trùng tên nhau. Việc gộp chung đảm bảo tính duy nhất của bài hát gắn liền với nhạc sĩ đó.
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Bước c -->
                                            <div class="flex items-start gap-3">
                                                <div class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">c</div>
                                                <div>
                                                    <p class="font-bold text-slate-800">Khai báo khóa ngoài:</p>
                                                    <p class="text-slate-600">Chọn thẻ <span class="text-blue-600 font-semibold">Foreign Key</span>. Chọn trường tham chiếu $idNhacsi$ trong bảng $nhacsi$ để thiết lập liên kết.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Bổ sung Luyện tập & Vận dụng -->
                                <div class="mt-8 space-y-4">
                                    <div class="p-4 bg-slate-900 text-white rounded-xl shadow-md">
                                        <div class="flex items-center gap-2 mb-2 text-orange-400">
                                            <i data-lucide="dumbbell" class="w-5 h-5"></i>
                                            <span class="font-black uppercase tracking-tighter">LUYỆN TẬP</span>
                                        </div>
                                        <p class="text-sm">Hãy thực hiện các bước tương tự để tạo lập bảng <code class="text-blue-300">banthuam</code> với các thuộc tính khóa phù hợp.</p>
                                    </div>

                                    <div class="p-4 bg-indigo-900 text-white rounded-xl shadow-md">
                                        <div class="flex items-center gap-2 mb-2 text-indigo-300">
                                            <i data-lucide="lightbulb" class="w-5 h-5"></i>
                                            <span class="font-black uppercase tracking-tighter">VẬN DỤNG</span>
                                        </div>
                                        <p class="text-sm">Hãy thiết lập bảng <strong>Quận/Huyện</strong> trong một CSDL quản lý hành chính. Bảng này cần lưu trữ tên Quận/Huyện và liên kết với bảng <strong>Tỉnh/Thành phố</strong> thông qua khóa ngoài.</p>
                                    </div>
                                </div>
                                <p class="text-center font-bold text-green-600 italic mt-4">Nhấn "Lưu" để hoàn tất toàn bộ thao tác!</p>
                            </div>
                        </details>

                        <!-- Mục IV: Học liệu kèm theo -->
                        <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                            <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                                <div class="flex items-center gap-3">
                                    <div class="p-2 bg-red-600 text-white rounded-lg shadow-md"><i data-lucide="play-circle" class="w-5 h-5"></i></div>
                                    <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">IV. Học liệu kèm theo</span>
                                </div>
                                <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                            </summary>
                            <div class="p-6 pt-0 border-t border-slate-100">
                                <div class="aspect-video w-full rounded-xl overflow-hidden shadow-lg border-4 border-slate-100 mt-4 bg-slate-100 flex items-center justify-center">
                                    <p class="text-slate-400 italic text-sm">Nội dung video đang được cập nhật...</p>
                                </div>
                            </div>
                        </details>
                    </div>
                `
            },
            { title: "Bài 21: Thực hành cập nhật và truy xuất dữ liệu các bảng", videoId: "", desc: "Thêm, sửa, xóa và truy vấn dữ liệu đơn giản.", downloadUrl: "#" },
            { title: "Bài 22: Thực hành cập nhật bảng dữ liệu có tham chiếu", videoId: "", desc: "Đảm bảo tính toàn vẹn dữ liệu khi cập nhật.", downloadUrl: "#" },
            { title: "Bài 23: Thực hành truy xuất dữ liệu qua liên kết các bảng", videoId: "", desc: "Truy vấn dữ liệu từ nhiều bảng (Join).", downloadUrl: "#" },
            { title: "Bài 24: Thực hành sao lưu dữ liệu", videoId: "", desc: "Quy trình Backup và Restore dữ liệu.", downloadUrl: "#" }
        ]
    },
    {
        chapterName: "Chủ đề 7: Phần mềm chỉnh sửa ảnh và làm video",
        lessons: [
            {
    title: "Bài 25: Phần mềm chỉnh sửa ảnh",
    videoId: "",
    desc: "Làm quen với GIMP, các khái niệm ảnh số, điểm ảnh, độ phân giải và các thao tác chỉnh sửa ảnh cơ bản.",
    downloadUrl: "#",
    contentHtml: `
        <div class="space-y-6 mt-4 text-left">

            <!-- MỤC I: MỤC TIÊU BÀI HỌC -->
            <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm" open>
                <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-blue-600 text-white rounded-lg shadow-md"><i data-lucide="target" class="w-5 h-5"></i></div>
                        <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">I. Mục tiêu bài học</span>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                </summary>
                <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 leading-relaxed text-sm md:text-base">
                    <ul class="list-disc ml-5 space-y-2 mt-4 font-medium">
                        <li>Làm quen với phần mềm chỉnh sửa ảnh chuyên nghiệp (GIMP).</li>
                        <li>Hiểu được các khái niệm cơ bản về ảnh số, độ phân giải và điểm ảnh.</li>
                        <li>Thực hiện thành thạo các thao tác cơ bản: mở tệp, phóng to/thu nhỏ, xoay và cắt ảnh.</li>
                        <li>Biết cách thay đổi kích thước, độ phân giải và xuất ảnh sang các định dạng phổ biến.</li>
                    </ul>
                </div>
            </details>

            <!-- MỤC II: LÝ THUYẾT TRỌNG TÂM -->
            <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-emerald-600 text-white rounded-lg shadow-md"><i data-lucide="book-open" class="w-5 h-5"></i></div>
                        <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">II. Lý thuyết trọng tâm</span>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                </summary>
                <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-6 text-sm md:text-base mt-4">

                    <!-- Phần 1: Ảnh số -->
                    <div class="space-y-3">
                        <p class="font-bold text-emerald-700 flex items-center gap-2 text-lg">
                            <span class="w-2 h-6 bg-emerald-500 rounded-full"></span> 1. Giới thiệu ảnh số
                        </p>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div class="p-4 bg-blue-50 rounded-xl border border-blue-100 space-y-1">
                                <p class="font-bold text-blue-800">Ảnh số</p>
                                <p class="text-xs">Là biểu diễn số của hình ảnh. Ảnh bitmap là phổ biến nhất với các định dạng: <code>.bmp, .jpeg, .png, .gif, .psd,...</code></p>
                            </div>
                            <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-100 space-y-1">
                                <p class="font-bold text-emerald-800">Điểm ảnh (Pixel)</p>
                                <p class="text-xs">Ảnh bitmap là tập hợp các pixel hình vuông nhỏ. Mỗi pixel xác định bởi tọa độ $(x, y)$ và mang giá trị màu sắc cụ thể.</p>
                            </div>
                            <div class="p-4 bg-orange-50 rounded-xl border border-orange-100 space-y-1">
                                <p class="font-bold text-orange-800">Megapixel</p>
                                <p class="text-xs">Đơn vị đo tổng số điểm ảnh. Ví dụ: Ảnh $2560 \times 1920 \approx 5$ triệu pixel (camera 5 Megapixel).</p>
                            </div>
                        </div>

                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-800 mb-2">Độ phân giải</p>
                            <p>Xác định bởi số điểm ảnh trên một inch (đơn vị: $dpi$ hoặc $ppi$).</p>
                            <ul class="list-disc ml-5 mt-2 space-y-1 text-xs">
                                <li>Ảnh in ấn thường cần tối thiểu $300 \ dpi$.</li>
                                <li>Công thức: $\t{Số pixel} = \t{Kích thước (inch)} \times \t{Độ phân giải (dpi)}$.</li>
                            </ul>
                        </div>
                    </div>

                    <hr class="border-slate-100">

                    <!-- Phần 2: GIMP -->
                    <div class="space-y-4">
                        <p class="font-bold text-emerald-700 flex items-center gap-2 text-lg">
                            <span class="w-2 h-6 bg-emerald-500 rounded-full"></span> 2. Phần mềm chỉnh sửa ảnh (GIMP)
                        </p>

                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-800 mb-3">a) Giao diện của GIMP</p>
                            <p class="text-xs text-slate-600 mb-3">GIMP có thể làm việc ở chế độ nhiều cửa sổ hoặc một cửa sổ (<code>Windows → Single-window Mode</code>). Các thành phần chính:</p>
                            <div class="overflow-hidden rounded-xl border border-slate-200">
                                <table class="w-full text-xs">
                                    <thead class="bg-slate-100">
                                        <tr>
                                            <th class="p-2 text-left font-bold text-slate-700">Thành phần</th>
                                            <th class="p-2 text-left font-bold text-slate-700">Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-slate-100">
                                        <tr><td class="p-2 font-semibold text-blue-700">Thanh bảng chọn</td><td class="p-2">Chứa các lệnh hệ thống (File, Edit, Select,...)</td></tr>
                                        <tr><td class="p-2 font-semibold text-blue-700">Bảng công cụ</td><td class="p-2">Chứa các nút lệnh như di chuyển, cắt, xoay, thêm chữ...</td></tr>
                                        <tr><td class="p-2 font-semibold text-blue-700">Hộp tuỳ chọn công cụ</td><td class="p-2">Hiển thị thuộc tính của công cụ đang chọn</td></tr>
                                        <tr><td class="p-2 font-semibold text-blue-700">Vùng hiển thị ảnh</td><td class="p-2">Nơi thực hiện chỉnh sửa trực tiếp trên ảnh</td></tr>
                                        <tr><td class="p-2 font-semibold text-blue-700">Các hộp chức năng</td><td class="p-2">Quản lý lớp (Layers), kênh màu (Channels), cọ vẽ (Brushes)...</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                            <p class="font-bold text-emerald-800 mb-3">b) Một số thao tác cơ bản</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                                <div class="p-3 bg-white rounded-lg border border-emerald-100">
                                    <p class="font-bold text-slate-800 mb-1">📂 Mở tệp</p>
                                    <p><code>File → Open</code> hoặc kéo thả ảnh vào phần mềm.</p>
                                </div>
                                <div class="p-3 bg-white rounded-lg border border-emerald-100">
                                    <p class="font-bold text-slate-800 mb-1">🔍 Phóng to / Thu nhỏ</p>
                                    <p>Dùng công cụ Zoom hoặc giữ $Ctrl$ + lăn chuột.</p>
                                </div>
                                <div class="p-3 bg-white rounded-lg border border-emerald-100">
                                    <p class="font-bold text-slate-800 mb-1">✂️ Cắt ảnh (Crop)</p>
                                    <p>Dùng công cụ Crop, kéo khung chọn và nhấn $Enter$.</p>
                                </div>
                                <div class="p-3 bg-white rounded-lg border border-emerald-100">
                                    <p class="font-bold text-slate-800 mb-1">🔄 Xoay ảnh (Rotate)</p>
                                    <p>Nhấn $Shift + R$, nhập góc xoay hoặc kéo chuột trực tiếp.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </details>

            <!-- MỤC III: THỰC HÀNH -->
            <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-orange-500 text-white rounded-lg shadow-md"><i data-lucide="pen-tool" class="w-5 h-5"></i></div>
                        <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">III. Thực hành</span>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                </summary>
                <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-4 mt-4">

                    <!-- Nhiệm vụ 1 -->
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-900 flex items-center gap-2">
                            <span class="px-2 py-0.5 bg-blue-600 text-white text-xs rounded-full">Nhiệm vụ 1</span> Thao tác hiển thị ảnh
                        </p>
                        <ol class="list-decimal ml-5 mt-3 space-y-2 text-sm text-slate-700">
                            <li>Khởi động GIMP, mở một tệp ảnh bất kỳ.</li>
                            <li>Chọn công cụ <strong>Zoom</strong>. Trong hộp tùy chọn, tích vào <code>Zoom in</code> (phóng to) hoặc <code>Zoom out</code> (thu nhỏ).</li>
                            <li>Nháy chuột vào vị trí cần quan sát chi tiết.</li>
                        </ol>
                    </div>

                    <!-- Nhiệm vụ 2 -->
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-900 flex items-center gap-2">
                            <span class="px-2 py-0.5 bg-emerald-600 text-white text-xs rounded-full">Nhiệm vụ 2</span> Thay đổi kích thước và độ phân giải ($Scale \ Image$)
                        </p>
                        <ol class="list-decimal ml-5 mt-3 space-y-2 text-sm text-slate-700">
                            <li>Chọn <code>Image → Scale Image</code>.</li>
                            <li>Điều chỉnh các thông số:
                                <ul class="list-disc ml-5 mt-1 space-y-1 text-xs text-slate-600">
                                    <li><strong>Width/Height:</strong> Thay đổi kích thước vật lý của ảnh.</li>
                                    <li><strong>X/Y resolution:</strong> Thay đổi độ phân giải (thường dùng cho in ấn).</li>
                                </ul>
                            </li>
                            <li>Nhấn <code>Scale</code> để áp dụng.</li>
                        </ol>
                    </div>

                    <!-- Nhiệm vụ 3 -->
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-900 flex items-center gap-2">
                            <span class="px-2 py-0.5 bg-orange-500 text-white text-xs rounded-full">Nhiệm vụ 3</span> Xoay, cắt và xuất ảnh
                        </p>
                        <ol class="list-decimal ml-5 mt-3 space-y-2 text-sm text-slate-700">
                            <li>Dùng công cụ <strong>Rotate</strong> ($Shift + R$) để chỉnh các ảnh bị nghiêng. Kéo chuột để xoay và nhấn <code>Rotate</code>.</li>
                            <li>Dùng công cụ <strong>Crop</strong> ($Shift + C$) để loại bỏ phần thừa. Nhấn $Enter$ để hoàn tất.</li>
                            <li>Xuất ảnh (Export):
                                <ul class="list-disc ml-5 mt-1 space-y-1 text-xs text-slate-600">
                                    <li>Chọn <code>File → Export As</code>.</li>
                                    <li>Chọn định dạng đuôi <code>.jpg</code> hoặc <code>.png</code>.</li>
                                    <li>Nhấn <code>Export</code>, điều chỉnh chất lượng và nhấn <code>Export</code> lần nữa.</li>
                                </ul>
                            </li>
                        </ol>
                        <div class="mt-3 p-3 bg-red-50 rounded-xl border-l-4 border-red-500">
                            <p class="text-red-800 text-xs font-medium italic"><b>Lưu ý:</b> Lệnh <code>Save</code> trong GIMP chỉ lưu tệp dự án đuôi <code>.xcf</code>, không phải tệp ảnh thông thường. Muốn xuất ảnh phải dùng <code>Export As</code>.</p>
                        </div>
                    </div>

                </div>
            </details>

            <!-- MỤC IV: HỌC LIỆU KÈM THEO -->
            <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-red-600 text-white rounded-lg shadow-md"><i data-lucide="play-circle" class="w-5 h-5"></i></div>
                        <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">IV. Học liệu kèm theo</span>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                </summary>
                <div class="p-6 pt-0 border-t border-slate-100 text-center py-8">
                    <p class="text-sm text-slate-500 italic">Video bài giảng và tệp thực hành đang được chuẩn bị.</p>
                </div>
            </details>

        </div>
    `
},
            { title: "Bài 26: Công cụ tinh chỉnh màu sắc và công cụ chọn", videoId: "", desc: "Kỹ thuật xử lý ảnh nâng cao.", downloadUrl: "#" },
            { title: "Bài 27: Công cụ vẽ và một số ứng dụng", videoId: "", desc: "Vẽ và thiết kế trên phần mềm chỉnh sửa ảnh.", downloadUrl: "#" },
            { title: "Bài 28: Tạo ảnh động", videoId: "", desc: "Thiết kế các tệp ảnh động (GIF).", downloadUrl: "#" },
            { title: "Bài 29: Khám phá phần mềm làm phim", videoId: "", desc: "Giao diện và các thành phần của phần mềm dựng video.", downloadUrl: "#" },
            { title: "Bài 30: Biên tập phim", videoId: "", desc: "Cắt ghép và chèn hiệu ứng cho video.", downloadUrl: "#" },
            { title: "Bài 31: Thực hành tạo phim hoạt hình", videoId: "", desc: "Sáng tạo nội dung video hoạt hình đơn giản.", downloadUrl: "#" }
        ]
    }
];
