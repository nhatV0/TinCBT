// File dữ liệu bài học Tin học 11 - Định hướng Tin học ứng dụng (Kết nối tri thức)
window.courseContent = [
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
                                <p class="font-bold text-blue-700">Kiến thức và kỹ năng:</p>
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
                                <p class="font-bold text-emerald-800 underline">Quy tắc khai báo khóa ngoài:</p>
                                <ul class="list-decimal ml-5 space-y-2">
                                    <li>Trường được chọn làm khóa ngoài phải có kiểu dữ liệu <strong>tương thích</strong> với trường khóa chính mà nó tham chiếu đến.</li>
                                    <li>Cần xác định chính xác bảng tham chiếu ($Reference table$) và trường tham chiếu tương ứng.</li>
                                </ul>
                                <p class="bg-slate-100 p-3 rounded-lg">
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
                                    <!-- Bước 1 -->
                                    <div class="border-b pb-4">
                                        <p class="font-bold text-slate-900 mb-2 uppercase text-xs tracking-widest text-orange-600">Bước 1: Khai báo trường dữ liệu</p>
                                        <ul class="list-disc ml-5 space-y-1">
                                            <li>Tạo bảng tên: $bannhac$.</li>
                                            <li>Trường $idBannhac$: Kiểu $INT$, bỏ $Allow NULL$, mặc định $AUTO\\_INCREMENT$.</li>
                                            <li>Trường $tenBannhac$: Kiểu $VARCHAR$, độ dài $255$, mặc định kí tự rỗng "".</li>
                                            <li>Dùng $Ctrl+Insert$ để thêm nhanh cột mới.</li>
                                        </ul>
                                    </div>

                                    <!-- Bước 2 -->
                                    <div class="border-b pb-4">
                                        <p class="font-bold text-slate-900 mb-2 uppercase text-xs tracking-widest text-orange-600">Bước 2: Khai báo các trường khóa</p>
                                        <div class="space-y-3">
                                            <p><strong>a) Khóa chính:</strong> Chuột phải vào $idBannhac$ &rarr; $Create new index$ &rarr; $PRIMARY$.</p>
                                            
                                            <div class="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                                                <p><strong>b) Khóa chống trùng lặp (UNIQUE):</strong></p>
                                                <p class="mb-2">Đánh dấu cả 2 trường $tenBannhac$ và $idNhacsi$ &rarr; $Create new index$ &rarr; $UNIQUE$.</p>
                                                <p class="text-xs italic text-blue-800"><strong>Giải thích:</strong> Việc chọn đồng thời cả 2 trường giúp hệ thống ngăn chặn việc nhập trùng cùng một bài hát của cùng một nhạc sĩ, trong khi vẫn cho phép một bài hát có thể được sáng tác bởi nhiều nhạc sĩ khác nhau (nếu cần).</p>
                                            </div>

                                            <p><strong>c) Khóa ngoài:</strong> Chọn thẻ $Foreign Key$ &rarr; Chọn $idNhacsi$ &rarr; Tham chiếu đến bảng $nhacsi$.</p>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-center font-bold text-green-600 italic">Nhấn "Lưu" để hoàn tất!</p>
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
            { title: "Bài 25: Phần mềm chỉnh sửa ảnh", videoId: "", desc: "Làm quen giao diện và công cụ cơ bản.", downloadUrl: "#" },
            { title: "Bài 26: Công cụ tinh chỉnh màu sắc và công cụ chọn", videoId: "", desc: "Kỹ thuật xử lý ảnh nâng cao.", downloadUrl: "#" },
            { title: "Bài 27: Công cụ vẽ và một số ứng dụng", videoId: "", desc: "Vẽ và thiết kế trên phần mềm chỉnh sửa ảnh.", downloadUrl: "#" },
            { title: "Bài 28: Tạo ảnh động", videoId: "", desc: "Thiết kế các tệp ảnh động (GIF).", downloadUrl: "#" },
            { title: "Bài 29: Khám phá phần mềm làm phim", videoId: "", desc: "Giao diện và các thành phần của phần mềm dựng video.", downloadUrl: "#" },
            { title: "Bài 30: Biên tập phim", videoId: "", desc: "Cắt ghép và chèn hiệu ứng cho video.", downloadUrl: "#" },
            { title: "Bài 31: Thực hành tạo phim hoạt hình", videoId: "", desc: "Sáng tạo nội dung video hoạt hình đơn giản.", downloadUrl: "#" }
        ]
    }
];
