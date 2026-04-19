// File dữ liệu chi tiết cho khóa học Lý thuyết đồ thị
window.courseContent = [
    {
        chapterName: "Chuyên đề: Lý thuyết đồ thị",
        lessons: [
            {
    title: "Bài 20: Duyệt Theo Chiều Rộng (BFS)",
    videoId: "",
    desc: "Nắm vững nguyên lý lan tỏa tầng của BFS và ứng dụng tìm đường đi ngắn nhất, giải bài toán loang trên lưới.",
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
                            <li>Hiểu nguyên lý <strong>lan tỏa tầng</strong> của BFS — thăm theo từng lớp khoảng cách.</li>
                            <li>Nắm vững cơ chế hoạt động của <strong>Hàng đợi (Queue)</strong> và mảng <strong>Visited</strong> trong BFS.</li>
                            <li>Hiểu tại sao BFS luôn tìm được đường đi <strong>ít cạnh nhất</strong> (ngắn nhất theo số bước).</li>
                        </ul>
                    </div>
                    <div>
                        <p class="font-bold text-slate-800 mb-2">🛠️ Kỹ năng:</p>
                        <ul class="list-disc list-inside space-y-1 pl-2">
                            <li>Triển khai BFS trên <strong>danh sách kề</strong> để duyệt đồ thị tổng quát.</li>
                            <li>Ứng dụng BFS tìm <strong>đường đi ngắn nhất</strong> (ít cạnh nhất) và truy vết đường đi.</li>
                            <li>Giải bài toán <strong>loang (Flood Fill)</strong> trên lưới ô vuông 2D và 3D.</li>
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
                        <p class="font-black text-slate-800 text-base mb-3">1. Nguyên lý hoạt động</p>
                        <p class="text-slate-600 mb-3">BFS lan tỏa từ đỉnh nguồn ra ngoài theo từng <strong>tầng (lớp) khoảng cách</strong>:</p>
                        <div class="grid grid-cols-4 gap-2 mb-4 text-center text-xs">
                            <div class="p-3 bg-red-100 rounded-xl border-2 border-red-400">
                                <p class="font-black text-red-700 text-lg">S</p>
                                <p class="text-red-600 font-bold">Tầng 0</p>
                                <p class="text-red-500">Nguồn</p>
                            </div>
                            <div class="p-3 bg-orange-100 rounded-xl border-2 border-orange-400">
                                <p class="font-black text-orange-700 text-lg">1</p>
                                <p class="text-orange-600 font-bold">Tầng 1</p>
                                <p class="text-orange-500">Kề trực tiếp</p>
                            </div>
                            <div class="p-3 bg-yellow-100 rounded-xl border-2 border-yellow-400">
                                <p class="font-black text-yellow-700 text-lg">2</p>
                                <p class="text-yellow-600 font-bold">Tầng 2</p>
                                <p class="text-yellow-500">Cách 2 cạnh</p>
                            </div>
                            <div class="p-3 bg-emerald-100 rounded-xl border-2 border-emerald-400">
                                <p class="font-black text-emerald-700 text-lg">...</p>
                                <p class="text-emerald-600 font-bold">Tầng k</p>
                                <p class="text-emerald-500">Cách k cạnh</p>
                            </div>
                        </div>
                        <div class="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                            <p class="font-bold text-blue-800">💡 Tại sao BFS cho đường đi ngắn nhất?</p>
                            <p class="text-blue-700 mt-1">BFS thăm đỉnh theo thứ tự khoảng cách tăng dần. Lần đầu tiên một đỉnh được thăm, đó <strong>chắc chắn là đường đi ngắn nhất</strong> (theo số cạnh) từ nguồn đến đỉnh đó.</p>
                        </div>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-3">2. Thuật toán tổng quát</p>
                        <div class="space-y-2">
                            <div class="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                                <span class="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                                <p class="text-slate-700">Đưa đỉnh nguồn $s$ vào <strong>queue</strong>, đánh dấu $s$ đã thăm (<code class="bg-slate-100 px-1 rounded font-mono">visited[s] = true</code>).</p>
                            </div>
                            <div class="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                                <span class="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                                <p class="text-slate-700">Khi queue còn phần tử: lấy đỉnh $u$ ra khỏi <strong>đầu</strong> queue.</p>
                            </div>
                            <div class="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                                <span class="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                                <p class="text-slate-700">Với mỗi đỉnh $v$ kề $u$ mà <strong>chưa thăm</strong>: đánh dấu đã thăm, lưu <code class="bg-slate-100 px-1 rounded font-mono">parent[v] = u</code>, đẩy $v$ vào <strong>cuối</strong> queue.</p>
                            </div>
                            <div class="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                                <span class="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                                <p class="text-slate-700">Lặp lại bước 2–3 cho đến khi queue rỗng.</p>
                            </div>
                        </div>
                        <div class="mt-3 overflow-x-auto">
                            <table class="w-full text-sm border-collapse rounded-xl overflow-hidden border border-slate-200">
                                <thead>
                                    <tr class="bg-slate-100 text-slate-700">
                                        <th class="p-3 text-left font-bold border-b border-slate-200">Đặc điểm</th>
                                        <th class="p-3 text-left font-bold border-b border-slate-200">BFS</th>
                                        <th class="p-3 text-left font-bold border-b border-slate-200">DFS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-slate-100 hover:bg-slate-50">
                                        <td class="p-3">Cấu trúc dữ liệu</td>
                                        <td class="p-3 font-semibold text-blue-600">Queue (FIFO)</td>
                                        <td class="p-3 font-semibold text-purple-600">Stack / Đệ quy</td>
                                    </tr>
                                    <tr class="border-b border-slate-100 hover:bg-slate-50">
                                        <td class="p-3">Đường đi ngắn nhất</td>
                                        <td class="p-3 text-emerald-600">✅ Có (theo số cạnh)</td>
                                        <td class="p-3 text-red-500">❌ Không đảm bảo</td>
                                    </tr>
                                    <tr class="hover:bg-slate-50">
                                        <td class="p-3">Độ phức tạp</td>
                                        <td class="p-3 font-mono">$O(V + E)$</td>
                                        <td class="p-3 font-mono">$O(V + E)$</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-3">3. Code minh họa: Tìm đường đi ngắn nhất trên đồ thị</p>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed">#include &lt;iostream&gt;
#include &lt;vector&gt;
#include &lt;queue&gt;
#include &lt;algorithm&gt;
using namespace std;

vector&lt;int&gt; adj[1001];
bool visited[1001];
int parent[1001]; // Lưu vết đường đi

void bfs(int s) {
    queue&lt;int&gt; q;
    q.push(s);
    visited[s] = true;

    while (!q.empty()) {
        int u = q.front(); q.pop();

        for (int v : adj[u]) {
            if (!visited[v]) {
                visited[v] = true;
                parent[v] = u; // u là "cha" của v trên đường đi
                q.push(v);
            }
        }
    }
}

int main() {
    int n, m, s, t;
    cin &gt;&gt; n &gt;&gt; m &gt;&gt; s &gt;&gt; t;

    for (int i = 0; i &lt; m; i++) {
        int u, v; cin &gt;&gt; u &gt;&gt; v;
        adj[u].push_back(v);
        adj[v].push_back(u); // Đồ thị vô hướng
    }

    bfs(s);

    if (!visited[t]) {
        cout &lt;&lt; "Khong co duong di";
    } else {
        // Truy vết từ t ngược về s
        vector&lt;int&gt; path;
        for (int v = t; v != 0; v = parent[v])
            path.push_back(v);
        reverse(path.begin(), path.end());
        for (int x : path) cout &lt;&lt; x &lt;&lt; " ";
    }
    return 0;
}</pre>
                        <div class="mt-3 p-4 bg-amber-50 rounded-xl border-l-4 border-amber-500">
                            <p class="font-bold text-amber-800">📌 BFS trên lưới 2D</p>
                            <p class="text-amber-700 mt-1 mb-2">Thay vì danh sách kề, mỗi ô $(r, c)$ có tối đa 4 ô kề. Dùng mảng hướng để duyệt gọn:</p>
                            <pre class="bg-slate-900 text-blue-300 p-3 rounded-lg font-mono text-xs overflow-x-auto">int dr[] = {-1, 1, 0, 0}; // Lên, Xuống
int dc[] = {0, 0, -1, 1}; // Trái, Phải

for (int d = 0; d &lt; 4; d++) {
    int nr = r + dr[d], nc = c + dc[d];
    if (nr &gt;= 0 &amp;&amp; nr &lt; M &amp;&amp; nc &gt;= 0 &amp;&amp; nc &lt; N &amp;&amp; !visited[nr][nc])
        // Đẩy (nr, nc) vào queue
}</pre>
                        </div>
                        <div class="mt-3 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                            <p class="font-bold text-red-800">⚠️ Lỗi thường gặp</p>
                            <p class="text-red-700 mt-1">Đánh dấu <code class="bg-red-100 px-1 rounded font-mono">visited[v] = true</code> phải làm <strong>ngay khi đẩy vào queue</strong>, không phải khi lấy ra. Nếu đánh dấu muộn, cùng một đỉnh có thể bị đẩy vào queue nhiều lần!</p>
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
                        <p class="font-bold text-slate-800">Bài 1: Đếm thành phần liên thông</p>
                        <p class="mt-1 text-slate-600">Cài đặt BFS để đếm số lượng <strong>thành phần liên thông</strong> của một đồ thị vô hướng. Mỗi lần gặp đỉnh chưa thăm, chạy BFS từ đó và tăng bộ đếm lên 1.</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                            <p class="text-slate-500">// 6 đỉnh, cạnh: (1-2), (2-3), (4-5)</p>
                            <p class="text-emerald-600">// Số thành phần liên thông = 3  ({1,2,3}, {4,5}, {6})</p>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800">Bài 2: Đồ thị hai phía (Bipartite Graph)</p>
                        <p class="mt-1 text-slate-600">Dùng BFS để kiểm tra xem đồ thị có phải là <strong>đồ thị hai phía</strong> hay không — tức là có thể tô 2 màu sao cho không có hai đỉnh kề nhau cùng màu.</p>
                        <p class="mt-2 text-xs text-slate-500 italic">💡 Gợi ý: Tô màu luân phiên (0/1) trong quá trình BFS. Nếu gặp đỉnh kề đã được tô cùng màu → không phải Bipartite.</p>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800">Bài 3: Tìm đường trên lưới ô vuông</p>
                        <p class="mt-1 text-slate-600">Cho lưới $M \times N$, ký tự <code class="bg-slate-100 px-1 rounded font-mono">.</code> là ô trống, <code class="bg-slate-100 px-1 rounded font-mono">#</code> là chướng ngại vật. Tìm <strong>số bước ít nhất</strong> để đi từ ô $(x_1, y_1)$ đến $(x_2, y_2)$ (chỉ đi 4 hướng).</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                            <p class="text-slate-500">// Lưới 4x4, S=nguồn, E=đích, #=tường</p>
                            <p>S . . #</p>
                            <p>. # . .</p>
                            <p>. # . #</p>
                            <p>. . . E</p>
                            <p class="text-emerald-600">// Số bước tối thiểu = 6</p>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800">Bài 4: Biến đổi số</p>
                        <p class="mt-1 text-slate-600">Cho số nguyên $A$ và $B$. Mỗi bước, có thể nhân đôi hoặc cộng thêm 1 vào số hiện tại. Tìm <strong>số bước ít nhất</strong> để biến $A$ thành $B$. ($1 \leq A, B \leq 10^4$)</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                            <p class="text-slate-500">// A = 3, B = 11</p>
                            <p class="text-slate-500">// 3 → 6 → 7 → 14... hoặc 3 → 4 → 8 → 9 → 10 → 11</p>
                            <p class="text-emerald-600">// Số bước ít nhất = 5</p>
                        </div>
                    </div>

                    <p class="font-bold text-slate-600 uppercase text-xs tracking-widest mt-6">🏆 Đấu trường (Nâng cao)</p>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 5: Đám cháy rừng (Multi-source BFS) ⭐</p>
                        <p class="mt-1 text-indigo-800">Một khu rừng $M \times N$. Ban đầu có $K$ đám cháy ở các vị trí cho trước. Mỗi phút, lửa lan sang các ô kề cạnh. Hỏi sau bao nhiêu phút thì <strong>toàn bộ khu rừng</strong> bị cháy?</p>
                        <p class="mt-2 text-xs text-indigo-600 italic">💡 Gợi ý: Đẩy tất cả $K$ đám cháy ban đầu vào queue cùng một lúc (Multi-source BFS). Đây chính là mấu chốt — không chạy BFS từng nguồn riêng lẻ.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 6: BFS 0-1 (Trọng số 0 hoặc 1)</p>
                        <p class="mt-1 text-indigo-800">Tìm đường đi ngắn nhất trên đồ thị có trọng số các cạnh <strong>chỉ là 0 hoặc 1</strong>. Hiệu quả hơn Dijkstra trong trường hợp này.</p>
                        <p class="mt-2 text-xs text-indigo-600 italic">💡 Gợi ý: Dùng <code class="bg-indigo-100 px-1 rounded font-mono">std::deque</code>. Cạnh trọng số 0 → đẩy vào <strong>đầu</strong> deque. Cạnh trọng số 1 → đẩy vào <strong>cuối</strong> deque.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 7: Trò chơi đổ nước</p>
                        <p class="mt-1 text-indigo-800">Có 2 bình dung tích $A$ và $B$ lít. Các thao tác: đổ đầy, đổ hết, đổ từ bình này sang bình kia. Tìm <strong>số bước ít nhất</strong> để có đúng $K$ lít trong một bình.</p>
                        <p class="mt-2 text-xs text-indigo-600 italic">💡 Gợi ý: Mỗi trạng thái là cặp $(a, b)$ — lượng nước hiện tại trong 2 bình. BFS trên không gian trạng thái, mỗi trạng thái có tối đa 6 chuyển tiếp.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 8: Mê cung 3D</p>
                        <p class="mt-1 text-indigo-800">Mê cung gồm $L$ tầng, $R$ hàng, $C$ cột. Mỗi ô là thông hoặc tường. Có thể di chuyển theo 6 hướng (trên, dưới, trái, phải, lên tầng, xuống tầng). Tìm đường thoát ngắn nhất.</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-indigo-200 space-y-1">
                            <p class="text-slate-500">// Trạng thái: (tầng, hàng, cột)</p>
                            <p class="text-indigo-600">// 6 hướng: dl[] = {-1,1,0,0,0,0}, dr[] = {0,0,-1,1,0,0}, dc[] = {0,0,0,0,-1,1}</p>
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 9: Khoảng cách đến trạm phát sóng gần nhất</p>
                        <p class="mt-1 text-indigo-800">Cho bản đồ $M \times N$ và $K$ trạm phát sóng. Với mỗi ô trên bản đồ, tìm <strong>khoảng cách đến trạm phát sóng gần nhất</strong>.</p>
                        <p class="mt-2 text-xs text-indigo-600 italic">💡 Gợi ý: Đẩy tất cả $K$ trạm vào queue ngay từ đầu (Multi-source BFS). Mỗi ô sẽ được thăm đúng một lần bởi trạm gần nhất.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 10: Biến đổi số nâng cao</p>
                        <p class="mt-1 text-indigo-800">Cho số $N$. Mỗi bước, cộng $N$ với một <strong>ước số của $N$ khác 1 và $N$</strong>. Tìm số bước ít nhất để biến $A$ thành $B$. ($2 \leq A &lt; B \leq 10^4$, $A$ luôn có ước thực sự)</p>
                        <p class="mt-2 text-xs text-indigo-600 italic">💡 Gợi ý: BFS trên không gian giá trị. Tại mỗi trạng thái $x$, tìm tất cả ước của $x$ trong $O(\sqrt{x})$ để sinh ra các trạng thái tiếp theo.</p>
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
                            <li><code class="bg-slate-100 px-1 rounded font-mono">Breadth-First Search visualization</code></li>
                            <li><code class="bg-slate-100 px-1 rounded font-mono">BFS shortest path grid C++</code></li>
                            <li><code class="bg-slate-100 px-1 rounded font-mono">Multi-source BFS algorithm</code></li>
                            <li><code class="bg-slate-100 px-1 rounded font-mono">BFS 0-1 deque shortest path</code></li>
                        </ul>
                    </div>
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800">📖 Tài liệu đọc thêm:</p>
                        <p class="mt-1 text-slate-600">Bài <strong>"Duyệt theo chiều rộng"</strong> trên <em>VNOI Wiki</em> — đặc biệt phần ứng dụng BFS trong các bài toán tìm đường trên lưới và Multi-source BFS.</p>
                    </div>
                </div>
            </details>

        </div>
    `
},
            { 
                title: "Duyệt sâu (DFS)", 
                videoId: "", 
                desc: "Khám phá các thành phần liên thông, chu trình và cấu trúc đồ thị.", 
                downloadUrl: "#" 
            },
            { 
                title: "Tìm đường đi", 
                videoId: "", 
                desc: "Các thuật toán tìm đường đi ngắn nhất trên đồ thị có trọng số (Dijkstra, Floyd...).", 
                downloadUrl: "#" 
            }
        ]
    }
];
