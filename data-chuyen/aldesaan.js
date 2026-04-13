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
                title: "Đệ quy II & Đệ quy quay lui II", 
                videoId: "", 
                desc: "Nâng cao kỹ thuật nhánh cận (Pruning) để tối ưu thời gian chạy.", 
                downloadUrl: "#" 
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
