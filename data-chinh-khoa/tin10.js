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
                                <p>Khi thực hiện, ở mỗi vòng lặp biến <code>i</code> sẽ được gán lần lượt các giá trị trong vùng giá trị của lệnh <code>range()</code> và thực hiện khối lệnh. <strong>Lưu ý:</strong> Khối lệnh lặp phải được viết lùi vào so với dòng chứa lệnh <code>for</code>.</p>
                                
                                <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                    <p class="font-bold mb-2">Lệnh tạo vùng giá trị <code>range()</code>:</p>
                                    <ul class="space-y-2">
                                        <li><code>range(stop)</code>: trả lại vùng giá trị từ $0$ đến $stop - 1$.</li>
                                        <li><code>range(start, stop)</code>: trả lại vùng giá trị từ $start$ đến $stop - 1$.</li>
                                    </ul>
                                </div>
            
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div class="p-3 bg-blue-50 rounded-lg text-sm italic">
                                        - <code>range(n)</code>: các số $0, 1, ..., n – 1$.<br>
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
                                <div class="space-y-4">
                                    <!-- Bài 1 -->
                                    <div class="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                                        <p class="font-bold text-orange-900 text-sm md:text-base">Bài 1. In dãy số</p>
                                        <p class="text-sm">Viết chương trình in ra các số nguyên từ $1$ đến $n$ trên cùng một dòng.</p>
                                    </div>
                                    <!-- Bài 2 -->
                                    <div class="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                                        <p class="font-bold text-orange-900 text-sm md:text-base">Bài 2. In các số chẵn</p>
                                        <p class="text-sm">Nhập số nguyên dương $n$. In ra các số chẵn từ $1$ đến $n$. Gợi ý: <code>range(2, n+1, 2)</code>.</p>
                                    </div>
                                    <!-- Bài 3 -->
                                    <div class="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                                        <p class="font-bold text-orange-900 text-sm md:text-base">Bài 3. Tính tổng</p>
                                        <p class="text-sm">Nhập $n$. Tính và in ra tổng $S = 1 + 2 + ... + n$.</p>
                                    </div>
                                    <!-- Bài 4 -->
                                    <div class="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                                        <p class="font-bold text-orange-900 text-sm md:text-base">Bài 4. Bảng cửu chương</p>
                                        <p class="text-sm">Nhập $n$ ($1 \le n \le 9$). In ra bảng cửu chương của $n$.</p>
                                    </div>
                                    <!-- Bài 5 -->
                                    <div class="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                                        <p class="font-bold text-orange-900 text-sm md:text-base">Bài 5. Đếm số chia hết</p>
                                        <p class="text-sm">Đếm xem trong đoạn từ $1$ đến $n$ có bao nhiêu số chia hết cho $3$.</p>
                                    </div>
                                    <!-- Bài 6 -->
                                    <div class="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                                        <p class="font-bold text-orange-900 text-sm md:text-base">Bài 6. Tính giai thừa</p>
                                        <p class="text-sm">Nhập $n$. Tính $n! = 1 \times 2 \times ... \times n$.</p>
                                    </div>
                                    <!-- Bài 7 -->
                                    <div class="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                                        <p class="font-bold text-orange-900 text-sm md:text-base">Bài 7. Tính tổng dãy số</p>
                                        <p class="text-sm">Tính giá trị: $S = 1^2 + 2^2 + 3^2 + ... + n^2$.</p>
                                    </div>
                                    <!-- Bài 8 -->
                                    <div class="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                                        <p class="font-bold text-orange-900 text-sm md:text-base">Bài 8. Kiểm tra số nguyên tố</p>
                                        <p class="text-sm">Dùng vòng lặp <code>for</code> để kiểm tra $n$ có phải là số nguyên tố hay không.</p>
                                    </div>
                                    <!-- Bài 9 -->
                                    <div class="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                                        <p class="font-bold text-orange-900 text-sm md:text-base">Bài 9. Vẽ hình bằng ký tự *</p>
                                        <p class="text-sm">Nhập $n$. In ra $n$ dòng, mỗi dòng có $n$ dấu *.</p>
                                    </div>
                                    <!-- Bài 10 -->
                                    <div class="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                                        <p class="font-bold text-orange-900 text-sm md:text-base">Bài 10. Dãy Fibonacci</p>
                                        <p class="text-sm">Nhập $n$. In ra $n$ số Fibonacci đầu tiên ($0, 1, 1, 2, 3, 5, ...$).</p>
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
            { title: "Bài 21: Câu lệnh lặp while", videoId: "", desc: "Vòng lặp với số lần chưa biết trước.", downloadUrl: "#" },
            { title: "Bài 22: Kiểu dữ liệu danh sách (List)", videoId: "", desc: "Xử lý dãy số và dữ liệu mảng.", downloadUrl: "#" },
            { title: "Bài 23: Một số lệnh làm việc với dữ liệu danh sách", videoId: "", desc: "Các hàm append, remove, insert.", downloadUrl: "#" },
            { title: "Bài 24: Xâu ký tự", videoId: "", desc: "Xử lý văn bản trong Python.", downloadUrl: "#" },
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
