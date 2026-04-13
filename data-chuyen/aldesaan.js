// File dữ liệu chi tiết cho khóa học Phân tích thiết kế và Giải thuật
window.courseContent = [
    {
        chapterName: "Chuyên đề: Phân tích thiết kế và Giải thuật",
        lessons: [
            {
    title: "Bài 13: Chiến Lược Chia Để Trị (Divide and Conquer)",
    videoId: "",
    desc: "Nắm vững 3 bước Chia–Trị–Kết hợp, làm chủ Binary Search, Merge Sort và Binary Exponentiation để giải quyết các bài toán thi đấu với độ phức tạp tối ưu.",
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
                        <li>Hiểu rõ 3 bước của chiến lược Chia để trị: <strong>Divide</strong> (Chia), <strong>Conquer</strong> (Trị) và <strong>Combine</strong> (Kết hợp).</li>
                        <li>Phân biệt sự khác nhau giữa <strong>Chia để trị</strong> (các bài toán con độc lập) và <strong>Quy hoạch động</strong> (các bài toán con có chồng lấp).</li>
                        <li>Nắm công thức phân tích độ phức tạp bằng định lý Master Theorem.</li>
                    </ul>
                    <p class="font-semibold text-slate-800 mb-2">🛠️ Kỹ năng:</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Làm chủ <strong>Tìm kiếm nhị phân</strong> (Binary Search) trên mảng và trên tập kết quả.</li>
                        <li>Cài đặt được <strong>Merge Sort</strong> và hiểu tại sao nó đạt $O(N \log N)$.</li>
                        <li>Ứng dụng <strong>Binary Exponentiation</strong> để tính $a^b \mod m$ trong $O(\log b)$.</li>
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
                        <p class="font-black text-slate-800 text-base mb-2">1. Nguyên lý 3 bước</p>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div class="p-3 bg-blue-50 rounded-xl border border-blue-200 text-center">
                                <p class="font-black text-blue-700 text-lg mb-1">① CHIA</p>
                                <p class="text-blue-600 text-xs">Tách bài toán lớn thành $\ge 2$ bài toán con <strong>cùng dạng</strong>, kích thước nhỏ hơn.</p>
                            </div>
                            <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
                                <p class="font-black text-emerald-700 text-lg mb-1">② TRỊ</p>
                                <p class="text-emerald-600 text-xs">Giải đệ quy từng bài toán con. Nếu đủ nhỏ (base case), giải trực tiếp.</p>
                            </div>
                            <div class="p-3 bg-orange-50 rounded-xl border border-orange-200 text-center">
                                <p class="font-black text-orange-700 text-lg mb-1">③ KẾT HỢP</p>
                                <p class="text-orange-600 text-xs">Tổng hợp lời giải của các bài toán con thành lời giải bài toán gốc.</p>
                            </div>
                        </div>
                        <div class="p-4 bg-amber-50 rounded-xl border-l-4 border-amber-400 mt-3">
                            <p class="font-semibold text-amber-800">⚖️ Chia để trị vs Quy hoạch động:</p>
                            <p class="mt-1 text-amber-700 text-xs">Chia để trị: các bài toán con <strong>độc lập</strong> nhau (Merge Sort, Binary Search). Quy hoạch động: các bài toán con <strong>chồng lấp</strong> (cùng gọi đến bài toán con giống nhau nhiều lần).</p>
                        </div>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-1">2. Tìm kiếm nhị phân (Binary Search) — $O(\log N)$</p>
                        <p>Thay vì duyệt tuần tự $O(N)$, sau mỗi bước ta <strong>loại bỏ một nửa</strong> phạm vi tìm kiếm. Điều kiện bắt buộc: dãy đã <strong>sắp xếp</strong>.</p>
<pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto mt-2">// Tìm vị trí của target trong mảng đã sắp xếp
int binarySearch(vector&lt;int&gt;&amp; a, int target) {
    int lo = 0, hi = (int)a.size() - 1;
    while (lo &lt;= hi) {
        int mid = lo + (hi - lo) / 2; // Tránh tràn số
        if (a[mid] == target) return mid;
        else if (a[mid] &lt; target) lo = mid + 1; // Tìm bên phải
        else hi = mid - 1;                        // Tìm bên trái
    }
    return -1; // Không tìm thấy
}</pre>
                        <div class="p-3 bg-blue-50 rounded-xl border border-blue-200 mt-2 text-xs">
                            <span class="font-bold text-blue-700">💡 STL sẵn có:</span> <code>lower_bound(a.begin(), a.end(), x)</code> trả về iterator đến phần tử <strong>đầu tiên ≥ x</strong>. <code>upper_bound</code> trả về phần tử <strong>đầu tiên &gt; x</strong>.
                        </div>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-1">3. Sắp xếp trộn (Merge Sort) — $O(N \log N)$</p>
                        <p>Chia mảng làm đôi → đệ quy sắp xếp từng nửa → <strong>trộn</strong> hai nửa đã sắp xếp thành mảng hoàn chỉnh. Bước trộn là bước "Kết hợp" mất $O(N)$, với $\log N$ tầng đệ quy → tổng $O(N \log N)$.</p>
<pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto mt-2">void merge(vector&lt;int&gt;&amp; a, int l, int m, int r) {
    vector&lt;int&gt; tmp;
    int i = l, j = m + 1;
    while (i &lt;= m &amp;&amp; j &lt;= r)
        tmp.push_back(a[i] &lt;= a[j] ? a[i++] : a[j++]);
    while (i &lt;= m) tmp.push_back(a[i++]);
    while (j &lt;= r) tmp.push_back(a[j++]);
    for (int k = l; k &lt;= r; ++k) a[k] = tmp[k - l];
}

void mergeSort(vector&lt;int&gt;&amp; a, int l, int r) {
    if (l &gt;= r) return;        // Base case
    int m = (l + r) / 2;
    mergeSort(a, l, m);        // Trị nửa trái
    mergeSort(a, m + 1, r);    // Trị nửa phải
    merge(a, l, m, r);         // Kết hợp
}</pre>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-1">4. Lũy thừa nhị phân (Binary Exponentiation) — $O(\log b)$</p>
                        <p>Tính $a^b \mod m$ hiệu quả dựa trên: $a^b = (a^{b/2})^2$ nếu $b$ chẵn, $a^b = a \times (a^{b/2})^2$ nếu $b$ lẻ. Đây là hàm xuất hiện trong hầu hết mọi bài thi có liên quan đến số học modular.</p>
<pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto mt-2">#include &lt;iostream&gt;
using namespace std;

long long power(long long a, long long b, long long mod) {
    if (b == 0) return 1;                       // Base case: a^0 = 1
    long long x = power(a, b / 2, mod);         // Chia: tính a^(b/2)
    x = (x * x) % mod;                          // Kết hợp: bình phương
    if (b % 2 == 1) x = (x * a) % mod;         // Nếu b lẻ: nhân thêm a
    return x;
}

int main() {
    long long a, b, m = 1e9 + 7;
    cin &gt;&gt; a &gt;&gt; b;
    cout &lt;&lt; power(a, b, m) &lt;&lt; "\n";
    // power(2, 10, 1e9+7) = 1024
}</pre>
                        <div class="p-4 bg-red-50 rounded-xl border-l-4 border-red-500 mt-3">
                            <p class="font-semibold text-red-700">⚠️ Cẩn thận tràn số:</p>
                            <p class="mt-1 text-red-600 text-xs">Khi tính <code>(x * x) % mod</code> với <code>x</code> có thể lên đến $10^9$, tích <code>x * x</code> lên đến $10^{18}$ — vừa đủ trong <code>long long</code>. Nhưng nếu <code>mod &gt; 10^9</code>, cần dùng <code>__int128</code> hoặc nhân modular bằng kỹ thuật binary multiplication.</p>
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
                        <p class="font-semibold">Bài 1: Binary Search — vòng lặp và đệ quy</p>
                        <p class="mt-1 text-slate-600">Cài đặt hàm tìm kiếm nhị phân bằng <strong>hai cách</strong>: dùng vòng lặp <code>while</code> và dùng đệ quy. Cả hai trả về chỉ số của phần tử trong mảng đã sắp xếp, hoặc <code>-1</code> nếu không tìm thấy.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// a={1,3,5,7,9,11}, target=7 → </span>index 3<br>
                            <span class="text-slate-400">// target=4 → </span>-1
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 2: Merge Sort</p>
                        <p class="mt-1 text-slate-600">Viết hàm <code>mergeSort</code> hoàn chỉnh để sắp xếp mảng $N$ số nguyên tăng dần. In mảng trước và sau khi sắp xếp. Kiểm tra với mảng đã đảo ngược, mảng có phần tử trùng nhau.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// Input:</span> {5, 2, 8, 1, 9, 3}<br>
                            <span class="text-slate-400">// Output:</span> 1 2 3 5 8 9
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 3: Tính tổng mảng bằng Chia để trị</p>
                        <p class="mt-1 text-slate-600">Viết hàm <code>long long sumDC(int arr[], int l, int r)</code>: nếu <code>l == r</code> trả về <code>arr[l]</code>, ngược lại chia đôi và cộng kết quả hai nửa. Minh họa nguyên lý Kết hợp.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// {1,2,3,4,5} → 15</span>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 4: Tìm min và max bằng Chia để trị</p>
                        <p class="mt-1 text-slate-600">Viết hàm <code>pair&lt;int,int&gt; minmax(int arr[], int l, int r)</code> trả về cặp (min, max) bằng cách chia đôi mảng. Số lượng phép so sánh tối thiểu hơn so với cách duyệt thông thường.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// {3,1,9,2,7} → min=1, max=9</span>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 5: lower_bound và upper_bound trong STL</p>
                        <p class="mt-1 text-slate-600">Cho mảng đã sắp xếp có thể có phần tử trùng. Dùng <code>lower_bound</code> và <code>upper_bound</code> để tìm: (1) vị trí xuất hiện đầu tiên, (2) vị trí xuất hiện cuối cùng, (3) số lần xuất hiện của một giá trị $x$.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// a={1,2,2,2,3,4}, x=2</span><br>
                            <span class="text-slate-400">// Output:</span> Dau: 1, Cuoi: 3, So lan: 3
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 6: Fibonacci bằng nhân ma trận</p>
                        <p class="mt-1 text-slate-600">Tính số Fibonacci thứ $n$ ($n \le 10^{18}$) bằng kỹ thuật lũy thừa ma trận $2 \times 2$ chia để trị, đạt độ phức tạp $O(\log n)$. Kết quả in ra modulo $10^9 + 7$.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// fibo(10) = 55 | fibo(50) mod (1e9+7) = 586268941</span>
                        </div>
                    </div>

                    <p class="font-black text-indigo-700 uppercase text-xs tracking-widest mt-6">🏆 Đấu trường — Nâng cao</p>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 7: Đếm nghịch thế (Inversion Count)</p>
                        <p class="mt-1 text-indigo-700">Cho mảng $A$. Cặp $(i, j)$ là <strong>nghịch thế</strong> nếu $i &lt; j$ và $A[i] > A[j]$. Dùng tư duy Merge Sort: trong bước trộn, khi chọn phần tử từ nửa phải trước nửa trái, cộng thêm số phần tử còn lại của nửa trái vào bộ đếm. Độ phức tạp $O(N \log N)$.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-200">
                            <span class="text-slate-400">// {2, 4, 1, 3, 5} → 3 cap nghich the: (2,1),(4,1),(4,3)</span>
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 8: Chặt nhị phân trên tập kết quả</p>
                        <p class="mt-1 text-indigo-700">Cho $N$ thanh gỗ có độ dài khác nhau. Cần cắt thành $K$ đoạn có cùng độ dài $L$. Tìm $L$ <strong>lớn nhất</strong> có thể. Dùng Binary Search trên khoảng $[1, \max(a)]$: hàm kiểm tra <code>canCut(L)</code> tính tổng số đoạn cắt được.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-200">
                            <span class="text-slate-400">// N=4, K=11, a={8,15,11,6} → L=4</span>
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 9: Cặp điểm gần nhất</p>
                        <p class="mt-1 text-indigo-700">Cho $N$ điểm trên mặt phẳng. Tìm khoảng cách nhỏ nhất giữa hai điểm bất kỳ. Chia theo tọa độ $x$ → đệ quy hai nửa → xét các cặp điểm nằm gần đường phân chia. Độ phức tạp $O(N \log N)$.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-200">
                            <span class="text-slate-400">// {(0,0),(3,4),(1,1),(5,2)} → khoang cach min = sqrt(2)</span>
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 10: Maximum Subarray Sum (Chia để trị)</p>
                        <p class="mt-1 text-indigo-700">Tìm dãy con liên tiếp có tổng lớn nhất bằng Chia để trị. Lời giải nằm trong một trong 3 trường hợp: hoàn toàn bên trái, hoàn toàn bên phải, hoặc <strong>băng qua điểm giữa</strong>. Xử lý trường hợp thứ 3 bằng cách mở rộng từ giữa ra hai phía.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-200">
                            <span class="text-slate-400">// {-2,1,-3,4,-1,2,1,-5,4} → 6 (day {4,-1,2,1})</span>
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 11: Phần tử thứ K (Quick Select)</p>
                        <p class="mt-1 text-indigo-700">Tìm phần tử nhỏ thứ $K$ trong mảng chưa sắp xếp. Dùng tư duy Quick Sort: chọn pivot, phân hoạch mảng → nếu pivot ở đúng vị trí $K$ thì xong, nếu không thì chỉ đệ quy vào một nửa. Độ phức tạp trung bình $O(N)$.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-200">
                            <span class="text-slate-400">// a={7,2,5,1,9,3}, K=3 → phan tu thu 3 nho nhat = 3</span>
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
                            <li><code>Divide and Conquer algorithms explained</code></li>
                            <li><code>Binary Search on Answer competitive programming</code></li>
                            <li><code>Merge Sort inversion count algorithm</code></li>
                            <li><code>Binary exponentiation modular arithmetic C++</code></li>
                            <li><code>Quick Select kth smallest element</code></li>
                        </ul>
                    </div>
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold text-slate-700 mb-1">📄 Tài liệu tham khảo:</p>
                        <p class="text-slate-600">Đọc mục <strong>Chặt nhị phân</strong> trên <a href="https://wiki.vnoi.info/algo/basic/binary-search" target="_blank" class="text-blue-600 hover:underline">VNOI Wiki</a> và phần <strong>Divide and Conquer</strong> trên <a href="https://www.geeksforgeeks.org/divide-and-conquer/" target="_blank" class="text-blue-600 hover:underline">GeeksforGeeks</a>.</p>
                    </div>
                </div>
            </details>

        </div>
    `
},
           {
    title: "Bài 14: Đệ Quy Quay Lui Nâng Cao - Kỹ Thuật Nhánh Cận (Pruning)",
    videoId: "",
    desc: "Nắm vững 3 loại nhánh cận để cắt tỉa không gian trạng thái, áp dụng đánh giá cận tối ưu và khả thi để giải các bài toán NP-Hard với kích thước dữ liệu vừa phải.",
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
                        <li>Hiểu rõ cơ chế <strong>duyệt cây không gian trạng thái</strong> (State Space Tree) — nền tảng của mọi thuật toán quay lui.</li>
                        <li>Nắm vững 3 loại nhánh cận: <strong>Tối ưu</strong> (Optimality), <strong>Khả thi</strong> (Feasibility) và <strong>Đối xứng</strong> (Symmetry).</li>
                        <li>Hiểu vai trò của việc sắp xếp dữ liệu đầu vào để tăng hiệu quả cắt tỉa.</li>
                    </ul>
                    <p class="font-semibold text-slate-800 mb-2">🛠️ Kỹ năng:</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Đánh giá <strong>cận</strong> (bound) của lời giải để ngắt nhánh sớm nhất có thể.</li>
                        <li>Dùng mảng đánh dấu và mảng tích lũy để tăng tốc kiểm tra điều kiện trong $O(1)$.</li>
                        <li>Giải quyết các bài toán NP-Hard với $N \approx 20$–$30$ trong thời gian chấp nhận được.</li>
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
                        <p class="font-black text-slate-800 text-base mb-2">1. Cây không gian trạng thái (State Space Tree)</p>
                        <p>Mọi thuật toán quay lui đều duyệt một <strong>cây ảo</strong>: gốc là trạng thái ban đầu, mỗi cạnh là một lựa chọn, mỗi lá là một lời giải đầy đủ. Quay lui = duyệt DFS cây này. <strong>Nhánh cận = cắt bỏ sớm một nhánh</strong> khi chắc chắn nó không chứa lời giải tốt.</p>
                        <div class="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-400 mt-2">
                            <p class="font-semibold text-blue-800">💡 Tác động của nhánh cận:</p>
                            <p class="mt-1 text-blue-700 text-xs">Quay lui thuần túy có thể duyệt $N!$ hoặc $2^N$ trạng thái. Nhánh cận tốt có thể giảm xuống chỉ còn vài phần trăm, biến bài toán từ <strong>không thể</strong> chạy thành <strong>chạy được trong vài giây</strong>.</p>
                        </div>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-2">2. Ba loại nhánh cận chính</p>
                        <div class="space-y-3">
                            <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                                <p class="font-bold text-emerald-800">① Nhánh cận Tối ưu (Optimality Pruning)</p>
                                <p class="mt-1 text-emerald-700 text-xs">Duy trì biến <code>best_ans</code>. Tại bước $i$: nếu <code>chi_phi_hien_tai + uoc_luong_con_lai &ge; best_ans</code> → dừng ngay. Ước lượng càng chặt (sát thực tế) thì cắt được càng nhiều nhánh.</p>
                            </div>
                            <div class="p-4 bg-orange-50 rounded-xl border border-orange-200">
                                <p class="font-bold text-orange-800">② Nhánh cận Khả thi (Feasibility Pruning)</p>
                                <p class="mt-1 text-orange-700 text-xs">Dừng khi trạng thái hiện tại <strong>không thể dẫn tới lời giải hợp lệ</strong>. Ví dụ: tổng hiện tại đã vượt $S$ (với số dương) → mọi lựa chọn tiếp theo đều vô dụng.</p>
                            </div>
                            <div class="p-4 bg-purple-50 rounded-xl border border-purple-200">
                                <p class="font-bold text-purple-800">③ Nhánh cận Đối xứng (Symmetry Pruning)</p>
                                <p class="mt-1 text-purple-700 text-xs">Loại bỏ các lời giải <strong>bản chất giống nhau</strong>. Ví dụ: khi liệt kê tổ hợp, chỉ cho phép chọn phần tử có chỉ số lớn hơn phần tử vừa chọn để tránh đếm trùng.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-1">3. Sắp xếp dữ liệu đầu vào — chiến lược tăng tốc ngầm</p>
                        <p>Thứ tự duyệt quyết định <strong>bao lâu thì tìm ra <code>best_ans</code> đầu tiên</strong>. Nếu tìm ra lời giải tốt sớm → <code>best_ans</code> nhỏ → cắt được nhiều nhánh sau.</p>
                        <div class="overflow-x-auto mt-2">
                            <table class="w-full text-xs border-collapse">
                                <thead><tr class="bg-slate-100"><th class="border border-slate-200 px-3 py-2 text-left font-bold">Bài toán</th><th class="border border-slate-200 px-3 py-2 text-left font-bold">Nên sắp xếp</th><th class="border border-slate-200 px-3 py-2 text-left font-bold">Lý do</th></tr></thead>
                                <tbody>
                                    <tr><td class="border border-slate-200 px-3 py-1.5">Tổng tập con = S</td><td class="border border-slate-200 px-3 py-1.5">Giảm dần</td><td class="border border-slate-200 px-3 py-1.5">Vượt S sớm hơn → cắt sớm hơn</td></tr>
                                    <tr class="bg-slate-50"><td class="border border-slate-200 px-3 py-1.5">Cái túi (Knapsack)</td><td class="border border-slate-200 px-3 py-1.5">Đơn giá giảm dần</td><td class="border border-slate-200 px-3 py-1.5">Cận trên tốt hơn ngay từ đầu</td></tr>
                                    <tr><td class="border border-slate-200 px-3 py-1.5">TSP</td><td class="border border-slate-200 px-3 py-1.5">Cạnh ngắn trước</td><td class="border border-slate-200 px-3 py-1.5">Tìm hành trình ngắn sớm hơn</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-2">4. Code minh họa: Bài toán Người giao hàng — TSP (C++)</p>
<pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto">#include &lt;iostream&gt;
#include &lt;algorithm&gt;
using namespace std;

const int INF = 1e9;
int n, c[25][25];
bool visited[25];
int x[25];
int curr_cost = 0, best_ans = INF;
int min_edge = INF; // Cạnh nhỏ nhất toàn đồ thị — dùng ước lượng cận

void backtrack(int i) {
    // NHÁNH CẬN TỐI ƯU:
    // (n - i + 1) bước còn lại, mỗi bước ít nhất là min_edge
    if (curr_cost + (n - i + 1) * min_edge &gt;= best_ans) return;

    for (int j = 2; j &lt;= n; ++j) {
        if (!visited[j]) {
            visited[j] = true;
            x[i] = j;
            curr_cost += c[x[i-1]][j];

            if (i == n) {
                // Lá cây: cập nhật best_ans nếu tốt hơn
                best_ans = min(best_ans, curr_cost + c[j][1]);
            } else {
                backtrack(i + 1);
            }

            // QUAY LUI: hoàn tác
            curr_cost -= c[x[i-1]][j];
            visited[j] = false;
        }
    }
}

int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL);
    cin &gt;&gt; n;
    for (int i = 1; i &lt;= n; ++i)
        for (int j = 1; j &lt;= n; ++j) {
            cin &gt;&gt; c[i][j];
            if (i != j) min_edge = min(min_edge, c[i][j]);
        }
    x[1] = 1; visited[1] = true;
    backtrack(2);
    cout &lt;&lt; best_ans &lt;&lt; "\n";
    return 0;
}</pre>
                        <div class="p-4 bg-red-50 rounded-xl border-l-4 border-red-500 mt-3">
                            <p class="font-semibold text-red-700">⚠️ Chất lượng của cận ảnh hưởng cực lớn:</p>
                            <p class="mt-1 text-red-600 text-xs">Cận <code>min_edge × số bước còn lại</code> ở trên là ước lượng <em>lạc quan</em> (luôn nhỏ hơn thực tế) — đây là yêu cầu bắt buộc để không bỏ sót lời giải tối ưu. Cận càng sát thực tế → cắt được càng nhiều nhánh.</p>
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
                        <p class="font-semibold">Bài 1: Dãy nhị phân có đúng K số 1</p>
                        <p class="mt-1 text-slate-600">Liệt kê các dãy nhị phân độ dài $N$ có <strong>đúng $K$ số 1</strong>. Áp dụng <strong>hai nhánh cận</strong>: (1) số 1 đã đặt vượt $K$ → dừng, (2) số 1 còn lại + số vị trí còn lại không đủ để đạt $K$ → dừng.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// N=4, K=2 → </span>0011 0101 0110 1001 1010 1100
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 2: Tổng tập con — so sánh tốc độ</p>
                        <p class="mt-1 text-slate-600">Tìm tập con có tổng bằng $S$. Cài đặt <strong>hai phiên bản</strong>: (A) không sắp xếp, (B) sắp xếp giảm dần + nhánh cận khi tổng hiện tại vượt $S$. So sánh số lần gọi đệ quy của hai phiên bản với $N = 25$.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// a={3,1,4,1,5,9,2,6}, S=10 → {1,9} {4,6} {1,3,6}...</span>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 3: Phân tích số N thành tổng</p>
                        <p class="mt-1 text-slate-600">Liệt kê các cách phân tích $N$ thành tổng các số nguyên dương (mỗi cách chỉ tính một lần dù là hoán vị). Áp dụng nhánh cận đối xứng: phần tử sau luôn $\ge$ phần tử trước.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// N=5 → {5} {1+4} {2+3} {1+1+3} {1+2+2} {1+1+1+2} {1+1+1+1+1}</span>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold">Bài 4: Đổi tiền tối thiểu số tờ</p>
                        <p class="mt-1 text-slate-600">Cho $N$ loại mệnh giá. Tìm số tờ <strong>ít nhất</strong> để có tổng đúng bằng $S$. Dùng <code>best_ans</code> làm cận: nếu số tờ hiện tại $\ge$ <code>best_ans</code> thì dừng nhánh ngay. Sắp xếp mệnh giá giảm dần để thử trước.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-slate-200">
                            <span class="text-slate-400">// menh_gia={1,5,10,25}, S=36 → 3 to (25+10+1)</span>
                        </div>
                    </div>

                    <p class="font-black text-indigo-700 uppercase text-xs tracking-widest mt-6">🏆 Đấu trường — Nâng cao</p>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 5: N-Queens nâng cao — Bitmask</p>
                        <p class="mt-1 text-indigo-700">Giải bài toán N quân hậu với $N = 14, 15$. Thay 3 mảng <code>bool</code> bằng <strong>3 biến bitmask</strong> (<code>int col, diag1, diag2</code>): kiểm tra ô $(r, c)$ hợp lệ chỉ bằng một phép AND bit trong $O(1)$. Đếm tổng số cách đặt.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-200">
                            <span class="text-slate-400">// N=8 → 92 | N=12 → 14200 | N=14 → 365596</span>
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 6: Sudoku Solver — Heuristic Pruning</p>
                        <p class="mt-1 text-indigo-700">Giải Sudoku $9 \times 9$ bằng quay lui. Nhánh cận: (1) kiểm tra hàng/cột/ô $3 \times 3$ ngay khi điền, (2) heuristic <strong>"Minimum Remaining Values"</strong> — luôn chọn ô trống có ít khả năng điền nhất để thử trước.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 7: Chia mảng thành K phần bằng nhau</p>
                        <p class="mt-1 text-indigo-700">Cho mảng $N \le 20$ phần tử. Kiểm tra có thể chia thành $K$ nhóm có <strong>tổng bằng nhau</strong> không. Nhánh cận khả thi: tổng toàn bộ phải chia hết cho $K$. Nhánh cận tối ưu: nếu nhóm hiện tại vượt tổng mục tiêu thì dừng.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-200">
                            <span class="text-slate-400">// a={4,3,2,3,5,2,1}, K=4 → Co (tong=5/nhom)</span><br>
                            <span class="text-slate-400">// a={1,2,3,4}, K=3 → Khong</span>
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 8: Bài toán Cái túi 0/1 với nhánh cận</p>
                        <p class="mt-1 text-indigo-700">Giải 0/1 Knapsack bằng quay lui nhánh cận. Sắp xếp đồ vật theo <strong>đơn giá giảm dần</strong>. Cận trên tại bước $i$: lấy hết đồ vật còn lại theo đơn giá tốt nhất (giả sử chia được) để ước lượng giá trị tối đa có thể đạt được.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-200">
                            <span class="text-slate-400">// W=10, items={(6,10),(4,6),(3,4)} → max_value=16</span>
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 9: Chia quà cho 3 người</p>
                        <p class="mt-1 text-indigo-700">Cho $N \le 20$ món quà có giá trị khác nhau. Chia cho 3 người sao cho chênh lệch giữa người nhiều nhất và người ít nhất là <strong>tối thiểu</strong>. Cận tối ưu: nếu chênh lệch hiện tại đã $\ge$ <code>best_ans</code> thì dừng.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-200">
                            <span class="text-slate-400">// {3,1,4,2,2} → chenh lech min = 0 ({3,1},{4},{2,2})</span>
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-semibold text-indigo-800">Bài 10: Robot di chuyển tiết kiệm năng lượng</p>
                        <p class="mt-1 text-indigo-700">Robot đi từ $(1,1)$ đến $(M,N)$ trên lưới, mỗi ô có chi phí năng lượng. Tìm đường tốn ít năng lượng nhất với điều kiện năng lượng tích lũy <strong>không được âm</strong> tại bất kỳ thời điểm nào. Kết hợp cả nhánh cận khả thi và tối ưu.</p>
                        <div class="mt-2 text-xs font-mono bg-white p-2 rounded border border-indigo-200">
                            <span class="text-slate-400">// Lưới 4x4, ô (-1) là chướng ngại, ô khác là chi phí</span>
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
                            <li><code>Backtracking with Pruning techniques competitive programming</code></li>
                            <li><code>State Space Tree optimization Branch and Bound</code></li>
                            <li><code>Heuristic search backtracking MRV</code></li>
                            <li><code>Bitmask optimization N-Queens C++</code></li>
                            <li><code>0/1 Knapsack Branch and Bound upper bound</code></li>
                        </ul>
                    </div>
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-semibold text-slate-700 mb-1">📄 Tài liệu tham khảo:</p>
                        <p class="text-slate-600">Đọc chuyên đề <strong>"Duyệt cây lời giải"</strong> trong bộ sách <em>Tài liệu chuyên Tin học</em> của PGS.TS. Hồ Sĩ Đàm — tài liệu chuẩn mực nhất về quay lui nhánh cận bằng tiếng Việt.</p>
                    </div>
                </div>
            </details>

        </div>
    `
},
            { 
                title: "Quy hoạch động (DP)", 
                videoId: "", 
                desc: "\"Trái tim\" của tin học trẻ, giải quyết các bài toán tối ưu bằng cách lưu trữ kết quả trung gian.", 
                downloadUrl: "#" 
            },
            { 
                title: "Giải thuật tham lam (Greedy)", 
                videoId: "", 
                desc: "Lựa chọn phương án tốt nhất ở mỗi bước với hy vọng đạt được tối ưu toàn cục.", 
                downloadUrl: "#" 
            }
        ]
    }
];
