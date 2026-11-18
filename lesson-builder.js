(() => {
    "use strict";

    const escapeHtml = (value = "") => String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");

    const list = (items, className = "space-y-2") => {
        const values = Array.isArray(items) ? items : [];
        return `<ul class="${className}">${values.map((item) => `<li class="flex items-start gap-3"><span aria-hidden="true" class="mt-1 text-blue-600">◆</span><span>${escapeHtml(item)}</span></li>`).join("")}</ul>`;
    };

    const panel = ({ title, icon, color, open = false, body }) => `
        <details class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"${open ? " open" : ""}>
            <summary class="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 p-5 font-bold text-slate-900 hover:bg-slate-50">
                <span class="flex items-center gap-3">
                    <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${color} text-white"><i data-lucide="${icon}" aria-hidden="true"></i></span>
                    <h2 class="m-0 text-base">${escapeHtml(title)}</h2>
                </span>
                <i data-lucide="chevron-down" aria-hidden="true" class="h-5 w-5 text-slate-500 group-open:rotate-180"></i>
            </summary>
            <div class="border-t border-slate-100 p-5 text-sm leading-relaxed text-slate-700 md:p-6 md:text-base">${body}</div>
        </details>`;

    const answer = (label, text, feedback) => `
        <details class="mt-3 rounded-xl border border-slate-200 bg-slate-50">
            <summary class="min-h-[44px] cursor-pointer p-3 font-semibold text-slate-800">${escapeHtml(label)}</summary>
            <div class="border-t border-slate-200 p-4">
                <p><strong>Đáp án hoặc gợi ý:</strong> ${escapeHtml(text)}</p>
                <p class="mt-2"><strong>Phản hồi:</strong> ${escapeHtml(feedback)}</p>
            </div>
        </details>`;

    const detailSections = (items) => (Array.isArray(items) ? items : []).map((section) => `
        <section class="mt-4">
            <h4 class="font-bold text-slate-900">${escapeHtml(section.heading)}</h4>
            ${(Array.isArray(section.paragraphs) ? section.paragraphs : []).map((paragraph) => `<p class="mt-2">${escapeHtml(paragraph)}</p>`).join("")}
            ${section.points?.length ? list(section.points, "mt-3 space-y-2") : ""}
        </section>`).join("");

    const examples = (items) => (Array.isArray(items) ? items : []).map((item) => `
        <section class="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-4">
            <h4 class="font-bold text-blue-950">${escapeHtml(item.title)}</h4>
            <p class="mt-2">${escapeHtml(item.text)}</p>
        </section>`).join("");

    const learningClosure = (config, recap = []) => {
        if (!config && !recap.length) return "";
        if (!config) {
            return `<section class="lesson-closure mt-4 rounded-xl border border-emerald-300 bg-white p-4">
                <h4 class="font-bold text-emerald-950">Chốt lại vấn đề</h4>
                ${list(recap, "mt-3 space-y-2")}
            </section>`;
        }
        const rows = [
            ["Kết luận", config.conclusion],
            ["Điều kiện/phạm vi", config.condition],
            ["Điểm dễ nhầm", config.misconception],
            ["Cầu nối", config.next]
        ].filter(([, value]) => value);
        return `<section class="lesson-closure mt-4 rounded-xl border border-emerald-300 bg-white p-4">
            <h4 class="font-bold text-emerald-950">Chốt lại vấn đề</h4>
            <div class="mt-3 space-y-2">${rows.map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`).join("")}</div>
        </section>`;
    };

    const journey = (items) => {
        const steps = Array.isArray(items) ? items : [];
        if (!steps.length) return "";
        return `<section class="mt-4" aria-labelledby="lesson-journey-title">
            <h3 id="lesson-journey-title" class="font-bold text-slate-900">Bản đồ hành trình</h3>
            <ol class="lesson-journey mt-3">${steps.map((step) => `<li><strong>${escapeHtml(step.label)}</strong><span>${escapeHtml(step.text)}</span></li>`).join("")}</ol>
        </section>`;
    };

    const videoResources = (items) => {
        const videos = Array.isArray(items) ? items : [];
        if (!videos.length) return "";
        return `<section class="mt-4">
            <h3 class="font-bold text-slate-900">Video minh họa đã kiểm tra</h3>
            <div class="mt-3 space-y-3">${videos.map((video) => `
                <article class="video-resource rounded-xl border border-blue-200 bg-blue-50 p-4">
                    <h4 class="font-bold text-blue-950">${escapeHtml(video.title)} — ${escapeHtml(video.publisher)}</h4>
                    <p class="mt-2"><strong>Đoạn xem:</strong> ${escapeHtml(video.segment)} / ${escapeHtml(video.duration)} · ${escapeHtml(video.language)}</p>
                    <p class="mt-2"><strong>Mục đích:</strong> ${escapeHtml(video.purpose)}</p>
                    <p class="mt-2"><strong>Trước khi xem:</strong> ${escapeHtml(video.before)}</p>
                    <p class="mt-2"><strong>Sau khi xem:</strong> ${escapeHtml(video.after)}</p>
                    <p class="mt-2"><a href="${escapeHtml(video.url)}" target="_blank" rel="noopener noreferrer">Mở video trên YouTube</a> · truy cập ${escapeHtml(video.accessed)}</p>
                    <p class="mt-2 text-sm"><strong>Khi mất mạng:</strong> ${escapeHtml(video.fallback)}</p>
                </article>`).join("")}</div>
        </section>`;
    };

    const inquiry = (items) => (Array.isArray(items) ? items : []).map((item, index) => `
        <section class="mt-3 rounded-xl border border-slate-200 bg-white p-4">
            <p class="font-semibold text-slate-900"><span class="mr-2 text-emerald-700">${escapeHtml(item.level || `Câu ${index + 1}`)}</span>${escapeHtml(item.question)}</p>
            ${item.hint ? `<p class="mt-2 text-slate-600"><strong>Gợi ý:</strong> ${escapeHtml(item.hint)}</p>` : ""}
            ${answer("Mở đáp án tham khảo", item.answer, item.feedback || "Nêu căn cứ từ nội dung vừa học, không chỉ đưa ra kết luận.")}
        </section>`).join("");

    const concepts = (items) => (Array.isArray(items) ? items : []).map((item, index) => `
        <article class="rounded-xl border border-emerald-200 bg-emerald-50 p-4 md:p-5">
            <div class="flex flex-wrap items-center justify-between gap-2">
                <h3 class="font-bold text-emerald-950">${escapeHtml(item.id || `DV${index + 1}`)} — ${escapeHtml(item.heading)}</h3>
                ${item.time ? `<span class="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900">${escapeHtml(item.time)}</span>` : ""}
            </div>
            ${item.source ? `<p class="mt-2 text-sm text-emerald-900"><strong>Đối chiếu nguồn:</strong> ${escapeHtml(item.source)}</p>` : ""}
            ${item.lead ? `<p class="mt-3 rounded-lg bg-white p-3 font-semibold text-slate-900">${escapeHtml(item.lead)}</p>` : ""}
            ${visualContent(item.visual)}
            ${detailSections(item.sections)}
            ${item.points?.length ? `<div class="mt-3">${list(item.points)}</div>` : ""}
            ${examples(item.examples)}
            ${item.questions?.length ? `<section class="mt-5"><h4 class="font-bold text-slate-900">Câu hỏi gợi mở</h4>${inquiry(item.questions)}</section>` : ""}
            ${learningClosure(item.closure, item.recap)}
        </article>`).join("");

    const practices = (items, checks) => (Array.isArray(items) ? items : []).map((item, index) => {
        const interactive = item.type === "single-choice" || item.type === "number";
        if (interactive) checks.push(item);
        return `<section class="rounded-xl border border-orange-200 bg-orange-50 p-4">
            <h3 class="font-bold text-orange-900">${escapeHtml(item.label || `Nhiệm vụ ${index + 1}`)}</h3>
            <p class="mt-2">${escapeHtml(item.question)}</p>
            ${interactive
                ? `<div class="lesson-check-placeholder mt-3"></div>`
                : `${item.options?.length ? `<ol class="mt-3 list-inside list-[upper-alpha] space-y-1">${item.options.map((option) => `<li>${escapeHtml(option)}</li>`).join("")}</ol>` : ""}
                   ${answer("Mở đáp án và phản hồi", item.answer, item.feedback || "Đối chiếu câu trả lời với kiến thức trọng tâm rồi sửa phần chưa chính xác.")}`}
        </section>`;
    }).join("");

    const table = (headers, rows) => `
        <div class="mt-4 overflow-x-auto">
            <table class="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead><tr>${headers.map((header) => `<th class="border border-slate-300 bg-slate-100 p-3 font-bold text-slate-900">${escapeHtml(header)}</th>`).join("")}</tr></thead>
                <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td class="border border-slate-300 p-3 align-top">${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
            </table>
        </div>`;

    const visualContent = (config) => {
        if (!config) return "";
        let body = "";
        if (config.type === "table") {
            body = table(config.headers || [], config.rows || []);
        } else if (config.type === "flow") {
            body = `<ol class="lesson-flow">${(config.steps || []).map((step) => `<li><strong>${escapeHtml(step.label)}</strong><span>${escapeHtml(step.text)}</span></li>`).join("")}</ol>`;
        } else if (config.type === "schema") {
            body = `<div class="lesson-schema">${(config.nodes || []).map((node) => `<section class="lesson-schema-node"><h5>${escapeHtml(node.title)}</h5>${list(node.fields || [], "mt-2 space-y-1")}</section>`).join("")}</div>
                ${(config.relations || []).length ? `<ul class="lesson-relations">${config.relations.map((relation) => `<li>${escapeHtml(relation)}</li>`).join("")}</ul>` : ""}`;
        } else {
            body = `<div class="lesson-visual-grid">${(config.items || []).map((item) => `<section class="lesson-visual-card">
                ${item.badge ? `<span>${escapeHtml(item.badge)}</span>` : ""}
                <h5>${escapeHtml(item.title)}</h5>
                <p>${escapeHtml(item.text)}</p>
            </section>`).join("")}</div>`;
        }
        return `<figure class="lesson-visual mt-4 rounded-xl border border-slate-200 bg-white p-4">
            <h4 class="font-bold text-slate-900">${escapeHtml(config.title)}</h4>
            ${body}
            ${config.caption ? `<figcaption class="mt-3 text-sm text-slate-600">${escapeHtml(config.caption)}</figcaption>` : ""}
        </figure>`;
    };

    const handsOn = (config) => {
        if (!config?.title) return "";
        return `<article class="rounded-xl border border-fuchsia-200 bg-fuchsia-50 p-4 md:p-5">
            <h3 class="font-bold text-fuchsia-950">${escapeHtml(config.title)}</h3>
            <p class="mt-2"><strong>Mục tiêu và sản phẩm:</strong> ${escapeHtml(config.product)}</p>
            ${config.preparation?.length ? `<h4 class="mt-4 font-bold text-slate-900">Chuẩn bị</h4>${list(config.preparation, "mt-2 space-y-2")}` : ""}
            ${config.prediction ? `<p class="mt-4 rounded-lg bg-white p-3"><strong>Dự đoán trước khi làm:</strong> ${escapeHtml(config.prediction)}</p>` : ""}
            ${table(["Bước", "Hành động", "Mục đích", "Dấu hiệu tự kiểm tra", "Lỗi và cách sửa"], config.steps || [])}
            ${config.evidence?.length ? `<h4 class="mt-4 font-bold text-slate-900">Minh chứng cần nộp</h4>${list(config.evidence, "mt-2 space-y-2")}` : ""}
            ${config.criteria?.length ? `<h4 class="mt-4 font-bold text-slate-900">Tiêu chí hoàn thành</h4>${list(config.criteria, "mt-2 space-y-2")}` : ""}
            ${config.checklist?.length ? `<h4 class="mt-4 font-bold text-slate-900">Tự đánh giá trước khi nộp</h4>${list(config.checklist, "mt-2 space-y-2")}` : ""}
            ${config.troubleshooting?.length ? `<h4 class="mt-4 font-bold text-slate-900">Khắc phục sự cố</h4>${table(["Biểu hiện", "Bước kiểm tra và cách sửa"], config.troubleshooting)}` : ""}
            ${config.fallback ? `<p class="mt-4"><strong>Phương án thay thế:</strong> ${escapeHtml(config.fallback)}</p>` : ""}
        </article>`;
    };

    const assessment = (config = {}) => {
        const items = Array.isArray(config.items) ? config.items : [];
        if (!items.length) return "";
        return `${items.map((item, index) => `
            <section class="rounded-xl border border-cyan-200 bg-cyan-50 p-4">
                <h3 class="font-bold text-cyan-950">Đánh giá ${index + 1} · ${escapeHtml(item.target)}</h3>
                <p class="mt-2">${escapeHtml(item.question)}</p>
                ${item.answer ? answer("Mở đáp án, tiêu chí và phản hồi", item.answer, item.feedback || "Đối chiếu minh chứng với mục tiêu được đo.") : ""}
                ${item.evidence ? `<p class="mt-3 text-sm text-slate-700"><strong>Minh chứng đạt:</strong> ${escapeHtml(item.evidence)}</p>` : ""}
            </section>`).join("")}
            <section class="mt-4 rounded-xl border border-slate-200 bg-white p-4">
                <h3 class="font-bold text-slate-900">Quy tắc kết luận</h3>
                ${config.threshold ? `<p class="mt-2"><strong>Ngưỡng đạt chung:</strong> ${escapeHtml(config.threshold)}</p>` : ""}
                ${config.rules?.length ? `<div class="mt-3">${list(config.rules)}</div>` : ""}
                ${config.retry?.length ? `<h4 class="mt-4 font-bold text-slate-900">Lộ trình học lại</h4>${list(config.retry, "mt-3 space-y-2")}` : ""}
            </section>`;
    };

    const traceability = (config = {}) => {
        const goalRows = Array.isArray(config.goals) ? config.goals : [];
        const unitRows = Array.isArray(config.units) ? config.units : [];
        const mediaRows = Array.isArray(config.media) ? config.media : [];
        if (!goalRows.length && !unitRows.length && !mediaRows.length) return "";
        return `${goalRows.length ? `<h3 class="font-bold text-slate-900">Mục tiêu → hoạt động → minh chứng</h3>${table(["Mục tiêu/YCCĐ", "Hoạt động KHBD", "Đơn vị/chặng", "Minh chứng", "Thời lượng"], goalRows)}` : ""}
            ${unitRows.length ? `<h3 class="mt-6 font-bold text-slate-900">Đơn vị bài học → nguồn → mức nhận thức</h3>${table(["Đơn vị", "Vị trí KHBD", "SGK", "Nội dung triển khai", "Mức cao nhất", "Độ lệch"], unitRows)}` : ""}
            ${mediaRows.length ? `<h3 class="mt-6 font-bold text-slate-900">Tư liệu bổ sung đã kiểm tra</h3>${table(["Tư liệu", "Đơn vị", "Mục đích", "Nguồn/URL", "Đoạn dùng", "Ngôn ngữ", "Ngày truy cập"], mediaRows)}` : ""}`;
    };

    window.createInteractiveLesson = (config) => {
        const periods = Number.isFinite(config.periods) && config.periods > 0 ? config.periods : null;
        const warmup = config.warmup || {};
        const application = config.application || {};
        const interactiveChecks = [];
        const practiceHtml = practices(config.practice, interactiveChecks);
        const handsOnHtml = handsOn(config.handsOn);
        const hasHandsOn = Boolean(handsOnHtml);
        const resources = config.resources?.length
            ? `<div class="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4"><h3 class="font-bold text-slate-900">Tư liệu, nguồn và điều kiện</h3>${list(config.resources, "mt-3 space-y-2")}${videoResources(config.videos)}</div>`
            : videoResources(config.videos);
        const applicationNumber = hasHandsOn ? "VI" : "V";
        const assessmentNumber = hasHandsOn ? "VII" : "VI";
        const traceabilityNumber = config.assessment?.items?.length
            ? (hasHandsOn ? "VIII" : "VII")
            : (hasHandsOn ? "VII" : "VI");

        const contentHtml = `<div class="space-y-5 text-left">
            ${panel({
                title: periods ? `I. Mục tiêu · ${periods} tiết` : "I. Mục tiêu", icon: "target", color: "bg-blue-700", open: true,
                body: `<p class="mb-4 rounded-xl bg-blue-50 p-4 font-semibold text-blue-950">${escapeHtml(config.overview)}</p>${list(config.goals)}${journey(config.journey)}${resources}`
            })}
            ${panel({
                title: `II. Khởi động${warmup.time ? ` · ${escapeHtml(warmup.time)}` : ""}`, icon: "sparkles", color: "bg-indigo-700",
                body: `<p class="font-semibold text-slate-900">Tình huống:</p><p class="mt-2">${escapeHtml(warmup.question)}</p>${answer("Mở gợi ý sau khi đã suy nghĩ", warmup.answer || "Trao đổi dựa trên trải nghiệm và dữ kiện của bài học.", warmup.feedback || "Câu trả lời cần liên hệ trực tiếp với vấn đề của bài học.")}`
            })}
            ${panel({
                title: "III. Khám phá và hình thành kiến thức", icon: "book-open", color: "bg-emerald-700",
                body: `<div class="space-y-4">${concepts(config.concepts)}</div>`
            })}
            ${panel({
                title: `IV. Luyện tập có phản hồi${config.practiceTime ? ` · ${escapeHtml(config.practiceTime)}` : ""}`, icon: "circle-check-big", color: "bg-orange-600",
                body: `<div class="space-y-4">${practiceHtml}</div>`
            })}
            ${hasHandsOn ? panel({
                title: "V. Thực hành", icon: "laptop", color: "bg-fuchsia-700",
                body: handsOnHtml
            }) : ""}
            ${panel({
                title: `${applicationNumber}. Vận dụng và tự đánh giá${application.time ? ` · ${escapeHtml(application.time)}` : ""}`, icon: "rocket", color: "bg-violet-700",
                body: `<section class="rounded-xl border border-violet-200 bg-violet-50 p-4"><h3 class="font-bold text-violet-950">Sản phẩm vận dụng</h3><p class="mt-2">${escapeHtml(application.task)}</p><h4 class="mt-4 font-bold text-slate-900">Tiêu chí hoàn thành</h4>${list(application.criteria)}${application.support?.length ? `<h4 class="mt-4 font-bold text-slate-900">Hỗ trợ khi gặp khó khăn</h4>${list(application.support)}` : ""}</section><section class="mt-4 rounded-xl border border-slate-200 p-4"><h3 class="font-bold text-slate-900">Tự đánh giá</h3>${list(["Tôi giải thích được kiến thức chính bằng lời của mình.", "Tôi hoàn thành nhiệm vụ và kiểm tra lại sản phẩm.", "Tôi biết bước cần luyện thêm nếu chưa đạt."])}</section>`
            })}
            ${config.assessment?.items?.length ? panel({
                title: `${assessmentNumber}. Đánh giá cuối bài`, icon: "clipboard-check", color: "bg-cyan-700",
                body: `<div class="space-y-4">${assessment(config.assessment)}</div>`
            }) : ""}
            ${(config.traceability?.goals?.length || config.traceability?.units?.length || config.traceability?.media?.length) ? panel({
                title: `${traceabilityNumber}. Đối chiếu KHBD – SGK – bài học`, icon: "table-properties", color: "bg-slate-700",
                body: traceability(config.traceability)
            }) : ""}
        </div>`;

        return {
            title: config.title,
            videoId: config.videoId || "",
            desc: config.overview,
            downloadUrl: config.downloadUrl || "#",
            contentHtml,
            interactiveChecks
        };
    };
})();
