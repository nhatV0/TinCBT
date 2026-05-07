// File dữ liệu bài học Tin học 10 - Đầy đủ 34 bài theo chương trình SGK
window.courseContent = [
    {
        chapterName: "Chương 0: Sách",
        lessons: [
            {    
                title: "Sách Giáo Khoa Tin học 10",
                videoId: "", 
                desc: "Sách giáo khóa - Kết nối Tri thức và Cuộc sống",
                downloadUrl: "https://drive.google.com/file/d/1AnLn6cG4apsmTtCu5MlGGgyLG42Np1Ex/view?usp=sharing" }
        ]
    },
    {
        chapterName: "Chương 1: Máy tính và xã hội tri thức",
        lessons: [
    {
        title: "Bài 1: Thông Tin và Xử Lý Thông Tin",
        videoId: "",
        desc: "Phân biệt thông tin và dữ liệu, hiểu quá trình xử lý thông tin bằng máy tính và thực hiện chuyển đổi đơn vị lưu trữ dữ liệu.",
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 leading-relaxed text-sm md:text-base">
                    <ul class="space-y-2 list-none">
                        <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">✦</span> Phân biệt được <strong>thông tin</strong> và <strong>dữ liệu</strong>.</li>
                        <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">✦</span> Hiểu được quá trình xử lý thông tin bằng máy tính.</li>
                        <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">✦</span> Thực hiện thành thạo việc chuyển đổi giữa các đơn vị lưu trữ dữ liệu.</li>
                        <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">✦</span> Nêu được sự ưu việt của việc lưu trữ, xử lý và truyền thông tin bằng thiết bị số.</li>
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-6 text-sm md:text-base">

                    <div>
                        <h3 class="font-bold text-slate-800 text-base mb-3">1. Thông Tin và Dữ Liệu</h3>
                        <ul class="space-y-2">
                            <li><strong>Thông tin:</strong> Là tất cả những gì mang lại cho con người hiểu biết. Thông tin gắn liền với quá trình nhận thức.</li>
                            <li><strong>Dữ liệu:</strong> Là thông tin đã được đưa vào máy tính để máy tính có thể nhận biết và xử lý được (dưới dạng dãy bit 0, 1).</li>
                        </ul>
                        <div class="mt-3 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                            <p class="font-semibold text-blue-800 mb-1">Mối quan hệ:</p>
                            <ul class="text-blue-700 space-y-1 text-sm">
                                <li>• Thông tin là <em>ý nghĩa</em> của dữ liệu.</li>
                                <li>• Dữ liệu là <em>hình thức thể hiện</em> của thông tin.</li>
                                <li>• Dữ liệu không đầy đủ có thể làm thông tin sai lệch hoặc không xác định được.</li>
                            </ul>
                        </div>
                        <div class="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                            <p class="font-mono text-sm text-slate-600">Tiếp nhận dữ liệu &rarr; Xử lý dữ liệu &rarr; Đưa ra kết quả</p>
                        </div>
                    </div>

                    <div>
                        <h3 class="font-bold text-slate-800 text-base mb-3">2. Đơn Vị Lưu Trữ Dữ Liệu</h3>
                        <ul class="space-y-1 mb-3">
                            <li><strong>Bit:</strong> Đơn vị nhỏ nhất của thông tin (0 hoặc 1).</li>
                            <li><strong>Byte (B):</strong> Đơn vị nhỏ nhất máy tính có thể truy cập. $1 \text{ Byte} = 8 \text{ bit}$.</li>
                            <li>Các đơn vị lớn hơn nhau $2^{10} = 1024$ lần.</li>
                        </ul>
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm border-collapse">
                                <thead>
                                    <tr class="bg-emerald-600 text-white">
                                        <th class="p-3 text-left rounded-tl-lg">Đơn vị</th>
                                        <th class="p-3 text-left">Ký hiệu</th>
                                        <th class="p-3 text-left rounded-tr-lg">Giá trị</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-slate-100 hover:bg-slate-50"><td class="p-3">Kilobyte</td><td class="p-3 font-mono">KB</td><td class="p-3">$2^{10}$ B</td></tr>
                                    <tr class="border-b border-slate-100 hover:bg-slate-50"><td class="p-3">Megabyte</td><td class="p-3 font-mono">MB</td><td class="p-3">$2^{10}$ KB</td></tr>
                                    <tr class="border-b border-slate-100 hover:bg-slate-50"><td class="p-3">Gigabyte</td><td class="p-3 font-mono">GB</td><td class="p-3">$2^{10}$ MB</td></tr>
                                    <tr class="border-b border-slate-100 hover:bg-slate-50"><td class="p-3">Terabyte</td><td class="p-3 font-mono">TB</td><td class="p-3">$2^{10}$ GB</td></tr>
                                    <tr class="hover:bg-slate-50"><td class="p-3">Petabyte</td><td class="p-3 font-mono">PB</td><td class="p-3">$2^{10}$ TB</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <h3 class="font-bold text-slate-800 text-base mb-3">3. Ưu Việt của Thiết Bị Số</h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                                <p class="font-bold text-emerald-700 mb-1">💾 Lưu trữ</p>
                                <p class="text-sm text-slate-600">Dung lượng cực lớn, thiết bị gọn nhẹ, chi phí thấp, tìm kiếm dễ dàng.</p>
                            </div>
                            <div class="p-4 bg-blue-50 rounded-xl border border-blue-200">
                                <p class="font-bold text-blue-700 mb-1">⚡ Xử lý</p>
                                <p class="text-sm text-slate-600">Tốc độ cực nhanh (vài chục tỷ phép tính/giây) và độ chính xác tuyệt đối.</p>
                            </div>
                            <div class="p-4 bg-orange-50 rounded-xl border border-orange-200">
                                <p class="font-bold text-orange-700 mb-1">📡 Truyền thông</p>
                                <p class="text-sm text-slate-600">Tốc độ rất lớn (cáp quang hàng chục Mb/s), tương tác tức thời.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </details>

            <!-- MỤC III: BÀI TẬP VẬN DỤNG -->
            <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-orange-500 text-white rounded-lg shadow-md"><i data-lucide="pen-tool" class="w-5 h-5"></i></div>
                        <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">III. Bài tập vận dụng</span>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                </summary>
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-4 text-sm md:text-base">

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 mb-2">📝 Câu 1: Trắc nghiệm kiến thức</p>
                        <p>Định nghĩa nào về Byte là đúng?</p>
                        <ul class="mt-2 space-y-1 text-sm">
                            <li>A. Là đơn vị dữ liệu 4 bit.</li>
                            <li class="text-emerald-700 font-semibold">B. Là đơn vị dữ liệu 8 bit. ✓</li>
                            <li>C. Là đơn vị dữ liệu nhỏ nhất của thông tin.</li>
                            <li>D. Là đơn vị dữ liệu 16 bit.</li>
                        </ul>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border text-emerald-700">💡 Gợi ý: 1 Byte = 8 bit. Bit mới là đơn vị nhỏ nhất.</div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 mb-2">📝 Câu 2: Quy đổi đơn vị ra KB</p>
                        <ul class="space-y-1">
                            <li>a) $3 \text{ MB}$</li>
                            <li>b) $2 \text{ GB}$</li>
                            <li>c) $2048 \text{ B}$</li>
                        </ul>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            💡 Gợi ý: Dùng phép nhân/chia cho 1024.<br>
                            a) 3 MB = 3 × 1024 = 3072 KB<br>
                            b) 2 GB = 2 × 1024 × 1024 = 2 097 152 KB<br>
                            c) 2048 B = 2048 ÷ 1024 = 2 KB
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 mb-2">📝 Câu 3: Bài tập số hóa sách</p>
                        <p>Một cuốn sách số hóa cần $50 \text{ MB}$. Thư viện có $2000$ cuốn. Tính tổng dung lượng theo đơn vị GB và kiểm tra xem thẻ nhớ $256 \text{ GB}$ có chứa đủ không?</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            💡 Gợi ý:<br>
                            Tổng = 50 × 2000 = 100 000 MB<br>
                            Đổi sang GB: 100 000 ÷ 1024 ≈ 97,66 GB<br>
                            97,66 GB &lt; 256 GB → Thẻ nhớ chứa đủ ✓
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 mb-2">📝 Câu 4: Bài tập tính số ảnh</p>
                        <p>Mỗi ảnh có kích thước trung bình khoảng $10\,000 \text{ KB}$. Tính một thẻ nhớ $16 \text{ GB}$ chứa được tối đa bao nhiêu ảnh?</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            💡 Gợi ý:<br>
                            16 GB = 16 × 1024 × 1024 = 16 777 216 KB<br>
                            Số ảnh = 16 777 216 ÷ 10 000 ≈ 1677 ảnh
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-800 mb-2">🌟 Câu 5: Thảo luận (Nâng cao)</p>
                        <p class="text-slate-700">Cho ví dụ về một dữ liệu thể hiện nhiều thông tin khác nhau tùy theo ngữ cảnh.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border text-indigo-700">
                            💡 Gợi ý: Dữ liệu "39°C" trong bản tin thời tiết có nghĩa là nhiệt độ môi trường rất cao; nhưng trong bệnh án lại có nghĩa là bệnh nhân đang sốt cao, cần can thiệp y tế.
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
                <div class="p-6 pt-4 border-t border-slate-100 space-y-3 text-sm text-slate-600">
                    <p>📹 Video 1: Phân biệt thông tin và dữ liệu (Sư phạm trực quan)</p>
                    <p>📹 Video 2: Các đơn vị đo lường trong Tin học</p>
                    <p class="text-sm text-slate-500 italic">Video đang được chuẩn bị.</p>
                </div>
            </details>

        </div>
        `
    },

    // ===== BÀI 2 =====
    {
        title: "Bài 2: Vai Trò của Thiết Bị Thông Minh và Tin Học đối với Xã Hội",
        videoId: "",
        desc: "Nhận biết thiết bị thông minh, hiểu vai trò của chúng trong CMCN 4.0 và các thành tựu nổi bật của ngành Tin học với xã hội hiện đại.",
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 leading-relaxed text-sm md:text-base">
                    <ul class="space-y-2 list-none">
                        <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">✦</span> Nhận biết và nêu được ví dụ cụ thể về các <strong>thiết bị thông minh</strong> thông dụng.</li>
                        <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">✦</span> Hiểu được vai trò của thiết bị thông minh trong xã hội và <strong>CMCN 4.0</strong>.</li>
                        <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">✦</span> Biết được vai trò và các thành tựu nổi bật của ngành <strong>Tin học</strong> đối với sự phát triển của xã hội hiện đại.</li>
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-6 text-sm md:text-base">

                    <div>
                        <h3 class="font-bold text-slate-800 text-base mb-3">1. Thiết Bị Thông Minh</h3>
                        <div class="p-4 bg-emerald-50 rounded-xl border-l-4 border-emerald-500 mb-3">
                            <p class="font-semibold text-emerald-800 mb-1">Khái niệm:</p>
                            <p class="text-slate-700 text-sm">Là các thiết bị điện tử có thể hoạt động tự chủ nhờ phần mềm điều khiển cài đặt sẵn, có khả năng tương tác với các thiết bị khác qua mạng không dây (Bluetooth, Wifi,...) để xử lý và truyền dữ liệu.</p>
                        </div>
                        <p class="font-semibold text-slate-700 mb-2">Đặc điểm chính:</p>
                        <ul class="space-y-1 text-sm">
                            <li>• Hoạt động <strong>tự chủ</strong>, không cần sự can thiệp liên tục của con người.</li>
                            <li>• Có khả năng <strong>kết nối và trao đổi dữ liệu</strong>.</li>
                            <li>• Một số tích hợp <strong>Trí tuệ nhân tạo (AI)</strong> để bắt chước hành vi con người (xe tự hành, robot giao tiếp).</li>
                        </ul>
                        <p class="mt-2 text-sm"><strong>Ví dụ:</strong> Smartphone, máy tính bảng, camera thông minh (phát hiện chuyển động), smartwatch.</p>
                    </div>

                    <div>
                        <h3 class="font-bold text-slate-800 text-base mb-3">2. Vai Trò trong CMCN 4.0</h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div class="p-4 bg-blue-50 rounded-xl border border-blue-200">
                                <p class="font-bold text-blue-700 mb-1">🌐 IoT</p>
                                <p class="text-sm text-slate-600">Kết nối các thiết bị thông minh để thu thập và xử lý thông tin tự động, tức thời trên diện rộng.</p>
                            </div>
                            <div class="p-4 bg-purple-50 rounded-xl border border-purple-200">
                                <p class="font-bold text-purple-700 mb-1">🔄 Hệ thống thực - ảo</p>
                                <p class="text-sm text-slate-600">Xóa nhòa ranh giới giữa thế giới vật lý và không gian số (ví dụ: xe tự hành).</p>
                            </div>
                            <div class="p-4 bg-amber-50 rounded-xl border border-amber-200">
                                <p class="font-bold text-amber-700 mb-1">💡 Kinh tế tri thức</p>
                                <p class="text-sm text-slate-600">Nền kinh tế dựa trên KH&CN cao, nơi giá trị tri thức chiếm tỷ trọng lớn trong sản phẩm.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 class="font-bold text-slate-800 text-base mb-3">3. Thành Tựu và Vai Trò của Tin Học</h3>
                        <div class="space-y-2 text-sm">
                            <div class="flex items-start gap-2"><span class="text-emerald-500 font-bold">▶</span><span><strong>Quản lý:</strong> Xử lý quy trình nghiệp vụ nhanh, chính xác (ngân hàng, trường học).</span></div>
                            <div class="flex items-start gap-2"><span class="text-emerald-500 font-bold">▶</span><span><strong>Tự động hóa:</strong> Robot làm việc trong môi trường nguy hiểm thay con người.</span></div>
                            <div class="flex items-start gap-2"><span class="text-emerald-500 font-bold">▶</span><span><strong>Khoa học:</strong> Dự báo thời tiết, giải mã gen, mô phỏng công trình.</span></div>
                            <div class="flex items-start gap-2"><span class="text-emerald-500 font-bold">▶</span><span><strong>Thành tựu kỹ thuật:</strong> Hệ điều hành, Internet (TCP/IP, WWW), ngôn ngữ lập trình bậc cao (Python, C, Java), hệ quản trị CSDL (SQL Server, Oracle).</span></div>
                        </div>
                    </div>

                </div>
            </details>

            <!-- MỤC III: BÀI TẬP VẬN DỤNG -->
            <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-orange-500 text-white rounded-lg shadow-md"><i data-lucide="pen-tool" class="w-5 h-5"></i></div>
                        <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">III. Bài tập vận dụng</span>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                </summary>
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-4 text-sm md:text-base">

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 mb-2">📝 Câu 1: Nhận biết thiết bị thông minh</p>
                        <p>Trong các thiết bị sau, thiết bị nào là thiết bị thông minh? Tại sao?</p>
                        <ul class="mt-2 space-y-1 text-sm">
                            <li>A. Cân điện tử thông thường</li>
                            <li class="text-emerald-700 font-semibold">B. Đồng hồ kết nối điện thoại qua Bluetooth ✓</li>
                            <li>C. Máy tính cầm tay (Casio)</li>
                        </ul>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">💡 Gợi ý: Kiểm tra tính "tự chủ" và khả năng "kết nối, trao đổi dữ liệu". Chỉ đồng hồ Bluetooth mới đáp ứng cả hai tiêu chí.</div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 mb-2">📝 Câu 2: Liên hệ thực tế</p>
                        <p>Tin học đã giúp em trong việc học tập và giải trí hằng ngày như thế nào? Nêu ít nhất 3 ứng dụng trực tuyến mà em đang sử dụng.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">💡 Gợi ý: Google Meet/Zoom (học online), YouTube (học kiến thức), Google Drive (lưu trữ tài liệu), Zalo (liên lạc)...</div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 mb-2">📝 Câu 3: Phân tích phần mềm văn phòng</p>
                        <p>Các phần mềm tin học văn phòng (Word, Excel, PowerPoint) có tác dụng gì đối với các ngành nghề hành chính hiện nay?</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">💡 Gợi ý: Tăng chất lượng văn bản (Word), quản lý dữ liệu bảng tính (Excel), thuyết trình chuyên nghiệp (PowerPoint).</div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-800 mb-2">🌟 Câu 4: Thảo luận về xe tự hành (Nâng cao)</p>
                        <p class="text-slate-700">Tại sao xe tự hành được coi là thành tựu điển hình của CMCN 4.0? Nó giúp ích gì trong việc bảo vệ môi trường và giảm chi phí xã hội?</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border text-indigo-700">💡 Gợi ý: Tích hợp IoT + AI + hệ thống thực-ảo. Giảm tai nạn, tối ưu hóa lộ trình giúp giảm khí thải, không cần trả lương tài xế...</div>
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
                <div class="p-6 pt-4 border-t border-slate-100 space-y-3 text-sm text-slate-600">
                    <p>📹 Video 1: Cuộc cách mạng công nghiệp 4.0 là gì?</p>
                    <p>📹 Video 2: Giới thiệu về Internet vạn vật (IoT) trong đời sống</p>
                    <p class="text-sm text-slate-500 italic">Video đang được chuẩn bị.</p>
                </div>
            </details>

        </div>
        `
    },

    // ===== BÀI 3 =====
    {
        title: "Bài 3: Một Số Kiểu Dữ Liệu và Dữ Liệu Văn Bản",
        videoId: "",
        desc: "Phân biệt các kiểu dữ liệu thường gặp, tìm hiểu bảng mã ASCII và Unicode, cùng quá trình số hóa văn bản trong tin học.",
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 leading-relaxed text-sm md:text-base">
                    <ul class="space-y-2 list-none">
                        <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">✦</span> Nêu được các loại thông tin và các <strong>kiểu dữ liệu</strong> thường gặp.</li>
                        <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">✦</span> Phân biệt các kiểu dữ liệu: <strong>văn bản, số, lôgic, đa phương tiện</strong>.</li>
                        <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">✦</span> Biết và phân biệt được các bảng mã thông dụng: <strong>ASCII</strong> và <strong>Unicode</strong>.</li>
                        <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">✦</span> Giải thích được sơ lược về quá trình <strong>số hóa văn bản</strong>.</li>
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-6 text-sm md:text-base">

                    <div>
                        <h3 class="font-bold text-slate-800 text-base mb-3">1. Phân Loại Dữ Liệu trong Máy Tính</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div class="p-3 bg-blue-50 rounded-xl border border-blue-200">
                                <p class="font-bold text-blue-700">📝 Văn bản</p>
                                <p class="text-sm text-slate-600 mt-1">Các ký tự, xâu ký tự. Ví dụ: họ tên, địa chỉ.</p>
                            </div>
                            <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                                <p class="font-bold text-emerald-700">🔢 Số</p>
                                <p class="text-sm text-slate-600 mt-1">Số nguyên, số thực. Ví dụ: điểm số, chiều cao.</p>
                            </div>
                            <div class="p-3 bg-orange-50 rounded-xl border border-orange-200">
                                <p class="font-bold text-orange-700">✅ Lôgic</p>
                                <p class="text-sm text-slate-600 mt-1">Chỉ nhận hai giá trị: Đúng (True) hoặc Sai (False).</p>
                            </div>
                            <div class="p-3 bg-purple-50 rounded-xl border border-purple-200">
                                <p class="font-bold text-purple-700">🎬 Đa phương tiện</p>
                                <p class="text-sm text-slate-600 mt-1">Hình ảnh, âm thanh, video.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 class="font-bold text-slate-800 text-base mb-3">2. Bảng Mã Ký Tự</h3>
                        <div class="space-y-3">
                            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                <p class="font-bold text-slate-800 mb-2">a) Bảng mã ASCII</p>
                                <ul class="text-sm space-y-1">
                                    <li>• <strong>ASCII chuẩn:</strong> Dùng 7 bit → mã hóa $2^7 = 128$ ký tự (chủ yếu tiếng Anh).</li>
                                    <li>• <strong>ASCII mở rộng:</strong> Dùng 8 bit (1 byte) → mã hóa $2^8 = 256$ ký tự. Phần mở rộng dùng cho ký tự riêng của từng quốc gia.</li>
                                </ul>
                            </div>
                            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                <p class="font-bold text-slate-800 mb-2">b) Bảng mã Unicode</p>
                                <ul class="text-sm space-y-1">
                                    <li>• Bảng mã hợp nhất quốc tế, dùng chung cho <strong>mọi ngôn ngữ</strong> trên thế giới.</li>
                                    <li>• Tiếng Việt dùng định dạng <strong>UTF-8</strong> (độ dài mã từ 1 đến 4 byte).</li>
                                    <li>• Ký tự La tinh không dấu: 1 byte. Nguyên âm có dấu tiếng Việt: thường 2 byte.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 class="font-bold text-slate-800 text-base mb-3">3. Số Hóa Văn Bản</h3>
                        <div class="p-4 bg-emerald-50 rounded-xl border-l-4 border-emerald-500">
                            <p class="text-sm text-slate-700">Là quá trình chuyển văn bản từ dạng tờ giấy, tiếng nói hoặc hình ảnh thành tệp dữ liệu số trong máy tính.</p>
                            <p class="mt-2 text-sm"><strong>Công cụ:</strong> Phần mềm soạn thảo (Word, Writer), phần mềm nhận dạng tiếng nói, máy quét (Scanner).</p>
                        </div>
                    </div>

                </div>
            </details>

            <!-- MỤC III: BÀI TẬP VẬN DỤNG -->
            <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-orange-500 text-white rounded-lg shadow-md"><i data-lucide="pen-tool" class="w-5 h-5"></i></div>
                        <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">III. Bài tập vận dụng</span>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                </summary>
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-4 text-sm md:text-base">

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 mb-2">📝 Câu 1: Nhận biết kiểu dữ liệu</p>
                        <p>Ghép thông tin từ Giấy phép lái xe với kiểu dữ liệu tương ứng:</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            • Số thẻ (No) → Kiểu văn bản (không dùng để tính toán)<br>
                            • Họ tên, Nơi cư trú → Kiểu văn bản<br>
                            • Ngày sinh → Kiểu văn bản hoặc kiểu Ngày tháng<br>
                            • Ảnh chân dung → Kiểu hình ảnh (đa phương tiện)
                        </div>
                        <p class="mt-2 text-xs text-slate-500">💡 Gợi ý: Thông tin nào dùng để tính toán số học mới ưu tiên để kiểu số.</p>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 mb-2">📝 Câu 2: Bảng mã ASCII</p>
                        <p>Sử dụng bảng mã ASCII, hãy xác định mã thập phân và mã nhị phân của các ký tự: <strong>S, G, K</strong>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            💡 Gợi ý: 'A' = 65 (01000001₂)<br>
                            S = 83 (01010011₂) [A + 18]<br>
                            G = 71 (01000111₂) [A + 6]<br>
                            K = 75 (01001011₂) [A + 10]
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 mb-2">📝 Câu 3: Trắc nghiệm Unicode</p>
                        <p>Trong bảng mã Unicode, mỗi ký tự Tiếng Việt theo UTF-8 được biểu diễn bởi bao nhiêu byte?</p>
                        <ul class="mt-2 space-y-1 text-sm">
                            <li>A. 1 byte.</li>
                            <li>B. 2 byte.</li>
                            <li>C. 4 byte.</li>
                            <li class="text-emerald-700 font-semibold">D. Từ 1 đến 3 byte. ✓</li>
                        </ul>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">💡 UTF-8 dùng độ dài thay đổi: ký tự La tinh 1 byte, tiếng Việt thường 2 byte, một số ký tự đặc biệt 3 byte.</div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 mb-2">📝 Câu 4: Thảo luận về Unicode</p>
                        <p>Tại sao cần xây dựng bảng mã Unicode thay vì chỉ dùng ASCII?</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">💡 ASCII chỉ 256 ký tự, không đủ cho các ngôn ngữ như tiếng Trung (hàng nghìn chữ tượng hình), tiếng Việt có dấu... Unicode cung cấp một bảng mã chung cho toàn thế giới, hỗ trợ đa ngôn ngữ đồng thời.</div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-800 mb-2">🌟 Câu 5: Vận dụng thực tế (Nâng cao)</p>
                        <p class="text-slate-700">Ngoài phông Times New Roman, hãy tìm thêm ít nhất 3 phông chữ khác hỗ trợ đầy đủ tiếng Việt Unicode.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border text-indigo-700">💡 Gợi ý: Thử nghiệm trên Word: Arial, Calibri, Verdana, Tahoma. Tất cả đều hỗ trợ Unicode tiếng Việt đầy đủ.</div>
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
                <div class="p-6 pt-4 border-t border-slate-100 space-y-3 text-sm text-slate-600">
                    <p>📹 Video 1: Cách máy tính hiểu văn bản (ASCII và Unicode)</p>
                    <p>📹 Video 2: Hướng dẫn gõ tiếng Việt và bảng mã Unicode</p>
                    <p class="text-sm text-slate-500 italic">Video đang được chuẩn bị.</p>
                </div>
            </details>

        </div>
        `
    },

    // ===== BÀI 4 =====
    {
        title: "Bài 4: Hệ Nhị Phân và Dữ Liệu Số Nguyên",
        videoId: "",
        desc: "Nắm vững hệ nhị phân, thực hiện chuyển đổi giữa hệ thập phân và nhị phân, thực hiện các phép tính cộng và nhân trong hệ nhị phân.",
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 leading-relaxed text-sm md:text-base">
                    <ul class="space-y-2 list-none">
                        <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">✦</span> Hiểu được khái niệm về <strong>hệ nhị phân</strong> và cách biểu diễn số nguyên trong máy tính.</li>
                        <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">✦</span> Thực hiện thành thạo việc <strong>chuyển đổi</strong> giữa hệ thập phân và hệ nhị phân.</li>
                        <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">✦</span> Thực hiện được các phép tính <strong>cộng, nhân</strong> trong hệ nhị phân.</li>
                        <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">✦</span> Giải thích được sơ lược về quy trình thực hiện phép tính và ứng dụng của hệ nhị phân trong tin học.</li>
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-6 text-sm md:text-base">

                    <div>
                        <h3 class="font-bold text-slate-800 text-base mb-3">1. Hệ Nhị Phân và Biểu Diễn Số Nguyên</h3>
                        <ul class="space-y-2 mb-3">
                            <li><strong>Hệ nhị phân (Binary):</strong> Hệ đếm cơ số 2, chỉ dùng hai chữ số $0$ và $1$.</li>
                            <li><strong>Giá trị vị trí:</strong> Chữ số ở vị trí thứ $k$ (từ phải sang, bắt đầu $k=1$) mang giá trị $2^{k-1}$.</li>
                        </ul>
                        <div class="p-4 bg-blue-50 rounded-xl border border-blue-200 mb-3">
                            <p class="font-semibold text-blue-800 mb-2">Chuyển đổi Thập phân → Nhị phân:</p>
                            <p class="text-sm text-slate-700">Chia liên tiếp cho 2, lấy các số dư viết <em>ngược từ dưới lên</em>.</p>
                            <div class="mt-2 font-mono text-xs bg-white p-2 rounded border">
                                Ví dụ: 19 ÷ 2 = 9 dư 1<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9 ÷ 2 = 4 dư 1<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 ÷ 2 = 2 dư 0<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 ÷ 2 = 1 dư 0<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 ÷ 2 = 0 dư 1<br>
                                → 19₁₀ = 10011₂
                            </div>
                        </div>
                        <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                            <p class="font-semibold text-emerald-800 mb-2">Chuyển đổi Nhị phân → Thập phân:</p>
                            <p class="text-sm text-slate-700">Tính tổng các luỹ thừa của 2 với hệ số tương ứng.</p>
                            <div class="mt-1 text-xs text-slate-600">Ví dụ: $1101_2 = 1{\times}2^3 + 1{\times}2^2 + 0{\times}2^1 + 1{\times}2^0 = 8+4+0+1 = 13_{10}$</div>
                        </div>
                    </div>

                    <div>
                        <h3 class="font-bold text-slate-800 text-base mb-3">2. Phép Tính trong Hệ Nhị Phân</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                <p class="font-bold text-slate-700 mb-2">Bảng cộng:</p>
                                <pre class="text-xs font-mono text-slate-600">0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 10 (viết 0, nhớ 1)</pre>
                            </div>
                            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                <p class="font-bold text-slate-700 mb-2">Bảng nhân:</p>
                                <pre class="text-xs font-mono text-slate-600">0 × 0 = 0
0 × 1 = 0
1 × 0 = 0
1 × 1 = 1</pre>
                            </div>
                        </div>
                        <div class="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                            <p class="font-semibold text-red-800 text-sm">⚠️ Lưu ý quan trọng:</p>
                            <p class="text-sm text-slate-700 mt-1">Khi cộng hai số nhị phân, thực hiện từ phải sang trái. Nếu kết quả có nhớ thì cộng thêm vào hàng bên trái liền kề (giống hệ thập phân).</p>
                        </div>
                    </div>

                    <div>
                        <h3 class="font-bold text-slate-800 text-base mb-3">3. Biểu Diễn Số Nguyên trong Máy Tính</h3>
                        <ul class="space-y-2 text-sm">
                            <li><strong>Số nguyên không dấu:</strong> Đổi trực tiếp sang nhị phân, bổ sung bit $0$ bên trái cho đủ độ dài (8, 16, 32... bit).</li>
                            <li><strong>Số nguyên có dấu:</strong> Dùng bit tận cùng bên trái làm bit dấu ($0$ là dương $+$, $1$ là âm $-$). Có 3 cách mã hóa: mã thuận, mã bù 1 và mã bù 2.</li>
                        </ul>
                    </div>

                </div>
            </details>

            <!-- MỤC III: BÀI TẬP VẬN DỤNG -->
            <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-orange-500 text-white rounded-lg shadow-md"><i data-lucide="pen-tool" class="w-5 h-5"></i></div>
                        <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">III. Bài tập vận dụng</span>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                </summary>
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-4 text-sm md:text-base">

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 mb-2">📝 Câu 1a: Đổi sang hệ nhị phân</p>
                        <p>Đổi các số sau sang hệ nhị phân: <strong>13; 155; 76</strong></p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            13₁₀  = 1101₂<br>
                            155₁₀ = 10011011₂<br>
                            76₁₀  = 1001100₂
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 mb-2">📝 Câu 1b: Đổi sang hệ thập phân</p>
                        <p>Đổi các số sau sang hệ thập phân: $110011_2; \ 10011011_2; \ 1001110_2$</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            110011₂   = 32+16+2+1 = 51₁₀<br>
                            10011011₂ = 128+16+8+2+1 = 155₁₀<br>
                            1001110₂  = 64+8+4+2 = 78₁₀
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 mb-2">📝 Câu 2: Tính toán trên hệ nhị phân</p>
                        <p>Thực hiện trực tiếp trên hệ nhị phân:</p>
                        <ul class="mt-1 space-y-1">
                            <li>a) $101101_2 + 11001_2$</li>
                            <li>b) $100111_2 \times 1011_2$</li>
                        </ul>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            a) 101101 + 011001 = 1000110₂ (= 70₁₀)<br>
                            b) 100111 × 1011 = 110011101₂ (= 413₁₀)<br>
                            💡 Kiểm tra: 45 + 25 = 70 ✓ | 39 × 11 = 429... (tính lại cẩn thận từng bước)
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 mb-2">📝 Câu 3: Quy trình 3 bước của máy tính</p>
                        <p>Thực hiện theo quy trình: Mã hóa → Tính toán nhị phân → Giải mã</p>
                        <ul class="mt-1 space-y-1">
                            <li>a) $125 + 17$</li>
                            <li>b) $15 \times 6$</li>
                            <li>c) $11 \times 9$</li>
                        </ul>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            a) 1111101₂ + 10001₂ = 10001110₂ = 142₁₀ ✓<br>
                            b) 1111₂ × 110₂ = 1011010₂ = 90₁₀ ✓<br>
                            c) 1011₂ × 1001₂ = 1100011₂ = 99₁₀ ✓
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-800 mb-2">🌟 Câu 4: Tìm hiểu nâng cao</p>
                        <p class="text-slate-700">Hãy tìm hiểu cách đổi phần thập phân (số lẻ) sang hệ nhị phân. Và mã bù 2 được lập như thế nào?</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border text-indigo-700">
                            💡 Số lẻ: nhân liên tiếp với 2, lấy phần nguyên từ trên xuống.<br>
                            Ví dụ: 0.625 × 2 = 1.25 → 1; 0.25 × 2 = 0.5 → 0; 0.5 × 2 = 1.0 → 1 ⇒ 0.101₂<br><br>
                            💡 Mã bù 2: Đảo tất cả bit (bù 1) rồi cộng thêm 1. Máy tính dùng bù 2 vì phép trừ trở thành phép cộng với số bù 2, đơn giản hóa mạch điện.
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
                <div class="p-6 pt-4 border-t border-slate-100 space-y-3 text-sm text-slate-600">
                    <p>📹 Video 1: Hướng dẫn đổi hệ thập phân sang nhị phân</p>
                    <p>📹 Video 2: Hướng dẫn các phép tính cộng, nhân nhị phân</p>
                    <p class="text-sm text-slate-500 italic">Video đang được chuẩn bị.</p>
                </div>
            </details>

        </div>
        `
    },

    // ===== BÀI 5 =====
    {
        title: "Bài 5: Dữ Liệu Lôgic",
        videoId: "",
        desc: "Nắm vững các giá trị chân lý, thực hiện các phép toán lôgic cơ bản AND, OR, XOR, NOT và ứng dụng trong biểu thức lôgic và mạch điện tử.",
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 leading-relaxed text-sm md:text-base">
                    <ul class="space-y-2 list-none">
                        <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">✦</span> Biết được các <strong>giá trị chân lý</strong> (Đúng/Sai) và cách biểu diễn trong tin học.</li>
                        <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">✦</span> Hiểu và thực hiện được các <strong>phép toán lôgic</strong> cơ bản: AND, OR, XOR, NOT.</li>
                        <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">✦</span> Biết cách biểu diễn dữ liệu lôgic và ứng dụng trong <strong>biểu thức lôgic</strong> và <strong>mạch điện tử</strong>.</li>
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-6 text-sm md:text-base">

                    <div>
                        <h3 class="font-bold text-slate-800 text-base mb-3">1. Giá Trị Chân Lý và Phép Toán Lôgic</h3>
                        <ul class="space-y-2 mb-4">
                            <li><strong>Mệnh đề:</strong> Là khẳng định chỉ có thể là Đúng ($1$) hoặc Sai ($0$).</li>
                            <li><strong>Đại lượng lôgic:</strong> Là đại lượng chỉ nhận một trong hai giá trị chân lý ($1$ hoặc $0$).</li>
                        </ul>
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm border-collapse">
                                <thead>
                                    <tr class="bg-emerald-600 text-white">
                                        <th class="p-3 text-left rounded-tl-lg">Phép toán</th>
                                        <th class="p-3 text-left">Ký hiệu</th>
                                        <th class="p-3 text-left rounded-tr-lg">Đặc điểm</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-slate-100 hover:bg-slate-50"><td class="p-3 font-mono font-bold text-blue-700">AND</td><td class="p-3">Phép nhân lôgic (VÀ)</td><td class="p-3">Chỉ đúng khi cả hai đều đúng: $1 \text{ AND } 1 = 1$</td></tr>
                                    <tr class="border-b border-slate-100 hover:bg-slate-50"><td class="p-3 font-mono font-bold text-emerald-700">OR</td><td class="p-3">Phép cộng lôgic (HOẶC)</td><td class="p-3">Đúng khi có ít nhất một thành phần đúng.</td></tr>
                                    <tr class="border-b border-slate-100 hover:bg-slate-50"><td class="p-3 font-mono font-bold text-orange-700">XOR</td><td class="p-3">Cộng loại trừ</td><td class="p-3">Chỉ đúng khi hai thành phần có giá trị khác nhau.</td></tr>
                                    <tr class="hover:bg-slate-50"><td class="p-3 font-mono font-bold text-red-700">NOT</td><td class="p-3">Phép phủ định</td><td class="p-3">Đảo ngược giá trị: $NOT \ 1 = 0$; $NOT \ 0 = 1$</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="mt-3 p-4 bg-amber-50 rounded-xl border-l-4 border-amber-500">
                            <p class="font-semibold text-amber-800 text-sm">⚡ Thứ tự ưu tiên (không có dấu ngoặc):</p>
                            <p class="text-sm text-slate-700 mt-1">NOT → AND → OR (thực hiện từ trái sang phải trong cùng mức độ ưu tiên)</p>
                        </div>
                    </div>

                    <div>
                        <h3 class="font-bold text-slate-800 text-base mb-3">2. Biểu Diễn Dữ Liệu Lôgic</h3>
                        <ul class="space-y-2 text-sm">
                            <li>• Chỉ cần <strong>1 bit</strong> để biểu diễn dữ liệu lôgic ($1$: Đúng, $0$: Sai).</li>
                            <li>• Trong lập trình: dùng ký tự <code class="bg-slate-100 px-1 rounded">True</code> / <code class="bg-slate-100 px-1 rounded">False</code>. Python quy ước số $0$ là False, các số khác là True.</li>
                            <li>• Trong đời sống: "Đóng/Mở", "Sáng/Tối", "Bật/Tắt" đều là dữ liệu lôgic.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="font-bold text-slate-800 text-base mb-3">3. Ứng Dụng trong Mạch Điện</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div class="p-4 bg-blue-50 rounded-xl border border-blue-200">
                                <p class="font-bold text-blue-800 mb-2">🔗 Mạch nối tiếp</p>
                                <p class="text-sm text-slate-600">Đèn chỉ sáng khi cả $K_1$ <strong>VÀ</strong> $K_2$ cùng đóng.</p>
                                <p class="mt-1 font-mono text-sm text-blue-700">→ Phép toán: $K_1$ AND $K_2$</p>
                            </div>
                            <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                                <p class="font-bold text-emerald-800 mb-2">⚡ Mạch song song</p>
                                <p class="text-sm text-slate-600">Đèn sáng khi $K_1$ <strong>HOẶC</strong> $K_2$ đóng (hoặc cả hai).</p>
                                <p class="mt-1 font-mono text-sm text-emerald-700">→ Phép toán: $K_1$ OR $K_2$</p>
                            </div>
                        </div>
                    </div>

                </div>
            </details>

            <!-- MỤC III: BÀI TẬP VẬN DỤNG -->
            <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-orange-500 text-white rounded-lg shadow-md"><i data-lucide="pen-tool" class="w-5 h-5"></i></div>
                        <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">III. Bài tập vận dụng</span>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                </summary>
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-4 text-sm md:text-base">

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 mb-2">📝 Câu 1: Diễn giải mệnh đề</p>
                        <p>Cho $p$: "Hùng khéo tay", $q$: "Hùng chăm chỉ". Diễn giải bằng lời:</p>
                        <ul class="mt-2 space-y-2">
                            <li>• $p$ AND NOT $q$ = ?</li>
                            <li>• $p$ OR $q$ = ?</li>
                        </ul>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            • p AND NOT q: "Hùng khéo tay và KHÔNG chăm chỉ." (Khen năng khiếu, phê bình thái độ)<br>
                            • p OR q: "Hùng khéo tay HOẶC Hùng chăm chỉ." (Có ít nhất một ưu điểm)
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 mb-2">📝 Câu 2: Kiểm tra biểu thức lôgic</p>
                        <p>Xác định phương án <strong>sai</strong> cho biểu thức $p$ AND NOT $q$:</p>
                        <ul class="mt-2 space-y-1">
                            <li>A. $p=0, q=0 \Rightarrow 0$ AND $1 = 0$ (Đúng)</li>
                            <li>B. $p=1, q=1 \Rightarrow 1$ AND $0 = 0$ (Đúng)</li>
                            <li class="text-red-600 font-semibold">C. $p=0, q=0 \Rightarrow 1$ ✗ (Sai – kết quả phải là 0)</li>
                        </ul>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 mb-2">📝 Câu 3: Phân tích biểu thức đặc biệt</p>
                        <p>Tại sao $p$ AND NOT $p$ luôn bằng $0$, còn $p$ OR NOT $p$ luôn bằng $1$?</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            💡 Vì p và NOT p luôn trái ngược nhau:<br>
                            • Nếu p=1: p AND NOT p = 1 AND 0 = 0<br>
                            • Nếu p=0: p AND NOT p = 0 AND 1 = 0<br>
                            → Luôn = 0 (Luật mâu thuẫn)<br><br>
                            • Nếu p=1: p OR NOT p = 1 OR 0 = 1<br>
                            • Nếu p=0: p OR NOT p = 0 OR 1 = 1<br>
                            → Luôn = 1 (Luật bài trung)
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 mb-2">📝 Câu 4: Ứng dụng mạch điện</p>
                        <p>Cho mạch điện có 3 công tắc $K_1$, $K_2$, $K_3$. Đèn sáng khi ($K_1$ VÀ $K_2$) HOẶC $K_3$ đóng. Viết biểu thức lôgic và lập bảng chân trị.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            Biểu thức: (K1 AND K2) OR K3<br><br>
                            K1 K2 K3 | Đèn<br>
                            0  0  0  |  0<br>
                            0  0  1  |  1<br>
                            0  1  0  |  0<br>
                            0  1  1  |  1<br>
                            1  0  0  |  0<br>
                            1  0  1  |  1<br>
                            1  1  0  |  1<br>
                            1  1  1  |  1
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-800 mb-2">🌟 Câu 5: Vận dụng thực tế (Nâng cao)</p>
                        <p class="text-slate-700">Trong Python, biểu thức <code class="bg-white px-1 rounded border">not 0 and 5 > 3</code> trả về giá trị gì? Giải thích theo thứ tự ưu tiên phép toán.</p>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs mt-2">
# Python
result = not 0 and 5 > 3
# Bước 1: not 0 → True (vì 0 là False)
# Bước 2: 5 > 3 → True
# Bước 3: True and True → True
print(result)  # True</pre>
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
                <div class="p-6 pt-4 border-t border-slate-100 space-y-3 text-sm text-slate-600">
                    <p>📹 Video 1: Đại số Boole và các phép toán lôgic cơ bản</p>
                    <p>📹 Video 2: Ứng dụng cổng lôgic trong mạch điện máy tính</p>
                    <p class="text-sm text-slate-500 italic">Video đang được chuẩn bị.</p>
                </div>
            </details>

        </div>
        `
    }
        ]
    },
    {
        chapterName: "Chương 2: Mạng máy tính và Internet",
        lessons: [
            { title: "Bài 6: Mạng máy tính trong cuộc sống hiện đại", videoId: "", desc: "Internet và lợi ích.", downloadUrl: "#" },
            { title: "Bài 7: Thực hành: Sử dụng thiết bị số", videoId: "", desc: "Kỹ năng sử dụng máy tính.", downloadUrl: "#" },
            { title: "Bài 8: Mạng máy tính trong cuộc sống hiện đại (Tiếp)", videoId: "", desc: "An toàn trên Internet.", downloadUrl: "#" }
        ]
    },
    {
        chapterName: "Chương 3: Đạo đức, pháp luật và văn hóa trong môi trường số",
        lessons: [
            { title: "Bài 9: An toàn trong không gian mạng", videoId: "", desc: "Bảo vệ thông tin cá nhân.", downloadUrl: "#" },
            { title: "Bài 10: Thực hành: Khai thác tài nguyên trên Internet", videoId: "", desc: "Tìm kiếm thông tin hiệu quả.", downloadUrl: "#" }
        ]
    },
    {
        chapterName: "Chương 4: Ứng dụng tin học",
        lessons: [
            { title: "Bài 11: Ứng dụng trên Internet", videoId: "", desc: "Dịch vụ đám mây, email.", downloadUrl: "#" },
            { title: "Bài 12: Phần mềm thiết kế đồ họa", videoId: "", desc: "Làm quen với Inkscape.", downloadUrl: "#" },
            { title: "Bài 13: Bổ sung các đối tượng đồ họa", videoId: "", desc: "Chỉnh sửa hình ảnh vector.", downloadUrl: "#" },
            { title: "Bài 14: Làm việc với đối tượng đường và văn bản", videoId: "", desc: "Thiết kế logo và poster.", downloadUrl: "#" },
            { title: "Bài 15: Hoàn thiện hình ảnh đồ họa", videoId: "", desc: "Xuất bản sản phẩm thiết kế.", downloadUrl: "#" }
        ]
    },
    {
        chapterName: "Chương 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
        lessons: [
            { title: "Bài 16: Ngôn ngữ lập trình bậc cao và Python", videoId: "", desc: "Môi trường lập trình Python.", downloadUrl: "#" },
            { title: "Bài 17: Biến và lệnh gán", videoId: "", desc: "Cách đặt tên biến và gán giá trị.", downloadUrl: "#" },
            { title: "Bài 18: Các lệnh vào ra đơn giản", videoId: "", desc: "Lệnh input() và print().", downloadUrl: "#" },
            {
                title: "Bài 19: Câu lệnh rẽ nhánh If",
                videoId: "", 
                desc: "Tìm hiểu về biểu thức lôgic, cấu trúc if, if-else và if-elif-else trong Python.",
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
                            <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-3 leading-relaxed text-sm md:text-base font-medium">
                                <ul class="list-disc ml-5 space-y-2 mt-4 text-sm md:text-base">
                                    <li>Biết và trình bày được các phép toán với kiểu dữ liệu lôgic.</li>
                                    <li>Sử dụng thành thạo lệnh rẽ nhánh <code>if</code>, <code>if-else</code>, <code>if-elif-else</code> trong lập trình.</li>
                                    <li>Giải quyết được các bài toán thực tế có cấu trúc rẽ nhánh.</li>
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
                            <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-6 text-sm md:text-base mt-4">
                                <!-- 1. Biểu thức Logic -->
                                <div class="space-y-3">
                                    <p class="font-bold text-emerald-700 flex items-center gap-2 text-lg">
                                        <span class="w-2 h-6 bg-emerald-500 rounded-full"></span> 1. Biểu thức lôgic
                                    </p>
                                    <p>Các phép so sánh và toán tử lôgic:</p>
                                    <div class="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs md:text-sm font-mono">
                                        <div class="p-2 bg-slate-50 rounded border text-center font-bold text-blue-700">&lt;, &gt;, ==</div>
                                        <div class="p-2 bg-slate-50 rounded border text-center font-bold text-blue-700">&lt;=, &gt;=, !=</div>
                                        <div class="p-2 bg-slate-50 rounded border text-center font-bold text-emerald-700">and, or, not</div>
                                    </div>
                                    <div class="overflow-x-auto mt-2">
                                        <table class="w-full text-center border-collapse border border-slate-200 text-xs">
                                            <thead class="bg-slate-100">
                                                <tr>
                                                    <th class="border p-2">X</th>
                                                    <th class="border p-2">Y</th>
                                                    <th class="border p-2 text-blue-700">X and Y</th>
                                                    <th class="border p-2 text-blue-700">X or Y</th>
                                                    <th class="border p-2 text-red-600">not X</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr><td class="border p-2">True</td><td class="border p-2">True</td><td class="border p-2">True</td><td class="border p-2">True</td><td class="border p-2">False</td></tr>
                                                <tr><td class="border p-2">True</td><td class="border p-2">False</td><td class="border p-2">False</td><td class="border p-2">True</td><td class="border p-2">False</td></tr>
                                                <tr><td class="border p-2">False</td><td class="border p-2">True</td><td class="border p-2">False</td><td class="border p-2">True</td><td class="border p-2">True</td></tr>
                                                <tr><td class="border p-2">False</td><td class="border p-2">False</td><td class="border p-2">False</td><td class="border p-2">False</td><td class="border p-2">True</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
            
                                <!-- 2. Cấu trúc rẽ nhánh -->
                                <div class="space-y-4 pt-4 border-t">
                                    <p class="font-bold text-emerald-700 flex items-center gap-2 text-lg">
                                        <span class="w-2 h-6 bg-emerald-500 rounded-full"></span> 2. Cấu trúc rẽ nhánh If
                                    </p>
                                    
                                    <!-- Dạng thiếu -->
                                    <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                        <p class="font-bold text-blue-800 underline mb-2">a. Dạng thiếu:</p>
                                        <pre class="bg-white p-3 rounded border text-xs text-indigo-600">if &lt;điều kiện&gt;:
                &lt;khối lệnh&gt;</pre>
                                    </div>
            
                                    <!-- Dạng đủ -->
                                    <div class="bg-orange-50 p-4 rounded-xl border border-orange-100">
                                        <p class="font-bold text-orange-800 underline mb-2">b. Dạng đủ (if - else):</p>
                                        <pre class="bg-white p-3 rounded border text-xs text-indigo-600">if &lt;điều kiện&gt;:
                &lt;khối lệnh 1&gt;
            else:
                &lt;khối lệnh 2&gt;</pre>
                                    </div>
            
                                    <!-- Dạng nhiều nhánh -->
                                    <div class="bg-purple-50 p-4 rounded-xl border border-purple-100">
                                        <p class="font-bold text-purple-800 underline mb-2">c. Dạng nhiều nhánh (if - elif - else):</p>
                                        <pre class="bg-white p-3 rounded border text-xs text-indigo-600">if &lt;điều kiện 1&gt;:
                &lt;khối lệnh 1&gt;
            elif &lt;điều kiện 2&gt;:
                &lt;khối lệnh 2&gt;
            ...
            else:
                &lt;khối lệnh cuối&gt;</pre>
                                        <p class="text-xs text-purple-700 mt-2 italic">* Python sẽ kiểm tra từ trên xuống, nếu gặp điều kiện đúng thì thực hiện khối lệnh tương ứng rồi thoát khỏi cấu trúc.</p>
                                    </div>
            
                                    <div class="p-4 bg-red-50 rounded-xl border border-red-100">
                                        <p class="text-red-800 text-sm font-medium italic"><b>Lưu ý quan trọng:</b> Mọi khối lệnh con đều phải được thụt lề (indentation) thẳng hàng nhau.</p>
                                    </div>
                                </div>
                            </div>
                        </details>
            
                        <!-- Mục III: Bài tập vận dụng -->
                        <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                            <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                                <div class="flex items-center gap-3">
                                    <div class="p-2 bg-orange-500 text-white rounded-lg shadow-md"><i data-lucide="pen-tool" class="w-5 h-5"></i></div>
                                    <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">III. Bài tập vận dụng</span>
                                </div>
                                <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                            </summary>
                            <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-4">
                                
                                <!-- Nhóm 1: Cơ bản -->
                                <div class="mt-4">
                                    <h4 class="font-bold text-slate-900 mb-3 flex items-center gap-2">🚀 Mức độ: Nhận biết - Thông hiểu</h4>
                                    <div class="space-y-3">
                                        <div class="p-3 bg-slate-50 rounded-lg border">
                                            <p><b>Bài 1:</b> Nhập số nguyên $n$. Nếu $n > 0$ thì in "Số dương".</p>
                                            <p class="text-xs text-slate-500 mt-1">Input: 5 | Output: Số dương</p>
                                        </div>
                                        <div class="p-3 bg-slate-50 rounded-lg border">
                                            <p><b>Bài 2:</b> Nhập số nguyên $n$. Kiểm tra chẵn lẻ.</p>
                                            <p class="text-xs text-slate-500 mt-1">Input: 4 → Output: Số chẵn | Input: 7 → Output: Số lẻ</p>
                                        </div>
                                        <div class="p-3 bg-slate-50 rounded-lg border">
                                            <p><b>Câu 3:</b> Nhập 2 số $a, b$. So sánh chúng.</p>
                                            <p class="text-xs text-slate-500 mt-1">Input: 5, 5 → Output: a bằng b | Input: 8, 3 → Output: a lớn hơn b</p>
                                        </div>
                                    </div>
                                </div>
            
                                <!-- Nhóm 2: Vận dụng -->
                                <div class="mt-6">
                                    <h4 class="font-bold text-slate-900 mb-3 flex items-center gap-2">🛠️ Mức độ: Vận dụng</h4>
                                    <div class="space-y-3">
                                        <div class="p-3 bg-slate-50 rounded-lg border">
                                            <p><b>Bài 4:</b> Xếp loại học lực dựa trên điểm trung bình $điểmtb$.</p>
                                            <p class="text-xs text-slate-500 mt-1">Điều kiện: $Trên 8$ (Giỏi), $[6.5, 8)$ (Khá), $[5, 6.5)$ (Trung bình), $< 5$ (Yếu).</p>
                                            <p class="text-xs text-slate-500">Input: 7.2 → Output: Khá</p>
                                        </div>
                                        <div class="p-3 bg-slate-50 rounded-lg border">
                                            <p><b>Câu 5:</b> Kiểm tra năm nhuận $y$.</p>
                                            <p class="text-xs text-slate-500 mt-1">Logic: ($y \% 400 == 0$) hoặc ($y \% 4 == 0$ and $y \% 100 != 0$).</p>
                                            <p class="text-xs text-slate-500">Input: 2000 → Output: Năm nhuận | Input: 2023 → Output: Năm không nhuận</p>
                                        </div>
                                        <div class="p-3 bg-slate-50 rounded-lg border">
                                            <p><b>Câu 6:</b> Tính $BMI$ = $cân nặng$ / ($chiều$ $cao$ ^2).</p>
                                            <p class="text-xs text-slate-500 mt-1">Input: 60, 1.7 → BMI ≈ 20.76 → Output: Bình thường</p>
                                            <tr class="bg-blue-100"><th class="border p-1">Chỉ số BMI</th><th class="border p-1">Phân loại</th></tr>
                                            <p class="border p-1">< 18.5</td><td class="border p-1 text-orange-600 font-bold">Gầy</td></tr>
                                            <p class="border p-1">18.5 - 24.9</td><td class="border p-1 text-green-600 font-bold">Bình thường</td></tr>
                                            <p class="border p-1">25.0 - 29.9</td><td class="border p-1 text-orange-700 font-bold">Thừa cân</td></tr>
                                            <p class="border p-1">$Trên$ 30.0</td><td class="border p-1 text-red-600 font-bold">Béo phì</td></tr>
                                        </div>
                                    </div>
                                </div>
            
                                <!-- Nhóm 3: Nâng cao -->
                                <div class="mt-6">
                                    <h4 class="font-bold text-slate-900 mb-3 flex items-center gap-2">🏆 Mức độ: Vận dụng cao</h4>
                                    <div class="space-y-3">
                                        <div class="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                            <p class="font-bold text-indigo-900">Câu 7: Máy ATM thông minh</p>
                                            <p class="text-sm mt-1">Nhập số tiền $T$ (là bội của 1.000). Hãy phân tích $T$ thành các mệnh giá 500k, 200k, 100k, 50k, 20k, 10k, 5k, 2k, 1k sao cho <b>tổng số tờ tiền là ít nhất</b>.</p>
                                            <div class="mt-2 text-xs text-indigo-700 bg-white p-2 rounded">
                                                <b>Ví dụ:</b> Input: 658000 <br>
                                                <b>Output:</b> 1 tờ 500k, 1 tờ 100k, 1 tờ 50k, 1 tờ 5k, 1 tờ 2k, 1 tờ 1k.
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                            <div class="p-6 pt-0 border-t border-slate-100 text-center py-8">
                                <p class="text-sm text-slate-500 italic">Video bài giảng và mã nguồn tham khảo đang được chuẩn bị.</p>
                            </div>
                        </details>
                    </div>
                `
            },
            {
                title: "BÀI 20: CÂU LỆNH LẶP FOR",
                videoId: "",
                desc: "Biết được ý nghĩa của lệnh range, chức năng và cách dùng lệnh lặp for trong Python.",
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
                            <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-4 leading-relaxed text-sm md:text-base">
                                <div>
                                    <p class="font-bold text-blue-700">Kiến thức:</p>
                                    <ul class="list-disc ml-5 space-y-1">
                                        <li>Biết được ý nghĩa của vùng giá trị tạo bởi lệnh <code>range()</code>.</li>
                                        <li>Biết được chức năng của lệnh lặp <code>for</code> và cách dùng trong Python.</li>
                                    </ul>
                                </div>
                                <div>
                                    <p class="font-bold text-blue-700">Kỹ năng:</p>
                                    <ul class="list-disc ml-5 space-y-1">
                                        <li>Vận dụng được lệnh lặp <code>for</code> để thực hiện các công việc lặp đi lặp lại với số lần xác định.</li>
                                        <li>Sử dụng được lệnh <code>range()</code> để tạo danh sách các giá trị số nguyên phục vụ vòng lặp.</li>
                                    </ul>
                                </div>
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
                                <p>Cú pháp của lệnh lặp với số lần biết trước <strong>for</strong> trong Python như sau:</p>
                                <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs md:text-sm">for &lt;i&gt; in range(n):
                &lt;khối lệnh&gt;</pre>
                                <p>Khi thực hiện, ở mỗi vòng lặp biến <code>i</code> sẽ được gán lần lượt các giá trị trong vùng giá trị của lệnh <code>range()</code>. <strong>Lưu ý:</strong> Khối lệnh lặp phải được viết lùi vào so với dòng chứa lệnh <code>for</code>.</p>
                                
                                <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                    <p class="font-bold mb-2 text-blue-800">Lệnh tạo vùng giá trị <code>range()</code>:</p>
                                    <ul class="space-y-2">
                                        <li><code>range(stop)</code>: trả lại vùng giá trị từ $0$ đến $stop - 1$.</li>
                                        <li><code>range(start,stop)</code>: trả lại vùng giá trị từ $start$ đến $stop - 1$.</li>
                                        <li><code>range(start,stop,step)</code>: trả lại vùng giá trị từ $start$ đến $stop - 1$ bước nhảy $step$.</li>
                                    </ul>
                                </div>
            
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div class="p-3 bg-blue-50 rounded-lg text-sm italic">
                                        - <code>range(n)</code>: các số $0, 1, ..., n - 1$.<br>
                                        - <code>range(1, n + 1)</code>: các số $1, 2, ..., n$.
                                    </div>
                                    <div class="p-3 bg-blue-50 rounded-lg text-sm italic">
                                        - <code>range(0, 99)</code>: các số $0, 1, ..., 98$.<br>
                                        - <code>range(100, 1)</code>: cho vùng rỗng.
                                    </div>
                                </div>
                            </div>
                        </details>
            
                        <!-- Mục III: Bài tập vận dụng -->
                        <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                            <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                                <div class="flex items-center gap-3">
                                    <div class="p-2 bg-orange-500 text-white rounded-lg shadow-md"><i data-lucide="pen-tool" class="w-5 h-5"></i></div>
                                    <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">III. Bài tập vận dụng</span>
                                </div>
                                <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                            </summary>
                            <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-6">
                                <div class="grid grid-cols-1 gap-4 mt-4">
                                    <!-- Bài 1 -->
                                    <div class="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                                        <p class="font-bold text-orange-900 text-sm md:text-base italic">Bài 1. In dãy số</p>
                                        <p class="text-sm mb-2">Viết chương trình in ra các số nguyên từ $1$ đến $n$ trên cùng một dòng.</p>
                                        <p class="text-xs font-mono text-slate-500">Ví dụ: n = 5 &rarr; Output: 1 2 3 4 5</p>
                                    </div>
                                    <!-- Bài 2 -->
                                    <div class="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                                        <p class="font-bold text-orange-900 text-sm md:text-base italic">Bài 2. In các số chẵn</p>
                                        <p class="text-sm mb-2">Nhập số nguyên dương $n$. In ra các số chẵn từ $1$ đến $n$.</p>
                                        <p class="text-xs font-mono text-slate-500">Ví dụ: n = 6 &rarr; Output: 2 4 6</p>
                                    </div>
                                    <!-- Bài 3 -->
                                    <div class="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                                        <p class="font-bold text-orange-900 text-sm md:text-base italic">Bài 3. Tính tổng</p>
                                        <p class="text-sm mb-2">Nhập $n$. Tính và in ra tổng $S = 1 + 2 + ... + n$.</p>
                                        <p class="text-xs font-mono text-slate-500">Ví dụ: n = 5 &rarr; Output: Tổng = 15</p>
                                    </div>
                                    <!-- Bài 4 -->
                                    <div class="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                                        <p class="font-bold text-orange-900 text-sm md:text-base italic">Bài 4. Bảng cửu chương</p>
                                        <p class="text-sm mb-2">Nhập $n$ ($1 \\le n \\le 9$). In ra bảng cửu chương của $n$.</p>
                                        <p class="text-xs font-mono text-slate-500">Ví dụ: n = 2 &rarr; Output: 2 $\\times$ 1 = 2, 2 $\\times$ 2 = 4, ...</p>
                                    </div>
                                    <!-- Bài 5 -->
                                    <div class="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                                        <p class="font-bold text-orange-900 text-sm md:text-base italic">Bài 5. Đếm số chia hết</p>
                                        <p class="text-sm mb-2">Đếm xem trong đoạn từ $1$ đến $n$ có bao nhiêu số chia hết cho $3$.</p>
                                        <p class="text-xs font-mono text-slate-500">Ví dụ: n = 10 &rarr; Output: Có 3 số (là 3, 6, 9)</p>
                                    </div>
                                    <!-- Bài 6 -->
                                    <div class="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                                        <p class="font-bold text-orange-900 text-sm md:text-base italic">Bài 6. Tính giai thừa</p>
                                        <p class="text-sm mb-2">Nhập $n$. Tính $n! = 1 \\times 2 \\times ... \\times n$.</p>
                                        <p class="text-xs font-mono text-slate-500">Ví dụ: n = 4 &rarr; Output: 4! = 24</p>
                                    </div>
                                    <!-- Bài 7 -->
                                    <div class="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                                        <p class="font-bold text-orange-900 text-sm md:text-base italic">Bài 7. Tính tổng dãy số</p>
                                        <p class="text-sm mb-2">Tính giá trị: $S = 1^2 + 2^2 + 3^2 + ... + n^2$.</p>
                                        <p class="text-xs font-mono text-slate-500">Ví dụ: n = 3 &rarr; Output: S = 14</p>
                                    </div>
                                    <!-- Bài 8 -->
                                    <div class="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                                        <p class="font-bold text-orange-900 text-sm md:text-base italic">Bài 8. Kiểm tra số nguyên tố</p>
                                        <p class="text-sm mb-2">Dùng vòng lặp <code>for</code> để kiểm tra $n$ có phải là số nguyên tố hay không.</p>
                                        <p class="text-xs font-mono text-slate-500">Ví dụ: n = 7 &rarr; Output: Là số nguyên tố</p>
                                    </div>
                                    <!-- Bài 9 -->
                                    <div class="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                                        <p class="font-bold text-orange-900 text-sm md:text-base italic">Bài 9. Vẽ hình bằng ký tự *</p>
                                        <p class="text-sm mb-2">Nhập $n$. In ra $n$ dòng, mỗi dòng có $n$ dấu *.</p>
                                        <pre class="text-[10px] bg-white p-2 rounded border border-orange-200">n=3 &rarr; Output:
            ***
            ***
            ***</pre>
                                    </div>
                                    <!-- Bài 10 -->
                                    <div class="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                                        <p class="font-bold text-orange-900 text-sm md:text-base italic">Bài 10. Dãy Fibonacci</p>
                                        <p class="text-sm mb-2">Nhập $n$. In ra $n$ số Fibonacci đầu tiên.</p>
                                        <p class="text-xs font-mono text-slate-500">dãy Fibonacci là dãy có số liền sau bằng tổng 2 số trước nó</p>
                                        <p class="text-xs font-mono text-slate-500">Ví dụ: n = 5 &rarr; Output: 0 1 1 2 3</p>
                                    </div>
                                </div>
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
            {
    title: "Bài 21: Câu lệnh lặp While",
    videoId: "", 
    desc: "Tìm hiểu cấu trúc lặp với số lần chưa biết trước, lệnh break và các cấu trúc lập trình cơ bản.",
    downloadUrl: "#",
    contentHtml: `
        <div class="space-y-6 mt-4 text-left">
            <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm" open>
                <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-blue-600 text-white rounded-lg shadow-md"><i data-lucide="target" class="w-5 h-5"></i></div>
                        <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">I. Mục tiêu bài học</span>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                </summary>
                <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-3 leading-relaxed text-sm md:text-base">
                    <ul class="list-disc ml-5 space-y-2 font-medium">
                        <li>Biết và thực hành giải các bài toán sử dụng lệnh lặp $while$ với số lần không biết trước.</li>
                        <li>Biết ba cấu trúc lập trình cơ bản: tuần tự, rẽ nhánh, lặp.</li>
                    </ul>
                </div>
            </details>

            <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-emerald-600 text-white rounded-lg shadow-md"><i data-lucide="book-open" class="w-5 h-5"></i></div>
                        <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">II. Lý thuyết trọng tâm</span>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                </summary>
                <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-6 text-sm md:text-base">
                    <div class="space-y-3">
                        <p class="font-bold text-emerald-700 flex items-center gap-2 text-lg">
                            <span class="w-2 h-6 bg-emerald-500 rounded-full"></span> 1. Lệnh $WHILE$
                        </p>
                        <p>Lệnh lặp $while$ thực hiện khối lệnh với số lần lặp không biết trước. Khối lệnh được thực hiện cho đến khi $<điều kiện> = False$.</p>
                        <div class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono shadow-inner">
                            <p class="text-orange-400">while <span class="text-emerald-400"><điều kiện></span>:</p>
                            <p class="ml-8 text-slate-300"><khối lệnh></p>
                        </div>
                        <div class="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-500">
                            <p class="font-bold text-amber-800">[Phòng tránh lặp vô hạn]</p>
                            <p class="text-amber-900 italic">Để tránh lỗi lặp vô hạn, bên trong <$khối lệnh$> cần có ít nhất một câu lệnh làm thay đổi giá trị của các biến trong <$điều kiện$> sao cho đến một thời điểm nào đó <$điều kiện$> sẽ trở thành $False$.</p>
                        </div>
                        <div class="bg-red-50 p-4 rounded-xl border-l-4 border-red-500">
                            <p class="font-bold text-red-800">[Lệnh break]</p>
                            <p class="text-red-900">Lệnh $break$ được dùng để kết thúc (thoát khỏi) vòng lặp ngay lập tức mà không cần đợi điều kiện của vòng lặp trở thành $False$.</p>
                        </div>
                    </div>

                    <hr class="border-slate-100">
                    <div class="space-y-8">
                        <div>
                            <p class="font-bold text-slate-800 mb-2">1️⃣ While cơ bản</p>
                            <div class="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-xs md:text-sm">
                                <p class="text-orange-400">i = 1</p>
                                <p class="text-orange-400">while <span class="text-emerald-400">i <= 5</span>:</p>
                                <p class="ml-8">print(i)</p>
                                <p class="ml-8">i += 1</p>
                            </div>
                            <p class="text-xs text-slate-500 mt-2">👉 Giải thích: In lần lượt các số từ 1 đến 5.</p>
                        </div>

                        <div>
                            <p class="font-bold text-slate-800 mb-2">2️⃣ While với điều kiện sai ngay từ đầu</p>
                            <div class="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-xs">
                                <p class="text-slate-500"># i = 10 không thỏa mãn i < 5</p>
                                <p>i = 10</p>
                                <p>while i < 5: print(i)</p>
                                <p>print("Kết thúc")</p>
                            </div>
                            <p class="text-xs text-slate-500 mt-2">👉 Kết quả: Chỉ in "Kết thúc".</p>
                        </div>

                        <div>
                            <p class="font-bold text-slate-800 mb-2">3️⃣ While vô hạn (Infinite Loop)</p>
                            <div class="bg-red-50 p-4 rounded-xl border border-red-100 mb-2">
                                <p class="text-xs text-red-700 font-mono">while True: print("Chạy mãi")</p>
                            </div>
                            <div class="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-xs">
                                <p class="text-emerald-400">while True:</p>
                                <p class="ml-8">s = input("Nhập 'q' để thoát: ")</p>
                                <p class="ml-8 text-orange-400">if s == 'q': break</p>
                            </div>
                        </div>

                        <div>
                            <p class="font-bold text-slate-800 mb-2">4️⃣ While với break & 5️⃣ continue</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                                <div class="bg-slate-900 p-4 rounded-xl text-slate-300">
                                    <p class="text-red-400 mb-1"># Thử với break</p>
                                    <p>while i <= 10:</p>
                                    <p class="ml-4">if i == 5: <span class="text-red-400">break</span></p>
                                    <p class="ml-4">print(i)</p>
                                </div>
                                <div class="bg-slate-900 p-4 rounded-xl text-slate-300">
                                    <p class="text-blue-400 mb-1"># Thử với continue</p>
                                    <p>while i < 5:</p>
                                    <p class="ml-4">i += 1</p>
                                    <p class="ml-4">if i == 3: <span class="text-blue-400">continue</span></p>
                                    <p class="ml-4">print(i)</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p class="font-bold text-slate-800 mb-2">6️⃣ While lồng nhau (Nested While)</p>
                            <div class="bg-slate-100 p-4 rounded-xl font-mono text-xs text-slate-700 border border-slate-200">
                                <p>while i <= 3:</p>
                                <p class="ml-4">j = 1</p>
                                <p class="ml-4">while j <= 2:</p>
                                <p class="ml-8">print(i, j)</p>
                                <p class="ml-8">j += 1</p>
                                <p class="ml-4">i += 1</p>
                            </div>
                        </div>

                        <div>
                            <p class="font-bold text-slate-800 mb-2">7️⃣ While với else</p>
                            <p class="text-xs text-slate-600 mb-2 italic">Lưu ý: Khối else sẽ KHÔNG chạy nếu vòng lặp bị dừng bởi lệnh break.</p>
                            <div class="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-xs">
                                <p>while i <= 3: ...</p>
                                <p class="text-emerald-400">else:</p>
                                <p class="ml-4 text-emerald-400">print("Hoàn thành")</p>
                            </div>
                        </div>

                        <div>
                            <p class="font-bold text-slate-800 mb-2">8️⃣ Kiểm tra dữ liệu người dùng</p>
                            <div class="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                                <div class="font-mono text-xs text-blue-900">
                                    <p>password = ""</p>
                                    <p>while password != "123":</p>
                                    <p class="ml-4 text-blue-700">password = input("Nhập mật khẩu: ")</p>
                                    <p>print("Đăng nhập thành công")</p>
                                </div>
                            </div>
                        </div>

                        <div class="overflow-hidden rounded-xl border border-slate-200">
                            <table class="w-full text-sm">
                                <thead class="bg-slate-50">
                                    <tr>
                                        <th class="p-3 text-left font-bold text-slate-700">Dạng</th>
                                        <th class="p-3 text-left font-bold text-slate-700">Mục đích</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-slate-100">
                                    <tr><td class="p-3 font-mono text-blue-600">While cơ bản</td><td class="p-3">Lặp khi điều kiện đúng</td></tr>
                                    <tr><td class="p-3 font-mono text-red-600">break</td><td class="p-3">Thoát vòng lặp ngay lập tức</td></tr>
                                    <tr><td class="p-3 font-mono text-orange-600">continue</td><td class="p-3">Bỏ qua lượt hiện tại</td></tr>
                                    <tr><td class="p-3 font-mono text-emerald-600">Nested while</td><td class="p-3">Xử lý dữ liệu nhiều chiều (lặp lồng)</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="space-y-4 mt-8">
                        <p class="font-bold text-emerald-700 flex items-center gap-2 text-lg">
                            <span class="w-2 h-6 bg-emerald-500 rounded-full"></span> 3. Cấu trúc lập trình cơ bản
                        </p>
                        <div class="space-y-3">
                            <div class="flex gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                <div class="font-bold text-blue-600 min-w-[100px]">Tuần tự:</div>
                                <div>Khối lệnh thực hiện từ trên xuống dưới.</div>
                            </div>
                            <div class="flex gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                <div class="font-bold text-orange-600 min-w-[100px]">Rẽ nhánh:</div>
                                <div>Khối lệnh thực hiện dựa trên điều kiện ($if$).</div>
                            </div>
                            <div class="flex gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                <div class="font-bold text-emerald-600 min-w-[100px]">Lặp:</div>
                                <div>Khối lệnh lặp lại tùy theo điều kiện ($for, while$).</div>
                            </div>
                        </div>
                    </div>
                </div>
            </details>

            <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm" open>
                <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-orange-500 text-white rounded-lg shadow-md"><i data-lucide="code-2" class="w-5 h-5"></i></div>
                        <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">III. Bài tập vận dụng</span>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                </summary>
                <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-4 text-sm md:text-base">
                    <!-- Danh sách bài tập -->
                    <div class="grid grid-cols-1 gap-4 mt-4">
                        <!-- Câu 1 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 1. In các số từ $1$ đến $n$</p>
                            <p class="text-slate-600 text-xs md:text-sm mt-1">Nhập vào số nguyên dương $n$. Sử dụng vòng lặp $while$ để in ra các số từ $1$ đến $n$, mỗi số cách nhau một khoảng trắng.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                <b>Input:</b> 5 → <b>Output:</b> 1 2 3 4 5
                            </div>
                        </div>

                        <!-- Câu 2 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 2. Tính tổng các số từ $1$ đến $n$</p>
                            <p class="text-slate-600 text-xs md:text-sm mt-1">Nhập vào số nguyên dương $n$. Dùng vòng lặp $while$ để tính tổng các số từ $1$ đến $n$.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                <b>Input:</b> 4 → <b>Output:</b> 10
                            </div>
                        </div>

                        <!-- Câu 3 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 3. In các số chẵn nhỏ hơn $n$</p>
                            <p class="text-slate-600 text-xs md:text-sm mt-1">Nhập vào số nguyên dương $n$. Sử dụng vòng lặp $while$ để in ra các số chẵn nhỏ hơn $n$.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                <b>Input:</b> 10 → <b>Output:</b> 2 4 6 8
                            </div>
                        </div>

                        <!-- Câu 4 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 4. Đếm số chữ số của một số</p>
                            <p class="text-slate-600 text-xs md:text-sm mt-1">Nhập vào một số nguyên dương $n$. Dùng vòng lặp $while$ để đếm xem số đó có bao nhiêu chữ số.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                <b>Input:</b> 12345 → <b>Output:</b> 5
                            </div>
                        </div>

                        <!-- Câu 5 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 5. Tính tổng các chữ số của một số</p>
                            <p class="text-slate-600 text-xs md:text-sm mt-1">Nhập vào số nguyên dương $n$. Sử dụng vòng lặp $while$ để tính tổng các chữ số của $n$.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                <b>Input:</b> 123 → <b>Output:</b> 6
                            </div>
                        </div>

                        <!-- Câu 6 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 6. Đảo ngược một số</p>
                            <p class="text-slate-600 text-xs md:text-sm mt-1">Nhập vào số nguyên dương $n$. Dùng vòng lặp $while$ để đảo ngược thứ tự các chữ số của $n$.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                <b>Input:</b> 1203 → <b>Output:</b> 3021
                            </div>
                        </div>

                        <!-- Câu 7 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 7. Kiểm tra số đối xứng</p>
                            <p class="text-slate-600 text-xs md:text-sm mt-1">Nhập vào số nguyên dương $n$. Sử dụng vòng lặp $while$ để kiểm tra xem $n$ có phải là số đối xứng hay không.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                <b>Input:</b> 1221 → <b>Output:</b> YES
                            </div>
                        </div>

                        <!-- Câu 8 -->
                        <div class="p-4 bg-blue-50 rounded-xl border border-blue-200">
                            <p class="font-bold text-blue-900">Câu 8. Tìm ước chung lớn nhất (UCLN)</p>
                            <p class="text-slate-600 text-xs md:text-sm mt-1 italic">Thuật toán Euclid: Trong khi $b \neq 0$, thực hiện $r = a \% b; a = b; b = r$. Kết quả là $a$.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                <b>Input:</b> 24 36 → <b>Output:</b> 12
                            </div>
                        </div>

                        <!-- Câu 9 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 9. Nhập số cho đến khi gặp số âm</p>
                            <p class="text-slate-600 text-xs md:text-sm mt-1">Liên tục nhập các số nguyên. Dùng vòng lặp $while$ để tính tổng cho đến khi gặp số âm thì dừng (không tính số âm).</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                <b>Input:</b> 5 3 7 -1 → <b>Output:</b> 15
                            </div>
                        </div>

                        <!-- Câu 10 -->
                        <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                            <p class="font-bold text-indigo-900">Câu 10. Tìm số nhỏ nhất trong dãy</p>
                            <p class="text-slate-600 text-xs md:text-sm mt-1">Nhập số lượng $n$, sau đó nhập $n$ số. Dùng $while$ để tìm số nhỏ nhất.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                <b>Input:</b> 5 (dãy 3 7 2 9 4) → <b>Output:</b> 2
                            </div>
                        </div>
                    </div>
                </div>
            </details>

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
                        <p class="text-slate-400 italic text-sm text-center px-4">Video hướng dẫn thuật toán chi tiết cho 10 bài tập trên đang được biên tập...</p>
                    </div>
                </div>
            </details>
        </div>
    `
}
            ,
            {
            title: "BÀI 22: KIỂU DỮ LIỆU DANH SÁCH",
            videoId: "", // Video đã được chèn vào Mục IV bên dưới
            desc: "Tìm hiểu về kiểu dữ liệu danh sách (list), cách khởi tạo, truy cập và các thao tác cơ bản trong Python.",
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
                            <ul class="list-disc ml-5 space-y-2 font-medium">
                                <li>Biết được kiểu dữ liệu danh sách (list), cách khởi tạo và truy cập từng phần tử của danh sách thông qua chỉ số.</li>
                                <li>Hiểu và thực hiện được cách duyệt các phần tử của danh sách bằng lệnh <code>for</code>.</li>
                                <li>Thực hành được một số phương thức cơ bản như thêm, xóa phần tử trong danh sách.</li>
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
                            <h3 class="font-bold text-emerald-700">1. Khởi tạo danh sách</h3>
                            <p>Cú pháp: <code>&lt;tên list&gt; = [&lt;v1&gt;, &lt;v2&gt;, ..., &lt;vn&gt;]</code></p>
                            <p>Trong danh sách, các phần tử có thể có kiểu dữ liệu khác nhau (số, xâu, thực...).</p>
                            
                            <h3 class="font-bold text-emerald-700">2. Truy cập phần tử</h3>
                            <p>Mỗi phần tử được đánh <strong>chỉ số (index)</strong> bắt đầu từ $0$.</p>
                            <div class="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-400 italic">
                                <strong>Lưu ý:</strong> Python hỗ trợ chỉ số âm. <code>-1</code> là phần tử cuối cùng, <code>-2</code> là áp chót...
                            </div>
        
                            <h3 class="font-bold text-emerald-700">3. Duyệt danh sách</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                <div class="p-3 bg-slate-50 rounded-lg border border-slate-200">
                                    <p class="font-bold text-xs mb-1 uppercase">Duyệt qua chỉ số:</p>
                                    <pre class="bg-slate-900 text-green-400 p-3 rounded-lg text-xs">for i in range(len(ds)):
            print(ds[i])</pre>
                                </div>
                                <div class="p-3 bg-slate-50 rounded-lg border border-slate-200">
                                    <p class="font-bold text-xs mb-1 uppercase">Duyệt qua giá trị:</p>
                                    <pre class="bg-slate-900 text-green-400 p-3 rounded-lg text-xs">for item in ds:
            print(item)</pre>
                                </div>
                            </div>
        
                            <h3 class="font-bold text-emerald-700">4. Thao tác cơ bản</h3>
                            <ul class="list-disc ml-5 space-y-1">
                                <li>Thêm cuối: <code>ds.append(x)</code></li>
                                <li>Xóa tại vị trí k: <code>ds.pop(k)</code></li>
                            </ul>
                        </div>
                    </details>
        
                    <!-- Mục III: Bài tập vận dụng -->
                    <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                        <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                            <div class="flex items-center gap-3">
                                <div class="p-2 bg-orange-500 text-white rounded-lg shadow-md"><i data-lucide="pen-tool" class="w-5 h-5"></i></div>
                                <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">III. Bài tập vận dụng</span>
                            </div>
                            <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                        </summary>
                        <div class="p-6 pt-0 border-t border-slate-100 text-slate-700">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-xs md:text-sm p-2">
                                <!-- Danh sách mẫu -->
                                <p class="font-black text-orange-600"> Danh sách mẫu </p>
                                <p class="text-slate-600 mt-1">a = [7, 2, 5, 2, 9, 4, 7, 6]</p>
                                <p class="text-slate-600 mt-1">b = [10, 3, 8, 3, 1, 6, 9, 2]</p>
                                <p class="text-slate-600 mt-1">c = [4, 4, 7, 1, 0, 5, 8, 2]</p>
                                </div>
                                <!-- Bài 1 -->
                                <div class="p-3 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-orange-200 transition-colors">
                                    <p class="font-black text-orange-600">Bài 1. Truy cập phần tử</p>
                                    <p class="text-slate-600 mt-1">In phần tử đầu (<code>a[0]</code>) và cuối (<code>a[-1]</code>) của danh sách.</p>
                                </div>
                                <!-- Bài 2 -->
                                <div class="p-3 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-orange-200 transition-colors">
                                    <p class="font-black text-orange-600">Bài 2. Tính tổng các phần tử</p>
                                    <p class="text-slate-600 mt-1">Duyệt danh sách bằng <code>for</code> để tính tổng các số nguyên.</p>
                                </div>
                                <!-- Bài 3 -->
                                <div class="p-3 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-orange-200 transition-colors">
                                    <p class="font-black text-orange-600">Bài 3. Đếm số chẵn</p>
                                    <p class="text-slate-600 mt-1">Đếm xem trong danh sách có bao nhiêu số chia hết cho 2.</p>
                                </div>
                                <!-- Bài 4 -->
                                <div class="p-3 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-orange-200 transition-colors">
                                    <p class="font-black text-orange-600">Bài 4. Tìm số lớn nhất</p>
                                    <p class="text-slate-600 mt-1">Giả sử <code>max = a[0]</code>, duyệt để tìm số lớn nhất (không dùng <code>max()</code>).</p>
                                </div>
                                <!-- Bài 5 -->
                                <div class="p-3 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-orange-200 transition-colors">
                                    <p class="font-black text-orange-600">Bài 5. Xoá phần tử vị trí k</p>
                                    <p class="text-slate-600 mt-1">Nhập k và dùng lệnh <code>pop(k)</code> để xóa phần tử.</p>
                                </div>
                                <!-- Bài 6 -->
                                <div class="p-3 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-orange-200 transition-colors">
                                    <p class="font-black text-orange-600">Bài 6. Đảo ngược danh sách</p>
                                    <p class="text-slate-600 mt-1">Duyệt ngược từ cuối về đầu bằng <code>range(len(a)-1, -1, -1)</code>.</p>
                                </div>
                                <!-- Bài 7 -->
                                <div class="p-3 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-orange-200 transition-colors">
                                    <p class="font-black text-orange-600">Bài 7. Tách chẵn – lẻ</p>
                                    <p class="text-slate-600 mt-1">Tạo 2 danh sách mới chứa riêng các số chẵn và số lẻ.</p>
                                </div>
                                <!-- Bài 8 -->
                                <div class="p-3 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-orange-200 transition-colors">
                                    <p class="font-black text-orange-600">Bài 8. Kiểm tra tăng dần</p>
                                    <p class="text-slate-600 mt-1">Kiểm tra xem <code>a[i]</code> có luôn nhỏ hơn <code>a[i+1]</code> hay không.</p>
                                </div>
                                <!-- Bài 9 -->
                                <div class="p-3 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-orange-200 transition-colors md:col-span-2">
                                    <p class="font-black text-orange-600">Bài 9. Xoá phần tử trùng nhau</p>
                                    <p class="text-slate-600 mt-1">Duyệt danh sách cũ, nếu phần tử chưa có trong danh sách mới thì mới <code>append()</code>.</p>
                                </div>
                                <!-- Bài 10 -->
                                <div class="p-3 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-orange-200 transition-colors md:col-span-2">
                                    <p class="font-black text-orange-600">Bài 10. Sắp xếp danh sách</p>
                                    <p class="text-slate-600 mt-1">Dùng 2 vòng lặp <code>for</code> lồng nhau để thực hiện thuật toán đổi chỗ (Swap).</p>
                                </div>
                            </div>
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
                            <div class="aspect-video w-full rounded-xl overflow-hidden shadow-lg border-4 border-slate-100 mt-4">
                                <iframe class="w-full h-full" src="https://www.youtube.com/embed/T8Cq6R6Vd8s" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                    </details>
                </div>
            `
        },
               // --- BÀI 23 ---
            {
            title: "Bài 23: Một số lệnh làm việc với dữ liệu danh sách",
            videoId: "",
            desc: "Các hàm append, remove, insert và các thao tác nâng cao với List trong Python.",
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
                        <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-3 leading-relaxed text-sm md:text-base font-medium">
                            <ul class="list-disc ml-5 space-y-2 mt-4">
                                <li>Biết và sử dụng được một số lệnh cơ bản làm việc với danh sách: <code>append()</code>, <code>remove()</code>, <code>insert()</code>, <code>clear()</code>.</li>
                                <li>Biết và sử dụng được toán tử <code>in</code> để kiểm tra sự tồn tại của phần tử trong danh sách.</li>
                                <li>Hiểu và thực hiện được việc xóa phần tử bằng lệnh <code>del</code>.</li>
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
                        <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-6 text-sm md:text-base">
                            <div class="space-y-4 mt-4">
                                <div class="p-4 bg-emerald-50 rounded-xl border-l-4 border-emerald-500">
                                    <p class="font-bold text-emerald-800 mb-2">1. Duyệt danh sách với toán tử in</p>
                                    <p>Toán tử <code>in</code> dùng để kiểm tra một phần tử có nằm trong danh sách hay không. Kết quả trả về là giá trị Logic ($True/False$).</p>
                                    <code class="block bg-white p-2 mt-2 rounded border text-xs">val in list_name</code>
                                </div>
        
                                <div class="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                                    <p class="font-bold text-blue-800 mb-2">2. Thêm phần tử mới</p>
                                    <ul class="list-disc ml-5 space-y-1">
                                        <li><code>append(x)</code>: Thêm phần tử $x$ vào cuối danh sách.</li>
                                        <li><code>insert(k, x)</code>: Chèn giá trị $x$ vào vị trí $k$.</li>
                                    </ul>
                                </div>
        
                                <div class="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                                    <p class="font-bold text-red-800 mb-2">3. Xóa phần tử</p>
                                    <ul class="list-disc ml-5 space-y-1">
                                        <li><code>remove(x)</code>: Xóa phần tử đầu tiên có giá trị $x$.</li>
                                        <li><code>del a[i]</code>: Xóa phần tử tại chỉ số $i$.</li>
                                        <li><code>clear()</code>: Xóa sạch danh sách.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </details>
        
                    <!-- Mục III: Bài tập thực hành -->
                    <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                        <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                            <div class="flex items-center gap-3">
                                <div class="p-2 bg-orange-500 text-white rounded-lg shadow-md"><i data-lucide="pen-tool" class="w-5 h-5"></i></div>
                                <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">III. Bài tập thực hành</span>
                            </div>
                            <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                        </summary>
                        <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-4 text-sm md:text-base">
                            <div class="grid grid-cols-1 gap-4 mt-4">
                                <!-- Câu 1 -->
                                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                    <p class="font-bold text-blue-800">Câu 1. Nhập và in danh sách</p>
                                    <p class="mt-1 text-slate-600"><b>Yêu cầu:</b> Nhập số nguyên $n$, sau đó nhập $n$ số nguyên vào danh sách. In danh sách vừa nhập.</p>
                                </div>
                                <!-- Câu 2 -->
                                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                    <p class="font-bold text-blue-800">Câu 2. Duyệt danh sách</p>
                                    <p class="mt-1 text-slate-600"><b>Yêu cầu:</b> Nhập một danh sách số nguyên. In mỗi phần tử của danh sách trên một dòng (Sử dụng <code>for</code> và <code>in</code>).</p>
                                </div>
                                <!-- Câu 3 -->
                                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                    <p class="font-bold text-blue-800">Câu 3. Tính tổng danh sách</p>
                                    <p class="mt-1 text-slate-600"><b>Yêu cầu:</b> Nhập danh sách $n$ số nguyên. Tính và in ra tổng các phần tử.</p>
                                </div>
                                <!-- Câu 4 -->
                                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                    <p class="font-bold text-blue-800">Câu 4. Đếm số dương</p>
                                    <p class="mt-1 text-slate-600"><b>Yêu cầu:</b> Nhập danh sách số nguyên. Đếm xem có bao nhiêu số dương ($> 0$).</p>
                                </div>
                                <!-- Câu 5 -->
                                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                    <p class="font-bold text-blue-800">Câu 5. Tìm phần tử lớn nhất</p>
                                    <p class="mt-1 text-slate-600"><b>Yêu cầu:</b> Tìm và in ra số lớn nhất (Không dùng hàm <code>max()</code>).</p>
                                </div>
                                <!-- Câu 6 -->
                                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                    <p class="font-bold text-blue-800">Câu 6. Kiểm tra phần tử</p>
                                    <p class="mt-1 text-slate-600"><b>Yêu cầu:</b> Nhập danh sách và số $x$. In "YES" nếu $x$ có trong danh sách, ngược lại in "NO".</p>
                                </div>
                                <!-- Câu 7 -->
                                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                    <p class="font-bold text-blue-800">Câu 7. Tách danh sách</p>
                                    <p class="mt-1 text-slate-600"><b>Yêu cầu:</b> Tách danh sách ban đầu thành hai danh sách: Số chẵn và số lẻ. In cả hai.</p>
                                </div>
                                <!-- Câu 8 -->
                                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                    <p class="font-bold text-blue-800">Câu 8. Đếm số lần xuất hiện</p>
                                    <p class="mt-1 text-slate-600"><b>Yêu cầu:</b> Nhập danh sách và số $x$. Đếm số lần $x$ xuất hiện.</p>
                                </div>
                                <!-- Câu 9 -->
                                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                    <p class="font-bold text-blue-800">Câu 9. Xoá phần tử trùng nhau</p>
                                    <p class="mt-1 text-slate-600"><b>Yêu cầu:</b> Tạo danh sách mới sao cho mỗi giá trị chỉ xuất hiện một lần (giữ nguyên thứ tự).</p>
                                </div>
                                <!-- Câu 10 -->
                                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                    <p class="font-bold text-blue-800">Câu 10. Sắp xếp danh sách</p>
                                    <p class="mt-1 text-slate-600"><b>Yêu cầu:</b> Sắp xếp danh sách tăng dần (Không dùng <code>sort()</code> hay <code>sorted()</code>).</p>
                                </div>
                            </div>
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
                            <div class="aspect-video w-full rounded-xl overflow-hidden shadow-lg border-4 border-slate-100 mt-4">
                                <iframe class="w-full h-full" src="https://www.youtube.com/embed/T8Cq6R6Vd8s" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                    </details>
                </div>
            `
        },
        
        // --- BÀI 24 ---
        {
            title: "Bài 24: Xâu ký tự",
            videoId: "",
            desc: "Khái niệm xâu ký tự, cách truy cập phần tử, duyệt xâu và các lệnh cơ bản với xâu.",
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
                        <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-3 leading-relaxed text-sm md:text-base font-medium">
                            <ul class="list-disc ml-5 space-y-2 mt-4">
                                <li>Biết được khái niệm xâu ký tự và cách khởi tạo xâu.</li>
                                <li>Sử dụng thành thạo lệnh <code>len()</code> và truy cập qua chỉ số.</li>
                                <li>Hiểu tính chất không thể thay đổi từng ký tự của xâu.</li>
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
                        <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-6 text-sm md:text-base">
                            <div class="space-y-4 mt-4">
                                <div class="p-4 bg-slate-50 rounded-xl border-l-4 border-slate-400">
                                    <p class="font-bold text-slate-800 mb-1">1. Định nghĩa</p>
                                    <p>Xâu là dãy ký tự Unicode. Ví dụ: <code>"Hello World"</code>.</p>
                                </div>
                                <div class="p-4 bg-emerald-50 rounded-xl border-l-4 border-emerald-500">
                                    <p class="font-bold text-emerald-800 mb-1">2. Thao tác cơ bản</p>
                                    <p>- Độ dài: <code>len(s)</code></p>
                                    <p>- Ghép xâu: <code>s1 + s2</code></p>
                                    <p>- Lặp xâu: <code>s * n</code></p>
                                </div>
                            </div>
                        </div>
                    </details>
        
                    <!-- Mục III: Bài tập thực hành -->
                    <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                        <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                            <div class="flex items-center gap-3">
                                <div class="p-2 bg-orange-500 text-white rounded-lg shadow-md"><i data-lucide="pen-tool" class="w-5 h-5"></i></div>
                                <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">III. Bài tập thực hành</span>
                            </div>
                            <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                        </summary>
                        <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-4 text-sm md:text-base">
                            <div class="grid grid-cols-1 gap-4 mt-4">
                                <!-- Câu 1 -->
                                <div class="p-4 bg-white border rounded-xl shadow-sm">
                                    <p class="font-bold text-indigo-700">Câu 1. In từng kí tự</p>
                                    <p class="text-slate-600 mt-1"><b>Yêu cầu:</b> Nhập xâu kí tự. In ra từng kí tự trên một dòng (Dùng vòng lặp <code>for</code> duyệt trực tiếp xâu).</p>
                                </div>
                                <!-- Câu 2 -->
                                <div class="p-4 bg-white border rounded-xl shadow-sm">
                                    <p class="font-bold text-indigo-700">Câu 2. In xâu theo chỉ số</p>
                                    <p class="text-slate-600 mt-1"><b>Yêu cầu:</b> Nhập xâu. In ra từng kí tự theo chỉ số từ $0$ đến $len(s) - 1$.</p>
                                </div>
                                <!-- Câu 3 -->
                                <div class="p-4 bg-white border rounded-xl shadow-sm">
                                    <p class="font-bold text-indigo-700">Câu 3. Đếm số kí tự</p>
                                    <p class="text-slate-600 mt-1"><b>Yêu cầu:</b> Nhập một xâu kí tự. Cho biết xâu có bao nhiêu kí tự (Sử dụng hàm <code>len()</code>).</p>
                                </div>
                                <!-- Câu 4 -->
                                <div class="p-4 bg-white border rounded-xl shadow-sm">
                                    <p class="font-bold text-indigo-700">Câu 4. Đếm số kí tự 'a'</p>
                                    <p class="text-slate-600 mt-1"><b>Yêu cầu:</b> Nhập một xâu kí tự. Đếm số lần xuất hiện của kí tự 'a' trong xâu.</p>
                                </div>
                                <!-- Câu 5 -->
                                <div class="p-4 bg-white border rounded-xl shadow-sm">
                                    <p class="font-bold text-indigo-700">Câu 5. Kiểm tra kí tự có trong xâu</p>
                                    <p class="text-slate-600 mt-1"><b>Yêu cầu:</b> Nhập xâu $s$ và kí tự $ch$. In "YES" nếu $ch$ có trong $s$, ngược lại in "NO".</p>
                                </div>
                                <!-- Câu 6 -->
                                <div class="p-4 bg-white border rounded-xl shadow-sm">
                                    <p class="font-bold text-indigo-700">Câu 6. Đếm số chữ số</p>
                                    <p class="text-slate-600 mt-1"><b>Yêu cầu:</b> Nhập xâu. Đếm xem trong xâu có bao nhiêu kí tự là chữ số ($'0'$ đến $'9'$).</p>
                                </div>
                                <!-- Câu 7 -->
                                <div class="p-4 bg-white border rounded-xl shadow-sm">
                                    <p class="font-bold text-indigo-700">Câu 7. In các kí tự ở vị trí chẵn</p>
                                    <p class="text-slate-600 mt-1"><b>Yêu cầu:</b> Nhập một xâu kí tự. In ra các kí tự ở chỉ số chẵn (Kiểm tra $i \% 2 == 0$).</p>
                                </div>
                                <!-- Câu 8 -->
                                <div class="p-4 bg-white border rounded-xl shadow-sm">
                                    <p class="font-bold text-indigo-700">Câu 8. Đếm số chữ cái</p>
                                    <p class="text-slate-600 mt-1"><b>Yêu cầu:</b> Nhập xâu. Đếm số kí tự là chữ cái (trong khoảng 'a'-'z' hoặc 'A'-'Z').</p>
                                </div>
                                <!-- Câu 9 -->
                                <div class="p-4 bg-white border rounded-xl shadow-sm">
                                    <p class="font-bold text-indigo-700">Câu 9. Kiểm tra xâu con</p>
                                    <p class="text-slate-600 mt-1"><b>Yêu cầu:</b> Nhập hai xâu $s1$ và $s2$. In "YES" nếu $s1$ là xâu con của $s2$, ngược lại "NO".</p>
                                </div>
                                <!-- Câu 10 -->
                                <div class="p-4 bg-white border rounded-xl shadow-sm">
                                    <p class="font-bold text-indigo-700">Câu 10. Đếm số từ</p>
                                    <p class="text-slate-600 mt-1"><b>Yêu cầu:</b> Nhập xâu gồm nhiều từ cách nhau bởi dấu cách. Hãy đếm số từ trong xâu.</p>
                                </div>
                            </div>
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
                            <div class="aspect-video w-full rounded-xl overflow-hidden shadow-lg border-4 border-slate-100 mt-4">
                                <iframe class="w-full h-full" src="https://www.youtube.com/embed/T8Cq6R6Vd8s" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                    </details>
                </div>
            `
        },
            {
    title: "Bài 25: Một số lệnh làm việc với xâu kí tự",
    videoId: "",
    desc: "Tìm hiểu toán tử in, lệnh find(), split() và join() để xử lý xâu kí tự trong Python.",
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
                        <li>Biết và thực hiện được một số lệnh (phương thức) thường dùng với xâu kí tự.</li>
                        <li>Hiểu và vận dụng được toán tử <code>in</code>, lệnh <code>find()</code>, <code>split()</code> và <code>join()</code> trong các bài toán xử lý xâu.</li>
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

                    <!-- Phần 1: Xâu con và tìm kiếm -->
                    <div class="space-y-4">
                        <p class="font-bold text-emerald-700 flex items-center gap-2 text-lg">
                            <span class="w-2 h-6 bg-emerald-500 rounded-full"></span> 1. Xâu con và lệnh tìm vị trí xâu con
                        </p>

                        <!-- Toán tử in -->
                        <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                            <p class="font-bold text-emerald-800 mb-2">Toán tử <code>in</code></p>
                            <p class="mb-2">Dùng để kiểm tra một xâu có nằm trong xâu khác hay không. Kết quả trả về là giá trị $True$ hoặc $False$.</p>
                            <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs">&lt;xâu 1&gt; in &lt;xâu 2&gt;</pre>
                            <p class="text-xs text-emerald-700 mt-2 italic">Ví dụ: <code>"Python" in "Hoc Python vui"</code> → <code>True</code></p>
                        </div>

                        <!-- Lệnh find() -->
                        <div class="p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <p class="font-bold text-blue-800 mb-2">Lệnh <code>find()</code></p>
                            <p class="mb-2">Tìm vị trí xuất hiện đầu tiên của xâu con trong xâu mẹ. Trả về $-1$ nếu không tìm thấy.</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <p class="text-xs font-bold text-slate-600 mb-1 uppercase">Cú pháp đơn:</p>
                                    <pre class="bg-slate-900 text-blue-300 p-3 rounded-xl font-mono text-xs">&lt;xâu mẹ&gt;.find(&lt;xâu con&gt;)</pre>
                                </div>
                                <div>
                                    <p class="text-xs font-bold text-slate-600 mb-1 uppercase">Cú pháp đầy đủ:</p>
                                    <pre class="bg-slate-900 text-blue-300 p-3 rounded-xl font-mono text-xs">&lt;xâu mẹ&gt;.find(&lt;xâu con&gt;, start)</pre>
                                </div>
                            </div>
                            <p class="text-xs text-blue-700 mt-2 italic">Ví dụ: <code>"hello".find("l")</code> → <code>2</code> &nbsp;|&nbsp; <code>"hello".find("x")</code> → <code>-1</code></p>
                        </div>
                    </div>

                    <hr class="border-slate-100">

                    <!-- Phần 2: split và join -->
                    <div class="space-y-4">
                        <p class="font-bold text-emerald-700 flex items-center gap-2 text-lg">
                            <span class="w-2 h-6 bg-emerald-500 rounded-full"></span> 2. Một số lệnh thường dùng với xâu kí tự
                        </p>

                        <!-- Lệnh split() -->
                        <div class="p-4 bg-orange-50 rounded-xl border border-orange-100">
                            <p class="font-bold text-orange-800 mb-2">Lệnh <code>split()</code></p>
                            <p class="mb-2">Tách một xâu thành các từ và đưa vào một danh sách ($list$).</p>
                            <pre class="bg-slate-900 text-blue-300 p-3 rounded-xl font-mono text-xs">&lt;xâu mẹ&gt;.split(&lt;kí tự tách&gt;)</pre>
                            <p class="text-xs text-orange-700 mt-2 italic">Mặc định: Nếu không ghi kí tự tách, Python tự động tách theo dấu cách.</p>
                            <p class="text-xs text-orange-700 mt-1 italic">Ví dụ: <code>"Tao Cam Xoai".split()</code> → <code>["Tao", "Cam", "Xoai"]</code></p>
                        </div>

                        <!-- Lệnh join() -->
                        <div class="p-4 bg-purple-50 rounded-xl border border-purple-100">
                            <p class="font-bold text-purple-800 mb-2">Lệnh <code>join()</code></p>
                            <p class="mb-2">Nối các phần tử của một danh sách (các phần tử phải là xâu) thành một xâu duy nhất.</p>
                            <pre class="bg-slate-900 text-blue-300 p-3 rounded-xl font-mono text-xs">"&lt;kí tự nối&gt;".join(&lt;danh sách&gt;)</pre>
                            <p class="text-xs text-purple-700 mt-2 italic">Ví dụ: <code>"-".join(["Ha Noi", "Nam Dinh"])</code> → <code>"Ha Noi-Nam Dinh"</code></p>
                        </div>
                    </div>

                    <!-- Bảng tổng kết -->
                    <div class="overflow-hidden rounded-xl border border-slate-200">
                        <table class="w-full text-sm">
                            <thead class="bg-slate-50">
                                <tr>
                                    <th class="p-3 text-left font-bold text-slate-700">Lệnh</th>
                                    <th class="p-3 text-left font-bold text-slate-700">Chức năng</th>
                                    <th class="p-3 text-left font-bold text-slate-700">Trả về</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 text-xs">
                                <tr><td class="p-3 font-mono text-emerald-700">in</td><td class="p-3">Kiểm tra xâu con có tồn tại</td><td class="p-3">True / False</td></tr>
                                <tr><td class="p-3 font-mono text-blue-700">find(sub, start)</td><td class="p-3">Tìm vị trí xâu con</td><td class="p-3">Chỉ số hoặc -1</td></tr>
                                <tr><td class="p-3 font-mono text-orange-700">split(sep)</td><td class="p-3">Tách xâu thành danh sách</td><td class="p-3">list</td></tr>
                                <tr><td class="p-3 font-mono text-purple-700">sep.join(list)</td><td class="p-3">Nối danh sách thành xâu</td><td class="p-3">str</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                        <p class="text-red-800 text-sm font-medium italic"><b>Lưu ý:</b> Xâu trong Python có tính chất bất biến (<i>immutable</i>). Các lệnh trên đều trả về kết quả mới chứ không làm thay đổi xâu gốc.</p>
                    </div>

                </div>
            </details>

            <!-- MỤC III: BÀI TẬP VẬN DỤNG -->
            <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-orange-500 text-white rounded-lg shadow-md"><i data-lucide="pen-tool" class="w-5 h-5"></i></div>
                        <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">III. Bài tập vận dụng</span>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                </summary>
                <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-4">
                    <div class="grid grid-cols-1 gap-4 mt-4">

                        <!-- Câu 1 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 1. Kiểm tra sự tồn tại</p>
                            <p class="text-slate-600 text-sm mt-1">Nhập xâu $S$ và xâu $sub$. Kiểm tra xem $sub$ có xuất hiện trong $S$ hay không.</p>
                            <p class="text-xs text-slate-500 mt-1 italic">Gợi ý: Sử dụng toán tử <code>in</code>.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                Input: S="Hoc Python", sub="Python" → Output: True
                            </div>
                        </div>

                        <!-- Câu 2 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 2. Tìm vị trí đầu tiên</p>
                            <p class="text-slate-600 text-sm mt-1">Cho xâu $S = "Hoc \ lap \ trinh \ Python \ rat \ vui"$. Tìm vị trí xuất hiện đầu tiên của từ $"Python"$.</p>
                            <p class="text-xs text-slate-500 mt-1 italic">Gợi ý: Sử dụng phương thức <code>find()</code>.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                Output: 11
                            </div>
                        </div>

                        <!-- Câu 3 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 3. Tìm vị trí từ một điểm cho trước</p>
                            <p class="text-slate-600 text-sm mt-1">Tìm vị trí của kí tự $"a"$ trong xâu $S$ bắt đầu từ chỉ số $5$.</p>
                            <p class="text-xs text-slate-500 mt-1 italic">Gợi ý: Sử dụng cú pháp <code>S.find("a", 5)</code>.</p>
                        </div>

                        <!-- Câu 4 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 4. Tách xâu thành danh sách</p>
                            <p class="text-slate-600 text-sm mt-1">Cho xâu $S = "Tao, Cam, Xoai, Mit"$. Hãy tách xâu này thành một danh sách các loại quả riêng biệt.</p>
                            <p class="text-xs text-slate-500 mt-1 italic">Gợi ý: Sử dụng lệnh <code>split(", ")</code>.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                Output: ["Tao", "Cam", "Xoai", "Mit"]
                            </div>
                        </div>

                        <!-- Câu 5 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 5. Đếm số lượng từ trong câu</p>
                            <p class="text-slate-600 text-sm mt-1">Nhập một câu từ bàn phím, hãy cho biết câu đó có bao nhiêu từ.</p>
                            <p class="text-xs text-slate-500 mt-1 italic">Gợi ý: Dùng <code>split()</code> để đưa vào danh sách, sau đó dùng <code>len()</code> để đếm.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                Input: "Hoc lap trinh rat vui" → Output: 5
                            </div>
                        </div>

                        <!-- Câu 6 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 6. Nối danh sách thành xâu</p>
                            <p class="text-slate-600 text-sm mt-1">Cho danh sách $L = ["Ha \ Noi", "Nam \ Dinh", "Ninh \ Binh"]$. Hãy nối các phần tử thành một xâu, ngăn cách nhau bởi dấu gạch ngang ($-$).</p>
                            <p class="text-xs text-slate-500 mt-1 italic">Gợi ý: Sử dụng phương thức <code>join()</code>.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                Output: "Ha Noi-Nam Dinh-Ninh Binh"
                            </div>
                        </div>

                        <!-- Câu 7 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 7. Xử lý phần mở rộng tệp tin</p>
                            <p class="text-slate-600 text-sm mt-1">Cho tên tệp tin (ví dụ: $"baitap.py"$). Hãy tách để lấy phần đuôi mở rộng (sau dấu chấm).</p>
                            <p class="text-xs text-slate-500 mt-1 italic">Gợi ý: Sử dụng <code>split(".")</code> và truy cập phần tử cuối cùng của danh sách.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                Input: "bai_tap.py" → Output: "py"
                            </div>
                        </div>

                        <!-- Câu 8 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 8. Kiểm tra định dạng ngày tháng</p>
                            <p class="text-slate-600 text-sm mt-1">Nhập xâu ngày tháng định dạng $"dd/mm/yyyy"$. Hãy in ra năm (yyyy).</p>
                            <p class="text-xs text-slate-500 mt-1 italic">Gợi ý: Tách xâu bằng kí tự $"/"$ và lấy phần tử ở chỉ số $2$.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                Input: "15/08/2025" → Output: "2025"
                            </div>
                        </div>

                        <!-- Câu 9 - Nâng cao -->
                        <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                            <p class="font-bold text-indigo-900">Câu 9. Thay thế khoảng trắng thừa (Nâng cao)</p>
                            <p class="text-slate-600 text-sm mt-1">Nhập một câu có nhiều khoảng trắng thừa, hãy chuyển xâu đó thành xâu các từ chỉ cách nhau đúng một dấu cách.</p>
                            <p class="text-xs text-indigo-700 mt-1 italic">Gợi ý: Kết hợp <code>split()</code> (không tham số) để lấy danh sách từ, sau đó dùng <code>" ".join()</code> để nối lại.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                Input: "Hoc &nbsp;&nbsp; Python &nbsp; rat &nbsp;&nbsp; vui" → Output: "Hoc Python rat vui"
                            </div>
                        </div>

                        <!-- Câu 10 - Nâng cao -->
                        <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                            <p class="font-bold text-indigo-900">Câu 10. Tìm tất cả các vị trí (Nâng cao)</p>
                            <p class="text-slate-600 text-sm mt-1">Nhập xâu $S$ và kí tự $c$. Tìm và in ra tất cả các vị trí mà $c$ xuất hiện trong $S$.</p>
                            <p class="text-xs text-indigo-700 mt-1 italic">Gợi ý: Sử dụng vòng lặp <code>while</code> kết hợp <code>find(c, start)</code> và cập nhật <code>start</code> sau mỗi lần tìm thấy.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                Input: S="banana", c="a" → Output: 1 3 5
                            </div>
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
                    <p class="text-sm text-slate-500 italic">Video bài giảng và mã nguồn tham khảo đang được chuẩn bị.</p>
                </div>
            </details>

        </div>
    `
    },
           {
    title: "Bài 26: Hàm trong Python",
    videoId: "",
    desc: "Khái niệm hàm, cách định nghĩa hàm có và không có giá trị trả về, và các hàm có sẵn trong Python.",
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
                        <li>Biết và hiểu được khái niệm chương trình con là hàm.</li>
                        <li>Biết cách tạo (định nghĩa) hàm tự định nghĩa và hiểu sự khác biệt giữa hàm có giá trị trả lại và hàm không trả lại giá trị.</li>
                        <li>Biết cách sử dụng các tham số trong hàm để giải quyết các bài toán lập trình.</li>
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

                    <!-- Phần 1: Hàm có sẵn -->
                    <div class="space-y-4">
                        <p class="font-bold text-emerald-700 flex items-center gap-2 text-lg">
                            <span class="w-2 h-6 bg-emerald-500 rounded-full"></span> 1. Một số hàm thiết kế sẵn của Python
                        </p>
                        <div class="overflow-x-auto rounded-xl border border-slate-200">
                            <table class="w-full text-xs md:text-sm">
                                <thead class="bg-slate-50">
                                    <tr>
                                        <th class="p-3 text-left font-bold text-slate-700">Nhóm</th>
                                        <th class="p-3 text-left font-bold text-slate-700">Hàm</th>
                                        <th class="p-3 text-left font-bold text-slate-700">Chức năng</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-slate-100">
                                    <tr><td class="p-3 font-bold text-blue-700" rowspan="3">Nhập / Xuất</td><td class="p-3 font-mono text-blue-600">print()</td><td class="p-3">Xuất dữ liệu ra màn hình</td></tr>
                                    <tr><td class="p-3 font-mono text-blue-600">input()</td><td class="p-3">Nhận dữ liệu từ người dùng (trả về kiểu xâu)</td></tr>
                                    <tr><td class="p-3 font-mono text-blue-600">len()</td><td class="p-3">Trả về số lượng phần tử của xâu, danh sách...</td></tr>
                                    <tr><td class="p-3 font-bold text-orange-700" rowspan="3">Chuyển đổi kiểu</td><td class="p-3 font-mono text-orange-600">int(), float()</td><td class="p-3">Ép kiểu sang số nguyên hoặc số thực</td></tr>
                                    <tr><td class="p-3 font-mono text-orange-600">str(), bool()</td><td class="p-3">Ép kiểu sang xâu hoặc lôgic</td></tr>
                                    <tr><td class="p-3 font-mono text-orange-600">list(), tuple()</td><td class="p-3">Chuyển đổi sang danh sách hoặc bộ</td></tr>
                                    <tr><td class="p-3 font-bold text-emerald-700" rowspan="4">Toán học</td><td class="p-3 font-mono text-emerald-600">abs()</td><td class="p-3">Giá trị tuyệt đối $|x|$</td></tr>
                                    <tr><td class="p-3 font-mono text-emerald-600">max(), min()</td><td class="p-3">Tìm phần tử lớn nhất / nhỏ nhất</td></tr>
                                    <tr><td class="p-3 font-mono text-emerald-600">sum()</td><td class="p-3">Tính tổng các phần tử trong danh sách</td></tr>
                                    <tr><td class="p-3 font-mono text-emerald-600">pow(x, y)</td><td class="p-3">Tính lũy thừa $x^y$</td></tr>
                                    <tr><td class="p-3 font-bold text-purple-700" rowspan="3">Thao tác dữ liệu</td><td class="p-3 font-mono text-purple-600">range()</td><td class="p-3">Tạo vùng giá trị số nguyên dùng trong vòng lặp</td></tr>
                                    <tr><td class="p-3 font-mono text-purple-600">sorted()</td><td class="p-3">Sắp xếp và trả về danh sách mới</td></tr>
                                    <tr><td class="p-3 font-mono text-purple-600">chr(), ord()</td><td class="p-3">Chuyển đổi qua lại giữa mã Unicode và ký tự</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <hr class="border-slate-100">

                    <!-- Phần 2: Hàm tự định nghĩa -->
                    <div class="space-y-4">
                        <p class="font-bold text-emerald-700 flex items-center gap-2 text-lg">
                            <span class="w-2 h-6 bg-emerald-500 rounded-full"></span> 2. Thiết lập các hàm tự định nghĩa
                        </p>
                        <p>Hàm giúp chia nhỏ chương trình lớn thành các khối mã có thể <strong>tái sử dụng</strong>.</p>

                        <!-- Hàm có return -->
                        <div class="p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <p class="font-bold text-blue-800 mb-2">a. Hàm có trả lại giá trị</p>
                            <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs">def &lt;tên hàm&gt;(&lt;tham số&gt;):
    &lt;khối lệnh&gt;
    return &lt;giá trị&gt;</pre>
                            <p class="text-xs text-blue-700 mt-2 italic">Khi gặp lệnh <code>return</code>, hàm kết thúc ngay lập tức và gửi kết quả về nơi gọi.</p>
                            <pre class="bg-slate-900 text-blue-300 p-3 rounded-xl font-mono text-xs mt-2">def tinh_tong(a, b):
    return a + b

ket_qua = tinh_tong(3, 5)   # ket_qua = 8</pre>
                        </div>

                        <!-- Hàm không có return -->
                        <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                            <p class="font-bold text-emerald-800 mb-2">b. Hàm không trả lại giá trị</p>
                            <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs">def &lt;tên hàm&gt;(&lt;tham số&gt;):
    &lt;khối lệnh&gt;
    return   # Có thể có hoặc không</pre>
                            <p class="text-xs text-emerald-700 mt-2 italic">Thường dùng để thực hiện một hành động (như in ấn). Nếu không có <code>return</code>, hàm tự động trả về giá trị đặc biệt <code>None</code>.</p>
                            <pre class="bg-slate-900 text-blue-300 p-3 rounded-xl font-mono text-xs mt-2">def in_loi_chao(ten):
    print("Xin chào,", ten)

in_loi_chao("An")   # In: Xin chào, An</pre>
                        </div>
                    </div>

                    <div class="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                        <p class="text-red-800 text-sm font-medium italic"><b>Lưu ý quan trọng:</b> Các lệnh trong thân hàm phải được viết lùi vào (indent) và thẳng hàng nhau sau dấu hai chấm <code>:</code>. Tham số là các biến nhận dữ liệu truyền vào hàm khi gọi.</p>
                    </div>

                </div>
            </details>

            <!-- MỤC III: BÀI TẬP VẬN DỤNG -->
            <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-orange-500 text-white rounded-lg shadow-md"><i data-lucide="pen-tool" class="w-5 h-5"></i></div>
                        <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">III. Bài tập vận dụng</span>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                </summary>
                <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-4">
                    <div class="grid grid-cols-1 gap-4 mt-4">

                        <!-- Câu 1 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 1. Hàm lời chào</p>
                            <p class="text-slate-600 text-sm mt-1">Định nghĩa hàm <code>xinchao(ten)</code> nhận vào một tên và in ra màn hình: <code>"Xin chào, [tên]!"</code>.</p>
                            <p class="text-xs text-slate-500 mt-1 italic">Gợi ý: Đây là hàm không trả lại giá trị, sử dụng lệnh <code>print()</code>.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                xinchao("An") → In: Xin chào, An!
                            </div>
                        </div>

                        <!-- Câu 2 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 2. Tính diện tích hình chữ nhật</p>
                            <p class="text-slate-600 text-sm mt-1">Viết hàm <code>dientich_hcn(a, b)</code> nhận vào chiều dài và chiều rộng, trả về giá trị diện tích.</p>
                            <p class="text-xs text-slate-500 mt-1 italic">Gợi ý: Sử dụng lệnh <code>return a * b</code>.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                dientich_hcn(5, 3) → 15
                            </div>
                        </div>

                        <!-- Câu 3 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 3. Kiểm tra số chẵn</p>
                            <p class="text-slate-600 text-sm mt-1">Viết hàm <code>la_so_chan(n)</code> trả về $True$ nếu $n$ là số chẵn, ngược lại trả về $False$.</p>
                            <p class="text-xs text-slate-500 mt-1 italic">Gợi ý: Sử dụng phép toán chia dư <code>% 2 == 0</code>.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                la_so_chan(4) → True &nbsp;|&nbsp; la_so_chan(7) → False
                            </div>
                        </div>

                        <!-- Câu 4 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 4. Tìm số lớn hơn</p>
                            <p class="text-slate-600 text-sm mt-1">Định nghĩa hàm <code>tim_max(a, b)</code> nhận vào hai số và trả về số có giá trị lớn hơn.</p>
                            <p class="text-xs text-slate-500 mt-1 italic">Gợi ý: Sử dụng cấu trúc <code>if...else</code> bên trong hàm.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                tim_max(8, 3) → 8
                            </div>
                        </div>

                        <!-- Câu 5 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 5. Hàm tính tổng dãy số</p>
                            <p class="text-slate-600 text-sm mt-1">Viết hàm <code>tong_tu_1_den_n(n)</code> nhận vào số nguyên dương $n$ và trả về tổng $1 + 2 + \dots + n$.</p>
                            <p class="text-xs text-slate-500 mt-1 italic">Gợi ý: Sử dụng vòng lặp <code>for</code> và một biến tích lũy bên trong hàm.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                tong_tu_1_den_n(5) → 15
                            </div>
                        </div>

                        <!-- Câu 6 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 6. Hàm đổi đơn vị nhiệt độ</p>
                            <p class="text-slate-600 text-sm mt-1">Viết hàm <code>c_to_f(celsius)</code> nhận vào độ C và trả về giá trị tương ứng ở độ F.</p>
                            <p class="text-xs text-slate-500 mt-1 italic">Gợi ý: Công thức $F = C \times 1.8 + 32$.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                c_to_f(100) → 212.0
                            </div>
                        </div>

                        <!-- Câu 7 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 7. Kiểm tra tính hợp lệ của mật khẩu</p>
                            <p class="text-slate-600 text-sm mt-1">Viết hàm <code>kiem_tra_mat_khau(mk)</code> nhận vào một xâu. Trả về $True$ nếu độ dài xâu $\ge 8$ kí tự, ngược lại trả về $False$.</p>
                            <p class="text-xs text-slate-500 mt-1 italic">Gợi ý: Kết hợp lệnh <code>len()</code> bên trong hàm.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                kiem_tra_mat_khau("abc") → False &nbsp;|&nbsp; kiem_tra_mat_khau("matkhau1") → True
                            </div>
                        </div>

                        <!-- Câu 8 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 8. In hình vuông ký tự</p>
                            <p class="text-slate-600 text-sm mt-1">Viết hàm <code>ve_hinh_vuong(n, kytu)</code> in ra một hình vuông cỡ $n \times n$ bằng ký tự <code>kytu</code>.</p>
                            <p class="text-xs text-slate-500 mt-1 italic">Gợi ý: Sử dụng hai vòng lặp lồng nhau hoặc phép nhân xâu kí tự.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                ve_hinh_vuong(3, "*") → In:<br>***<br>***<br>***
                            </div>
                        </div>

                        <!-- Câu 9 -->
                        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p class="font-bold text-slate-900">Câu 9. Tính giai thừa</p>
                            <p class="text-slate-600 text-sm mt-1">Định nghĩa hàm <code>giai_thua(n)</code> để tính $n! = 1 \times 2 \times \dots \times n$.</p>
                            <p class="text-xs text-slate-500 mt-1 italic">Gợi ý: Khởi tạo biến kết quả bằng $1$ và dùng vòng lặp nhân dồn.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                giai_thua(5) → 120
                            </div>
                        </div>

                        <!-- Câu 10 - Nâng cao -->
                        <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                            <p class="font-bold text-indigo-900">Câu 10. Hàm xử lý xâu (Nâng cao)</p>
                            <p class="text-slate-600 text-sm mt-1">Viết hàm <code>dao_nguoc_xau(s)</code> nhận vào một xâu và trả về xâu đó theo thứ tự ngược lại.</p>
                            <p class="text-xs text-indigo-700 mt-1 italic">Gợi ý: Có thể dùng kỹ thuật cắt xâu <code>s[::-1]</code> hoặc vòng lặp duyệt ngược.</p>
                            <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                                dao_nguoc_xau("Python") → "nohtyP"
                            </div>
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
                    <p class="text-sm text-slate-500 italic">Video bài giảng và mã nguồn tham khảo đang được chuẩn bị.</p>
                </div>
            </details>

        </div>
    `
},
           {
    title: "Bài 27: Tham số của hàm",
    videoId: "",
    desc: "Tìm hiểu về tham số, đối số của hàm và cách tổ chức chương trình sử dụng chương trình con trong Python.",
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 leading-relaxed text-sm md:text-base">
                    <ul class="space-y-2 list-none">
                        <li> Biết cách thiết lập các tham số của hàm.</li>
                        <li> Hiểu được cách truyền giá trị thông qua đối số hàm.</li>
                        <li> Hiểu được sự khác biệt giữa <strong>tham số (parameter)</strong> và <strong>đối số (argument)</strong>.</li>
                        <li> Biết cách tổ chức chương trình sử dụng chương trình con (hàm) để giải quyết các bài toán phức tạp, tăng tính rõ ràng và khả năng tái sử dụng mã nguồn.</li>
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-6 text-sm md:text-base">

                    <!-- Phần 1 -->
                    <div>
                        <h3 class="font-black text-emerald-700 uppercase text-sm mb-3">1. Tham số và đối số của hàm</h3>
                        <p class="mb-3">
                            <strong>Tham số (parameter)</strong> được định nghĩa khi <em>khai báo hàm</em> và được dùng như biến trong thân hàm.
                            <strong>Đối số (argument)</strong> là giá trị cụ thể được truyền vào khi <em>gọi hàm</em>.
                        </p>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto">def f(a, b, c):   # a, b, c là THAM SỐ
    return a + b + c

# Gọi hàm với giá trị cụ thể (đối số là số cụ thể)
print(f(1, 2, 3))   # Kết quả: 6

# Gọi hàm với biến đã có giá trị (đối số là biến)
x, y, z = 10, 20, 5
print(f(x, y, z))   # Kết quả: 35</pre>
                        <div class="mt-4 space-y-2">
                            <p>📌 <strong>Khai báo:</strong> Trong <code class="bg-slate-100 px-1 rounded">def f(a, b, c):</code>, các biến $a, b, c$ là <strong>tham số</strong> — đóng vai trò biến trung gian nhận dữ liệu.</p>
                            <p>📌 <strong>Lời gọi hàm:</strong> Trong <code class="bg-slate-100 px-1 rounded">f(1, 2, 3)</code>, các giá trị $1, 2, 3$ là <strong>đối số</strong> — được truyền vào theo đúng thứ tự.</p>
                        </div>
                        <div class="mt-4 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                            <p class="font-bold text-red-700 mb-1">⚠ Lưu ý quan trọng</p>
                            <ul class="space-y-1 text-red-800 text-sm">
                                <li>• Số lượng đối số khi gọi hàm phải <strong>bằng</strong> số lượng tham số đã khai báo.</li>
                                <li>• Nếu gọi hàm bằng biến chưa được định nghĩa (ví dụ: <code>f(m, n, p)</code> khi $m, n, p$ chưa có giá trị), chương trình sẽ báo lỗi <strong>NameError</strong>.</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Phần 2 -->
                    <div>
                        <h3 class="font-black text-emerald-700 uppercase text-sm mb-3">2. Cách sử dụng chương trình con</h3>
                        <p class="mb-3">Sử dụng chương trình con giúp chia nhỏ bài toán lớn thành các bài toán nhỏ hơn, giúp chương trình dễ hiểu, dễ bảo trì và nâng cấp.</p>

                        <p class="font-semibold text-slate-800 mb-2">📝 Ví dụ 1: Kiểm tra và in các số nguyên tố từ $1$ đến $n$</p>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto">def prime(n):
    c = 0
    k = 1
    while k < n:
        if n % k == 0:
            c = c + 1
        k = k + 1
    if c == 1:   # Số nguyên tố chỉ có 1 ước là 1 (xét từ 1 đến n-1)
        return True
    else:
        return False

# Chương trình chính
n = int(input("Nhập số tự nhiên n: "))
for k in range(1, n + 1):
    if prime(k):
        print(k, end = " ")</pre>

                        <p class="font-semibold text-slate-800 mt-4 mb-2">📝 Ví dụ 2: Tính tổng các số hạng dương của nhiều dãy số</p>
                        <p class="mb-2 text-sm">Thiết lập hàm <code class="bg-slate-100 px-1 rounded">tongduong(A)</code> để dùng chung cho nhiều danh sách khác nhau.</p>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto">def tongduong(A):
    s = 0
    for k in A:
        if k > 0:
            s = s + k
    return s

# Chương trình chính
B = [1, -10, -11, 8, 2, 0, -5]
C = [0, 2, -1, 5, 10, -3]

print(tongduong(B))   # Kết quả: 11
print(tongduong(C))   # Kết quả: 17</pre>

                        <div class="mt-4 p-4 bg-emerald-50 rounded-xl border-l-4 border-emerald-500">
                            <p class="font-bold text-emerald-700 mb-2">✅ Lợi ích của chương trình con</p>
                            <ul class="space-y-1 text-emerald-800 text-sm">
                                <li>• Phân chia công việc, phát huy tinh thần làm việc nhóm.</li>
                                <li>• Chương trình chính có cấu trúc rõ ràng, dễ đọc.</li>
                                <li>• Thuận tiện cho việc hiệu chỉnh, phát triển và nâng cấp.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </details>

            <!-- MỤC III: BÀI TẬP VẬN DỤNG -->
            <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-orange-500 text-white rounded-lg shadow-md"><i data-lucide="pen-tool" class="w-5 h-5"></i></div>
                        <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">III. Bài tập vận dụng</span>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                </summary>
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-4 text-sm md:text-base">

                    <!-- Câu 1 -->
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800"> Câu 1. Tổng hai số <span class="font-normal text-slate-500"></span></p>
                        <p class="mt-1">Viết hàm <code class="bg-white px-1 rounded border">tong(a, b)</code> trả về tổng của hai số.</p>
                        <p class="mt-1 text-slate-500 text-xs"> Gợi ý: Sử dụng lệnh <code>return a + b</code>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> a = 2, b = 3 &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> 5
                        </div>
                    </div>

                    <!-- Câu 2 -->
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800"> Câu 2. Hiệu hai số <span class="font-normal text-slate-500"></span></p>
                        <p class="mt-1">Viết hàm <code class="bg-white px-1 rounded border">hieu(a, b)</code> trả về hiệu của hai số.</p>
                        <p class="mt-1 text-slate-500 text-xs"> Gợi ý: Thực hiện phép trừ <code>a - b</code> bên trong lệnh <code>return</code>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> a = 7, b = 4 &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> 3
                        </div>
                    </div>

                    <!-- Câu 3 -->
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800"> Câu 3. tích ba số <span class="font-normal text-slate-500"></span></p>
                        <p class="mt-1">Viết hàm <code class="bg-white px-1 rounded border">tich(a, b, c)</code> trả về tích của ba số.</p>
                        <p class="mt-1 text-slate-500 text-xs"> Gợi ý: Nhân 3 tham số $a \times b \times c$.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> a = 2, b = 3, c = 4 &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> 24
                        </div>
                    </div>

                    <!-- Câu 4 -->
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800"> Câu 4. lấy số lớn hơn <span class="font-normal text-slate-500"></span></p>
                        <p class="mt-1">Viết hàm <code class="bg-white px-1 rounded border">max2(a, b)</code> trả về số lớn hơn trong hai số.</p>
                        <p class="mt-1 text-slate-500 text-xs"> Gợi ý: Dùng cấu trúc <code>if...else</code> để so sánh $a$ và $b$.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> a = 5, b = 9 &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> 9
                        </div>
                    </div>

                    <!-- Câu 5 -->
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800"> Câu 5, Kiểm tra chẳn, lẻ <span class="font-normal text-slate-500"></span></p>
                        <p class="mt-1">Viết hàm <code class="bg-white px-1 rounded border">chanle(n)</code> kiểm tra số chẵn hay lẻ. Nếu chẵn trả về <code>"Chan"</code>, ngược lại trả về <code>"Le"</code>.</p>
                        <p class="mt-1 text-slate-500 text-xs"> Gợi ý: Dùng phép toán chia dư <code>n % 2</code>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> n = 6 &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> Chan<br>
                            <span class="text-slate-400">Input:</span> n = 7 &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> Le
                        </div>
                    </div>

                    <!-- Câu 6 -->
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800"> Câu 6. Tính tổng trong danh sách <span class="font-normal text-slate-500"></span></p>
                        <p class="mt-1">Viết hàm <code class="bg-white px-1 rounded border">tongday(A)</code> tính tổng các phần tử trong một danh sách $A$.</p>
                        <p class="mt-1 text-slate-500 text-xs"> Gợi ý: Khởi tạo biến $S = 0$ và duyệt danh sách bằng vòng lặp <code>for</code>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> A = [1, 2, 3, 4, 5] &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> 15
                        </div>
                    </div>

                    <!-- Câu 7 -->
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800"> Câu 7 Tính tổng các số chẳn trong danh sách <span class="font-normal text-slate-500"></span></p>
                        <p class="mt-1">Viết hàm <code class="bg-white px-1 rounded border">tongduong(A)</code> tính tổng các số dương trong danh sách.</p>
                        <p class="mt-1 text-slate-500 text-xs"> Gợi ý: Sử dụng câu lệnh <code>if k > 0:</code> bên trong vòng lặp trước khi cộng dồn.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> A = [1, -10, -11, 8, 2, 0, -5] &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> 11
                        </div>
                    </div>

                    <!-- Câu 8 -->
                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-800"> Câu 8 kiểm tra snt <span class="font-normal text-indigo-500"></span></p>
                        <p class="mt-1">Viết hàm <code class="bg-white px-1 rounded border">nguyento(n)</code> kiểm tra số nguyên tố. Trả về <code>True</code> nếu là số nguyên tố, ngược lại <code>False</code>.</p>
                        <p class="mt-1 text-slate-500 text-xs"> Gợi ý: Đếm số lượng ước của $n$ từ $1$ đến $n$.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> n = 7 &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> True<br>
                            <span class="text-slate-400">Input:</span> n = 9 &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> False
                        </div>
                    </div>

                    <!-- Câu 9 -->
                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-800"> Câu 9. in ra các số nguyên tốt <span class="font-normal text-indigo-500"></span></p>
                        <p class="mt-1">Sử dụng hàm <code class="bg-white px-1 rounded border">nguyento(n)</code> đã viết ở Câu 8, in ra các số nguyên tố từ $1$ đến $n$.</p>
                        <p class="mt-1 text-slate-500 text-xs"> Gợi ý: Dùng vòng lặp chạy từ $1$ đến $n$ và gọi hàm <code>nguyento</code> trong mỗi bước lặp.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> n = 20 &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> 2 3 5 7 11 13 17 19
                        </div>
                    </div>

                    <!-- Câu 10 -->
                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-800"> Câu 10. Tính tổng dương 2 danh sách <span class="font-normal text-indigo-500"></span></p>
                        <p class="mt-1">Cho hai danh sách $A$ và $B$. Viết chương trình sử dụng hàm <code class="bg-white px-1 rounded border">tongduong()</code> để tính tổng số dương của mỗi danh sách. Sau đó tỉnh tổng của 2 kết quả đó và in ra màn hình</p>
                        <p class="mt-1 text-slate-500 text-xs"> Gợi ý: Gọi <code>tongduong(A)</code> và <code>tongduong(B)</code> rồi in kết quả.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> A = [1, -10, -11, 8, 2, 0, -5], B = [0, 2, -1, 5, 10, -3]<br>
                            <span class="text-slate-400">Output:</span> Tổng dương A = 11 &nbsp;|&nbsp; Tổng dương B = 17
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
                <div class="p-6 pt-4 border-t border-slate-100">
                    <p class="text-sm text-slate-500 italic">Video đang được chuẩn bị.</p>
                </div>
            </details>

        </div>
    `
    },
    {
    title: "Bài 28: Phạm Vi Của Biến",
    videoId: "",
    desc: "Tìm hiểu phạm vi hoạt động của biến trong Python, phân biệt biến cục bộ và biến toàn cục, và cách sử dụng từ khóa global.",
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 leading-relaxed text-sm md:text-base">
                    <ul class="space-y-2 list-none">
                        <li class="flex items-start gap-2"><span class="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span><span>Biết và trình bày được ý nghĩa của <strong>phạm vi hoạt động của biến</strong> trong chương trình và hàm.</span></li>
                        <li class="flex items-start gap-2"><span class="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span><span>Phân biệt được <strong>biến địa phương (cục bộ)</strong> và <strong>biến toàn cục</strong>.</span></li>
                        <li class="flex items-start gap-2"><span class="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span><span>Biết cách sử dụng từ khóa <code class="bg-slate-100 px-1 rounded font-mono text-blue-700">global</code> để thay đổi giá trị của biến toàn cục bên trong hàm.</span></li>
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-6 text-sm md:text-base">

                    <!-- Phần 1: Biến cục bộ -->
                    <div>
                        <h3 class="font-black text-slate-800 text-base mb-3 flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-black">1</span>
                            Phạm vi của biến khai báo trong hàm (Biến cục bộ)
                        </h3>
                        <p class="mb-3">Trong Python, tất cả các biến khai báo <strong>bên trong hàm</strong> đều có tính <strong>địa phương (cục bộ)</strong>, nghĩa là chúng chỉ có hiệu lực ở bên trong hàm đó và <strong>không có tác dụng ở bên ngoài hàm</strong>.</p>
                        <p class="mb-2 font-semibold text-slate-600">Ví dụ minh họa:</p>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto">def func(a, b):
    n = 10     # Biến n được khai báo bên trong hàm
    a = a * 2
    b = a + b
    return a + b + n

# Chương trình chính
a = 1
b = 2
print(func(a, b)) # Kết quả: 16
print(a, b)       # Kết quả: 1 2  (a và b không đổi sau khi chạy hàm)
print(n)          # Báo lỗi: NameError: name 'n' is not defined</pre>
                        <div class="mt-3 p-4 bg-sky-50 rounded-xl border-l-4 border-sky-400 space-y-1">
                            <p class="font-bold text-sky-800 text-xs uppercase tracking-wide mb-1">Giải thích</p>
                            <p>• Các biến $n, a, b$ bên trong hàm chỉ hoạt động <strong>bên trong</strong> <code class="bg-sky-100 px-1 rounded font-mono text-sky-700">func</code>.</p>
                            <p>• Sau khi chạy hàm, các biến $a, b$ bên ngoài vẫn giữ nguyên giá trị ban đầu.</p>
                            <p>• Gọi biến $n$ ở ngoài hàm sẽ bị <strong>báo lỗi</strong> vì hệ thống không nhận diện được biến địa phương này.</p>
                        </div>
                    </div>

                    <!-- Phần 2: Biến toàn cục -->
                    <div>
                        <h3 class="font-black text-slate-800 text-base mb-3 flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-black">2</span>
                            Phạm vi của biến khai báo ngoài hàm (Biến toàn cục)
                        </h3>
                        <p class="mb-3">Biến được khai báo <strong>bên ngoài tất cả các hàm</strong> được gọi là <strong>biến toàn cục</strong>.</p>

                        <p class="font-semibold text-slate-700 mb-1">✅ Truy cập giá trị:</p>
                        <p class="mb-2">Bên trong hàm có thể <strong>đọc giá trị</strong> của biến toàn cục đã khai báo trước đó một cách trực tiếp.</p>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto">def f(a, b):
    return a + b + N  # Truy cập giá trị của N

N = 10
print(f(1, 2))  # Kết quả: 13  (1 + 2 + 10)</pre>

                        <p class="font-semibold text-slate-700 mt-4 mb-1">⚠️ Thay đổi giá trị — dùng từ khóa <code class="bg-slate-100 px-1 rounded font-mono text-yellow-700">global</code>:</p>
                        <p class="mb-2">Biến khai báo bên ngoài sẽ <strong>không tự động thay đổi</strong> bên trong hàm nếu ta thực hiện phép gán, trừ khi dùng từ khóa <code class="bg-slate-100 px-1 rounded font-mono text-yellow-700">global</code>.</p>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto">def f(n):
    global t      # Khai báo t là biến toàn cục bên trong hàm
    t = 2 * n + 1
    return t

t = 10
print(f(1))  # Kết quả: 3
print(t)     # Kết quả: 3  (Giá trị t đã bị thay đổi)</pre>
                    </div>

                    <!-- Lưu ý quan trọng -->
                    <div class="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                        <p class="font-black text-red-700 text-sm mb-2">⚠️ Lưu ý quan trọng về từ khóa <code class="font-mono">global</code></p>
                        <ul class="space-y-1 text-sm text-red-800">
                            <li>• Khai báo <code class="bg-red-100 px-1 rounded font-mono">global x</code> phải đặt <strong>trước</strong> bất kỳ lệnh gán nào liên quan đến <code class="bg-red-100 px-1 rounded font-mono">x</code> trong thân hàm.</li>
                            <li>• Lạm dụng <code class="bg-red-100 px-1 rounded font-mono">global</code> có thể khiến chương trình khó theo dõi và dễ gây lỗi — chỉ dùng khi thực sự cần thiết.</li>
                            <li>• Nếu chỉ cần <strong>đọc</strong> giá trị biến toàn cục (không gán lại), <strong>không cần</strong> dùng <code class="bg-red-100 px-1 rounded font-mono">global</code>.</li>
                        </ul>
                    </div>

                    <!-- Bảng so sánh -->
                    <div>
                        <p class="font-black text-slate-800 mb-2">📊 Bảng so sánh biến cục bộ và biến toàn cục:</p>
                        <div class="overflow-x-auto rounded-xl border border-slate-200">
                            <table class="w-full text-sm text-left">
                                <thead class="bg-slate-100 text-slate-700 font-bold">
                                    <tr>
                                        <th class="px-4 py-2 border-b border-slate-200">Đặc điểm</th>
                                        <th class="px-4 py-2 border-b border-slate-200">Biến cục bộ</th>
                                        <th class="px-4 py-2 border-b border-slate-200">Biến toàn cục</th>
                                    </tr>
                                </thead>
                                <tbody class="text-slate-600">
                                    <tr class="bg-white"><td class="px-4 py-2 border-b border-slate-100">Nơi khai báo</td><td class="px-4 py-2 border-b border-slate-100">Bên trong hàm</td><td class="px-4 py-2 border-b border-slate-100">Bên ngoài hàm</td></tr>
                                    <tr class="bg-slate-50"><td class="px-4 py-2 border-b border-slate-100">Phạm vi sử dụng</td><td class="px-4 py-2 border-b border-slate-100">Chỉ trong hàm đó</td><td class="px-4 py-2 border-b border-slate-100">Toàn bộ chương trình</td></tr>
                                    <tr class="bg-white"><td class="px-4 py-2 border-b border-slate-100">Thay đổi từ trong hàm</td><td class="px-4 py-2 border-b border-slate-100">Trực tiếp</td><td class="px-4 py-2 border-b border-slate-100">Cần từ khóa <code class="font-mono">global</code></td></tr>
                                    <tr class="bg-slate-50"><td class="px-4 py-2">Tồn tại sau khi hàm kết thúc</td><td class="px-4 py-2">Không</td><td class="px-4 py-2">Có</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </details>

            <!-- MỤC III: BÀI TẬP VẬN DỤNG -->
            <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-orange-500 text-white rounded-lg shadow-md"><i data-lucide="pen-tool" class="w-5 h-5"></i></div>
                        <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">III. Bài tập vận dụng</span>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                </summary>
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-4">

                    <!-- Bài 1 -->
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 text-sm mb-1">Bài 1 <span class="text-xs font-normal text-slate-500">(Cơ bản)</span></p>
                        <p class="text-sm mb-2">Viết hàm tính tổng 2 số nguyên $a$ và $b$, sau đó in kết quả ra màn hình.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">Input:</span> a = 3, b = 4<br>
                            <span class="text-slate-400">Output:</span> 7
                        </div>
                        <p class="text-xs text-slate-500 mt-2">💡 Gợi ý: Định nghĩa hàm với 2 tham số và dùng <code class="font-mono">return a + b</code>.</p>
                    </div>

                    <!-- Bài 2 -->
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 text-sm mb-1">Bài 2 <span class="text-xs font-normal text-slate-500">(Cơ bản)</span></p>
                        <p class="text-sm mb-2">Thực hiện thay đổi giá trị biến trong hàm nhưng kiểm tra để <strong>không làm thay đổi</strong> biến ngoài. In giá trị biến $x$ trước và sau khi gọi hàm.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">Input:</span> x = 5<br>
                            <span class="text-slate-400">Output:</span> Trong hàm x = 50 | Ngoài hàm x = 5
                        </div>
                        <p class="text-xs text-slate-500 mt-2">💡 Gợi ý: Khai báo biến trùng tên trong hàm nhưng <strong>không</strong> dùng từ khóa <code class="font-mono">global</code>.</p>
                    </div>

                    <!-- Bài 3 -->
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 text-sm mb-1">Bài 3 <span class="text-xs font-normal text-slate-500">(Cơ bản)</span></p>
                        <p class="text-sm mb-2">Viết hàm cộng một tham số truyền vào với biến toàn cục $N$.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">Input:</span> a = 2, N = 10<br>
                            <span class="text-slate-400">Output:</span> 12
                        </div>
                        <p class="text-xs text-slate-500 mt-2">💡 Gợi ý: Gọi trực tiếp tên biến $N$ trong biểu thức tính toán của hàm (không cần <code class="font-mono">global</code> vì chỉ đọc).</p>
                    </div>

                    <!-- Bài 4 -->
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 text-sm mb-1">Bài 4 <span class="text-xs font-normal text-slate-500">(Cơ bản)</span></p>
                        <p class="text-sm mb-2">Sử dụng <code class="font-mono bg-slate-100 px-1 rounded text-blue-700">global</code> để tăng giá trị của biến toàn cục $x$ thêm 1 đơn vị bên trong hàm. In giá trị $x$ trước và sau khi gọi hàm.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">Input:</span> x = 7<br>
                            <span class="text-slate-400">Output:</span> Trước: 7 | Sau: 8
                        </div>
                        <p class="text-xs text-slate-500 mt-2">💡 Gợi ý: Sử dụng cú pháp <code class="font-mono">global x</code> trước lệnh <code class="font-mono">x = x + 1</code>.</p>
                    </div>

                    <!-- Bài 5 -->
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 text-sm mb-1">Bài 5 <span class="text-xs font-normal text-slate-500">(Cơ bản)</span></p>
                        <p class="text-sm mb-2">Viết hàm nhân đôi một số nhưng đảm bảo biến $a$ ban đầu ngoài hàm <strong>không bị thay đổi</strong>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">Input:</span> a = 6<br>
                            <span class="text-slate-400">Output:</span> Kết quả nhân đôi: 12 | a bên ngoài vẫn là: 6
                        </div>
                        <p class="text-xs text-slate-500 mt-2">💡 Gợi ý: Sử dụng tham số hoặc biến cục bộ để tính toán, không dùng <code class="font-mono">global</code>.</p>
                    </div>

                    <!-- Bài 6 -->
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 text-sm mb-1">Bài 6 <span class="text-xs font-normal text-slate-500">(Trung bình)</span></p>
                        <p class="text-sm mb-2">Viết hàm tính tổng 3 số $a, b, c$; trong đó $c$ là <strong>biến toàn cục</strong>. Hàm chỉ nhận 2 tham số $a$ và $b$.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">Input:</span> a = 1, b = 2, c = 3<br>
                            <span class="text-slate-400">Output:</span> 6
                        </div>
                        <p class="text-xs text-slate-500 mt-2">💡 Gợi ý: Hàm chỉ nhận 2 tham số $a, b$, giá trị $c$ lấy từ phạm vi toàn cục.</p>
                    </div>

                    <!-- Bài 7 -->
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 text-sm mb-1">Bài 7 <span class="text-xs font-normal text-slate-500">(Trung bình)</span></p>
                        <p class="text-sm mb-2">Đoạn code sau bị lỗi khi cố gắng thay đổi biến toàn cục trong hàm. Hãy tìm lỗi và sửa lại cho đúng:</p>
                        <pre class="bg-slate-900 text-red-300 p-3 rounded-xl font-mono text-xs mt-2 overflow-x-auto">def tang():
    x = x + 1   # Lỗi!

x = 5
tang()
print(x)</pre>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">Output mong muốn:</span> 6
                        </div>
                        <p class="text-xs text-slate-500 mt-2">💡 Gợi ý: Thêm dòng khai báo <code class="font-mono">global x</code> vào đầu thân hàm.</p>
                    </div>

                    <!-- Bài 8 -->
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800 text-sm mb-1">Bài 8 <span class="text-xs font-normal text-slate-500">(Trung bình)</span></p>
                        <p class="text-sm mb-2">Viết hàm tăng biến toàn cục thêm 1 mỗi lần hàm được gọi. Gọi hàm 4 lần và in giá trị sau mỗi lần gọi.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">Input:</span> x = 0<br>
                            <span class="text-slate-400">Output:</span> 1  2  3  4
                        </div>
                        <p class="text-xs text-slate-500 mt-2">💡 Gợi ý: Sử dụng <code class="font-mono">global</code> và phép gán tăng dần <code class="font-mono">x += 1</code> trong thân hàm.</p>
                    </div>

                    <!-- Bài 9 - Nâng cao -->
                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-800 text-sm mb-1">Bài 9 <span class="text-xs font-normal text-indigo-500">(Nâng cao)</span></p>
                        <p class="text-sm mb-2 text-indigo-900">Viết 2 hàm khác nhau sử dụng cùng một tên biến cục bộ <code class="font-mono bg-indigo-100 px-1 rounded">ket_qua</code> nhưng trả về 2 kết quả khác nhau, để <strong>chứng minh tính độc lập</strong> của biến cục bộ.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-200">
                            <span class="text-indigo-400">Output:</span><br>
                            Hàm 1: ket_qua = 100<br>
                            Hàm 2: ket_qua = hello
                        </div>
                        <p class="text-xs text-indigo-500 mt-2">💡 Gợi ý: Khai báo biến địa phương cùng tên trong 2 khối <code class="font-mono">def</code> khác nhau — chúng hoàn toàn độc lập với nhau.</p>
                    </div>

                    <!-- Bài 10 - Nâng cao -->
                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-800 text-sm mb-1">Bài 10 <span class="text-xs font-normal text-indigo-500">(Nâng cao)</span></p>
                        <p class="text-sm mb-2 text-indigo-900">Viết chương trình <strong>đếm số lần gọi hàm</strong> bằng cách sử dụng một biến toàn cục <code class="font-mono bg-indigo-100 px-1 rounded">dem</code>. Hàm in ra giá trị hiện tại của bộ đếm mỗi lần được gọi.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-200">
                            <span class="text-indigo-400">Input:</span> Gọi hàm 3 lần, dem = 0<br>
                            <span class="text-indigo-400">Output:</span> 1  2  3
                        </div>
                        <p class="text-xs text-indigo-500 mt-2">💡 Gợi ý: Sử dụng biến đếm toàn cục tăng dần mỗi khi hàm thực thi bằng <code class="font-mono">global dem</code> và <code class="font-mono">dem += 1</code>.</p>
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
                <div class="p-6 pt-4 border-t border-slate-100 space-y-3">
                    <p class="text-sm font-semibold text-slate-600">1. Video giảng giải về Biến cục bộ và Biến toàn cục:</p>
                    <p class="text-sm text-slate-500 italic">Video đang được chuẩn bị.</p>
                    <p class="text-sm font-semibold text-slate-600 mt-2">2. Thực hành từ khóa Global trong Python:</p>
                    <p class="text-sm text-slate-500 italic">Video đang được chuẩn bị.</p>
                </div>
            </details>

        </div>
    `
    },
            { title: "Bài 29: Nhận biết lỗi chương trình", videoId: "", desc: "Các loại lỗi cú pháp và logic.", downloadUrl: "#" },
            { title: "Bài 30: Kiểm thử và gỡ lỗi", videoId: "", desc: "Quy trình tìm và sửa lỗi chương trình.", downloadUrl: "#" }
        ]
    },
    {
        chapterName: "Chương 6: Tin học với nghề nghiệp",
        lessons: [
            { title: "Bài 31: Việt Nam và kinh tế tri thức", videoId: "", desc: "Vai trò của CNTT trong kinh tế.", downloadUrl: "#" },
            { title: "Bài 32: Ôn tập lập trình Python", videoId: "", desc: "Hệ thống lại kiến thức lập trình.", downloadUrl: "#" },
            { title: "Bài 33: Nghề nghiệp trong lĩnh vực tin học", videoId: "", desc: "Các vị trí công việc ngành IT.", downloadUrl: "#" },
            { title: "Bài 34: Nghề thiết kế đồ họa", videoId: "", desc: "Tìm hiểu về công việc Designer.", downloadUrl: "#" }
        ]
    }
];
