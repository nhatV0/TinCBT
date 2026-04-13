// File dữ liệu chi tiết cho khóa học Lập trình nâng cao
window.courseContent = [
    {
        chapterName: "Chuyên đề: Lập trình nâng cao",
        lessons: [
            {
    title: "Bài 7: Quá Tải Toán Tử & Khuôn Hình (Template) - Sức Mạnh Tùy Biến",
    videoId: "",
    desc: "Nắm vững kỹ thuật nạp chồng toán tử và lập trình tổng quát với Template trong C++ để xây dựng các cấu trúc dữ liệu mạnh mẽ như BigInt.",
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
                    <p class="font-semibold text-slate-800 mb-2">📘 Kiến thức:</p>
                    <ul class="list-disc list-inside space-y-1 mb-4">
                        <li>Hiểu bản chất <strong>nạp chồng toán tử</strong> (<code>+</code>, <code>-</code>, <code>&lt;&lt;</code>, <code>&gt;&gt;</code>) trong C++.</li>
                        <li>Nắm cơ chế <strong>Generic Programming</strong> với Template — viết code một lần, dùng cho mọi kiểu dữ liệu.</li>
                        <li>Hiểu tại sao cần <code>BigInt</code> và cách lưu trữ số nguyên siêu lớn bằng <code>string</code>.</li>
                    </ul>
                    <p class="font-semibold text-slate-800 mb-2">🛠️ Kỹ năng:</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Triển khai cấu trúc <strong>BigInt cơ bản</strong> để xử lý số nguyên có hàng trăm chữ số.</li>
                        <li>Viết <strong>hàm/struct Template</strong> tổng quát, giảm thiểu lặp lại mã nguồn.</li>
                        <li>Quá tải các toán tử để code trở nên tự nhiên và dễ đọc hơn.</li>
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
                        <p class="font-black text-slate-800 text-base mb-1">1. Quá tải toán tử (Operator Overloading)</p>
                        <p>Cho phép định nghĩa lại ý nghĩa của các phép toán (<code>+</code>, <code>-</code>, <code>*</code>, <code>==</code>...) cho <code>struct</code>/<code>class</code> của riêng bạn. Kết quả: thay vì viết <code>add(a, b)</code>, bạn viết <code>a + b</code> — tự nhiên như toán học.</p>
                        <div class="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-400 mt-2">
                            <p class="font-semibold text-blue-800">💡 Cú pháp cơ bản:</p>
                            <p class="mt-1 text-blue-700">Khai báo dạng <code>KieuTraVe operator+(const KieuDL& other) const { ... }</code> bên trong <code>struct</code>/<code>class</code>, hoặc dùng <code>friend</code> cho toán tử nhập/xuất (<code>&gt;&gt;</code>, <code>&lt;&lt;</code>).</p>
                        </div>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-1">2. Khuôn hình (Template)</p>
                        <p>Định nghĩa hàm hoặc lớp với <strong>kiểu dữ liệu tham số T</strong>. Trình biên dịch tự động sinh ra phiên bản cụ thể (cho <code>int</code>, <code>double</code>, <code>string</code>...) khi bạn gọi hàm. Đây là nền tảng của STL (<code>vector</code>, <code>stack</code>, <code>pair</code>...).</p>
<pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto">template &lt;typename T&gt;
T MyMax(T a, T b) {
    return (a &gt; b) ? a : b;
}
// Gọi: MyMax(3, 5) → int; MyMax(3.14, 2.71) → double</pre>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-1">3. Case Study: BigInt cơ bản (Số nguyên lớn)</p>
                        <p>Trong thi đấu lập trình, kiểu <code>long long</code> chỉ chứa được tối đa khoảng $10^{18}$ (19 chữ số). Để xử lý số có hàng trăm chữ số, ta dùng <code>string</code> để lưu và <strong>nạp chồng toán tử</strong> để thực hiện các phép toán theo thuật toán cộng tay từng chữ số.</p>
                        <div class="p-4 bg-amber-50 rounded-xl border-l-4 border-amber-400 mt-2">
                            <p class="font-semibold text-amber-800">⚙️ Ý tưởng thuật toán cộng BigInt:</p>
                            <ol class="list-decimal list-inside mt-1 text-amber-700 space-y-1">
                                <li>Cân bằng độ dài hai chuỗi bằng cách thêm <code>'0'</code> phía trước chuỗi ngắn hơn.</li>
                                <li>Duyệt từ cuối (hàng đơn vị) về đầu, cộng từng chữ số cùng với biến nhớ <code>carry</code>.</li>
                                <li>Nếu còn <code>carry</code> sau vòng lặp, thêm chữ số <code>1</code> vào đầu.</li>
                                <li>Đảo ngược chuỗi kết quả (<code>reverse</code>) để có thứ tự đúng.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-2">4. Code minh họa tổng hợp (C++)</p>
<pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto">#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;algorithm&gt;
using namespace std;

// --- PHẦN 1: TEMPLATE ---
template &lt;typename T&gt;
T MyMax(T a, T b) {
    return (a &gt; b) ? a : b;
}

// --- PHẦN 2: BIGINT CƠ BẢN ---
struct BigInt {
    string val;

    BigInt(string s = "0") : val(s) {}

    // Quá tải toán tử nhập &gt;&gt;
    friend istream&amp; operator&gt;&gt;(istream&amp; is, BigInt&amp; b) {
        is &gt;&gt; b.val;
        return is;
    }

    // Quá tải toán tử xuất &lt;&lt;
    friend ostream&amp; operator&lt;&lt;(ostream&amp; os, const BigInt&amp; b) {
        os &lt;&lt; b.val;
        return os;
    }

    // Quá tải toán tử cộng +
    BigInt operator+(const BigInt&amp; other) const {
        string res = "";
        string s1 = val, s2 = other.val;

        while (s1.size() &lt; s2.size()) s1 = "0" + s1;
        while (s2.size() &lt; s1.size()) s2 = "0" + s2;

        int carry = 0;
        for (int i = s1.size() - 1; i &gt;= 0; --i) {
            int sum = (s1[i] - '0') + (s2[i] - '0') + carry;
            res += (char)(sum % 10 + '0');
            carry = sum / 10;
        }
        if (carry) res += "1";
        reverse(res.begin(), res.end());
        return BigInt(res);
    }
};

int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL);

    cout &lt;&lt; "Max(100,200): " &lt;&lt; MyMax(100, 200) &lt;&lt; "\n";
    cout &lt;&lt; "Max(3.14,2.71): " &lt;&lt; MyMax(3.14, 2.71) &lt;&lt; "\n";

    BigInt a, b;
    cin &gt;&gt; a &gt;&gt; b;
    cout &lt;&lt; "Tong BigInt: " &lt;&lt; a + b &lt;&lt; "\n";
    return 0;
}</pre>
                        <div class="p-4 bg-red-50 rounded-xl border-l-4 border-red-500 mt-3">
                            <p class="font-semibold text-red-700">⚠️ Lưu ý hiệu suất:</p>
                            <p class="mt-1 text-red-600">Cách cộng BigInt ở trên dùng cơ số 10 (từng chữ số) — dễ hiểu nhưng chưa tối ưu. Trong thi chuyên, người ta thường <strong>nén 9 chữ số vào một <code>long long</code> (cơ số $10^9$)</strong> để tính toán nhanh hơn gấp ~9 lần. Kỹ thuật này gọi là <em>Base Compression</em>.</p>
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

                    <p class="font-black text-slate-700 uppercase text-xs tracking-widest">🟢 Cơ bản — Kiểm tra lý thuyết</p>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 1: Template MySwap</p>
                        <p class="mt-1 text-slate-600">Viết hàm <code>template &lt;typename T&gt; void MySwap(T &amp;a, T &amp;b)</code> để hoán vị hai biến bất kỳ mà không dùng biến trung gian <code>std::swap</code>. Kiểm tra với <code>int</code>, <code>double</code> và <code>string</code>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// Input:</span> a = 10, b = 20<br>
                            <span class="text-slate-400">// Output:</span> a = 20, b = 10
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 2: Phân số — Toán tử <code>*</code></p>
                        <p class="mt-1 text-slate-600">Xây dựng <code>struct Fraction { int num, den; }</code>. Quá tải toán tử <code>*</code> để nhân hai phân số và tự động rút gọn kết quả bằng <code>__gcd</code>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// Input:</span> 2/3 * 3/4<br>
                            <span class="text-slate-400">// Output:</span> 1/2
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 3: Điểm 2D — Toán tử <code>==</code></p>
                        <p class="mt-1 text-slate-600">Xây dựng <code>struct Point { int x, y; }</code>. Quá tải toán tử <code>==</code> để so sánh hai điểm. In ra "Trùng nhau" hoặc "Khác nhau".</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// Input:</span> (3,4) và (3,4)<br>
                            <span class="text-slate-400">// Output:</span> Trùng nhau
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 4: Template PrintArray</p>
                        <p class="mt-1 text-slate-600">Viết hàm <code>template &lt;typename T&gt; void PrintArray(T arr[], int n)</code> để in tất cả phần tử mảng, cách nhau bởi dấu cách. Kiểm tra với mảng <code>int</code> và mảng <code>double</code>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// Input:</span> {1, 2, 3, 4, 5}<br>
                            <span class="text-slate-400">// Output:</span> 1 2 3 4 5
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 5: Thời gian — Toán tử <code>-</code></p>
                        <p class="mt-1 text-slate-600">Xây dựng <code>struct Time { int h, m, s; }</code>. Quá tải toán tử <code>-</code> để trả về số giây chênh lệch giữa hai mốc thời gian (giả định kết quả luôn dương).</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// Input:</span> 01:30:00 - 01:00:00<br>
                            <span class="text-slate-400">// Output:</span> 1800 giây
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 6: Vector2D — Tích vô hướng</p>
                        <p class="mt-1 text-slate-600">Xây dựng <code>struct Vector2D { double x, y; }</code>. Quá tải toán tử <code>*</code> để tính tích vô hướng (dot product): $\vec{u} \cdot \vec{v} = u_x v_x + u_y v_y$.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// Input:</span> (1,2) · (3,4)<br>
                            <span class="text-slate-400">// Output:</span> 11.00
                        </div>
                    </div>

                    <p class="font-black text-indigo-700 uppercase text-xs tracking-widest mt-6">🏆 Đấu trường — Nâng cao</p>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 7: BigInt Subtraction</p>
                        <p class="mt-1 text-indigo-700">Bổ sung toán tử <code>-</code> cho <code>BigInt</code>. Giả định số thứ nhất luôn lớn hơn hoặc bằng số thứ hai. Thuật toán: trừ từng chữ số từ phải sang trái, xử lý mượn (<code>borrow</code>), xóa các chữ số <code>0</code> ở đầu kết quả.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-200">
                            <span class="text-slate-400">// Input:</span> 1000000000000 - 999999999999<br>
                            <span class="text-slate-400">// Output:</span> 1
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 8: BigInt Multiplication (nhân với int)</p>
                        <p class="mt-1 text-indigo-700">Cài đặt toán tử <code>*</code> giữa <code>BigInt</code> và một số nguyên thường (<code>int</code>). Duyệt từng chữ số từ phải sang trái, nhân với số đó rồi xử lý nhớ tương tự phép cộng.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-200">
                            <span class="text-slate-400">// Input:</span> 999999999999999 * 9<br>
                            <span class="text-slate-400">// Output:</span> 8999999999999991
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 9: Matrix Template</p>
                        <p class="mt-1 text-indigo-700">Viết <code>template &lt;typename T&gt; struct Matrix</code> lưu ma trận $N \times M$ bằng <code>vector&lt;vector&lt;T&gt;&gt;</code>. Quá tải toán tử <code>+</code> để cộng hai ma trận cùng kích thước. Kiểm tra với ma trận <code>int</code> và <code>double</code>.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 10: Generic Stack</p>
                        <p class="mt-1 text-indigo-700">Thiết kế <code>template &lt;typename T&gt; struct Stack</code> dùng <code>vector&lt;T&gt;</code> bên trong, hỗ trợ các hàm <code>push(val)</code>, <code>pop()</code>, <code>top()</code>, <code>empty()</code>, <code>size()</code>. Kiểm tra với kiểu <code>string</code> và <code>int</code>.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 11: Sắp xếp BigInt</p>
                        <p class="mt-1 text-indigo-700">Nhập $N$ số nguyên lớn vào <code>vector&lt;BigInt&gt;</code>. Quá tải toán tử <code>&lt;</code> cho <code>BigInt</code> (so sánh theo độ dài, sau đó theo từ điển). Dùng <code>std::sort</code> để sắp xếp tăng dần và in kết quả.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-200">
                            <span class="text-slate-400">// Input:</span> 3 → 999 100 50<br>
                            <span class="text-slate-400">// Output:</span> 50 100 999
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
                    <p class="text-sm text-slate-500 italic">Video đang được chuẩn bị.</p>
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold text-slate-700 mb-2">🔍 Từ khóa tự học:</p>
                        <ul class="list-disc list-inside space-y-1 text-slate-600">
                            <li><code>C++ BigInt implementation string</code></li>
                            <li><code>Base compression BigInt competitive programming</code></li>
                            <li><code>Operator overloading best practices C++</code></li>
                            <li><code>C++ template generic programming STL</code></li>
                        </ul>
                    </div>
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold text-slate-700 mb-1">📄 Tài liệu tham khảo:</p>
                        <p class="text-slate-600">Đọc thêm về <code>std::string</code> optimization và operator overloading trên <a href="https://cplusplus.com/doc/tutorial/templates/" target="_blank" class="text-blue-600 hover:underline">cplusplus.com</a>.</p>
                    </div>
                </div>
            </details>

        </div>
    `
    },
            {
    title: "Bài 8: Con Trỏ và Quản Lý Bộ Nhớ Động",
    videoId: "",
    desc: "Hiểu bản chất địa chỉ ô nhớ, thao tác với con trỏ và nắm vững kỹ thuật cấp phát bộ nhớ động trên Heap để tối ưu tài nguyên chương trình C++.",
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
                    <p class="font-semibold text-slate-800 mb-2">📘 Kiến thức:</p>
                    <ul class="list-disc list-inside space-y-1 mb-4">
                        <li>Hiểu bản chất của <strong>địa chỉ ô nhớ</strong> và <strong>biến con trỏ</strong> trong C++.</li>
                        <li>Phân biệt rõ sự khác nhau giữa vùng nhớ <strong>Stack</strong> (tĩnh) và <strong>Heap</strong> (động).</li>
                        <li>Hiểu mối quan hệ mật thiết giữa <strong>con trỏ và mảng</strong>.</li>
                    </ul>
                    <p class="font-semibold text-slate-800 mb-2">🛠️ Kỹ năng:</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Thao tác thành thạo với toán tử <code>&amp;</code> (lấy địa chỉ) và <code>*</code> (giải tham chiếu).</li>
                        <li>Cấp phát và giải phóng bộ nhớ động bằng <code>new</code> và <code>delete</code>.</li>
                        <li>Tránh các lỗi phổ biến: <strong>Memory Leak</strong>, <strong>Stack Overflow</strong>, <strong>Dangling Pointer</strong>.</li>
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
                        <p class="font-black text-slate-800 text-base mb-1">1. Bản chất của Con trỏ</p>
                        <p>Mọi biến trong chương trình đều được lưu tại một <strong>địa chỉ cụ thể trong RAM</strong>. <strong>Biến con trỏ</strong> là biến đặc biệt mà giá trị của nó không phải dữ liệu thông thường (như <code>10</code>, <code>3.14</code>) mà là <strong>địa chỉ của một biến khác</strong>.</p>
                        <div class="mt-2 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-400">
                            <p class="font-semibold text-blue-800">💡 Hình dung trực quan:</p>
                            <p class="mt-1 text-blue-700">RAM giống như dãy nhà trọ, mỗi nhà có một số phòng (địa chỉ). Biến thường là <em>người ở trong phòng</em>. Con trỏ là <em>tờ giấy ghi số phòng</em> — nó không phải người ở, nhưng biết chính xác người ở đâu.</p>
                        </div>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto mt-3">int  a   = 10;    // Biến thường: lưu giá trị 10
int *ptr = &amp;a;   // Con trỏ ptr: lưu ĐỊA CHỈ của a
// Khai báo: KieuDL *tenConTro;</pre>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-1">2. Hai toán tử quan trọng</p>
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm border-collapse">
                                <thead>
                                    <tr class="bg-slate-100">
                                        <th class="border border-slate-200 px-3 py-2 text-left font-bold">Toán tử</th>
                                        <th class="border border-slate-200 px-3 py-2 text-left font-bold">Tên gọi</th>
                                        <th class="border border-slate-200 px-3 py-2 text-left font-bold">Ý nghĩa</th>
                                        <th class="border border-slate-200 px-3 py-2 text-left font-bold">Ví dụ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border border-slate-200 px-3 py-2 font-mono text-emerald-700">&amp;</td>
                                        <td class="border border-slate-200 px-3 py-2">Address-of</td>
                                        <td class="border border-slate-200 px-3 py-2">Lấy địa chỉ của một biến</td>
                                        <td class="border border-slate-200 px-3 py-2 font-mono text-xs">ptr = &amp;a</td>
                                    </tr>
                                    <tr class="bg-slate-50">
                                        <td class="border border-slate-200 px-3 py-2 font-mono text-orange-600">*</td>
                                        <td class="border border-slate-200 px-3 py-2">Dereference</td>
                                        <td class="border border-slate-200 px-3 py-2">Truy xuất giá trị tại địa chỉ con trỏ đang trỏ đến</td>
                                        <td class="border border-slate-200 px-3 py-2 font-mono text-xs">*ptr = 99</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-1">3. Stack vs Heap — Hai vùng bộ nhớ quan trọng</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                            <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
                                <p class="font-bold text-slate-700 mb-1">📦 Stack (Tĩnh)</p>
                                <ul class="list-disc list-inside text-slate-600 space-y-1 text-xs">
                                    <li>Cấp phát <strong>tự động</strong> khi khai báo biến</li>
                                    <li>Giới hạn nhỏ (~1MB – 8MB)</li>
                                    <li>Dễ gây <strong>Stack Overflow</strong> với mảng lớn</li>
                                    <li>Tự giải phóng khi ra khỏi scope</li>
                                </ul>
                            </div>
                            <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                                <p class="font-bold text-emerald-700 mb-1">🌐 Heap (Động)</p>
                                <ul class="list-disc list-inside text-emerald-700 space-y-1 text-xs">
                                    <li>Lập trình viên <strong>tự quản lý</strong></li>
                                    <li>Dung lượng rất lớn (hàng trăm MB)</li>
                                    <li>Dùng <code>new</code> để cấp phát</li>
                                    <li>Phải dùng <code>delete</code> để giải phóng</li>
                                </ul>
                            </div>
                        </div>
                        <div class="p-4 bg-red-50 rounded-xl border-l-4 border-red-500 mt-3">
                            <p class="font-semibold text-red-700">⚠️ Memory Leak — Lỗi nguy hiểm thầm lặng:</p>
                            <p class="mt-1 text-red-600">Nếu dùng <code>new</code> mà quên <code>delete</code>, bộ nhớ bị chiếm giữ mãi mãi cho đến khi chương trình kết thúc. Trong các bài thi dài hoặc chương trình lớn, điều này gây ra hiện tượng máy chậm dần rồi treo.</p>
                        </div>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-2">4. Code minh họa tổng hợp (C++)</p>
<pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto">#include &lt;iostream&gt;
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    // --- CƠ BẢN: Toán tử & và * ---
    int a = 10;
    int *ptr = &amp;a;  // ptr lưu địa chỉ của a

    cout &lt;&lt; "Gia tri cua a   : " &lt;&lt; a    &lt;&lt; "\n"; // 10
    cout &lt;&lt; "Dia chi cua a   : " &lt;&lt; &amp;a   &lt;&lt; "\n"; // 0x...
    cout &lt;&lt; "ptr dang giu    : " &lt;&lt; ptr  &lt;&lt; "\n"; // cùng địa chỉ
    cout &lt;&lt; "Gia tri *ptr    : " &lt;&lt; *ptr &lt;&lt; "\n"; // 10

    *ptr = 99;  // Thay đổi a thông qua con trỏ
    cout &lt;&lt; "a sau khi *ptr=99: " &lt;&lt; a &lt;&lt; "\n"; // 99

    // --- BỘ NHỚ ĐỘNG: new / delete ---
    int n;
    cout &lt;&lt; "Nhap n: "; cin &gt;&gt; n;

    int *arr = new int[n];  // Cấp phát trên Heap

    for (int i = 0; i &lt; n; ++i)
        arr[i] = i * 2;     // Truy cập như mảng thường

    for (int i = 0; i &lt; n; ++i)
        cout &lt;&lt; arr[i] &lt;&lt; " ";
    cout &lt;&lt; "\n";

    delete[] arr;   // LUÔN giải phóng sau khi dùng xong
    arr = nullptr;  // Đặt về nullptr để tránh Dangling Pointer

    return 0;
}</pre>
                        <div class="p-4 bg-amber-50 rounded-xl border-l-4 border-amber-400 mt-3">
                            <p class="font-semibold text-amber-800">💬 Ghi chú thực tiễn:</p>
                            <p class="mt-1 text-amber-700">Trong C++ hiện đại (C++11 trở lên), người ta ưu tiên dùng <strong>Smart Pointers</strong> (<code>unique_ptr</code>, <code>shared_ptr</code>) để tự động giải phóng bộ nhớ, tránh quên <code>delete</code>. Tuy nhiên trong thi đấu HSG, <strong>con trỏ trần</strong> vẫn là công cụ không thể thiếu khi xây dựng Linked List, Tree hay các cấu trúc tự cài đặt.</p>
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

                    <p class="font-black text-slate-700 uppercase text-xs tracking-widest">🟢 Cơ bản — Kiểm tra lý thuyết</p>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 1: Thay đổi giá trị qua con trỏ</p>
                        <p class="mt-1 text-slate-600">Khai báo biến <code>int x = 5</code> và con trỏ <code>ptr</code> trỏ đến <code>x</code>. Dùng <code>*ptr</code> để thay đổi <code>x</code> thành 100. In ra địa chỉ và giá trị của <code>x</code> trước và sau khi thay đổi.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// Output mẫu:</span><br>
                            Truoc: x = 5, &amp;x = 0x...<br>
                            Sau: x = 100, *ptr = 100
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 2: Hàm Swap dùng con trỏ</p>
                        <p class="mt-1 text-slate-600">Viết hàm <code>void swap(int *a, int *b)</code> sử dụng con trỏ để hoán vị giá trị hai biến. Gọi hàm từ <code>main()</code> và kiểm tra kết quả.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// Input:</span> a = 3, b = 7<br>
                            <span class="text-slate-400">// Output:</span> a = 7, b = 3
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 3: Con trỏ vs Tham chiếu</p>
                        <p class="mt-1 text-slate-600">Viết chương trình minh họa sự khác biệt giữa <code>int *ptr</code> (con trỏ) và <code>int &amp;ref</code> (tham chiếu): con trỏ có thể trỏ lại sang biến khác, tham chiếu thì không. In ra địa chỉ để kiểm chứng.</p>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 4: Mảng động số thực</p>
                        <p class="mt-1 text-slate-600">Cấp phát động mảng $n$ số thực (<code>double</code>) trên Heap. Nhập các phần tử từ bàn phím, tính và in ra trung bình cộng. Nhớ giải phóng bộ nhớ sau khi xong.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// Input:</span> n=4, {1.5, 2.5, 3.0, 5.0}<br>
                            <span class="text-slate-400">// Output:</span> Trung binh: 3.00
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 5: Duyệt mảng bằng con trỏ</p>
                        <p class="mt-1 text-slate-600">Cho mảng <code>int a[] = {1, 2, 3, 4, 5}</code>. Sử dụng con trỏ và toán tử <code>++</code> (thay vì chỉ số <code>i</code>) để duyệt và in ra tất cả các phần tử. Lưu ý: tên mảng là địa chỉ phần tử đầu tiên.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// Output:</span> 1 2 3 4 5
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 6: Tìm giá trị lớn nhất qua con trỏ</p>
                        <p class="mt-1 text-slate-600">Viết hàm <code>int* findMax(int *arr, int n)</code> trả về <strong>con trỏ</strong> trỏ đến phần tử lớn nhất trong mảng. In ra giá trị và địa chỉ của phần tử đó.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// Input:</span> {3, 1, 9, 2, 7}<br>
                            <span class="text-slate-400">// Output:</span> Max = 9, tai dia chi 0x...
                        </div>
                    </div>

                    <p class="font-black text-indigo-700 uppercase text-xs tracking-widest mt-6">🏆 Đấu trường — Nâng cao</p>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 7: Ma trận động 2 chiều</p>
                        <p class="mt-1 text-indigo-700">Dùng <strong>con trỏ của con trỏ</strong> (<code>int **matrix</code>) để cấp phát động một ma trận $M \times N$. Điền giá trị, in ra, rồi viết hàm <code>freeMatrix(int **matrix, int M)</code> để giải phóng an toàn từng hàng rồi đến mảng ngoài.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-200">
                            <span class="text-slate-400">// Cấp phát:</span> int **m = new int*[M];<br>
                            <span class="text-slate-400">//            </span> for(i) m[i] = new int[N];
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 8: Linked List đơn giản</p>
                        <p class="mt-1 text-indigo-700">Định nghĩa <code>struct Node { int data; Node* next; }</code>. Viết hàm <code>pushFront(Node* &amp;head, int val)</code> thêm phần tử vào đầu danh sách và hàm <code>printList(Node* head)</code> in toàn bộ danh sách.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-200">
                            <span class="text-slate-400">// Thêm 1, 2, 3 → Output:</span> 3 → 2 → 1 → NULL
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 9: Con trỏ hàm (Function Pointer)</p>
                        <p class="mt-1 text-indigo-700">Viết hàm <code>int tinhToan(int a, int b, int (*phepTinh)(int, int))</code>. Định nghĩa các hàm <code>cong</code>, <code>tru</code>, <code>nhan</code> rồi truyền vào làm tham số. In kết quả của từng phép toán.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-200">
                            <span class="text-slate-400">// tinhToan(6, 2, cong)  → 8</span><br>
                            <span class="text-slate-400">// tinhToan(6, 2, tru)   → 4</span><br>
                            <span class="text-slate-400">// tinhToan(6, 2, nhan)  → 12</span>
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 10: Tối ưu hóa mảng động</p>
                        <p class="mt-1 text-indigo-700">So sánh hai cách: (1) khai báo mảng tĩnh toàn cục <code>int a[1000000]</code>, (2) dùng con trỏ cấp phát đúng $N$ phần tử theo yêu cầu. Dùng <code>sizeof</code> và quan sát để nhận xét về sự khác biệt bộ nhớ thực tế được sử dụng.</p>
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
                    <p class="text-sm text-slate-500 italic">Video đang được chuẩn bị.</p>
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold text-slate-700 mb-2">🔍 Từ khóa tự học:</p>
                        <ul class="list-disc list-inside space-y-1 text-slate-600">
                            <li><code>C++ Pointers vs References explained</code></li>
                            <li><code>Dynamic memory allocation C++ new delete</code></li>
                            <li><code>Memory leak prevention C++</code></li>
                            <li><code>Smart pointers unique_ptr C++11</code></li>
                            <li><code>C++ pointer and array relationship</code></li>
                        </ul>
                    </div>
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold text-slate-700 mb-1">📄 Tài liệu tham khảo:</p>
                        <p class="text-slate-600">Đọc mục <strong>Pointers</strong> trên <a href="https://www.learncpp.com/cpp-tutorial/introduction-to-pointers/" target="_blank" class="text-blue-600 hover:underline">LearnCpp.com</a> — trang web dạy C++ chi tiết và miễn phí tốt nhất hiện nay.</p>
                    </div>
                </div>
            </details>

        </div>
    `
},
{
    title: "Bài 9: Nhập Xuất File (Tệp) trong Thi Đấu",
    videoId: "",
    desc: "Nắm vững kỹ thuật đọc/ghi tệp với freopen và fstream theo chuẩn thi HSG, kết hợp Fast I/O để tối đa hóa hiệu suất chương trình C++.",
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
                    <p class="font-semibold text-slate-800 mb-2">📘 Kiến thức:</p>
                    <ul class="list-disc list-inside space-y-1 mb-4">
                        <li>Hiểu cơ chế làm việc với tệp tin thông qua thư viện <code>&lt;fstream&gt;</code> (<code>ifstream</code>, <code>ofstream</code>).</li>
                        <li>Nắm vững kỹ thuật <strong>chuyển hướng luồng</strong> bằng <code>freopen</code> — chuẩn phổ biến nhất trong thi HSG.</li>
                        <li>Hiểu cách dùng <strong>Preprocessor Directives</strong> (<code>#ifndef ONLINE_JUDGE</code>) để tự động bật/tắt file khi debug và khi nộp bài.</li>
                    </ul>
                    <p class="font-semibold text-slate-800 mb-2">🛠️ Kỹ năng:</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Thành thạo đọc dữ liệu từ tệp <code>.INP</code> và ghi kết quả ra tệp <code>.OUT</code>.</li>
                        <li>Xử lý linh hoạt các tình huống: tệp không tồn tại, tệp rỗng, đọc đến hết tệp (EOF).</li>
                        <li>Kết hợp <strong>Fast I/O</strong> với nhập xuất tệp để tối đa hóa hiệu suất.</li>
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
                        <p class="font-black text-slate-800 text-base mb-1">1. Thư viện fstream (Cách cơ bản)</p>
                        <p>C++ cung cấp <code>ifstream</code> để đọc tệp và <code>ofstream</code> để ghi tệp. Sau khi mở, dùng đối tượng file thay cho <code>cin</code>/<code>cout</code>.</p>
<pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto mt-2">#include &lt;fstream&gt;
using namespace std;

int main() {
    ifstream fin("data.inp");   // Mở file đọc
    ofstream fout("data.out");  // Mở file ghi

    int a, b;
    fin  &gt;&gt; a &gt;&gt; b;       // Đọc từ file thay vì cin
    fout &lt;&lt; a + b &lt;&lt; "\n"; // Ghi ra file thay vì cout

    fin.close();   // Đóng file sau khi dùng xong
    fout.close();
    return 0;
}</pre>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-1">2. Kỹ thuật freopen (Chuẩn thi HSG)</p>
                        <p>Đây là cách phổ biến nhất trong các kỳ thi. <code>freopen</code> <strong>chuyển hướng</strong> (redirect) luồng <code>stdin</code>/<code>stdout</code> vào tệp — bạn vẫn viết <code>cin</code>/<code>cout</code> như bình thường.</p>
                        <div class="p-4 bg-emerald-50 rounded-xl border-l-4 border-emerald-500 mt-2">
                            <p class="font-semibold text-emerald-800">✅ Ưu điểm khi thi:</p>
                            <p class="mt-1 text-emerald-700">Chỉ cần <strong>comment 2 dòng</strong> <code>freopen</code> là code chạy được trên Codeforces/SPOJ mà không cần sửa gì thêm.</p>
                        </div>
<pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto mt-3">#include &lt;iostream&gt;
#include &lt;cstdio&gt;
using namespace std;

int main() {
    freopen("SUM.INP", "r", stdin);  // "r" = read
    freopen("SUM.OUT", "w", stdout); // "w" = write

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int a, b;
    while (cin &gt;&gt; a &gt;&gt; b) {  // Đọc đến hết file (EOF)
        cout &lt;&lt; a + b &lt;&lt; "\n";
    }
    return 0;
}</pre>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-1">3. Preprocessor Directive — Giải pháp chuyên nghiệp</p>
                        <p>Dùng <code>#ifndef ONLINE_JUDGE</code> để tự động mở file khi chạy trên máy cá nhân, và tự bỏ qua khi nộp lên hệ thống chấm online. <strong>Không bao giờ lo quên xóa lệnh mở file nữa!</strong></p>
<pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto mt-2">#include &lt;iostream&gt;
#include &lt;cstdio&gt;
using namespace std;

int main() {
    // Khối này CHỈ chạy trên máy cá nhân (không có ONLINE_JUDGE)
    // Khi nộp Codeforces/SPOJ, hệ thống tự định nghĩa ONLINE_JUDGE
    // nên khối này bị bỏ qua hoàn toàn
    #ifndef ONLINE_JUDGE
        freopen("input.txt",  "r", stdin);
        freopen("output.txt", "w", stdout);
    #endif

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    // Phần code bài toán viết bình thường...
    int n; cin &gt;&gt; n;
    cout &lt;&lt; n * 2 &lt;&lt; "\n";
    return 0;
}</pre>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-1">4. Xử lý EOF và kiểm tra tệp</p>
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm border-collapse mt-1">
                                <thead>
                                    <tr class="bg-slate-100">
                                        <th class="border border-slate-200 px-3 py-2 text-left font-bold">Tình huống</th>
                                        <th class="border border-slate-200 px-3 py-2 text-left font-bold">Cách xử lý</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border border-slate-200 px-3 py-2">Đọc đến hết file, không biết trước số lượng</td>
                                        <td class="border border-slate-200 px-3 py-2 font-mono text-xs">while (cin &gt;&gt; x) { ... }</td>
                                    </tr>
                                    <tr class="bg-slate-50">
                                        <td class="border border-slate-200 px-3 py-2">Kiểm tra file có mở được không</td>
                                        <td class="border border-slate-200 px-3 py-2 font-mono text-xs">if (!fin.is_open()) { ... }</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-slate-200 px-3 py-2">Đọc từng dòng văn bản</td>
                                        <td class="border border-slate-200 px-3 py-2 font-mono text-xs">while (getline(fin, line)) { ... }</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="p-4 bg-red-50 rounded-xl border-l-4 border-red-500 mt-3">
                            <p class="font-semibold text-red-700">⚠️ Lỗi thường gặp khi thi:</p>
                            <ul class="list-disc list-inside mt-1 text-red-600 space-y-1">
                                <li>Tên file sai chữ hoa/thường: <code>"sum.inp"</code> khác <code>"SUM.INP"</code> trên Linux (máy chấm thi).</li>
                                <li>Quên xóa <code>freopen</code> khi nộp bài online → bị Runtime Error hoặc sai kết quả.</li>
                                <li>Dùng <code>fstream</code> nhưng quên <code>close()</code> → dữ liệu chưa được flush ra file.</li>
                            </ul>
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

                    <p class="font-black text-slate-700 uppercase text-xs tracking-widest">🟢 Cơ bản — Kiểm tra lý thuyết</p>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 1: Tính tích từ file</p>
                        <p class="mt-1 text-slate-600">Viết chương trình đọc 2 số nguyên từ <code>TINH.INP</code> và ghi tích của chúng vào <code>TINH.OUT</code>. Thực hành cả hai cách: dùng <code>fstream</code> và dùng <code>freopen</code>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// TINH.INP:</span> 6 7<br>
                            <span class="text-slate-400">// TINH.OUT:</span> 42
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 2: Tổng mảng từ file</p>
                        <p class="mt-1 text-slate-600">Tệp <code>MANG.INP</code>: dòng đầu là $N$, dòng tiếp theo là $N$ số nguyên. Tính tổng và ghi kết quả vào <code>MANG.OUT</code>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// MANG.INP:</span> 5 / 1 2 3 4 5<br>
                            <span class="text-slate-400">// MANG.OUT:</span> 15
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 3: Đếm số từ trong file</p>
                        <p class="mt-1 text-slate-600">Đọc một tệp văn bản chứa các từ (cách nhau bởi dấu cách hoặc xuống dòng). Đếm tổng số từ và ghi kết quả ra tệp <code>DEMTU.OUT</code>. Dùng <code>while (fin &gt;&gt; word)</code>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// Input:</span> "hello world foo bar"<br>
                            <span class="text-slate-400">// Output:</span> 4
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 4: Sao chép tệp</p>
                        <p class="mt-1 text-slate-600">Viết chương trình đọc từng dòng từ <code>A.TXT</code> bằng <code>getline</code> và sao chép nguyên vẹn nội dung sang <code>B.TXT</code>. Kiểm tra trường hợp <code>A.TXT</code> không tồn tại.</p>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 5: Dãy Fibonacci ra file</p>
                        <p class="mt-1 text-slate-600">Nhập vào số nguyên $N$ từ bàn phím. Ghi $N$ số Fibonacci đầu tiên vào tệp <code>FIBO.OUT</code>, mỗi số trên một dòng. Áp dụng kỹ thuật <code>#ifndef ONLINE_JUDGE</code>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// N=6 → FIBO.OUT:</span> 0 1 1 2 3 5
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 6: Lọc điểm từ file</p>
                        <p class="mt-1 text-slate-600">Tệp <code>DIEM.INP</code> chứa các điểm số thực, mỗi số một dòng. Đọc và ghi vào <code>DIEM.OUT</code> <strong>chỉ những điểm lớn hơn 5.0</strong>, mỗi điểm một dòng, định dạng 1 chữ số thập phân.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// DIEM.INP:</span> 3.5 6.0 8.5 4.0 7.0<br>
                            <span class="text-slate-400">// DIEM.OUT:</span> 6.0 / 8.5 / 7.0
                        </div>
                    </div>

                    <p class="font-black text-indigo-700 uppercase text-xs tracking-widest mt-6">🏆 Đấu trường — Nâng cao</p>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 7: BigInt từ file</p>
                        <p class="mt-1 text-indigo-700">Đọc hai số nguyên khổng lồ (tối đa 200 chữ số) từ tệp <code>BIG.INP</code>. Dùng struct <code>BigInt</code> đã xây dựng ở Bài 7 để tính tổng và ghi vào <code>BIG.OUT</code>. Kết hợp <code>freopen</code> với Fast I/O.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-200">
                            <span class="text-slate-400">// BIG.INP:</span><br>
                            99999999999999999999999999999<br>
                            00000000000000000000000000001<br>
                            <span class="text-slate-400">// BIG.OUT:</span> 100000000000000000000000000000
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 8: Thống kê từ vựng</p>
                        <p class="mt-1 text-indigo-700">Đọc toàn bộ nội dung tệp <code>VANBAN.INP</code>. Thống kê tần suất xuất hiện của mỗi chữ cái <code>a-z</code> (không phân biệt hoa/thường). Ghi kết quả vào tệp theo thứ tự bảng chữ cái, định dạng: <code>a: 15</code>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-200">
                            <span class="text-slate-400">// Input:</span> "Hello World"<br>
                            <span class="text-slate-400">// Output:</span> d: 1 / e: 1 / h: 1 / l: 3 / o: 2 / r: 1 / w: 1
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 9: Sắp xếp hồ sơ sinh viên</p>
                        <p class="mt-1 text-indigo-700">Tệp <code>STUDENT.INP</code>: dòng đầu là $N$, mỗi dòng tiếp theo gồm Mã số (int), Tên (string), Điểm (double). Đọc vào <code>vector&lt;struct Student&gt;</code>, sắp xếp theo điểm <strong>giảm dần</strong>, ghi vào <code>STUDENT.OUT</code>.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-200">
                            <span class="text-slate-400">// STUDENT.INP:</span> 3 / 1 An 8.5 / 2 Binh 9.0 / 3 Chi 7.5<br>
                            <span class="text-slate-400">// STUDENT.OUT:</span> 2 Binh 9.0 / 1 An 8.5 / 3 Chi 7.5
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 10: Tìm số lớn thứ hai trên file lớn</p>
                        <p class="mt-1 text-indigo-700">Tệp <code>DATA.INP</code> chứa $10^6$ số nguyên. Tìm số lớn thứ hai <strong>mà không đọc toàn bộ vào mảng</strong>: đọc từng số, duy trì hai biến <code>max1</code> và <code>max2</code>. Ghi kết quả vào <code>DATA.OUT</code>. Độ phức tạp $O(N)$, bộ nhớ $O(1)$.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 11: Gộp hai dãy đã sắp xếp</p>
                        <p class="mt-1 text-indigo-700">Tệp <code>ARRAY1.INP</code> và <code>ARRAY2.INP</code> chứa hai dãy số nguyên tăng dần (mỗi dòng một số). Dùng kỹ thuật <strong>merge hai con trỏ</strong> để gộp thành dãy tăng dần duy nhất, ghi vào <code>MERGE.OUT</code>. Độ phức tạp $O(N+M)$.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-200">
                            <span class="text-slate-400">// ARRAY1:</span> 1 3 5 / <span class="text-slate-400">ARRAY2:</span> 2 4 6<br>
                            <span class="text-slate-400">// MERGE.OUT:</span> 1 2 3 4 5 6
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
                    <p class="text-sm text-slate-500 italic">Video đang được chuẩn bị.</p>
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold text-slate-700 mb-2">🔍 Từ khóa tự học:</p>
                        <ul class="list-disc list-inside space-y-1 text-slate-600">
                            <li><code>C++ freopen vs fstream competitive programming</code></li>
                            <li><code>Reading until EOF C++ while cin</code></li>
                            <li><code>ifndef ONLINE_JUDGE file redirect trick</code></li>
                            <li><code>File handling in competitive programming C++</code></li>
                        </ul>
                    </div>
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold text-slate-700 mb-1">📄 Tài liệu tham khảo:</p>
                        <p class="text-slate-600">Đọc mục <strong>Input/Output with files</strong> trên <a href="https://cplusplus.com/doc/tutorial/files/" target="_blank" class="text-blue-600 hover:underline">cplusplus.com</a> để hiểu sâu hơn về <code>fstream</code> và các chế độ mở file.</p>
                    </div>
                </div>
            </details>

        </div>
    `
},
            { 
                title: "STL (Vector, Stack, Queue)", 
                videoId: "", 
                desc: "Sử dụng các container mạnh mẽ có sẵn của C++ để tăng tốc độ code.", 
                downloadUrl: "#" 
            },
            { 
                title: "Đệ quy & Đệ quy quay lui", 
                videoId: "", 
                desc: "Bước đầu của tư duy thuật toán tìm kiếm không gian lời giải (Vét cạn).", 
                downloadUrl: "#" 
            },
            { 
                title: "Xử lý chuỗi", 
                videoId: "", 
                desc: "Làm chủ std::string và các bài toán liên quan đến văn bản.", 
                downloadUrl: "#" 
            }
        ]
    }
];
