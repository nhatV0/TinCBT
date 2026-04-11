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
                        <p><strong>Bài 5.</strong> Nhập điểm số $d$ (số thực, $0 \le d \le 10$). Dùng <code>if-else if</code> và Boolean Flag <code>is_valid</code> để xếp loại: Giỏi ($\ge 8$), Khá ($\ge 6.5$), Trung Bình ($\ge 5$), Yếu (còn lại). Nếu $d$ ngoài $[0, 10]$ thì báo lỗi.</p>
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
