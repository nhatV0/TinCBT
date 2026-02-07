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
                videoId: "", // Video đã được chuyển vào contentHtml Mục IV
                desc: "Tìm hiểu cấu trúc lặp với số lần biết trước trong lập trình Python và hàm range().",
                downloadUrl: "#",
                contentHtml: `
                    <div class="space-y-6 mt-4 text-left">
                        <!-- I. Mục tiêu -->
                        <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm" open>
                            <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                                <div class="flex items-center gap-3">
                                    <div class="p-2 bg-blue-600 text-white rounded-lg shadow-md"><i data-lucide="target" class="w-5 h-5"></i></div>
                                    <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">I. Mục tiêu bài học</span>
                                </div>
                                <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                            </summary>
                            <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-3 leading-relaxed text-sm md:text-base">
                                <p><strong>Kiến thức:</strong> Hiểu được cấu trúc và cách hoạt động của câu lệnh lặp <code>for</code> với vùng giá trị <code>range()</code>.</p>
                                <p><strong>Kĩ năng:</strong> Sử dụng lệnh <code>for</code> và hàm <code>range()</code> để giải quyết bài toán lặp.</p>
                            </div>
                        </details>

                        <!-- II. Lý thuyết -->
                        <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                            <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                                <div class="flex items-center gap-3">
                                    <div class="p-2 bg-emerald-600 text-white rounded-lg shadow-md"><i data-lucide="book-open" class="w-5 h-5"></i></div>
                                    <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">II. Lý thuyết trọng tâm</span>
                                </div>
                                <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                            </summary>
                            <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-4">
                                <p>Cấu trúc: <code>for i in range(n):</code></p>
                                <p>Hàm <code>range(n)</code> tạo dãy số từ $0$ đến $n-1$.</p>
                                <div class="bg-slate-50 p-4 rounded-xl border border-dashed border-slate-300">
                                    <p class="text-sm italic">Ví dụ: <code>range(5)</code> sẽ tạo ra các giá trị: 0, 1, 2, 3, 4.</p>
                                </div>
                            </div>
                        </details>

                        <!-- III. Bài tập vận dụng -->
                        <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                            <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                                <div class="flex items-center gap-3">
                                    <div class="p-2 bg-orange-500 text-white rounded-lg shadow-md"><i data-lucide="pen-tool" class="w-5 h-5"></i></div>
                                    <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">III. Bài tập vận dụng</span>
                                </div>
                                <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                            </summary>
                            <div class="p-6 pt-0 border-t border-slate-100 text-slate-700 space-y-4">
                                <div class="bg-orange-50 p-4 rounded-xl border-l-4 border-orange-400">
                                    <p class="font-bold text-orange-900">Bài tập 1:</p>
                                    <p class="text-sm text-orange-800">Viết chương trình in ra các số chẵn từ 0 đến 10 sử dụng vòng lặp <code>for</code>.</p>
                                </div>
                                <pre class="bg-slate-900 text-green-400 p-4 rounded-xl text-xs overflow-x-auto">for i in range(0, 11, 2):
    print(i)</pre>
                            </div>
                        </details>

                        <!-- IV. Học liệu kèm theo -->
                        <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                            <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                                <div class="flex items-center gap-3">
                                    <div class="p-2 bg-red-600 text-white rounded-lg shadow-md"><i data-lucide="play-circle" class="w-5 h-5"></i></div>
                                    <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">IV. Học liệu kèm theo</span>
                                </div>
                                <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                            </summary>
                            <div class="p-6 pt-0 border-t border-slate-100">
                                <p class="text-sm text-slate-500 mb-4 italic">Thầy/Cô và các em có thể xem video hướng dẫn chi tiết bên dưới:</p>
                                <div class="aspect-video w-full rounded-xl overflow-hidden shadow-lg border-4 border-slate-100">
                                    <iframe class="w-full h-full" src="https://www.youtube.com/embed/6f_iM0vY0C4" frameborder="0" allowfullscreen></iframe>
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
