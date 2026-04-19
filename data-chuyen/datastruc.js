// File dữ liệu chi tiết cho khóa học Cấu trúc dữ liệu (DSA)
window.courseContent = [
    {
        chapterName: "Chuyên đề: Cấu trúc dữ liệu (DSA)",
        lessons: [
            {
    title: "Bài 17: Thuật Toán Tìm Kiếm & Sắp Xếp Kinh Điển",
    videoId: "",
    desc: "Nắm vững các thuật toán tìm kiếm, sắp xếp từ cơ bản đến nâng cao và kỹ thuật tùy biến Comparator trong C++.",
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 leading-relaxed text-sm md:text-base space-y-4">
                    <div>
                        <p class="font-bold text-slate-800 mb-2">📚 Kiến thức:</p>
                        <ul class="list-disc list-inside space-y-1 pl-2">
                            <li>Hiểu sâu về độ phức tạp thời gian: $O(N^2)$ vs $O(N \log N)$ vs $O(N+K)$.</li>
                            <li>Nắm vững các nhóm thuật toán sắp xếp: dựa trên so sánh và không dựa trên so sánh.</li>
                            <li>Hiểu bản chất và điều kiện áp dụng của Tìm kiếm nhị phân.</li>
                        </ul>
                    </div>
                    <div>
                        <p class="font-bold text-slate-800 mb-2">🛠️ Kỹ năng:</p>
                        <ul class="list-disc list-inside space-y-1 pl-2">
                            <li>Làm chủ hàm <code class="bg-slate-100 px-1 rounded font-mono">std::sort</code> với các Comparator tùy biến.</li>
                            <li>Áp dụng Tìm kiếm nhị phân trên các biến thể phức tạp (tìm vị trí đầu tiên, vị trí cuối cùng).</li>
                            <li>Biết khi nào dùng Counting Sort để đạt độ phức tạp $O(N+K)$ thay vì $O(N \log N)$.</li>
                        </ul>
                    </div>
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-6 text-sm md:text-base">

                    <div>
                        <p class="font-black text-slate-800 text-base mb-3">1. Tìm kiếm (Searching)</p>
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm border-collapse rounded-xl overflow-hidden border border-slate-200">
                                <thead>
                                    <tr class="bg-slate-100 text-slate-700">
                                        <th class="p-3 text-left font-bold border-b border-slate-200">Thuật toán</th>
                                        <th class="p-3 text-left font-bold border-b border-slate-200">Độ phức tạp</th>
                                        <th class="p-3 text-left font-bold border-b border-slate-200">Điều kiện</th>
                                        <th class="p-3 text-left font-bold border-b border-slate-200">Ghi chú</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-slate-100 hover:bg-slate-50">
                                        <td class="p-3 font-semibold">Tìm kiếm tuyến tính</td>
                                        <td class="p-3 font-mono text-orange-600">$O(N)$</td>
                                        <td class="p-3">Mảng bất kỳ</td>
                                        <td class="p-3">Đơn giản nhưng chậm</td>
                                    </tr>
                                    <tr class="hover:bg-slate-50">
                                        <td class="p-3 font-semibold">Tìm kiếm nhị phân</td>
                                        <td class="p-3 font-mono text-emerald-600">$O(\log N)$</td>
                                        <td class="p-3">Mảng đã sắp xếp</td>
                                        <td class="p-3">Rất nhanh, dùng trong Binary Search on Answer</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="mt-3 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                            <p class="font-bold text-blue-800">💡 Binary Search on Answer</p>
                            <p class="text-blue-700 mt-1">Kỹ thuật quan trọng: Thay vì tìm trực tiếp kết quả, ta nhị phân trên không gian đáp án và kiểm tra tính khả thi. Áp dụng khi bài hỏi "giá trị nhỏ nhất/lớn nhất thỏa điều kiện..."</p>
                        </div>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-3">2. Sắp xếp (Sorting)</p>
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm border-collapse rounded-xl overflow-hidden border border-slate-200">
                                <thead>
                                    <tr class="bg-slate-100 text-slate-700">
                                        <th class="p-3 text-left font-bold border-b border-slate-200">Nhóm</th>
                                        <th class="p-3 text-left font-bold border-b border-slate-200">Thuật toán</th>
                                        <th class="p-3 text-left font-bold border-b border-slate-200">Độ phức tạp</th>
                                        <th class="p-3 text-left font-bold border-b border-slate-200">Khi nào dùng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-slate-100 hover:bg-slate-50">
                                        <td class="p-3 font-semibold text-orange-600">Chậm</td>
                                        <td class="p-3">Bubble, Insertion, Selection</td>
                                        <td class="p-3 font-mono text-orange-600">$O(N^2)$</td>
                                        <td class="p-3">$N &lt; 5000$, học tư duy</td>
                                    </tr>
                                    <tr class="border-b border-slate-100 hover:bg-slate-50">
                                        <td class="p-3 font-semibold text-emerald-600">Chuẩn</td>
                                        <td class="p-3">Merge, Quick, Heap Sort</td>
                                        <td class="p-3 font-mono text-emerald-600">$O(N \log N)$</td>
                                        <td class="p-3">Tiêu chuẩn thi đấu</td>
                                    </tr>
                                    <tr class="hover:bg-slate-50">
                                        <td class="p-3 font-semibold text-blue-600">Đặc biệt</td>
                                        <td class="p-3">Counting, Radix Sort</td>
                                        <td class="p-3 font-mono text-blue-600">$O(N+K)$</td>
                                        <td class="p-3">Phạm vi giá trị $K$ nhỏ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="mt-3 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                            <p class="font-bold text-red-800">⚠️ Lưu ý quan trọng</p>
                            <p class="text-red-700 mt-1">Counting Sort yêu cầu cấp phát mảng đếm kích thước $K+1$. Nếu $K = 10^9$, bộ nhớ sẽ tràn — hãy dùng Merge Sort hoặc kỹ thuật Rời rạc hóa thay thế!</p>
                        </div>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-3">3. Tùy biến Comparator với <code class="bg-slate-100 px-1 rounded">std::sort</code></p>
                        <p class="mb-3 text-slate-600">Hàm <code class="bg-slate-100 px-1 rounded font-mono">std::sort</code> nhận vào một hàm so sánh <code class="bg-slate-100 px-1 rounded font-mono">bool compare(a, b)</code> trả về <code class="bg-slate-100 px-1 rounded font-mono">true</code> nếu <strong>a nên đứng trước b</strong>.</p>
                        <p class="mb-2 font-semibold text-slate-700">📌 Ví dụ: Sắp xếp các số theo tổng chữ số tăng dần, nếu bằng nhau thì theo giá trị tăng dần:</p>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed">#include &lt;iostream&gt;
#include &lt;vector&gt;
#include &lt;algorithm&gt;
using namespace std;

// Hàm tính tổng các chữ số của n
int sumDigits(int n) {
    int s = 0;
    n = abs(n);
    while (n > 0) {
        s += n % 10;
        n /= 10;
    }
    return s;
}

// Comparator: Quy tắc so sánh tùy chỉnh
bool compare(int a, int b) {
    int sumA = sumDigits(a);
    int sumB = sumDigits(b);
    if (sumA != sumB) {
        return sumA &lt; sumB; // Tổng chữ số nhỏ hơn đứng trước
    }
    return a &lt; b; // Nếu tổng bằng nhau, số nhỏ hơn đứng trước
}

int main() {
    vector&lt;int&gt; a = {13, 20, 5, 11, 9, 100};
    sort(a.begin(), a.end(), compare);
    for (int x : a) cout &lt;&lt; x &lt;&lt; " ";
    // Kết quả: 100 (1) 11 (2) 20 (2) 13 (4) 5 (5) 9 (9)
    return 0;
}</pre>
                        <div class="mt-3 p-4 bg-emerald-50 rounded-xl border-l-4 border-emerald-500">
                            <p class="font-bold text-emerald-800">✅ Lambda Comparator (C++11 trở lên)</p>
                            <p class="text-emerald-700 mt-1 mb-2">Thay vì khai báo hàm riêng, có thể viết gọn bằng lambda:</p>
                            <pre class="bg-slate-900 text-blue-300 p-3 rounded-lg font-mono text-xs overflow-x-auto">sort(a.begin(), a.end(), [](int a, int b) {
    return sumDigits(a) &lt; sumDigits(b);
});</pre>
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-4">

                    <p class="font-bold text-slate-600 uppercase text-xs tracking-widest">⚡ Cơ bản</p>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800">Bài 1: Binary Search — Tìm vị trí đầu tiên</p>
                        <p class="mt-1 text-slate-600">Cài đặt Binary Search để tìm <strong>vị trí xuất hiện đầu tiên</strong> của số $x$ trong mảng đã sắp xếp có nhiều số trùng nhau. Trả về $-1$ nếu không tìm thấy.</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                            <p class="text-slate-500">// Input:</p>
                            <p>N = 8, x = 3</p>
                            <p>A = [1, 2, 3, 3, 3, 5, 7, 9]</p>
                            <p class="text-slate-500 mt-1">// Output:</p>
                            <p class="text-emerald-600">2  (chỉ số 0-based của lần xuất hiện đầu tiên)</p>
                        </div>
                        <p class="mt-2 text-xs text-slate-500 italic">💡 Gợi ý: Dùng vòng lặp nhị phân, khi tìm thấy x hãy tiếp tục thu hẹp nửa bên trái thay vì dừng ngay.</p>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800">Bài 2: Sắp xếp danh sách học sinh</p>
                        <p class="mt-1 text-slate-600">Nhập danh sách $N$ học sinh (họ tên và điểm số thực). Sắp xếp theo <strong>điểm giảm dần</strong>; nếu bằng điểm thì sắp xếp theo <strong>tên tăng dần (thứ tự từ điển)</strong>.</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                            <p class="text-slate-500">// Input:</p>
                            <p>4</p>
                            <p>Minh 8.5</p>
                            <p>An 9.0</p>
                            <p>Linh 8.5</p>
                            <p>Hoa 7.0</p>
                            <p class="text-slate-500 mt-1">// Output:</p>
                            <p class="text-emerald-600">An 9.0</p>
                            <p class="text-emerald-600">Linh 8.5</p>
                            <p class="text-emerald-600">Minh 8.5</p>
                            <p class="text-emerald-600">Hoa 7.0</p>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800">Bài 3: Counting Sort quy mô lớn</p>
                        <p class="mt-1 text-slate-600">Sử dụng <strong>Counting Sort</strong> để sắp xếp mảng $10^6$ số nguyên có giá trị từ $0$ đến $1000$. So sánh thời gian chạy với <code class="bg-slate-100 px-1 rounded font-mono">std::sort</code>.</p>
                        <p class="mt-2 text-xs text-slate-500 italic">💡 Gợi ý: Khai báo mảng đếm <code class="bg-slate-100 px-1 rounded font-mono">cnt[1001]</code>, duyệt đếm tần suất, rồi dựng lại mảng kết quả.</p>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800">Bài 4: Khoảng cách nhỏ nhất</p>
                        <p class="mt-1 text-slate-600">Cho mảng $A$ gồm $N$ phần tử. Tìm <strong>khoảng cách nhỏ nhất</strong> giữa hai phần tử bất kỳ: $\min_{i \neq j} |A[i] - A[j]|$.</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                            <p class="text-slate-500">// Input: A = [4, 1, 9, 3, 7]</p>
                            <p class="text-emerald-600">// Output: 1  (|4-3| hoặc |4-3|)</p>
                        </div>
                        <p class="mt-2 text-xs text-slate-500 italic">💡 Gợi ý: Sắp xếp mảng trước, khoảng cách nhỏ nhất chắc chắn nằm giữa hai phần tử liền kề.</p>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800">Bài 5: Trộn hai mảng đã sắp xếp</p>
                        <p class="mt-1 text-slate-600">Cho hai mảng $A$ (kích thước $N$) và $B$ (kích thước $M$) đã sắp xếp tăng dần. Trộn chúng thành mảng $C$ cũng tăng dần trong $O(N+M)$ (không dùng <code class="bg-slate-100 px-1 rounded font-mono">sort</code>).</p>
                    </div>

                    <p class="font-bold text-slate-600 uppercase text-xs tracking-widest mt-6">🏆 Đấu trường (Nâng cao)</p>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 6: Sắp xếp thời gian</p>
                        <p class="mt-1 text-indigo-800">Cho danh sách $N$ mốc thời gian dạng <code class="bg-indigo-100 px-1 rounded font-mono">HH:MM:SS</code>. Sắp xếp theo thứ tự thời gian <strong>tăng dần</strong>.</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-indigo-200 space-y-1">
                            <p class="text-slate-500">// Input: ["12:05:30", "08:00:00", "12:05:10", "23:59:59"]</p>
                            <p class="text-indigo-600">// Output: ["08:00:00", "12:05:10", "12:05:30", "23:59:59"]</p>
                        </div>
                        <p class="mt-2 text-xs text-indigo-600 italic">💡 Gợi ý: Dùng struct chứa (giờ, phút, giây) và viết Comparator tùy chỉnh.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 7: Tìm cặp số có tổng bằng S</p>
                        <p class="mt-1 text-indigo-800">Cho mảng $A$ và số $S$. Tìm cặp chỉ số $(i, j)$ với $i \neq j$ sao cho $A[i] + A[j] = S$ trong $O(N \log N)$.</p>
                        <p class="mt-2 text-xs text-indigo-600 italic">💡 Gợi ý: Sắp xếp mảng (lưu lại chỉ số gốc). Dùng hai con trỏ hoặc Binary Search để tìm phần tử $S - A[i]$.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 8: Phần tử trung vị trực tuyến</p>
                        <p class="mt-1 text-indigo-800">Nhập một dãy số. Sau mỗi lần nhập một số mới, hãy in ra <strong>số trung vị (median)</strong> của dãy hiện tại.</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-indigo-200 space-y-1">
                            <p class="text-slate-500">// Input: lần lượt nhập 5 → 2 → 8 → 1</p>
                            <p class="text-indigo-600">// Output: 5 → 3.5 → 5 → 3.5</p>
                        </div>
                        <p class="mt-2 text-xs text-indigo-600 italic">💡 Gợi ý: Dùng 2 priority_queue: max-heap lưu nửa dưới, min-heap lưu nửa trên. Cân bằng kích thước sau mỗi lần chèn.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 9: Rời rạc hóa (Coordinate Compression) ⭐</p>
                        <p class="mt-1 text-indigo-800">Cho mảng $A$ có $N$ phần tử giá trị đến $10^9$. Thay mỗi phần tử bằng <strong>thứ hạng</strong> của nó (từ $1$ đến $N$, không có thứ hạng trùng).</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-indigo-200 space-y-1">
                            <p class="text-slate-500">// Input:  A = [500000000, 1, 999999999, 42]</p>
                            <p class="text-indigo-600">// Output: A = [3, 1, 4, 2]</p>
                        </div>
                        <p class="mt-2 text-xs text-indigo-600 italic">💡 Gợi ý: Tạo bản sao đã sort + unique, dùng lower_bound để tìm thứ hạng. Đây là kỹ thuật nền tảng khi dùng BIT/Segment Tree trên giá trị lớn.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 10: Sắp xếp theo góc cực</p>
                        <p class="mt-1 text-indigo-800">Cho $N$ điểm trên mặt phẳng. Sắp xếp chúng theo <strong>góc cực (polar angle)</strong> đối với gốc tọa độ $(0,0)$ theo chiều ngược kim đồng hồ.</p>
                        <p class="mt-2 text-xs text-indigo-600 italic">💡 Gợi ý: Dùng tích có hướng (cross product): $a \times b = a.x \cdot b.y - a.y \cdot b.x$. Nếu tích dương thì $a$ có góc nhỏ hơn $b$.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 11: Gộp đoạn (Merge Intervals)</p>
                        <p class="mt-1 text-indigo-800">Cho $N$ khoảng $[L_i, R_i]$. Hợp nhất các khoảng có phần giao nhau và in ra danh sách các khoảng sau khi gộp.</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-indigo-200 space-y-1">
                            <p class="text-slate-500">// Input: [1,3], [2,6], [8,10], [9,15]</p>
                            <p class="text-indigo-600">// Output: [1,6], [8,15]</p>
                        </div>
                        <p class="mt-2 text-xs text-indigo-600 italic">💡 Gợi ý: Sắp xếp theo $L_i$ trước, rồi duyệt tuyến tính để gộp các khoảng liên tiếp có giao nhau.</p>
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
                <div class="p-6 pt-4 border-t border-slate-100 space-y-4 text-sm text-slate-700">
                    <p class="text-sm text-slate-500 italic">🎬 Video bài giảng đang được chuẩn bị, sẽ cập nhật sớm.</p>
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                        <p class="font-bold text-slate-800">🔍 Từ khóa tìm kiếm:</p>
                        <ul class="list-disc list-inside space-y-1 pl-2 text-slate-600">
                            <li><code class="bg-slate-100 px-1 rounded font-mono">Custom comparator C++ sort</code></li>
                            <li><code class="bg-slate-100 px-1 rounded font-mono">Binary search variations lower_bound upper_bound</code></li>
                            <li><code class="bg-slate-100 px-1 rounded font-mono">Counting sort vs Radix sort</code></li>
                            <li><code class="bg-slate-100 px-1 rounded font-mono">Coordinate compression technique competitive programming</code></li>
                        </ul>
                    </div>
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800">📖 Tài liệu đọc thêm:</p>
                        <p class="mt-1 text-slate-600">Bài <strong>"Sorting"</strong> trên VNOI Wiki — đặc biệt phần về <em>tính ổn định (Stability)</em> của các thuật toán sắp xếp và ảnh hưởng của nó trong thực tế.</p>
                    </div>
                </div>
            </details>

        </div>
    `
},
     {
    title: "Bài 18: Danh Sách Liên Kết, Ngăn Xếp, Hàng Đợi (Cài Đặt Thủ Công)",
    videoId: "",
    desc: "Tự cài đặt Linked List, Stack và Queue bằng con trỏ trong C++ để nắm vững quản lý bộ nhớ động.",
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 leading-relaxed text-sm md:text-base space-y-4">
                    <div>
                        <p class="font-bold text-slate-800 mb-2">📚 Kiến thức:</p>
                        <ul class="list-disc list-inside space-y-1 pl-2">
                            <li>Hiểu cấu trúc của một <strong>Node</strong> và cách các Node kết nối với nhau qua địa chỉ bộ nhớ.</li>
                            <li>Phân biệt sự khác nhau giữa <strong>Array</strong> (bộ nhớ liên tiếp) và <strong>Linked List</strong> (bộ nhớ rời rạc).</li>
                            <li>Nắm vững cơ chế <strong>LIFO</strong> của Stack và <strong>FIFO</strong> của Queue.</li>
                        </ul>
                    </div>
                    <div>
                        <p class="font-bold text-slate-800 mb-2">🛠️ Kỹ năng:</p>
                        <ul class="list-disc list-inside space-y-1 pl-2">
                            <li>Tự cài đặt <strong>Danh sách liên kết đơn</strong> (Singly Linked List) từ đầu.</li>
                            <li>Xây dựng <strong>Stack</strong> và <strong>Queue</strong> bằng Linked List để có khả năng co giãn theo RAM.</li>
                            <li>Làm chủ cấp phát (<code class="bg-slate-100 px-1 rounded font-mono">new</code>) và giải phóng (<code class="bg-slate-100 px-1 rounded font-mono">delete</code>) bộ nhớ động, tránh <strong>Memory Leak</strong>.</li>
                        </ul>
                    </div>
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-6 text-sm md:text-base">

                    <div>
                        <p class="font-black text-slate-800 text-base mb-3">1. Danh sách liên kết (Linked List)</p>
                        <p class="text-slate-600 mb-3">Mỗi phần tử là một <strong>Node</strong> gồm hai phần:</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                            <div class="p-3 bg-blue-50 rounded-xl border border-blue-200 text-center">
                                <p class="font-bold text-blue-800">data</p>
                                <p class="text-blue-600 text-xs mt-1">Lưu trữ giá trị của phần tử</p>
                            </div>
                            <div class="p-3 bg-purple-50 rounded-xl border border-purple-200 text-center">
                                <p class="font-bold text-purple-800">next</p>
                                <p class="text-purple-600 text-xs mt-1">Con trỏ → địa chỉ Node tiếp theo</p>
                            </div>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm border-collapse rounded-xl overflow-hidden border border-slate-200">
                                <thead>
                                    <tr class="bg-slate-100 text-slate-700">
                                        <th class="p-3 text-left font-bold border-b border-slate-200">Thao tác</th>
                                        <th class="p-3 text-left font-bold border-b border-slate-200">Array</th>
                                        <th class="p-3 text-left font-bold border-b border-slate-200">Linked List</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-slate-100 hover:bg-slate-50">
                                        <td class="p-3">Truy cập phần tử thứ $i$</td>
                                        <td class="p-3 font-mono text-emerald-600">$O(1)$</td>
                                        <td class="p-3 font-mono text-orange-500">$O(N)$</td>
                                    </tr>
                                    <tr class="border-b border-slate-100 hover:bg-slate-50">
                                        <td class="p-3">Chèn / Xóa ở đầu</td>
                                        <td class="p-3 font-mono text-orange-500">$O(N)$</td>
                                        <td class="p-3 font-mono text-emerald-600">$O(1)$</td>
                                    </tr>
                                    <tr class="hover:bg-slate-50">
                                        <td class="p-3">Kích thước tối đa</td>
                                        <td class="p-3 text-orange-500">Cố định khi khai báo</td>
                                        <td class="p-3 text-emerald-600">Linh hoạt theo RAM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-3">2. Stack & Queue thủ công</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div class="p-4 bg-orange-50 rounded-xl border border-orange-200">
                                <p class="font-bold text-orange-800">📦 Stack — LIFO</p>
                                <p class="text-orange-700 text-xs mt-1 mb-2">(Last In — First Out)</p>
                                <ul class="text-orange-700 text-xs space-y-1 list-disc list-inside">
                                    <li>Chèn và xóa <strong>đều ở đầu</strong> danh sách</li>
                                    <li>Quản lý 1 con trỏ: <code class="bg-orange-100 px-1 rounded font-mono">topNode</code></li>
                                    <li>Ứng dụng: duyệt DFS, kiểm tra ngoặc, undo/redo</li>
                                </ul>
                            </div>
                            <div class="p-4 bg-teal-50 rounded-xl border border-teal-200">
                                <p class="font-bold text-teal-800">🚶 Queue — FIFO</p>
                                <p class="text-teal-700 text-xs mt-1 mb-2">(First In — First Out)</p>
                                <ul class="text-teal-700 text-xs space-y-1 list-disc list-inside">
                                    <li>Thêm ở <strong>cuối</strong>, lấy ra ở <strong>đầu</strong></li>
                                    <li>Quản lý 2 con trỏ: <code class="bg-teal-100 px-1 rounded font-mono">head</code> và <code class="bg-teal-100 px-1 rounded font-mono">tail</code></li>
                                    <li>Ứng dụng: duyệt BFS, xử lý tác vụ theo thứ tự</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-3">3. Code minh họa: Cài đặt Stack bằng Linked List</p>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed">#include &lt;iostream&gt;
using namespace std;

// Định nghĩa một Node
struct Node {
    int data;
    Node* next;
};

// Cấu trúc Stack
struct MyStack {
    Node* topNode = nullptr;

    // Push: Thêm vào đỉnh
    void push(int x) {
        Node* newNode = new Node();
        newNode-&gt;data = x;
        newNode-&gt;next = topNode;
        topNode = newNode;
    }

    // Pop: Xóa khỏi đỉnh
    void pop() {
        if (topNode == nullptr) return;
        Node* temp = topNode;
        topNode = topNode-&gt;next;
        delete temp; // ⚠️ Bắt buộc giải phóng bộ nhớ!
    }

    int top() {
        if (topNode != nullptr) return topNode-&gt;data;
        return -1;
    }

    bool empty() {
        return topNode == nullptr;
    }
};

int main() {
    MyStack s;
    s.push(10); s.push(20); s.push(30);

    while (!s.empty()) {
        cout &lt;&lt; s.top() &lt;&lt; " ";
        s.pop();
    }
    // Kết quả: 30 20 10
    return 0;
}</pre>
                        <div class="mt-3 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                            <p class="font-bold text-red-800">⚠️ Memory Leak là gì?</p>
                            <p class="text-red-700 mt-1">Khi dùng <code class="bg-red-100 px-1 rounded font-mono">new</code> để cấp phát Node mà <strong>không bao giờ</strong> gọi <code class="bg-red-100 px-1 rounded font-mono">delete</code>, vùng nhớ đó bị "mất" — chương trình giữ RAM mãi mà không dùng. Trong vòng lặp triệu lần, điều này gây crash ứng dụng.</p>
                        </div>
                        <div class="mt-3 p-4 bg-emerald-50 rounded-xl border-l-4 border-emerald-500">
                            <p class="font-bold text-emerald-800">✅ Quy tắc vàng</p>
                            <p class="text-emerald-700 mt-1">Mỗi lần <code class="bg-emerald-100 px-1 rounded font-mono">new Node()</code> phải có đúng <strong>một lần</strong> <code class="bg-emerald-100 px-1 rounded font-mono">delete</code> tương ứng. Khi hủy toàn bộ cấu trúc, hãy giải phóng từng Node một trong vòng lặp.</p>
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
                <div class="p-6 pt-4 border-t border-slate-100 text-slate-700 space-y-4">

                    <p class="font-bold text-slate-600 uppercase text-xs tracking-widest">⚡ Cơ bản</p>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800">Bài 1: Danh sách liên kết đơn cơ bản</p>
                        <p class="mt-1 text-slate-600">Tự cài đặt Danh sách liên kết đơn với đầy đủ 3 hàm: <code class="bg-slate-100 px-1 rounded font-mono">insertHead</code> (chèn đầu), <code class="bg-slate-100 px-1 rounded font-mono">insertTail</code> (chèn cuối), <code class="bg-slate-100 px-1 rounded font-mono">deleteHead</code> (xóa đầu). In ra danh sách sau mỗi thao tác.</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                            <p class="text-slate-500">// Thao tác: insertHead(3) → insertHead(1) → insertTail(5) → deleteHead()</p>
                            <p class="text-emerald-600">// Danh sách cuối: 3 → 5 → NULL</p>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800">Bài 2: Queue thủ công bằng Linked List</p>
                        <p class="mt-1 text-slate-600">Xây dựng <strong>Hàng đợi (Queue)</strong> thủ công với các hàm: <code class="bg-slate-100 px-1 rounded font-mono">push</code> (thêm vào cuối), <code class="bg-slate-100 px-1 rounded font-mono">pop</code> (xóa đầu), <code class="bg-slate-100 px-1 rounded font-mono">front</code> (xem đầu), <code class="bg-slate-100 px-1 rounded font-mono">empty</code>. Quản lý hai con trỏ <code class="bg-slate-100 px-1 rounded font-mono">head</code> và <code class="bg-slate-100 px-1 rounded font-mono">tail</code>.</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                            <p class="text-slate-500">// push(1) push(2) push(3) → pop() → front()</p>
                            <p class="text-emerald-600">// front() = 2  (vì 1 đã bị pop)</p>
                        </div>
                        <p class="mt-2 text-xs text-slate-500 italic">⚠️ Chú ý: Khi pop Node cuối cùng, hãy đặt cả head và tail về nullptr.</p>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800">Bài 3: Đếm số phần tử</p>
                        <p class="mt-1 text-slate-600">Viết hàm <code class="bg-slate-100 px-1 rounded font-mono">int countNodes(Node* head)</code> đếm số lượng Node trong Danh sách liên kết bằng cách duyệt từ đầu đến khi gặp <code class="bg-slate-100 px-1 rounded font-mono">nullptr</code>.</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                            <p class="text-slate-500">// Danh sách: 5 → 12 → 3 → 8 → NULL</p>
                            <p class="text-emerald-600">// countNodes() = 4</p>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800">Bài 4: Tìm kiếm trong danh sách</p>
                        <p class="mt-1 text-slate-600">Viết hàm <code class="bg-slate-100 px-1 rounded font-mono">Node* search(Node* head, int x)</code> tìm kiếm giá trị $x$. Trả về con trỏ tới Node chứa $x$, hoặc <code class="bg-slate-100 px-1 rounded font-mono">nullptr</code> nếu không tìm thấy.</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                            <p class="text-slate-500">// Danh sách: 5 → 12 → 3 → 8 → NULL, tìm x = 3</p>
                            <p class="text-emerald-600">// Trả về con trỏ tới Node có data = 3</p>
                            <p class="text-slate-500">// Tìm x = 99 → trả về nullptr</p>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800">Bài 5: Giải phóng toàn bộ danh sách</p>
                        <p class="mt-1 text-slate-600">Viết hàm <code class="bg-slate-100 px-1 rounded font-mono">void freeList(Node*& head)</code> giải phóng <strong>toàn bộ</strong> các Node trong danh sách và đặt lại <code class="bg-slate-100 px-1 rounded font-mono">head = nullptr</code>. Dùng Valgrind hoặc AddressSanitizer để xác nhận không còn Memory Leak.</p>
                        <p class="mt-2 text-xs text-slate-500 italic">💡 Gợi ý: Lưu con trỏ <code class="bg-slate-100 px-1 rounded font-mono">next</code> vào biến tạm trước khi <code class="bg-slate-100 px-1 rounded font-mono">delete</code> Node hiện tại.</p>
                    </div>

                    <p class="font-bold text-slate-600 uppercase text-xs tracking-widest mt-6">🏆 Đấu trường (Nâng cao)</p>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 6: Danh sách liên kết đôi (Doubly Linked List)</p>
                        <p class="mt-1 text-indigo-800">Mỗi Node có thêm con trỏ <code class="bg-indigo-100 px-1 rounded font-mono">prev</code> trỏ ngược về phía trước. Cài đặt hàm <strong>xóa Node tại vị trí thứ $k$</strong> (0-indexed) trong $O(N)$.</p>
                        <p class="mt-2 text-xs text-indigo-600 italic">💡 Gợi ý: Khi xóa Node giữa: <code class="bg-indigo-100 px-1 rounded font-mono">prev->next = cur->next</code> và <code class="bg-indigo-100 px-1 rounded font-mono">cur->next->prev = prev</code>. Xử lý riêng trường hợp xóa đầu/cuối.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 7: Đảo ngược danh sách liên kết</p>
                        <p class="mt-1 text-indigo-800">Viết hàm đảo ngược Danh sách liên kết đơn <strong>tại chỗ</strong> — chỉ thay đổi hướng các con trỏ <code class="bg-indigo-100 px-1 rounded font-mono">next</code>, không dùng mảng phụ, độ phức tạp $O(N)$.</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-indigo-200 space-y-1">
                            <p class="text-slate-500">// Input:  1 → 2 → 3 → 4 → 5 → NULL</p>
                            <p class="text-indigo-600">// Output: 5 → 4 → 3 → 2 → 1 → NULL</p>
                        </div>
                        <p class="mt-2 text-xs text-indigo-600 italic">💡 Gợi ý: Dùng 3 con trỏ: <code class="bg-indigo-100 px-1 rounded font-mono">prev</code>, <code class="bg-indigo-100 px-1 rounded font-mono">curr</code>, <code class="bg-indigo-100 px-1 rounded font-mono">nextNode</code>. Duyệt một lần và lật hướng từng mũi tên.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 8: Kiểm tra vòng — Floyd's Tortoise & Hare ⭐</p>
                        <p class="mt-1 text-indigo-800">Cho một danh sách liên kết, kiểm tra xem nó có bị <strong>"vòng"</strong> (Node cuối trỏ ngược lại một Node phía trước) hay không.</p>
                        <p class="mt-2 text-xs text-indigo-600 italic">💡 Gợi ý: Dùng hai con trỏ chạy với tốc độ khác nhau — <strong>slow</strong> (mỗi bước 1 Node) và <strong>fast</strong> (mỗi bước 2 Node). Nếu chúng gặp nhau thì có vòng.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 9: Cài đặt Deque (Double-ended Queue)</p>
                        <p class="mt-1 text-indigo-800">Xây dựng hàng đợi hai đầu (<strong>Deque</strong>) bằng Danh sách liên kết đôi với 4 hàm: <code class="bg-indigo-100 px-1 rounded font-mono">pushFront</code>, <code class="bg-indigo-100 px-1 rounded font-mono">pushBack</code>, <code class="bg-indigo-100 px-1 rounded font-mono">popFront</code>, <code class="bg-indigo-100 px-1 rounded font-mono">popBack</code> — tất cả đều $O(1)$.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 10: Trộn hai danh sách đã sắp xếp</p>
                        <p class="mt-1 text-indigo-800">Cho hai Danh sách liên kết đơn đã sắp xếp tăng dần. Trộn chúng thành <strong>một danh sách duy nhất</strong> cũng tăng dần mà <strong>không tạo thêm Node mới</strong> — chỉ thay đổi các liên kết.</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-indigo-200 space-y-1">
                            <p class="text-slate-500">// A: 1 → 3 → 5 → NULL</p>
                            <p class="text-slate-500">// B: 2 → 4 → 6 → NULL</p>
                            <p class="text-indigo-600">// Kết quả: 1 → 2 → 3 → 4 → 5 → 6 → NULL</p>
                        </div>
                        <p class="mt-2 text-xs text-indigo-600 italic">💡 Gợi ý: Dùng một Node giả (<code class="bg-indigo-100 px-1 rounded font-mono">dummy</code>) làm đầu tạm thời. So sánh hai đầu và nối Node nhỏ hơn vào kết quả, tiến con trỏ tương ứng.</p>
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
                <div class="p-6 pt-4 border-t border-slate-100 space-y-4 text-sm text-slate-700">
                    <p class="text-sm text-slate-500 italic">🎬 Video bài giảng đang được chuẩn bị, sẽ cập nhật sớm.</p>
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                        <p class="font-bold text-slate-800">🔍 Từ khóa tìm kiếm:</p>
                        <ul class="list-disc list-inside space-y-1 pl-2 text-slate-600">
                            <li><code class="bg-slate-100 px-1 rounded font-mono">Singly Linked List implementation C++</code></li>
                            <li><code class="bg-slate-100 px-1 rounded font-mono">Stack using Linked List pointers C++</code></li>
                            <li><code class="bg-slate-100 px-1 rounded font-mono">Memory management new delete C++</code></li>
                            <li><code class="bg-slate-100 px-1 rounded font-mono">Floyd cycle detection algorithm</code></li>
                        </ul>
                    </div>
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800">📖 Tài liệu đọc thêm:</p>
                        <p class="mt-1 text-slate-600">Bài <strong>"Linked List"</strong> trên <em>GeeksforGeeks</em> hoặc <em>LearnCpp.com</em> — đặc biệt phần về smart pointer (<code class="bg-slate-100 px-1 rounded font-mono">unique_ptr</code>) để tự động quản lý bộ nhớ trong C++ hiện đại.</p>
                    </div>
                </div>
            </details>

        </div>
    `
},
            { 
                title: "Cây nhị phân & Cây AVL", 
                videoId: "", 
                desc: "Quản lý dữ liệu phân cấp và đảm bảo tốc độ tìm kiếm tối ưu ($O(\\log N)$).", 
                downloadUrl: "#" 
            }
        ]
    }
];
