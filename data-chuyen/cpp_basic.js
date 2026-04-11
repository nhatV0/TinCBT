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
    title: "Bài 5: Mảng một chiều và kỹ thuật xử lý dãy số",
    videoId: "",
    desc: "Nắm vững cách khai báo, duyệt và xử lý mảng một chiều — nền tảng thiết yếu cho mọi bài toán dữ liệu trong lập trình thi đấu.",
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
                        <li>Hiểu cấu trúc bộ nhớ của mảng một chiều, cách khai báo tĩnh và động.</li>
                        <li>Nắm vững chỉ số mảng (index), truy cập phần tử và duyệt mảng.</li>
                        <li>Hiểu sự khác biệt giữa khai báo mảng toàn cục và cục bộ.</li>
                    </ul>
                    <p class="font-bold text-slate-800 mb-2">🛠️ Kỹ năng</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Thực hiện các thao tác cơ bản: tìm min/max, tính tổng, đếm phần tử thỏa điều kiện.</li>
                        <li>Xây dựng mảng tiền tố (Prefix Sum) để tối ưu truy vấn tổng đoạn.</li>
                        <li>Áp dụng kỹ thuật đảo mảng, dịch chuyển và nén dữ liệu.</li>
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
                        <p class="font-bold text-slate-800 mb-2">1. Khai báo và khởi tạo mảng</p>
                        <p class="mb-2">Mảng là tập hợp các phần tử <strong>cùng kiểu dữ liệu</strong>, được lưu trữ liên tiếp trong bộ nhớ và truy cập qua chỉ số (bắt đầu từ <code class="bg-slate-100 px-1 rounded">0</code>).</p>
                        <ul class="list-disc list-inside space-y-1 mb-3">
                            <li><strong>Mảng toàn cục:</strong> Tự động khởi tạo bằng <code class="bg-slate-100 px-1 rounded">0</code>. Dùng cho mảng kích thước lớn ($\geq 10^5$) để tránh Stack Overflow.</li>
                            <li><strong>Mảng cục bộ:</strong> Giá trị ban đầu ngẫu nhiên (rác). Cần khởi tạo thủ công hoặc dùng <code class="bg-slate-100 px-1 rounded">memset</code>.</li>
                        </ul>
                        <div class="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                            <p class="font-bold text-red-700 mb-1">⚠️ Lỗi phổ biến nhất: Truy cập ngoài biên (Out of Bounds)</p>
                            <p class="text-red-800">Mảng kích thước $N$ có chỉ số hợp lệ từ $0$ đến $N-1$. Truy cập <code class="bg-red-100 px-1 rounded">a[N]</code> gây <strong>Undefined Behavior</strong> — lỗi cực kỳ khó debug. Hãy luôn khai báo mảng dư ra vài phần tử (ví dụ: <code class="bg-red-100 px-1 rounded">int a[MAX_N + 5]</code>).</p>
                        </div>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-2">2. Các thao tác cơ bản</p>
                        <div class="overflow-x-auto">
                            <table class="w-full text-xs md:text-sm border-collapse">
                                <thead>
                                    <tr class="bg-slate-100">
                                        <th class="p-2 border border-slate-200 text-left">Thao tác</th>
                                        <th class="p-2 border border-slate-200 text-left">Độ phức tạp</th>
                                        <th class="p-2 border border-slate-200 text-left">Ghi chú</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td class="p-2 border border-slate-200">Duyệt toàn bộ mảng</td><td class="p-2 border border-slate-200 font-mono">$O(N)$</td><td class="p-2 border border-slate-200">Vòng lặp for từ 0 đến N-1</td></tr>
                                    <tr class="bg-slate-50"><td class="p-2 border border-slate-200">Tìm Min / Max</td><td class="p-2 border border-slate-200 font-mono">$O(N)$</td><td class="p-2 border border-slate-200">Duyệt 1 lần, cập nhật biến kết quả</td></tr>
                                    <tr><td class="p-2 border border-slate-200">Tính tổng đoạn $[l, r]$</td><td class="p-2 border border-slate-200 font-mono">$O(N)$ → $O(1)$</td><td class="p-2 border border-slate-200">Dùng Prefix Sum để tối ưu</td></tr>
                                    <tr class="bg-slate-50"><td class="p-2 border border-slate-200">Đảo ngược mảng</td><td class="p-2 border border-slate-200 font-mono">$O(N)$</td><td class="p-2 border border-slate-200">Swap từ hai đầu vào giữa</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-2">3. Kỹ thuật Prefix Sum (Mảng tiền tố)</p>
                        <p class="mb-2">Cho phép trả lời truy vấn <strong>"tổng các phần tử từ chỉ số $l$ đến $r$"</strong> trong $O(1)$ thay vì $O(N)$ sau $O(N)$ tiền xử lý.</p>
                        <p class="mb-1 font-semibold">Công thức xây dựng:</p>
                        <p class="mb-2 font-mono bg-slate-100 px-3 py-1 rounded-lg inline-block">$prefix[i] = prefix[i-1] + a[i]$</p>
                        <p class="mb-1 font-semibold">Truy vấn tổng đoạn $[l, r]$:</p>
                        <p class="font-mono bg-slate-100 px-3 py-1 rounded-lg inline-block">$sum(l, r) = prefix[r] - prefix[l-1]$</p>
                        <div class="mt-3 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                            <p class="font-bold text-blue-700 mb-1">💡 Tại sao quan trọng?</p>
                            <p class="text-blue-800">Nếu có $Q = 10^5$ truy vấn tổng đoạn, cách duyệt thô là $O(N \times Q) = 10^{10}$ — chắc chắn TLE. Prefix Sum giảm xuống $O(N + Q) = 2 \times 10^5$ — chạy tức thì.</p>
                        </div>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-2">4. Code minh họa (C++)</p>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto">#include &lt;iostream&gt;
