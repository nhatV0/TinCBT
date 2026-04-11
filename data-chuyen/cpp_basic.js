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
},
{
    title: "Bài 2: Cấu Trúc Rẽ Nhánh và Tư Duy Logic Tối Ưu",
    videoId: "",
    desc: "Làm chủ if-else, switch-case và các kỹ thuật lập trình chuyên nghiệp như Early Return, Boolean Flags để viết code sạch, rõ ràng và hiệu quả.",
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
                        <li>Nắm vững <strong>if-else</strong>, <strong>switch-case</strong> và các toán tử logic <code class="bg-slate-100 px-1 rounded">&&</code>, <code class="bg-slate-100 px-1 rounded">||</code>, <code class="bg-slate-100 px-1 rounded">!</code>.</li>
                        <li>Hiểu cơ chế <strong>Short-circuit (Ngắn mạch)</strong> và ứng dụng trong kiểm soát lỗi.</li>
                        <li>Nắm vững kỹ thuật kiểm soát luồng chương trình hiện đại và sạch đẹp.</li>
                    </ul>
                    <p class="font-semibold text-slate-800 mb-2">🛠️ Kỹ năng:</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Áp dụng <strong>Early Return</strong> để giảm độ sâu lồng nhau, làm phẳng code (<em>Flattening code</em>).</li>
                        <li>Sử dụng <strong>Boolean Flags</strong> để quản lý trạng thái logic phức tạp một cách tường minh.</li>
                        <li>Nhận biết và tái cấu trúc code "kim tự tháp" thành code chuyên nghiệp, dễ bảo trì.</li>
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
                        <p class="font-bold text-slate-800 mb-2">1. Cấu trúc rẽ nhánh cơ bản & Short-circuit</p>
                        <p class="mb-3"><code class="bg-slate-100 px-1 rounded">if-else</code> điều khiển luồng chương trình dựa trên điều kiện đúng/sai. Toán tử logic trong C++ hoạt động theo cơ chế <strong>Short-circuit (Ngắn mạch)</strong>:</p>
                        <div class="space-y-2 mb-3">
                            <div class="p-3 bg-emerald-50 rounded-xl border-l-4 border-emerald-500 text-sm">
                                <code class="font-mono text-emerald-800 font-bold">A && B</code>
                                <p class="text-slate-600 mt-1 text-xs">Nếu <code>A</code> sai → <strong>bỏ qua B</strong>, kết quả là <code>false</code> ngay.</p>
                            </div>
                            <div class="p-3 bg-emerald-50 rounded-xl border-l-4 border-emerald-500 text-sm">
                                <code class="font-mono text-emerald-800 font-bold">A || B</code>
                                <p class="text-slate-600 mt-1 text-xs">Nếu <code>A</code> đúng → <strong>bỏ qua B</strong>, kết quả là <code>true</code> ngay.</p>
                            </div>
                        </div>
                        <p class="text-sm"><strong>Ứng dụng thực tế:</strong> <code class="bg-slate-100 px-1 rounded font-mono text-xs">if (index &lt; n && a[index] == target)</code> — nhờ short-circuit, nếu <code>index &lt; n</code> sai thì <code>a[index]</code> sẽ <em>không bao giờ được truy cập</em>, tránh lỗi truy cập ngoài phạm vi mảng.</p>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-2">2. Kỹ thuật Early Return (Trả về sớm)</p>
                        <p class="mb-2">Thay vì lồng <code>if-else</code> nhiều tầng (mô hình <em>"kim tự tháp"</em>), hãy kiểm tra các điều kiện <strong>ngoại lệ / sai</strong> trước và <code>return</code> ngay lập tức. Luồng xử lý chính sẽ nằm ở cuối, không bị thụt lề sâu.</p>
                        <div class="flex gap-2 text-xs">
                            <div class="flex-1">
                                <p class="font-semibold text-red-600 mb-1">❌ Phong cách cũ (Lồng nhau)</p>
                                <pre class="bg-slate-900 text-red-300 p-3 rounded-xl font-mono text-xs overflow-x-auto">void check(int n) {
  if (n > 0) {
    if (n % 2 == 0) {
      // xử lý...
    } else {
      // xử lý...
    }
  }
}</pre>
                            </div>
                            <div class="flex-1">
                                <p class="font-semibold text-emerald-600 mb-1">✅ Early Return (Sạch)</p>
                                <pre class="bg-slate-900 text-blue-300 p-3 rounded-xl font-mono text-xs overflow-x-auto">void check(int n) {
  if (n &lt;= 0) return;
  // luồng chính ở đây
  // không bị lồng sâu
}</pre>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-2">3. Kỹ thuật Boolean Flags (Cờ hiệu)</p>
                        <p>Dùng biến <code class="bg-slate-100 px-1 rounded">bool</code> có <strong>tên gợi nhớ</strong> để lưu kết quả của biểu thức logic phức tạp, thay vì nhồi nhét tất cả vào một dòng <code>if</code> dài khó đọc.</p>
                        <pre class="bg-slate-900 text-blue-300 p-3 rounded-xl font-mono text-xs overflow-x-auto mt-2">// ❌ Khó đọc
if (a > 0 && b > 0 && a + b > c && a + c > b && b + c > a) { ... }

// ✅ Dùng Boolean Flag
bool is_triangle = (a > 0 && b > 0 && c > 0)
                && (a + b > c) && (a + c > b) && (b + c > a);
if (is_triangle) { ... }</pre>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-2">4. Code minh họa đầy đủ</p>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto">#include &lt;iostream&gt;
using namespace std;

// PHONG CÁCH CHUYÊN NGHIỆP: Early Return & Boolean Flags
void check_new(int n) {
    // Early Return: xử lý trường hợp biên trước
    if (n &lt;= 0) return;

    // Boolean Flag: tên biến nói lên tất cả
    bool is_even = (n % 2 == 0);

    if (is_even) {
        cout &lt;&lt; "So duong chan\n";
    } else {
        cout &lt;&lt; "So duong le\n";
    }
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n; cin &gt;&gt; n;
    check_new(n);

    return 0;
}</pre>
                    </div>

                    <div class="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                        <p class="font-bold text-red-700 mb-1">⚠️ Bẫy thường gặp</p>
                        <ul class="text-red-800 text-sm space-y-1 list-disc list-inside">
                            <li>Nhầm lẫn <code>=</code> (gán) với <code>==</code> (so sánh) trong điều kiện <code>if</code>.</li>
                            <li>Quên <code>break</code> trong <code>switch-case</code> gây ra hiện tượng <em>fall-through</em> ngoài ý muốn.</li>
                            <li>Dựa vào Short-circuit nhưng không hiểu thứ tự ưu tiên — luôn đặt điều kiện kiểm tra giới hạn <strong>trước</strong> điều kiện truy cập dữ liệu.</li>
                        </ul>
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
                        <p><strong>Bài 1.</strong> Nhập số nguyên $n$. Sử dụng <strong>Early Return</strong> để in ra <code>"Khong hop le"</code> nếu $n &lt; 0$, ngược lại kiểm tra và in ra chẵn hay lẻ.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">Input:</span>  -5<br>
                            <span class="text-slate-400">Output:</span> Khong hop le<br>
                            <span class="text-slate-400">---</span><br>
                            <span class="text-slate-400">Input:</span>  4<br>
                            <span class="text-slate-400">Output:</span> Chan
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p><strong>Bài 2.</strong> Nhập 3 số $a, b, c$. Sử dụng <strong>Boolean Flag</strong> <code>is_triangle</code> để kiểm tra 3 số đó có thể là độ dài 3 cạnh của một tam giác không.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">Input:</span>  3 4 5<br>
                            <span class="text-slate-400">Output:</span> La tam giac<br>
                            <span class="text-slate-400">---</span><br>
                            <span class="text-slate-400">Input:</span>  1 2 10<br>
                            <span class="text-slate-400">Output:</span> Khong phai tam giac
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p><strong>Bài 3.</strong> Viết lại bài toán kiểm tra <strong>năm nhuận</strong> bằng cách dùng đúng 1 biến <code>bool is_leap_year</code>. (Năm nhuận: chia hết cho 4 nhưng không chia hết cho 100, hoặc chia hết cho 400.)</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">Input:</span>  2024<br>
                            <span class="text-slate-400">Output:</span> Nam nhuan<br>
                            <span class="text-slate-400">---</span><br>
                            <span class="text-slate-400">Input:</span>  1900<br>
                            <span class="text-slate-400">Output:</span> Khong phai nam nhuan
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p><strong>Bài 4.</strong> Nhập một số từ 1 đến 7, in ra tên thứ trong tuần (1 = Thứ Hai, ..., 7 = Chủ Nhật). Dùng <code>switch-case</code> và xử lý đầu vào không hợp lệ bằng <code>default</code>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">Input:</span>  3<br>
                            <span class="text-slate-400">Output:</span> Thu Tu<br>
                            <span class="text-slate-400">---</span><br>
                            <span class="text-slate-400">Input:</span>  9<br>
                            <span class="text-slate-400">Output:</span> Khong hop le
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p><strong>Bài 5.</strong> Nhập điểm số $d$ (số thực, $0$ đến $10$). Dùng <code>if-else if</code> và Boolean Flag <code> is_valid </code> để xếp loại: Giỏi (>= $8$), Khá (< $8$,>= $6.5$), Trung Bình (< $6.5$,>= $5$), Yếu (còn lại). Nếu $d$ ngoài $[0, 10]$ thì báo lỗi.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">Input:</span>  7.5<br>
                            <span class="text-slate-400">Output:</span> Kha
                        </div>
                    </div>

                    <p class="font-bold text-indigo-600 uppercase text-xs tracking-widest mt-2">🏆 Đấu trường — Nâng cao</p>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p><strong>Bài 6. Điểm trong hình chữ nhật.</strong> Cho tọa độ góc dưới trái $(x_1, y_1)$, góc trên phải $(x_2, y_2)$ và điểm $M(x, y)$. Dùng <strong>Boolean Flags</strong> kiểm tra $M$ nằm <em>trong</em>, <em>trên cạnh</em>, hay <em>ngoài</em> hình chữ nhật.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span>  0 0 4 4 2 2<br>
                            <span class="text-slate-400">Output:</span> Trong hinh chu nhat
                        </div>
                        <p class="text-xs text-indigo-700 mt-2">💡 Gợi ý: Dùng <code>bool on_edge = (x==x1 || x==x2 || y==y1 || y==y2)</code> sau khi đã xác nhận điểm nằm trong vùng bao.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p><strong>Bài 7. Tam giác đặc biệt.</strong> Nhập 3 cạnh $a, b, c$. Phân loại: Đều, Cân, Vuông, hay Thường. Áp dụng <strong>Early Return</strong> để loại bỏ trường hợp không phải tam giác ngay từ đầu.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span>  3 4 5<br>
                            <span class="text-slate-400">Output:</span> Tam giac vuong<br>
                            <span class="text-slate-400">---</span><br>
                            <span class="text-slate-400">Input:</span>  5 5 5<br>
                            <span class="text-slate-400">Output:</span> Tam giac deu
                        </div>
                        <p class="text-xs text-indigo-700 mt-2">💡 Gợi ý: Kiểm tra vuông dùng $a^2 + b^2 = c^2$ (và các hoán vị). Dùng <code>long long</code> để tránh tràn số khi bình phương.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p><strong>Bài 8. Hệ phương trình bậc nhất.</strong> Giải hệ $\begin{cases} a_1x + b_1y = c_1 \\ a_2x + b_2y = c_2 \end{cases}$ bằng phương pháp Cramer. Sử dụng các biến flag để biện luận đầy đủ: vô số nghiệm, vô nghiệm, hoặc nghiệm duy nhất.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span>  1 1 3  1 -1 1<br>
                            <span class="text-slate-400">Output:</span> x = 2.00, y = 1.00
                        </div>
                        <p class="text-xs text-indigo-700 mt-2">💡 Gợi ý: $D = a_1 b_2 - a_2 b_1$. Dùng <code>bool has_unique = (D != 0)</code> để phân nhánh.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p><strong>Bài 9. Kiểm tra ngày hợp lệ.</strong> Nhập $d, m, y$. Kiểm tra xem ngày đó có tồn tại thực tế không (xử lý tháng 2 năm nhuận, tháng có 30/31 ngày). Đây là bài toán kinh điển kết hợp <code>if-else</code> và <code>switch-case</code>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span>  29 2 2024<br>
                            <span class="text-slate-400">Output:</span> Ngay hop le<br>
                            <span class="text-slate-400">---</span><br>
                            <span class="text-slate-400">Input:</span>  30 2 2023<br>
                            <span class="text-slate-400">Output:</span> Ngay khong hop le
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p><strong>Bài 10. Tối ưu trò chơi.</strong> Nhân vật chỉ tung kỹ năng khi thỏa <strong>cả 3</strong> điều kiện: (1) Đủ năng lượng (<code>energy &gt;= cost</code>), (2) Kỹ năng không trong thời gian hồi (<code>cooldown == 0</code>), (3) Không bị khống chế (<code>!is_stunned</code>). Nhập 3 trạng thái, in kết quả. <em>Yêu cầu: code không lồng nhau quá 2 tầng <code>if</code>.</em></p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span>  100 50 0 0   (energy cost cooldown is_stunned)<br>
                            <span class="text-slate-400">Output:</span> Co the su dung ky nang!<br>
                            <span class="text-slate-400">---</span><br>
                            <span class="text-slate-400">Input:</span>  100 50 3 0<br>
                            <span class="text-slate-400">Output:</span> Ky nang dang hoi chieu.
                        </div>
                        <p class="text-xs text-indigo-700 mt-2">💡 Gợi ý: Dùng 3 Boolean Flags riêng biệt rồi kết hợp: <code>bool can_cast = has_energy && off_cooldown && not_stunned;</code></p>
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
                            <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-mono">Guard Clauses C++</span>
                            <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-mono">Early Return pattern</span>
                            <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-mono">Clean code Boolean Logic</span>
                            <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-mono">Short-circuit evaluation C++</span>
                        </div>
                    </div>
                    <div class="pt-1">
                        <p class="font-semibold text-slate-700 mb-1">📖 Tài liệu đọc thêm:</p>
                        <ul class="list-disc list-inside space-y-1 text-slate-600">
                            <li>Blog về <em>"Code Refactoring"</em> — kỹ thuật thay thế các khối if-else phức tạp.</li>
                            <li><em>"Replace Nested Conditional with Guard Clauses"</em> — refactoring.guru</li>
                        </ul>
                    </div>
                </div>
            </details>

        </div>
    `
},
    {
    title: "Bài 3: Cấu trúc vòng lặp và kỹ thuật lồng nhau",
    videoId: "",
    desc: "Nắm vững for, while, do-while và kỹ thuật lồng vòng lặp để giải quyết các bài toán lập trình hiệu quả.",
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
                    <p class="font-bold text-slate-800 mb-2">📚 Kiến thức</p>
                    <ul class="list-disc list-inside space-y-1 mb-4">
                        <li>Hiểu rõ cơ chế hoạt động của <code class="bg-slate-100 px-1 rounded">for</code>, <code class="bg-slate-100 px-1 rounded">while</code>, <code class="bg-slate-100 px-1 rounded">do-while</code>.</li>
                        <li>Phân biệt được sự khác biệt giữa các loại vòng lặp và tình huống sử dụng tối ưu.</li>
                    </ul>
                    <p class="font-bold text-slate-800 mb-2">🛠️ Kỹ năng</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Kiểm soát biến chạy và điều kiện dừng để tránh vòng lặp vô tận.</li>
                        <li>Sử dụng thành thạo <code class="bg-slate-100 px-1 rounded">break</code>, <code class="bg-slate-100 px-1 rounded">continue</code>.</li>
                        <li>Làm chủ kỹ thuật lồng vòng lặp (Nested Loops) và tính toán sơ bộ độ phức tạp thời gian.</li>
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
                        <p class="font-bold text-slate-800 mb-2">1. Các loại vòng lặp</p>
                        <ul class="list-disc list-inside space-y-2">
                            <li><strong><code class="bg-slate-100 px-1 rounded">for</code>:</strong> Dùng khi biết trước số lần lặp hoặc có quy luật tăng tiến rõ ràng. Cực kỳ phổ biến trong duyệt mảng.</li>
                            <li><strong><code class="bg-slate-100 px-1 rounded">while</code>:</strong> Dùng khi số lần lặp phụ thuộc vào một điều kiện logic; thường dùng cho các bài toán mà số bước lặp không cố định ngay từ đầu.</li>
                            <li><strong><code class="bg-slate-100 px-1 rounded">do-while</code>:</strong> Tương tự <code class="bg-slate-100 px-1 rounded">while</code> nhưng thân vòng lặp luôn được thực thi <em>ít nhất một lần</em> trước khi kiểm tra điều kiện.</li>
                        </ul>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-2">2. Lệnh điều khiển bổ trợ</p>
                        <ul class="list-disc list-inside space-y-2">
                            <li><strong><code class="bg-slate-100 px-1 rounded">break</code>:</strong> Thoát ngay lập tức khỏi vòng lặp gần nhất chứa nó.</li>
                            <li><strong><code class="bg-slate-100 px-1 rounded">continue</code>:</strong> Bỏ qua phần còn lại của thân vòng lặp trong lần lặp hiện tại và bắt đầu ngay lần lặp mới.</li>
                        </ul>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-2">3. Vòng lặp lồng nhau (Nested Loops)</p>
                        <p class="mb-2">Là việc đặt một vòng lặp bên trong một vòng lặp khác. Mỗi lần vòng lặp ngoài chạy 1 bước, vòng lặp trong sẽ chạy hết toàn bộ chu kỳ của nó.</p>
                        <div class="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                            <p class="font-bold text-red-700 mb-1">⚠️ Lưu ý về độ phức tạp</p>
                            <p class="text-red-800">Nếu vòng ngoài chạy $N$ lần, vòng trong chạy $M$ lần, tổng số lần thực hiện lệnh là $N \times M$. Với $N, M = 10^4$, tổng số bước là $10^8$ — đây là ngưỡng giới hạn thường gặp cho 1 giây xử lý của CPU. Lồng vòng lặp quá sâu là nguyên nhân chính gây lỗi <strong>TLE (Time Limit Exceeded)</strong>.</p>
                        </div>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-2">4. Code minh họa (C++)</p>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto">#include &lt;iostream&gt;
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    // Ví dụ 1: Vòng lặp for - Tính tổng từ 1 đến n
    int n; cin &gt;&gt; n;
    long long sum = 0;
    for (int i = 1; i &lt;= n; ++i) {
        sum += i;
    }

    // Ví dụ 2: Vòng lặp while - Tìm chữ số đầu tiên của một số
    int m; cin &gt;&gt; m;
    int first_digit = m;
    while (first_digit &gt;= 10) {
        first_digit /= 10;
    }

    // Ví dụ 3: Vòng lặp lồng nhau - In bảng cửu chương
    for (int i = 1; i &lt;= 9; ++i) {
        for (int j = 1; j &lt;= 9; ++j) {
            cout &lt;&lt; i &lt;&lt; "x" &lt;&lt; j &lt;&lt; "=" &lt;&lt; i * j &lt;&lt; "\t";
        }
        cout &lt;&lt; "\n";
    }

    return 0;
}</pre>
                    </div>

                    <div class="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                        <p class="font-bold text-blue-700 mb-1">💡 Tư duy nâng cao</p>
                        <p class="text-blue-800">Các kỹ thuật như <strong>Hai con trỏ (Two Pointers)</strong> và <strong>Cửa sổ trượt (Sliding Window)</strong> có thể biến vòng lặp lồng nhau $O(N^2)$ thành vòng lặp đơn $O(N)$. Đây là hướng tư duy cần khám phá ở phần bài tập nâng cao!</p>
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

                    <p class="font-bold text-slate-800 uppercase text-xs tracking-widest text-slate-500">⭐ Cơ bản — Kiểm tra lý thuyết</p>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 1. Số chẵn trong khoảng</p>
                        <p class="mt-1 text-slate-600">Nhập số nguyên $N$. In ra các số chẵn từ $2$ đến $N$, mỗi số cách nhau một khoảng trắng.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> 10<br>
                            <span class="text-slate-400">Output:</span> 2 4 6 8 10
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 2. Tổng ước số</p>
                        <p class="mt-1 text-slate-600">Nhập số nguyên dương $N$. Tính và in ra tổng tất cả các ước số của $N$.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> 12<br>
                            <span class="text-slate-400">Output:</span> 28
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 3. Kiểm tra số nguyên tố</p>
                        <p class="mt-1 text-slate-600">Nhập số nguyên $N$. Kiểm tra $N$ có phải là số nguyên tố không. In ra <code>YES</code> hoặc <code>NO</code>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> 17 &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> YES<br>
                            <span class="text-slate-400">Input:</span> 12 &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> NO
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 4. Số chính phương</p>
                        <p class="mt-1 text-slate-600">Nhập số nguyên $N$. In ra tất cả các số chính phương nhỏ hơn hoặc bằng $N$.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> 30<br>
                            <span class="text-slate-400">Output:</span> 1 4 9 16 25
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 5. Đếm số chữ số</p>
                        <p class="mt-1 text-slate-600">Dùng vòng lặp <code class="bg-slate-100 px-1 rounded">while</code> đếm số lượng chữ số của một số nguyên $N$ (có thể âm).</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> -12345 &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> 5
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 6. Tính giai thừa</p>
                        <p class="mt-1 text-slate-600">Dùng vòng lặp tính $n!$ với $n \leq 20$.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> 5 &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> 120
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 7. Vẽ hình chữ nhật đặc</p>
                        <p class="mt-1 text-slate-600">Nhập $M$ và $N$. Dùng vòng lặp lồng nhau in ra hình chữ nhật đặc kích thước $M \times N$ bằng dấu <code>*</code>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> 3 5<br>
                            <span class="text-slate-400">Output:</span><br>
                            * * * * *<br>
                            * * * * *<br>
                            * * * * *
                        </div>
                    </div>

                    <p class="font-bold text-slate-800 uppercase text-xs tracking-widest text-slate-500 pt-2">🏆 Đấu trường — Nâng cao</p>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-900">Bài 8. Tam giác cân rỗng</p>
                        <p class="mt-1 text-indigo-800">Nhập $H$, in ra tam giác cân rỗng độ cao $H$ bằng dấu <code>*</code>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span> 4<br>
                            <span class="text-slate-400">Output:</span><br>
                            &nbsp;&nbsp;&nbsp;*<br>
                            &nbsp;&nbsp;* *<br>
                            &nbsp;* &nbsp; *<br>
                            * * * * *
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-900">Bài 9. Số hoàn hảo</p>
                        <p class="mt-1 text-indigo-800">Tìm và in ra tất cả các số hoàn hảo nhỏ hơn $10.000$. (Số hoàn hảo là số có tổng các ước thực sự bằng chính nó, ví dụ: $6 = 1 + 2 + 3$).</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Output:</span> 6 28 496 8128
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-900">Bài 10. Phân tích thừa số nguyên tố</p>
                        <p class="mt-1 text-indigo-800">Nhập $N$. In ra phân tích thừa số nguyên tố dạng $N = p_1^{a_1} \times p_2^{a_2} \times \ldots$</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span> 60 &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> 60 = 2^2 x 3^1 x 5^1
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-900">Bài 11. Dãy Fibonacci</p>
                        <p class="mt-1 text-indigo-800">Dùng vòng lặp (không dùng đệ quy) in ra $N$ số đầu tiên của dãy Fibonacci.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span> 7 &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> 0 1 1 2 3 5 8
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-900">Bài 12. ƯCLN bằng thuật toán Euclid</p>
                        <p class="mt-1 text-indigo-800">Nhập 2 số $a, b$. Dùng vòng lặp <code class="bg-indigo-100 px-1 rounded">while</code> triển khai thuật toán Euclid để tìm ước chung lớn nhất.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span> 48 18 &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> 6
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-900">Bài 13. 🧠 Bài toán cặp số (Tư duy tối ưu)</p>
                        <p class="mt-1 text-indigo-800">Cho dãy $N$ số nguyên và số $K$. Đếm số cặp $(i, j)$ với $i &lt; j$ sao cho $a_i + a_j = K$.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span> N=5, K=9, arr=[2, 7, 4, 5, 3]<br>
                            <span class="text-slate-400">Output:</span> 2
                        </div>
                        <div class="mt-2 p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-800">
                            💬 <strong>Thử sức:</strong> Giải bằng vòng lặp lồng $O(N^2)$ với $N = 10^3$. Sau đó tự hỏi: nếu $N = 10^5$, cần cải tiến thuật toán như thế nào? (Gợi ý: Two Pointers hoặc Hash Map)
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-3 text-sm md:text-base">
                    <p class="text-sm text-slate-500 italic">🎬 Video bài giảng đang được chuẩn bị, sẽ cập nhật sớm.</p>
                    <div class="mt-3">
                        <p class="font-semibold text-slate-700 mb-1">🔍 Từ khóa tìm kiếm gợi ý:</p>
                        <ul class="list-disc list-inside space-y-1 text-slate-600">
                            <li>Loops in C++ — for, while, do-while</li>
                            <li>Nested loops efficiency C++</li>
                            <li>Euclidean Algorithm loop implementation</li>
                            <li>Primality test C++ loop</li>
                        </ul>
                    </div>
                    <div class="mt-3">
                        <p class="font-semibold text-slate-700 mb-1">📖 Tài liệu đọc thêm:</p>
                        <p class="text-slate-600">Mục <strong>"Control flow"</strong> trên <a href="https://www.learncpp.com" target="_blank" class="text-blue-600 underline hover:text-blue-800">LearnCpp.com</a> — nguồn tài liệu C++ miễn phí chất lượng cao.</p>
                    </div>
                </div>
            </details>

        </div>
    `
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
