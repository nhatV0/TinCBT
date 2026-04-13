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
                title: "Con trỏ", 
                videoId: "", 
                desc: "Hiểu sâu về địa chỉ ô nhớ và quản lý bộ nhớ động.", 
                downloadUrl: "#" 
            },
            { 
                title: "Nhập xuất file", 
                videoId: "", 
                desc: "Kỹ năng bắt buộc để đọc dữ liệu từ tệp .INP và xuất ra .OUT trong các kỳ thi.", 
                downloadUrl: "#" 
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
