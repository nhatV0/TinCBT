// File dữ liệu chi tiết cho khóa học Lập trình cơ bản
window.courseContent = [
    {
        chapterName: "Chuyên đề: Lập trình cơ bản",
        lessons: [
    {
    title: "Bài 1: Nhập/Xuất Cơ Bản và Tối Ưu Tốc Độ (Fast I/O)",
    videoId: "",
    desc: "Nắm vững cơ chế luồng nhập xuất trong C++ và các kỹ thuật tối ưu tốc độ I/O để tránh lỗi TLE trong lập trình thi đấu.",
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 leading-relaxed text-sm md:text-base">
                    <p class="font-semibold text-slate-800 mb-2">📚 Kiến thức:</p>
                    <ul class="list-disc list-inside space-y-1 mb-4">
                        <li>Hiểu rõ cơ chế hoạt động của <strong>luồng (stream)</strong> trong C++.</li>
                        <li>Phân biệt giữa <code class="bg-slate-100 px-1 rounded">cin/cout</code> và <code class="bg-slate-100 px-1 rounded">scanf/printf</code>.</li>
                        <li>Nắm vững kỹ thuật <strong>đồng bộ hóa luồng</strong> và tại sao cần tắt nó khi thi đấu.</li>
                    </ul>
                    <p class="font-semibold text-slate-800 mb-2">🛠️ Kỹ năng:</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Triển khai thành thạo các câu lệnh nhập xuất tối ưu (Fast I/O).</li>
                        <li>Làm chủ các định dạng xuất dữ liệu số thực với <code class="bg-slate-100 px-1 rounded">setprecision</code>.</li>
                        <li>Xử lý khoảng trắng, đọc đến EOF và quản lý thời gian thực thi để tránh <strong>TLE</strong>.</li>
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-5 text-sm md:text-base">

                    <div>
                        <p class="font-bold text-slate-800 mb-1">1. Luồng nhập xuất tiêu chuẩn (iostream)</p>
                        <p>Trong C++, <code class="bg-slate-100 px-1 rounded">cin</code> và <code class="bg-slate-100 px-1 rounded">cout</code> là các đối tượng thuộc thư viện <code class="bg-slate-100 px-1 rounded">&lt;iostream&gt;</code>. Chúng rất linh hoạt vì <strong>tự động nhận diện kiểu dữ liệu</strong>, nhưng mặc định sẽ chậm hơn so với <code class="bg-slate-100 px-1 rounded">scanf/printf</code> của C do cơ chế đồng bộ hóa với luồng C.</p>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-2">2. Kỹ thuật Fast I/O (Tối ưu tốc độ)</p>
                        <p class="mb-3">Trong các kỳ thi HSG, lượng dữ liệu đầu vào có thể lên đến $10^6$ dòng. Nếu dùng <code class="bg-slate-100 px-1 rounded">cin/cout</code> mặc định, chương trình dễ bị <strong>TLE</strong>. Ba bí quyết tối ưu:</p>
                        <div class="space-y-2">
                            <div class="p-3 bg-emerald-50 rounded-xl border-l-4 border-emerald-500">
                                <code class="font-mono text-emerald-800 font-bold">ios_base::sync_with_stdio(false);</code>
                                <p class="text-slate-600 mt-1 text-xs">Ngắt kết nối luồng C++ và C. <strong>Lưu ý:</strong> sau lệnh này, <u>không được dùng xen kẽ</u> <code>cin</code> và <code>scanf</code>.</p>
                            </div>
                            <div class="p-3 bg-emerald-50 rounded-xl border-l-4 border-emerald-500">
                                <code class="font-mono text-emerald-800 font-bold">cin.tie(NULL);</code>
                                <p class="text-slate-600 mt-1 text-xs">Ngắt liên kết giữa <code>cin</code> và <code>cout</code>. Bình thường <code>cout</code> bị flush mỗi khi gọi <code>cin</code> — lệnh này loại bỏ chi phí đó.</p>
                            </div>
                            <div class="p-3 bg-emerald-50 rounded-xl border-l-4 border-emerald-500">
                                <code class="font-mono text-emerald-800 font-bold">'\n'</code> thay cho <code class="font-mono text-emerald-800 font-bold">endl</code>
                                <p class="text-slate-600 mt-1 text-xs"><code>endl</code> thực hiện thêm thao tác <strong>flush buffer</strong> — rất tốn thời gian khi in hàng triệu dòng.</p>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                        <p class="font-bold text-red-700 mb-1">⚠️ Cảnh báo quan trọng</p>
                        <p class="text-red-800 text-sm">Sau khi gọi <code>ios_base::sync_with_stdio(false)</code>, tuyệt đối <strong>không được trộn lẫn</strong> <code>cin/cout</code> với <code>scanf/printf/puts/getchar</code>. Hành vi sẽ trở nên không xác định!</p>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-2">3. Code mẫu đầy đủ</p>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto">#include &lt;iostream&gt;
#include &lt;iomanip&gt; // Thư viện định dạng đầu ra

using namespace std;

int main() {
    // ✅ Kích hoạt Fast I/O — đặt ngay đầu main()
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    double x;

    // Nhập dữ liệu (tự nhận diện kiểu)
    cin &gt;&gt; n &gt;&gt; x;

    // Xuất số thực với 2 chữ số thập phân
    cout &lt;&lt; fixed &lt;&lt; setprecision(2) &lt;&lt; x &lt;&lt; "\n";

    // Xuất số nguyên — dùng "\n" thay endl
    cout &lt;&lt; "Gia tri n: " &lt;&lt; n &lt;&lt; "\n";

    return 0;
}</pre>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-2">4. So sánh tốc độ</p>
                        <div class="overflow-x-auto">
                            <table class="w-full text-xs border-collapse">
                                <thead>
                                    <tr class="bg-slate-100">
                                        <th class="border border-slate-200 px-3 py-2 text-left">Phương pháp</th>
                                        <th class="border border-slate-200 px-3 py-2">Tốc độ</th>
                                        <th class="border border-slate-200 px-3 py-2">Ghi chú</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border border-slate-200 px-3 py-2 font-mono">cin/cout (mặc định)</td>
                                        <td class="border border-slate-200 px-3 py-2 text-center text-red-500">Chậm</td>
                                        <td class="border border-slate-200 px-3 py-2">Dễ TLE với dữ liệu lớn</td>
                                    </tr>
                                    <tr class="bg-slate-50">
                                        <td class="border border-slate-200 px-3 py-2 font-mono">scanf/printf</td>
                                        <td class="border border-slate-200 px-3 py-2 text-center text-yellow-500">Khá nhanh</td>
                                        <td class="border border-slate-200 px-3 py-2">Phải khai báo kiểu thủ công</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-slate-200 px-3 py-2 font-mono">cin + Fast I/O</td>
                                        <td class="border border-slate-200 px-3 py-2 text-center text-emerald-600 font-bold">Nhanh ✅</td>
                                        <td class="border border-slate-200 px-3 py-2">Khuyến nghị dùng trong thi</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </details>

            <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <summary class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-orange-500 text-white rounded-lg shadow-md"><i data-lucide="pen-tool" class="w-5 h-5"></i></div>
                        <span class="font-black text-slate-800 uppercase tracking-tight text-sm md:text-base">III. Bài tập vận dụng</span>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"></i>
                </summary>
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-4 text-sm md:text-base">

                    <p class="font-bold text-slate-600 uppercase text-xs tracking-widest">⭐ Cơ bản — Kiểm tra lý thuyết</p>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p><strong>Bài 1.</strong> Viết chương trình nhập vào 2 số nguyên $a, b$ ($|a, b| \le 10^9$) và in ra tổng của chúng.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">Input:</span>  1000000000 999999999<br>
                            <span class="text-slate-400">Output:</span> 1999999999
                        </div>
                        <p class="text-xs text-amber-700 mt-2 bg-amber-50 px-2 py-1 rounded">💡 Gợi ý: Chú ý kiểu dữ liệu — tổng có thể vượt quá <code>int</code>!</p>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p><strong>Bài 2.</strong> Nhập một số thực $R$ là bán kính hình tròn. Tính và in ra chu vi, diện tích với đúng <strong>3 chữ số thập phân</strong>. (Dùng $\pi \approx 3.14159265358979$)</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">Input:</span>  5<br>
                            <span class="text-slate-400">Output:</span> 31.416<br>
                                    78.540
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p><strong>Bài 3.</strong> Nhập vào một ký tự, in ra <strong>mã ASCII</strong> của ký tự đó.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">Input:</span>  A<br>
                            <span class="text-slate-400">Output:</span> 65
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p><strong>Bài 4.</strong> Nhập vào 3 số nguyên, in chúng trên một dòng, cách nhau bởi dấu tab (<code>\t</code>).</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">Input:</span>  1 2 3<br>
                            <span class="text-slate-400">Output:</span> 1&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;3
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p><strong>Bài 5.</strong> Nhập vào số nguyên $N$, sau đó nhập tiếp $N$ số nguyên khác và in ra số lớn nhất. <em>(Yêu cầu: sử dụng Fast I/O)</em></p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">Input:</span>  5<br>
                                    3 1 4 1 5<br>
                            <span class="text-slate-400">Output:</span> 5
                        </div>
                    </div>

                    <p class="font-bold text-indigo-600 uppercase text-xs tracking-widest mt-2">🏆 Đấu trường — Nâng cao</p>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p><strong>Bài 6. Xử lý dòng.</strong> Nhập vào một dòng văn bản có chứa khoảng trắng và in lại dòng đó nguyên vẹn ra màn hình.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span>  Hello World C++<br>
                            <span class="text-slate-400">Output:</span> Hello World C++
                        </div>
                        <p class="text-xs text-indigo-700 mt-2">💡 Gợi ý: Dùng <code>getline(cin, s)</code>. Chú ý bộ đệm newline nếu trước đó đã dùng <code>cin &gt;&gt;</code>.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p><strong>Bài 7. Định dạng số lớn.</strong> Nhập vào số nguyên dương $n$ ($n \le 12$). Tính $n!$ và in kết quả <strong>căn lề phải trong độ rộng 10 ký tự</strong>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span>  5<br>
                            <span class="text-slate-400">Output:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;120
                        </div>
                        <p class="text-xs text-indigo-700 mt-2">💡 Gợi ý: Dùng <code>setw(10)</code> từ thư viện <code>&lt;iomanip&gt;</code>.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p><strong>Bài 8. Thách thức thời gian.</strong> Cho tệp dữ liệu gồm $10^6$ số nguyên. Đọc toàn bộ và tính tổng. Yêu cầu thực thi dưới <strong>0.2s</strong>.</p>
                        <p class="text-xs text-indigo-700 mt-2">💡 Gợi ý: Bắt buộc phải dùng Fast I/O. Dùng <code>long long</code> để tránh tràn số.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p><strong>Bài 9. Đọc đến EOF.</strong> Viết chương trình đọc các cặp số $a, b$ cho đến khi kết thúc tệp và in ra $a + b$ cho mỗi cặp.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span>  1 2<br>
                                    10 20<br>
                                    100 200<br>
                            <span class="text-slate-400">Output:</span> 3<br>
                                    30<br>
                                    300
                        </div>
                        <p class="text-xs text-indigo-700 mt-2">💡 Gợi ý: <code>while (cin &gt;&gt; a &gt;&gt; b)</code> tự dừng khi hết dữ liệu.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p><strong>Bài 10. Tối ưu phức hợp.</strong> Cho $T$ bộ dữ liệu ($T \le 10^5$), mỗi bộ gồm số nguyên $N$ ($N \le 10^6$). In ra $2 \times N$ cho mỗi bộ. Hãy <strong>đo và so sánh</strong> thời gian chạy khi dùng <code>endl</code> và khi dùng <code>"\n"</code>.</p>
                        <p class="text-xs text-indigo-700 mt-2">💡 Mục tiêu: Thực nghiệm để thấy rõ <code>endl</code> chậm hơn <code>"\n"</code> như thế nào với dữ liệu lớn.</p>
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-3 text-sm">
                    <p class="text-slate-500 italic">📹 Video đang được chuẩn bị.</p>
                    <div class="pt-2">
                        <p class="font-semibold text-slate-700 mb-2">🔍 Từ khóa tìm kiếm gợi ý:</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-mono">Fast I/O in C++</span>
                            <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-mono">C++ iostream vs cstdio</span>
                            <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-mono">Competitive Programming Input Optimization</span>
                            <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-mono">iomanip setprecision C++</span>
                        </div>
                    </div>
                    <div class="pt-1">
                        <p class="font-semibold text-slate-700 mb-1">📖 Tài liệu đọc thêm:</p>
                        <ul class="list-disc list-inside space-y-1 text-slate-600">
                            <li>Mục <em>"Input/Output"</em> trên <strong>cp-algorithms.com</strong></li>
                            <li>Bài viết <em>"Fast I/O for Competitive Programming"</em> trên <strong>GeeksforGeeks</strong></li>
                        </ul>
                    </div>
                </div>
            </details>

        </div>
    `
}
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
            },
        ]
    }
];
