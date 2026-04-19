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
    title: "Bài 21: Duyệt Theo Chiều Sâu (DFS)",
    videoId: "",
    desc: "Nắm vững nguyên lý đệ quy của DFS và ứng dụng phát hiện chu trình, thành phần liên thông, sắp xếp Topo.",
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
                            <li>Hiểu nguyên lý <strong>đệ quy / ngăn xếp</strong> của DFS — tiến sâu trước, quay lui sau.</li>
                            <li>Nắm vững các khái niệm: <strong>cây khung</strong>, <strong>cạnh cây</strong>, <strong>cạnh ngược</strong> và <strong>thành phần liên thông</strong>.</li>
                            <li>Hiểu sự khác biệt về ứng dụng giữa DFS và BFS.</li>
                        </ul>
                    </div>
                    <div>
                        <p class="font-bold text-slate-800 mb-2">🛠️ Kỹ năng:</p>
                        <ul class="list-disc list-inside space-y-1 pl-2">
                            <li>Triển khai DFS bằng <strong>đệ quy</strong> (phổ biến) và <strong>ngăn xếp thủ công</strong>.</li>
                            <li>Ứng dụng DFS <strong>phát hiện chu trình</strong> trên đồ thị có hướng và vô hướng.</li>
                            <li>Giải bài toán <strong>Sắp xếp Topo</strong> và tìm <strong>thành phần liên thông mạnh</strong>.</li>
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
                        <p class="text-slate-600 mb-3">DFS luôn ưu tiên <strong>tiến sâu nhất có thể</strong> trước khi quay lui:</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                            <div class="p-4 bg-purple-50 rounded-xl border border-purple-200">
                                <p class="font-bold text-purple-800">🔵 DFS — "Tiến sâu trước"</p>
                                <ul class="text-purple-700 text-xs mt-2 space-y-1 list-disc list-inside">
                                    <li>Chọn một đỉnh kề và <strong>ngay lập tức lao sâu</strong> vào đó</li>
                                    <li>Gặp đỉnh "cụt" → <strong>quay lui (backtrack)</strong></li>
                                    <li>Cấu trúc dữ liệu: <strong>Stack</strong> (ngầm định qua đệ quy)</li>
                                </ul>
                            </div>
                            <div class="p-4 bg-blue-50 rounded-xl border border-blue-200">
                                <p class="font-bold text-blue-800">🟢 BFS — "Lan rộng từng tầng"</p>
                                <ul class="text-blue-700 text-xs mt-2 space-y-1 list-disc list-inside">
                                    <li>Thăm <strong>tất cả</strong> đỉnh kề trước khi đi sâu hơn</li>
                                    <li>Đảm bảo đường đi <strong>ngắn nhất</strong></li>
                                    <li>Cấu trúc dữ liệu: <strong>Queue</strong></li>
                                </ul>
                            </div>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm border-collapse rounded-xl overflow-hidden border border-slate-200">
                                <thead>
                                    <tr class="bg-slate-100 text-slate-700">
                                        <th class="p-3 text-left font-bold border-b border-slate-200">Loại cạnh trong DFS</th>
                                        <th class="p-3 text-left font-bold border-b border-slate-200">Ý nghĩa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-slate-100 hover:bg-slate-50">
                                        <td class="p-3 font-semibold text-emerald-600">Cạnh cây (Tree Edge)</td>
                                        <td class="p-3">Cạnh dẫn đến đỉnh <strong>chưa thăm</strong> — tạo nên cây DFS</td>
                                    </tr>
                                    <tr class="border-b border-slate-100 hover:bg-slate-50">
                                        <td class="p-3 font-semibold text-red-600">Cạnh ngược (Back Edge)</td>
                                        <td class="p-3">Cạnh dẫn đến <strong>tổ tiên</strong> trong cây DFS → dấu hiệu có <strong>chu trình</strong></td>
                                    </tr>
                                    <tr class="hover:bg-slate-50">
                                        <td class="p-3 font-semibold text-blue-600">Cạnh xuôi / chéo</td>
                                        <td class="p-3">Chỉ xuất hiện trong đồ thị <strong>có hướng</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-3">2. Thuật toán tổng quát (Đệ quy)</p>
                        <div class="space-y-2 mb-4">
                            <div class="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                                <span class="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                                <p class="text-slate-700">Đánh dấu đỉnh hiện tại $u$ là <strong>đã thăm</strong> (<code class="bg-slate-100 px-1 rounded font-mono">visited[u] = true</code>).</p>
                            </div>
                            <div class="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                                <span class="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                                <p class="text-slate-700">Với mỗi đỉnh $v$ kề $u$: nếu $v$ <strong>chưa thăm</strong> → gọi đệ quy <code class="bg-slate-100 px-1 rounded font-mono">DFS(v)</code>. Tùy chọn lưu <code class="bg-slate-100 px-1 rounded font-mono">parent[v] = u</code>.</p>
                            </div>
                            <div class="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                                <span class="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                                <p class="text-slate-700">Khi không còn đỉnh kề chưa thăm → <strong>quay lui</strong> (hàm đệ quy kết thúc tự nhiên).</p>
                            </div>
                        </div>
                        <div class="p-4 bg-amber-50 rounded-xl border-l-4 border-amber-500">
                            <p class="font-bold text-amber-800">📌 Kỹ thuật tô màu 3 trạng thái</p>
                            <p class="text-amber-700 mt-1 mb-2">Để phát hiện chu trình trên đồ thị <strong>có hướng</strong>, dùng 3 màu thay vì 2:</p>
                            <div class="grid grid-cols-3 gap-2 text-xs text-center">
                                <div class="p-2 bg-white rounded-lg border border-amber-200"><p class="font-bold text-slate-600">⬜ Trắng (0)</p><p class="text-slate-500">Chưa thăm</p></div>
                                <div class="p-2 bg-white rounded-lg border border-amber-200"><p class="font-bold text-gray-500">🔘 Xám (1)</p><p class="text-slate-500">Đang thăm (trong stack)</p></div>
                                <div class="p-2 bg-white rounded-lg border border-amber-200"><p class="font-bold text-slate-800">⬛ Đen (2)</p><p class="text-slate-500">Đã thăm xong</p></div>
                            </div>
                            <p class="text-amber-700 mt-2 text-xs">Nếu gặp đỉnh kề đang <strong>xám</strong> → phát hiện <strong>cạnh ngược</strong> → có chu trình!</p>
                        </div>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-3">3. Code minh họa: Đếm thành phần liên thông</p>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed">#include &lt;iostream&gt;
