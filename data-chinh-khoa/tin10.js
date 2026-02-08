// File dữ liệu bài học Tin học 10 - Đầy đủ 34 bài theo chương trình SGK
window.courseContent = [
    {
        chapterName: "Chương 1: Máy tính và xã hội tri thức",
        lessons: [
            { title: "Bài 1: Thông tin và xử lý thông tin", videoId: "", desc: "Khái niệm thông tin và dữ liệu.", downloadUrl: "#" },
            { title: "Bài 2: Vai trò của thiết bị thông minh", videoId: "", desc: "Thế giới thiết bị thông minh.", downloadUrl: "#" },
            { title: "Bài 3: Một số ứng dụng của mạng máy tính", videoId: "", desc: "Ứng dụng thực tế của mạng.", downloadUrl: "#" },
            { title: "Bài 4: Hệ điều hành và phần mềm ứng dụng", videoId: "", desc: "Phân biệt phần mềm hệ thống và ứng dụng.", downloadUrl: "#" },
            { title: "Bài 5: Dữ liệu trong thiết bị nhớ", videoId: "", desc: "Các đơn vị lưu trữ dữ liệu.", downloadUrl: "#" }
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
            { title: "Bài 19: Câu lệnh rẽ nhánh If", videoId: "", desc: "Cấu trúc điều kiện trong lập trình.", downloadUrl: "#" },
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
                                        <li><code>range(start, stop)</code>: trả lại vùng giá trị từ $start$ đến $stop - 1$.</li>
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
                                    <li>Biết và thực hành giải các bài toán sử dụng lệnh lặp $while$ với số lần không biết trước.</li>
                                    <li>Biết ba cấu trúc lập trình cơ bản: tuần tự, rẽ nhánh, lặp.</li>
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
                                <!-- Lệnh WHILE -->
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
                                        <p class="text-amber-900 italic">Để tránh lỗi lặp vô hạn, bên trong <$khối lệnh$>  cần có ít nhất một câu lệnh làm thay đổi giá trị của các biến trong <$điều kiện$> sao cho đến một thời điểm nào đó <$điều kiện$> sẽ trở thành $False$.</p>
                                    </div>
            
                                    <div class="bg-red-50 p-4 rounded-xl border-l-4 border-red-500">
                                        <p class="font-bold text-red-800">[Lệnh break]</p>
                                        <p class="text-red-900">Lệnh $break$ được dùng để kết thúc (thoát khỏi) vòng lặp ngay lập tức mà không cần đợi điều kiện của vòng lặp trở thành $False$. Thường dùng để dừng vòng lặp $while \ True$ khi gặp một điều kiện dừng cụ thể.</p>
                                    </div>
                                </div>
            
                                <!-- Cấu trúc lập trình -->
                                <div class="space-y-4">
                                    <p class="font-bold text-emerald-700 flex items-center gap-2 text-lg">
                                        <span class="w-2 h-6 bg-emerald-500 rounded-full"></span> 2. Cấu trúc lập trình cơ bản
                                    </p>
                                    <div class="space-y-3">
                                        <div class="flex gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                            <div class="font-bold text-blue-600 min-w-[100px]">Tuần tự:</div>
                                            <div>Khối lệnh thực hiện từ trên xuống dưới (gán giá trị, nhập/xuất dữ liệu).</div>
                                        </div>
                                        <div class="flex gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                            <div class="font-bold text-orange-600 min-w-[100px]">Rẽ nhánh:</div>
                                            <div>Khối lệnh thực hiện dựa trên điều kiện đúng hay sai (lệnh $if$).</div>
                                        </div>
                                        <div class="flex gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                            <div class="font-bold text-emerald-600 min-w-[100px]">Lặp:</div>
                                            <div>Khối lệnh thực hiện lặp đi lặp lại tùy theo điều kiện ($for, while$).</div>
                                        </div>
                                    </div>
                                    <p class="text-center font-bold bg-slate-100 p-2 rounded-lg text-slate-600 border border-dashed border-slate-300">Đây là ba cấu trúc lập trình cơ bản của mọi ngôn ngữ bậc cao.</p>
                                </div>
                            </div>
                        </details>
            
                        <!-- Mục III: Bài tập vận dụng -->
                        <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                            <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                                <div class="flex items-center gap-3">
                                    <div class="p-2 bg-orange-500 text-white rounded-lg shadow-md"><i data-lucide="code-2" class="w-5 h-5"></i></div>
                                    <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">III. Bài tập vận dụng</span>
                                </div>
                                <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                            </summary>
                            <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-4 text-sm md:text-base">
                                <div class="grid grid-cols-1 gap-4 mt-4">
                                    <!-- Câu 1-3 -->
                                    <div class="group/item border border-slate-100 rounded-xl p-4 bg-slate-50 hover:bg-white hover:shadow-md transition-all">
                                        <p class="font-bold text-orange-700 mb-2">Câu 1. In các số từ $1$ đến $n$</p>
                                        <p class="text-slate-600 mb-2 underline underline-offset-4 decoration-slate-200 italic font-medium">Mô tả:</p>
                                        <p class="mb-2">Nhập vào số nguyên dương $n$. Sử dụng vòng lặp $while$ để in ra các số từ $1$ đến $n$, mỗi số cách nhau một khoảng trắng.</p>
                                        <p class="text-xs font-mono bg-white p-2 rounded border">Ví dụ: Input: 5 &rarr; Output: 1 2 3 4 5</p>
                                    </div>
            
                                    <div class="group/item border border-slate-100 rounded-xl p-4 bg-slate-50 hover:bg-white hover:shadow-md transition-all">
                                        <p class="font-bold text-orange-700 mb-2">Câu 2. Tính tổng các số từ $1$ đến $n$</p>
                                        <p class="mb-2 italic underline underline-offset-4 decoration-slate-200 font-medium">Mô tả:</p>
                                        <p class="mb-2">Nhập vào số nguyên dương $n$. Dùng vòng lặp $while$ để tính tổng các số từ $1$ đến $n$.</p>
                                        <p class="text-xs font-mono bg-white p-2 rounded border">Ví dụ: Input: 4 &rarr; Output: 10</p>
                                    </div>
            
                                    <div class="group/item border border-slate-100 rounded-xl p-4 bg-slate-50 hover:bg-white hover:shadow-md transition-all">
                                        <p class="font-bold text-orange-700 mb-2">Câu 3. In các số chẵn nhỏ hơn $n$</p>
                                        <p class="mb-2">Nhập vào số nguyên dương $n$. Sử dụng vòng lặp $while$ để in ra các số chẵn nhỏ hơn $n$.</p>
                                        <p class="text-xs font-mono bg-white p-2 rounded border">Ví dụ: Input: 10 &rarr; Output: 2 4 6 8</p>
                                    </div>
            
                                    <!-- Câu 4-7: Xử lý số -->
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div class="p-4 border border-blue-100 rounded-xl bg-blue-50/30">
                                            <p class="font-bold text-blue-800 mb-1">Câu 4. Đếm chữ số</p>
                                            <p class="text-xs mb-2">Dùng $while$ chia nguyên cho 10 ($n // 10$).</p>
                                            <p class="text-[10px] font-mono italic">12345 &rarr; 5</p>
                                        </div>
                                        <div class="p-4 border border-blue-100 rounded-xl bg-blue-50/30">
                                            <p class="font-bold text-blue-800 mb-1">Câu 5. Tổng chữ số</p>
                                            <p class="text-xs mb-2">Dùng phép chia lấy dư ($% 10$).</p>
                                            <p class="text-[10px] font-mono italic">123 &rarr; 6</p>
                                        </div>
                                        <div class="p-4 border border-blue-100 rounded-xl bg-blue-50/30">
                                            <p class="font-bold text-blue-800 mb-1">Câu 6. Đảo ngược số</p>
                                            <p class="text-xs mb-2">Xây dựng số mới:.</p>
                                            <p class="text-[10px] font-mono italic">1203 &rarr; 3021</p>
                                        </div>
                                        <div class="p-4 border border-blue-100 rounded-xl bg-blue-50/30">
                                            <p class="font-bold text-blue-800 mb-1">Câu 7. Kiểm tra đối xứng</p>
                                            <p class="text-xs mb-2">So sánh $n$ gốc với số đảo ngược.</p>
                                            <p class="text-[10px] font-mono italic">1221 &rarr; YES</p>
                                        </div>
                                    </div>
            
                                    <!-- Câu 8-10 -->
                                    <div class="p-4 border border-slate-100 rounded-xl bg-emerald-50/50">
                                        <p class="font-bold text-emerald-800 mb-1">Câu 8. Tìm UCLN (ước chung lớn nhất)</p>
                                        <p class="text-sm italic text-emerald-900 mb-2 underline underline-offset-4 decoration-emerald-200 font-medium">thực hiện:</p>
                                        <p class="text-sm mb-2">nếu $b$ = $0$, kết quả sẽ là rỗng.</p>
                                        <p class="text-xs font-mono bg-white p-2 rounded">24, 36 &rarr; 12</p>
                                    </div>
            
                                    <div class="p-4 border border-red-100 rounded-xl bg-red-50/50">
                                        <p class="font-bold text-red-800 mb-1">Câu 9. Nhập đến khi gặp số âm</p>
                                        <p class="text-sm italic text-red-900 mb-2 underline underline-offset-4 decoration-red-200 font-medium">Thực hiện:</p>
                                        <p class="text-sm mb-1">Sử dụng $while$ \ $True$ kết hợp lệnh $break$ khi số nhập vào $< 0$.</p>
                                        <p class="text-xs font-mono bg-white p-2 rounded">5, 3, 7, -1 &rarr; Tổng: 15</p>
                                    </div>
            
                                    <div class="p-4 border border-indigo-100 rounded-xl bg-indigo-50/50 shadow-sm">
                                        <p class="font-bold text-indigo-800 mb-1">Câu 10. Tìm số nhỏ nhất</p>
                                        <p class="text-sm">Nhập $n$ phần tử, khởi tạo $min$ bằng số đầu tiên và dùng $while$ để so sánh, cập nhật giá trị $min$.</p>
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
                            <code class="block bg-white p-2 mt-2 rounded border text-xs">&lt;giá trị&gt; in &lt;danh sách&gt;</code>
                        </div>

                        <div class="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                            <p class="font-bold text-blue-800 mb-2">2. Thêm phần tử mới</p>
                            <ul class="list-disc ml-5 space-y-1">
                                <li><code>append(x)</code>: Thêm phần tử $x$ vào cuối danh sách.</li>
                                <li><code>insert(k, x)</code>: Chèn giá trị $x$ vào vị trí $k$. Các phần tử từ vị trí $k$ trở đi sẽ lùi lại 1 bước.</li>
                            </ul>
                        </div>

                        <div class="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                            <p class="font-bold text-red-800 mb-2">3. Xóa phần tử</p>
                            <ul class="list-disc ml-5 space-y-1">
                                <li><code>remove(x)</code>: Xóa phần tử đầu tiên trong danh sách có giá trị $x$. Nếu không có $x$ sẽ báo lỗi.</li>
                                <li><code>del a[i]</code>: Lệnh xóa phần tử tại vị trí chỉ số $i$.</li>
                                <li><code>clear()</code>: Xóa sạch toàn bộ các phần tử trong danh sách.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </details>

            <!-- Mục III: Bài tập thực hành  -->
            <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-orange-500 text-white rounded-lg shadow-md"><i data-lucide="pen-tool" class="w-5 h-5"></i></div>
                        <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">III. Bài tập thực hành</span>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                </summary>
                <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-6 text-sm md:text-base">
                    <div class="space-y-4 mt-4">
                        <p class="font-bold text-orange-700 italic border-b pb-2">Phần A: Trắc nghiệm (Câu 1-5)</p>
                        <div class="space-y-4">
                            <div><p><b>Câu 1:</b> Lệnh nào dùng để thêm phần tử vào cuối danh sách?</p><p class="text-xs text-slate-500 italic">A. insert() | B. add() | C. append() | D. push()</p></div>
                            <div><p><b>Câu 2:</b> Kết quả của <code>3 in [1, 2, 3]</code> là gì?</p><p class="text-xs text-slate-500 italic">A. True | B. False | C. 3 | D. Lỗi</p></div>
                            <div><p><b>Câu 3:</b> Lệnh <code>a.remove(x)</code> làm gì nếu trong $a$ có nhiều phần tử giá trị $x$?</p><p class="text-xs text-slate-500 italic">A. Xóa hết $x$ | B. Xóa $x$ cuối cùng | C. Xóa $x$ đầu tiên | D. Không xóa</p></div>
                            <div><p><b>Câu 4:</b> Để chèn số 5 vào đầu danh sách $a$, ta dùng lệnh nào?</p><p class="text-xs text-slate-500 italic">A. a.insert(0, 5) | B. a.insert(1, 5) | C. a.append(5) | D. a.add(0, 5)</p></div>
                            <div><p><b>Câu 5:</b> Lệnh <code>clear()</code> có tác dụng gì?</p><p class="text-xs text-slate-500 italic">A. Xóa danh sách khỏi bộ nhớ | B. Xóa mọi phần tử, giữ lại khung danh sách rỗng | C. Xóa phần tử cuối</p></div>
                        </div>

                        <p class="font-bold text-orange-700 italic border-b pb-2 pt-4">Phần B: Tự luận (Câu 6-10)</p>
                        <div class="space-y-4">
                            <div class="p-3 bg-slate-50 rounded-lg"><b>Câu 6:</b> Cho <code>A = [1, 2, 3, 4, 5]</code>. Viết lệnh xóa số 3 bằng 2 cách khác nhau.</div>
                            <div class="p-3 bg-slate-50 rounded-lg"><b>Câu 7:</b> Viết chương trình nhập vào danh sách số nguyên, sau đó thêm số 100 vào cuối danh sách.</div>
                            <div class="p-3 bg-slate-50 rounded-lg"><b>Câu 8:</b> Cho danh sách tên học sinh. Viết lệnh kiểm tra xem tên "Bình" có trong lớp không.</div>
                            <div class="p-3 bg-slate-50 rounded-lg"><b>Câu 9:</b> Sự khác nhau giữa <code>a.remove(x)</code> và <code>del a[i]</code> là gì?</div>
                            <div class="p-3 bg-slate-50 rounded-lg"><b>Câu 10:</b> Viết code chèn số 0 vào giữa danh sách <code>[1, 2, 3, 4]</code>.</div>
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
                <div class="p-6 pt-0 border-t border-slate-100 mt-4">
                    <div class="aspect-video w-full rounded-xl overflow-hidden shadow-lg border-4 border-slate-100">
                        <iframe class="w-full h-full" src="https://www.youtube.com/embed/6f_iM0vY0C4" frameborder="0" allowfullscreen></iframe>
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
                        <li>Sử dụng thành thạo lệnh <code>len()</code> để lấy độ dài và truy cập ký tự qua chỉ số.</li>
                        <li>Biết cách duyệt qua từng ký tự của xâu bằng vòng lặp.</li>
                        <li>Hiểu tính chất không thể thay đổi từng ký tự (Immutability) của xâu.</li>
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
                    <div class="space-y-4 mt-4">
                        <div class="p-4 bg-slate-50 rounded-xl border-l-4 border-slate-400">
                            <p class="font-bold text-slate-800 mb-1">1. Khái niệm</p>
                            <p>Xâu là một dãy các ký tự Unicode được đặt trong cặp nháy đơn hoặc nháy kép. Ví dụ: <code>"Lớp 10"</code>, <code>'Python'</code>.</p>
                        </div>
                        <div class="p-4 bg-emerald-50 rounded-xl border-l-4 border-emerald-500">
                            <p class="font-bold text-emerald-800 mb-1">2. Chỉ số và Độ dài</p>
                            <p>- <code>len(s)</code>: Trả về số ký tự trong xâu $s$.</p>
                            <p>- Truy cập: <code>s[i]</code> lấy ký tự tại chỉ số $i$ (từ $0$ đến $len-1$).</p>
                        </div>
                        <div class="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-500">
                            <p class="font-bold text-orange-800 mb-1">3. Ghép và Lặp xâu</p>
                            <p>- Phép cộng (<code>+</code>): Ghép hai hay nhiều xâu lại.</p>
                            <p>- Phép nhân (<code>*</code>): Lặp lại xâu nhiều lần.</p>
                        </div>
                        <div class="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                            <p class="font-bold text-red-800 mb-1 italic">4. Chú ý quan trọng</p>
                            <p class="font-medium text-red-600">Xâu ký tự KHÔNG thể thay đổi từng ký tự trực tiếp. Lệnh <code>s[i] = 'A'</code> sẽ gây lỗi.</p>
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
                <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-6 text-sm md:text-base">
                    <div class="space-y-4 mt-4">
                        <p class="font-bold text-blue-700 italic border-b pb-2">Phần A: Trắc nghiệm (Câu 1-5)</p>
                        <div class="space-y-4">
                            <div><p><b>Câu 1:</b> Hàm nào dùng để lấy độ dài của xâu?</p><p class="text-xs text-slate-500 italic">A. size() | B. len() | C. count() | D. length()</p></div>
                            <div><p><b>Câu 2:</b> Kết quả của <code>"A" * 3</code> là gì?</p><p class="text-xs text-slate-500 italic">A. "A3" | B. "AAA" | C. "3A" | D. Lỗi</p></div>
                            <div><p><b>Câu 3:</b> Nếu <code>s = "Python"</code>, lệnh <code>s[1]</code> trả về giá trị nào?</p><p class="text-xs text-slate-500 italic">A. "P" | B. "y" | C. "t" | D. 1</p></div>
                            <div><p><b>Câu 4:</b> Phép toán <code>"Tin" + "10"</code> cho kết quả?</p><p class="text-xs text-slate-500 italic">A. "Tin 10" | B. "Tin10" | C. Lỗi | D. 10</p></div>
                            <div><p><b>Câu 5:</b> Để kiểm tra xâu "a" có trong xâu "abc" không, dùng lệnh nào?</p><p class="text-xs text-slate-500 italic">A. "a" in "abc" | B. "a" is "abc" | C. "a" = "abc"</p></div>
                        </div>

                        <p class="font-bold text-blue-700 italic border-b pb-2 pt-4">Phần B: Tự luận (Câu 6-10)</p>
                        <div class="space-y-4">
                            <div class="p-3 bg-slate-50 rounded-lg"><b>Câu 6:</b> Nhập xâu họ tên, in ra ký tự đầu tiên của xâu đó.</div>
                            <div class="p-3 bg-slate-50 rounded-lg"><b>Câu 7:</b> Viết code in ra từng ký tự của xâu "PYTHON" trên mỗi dòng.</div>
                            <div class="p-3 bg-slate-50 rounded-lg"><b>Câu 8:</b> Giải thích tại sao lệnh <code>s = "Hello"; s[0] = "h"</code> lại báo lỗi.</div>
                            <div class="p-3 bg-slate-50 rounded-lg"><b>Câu 9:</b> Viết chương trình nhập xâu và in xâu đó theo thứ tự ngược lại (gợi ý: dùng vòng lặp lùi).</div>
                            <div class="p-3 bg-slate-50 rounded-lg"><b>Câu 10:</b> Đếm số lượng ký tự là dấu cách trong một xâu nhập từ bàn phím.</div>
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
                <div class="p-6 pt-0 border-t border-slate-100 mt-4">
                    <div class="aspect-video w-full rounded-xl overflow-hidden shadow-lg border-4 border-slate-100">
                        <iframe class="w-full h-full" src="https://www.youtube.com/embed/S_vTOnW-TFA" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </details>
        </div>
    `
},
            { title: "Bài 25: Một số lệnh làm việc với xâu ký tự", videoId: "", desc: "Cắt xâu, tìm kiếm xâu.", downloadUrl: "#" },
            { title: "Bài 26: Hàm trong Python", videoId: "", desc: "Định nghĩa và sử dụng hàm.", downloadUrl: "#" },
            { title: "Bài 27: Tham số của hàm", videoId: "", desc: "Truyền dữ liệu vào hàm.", downloadUrl: "#" },
            { title: "Bài 28: Phạm vi của biến", videoId: "", desc: "Biến toàn cục và biến địa phương.", downloadUrl: "#" },
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