#include &lt;algorithm&gt; // min, max, reverse
using namespace std;

const int MAX_N = 1e5 + 5;
int a[MAX_N];      // Mảng dữ liệu (toàn cục)
long long pre[MAX_N]; // Mảng tiền tố (toàn cục)

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin &gt;&gt; n;
    for (int i = 1; i &lt;= n; ++i) cin &gt;&gt; a[i]; // Index từ 1 cho dễ tính prefix

    // Xây dựng Prefix Sum
    pre[0] = 0;
    for (int i = 1; i &lt;= n; ++i)
        pre[i] = pre[i - 1] + a[i];

    // Truy vấn tổng đoạn [l, r] trong O(1)
    int l, r;
    cin &gt;&gt; l &gt;&gt; r;
    cout &lt;&lt; "Tong [" &lt;&lt; l &lt;&lt; ", " &lt;&lt; r &lt;&lt; "] = " &lt;&lt; pre[r] - pre[l - 1] &lt;&lt; "\n";

    // Tìm Min và Max
    int mn = a[1], mx = a[1];
    for (int i = 2; i &lt;= n; ++i) {
        mn = min(mn, a[i]);
        mx = max(mx, a[i]);
    }
    cout &lt;&lt; "Min = " &lt;&lt; mn &lt;&lt; ", Max = " &lt;&lt; mx &lt;&lt; "\n";

    // Đảo ngược mảng
    reverse(a + 1, a + n + 1);

    return 0;
}</pre>
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

                    <p class="font-bold uppercase text-xs tracking-widest text-slate-500">⭐ Cơ bản — Kiểm tra lý thuyết</p>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 1. Thống kê cơ bản</p>
                        <p class="mt-1 text-slate-600">Nhập dãy $N$ số nguyên. In ra: tổng, giá trị nhỏ nhất, giá trị lớn nhất và trung bình cộng của dãy.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> N=5, arr=[3, 1, 4, 1, 5]<br>
                            <span class="text-slate-400">Output:</span> Sum=14, Min=1, Max=5, Avg=2.80
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 2. Đếm phần tử theo điều kiện</p>
                        <p class="mt-1 text-slate-600">Nhập dãy $N$ số nguyên và số $K$. Đếm số phần tử chẵn, số phần tử lẻ, và số phần tử bằng $K$.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> N=6, K=3, arr=[1, 3, 2, 3, 4, 3]<br>
                            <span class="text-slate-400">Output:</span> Chan=2, Le=4, Bang_K=3
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 3. Đảo ngược dãy</p>
                        <p class="mt-1 text-slate-600">Nhập dãy $N$ số. In ra dãy sau khi đảo ngược thứ tự các phần tử. Thực hiện bằng kỹ thuật hai con trỏ (swap từ hai đầu), không dùng hàm có sẵn.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> 5 | 1 2 3 4 5<br>
                            <span class="text-slate-400">Output:</span> 5 4 3 2 1
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 4. Phần tử thứ hai lớn nhất</p>
                        <p class="mt-1 text-slate-600">Nhập dãy $N$ số nguyên phân biệt. Tìm phần tử lớn thứ hai mà <strong>không được sắp xếp mảng</strong>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> 5 | 3 1 4 1 5<br>
                            <span class="text-slate-400">Output:</span> 4
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 5. Kiểm tra dãy tăng dần</p>
                        <p class="mt-1 text-slate-600">Nhập dãy $N$ số nguyên. Kiểm tra xem dãy có được sắp xếp tăng không ngặt (non-decreasing) hay không.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> 1 2 2 3 5 &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> YES<br>
                            <span class="text-slate-400">Input:</span> 1 3 2 4 5 &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> NO
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 6. Xoay vòng mảng</p>
                        <p class="mt-1 text-slate-600">Nhập dãy $N$ số và số $K$. Dịch chuyển toàn bộ mảng sang phải $K$ vị trí (phần tử cuối vòng về đầu).</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> N=5, K=2, arr=[1, 2, 3, 4, 5]<br>
                            <span class="text-slate-400">Output:</span> 4 5 1 2 3
                        </div>
                    </div>

                    <p class="font-bold uppercase text-xs tracking-widest text-slate-500 pt-2">🏆 Đấu trường — Nâng cao</p>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-900">Bài 7. Truy vấn tổng đoạn (Prefix Sum)</p>
                        <p class="mt-1 text-indigo-800">Nhập dãy $N$ số và $Q$ truy vấn, mỗi truy vấn gồm $l, r$. In ra tổng các phần tử từ vị trí $l$ đến $r$. Yêu cầu: xử lý trong $O(N + Q)$ bằng Prefix Sum.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span> N=5, arr=[2,4,1,3,5], Q=3: (1,3), (2,5), (1,5)<br>
                            <span class="text-slate-400">Output:</span> 7 | 13 | 15
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-900">Bài 8. Dãy con có tổng lớn nhất (Kadane's Algorithm)</p>
                        <p class="mt-1 text-indigo-800">Nhập dãy $N$ số nguyên (có thể âm). Tìm dãy con liên tiếp có tổng lớn nhất. Yêu cầu: giải trong $O(N)$.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span> [-2, 1, -3, 4, -1, 2, 1, -5, 4]<br>
                            <span class="text-slate-400">Output:</span> 6 (dãy con [4, -1, 2, 1])
                        </div>
                        <div class="mt-2 p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-800">
                            💬 <strong>Gợi ý:</strong> Dùng biến <code>curSum</code> (tổng kết thúc tại vị trí hiện tại) và <code>maxSum</code>. Nếu <code>curSum &lt; 0</code>, reset về <code>0</code>.
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-900">Bài 9. Đếm cặp tổng bằng K (nâng cấp Bài 13 trước)</p>
                        <p class="mt-1 text-indigo-800">Nhập $N$ số nguyên và $K$. Đếm số cặp $(i, j)$ với $i &lt; j$ sao cho $a_i + a_j = K$. Giải $O(N^2)$ trước, sau đó tối ưu lên $O(N \log N)$ bằng cách sắp xếp + Two Pointers.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span> N=5, K=9, arr=[2, 7, 4, 5, 3]<br>
                            <span class="text-slate-400">Output:</span> 2
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-900">Bài 10. 🧠 Mảng hiệu (Difference Array)</p>
                        <p class="mt-1 text-indigo-800">Cho mảng $N$ phần tử ban đầu đều bằng $0$ và $Q$ thao tác: mỗi thao tác cộng giá trị $v$ vào tất cả phần tử từ $l$ đến $r$. In ra mảng sau khi thực hiện hết. Yêu cầu: $O(N + Q)$ bằng kỹ thuật Difference Array.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span> N=5, Q=2: (1,3,+2), (2,5,+3)<br>
                            <span class="text-slate-400">Output:</span> 2 5 5 3 3
                        </div>
                        <div class="mt-2 p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-800">
                            💬 <strong>Tư duy:</strong> Đây là kỹ thuật đối ngẫu với Prefix Sum. Thay vì truy vấn tổng, ta tối ưu hóa thao tác <em>cập nhật đoạn</em>. Rất phổ biến trong các bài toán hình học mảng và lịch trình.
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
                            <li>Arrays in C++ tutorial competitive programming</li>
                            <li>Prefix sum array technique C++</li>
                            <li>Kadane's algorithm maximum subarray</li>
                            <li>Difference array range update C++</li>
                        </ul>
                    </div>
                    <div class="mt-3">
                        <p class="font-semibold text-slate-700 mb-1">📖 Tài liệu đọc thêm:</p>
                        <p class="text-slate-600">Mục <strong>"Arrays"</strong> và <strong>"Prefix Sums"</strong> trên <a href="https://usaco.guide" target="_blank" class="text-blue-600 underline hover:text-blue-800">USACO Guide</a> — tài liệu luyện thi lập trình quốc tế chất lượng cao, miễn phí.</p>
                    </div>
                </div>
            </details>

        </div>
    `
},
    {
    title: "Bài 5: Mảng — Cấu trúc dữ liệu tuyến tính đầu tiên",
    videoId: "",
    desc: "Hiểu cách lưu trữ và xử lý dữ liệu tuyến tính với mảng một chiều và ma trận — nền tảng không thể thiếu trong lập trình thi đấu.",
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
                        <li>Hiểu cách lưu trữ dữ liệu liên tiếp trong bộ nhớ, phân biệt <strong>mảng 1 chiều</strong> và <strong>mảng 2 chiều</strong> (ma trận).</li>
                        <li>Nắm vững khái niệm <strong>chỉ số (index)</strong> bắt đầu từ $0$ trong C++.</li>
                        <li>Hiểu về giới hạn bộ nhớ và lý do phải khai báo mảng lớn ở phạm vi toàn cục.</li>
                    </ul>
                    <p class="font-bold text-slate-800 mb-2">🛠️ Kỹ năng</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Khai báo, nhập/xuất và duyệt mảng thành thạo.</li>
                        <li>Thực hiện các thao tác cơ bản: tìm kiếm, tính tổng, tìm cực trị (Min/Max).</li>
                        <li>Xây dựng và ứng dụng <strong>mảng cộng dồn (Prefix Sum)</strong> để tối ưu truy vấn tổng đoạn.</li>
                        <li>Xử lý bài toán trên <strong>ma trận</strong> với vòng lặp lồng nhau.</li>
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
                        <p class="font-bold text-slate-800 mb-2">1. Khai báo và bộ nhớ</p>
                        <p class="mb-2">Mảng là tập hợp các phần tử <strong>cùng kiểu dữ liệu</strong>, được lưu trữ <strong>liên tiếp nhau trong bộ nhớ</strong> và truy cập qua chỉ số nguyên.</p>
                        <ul class="list-disc list-inside space-y-1 mb-3">
                            <li><strong>Khai báo tĩnh:</strong> <code class="bg-slate-100 px-1 rounded">int a[100];</code> — kích thước cố định tại thời điểm biên dịch.</li>
                            <li><strong>Chỉ số hợp lệ:</strong> từ $0$ đến $n-1$. Truy cập <code class="bg-slate-100 px-1 rounded">a[n]</code> gây lỗi <em>Out of Bounds</em>.</li>
                        </ul>
                        <div class="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                            <p class="font-bold text-red-700 mb-1">⚠️ Quy tắc vàng trong thi đấu</p>
                            <p class="text-red-800">Nếu mảng cần đến $10^5$ phần tử trở lên, <strong>bắt buộc khai báo toàn cục</strong>. Khai báo trong <code class="bg-red-100 px-1 rounded">main()</code> khiến mảng nằm trên Stack (giới hạn ~1–8 MB) và gây <strong>Stack Overflow</strong>. Mảng toàn cục nằm ở vùng nhớ Static — dung lượng lớn hơn nhiều và tự động khởi tạo bằng <code class="bg-red-100 px-1 rounded">0</code>.</p>
                        </div>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-2">2. Truy cập và duyệt mảng</p>
                        <ul class="list-disc list-inside space-y-1">
                            <li>Truy cập phần tử thứ $i$: <code class="bg-slate-100 px-1 rounded">a[i]</code> — thao tác $O(1)$.</li>
                            <li>Duyệt toàn bộ: vòng lặp <code class="bg-slate-100 px-1 rounded">for</code> từ <code class="bg-slate-100 px-1 rounded">0</code> đến <code class="bg-slate-100 px-1 rounded">n-1</code> — $O(N)$.</li>
                            <li>Tìm Min/Max: duyệt 1 lần, cập nhật biến kết quả — $O(N)$.</li>
                        </ul>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-2">3. Mảng hai chiều (Ma trận)</p>
                        <p class="mb-2">Dùng để quản lý bảng số, tọa độ lưới hoặc đồ thị dạng kề.</p>
                        <ul class="list-disc list-inside space-y-1">
                            <li>Khai báo: <code class="bg-slate-100 px-1 rounded">int a[100][100];</code> — hàng trước, cột sau.</li>
                            <li>Duyệt: 2 vòng lặp lồng nhau — $O(M \times N)$.</li>
                            <li>Phần tử hàng $i$, cột $j$: <code class="bg-slate-100 px-1 rounded">a[i][j]</code>.</li>
                        </ul>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-2">4. Kỹ thuật Prefix Sum (Mảng cộng dồn)</p>
                        <p class="mb-2">Cho phép trả lời truy vấn <strong>tổng đoạn $[L, R]$</strong> trong $O(1)$ sau $O(N)$ tiền xử lý.</p>
                        <p class="mb-1 font-semibold">Xây dựng (index từ 0):</p>
                        <p class="font-mono bg-slate-100 px-3 py-1 rounded-lg inline-block mb-2">$S[i] = A[0] + A[1] + \ldots + A[i]$</p>
                        <p class="mb-1 font-semibold">Truy vấn tổng đoạn $[L, R]$:</p>
                        <p class="font-mono bg-slate-100 px-3 py-1 rounded-lg inline-block">$sum(L,R) = S[R] - S[L-1]$ &nbsp;(với $S[-1] = 0$)</p>
                        <div class="mt-3 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                            <p class="font-bold text-blue-700 mb-1">💡 Tại sao quan trọng?</p>
                            <p class="text-blue-800">Với $Q = 10^5$ truy vấn tổng đoạn, cách duyệt thô tốn $O(N \times Q) = 10^{10}$ bước — chắc chắn TLE. Prefix Sum giảm xuống $O(N + Q)$ — chạy tức thì.</p>
                        </div>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-2">5. Code minh họa (C++)</p>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto">#include &lt;iostream&gt;
#include &lt;algorithm&gt; // min, max, sort

using namespace std;

const int MAXN = 1e6 + 5;
int a[MAXN]; // Khai báo toàn cục cho mảng lớn

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n; cin &gt;&gt; n;

    // Nhập mảng
    for (int i = 0; i &lt; n; ++i) cin &gt;&gt; a[i];

    // Tìm Min / Max
    int mn = a[0], mx = a[0];
    for (int i = 1; i &lt; n; ++i) {
        mn = min(mn, a[i]);
        mx = max(mx, a[i]);
    }
    cout &lt;&lt; "Min: " &lt;&lt; mn &lt;&lt; " | Max: " &lt;&lt; mx &lt;&lt; "\n";

    // Xây dựng Prefix Sum
    long long S[MAXN];
    S[0] = a[0];
    for (int i = 1; i &lt; n; ++i) S[i] = S[i - 1] + a[i];

    // Truy vấn tổng đoạn [L, R] trong O(1)
    int L, R; cin &gt;&gt; L &gt;&gt; R;
    long long ans = S[R] - (L > 0 ? S[L - 1] : 0);
    cout &lt;&lt; "Tong [" &lt;&lt; L &lt;&lt; ", " &lt;&lt; R &lt;&lt; "] = " &lt;&lt; ans &lt;&lt; "\n";

    return 0;
}</pre>
                    </div>

                    <div class="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                        <p class="font-bold text-blue-700 mb-1">💡 Tư duy hiện đại — std::vector</p>
                        <p class="text-blue-800">Mảng tĩnh có kích thước cố định và không linh hoạt. Trong C++ hiện đại và thi đấu đỉnh cao, <code class="bg-blue-100 px-1 rounded">std::vector</code> thường được ưu tiên nhờ khả năng <strong>tự co giãn kích thước</strong> và hỗ trợ nhiều phương thức mạnh mẽ. Đây sẽ là chủ đề của bài STL Container.</p>
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

                    <p class="font-bold uppercase text-xs tracking-widest text-slate-500">⭐ Cơ bản — Kiểm tra lý thuyết</p>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 1. Phần tử ở vị trí chẵn</p>
                        <p class="mt-1 text-slate-600">Nhập mảng $N$ số nguyên. In ra các phần tử ở <strong>vị trí chỉ số chẵn</strong> ($0, 2, 4, \ldots$).</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> N=5, arr=[10, 20, 30, 40, 50]<br>
                            <span class="text-slate-400">Output:</span> 10 30 50
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 2. Trung bình cộng các phần tử dương</p>
                        <p class="mt-1 text-slate-600">Nhập mảng $N$ số nguyên. Tính và in ra trung bình cộng của các phần tử <strong>dương</strong> trong mảng. Nếu không có phần tử dương, in ra <code>NONE</code>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> [-1, 3, -5, 7, 2] &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> 4.00
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 3. Vị trí cuối cùng của giá trị X</p>
                        <p class="mt-1 text-slate-600">Nhập mảng $N$ số nguyên và giá trị $X$. Tìm <strong>chỉ số cuối cùng</strong> mà tại đó mảng bằng $X$. Nếu không tìm thấy, in ra <code>-1</code>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> arr=[1,3,5,3,7], X=3 &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> 3
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 4. Kiểm tra mảng đối xứng (Palindrome)</p>
                        <p class="mt-1 text-slate-600">Nhập mảng $N$ số nguyên. Kiểm tra xem mảng có <strong>đối xứng</strong> (đọc xuôi = đọc ngược) không.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> [1, 2, 3, 2, 1] &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> YES<br>
                            <span class="text-slate-400">Input:</span> [1, 2, 3, 4, 5] &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> NO
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 5. Lọc số nguyên tố trong mảng</p>
                        <p class="mt-1 text-slate-600">Nhập mảng $N$ số nguyên dương. In ra các số nguyên tố trong mảng. (<em>Tái sử dụng hàm <code class="bg-slate-100 px-1 rounded">isPrime</code> từ Bài 4</em>.)</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> [4, 7, 10, 13, 15, 17]<br>
                            <span class="text-slate-400">Output:</span> 7 13 17
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 6. Đếm số lần xuất hiện</p>
                        <p class="mt-1 text-slate-600">Nhập mảng $N$ số nguyên và giá trị $X$. Đếm số lần $X$ xuất hiện trong mảng.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> arr=[1,3,3,5,3,7], X=3 &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> 3
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 7. Đảo ngược mảng không dùng mảng phụ</p>
                        <p class="mt-1 text-slate-600">Nhập mảng $N$ số nguyên. Đảo ngược mảng tại chỗ bằng kỹ thuật <strong>swap hai đầu vào giữa</strong>, không sử dụng mảng phụ.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> [1, 2, 3, 4, 5] &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> 5 4 3 2 1
                        </div>
                    </div>

                    <p class="font-bold uppercase text-xs tracking-widest text-slate-500 pt-2">🏆 Đấu trường — Nâng cao</p>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-900">Bài 8. Mảng cộng dồn — Truy vấn tổng đoạn</p>
                        <p class="mt-1 text-indigo-800">Cho mảng $A$ có $N$ phần tử. Xây dựng mảng $S$ sao cho $S[i] = A[0] + A[1] + \ldots + A[i]$. Xử lý $Q$ truy vấn, mỗi truy vấn cho $L, R$: tính tổng $A[L] + \ldots + A[R]$ trong $O(1)$.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span> arr=[2,4,1,3,5], Q=2: (1,3), (0,4)<br>
                            <span class="text-slate-400">Output:</span> 8 | 15
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-900">Bài 9. Dãy con liên tiếp tăng dài nhất</p>
                        <p class="mt-1 text-indigo-800">Nhập dãy $N$ số nguyên. Tìm <strong>độ dài</strong> của dãy con gồm các phần tử liên tiếp (về chỉ số) tăng dần dài nhất.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span> [1, 2, 3, 1, 2, 3, 4, 1]<br>
                            <span class="text-slate-400">Output:</span> 4 (dãy con [1, 2, 3, 4])
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-900">Bài 10. Tần suất xuất hiện (Counting Sort)</p>
                        <p class="mt-1 text-indigo-800">Cho mảng $N$ số nguyên có giá trị từ $0$ đến $10^6$. In ra mỗi giá trị xuất hiện trong mảng và số lần xuất hiện tương ứng, theo thứ tự tăng dần. (Kỹ thuật <strong>mảng đánh dấu</strong>.)</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span> [3, 1, 2, 1, 3, 3]<br>
                            <span class="text-slate-400">Output:</span> 1 → 2 lần | 2 → 1 lần | 3 → 3 lần
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-900">Bài 11. Ma trận xoắn ốc</p>
                        <p class="mt-1 text-indigo-800">Cho số nguyên dương $N$. In ra ma trận vuông $N \times N$ chứa các số từ $1$ đến $N^2$ được điền theo dạng <strong>xoắn ốc từ ngoài vào trong</strong> (theo chiều kim đồng hồ).</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span> N=3<br>
                            <span class="text-slate-400">Output:</span><br>
                            1 2 3<br>
                            8 9 4<br>
                            7 6 5
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-900">Bài 12. Cộng hai ma trận</p>
                        <p class="mt-1 text-indigo-800">Nhập hai ma trận cùng kích thước $M \times N$. In ra ma trận tổng.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span> A=[[1,2],[3,4]], B=[[5,6],[7,8]]<br>
                            <span class="text-slate-400">Output:</span> [[6,8],[10,12]]
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-900">Bài 13. 🧠 Điểm yên ngựa (Saddle Point)</p>
                        <p class="mt-1 text-indigo-800">Cho ma trận $M \times N$. Tìm tất cả các <strong>điểm yên ngựa</strong>: phần tử vừa là <em>nhỏ nhất trong hàng</em> vừa là <em>lớn nhất trong cột</em> của nó. In ra tọa độ và giá trị của từng điểm, hoặc <code>NONE</code> nếu không tồn tại.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span> [[1,2,3],[4,5,6],[7,8,9]]<br>
                            <span class="text-slate-400">Output:</span> (0,2) = 3
                        </div>
                        <div class="mt-2 p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-800">
                            💬 <strong>Gợi ý:</strong> Với mỗi phần tử $a[i][j]$, kiểm tra: nó có phải Min của hàng $i$ không? Nó có phải Max của cột $j$ không? Độ phức tạp: $O(M \times N \times (M + N))$ — thử tối ưu về $O(M \times N)$.
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
                            <li>C++ Arrays one-dimensional tutorial</li>
                            <li>Two-dimensional arrays matrix C++</li>
                            <li>Prefix Sum technique competitive programming</li>
                            <li>Global vs Local array memory stack overflow C++</li>
                        </ul>
                    </div>
                    <div class="mt-3">
                        <p class="font-semibold text-slate-700 mb-1">📖 Tài liệu đọc thêm:</p>
                        <ul class="list-disc list-inside space-y-1 text-slate-600">
                            <li>Mục <strong>"Arrays"</strong> trên <a href="https://www.geeksforgeeks.org/arrays-in-cpp/" target="_blank" class="text-blue-600 underline hover:text-blue-800">GeeksforGeeks</a>.</li>
                            <li>Mục <strong>"Prefix Sums"</strong> trên <a href="https://cp-algorithms.com" target="_blank" class="text-blue-600 underline hover:text-blue-800">CP-Algorithms.com</a> — tài liệu thuật toán chuẩn dành cho lập trình thi đấu.</li>
                        </ul>
                    </div>
                </div>
            </details>

        </div>
    `
},
    {
    title: "Bài 6: Cấu trúc (Struct) — Tổ chức dữ liệu phức tạp",
    videoId: "",
    desc: "Học cách gom nhóm nhiều thuộc tính khác nhau vào một kiểu dữ liệu tự định nghĩa, nền tảng để mô hình hóa bài toán thực tế trong lập trình thi đấu.",
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
                        <li>Hiểu khái niệm <strong>kiểu dữ liệu do người dùng định nghĩa</strong> (User-defined types).</li>
                        <li>Nắm cách gom nhóm các thuộc tính có kiểu khác nhau vào một <strong>thực thể duy nhất</strong>.</li>
                        <li>Phân biệt khi nào nên dùng <code class="bg-slate-100 px-1 rounded">struct</code> và khi nào nên dùng <code class="bg-slate-100 px-1 rounded">std::pair</code>.</li>
                    </ul>
                    <p class="font-bold text-slate-800 mb-2">🛠️ Kỹ năng</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Định nghĩa và sử dụng <code class="bg-slate-100 px-1 rounded">struct</code> với Constructor cơ bản.</li>
                        <li>Quản lý <strong>mảng / vector các cấu trúc</strong> (Array of Structs).</li>
                        <li>Viết <strong>nạp chồng toán tử so sánh</strong> (<code class="bg-slate-100 px-1 rounded">operator &lt;</code>) để sử dụng với <code class="bg-slate-100 px-1 rounded">std::sort</code>.</li>
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
                        <p class="font-bold text-slate-800 mb-2">1. Tại sao cần Struct?</p>
                        <p class="mb-2">Giả sử cần quản lý thông tin 100 học sinh (tên, điểm Toán, điểm Tin). Cách làm thông thường là dùng <strong>3 mảng rời rạc</strong> — dễ gây sai lệch khi sắp xếp vì các mảng không được đồng bộ cùng nhau.</p>
                        <div class="overflow-x-auto">
                            <table class="w-full text-xs md:text-sm border-collapse">
                                <thead>
                                    <tr class="bg-slate-100">
                                        <th class="p-2 border border-slate-200 text-left">Cách tiếp cận</th>
                                        <th class="p-2 border border-slate-200 text-left">Ưu điểm</th>
                                        <th class="p-2 border border-slate-200 text-left">Nhược điểm</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="p-2 border border-slate-200 font-semibold">3 mảng rời rạc</td>
                                        <td class="p-2 border border-slate-200">Đơn giản</td>
                                        <td class="p-2 border border-slate-200 text-red-600">Dễ sai khi sort, khó bảo trì</td>
                                    </tr>
                                    <tr class="bg-slate-50">
                                        <td class="p-2 border border-slate-200 font-semibold">1 mảng struct</td>
                                        <td class="p-2 border border-slate-200 text-green-700">Mạch lạc, an toàn, dễ mở rộng</td>
                                        <td class="p-2 border border-slate-200">Cần học thêm cú pháp</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-2">2. Định nghĩa và khai báo</p>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto">struct Student {
    string name;
    double math, it;
    double avg;
};</pre>
                        <p class="mt-2">Truy cập thuộc tính qua dấu chấm: <code class="bg-slate-100 px-1 rounded">s.name</code>, <code class="bg-slate-100 px-1 rounded">s.math</code>.</p>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-2">3. Struct vs std::pair — Khi nào dùng cái nào?</p>
                        <ul class="list-disc list-inside space-y-2">
                            <li><strong><code class="bg-slate-100 px-1 rounded">std::pair&lt;T1, T2&gt;</code>:</strong> Dùng khi chỉ cần gom <strong>đúng 2 giá trị</strong> đơn giản, không cần đặt tên thuộc tính. Nhanh gọn cho bài toán cạnh đồ thị <code class="bg-slate-100 px-1 rounded">{u, v}</code>, tọa độ <code class="bg-slate-100 px-1 rounded">{x, y}</code>.</li>
                            <li><strong><code class="bg-slate-100 px-1 rounded">struct</code>:</strong> Dùng khi cần gom <strong>3 thuộc tính trở lên</strong>, cần tên rõ ràng, cần Constructor hoặc nạp chồng toán tử. Phù hợp cho bài toán phức tạp hơn.</li>
                        </ul>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-2">4. Nạp chồng toán tử so sánh (<code class="bg-slate-100 px-1 rounded">operator &lt;</code>)</p>
                        <p class="mb-2">Để dùng <code class="bg-slate-100 px-1 rounded">std::sort</code> trên mảng struct, cần định nghĩa quy tắc so sánh. Khi đó <code class="bg-slate-100 px-1 rounded">sort</code> sẽ tự biết cách sắp xếp các đối tượng.</p>
                        <div class="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                            <p class="font-bold text-red-700 mb-1">⚠️ Lưu ý quan trọng</p>
                            <p class="text-red-800"><code class="bg-red-100 px-1 rounded">operator &lt;</code> phải được khai báo <code class="bg-red-100 px-1 rounded">const</code> ở cuối. Nếu quên <code class="bg-red-100 px-1 rounded">const</code>, compiler sẽ báo lỗi khi dùng với <code class="bg-red-100 px-1 rounded">std::sort</code> hoặc <code class="bg-red-100 px-1 rounded">std::set</code>.</p>
                        </div>
                    </div>

                    <div>
                        <p class="font-bold text-slate-800 mb-2">5. Code minh họa hoàn chỉnh (C++)</p>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto">#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;vector&gt;
#include &lt;algorithm&gt;
using namespace std;

struct Student {
    string name;
    double it;

    // Constructor: Khởi tạo nhanh
    Student(string n = "", double i = 0) : name(n), it(i) {}

    // operator < : Sắp xếp điểm Tin giảm dần
    // Nếu điểm bằng nhau, sắp xếp tên theo thứ tự từ điển
    bool operator &lt; (const Student&amp; other) const {
        if (it != other.it) return it &gt; other.it;
        return name &lt; other.name;
    }
};

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n; cin &gt;&gt; n;
    vector&lt;Student&gt; ds;

    for (int i = 0; i &lt; n; ++i) {
        string name; double score;
        cin &gt;&gt; name &gt;&gt; score;
        ds.push_back(Student(name, score));
    }

    sort(ds.begin(), ds.end()); // Dùng operator < đã định nghĩa

    cout &lt;&lt; "-- DANH SACH SAU KHI SAP XEP --\n";
    for (const auto&amp; s : ds) {
        cout &lt;&lt; s.name &lt;&lt; " : " &lt;&lt; s.it &lt;&lt; "\n";
    }

    return 0;
}</pre>
                    </div>

                    <div class="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                        <p class="font-bold text-blue-700 mb-1">💡 Ứng dụng phổ biến trong thi đấu</p>
                        <p class="text-blue-800">Struct được dùng rất nhiều để mô hình hóa: <strong>Point {x, y}</strong> trong bài toán hình học, <strong>Edge {u, v, weight}</strong> trong bài toán đồ thị (Dijkstra, Kruskal), <strong>Event {time, type}</strong> trong kỹ thuật quét đường (Sweep Line).</p>
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

                    <p class="font-bold uppercase text-xs tracking-widest text-slate-500">⭐ Cơ bản — Kiểm tra lý thuyết</p>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 1. Struct Point và khoảng cách</p>
                        <p class="mt-1 text-slate-600">Định nghĩa <code class="bg-slate-100 px-1 rounded">struct Point</code> gồm tọa độ $x, y$ (số thực). Viết hàm <code class="bg-slate-100 px-1 rounded">double distance(Point a, Point b)</code> tính khoảng cách Euclid giữa 2 điểm.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> (0,0) và (3,4) &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> 5.000
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 2. Struct Fraction (Phân số)</p>
                        <p class="mt-1 text-slate-600">Định nghĩa <code class="bg-slate-100 px-1 rounded">struct Fraction</code> gồm tử số và mẫu số nguyên. Viết hàm <code class="bg-slate-100 px-1 rounded">Fraction simplify(Fraction f)</code> rút gọn phân số về dạng tối giản. (Dùng lại hàm <code class="bg-slate-100 px-1 rounded">gcd</code> từ Bài 4.)</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> 12/8 &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> 3/2
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 3. Struct Time — Chuyển đổi giây</p>
                        <p class="mt-1 text-slate-600">Tạo <code class="bg-slate-100 px-1 rounded">struct Time</code> gồm giờ, phút, giây. Viết hàm <code class="bg-slate-100 px-1 rounded">Time fromSeconds(int s)</code> nhận vào tổng số giây và chuyển thành <code class="bg-slate-100 px-1 rounded">Time</code>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> 3661 &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> 1:01:01
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 4. Quản lý sách — Tìm cuốn rẻ nhất</p>
                        <p class="mt-1 text-slate-600">Viết chương trình quản lý $N$ cuốn sách (tên sách, giá tiền). In ra thông tin cuốn sách có giá rẻ nhất.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> N=3: ("Toan",45000), ("Ly",38000), ("Hoa",52000)<br>
                            <span class="text-slate-400">Output:</span> Ly - 38000 VND
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 5. Tổng lương nhân viên</p>
                        <p class="mt-1 text-slate-600">Dùng mảng struct để lưu danh sách $N$ nhân viên (mã NV, họ tên, lương). Tính và in ra tổng lương toàn công ty và tên nhân viên có lương cao nhất.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> NV001 An 15000000 | NV002 Binh 20000000<br>
                            <span class="text-slate-400">Output:</span> Tong=35000000 | Cao nhat: Binh
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 6. Kiểm tra 2 điểm trùng nhau</p>
                        <p class="mt-1 text-slate-600">Dùng <code class="bg-slate-100 px-1 rounded">struct Point</code> từ Bài 1. Viết hàm <code class="bg-slate-100 px-1 rounded">bool equals(Point a, Point b)</code> kiểm tra 2 điểm có trùng nhau không (xét cả sai số $\epsilon = 10^{-9}$).</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border">
                            <span class="text-slate-400">Input:</span> (1.0, 2.0) và (1.0, 2.0) &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> TRUNG<br>
                            <span class="text-slate-400">Input:</span> (1.0, 2.0) và (1.0, 2.1) &nbsp;|&nbsp; <span class="text-slate-400">Output:</span> KHAC
                        </div>
                    </div>

                    <p class="font-bold uppercase text-xs tracking-widest text-slate-500 pt-2">🏆 Đấu trường — Nâng cao</p>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-900">Bài 7. Xếp hạng thí sinh thi đại học</p>
                        <p class="mt-1 text-indigo-800">Nhập danh sách thí sinh gồm SBD, Họ tên, Điểm Toán, Lý, Hóa. Sắp xếp theo <strong>Tổng điểm giảm dần</strong>; nếu bằng nhau thì ưu tiên <strong>điểm Toán cao hơn</strong>. In danh sách đã xếp hạng.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span> SBD001 An 9 8 7 | SBD002 Binh 8 9 7<br>
                            <span class="text-slate-400">Output:</span> #1 An 24đ | #2 Binh 24đ (An ưu tiên vì Toán=9)
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-900">Bài 8. Struct Rectangle — Diện tích và kiểm tra điểm</p>
                        <p class="mt-1 text-indigo-800">Định nghĩa <code class="bg-indigo-100 px-1 rounded">struct Rectangle</code> bằng 2 điểm: góc dưới trái $(x_1, y_1)$ và góc trên phải $(x_2, y_2)$. Viết hàm tính diện tích và hàm kiểm tra điểm $M$ có nằm trong (kể cả biên) hình chữ nhật không.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Rect:</span> (0,0)-(4,3), M=(2,1)<br>
                            <span class="text-slate-400">Output:</span> DienTich=12 | M nam TRONG hinh chu nhat
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-900">Bài 9. Số phức — Các phép toán cơ bản</p>
                        <p class="mt-1 text-indigo-800">Định nghĩa <code class="bg-indigo-100 px-1 rounded">struct Complex</code> gồm phần thực $a$ và phần ảo $b$ (biểu diễn $a + bi$). Viết các hàm <strong>cộng, trừ, nhân</strong> hai số phức và in kết quả dạng $a + bi$.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">A=</span>(3+2i), <span class="text-slate-400">B=</span>(1+4i)<br>
                            <span class="text-slate-400">A+B=</span> 4+6i &nbsp;|&nbsp; <span class="text-slate-400">A×B=</span> -5+14i
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-900">Bài 10. 🧠 Cặp điểm gần nhau nhất</p>
                        <p class="mt-1 text-indigo-800">Cho $N$ điểm trên mặt phẳng tọa độ. Tìm <strong>cặp điểm có khoảng cách nhỏ nhất</strong>. In ra tọa độ 2 điểm và khoảng cách giữa chúng.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span> N=4: (0,0),(3,4),(1,1),(6,8)<br>
                            <span class="text-slate-400">Output:</span> (0,0)-(1,1) = 1.414
                        </div>
                        <div class="mt-2 p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-800">
                            💬 <strong>Gợi ý:</strong> Giải $O(N^2)$ bằng vòng lặp lồng. Với $N \leq 10^5$, cần thuật toán chia đôi $O(N \log N)$ — thử sức nếu đã quen với đệ quy!
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-900">Bài 11. Chuẩn bị cho Tham lam — Sắp xếp đồ vật</p>
                        <p class="mt-1 text-indigo-800">Cho danh sách $N$ đồ vật (trọng lượng $w$ và giá trị $v$). Sắp xếp các đồ vật theo <strong>tỉ lệ $v/w$ giảm dần</strong>. In danh sách đã sắp xếp. (Đây là bước tiền xử lý cho bài toán <em>Tham lam — Knapsack phân số</em>.)</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-100">
                            <span class="text-slate-400">Input:</span> (w=2,v=6),(w=3,v=6),(w=1,v=4)<br>
                            <span class="text-slate-400">Output:</span> (1,4)→4.0 | (2,6)→3.0 | (3,6)→2.0
                        </div>
                        <div class="mt-2 p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-800">
                            💬 <strong>Kết nối bài sau:</strong> Kỹ thuật sắp xếp struct theo tiêu chí tùy chỉnh này là nền tảng của nhiều thuật toán <strong>Tham lam (Greedy)</strong> và <strong>Quy hoạch động</strong>.
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
                            <li>C++ Struct tutorial competitive programming</li>
                            <li>Operator overloading C++ sort custom comparator</li>
                            <li>Sorting array of structs C++ std::sort</li>
                            <li>C++ struct vs std::pair when to use</li>
                        </ul>
                    </div>
                    <div class="mt-3">
                        <p class="font-semibold text-slate-700 mb-1">📖 Tài liệu đọc thêm:</p>
                        <p class="text-slate-600">Bài viết <strong>"Custom Data Types & Structs"</strong> trên <a href="https://www.learncpp.com" target="_blank" class="text-blue-600 underline hover:text-blue-800">LearnCpp.com</a> — hướng dẫn chi tiết về struct, constructor và operator overloading trong C++.</p>
                    </div>
                </div>
            </details>

        </div>
    `
},
        ]
    }
];
