// File dữ liệu chi tiết cho khóa học Lập trình cơ bản
window.courseContent = [
    {
        chapterName: "Chuyên đề: Lập trình cơ bản",
        lessons: [
    {
    title: "Bài 1: Nhập / Xuất Dữ Liệu Và Tối Ưu Tốc Độ (Fast I/O)",
    videoId: "",
    desc: "Nắm vững kỹ thuật nhập xuất dữ liệu trong C++ và áp dụng Fast I/O để tránh lỗi TLE trong các kỳ thi lập trình.",
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
                    <p class="font-bold text-slate-800 mb-2">📘 Kiến thức:</p>
                    <ul class="list-disc list-inside space-y-1 mb-4">
                        <li>Hiểu bản chất luồng dữ liệu (stream) thông qua thư viện <code class="bg-slate-100 px-1 rounded">&lt;iostream&gt;</code>.</li>
                        <li>Phân biệt được <code class="bg-slate-100 px-1 rounded">std::cin/cout</code> và <code class="bg-slate-100 px-1 rounded">scanf/printf</code>.</li>
                        <li>Nắm vững cơ chế của bộ đệm (buffer) và vì sao nó ảnh hưởng đến hiệu suất.</li>
                    </ul>
                    <p class="font-bold text-slate-800 mb-2">🛠️ Kỹ năng:</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Sử dụng thành thạo các lệnh nhập xuất cơ bản trong C++.</li>
                        <li>Áp dụng kỹ thuật <strong>Fast I/O</strong> để tránh lỗi TLE (Time Limit Exceeded) trong các kỳ thi HSG.</li>
                        <li>Biết khi nào dùng <code class="bg-slate-100 px-1 rounded">'\n'</code> thay cho <code class="bg-slate-100 px-1 rounded">std::endl</code>.</li>
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-5 text-sm md:text-base">

                    <div>
                        <p class="font-bold text-slate-800 mb-1">1. Luồng dữ liệu (Stream) trong C++</p>
                        <p>C++ sử dụng khái niệm <strong>stream</strong> để đại diện cho luồng dữ liệu vào/ra:</p>
                        <ul class="list-disc list-inside mt-2 space-y-1">
                            <li><code class="bg-slate-100 px-1 rounded">std::cin</code>: Luồng nhập dữ liệu chuẩn (thường là bàn phím).</li>
                            <li><code class="bg-slate-100 px-1 rounded">std::cout</code>: Luồng xuất dữ liệu chuẩn (thường là màn hình).</li>
                        </ul>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-1">2. Tại sao <code>std::cin/cout</code> thường chậm?</p>
                        <p>Mặc định, <code class="bg-slate-100 px-1 rounded">cin</code> và <code class="bg-slate-100 px-1 rounded">cout</code> đồng bộ hóa với các hàm I/O của C (<code class="bg-slate-100 px-1 rounded">scanf/printf</code>). Việc duy trì đồng bộ này gây ra độ trễ rất lớn, đặc biệt khi xử lý dữ liệu lên tới $10^6$ dòng.</p>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-2">3. Kỹ thuật Fast I/O — "Bộ đôi thần thánh" ✨</p>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto">#include &lt;iostream&gt;
using namespace std;

int main() {
    // ===== FAST I/O =====
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    // ====================

    int n;
    cin &gt;&gt; n;
    cout &lt;&lt; "Gia tri n vua nhap la: " &lt;&lt; n &lt;&lt; '\n';

    return 0;
}</pre>
                        <ul class="list-disc list-inside mt-3 space-y-1">
                            <li><code class="bg-slate-100 px-1 rounded">ios_base::sync_with_stdio(false)</code>: Ngắt đồng bộ giữa C++ I/O và C I/O.</li>
                            <li><code class="bg-slate-100 px-1 rounded">cin.tie(NULL)</code>: Giải phóng liên kết giữa <code class="bg-slate-100 px-1 rounded">cin</code> và <code class="bg-slate-100 px-1 rounded">cout</code>, tránh flush bộ đệm không cần thiết.</li>
                        </ul>
                        <div class="mt-3 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                            <p class="font-bold text-red-700">⚠️ Lưu ý quan trọng:</p>
                            <p class="text-red-600 mt-1">Sau khi dùng Fast I/O, <strong>KHÔNG được trộn lẫn</strong> <code>cin/cout</code> với <code>scanf/printf</code> trong cùng một chương trình. Kết quả sẽ không xác định!</p>
                        </div>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-1">4. Vì sao không dùng <code>std::endl</code>?</p>
                        <p><code class="bg-slate-100 px-1 rounded">std::endl</code> không chỉ xuống dòng mà còn <strong>ép flush bộ đệm</strong>, gây tốn thời gian đáng kể khi xuất hàng trăm nghìn dòng.</p>
                        <div class="mt-2 p-4 bg-amber-50 rounded-xl border-l-4 border-amber-400">
                            <p class="font-bold text-amber-700">💡 Quy tắc vàng:</p>
                            <p class="text-amber-700 mt-1">Luôn dùng <code class="bg-amber-100 px-1 rounded">'\n'</code> thay cho <code class="bg-amber-100 px-1 rounded">endl</code> trong lập trình thi đấu.</p>
                        </div>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-1">5. Một số hàm nhập xuất hữu ích</p>
                        <ul class="list-disc list-inside space-y-1">
                            <li><code class="bg-slate-100 px-1 rounded">getline(cin, s)</code>: Đọc cả dòng kể cả khoảng trắng vào chuỗi <code>s</code>.</li>
                            <li><code class="bg-slate-100 px-1 rounded">fixed &lt;&lt; setprecision(k)</code>: Xuất số thực với đúng $k$ chữ số thập phân (cần <code>#include &lt;iomanip&gt;</code>).</li>
                            <li><code class="bg-slate-100 px-1 rounded">setw(n)</code>: Đặt chiều rộng trường xuất (căn lề bảng biểu).</li>
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

                    <p class="font-bold text-slate-600 uppercase tracking-wide text-xs">🟢 Cơ bản</p>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 1: Tính A + B</p>
                        <p class="mt-1 text-slate-600">Nhập vào 2 số nguyên $A$ và $B$, in ra tổng của chúng.</p>
                        <div class="mt-2 grid grid-cols-2 gap-2 text-xs font-mono">
                            <div class="bg-white p-2 rounded border"><p class="text-slate-400 mb-1">Input</p><p>3 7</p></div>
                            <div class="bg-white p-2 rounded border"><p class="text-slate-400 mb-1">Output</p><p>10</p></div>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 2: Tổng chữ số cuối</p>
                        <p class="mt-1 text-slate-600">Nhập vào 2 số nguyên $N$ và $M$ ($0 \le N, M \le 12345670$), tính tổng chữ số cuối của $N$ và $M$.</p>
                        <div class="mt-2 grid grid-cols-2 gap-2 text-xs font-mono">
                            <div class="bg-white p-2 rounded border"><p class="text-slate-400 mb-1">Input</p><p>123 456</p></div>
                            <div class="bg-white p-2 rounded border"><p class="text-slate-400 mb-1">Output</p><p>9</p></div>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 3: Xuất hai dòng chữ</p>
                        <p class="mt-1 text-slate-600">Viết chương trình xuất ra đúng 2 dòng:</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <p>XIN CHAO MUNG</p>
                            <p>DEN VOI UpCoder</p>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 4: Mã ASCII</p>
                        <p class="mt-1 text-slate-600">Nhập vào 1 ký tự, xuất ra mã ASCII của ký tự đó.</p>
                        <div class="mt-2 grid grid-cols-2 gap-2 text-xs font-mono">
                            <div class="bg-white p-2 rounded border"><p class="text-slate-400 mb-1">Input</p><p>A</p></div>
                            <div class="bg-white p-2 rounded border"><p class="text-slate-400 mb-1">Output</p><p>65</p></div>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 5: Xuất ký tự đặc biệt</p>
                        <p class="mt-1 text-slate-600">Xuất ra chính xác các dòng sau (chú ý dấu nháy đơn, nháy kép và không có dòng trống cuối):</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border space-y-0.5">
                            <p>Co gang hoc lap trinh tot - nhung dao duc phai tot nua</p>
                            <p>"Vi tuong lai"</p>
                            <p>'Tat ca co len'</p>
                            <p>&nbsp;</p>
                            <p>Ghi nho cac ky tu va lenh dac biet:</p>
                            <p>\n - xuong hang</p>
                            <p>endl - xuong hang</p>
                            <p>\t - tab</p>
                        </div>
                        <p class="mt-2 text-xs text-amber-600">⚠️ Dòng cuối cùng không có ký tự xuống hàng.</p>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 6: Biểu thức phân số</p>
                        <p class="mt-1 text-slate-600">Nhập 3 dòng, mỗi dòng 2 số nguyên. Tính $(a+b+c)/(d+e+f)$ lấy 1 chữ số thập phân.</p>
                        <div class="mt-2 grid grid-cols-2 gap-2 text-xs font-mono">
                            <div class="bg-white p-2 rounded border"><p class="text-slate-400 mb-1">Input</p><p>1 2</p><p>3 4</p><p>5 6</p></div>
                            <div class="bg-white p-2 rounded border"><p class="text-slate-400 mb-1">Output</p><p>0.4</p></div>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 7: Tổng số nguyên lớn</p>
                        <p class="mt-1 text-slate-600">Nhập vào 2 số nguyên $a, b$ với $|a|, |b| \le 10^9$, in ra tổng của chúng. Lưu ý kiểu dữ liệu phù hợp.</p>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 8: Làm tròn số thực</p>
                        <p class="mt-1 text-slate-600">Nhập một số thực $x$, in ra giá trị $x$ làm tròn đến 2 chữ số thập phân. <span class="text-blue-600">(Gợi ý: dùng <code>fixed</code> và <code>setprecision</code> trong <code>&lt;iomanip&gt;</code>)</span></p>
                        <div class="mt-2 grid grid-cols-2 gap-2 text-xs font-mono">
                            <div class="bg-white p-2 rounded border"><p class="text-slate-400 mb-1">Input</p><p>3.14159</p></div>
                            <div class="bg-white p-2 rounded border"><p class="text-slate-400 mb-1">Output</p><p>3.14</p></div>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 9: Đọc cả dòng văn bản</p>
                        <p class="mt-1 text-slate-600">Nhập một dòng văn bản có khoảng trắng và in lại đúng dòng đó ra màn hình. <span class="text-blue-600">(Gợi ý: dùng <code>getline</code>)</span></p>
                        <div class="mt-2 grid grid-cols-2 gap-2 text-xs font-mono">
                            <div class="bg-white p-2 rounded border"><p class="text-slate-400 mb-1">Input</p><p>xin chao the gioi</p></div>
                            <div class="bg-white p-2 rounded border"><p class="text-slate-400 mb-1">Output</p><p>xin chao the gioi</p></div>
                        </div>
                    </div>

                    <p class="font-bold text-indigo-600 uppercase tracking-wide text-xs pt-2">🔵 Nâng cao</p>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 10: Thử thách tốc độ ⚡</p>
                        <p class="mt-1 text-slate-600">Cho tệp dữ liệu gồm $10^6$ số nguyên. Viết chương trình tính tổng các số đó. Hãy đo và so sánh thời gian chạy khi <strong>có</strong> và <strong>không có</strong> <code class="bg-indigo-100 px-1 rounded">sync_with_stdio(false)</code>.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 11: Đọc đến EOF</p>
                        <p class="mt-1 text-slate-600">Viết chương trình đọc danh sách các số nguyên từ đầu vào cho đến khi hết tệp (EOF) và in ra số lớn nhất.</p>
                        <div class="mt-2 grid grid-cols-2 gap-2 text-xs font-mono">
                            <div class="bg-white p-2 rounded border"><p class="text-slate-400 mb-1">Input</p><p>3 1 4 1 5 9 2 6</p></div>
                            <div class="bg-white p-2 rounded border"><p class="text-slate-400 mb-1">Output</p><p>9</p></div>
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 12: Cộng số cực lớn</p>
                        <p class="mt-1 text-slate-600">Nhập vào hai số nguyên dương $A$, $B$ có tối đa 100 chữ số. Tính $A + B$. <span class="text-indigo-600">(Yêu cầu: nhập dưới dạng chuỗi <code>string</code>, cộng từng chữ số)</span></p>
                        <div class="mt-2 grid grid-cols-2 gap-2 text-xs font-mono">
                            <div class="bg-white p-2 rounded border"><p class="text-slate-400 mb-1">Input</p><p>99999999999999999999</p><p>1</p></div>
                            <div class="bg-white p-2 rounded border"><p class="text-slate-400 mb-1">Output</p><p>100000000000000000000</p></div>
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 13: Định dạng bảng</p>
                        <p class="mt-1 text-slate-600">Nhập danh sách 5 học sinh (Tên không dấu + Điểm). In ra bảng căn lề trái cho cột Tên (rộng 20 ký tự) và 1 chữ số thập phân cho cột Điểm. <span class="text-indigo-600">(Gợi ý: dùng <code>setw</code>, <code>left</code>)</span></p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 14: Trích xuất giờ:phút:giây</p>
                        <p class="mt-1 text-slate-600">Nhập một xâu định dạng <code class="bg-indigo-100 px-1 rounded">HH:MM:SS</code>. Trích xuất và in ra tổng số giây tính từ đầu ngày.</p>
                        <div class="mt-2 grid grid-cols-2 gap-2 text-xs font-mono">
                            <div class="bg-white p-2 rounded border"><p class="text-slate-400 mb-1">Input</p><p>01:02:03</p></div>
                            <div class="bg-white p-2 rounded border"><p class="text-slate-400 mb-1">Output</p><p>3723</p></div>
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 15: Lọc cặp số chẵn (Fast I/O)</p>
                        <p class="mt-1 text-slate-600">Cho tệp lớn chứa các cặp số $(x, y)$. Chỉ in ra các cặp mà $x + y$ là số chẵn. <strong>Bắt buộc</strong> dùng Fast I/O và <code>'\n'</code>. Giải thích tại sao dùng <code>endl</code> sẽ bị TLE.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 16: Tối ưu cực hạn — <code>getchar_unlocked()</code></p>
                        <p class="mt-1 text-slate-600">Tìm hiểu và tự viết hàm <code class="bg-indigo-100 px-1 rounded">ReadInt()</code> sử dụng <code>getchar_unlocked()</code> (môi trường Linux) để nhập số nguyên nhanh hơn cả <code>cin</code> với Fast I/O. So sánh benchmark.</p>
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 text-sm space-y-3">
                    <p class="text-sm text-slate-500 italic">📹 Video bài giảng đang được chuẩn bị.</p>
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold text-slate-700 mb-2">🔍 Từ khóa tìm kiếm gợi ý:</p>
                        <ul class="list-disc list-inside space-y-1 text-slate-600">
                            <li>"Fast I/O in C++ Competitive Programming"</li>
                            <li>"C++ cin vs scanf benchmark"</li>
                            <li>"Buffer flushing C++ endl vs \\n"</li>
                            <li>Kênh tham khảo: <strong>Luv Khanna</strong>, <strong>William Lin</strong> trên YouTube.</li>
                        </ul>
                    </div>
                </div>
            </details>

        </div>
    `
},
            { 
                title: "Rẽ nhánh", 
                videoId: "", 
                desc: "Tư duy logic với if-else, switch-case, các biểu thức điều kiện.", 
                downloadUrl: "#" 
            },
            { 
                title: "Vòng lặp", 
                videoId: "", 
                desc: "Xử lý các công việc lặp lại (for, while, do-while), kỹ thuật lồng vòng lặp.", 
                downloadUrl: "#" 
            },
            { 
                title: "Hàm", 
                videoId: "", 
                desc: "Tư duy chia nhỏ bài toán (Modular programming), phạm vi biến và truyền tham số.", 
                downloadUrl: "#" 
            },
            { 
                title: "Mảng", 
                videoId: "", 
                desc: "Cấu trúc dữ liệu tuyến tính đầu tiên, quản lý dãy số và bảng số.", 
                downloadUrl: "#" 
            },
            { 
                title: "Cấu trúc (Struct)", 
                videoId: "", 
                desc: "Cách gom nhóm các thuộc tính để mô tả một thực thể phức tạp hơn.", 
                downloadUrl: "#" 
            }
        ]
    }
];