#include &lt;vector&gt;
using namespace std;

vector&lt;int&gt; adj[1001];
bool visited[1001];
int n, m;

void dfs(int u) {
    visited[u] = true;
    for (int v : adj[u]) {
        if (!visited[v]) {
            dfs(v); // Tiến sâu ngay lập tức
        }
    }
    // Khi hàm kết thúc = đã thăm xong toàn bộ nhánh từ u
}

int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL);
    cin &gt;&gt; n &gt;&gt; m;

    for (int i = 0; i &lt; m; i++) {
        int u, v; cin &gt;&gt; u &gt;&gt; v;
        adj[u].push_back(v);
        adj[v].push_back(u); // Đồ thị vô hướng
    }

    int count = 0;
    for (int i = 1; i &lt;= n; i++) {
        if (!visited[i]) {
            count++;
            dfs(i); // Mỗi lần gọi DFS mới = 1 thành phần liên thông
        }
    }

    cout &lt;&lt; "So thanh phan lien thong: " &lt;&lt; count;
    return 0;
}</pre>
                        <div class="mt-3 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                            <p class="font-bold text-red-800">⚠️ Cẩn thận: Stack Overflow với đệ quy sâu</p>
                            <p class="text-red-700 mt-1">Nếu đồ thị có $N = 10^5$ đỉnh và hình thành chuỗi thẳng, độ sâu đệ quy có thể đạt $10^5$ lần → tràn bộ nhớ stack. Giải pháp: tăng stack size hoặc cài đặt DFS bằng <strong>stack thủ công</strong> (iterative DFS).</p>
                        </div>
                        <div class="mt-3 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                            <p class="font-bold text-blue-800">💡 DFS thủ công bằng Stack</p>
                            <pre class="bg-slate-900 text-blue-300 p-3 rounded-lg font-mono text-xs overflow-x-auto mt-2">void dfs_iterative(int s) {
    stack&lt;int&gt; st;
    st.push(s);
    visited[s] = true;
    while (!st.empty()) {
        int u = st.top(); st.pop();
        for (int v : adj[u]) {
            if (!visited[v]) {
                visited[v] = true;
                st.push(v);
            }
        }
    }
}</pre>
                        </div>
                    </div>

                    <div>
                        <p class="font-black text-slate-800 text-base mb-3">4. Sắp xếp Topo (Topological Sort)</p>
                        <p class="text-slate-600 mb-3">Trên đồ thị <strong>có hướng không chu trình (DAG)</strong>, sắp xếp Topo cho thứ tự thực hiện hợp lệ. Dùng DFS: sau khi thăm xong một đỉnh, đẩy nó vào ngăn xếp kết quả — đảo ngược ngăn xếp là thứ tự Topo.</p>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed">stack&lt;int&gt; topoStack;

