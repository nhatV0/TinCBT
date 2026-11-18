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
                    <span>${escapeHtml(title)}</span>
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
            ${detailSections(item.sections)}
            ${item.points?.length ? `<div class="mt-3">${list(item.points)}</div>` : ""}
            ${examples(item.examples)}
            ${item.questions?.length ? `<section class="mt-5"><h4 class="font-bold text-slate-900">Câu hỏi gợi mở</h4>${inquiry(item.questions)}</section>` : ""}
            ${item.recap?.length ? `<section class="mt-4 rounded-xl border border-emerald-300 bg-white p-4"><h4 class="font-bold text-emerald-950">Điều cần ghi nhớ</h4>${list(item.recap, "mt-3 space-y-2")}</section>` : ""}
        </article>`).join("");

    const practices = (items) => (Array.isArray(items) ? items : []).map((item, index) => `
        <section class="rounded-xl border border-orange-200 bg-orange-50 p-4">
            <h3 class="font-bold text-orange-900">Nhiệm vụ ${index + 1}</h3>
            <p class="mt-2">${escapeHtml(item.question)}</p>
            ${item.options?.length ? `<ol class="mt-3 list-inside list-[upper-alpha] space-y-1">${item.options.map((option) => `<li>${escapeHtml(option)}</li>`).join("")}</ol>` : ""}
            ${answer("Mở đáp án và phản hồi", item.answer, item.feedback || "Đối chiếu câu trả lời với kiến thức trọng tâm rồi sửa phần chưa chính xác.")}
        </section>`).join("");

    window.createInteractiveLesson = (config) => {
        const periods = Number.isFinite(config.periods) && config.periods > 0 ? config.periods : null;
        const warmup = config.warmup || {};
        const application = config.application || {};
        const resources = config.resources?.length
            ? `<div class="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4"><h3 class="font-bold text-slate-900">Tư liệu và điều kiện</h3>${list(config.resources, "mt-3 space-y-2")}</div>`
            : "";

        const contentHtml = `<div class="space-y-5 text-left">
            ${panel({
                title: periods ? `I. Mục tiêu · ${periods} tiết` : "I. Mục tiêu", icon: "target", color: "bg-blue-700", open: true,
                body: `<p class="mb-4 rounded-xl bg-blue-50 p-4 font-semibold text-blue-950">${escapeHtml(config.overview)}</p>${list(config.goals)}${resources}`
            })}
            ${panel({
                title: "II. Khởi động", icon: "sparkles", color: "bg-indigo-700",
                body: `<p class="font-semibold text-slate-900">Tình huống:</p><p class="mt-2">${escapeHtml(warmup.question)}</p>${answer("Mở gợi ý sau khi đã suy nghĩ", warmup.answer || "Trao đổi dựa trên trải nghiệm và dữ kiện của bài học.", warmup.feedback || "Câu trả lời cần liên hệ trực tiếp với vấn đề của bài học.")}`
            })}
            ${panel({
                title: "III. Khám phá và hình thành kiến thức", icon: "book-open", color: "bg-emerald-700",
                body: `<div class="space-y-4">${concepts(config.concepts)}</div>`
            })}
            ${panel({
                title: "IV. Luyện tập có phản hồi", icon: "circle-check-big", color: "bg-orange-600",
                body: `<div class="space-y-4">${practices(config.practice)}</div>`
            })}
            ${panel({
                title: "V. Vận dụng và tự đánh giá", icon: "rocket", color: "bg-violet-700",
                body: `<section class="rounded-xl border border-violet-200 bg-violet-50 p-4"><h3 class="font-bold text-violet-950">Sản phẩm vận dụng</h3><p class="mt-2">${escapeHtml(application.task)}</p><h4 class="mt-4 font-bold text-slate-900">Tiêu chí hoàn thành</h4>${list(application.criteria)}${application.support?.length ? `<h4 class="mt-4 font-bold text-slate-900">Hỗ trợ khi gặp khó khăn</h4>${list(application.support)}` : ""}</section><section class="mt-4 rounded-xl border border-slate-200 p-4"><h3 class="font-bold text-slate-900">Tự đánh giá</h3>${list(["Tôi giải thích được kiến thức chính bằng lời của mình.", "Tôi hoàn thành nhiệm vụ và kiểm tra lại sản phẩm.", "Tôi biết bước cần luyện thêm nếu chưa đạt."])}</section>`
            })}
        </div>`;

        return {
            title: config.title,
            videoId: config.videoId || "",
            desc: config.overview,
            downloadUrl: config.downloadUrl || "#",
            contentHtml
        };
    };
})();