void dfs_topo(int u) {
    visited[u] = true;
    for (int v : adj[u])
        if (!visited[v]) dfs_topo(v);
    topoStack.push(u); // Đẩy vào SAU KHI thăm xong toàn bộ nhánh
}

// Gọi dfs_topo cho mọi đỉnh chưa thăm
// In topoStack từ top xuống = thứ tự Topo hợp lệ</pre>
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
                        <p class="font-bold text-slate-800">Bài 1: Kiểm tra đường đi từ S đến T</p>
                        <p class="mt-1 text-slate-600">Cài đặt DFS để kiểm tra xem có <strong>đường đi</strong> từ đỉnh $s$ đến đỉnh $t$ hay không trên đồ thị vô hướng.</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                            <p class="text-slate-500">// 5 đỉnh, cạnh: (1-2),(2-3),(4-5). Hỏi s=1, t=3</p>
                            <p class="text-emerald-600">// Output: "Co duong di"</p>
                            <p class="text-slate-500">// Hỏi s=1, t=4 → "Khong co duong di"</p>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800">Bài 2: In thứ tự duyệt DFS</p>
                        <p class="mt-1 text-slate-600">In ra tất cả các đỉnh của đồ thị <strong>theo thứ tự thăm</strong> của DFS bắt đầu từ đỉnh $1$. Kết quả phụ thuộc vào thứ tự các đỉnh trong danh sách kề.</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                            <p class="text-slate-500">// 4 đỉnh, cạnh: (1-2),(1-3),(2-4),(3-4). Bắt đầu từ 1</p>
                            <p class="text-emerald-600">// Output: 1 2 4 3  (hoặc 1 3 4 2 tùy thứ tự kề)</p>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800">Bài 3: Phát hiện chu trình — Đồ thị vô hướng</p>
                        <p class="mt-1 text-slate-600">Dùng DFS để kiểm tra đồ thị vô hướng có <strong>chu trình</strong> hay không. Gợi ý: nếu gặp đỉnh kề đã thăm mà <strong>không phải cha</strong> trong cây DFS → có chu trình.</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                            <p class="text-slate-500">// Đồ thị: (1-2),(2-3),(3-1) → "Co chu trinh"</p>
                            <p class="text-slate-500">// Đồ thị: (1-2),(2-3),(1-3)... lưu ý: cần truyền parent vào DFS</p>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800">Bài 4: Kiểm tra đồ thị là Cây</p>
                        <p class="mt-1 text-slate-600">Cho đồ thị vô hướng $N$ đỉnh $M$ cạnh. Kiểm tra nó có phải là <strong>Cây</strong> hay không. Một đồ thị là cây khi và chỉ khi: <strong>liên thông</strong> VÀ <strong>không có chu trình</strong> (tương đương: $M = N - 1$).</p>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800">Bài 5: Tìm cầu (Bridge) cơ bản</p>
                        <p class="mt-1 text-slate-600">Liệt kê các <strong>cạnh cầu</strong> — những cạnh mà nếu xóa đi, số thành phần liên thông tăng lên. Dùng cách đơn giản: lần lượt thử xóa từng cạnh và chạy lại DFS để đếm thành phần liên thông.</p>
                        <p class="mt-2 text-xs text-slate-500 italic">💡 Cách hiệu quả hơn: Thuật toán Tarjan tìm cầu trong $O(V+E)$ — xem phần nâng cao.</p>
                    </div>

                    <p class="font-bold text-slate-600 uppercase text-xs tracking-widest mt-6">🏆 Đấu trường (Nâng cao)</p>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 6: Sắp xếp Topo (Topological Sort) ⭐</p>
                        <p class="mt-1 text-indigo-800">Cho $N$ công việc với $M$ ràng buộc "việc $A$ phải làm trước việc $B$". Đưa ra một <strong>thứ tự thực hiện hợp lệ</strong>. Nếu có chu trình, in ra "Impossible".</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-indigo-200 space-y-1">
                            <p class="text-slate-500">// 4 công việc, ràng buộc: 1→2, 1→3, 3→4, 2→4</p>
                            <p class="text-indigo-600">// Output hợp lệ: 1 2 3 4  hoặc  1 3 2 4</p>
                        </div>
                        <p class="mt-2 text-xs text-indigo-600 italic">💡 Gợi ý: Dùng kỹ thuật "đẩy vào stack sau khi thăm xong" rồi đảo ngược, hoặc dùng thuật toán Kahn (BFS + in-degree).</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 7: Thành phần liên thông mạnh (Thuật toán Kosaraju) ⭐</p>
                        <p class="mt-1 text-indigo-800">Tìm tất cả <strong>thành phần liên thông mạnh (SCC)</strong> của đồ thị có hướng — nhóm đỉnh mà bất kỳ hai đỉnh nào cũng có đường đi đến nhau.</p>
                        <p class="mt-2 text-xs text-indigo-600 italic">💡 Kosaraju: (1) DFS lần 1 trên đồ thị gốc, lưu thứ tự kết thúc vào stack. (2) Đảo chiều tất cả cạnh. (3) DFS lần 2 trên đồ thị đảo theo thứ tự stack — mỗi lần gọi DFS mới = 1 SCC.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 8: Đường đi Euler</p>
                        <p class="mt-1 text-indigo-800">Kiểm tra và tìm <strong>đường đi Euler</strong> — đường đi qua mỗi <strong>cạnh</strong> đúng một lần. Điều kiện: đồ thị liên thông và có đúng 0 hoặc 2 đỉnh bậc lẻ.</p>
                        <p class="mt-2 text-xs text-indigo-600 italic">💡 Gợi ý: Thuật toán Hierholzer — DFS nhưng xóa cạnh đã đi, khi gặp đỉnh "cụt" thì thêm vào đường đi kết quả.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 9: Cây khung (Spanning Tree) bằng DFS</p>
                        <p class="mt-1 text-indigo-800">Cho đồ thị liên thông $N$ đỉnh. Sử dụng DFS để xây dựng một <strong>cây khung</strong> gồm đúng $N-1$ cạnh. In ra danh sách các cạnh thuộc cây khung.</p>
                        <p class="mt-2 text-xs text-indigo-600 italic">💡 Cạnh $(parent[v], v)$ với mọi $v \neq root$ chính là các cạnh của cây khung DFS.</p>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 10: Mê cung — Tìm và in đường đi</p>
                        <p class="mt-1 text-indigo-800">Cho mê cung $M \times N$. Tìm đường đi từ lối vào đến lối ra bằng DFS và <strong>in ra toàn bộ đường đi</strong> đó (tọa độ từng bước).</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-indigo-200 space-y-1">
                            <p class="text-slate-500">// Khác BFS: DFS không đảm bảo đường ngắn nhất,</p>
                            <p class="text-slate-500">// nhưng luôn tìm được một đường đi nếu tồn tại.</p>
                            <p class="text-indigo-600">// Truy vết: Dùng mảng parent hoặc vector path.</p>
                        </div>
                    </div>

                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <p class="font-bold text-indigo-900">Bài 11: Kích thước cây con (Subtree Size)</p>
                        <p class="mt-1 text-indigo-800">Cho một cây $N$ đỉnh, gốc tại đỉnh $1$. Dùng DFS để tính <strong>kích thước cây con</strong> của mọi đỉnh — tức là số đỉnh trong cây con gốc tại đỉnh đó.</p>
                        <div class="mt-3 text-xs font-mono bg-white p-3 rounded-xl border border-indigo-200 space-y-1">
                            <p class="text-slate-500">// size[u] = 1 + tổng size[v] với mọi con v của u</p>
                            <p class="text-indigo-600">// Tính AFTER khi đã thăm xong tất cả con (post-order)</p>
                        </div>
                        <p class="mt-2 text-xs text-indigo-600 italic">💡 Đây là kỹ thuật nền tảng cho nhiều bài toán trên cây: centroid decomposition, heavy-light decomposition, v.v.</p>
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
                            <li><code class="bg-slate-100 px-1 rounded font-mono">DFS recursion vs iterative stack C++</code></li>
                            <li><code class="bg-slate-100 px-1 rounded font-mono">Detect cycle in directed graph DFS coloring</code></li>
                            <li><code class="bg-slate-100 px-1 rounded font-mono">Topological sort DFS algorithm</code></li>
                            <li><code class="bg-slate-100 px-1 rounded font-mono">Tarjan's algorithm SCC</code></li>
                            <li><code class="bg-slate-100 px-1 rounded font-mono">Kosaraju strongly connected components</code></li>
                        </ul>
                    </div>
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p class="font-bold text-slate-800">📖 Tài liệu đọc thêm:</p>
                        <p class="mt-1 text-slate-600">Mục <strong>"Duyệt theo chiều sâu"</strong> trên <em>VNOI Wiki</em> và chuyên đề đồ thị của thầy <em>Lê Minh Hoàng</em> — đặc biệt phần về thuật toán Tarjan tìm cầu, điểm khớp và SCC.</p>
                    </div>
                </div>
            </details>

        </div>
    `
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
