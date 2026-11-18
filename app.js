(() => {
    "use strict";

    const PDF_JS_URL = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
    const PDF_WORKER_URL = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
    const MATHJAX_URL = "https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-chtml.js";
    const FOCUSABLE = "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])";
    const SAFE_CONTENT_TAGS = new Set([
        "A", "B", "BR", "CODE", "DETAILS", "DIV", "EM", "H3", "H4", "HR", "I", "IFRAME",
        "LI", "OL", "P", "PRE", "SPAN", "STRONG", "SUMMARY", "TABLE", "TBODY", "TD", "TH",
        "THEAD", "TR", "U", "UL"
    ]);
    const DROP_WITH_CONTENT = new Set(["SCRIPT", "STYLE", "OBJECT", "EMBED", "FORM", "INPUT", "BUTTON", "LINK", "META"]);
    const courseCache = new Map();
    const scriptPromises = new Map();

    const state = {
        activeCourse: null,
        activeChapter: -1,
        activeLesson: -1,
        routeSequence: 0,
        modalTrigger: null,
        drawerOpen: false,
        pdfDoc: null,
        pdfPage: 1,
        pdfPages: 0,
        pdfGeneration: 0,
        pdfRendering: false
    };

    const byId = (id) => document.getElementById(id);
    const make = (tag, className, text) => {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (text !== undefined) element.textContent = text;
        return element;
    };

    function refreshIcons(root = document) {
        if (window.lucide && typeof window.lucide.createIcons === "function") {
            window.lucide.createIcons({ root, attrs: { "aria-hidden": "true" } });
        }
    }

    function setMessage(message) {
        const region = byId("app-message");
        region.textContent = message || "";
        region.hidden = !message;
    }

    function isHttpUrl(value) {
        try {
            const parsed = new URL(String(value).trim());
            return parsed.protocol === "https:" || parsed.protocol === "http:";
        } catch {
            return false;
        }
    }

    function safeResourceUrl(value) {
        const raw = typeof value === "string" ? value.trim() : "";
        if (!raw || raw === "#") return null;
        try {
            const parsed = new URL(raw, document.baseURI);
            if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return null;
            if (parsed.origin !== window.location.origin && !/^https?:\/\//i.test(raw)) return null;
            return parsed.href;
        } catch {
            return null;
        }
    }

    function safeContentLink(value) {
        const raw = typeof value === "string" ? value.trim() : "";
        if (!raw) return null;
        try {
            const parsed = new URL(raw);
            return ["https:", "http:", "mailto:"].includes(parsed.protocol) ? parsed.href : null;
        } catch {
            return null;
        }
    }

    function safeYouTubeEmbed(value) {
        try {
            const parsed = new URL(String(value).trim());
            const host = parsed.hostname.toLowerCase();
            if (parsed.protocol !== "https:" || !["youtube.com", "www.youtube.com"].includes(host)) return null;
            if (!/^\/embed\/[A-Za-z0-9_-]{11}$/.test(parsed.pathname)) return null;
            return parsed.href;
        } catch {
            return null;
        }
    }

    function allCourses() {
        if (!window.courses || typeof window.courses !== "object") return [];
        return Object.values(window.courses).flatMap((group) => Array.isArray(group) ? group : []);
    }

    function findCourse(id) {
        return allCourses().find((course) => course && course.id === id) || null;
    }

    function icon(name, className) {
        const node = make("i", className);
        node.setAttribute("data-lucide", /^[a-z0-9-]+$/.test(name || "") ? name : "book-open");
        node.setAttribute("aria-hidden", "true");
        return node;
    }

    function syncTeacher() {
        const teacher = window.teacherInfo || {};
        const name = typeof teacher.name === "string" && teacher.name.trim() ? teacher.name.trim() : "Giáo viên Tin học";
        const role = typeof teacher.role === "string" ? teacher.role.trim() : "";
        const email = typeof teacher.email === "string" ? teacher.email.trim() : "";
        byId("teacher-name").textContent = name;
        byId("teacher-role").textContent = role;
        byId("teacher-name-small").textContent = name;
        byId("teacher-email-small").textContent = email;

        const avatarUrl = isHttpUrl(teacher.avatar) ? teacher.avatar.trim() : "BenTreHighSchool.jpg";
        [byId("teacher-avatar"), byId("teacher-avatar-small")].forEach((image) => {
            image.src = avatarUrl;
            image.alt = `Ảnh đại diện ${name}`;
            image.addEventListener("error", () => { image.src = "BenTreHighSchool.jpg"; }, { once: true });
        });

        setContactLink(byId("teacher-facebook"), teacher.facebook, false);
        setContactLink(byId("teacher-zalo"), teacher.zalo, false);
        setContactLink(byId("teacher-email"), email ? `mailto:${email}` : "", true);
    }

    function setContactLink(element, value, allowMail) {
        const url = allowMail ? safeContentLink(value) : (isHttpUrl(value) ? String(value).trim() : null);
        element.hidden = !url;
        if (url) element.href = url;
    }

    function renderDashboard() {
        const content = byId("dashboard-content");
        content.replaceChildren();
        const sections = [
            { label: "Chương trình Chính khóa", key: "chinhKhoa", icon: "book-open" },
            { label: "Lớp Chuyên Tin", key: "chuyenTin", icon: "code-2" },
            { label: "Chuyên đề tự chọn", key: "chuyenDe", icon: "layers" },
            { label: "Nội dung khác", key: "khac", icon: "more-horizontal" }
        ];

        sections.forEach((sectionData) => {
            const courses = window.courses && Array.isArray(window.courses[sectionData.key])
                ? window.courses[sectionData.key]
                : [];
            if (!courses.length) return;

            const section = make("section", "course-section");
            section.setAttribute("aria-labelledby", `section-${sectionData.key}`);
            const heading = make("div", "section-heading");
            const headingIcon = make("span", "section-heading-icon");
            headingIcon.append(icon(sectionData.icon));
            const title = make("h2", "", sectionData.label);
            title.id = `section-${sectionData.key}`;
            heading.append(headingIcon, title);

            const grid = make("div", "course-grid");
            courses.forEach((course) => grid.append(createCourseCard(course)));
            section.append(heading, grid);
            content.append(section);
        });
        refreshIcons(content);
    }

    function createCourseCard(course) {
        const available = course && course.available !== false;
        const button = make("button", "course-card");
        button.type = "button";
        button.disabled = !available;
        if (!available) button.setAttribute("aria-label", `${course.title}. Khóa học chưa khả dụng`);

        const courseIcon = make("span", "course-icon");
        courseIcon.append(icon(course.icon || "star"));
        const title = make("h3", "", course.title || "Khóa học");
        const description = make("p", "", course.description || "Học liệu điện tử môn Tin học.");
        const action = make("span", "course-action", available ? "Vào học" : "Chưa khả dụng");
        button.append(courseIcon, title, description, action);
        if (available) {
            button.addEventListener("click", () => navigateToLesson(course.id, 0, 0));
        }
        return button;
    }

    function renderTools() {
        const grid = byId("tools-grid");
        grid.replaceChildren();
        const tools = Array.isArray(window.teachingTools) ? window.teachingTools : [];
        if (!tools.length) {
            grid.append(make("p", "empty-tools", "Chưa có công cụ nào được cấu hình."));
            return;
        }
        tools.forEach((tool) => {
            if (!isHttpUrl(tool.url)) return;
            const link = make("a", "tool-card");
            link.href = tool.url.trim();
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            const toolIcon = make("span", "tool-icon");
            toolIcon.append(icon(tool.icon || "wrench"));
            const copy = make("div");
            copy.append(
                make("h3", "", tool.title || "Công cụ"),
                make("p", "", tool.description || "Mở công cụ dạy học.")
            );
            link.append(toolIcon, copy);
            grid.append(link);
        });
        refreshIcons(grid);
    }

    function openTools() {
        state.modalTrigger = document.activeElement;
        renderTools();
        byId("tools-modal").hidden = false;
        document.body.classList.add("modal-open");
        requestAnimationFrame(() => byId("tools-close").focus());
    }

    function closeTools() {
        if (byId("tools-modal").hidden) return;
        byId("tools-modal").hidden = true;
        document.body.classList.remove("modal-open");
        if (state.modalTrigger && typeof state.modalTrigger.focus === "function") state.modalTrigger.focus();
        state.modalTrigger = null;
    }

    function trapModalFocus(event) {
        if (event.key !== "Tab" || byId("tools-modal").hidden) return;
        const focusable = [...byId("tools-modal").querySelectorAll(FOCUSABLE)].filter((node) => !node.hidden);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }

    function parseRoute() {
        const hash = window.location.hash || "#/";
        if (hash === "#/" || hash === "#") return { view: "dashboard" };
        const match = hash.match(/^#\/([A-Za-z0-9_-]+)\/(\d+)\/(\d+)$/);
        if (!match) return { view: "invalid" };
        return { view: "lesson", courseId: match[1], chapter: Number(match[2]), lesson: Number(match[3]) };
    }

    function navigateToLesson(courseId, chapter, lesson) {
        const next = `#/${courseId}/${chapter}/${lesson}`;
        if (window.location.hash === next) handleRoute();
        else window.location.hash = next;
    }

    async function handleRoute() {
        const sequence = ++state.routeSequence;
        const route = parseRoute();
        closeDrawer(false);
        if (route.view === "dashboard") {
            showDashboard();
            return;
        }
        if (route.view === "invalid") {
            showDashboard("Địa chỉ bài học không hợp lệ.");
            return;
        }

        const course = findCourse(route.courseId);
        if (!course || course.available === false) {
            showDashboard(course ? "Khóa học này hiện chưa khả dụng." : "Không tìm thấy khóa học.");
            return;
        }

        setLoading(true);
        try {
            const content = await loadCourse(course);
            if (sequence !== state.routeSequence) return;
            const chapter = content[route.chapter];
            const lesson = chapter && Array.isArray(chapter.lessons) ? chapter.lessons[route.lesson] : null;
            if (!lesson) {
                showDashboard("Không tìm thấy bài học theo địa chỉ đã chọn.");
                return;
            }
            state.activeCourse = { ...course, content };
            showLearning();
            renderPlaylist();
            renderLesson(route.chapter, route.lesson);
        } catch {
            if (sequence === state.routeSequence) showDashboard("Không thể tải dữ liệu khóa học. Vui lòng thử lại sau.");
        } finally {
            if (sequence === state.routeSequence) setLoading(false);
        }
    }

    function loadCourse(course) {
        if (courseCache.has(course.id)) return Promise.resolve(courseCache.get(course.id));
        if (!/^(?:[A-Za-z0-9_-]+\/)*[A-Za-z0-9_-]+\.js$/.test(course.dataPath || "")) {
            return Promise.reject(new Error("Invalid course path"));
        }
        return new Promise((resolve, reject) => {
            const previous = byId("course-data-script");
            if (previous) previous.remove();
            window.courseContent = null;
            const script = document.createElement("script");
            script.id = "course-data-script";
            script.src = course.dataPath;
            script.async = true;
            script.addEventListener("load", () => {
                if (!Array.isArray(window.courseContent)) {
                    reject(new Error("Invalid course data"));
                    return;
                }
                const content = window.courseContent;
                courseCache.set(course.id, content);
                resolve(content);
            }, { once: true });
            script.addEventListener("error", () => reject(new Error("Course load failed")), { once: true });
            document.head.append(script);
        });
    }

    function setLoading(loading) {
        byId("loader").hidden = !loading;
    }

    function showDashboard(message = "") {
        setLoading(false);
        state.activeChapter = -1;
        state.activeLesson = -1;
        state.pdfDoc = null;
        byId("main-video").src = "about:blank";
        byId("pdf-iframe").src = "about:blank";
        byId("learning-screen").hidden = true;
        byId("dashboard").hidden = false;
        setMessage(message);
        renderDashboard();
        document.title = "Hệ thống học tập - THPT Chuyên Bến Tre";
    }

    function showLearning() {
        setMessage("");
        byId("dashboard").hidden = true;
        byId("learning-screen").hidden = false;
        byId("sidebar-course-title").textContent = state.activeCourse.title;
    }

    function renderPlaylist() {
        const playlist = byId("playlist-container");
        playlist.replaceChildren();
        state.activeCourse.content.forEach((chapter, chapterIndex) => {
            const heading = make("h3", "chapter-title", chapter.chapterName || `Chương ${chapterIndex + 1}`);
            playlist.append(heading);
            const lessons = Array.isArray(chapter.lessons) ? chapter.lessons : [];
            lessons.forEach((lesson, lessonIndex) => {
                const button = make("button", "lesson-button");
                button.type = "button";
                button.id = `lesson-${chapterIndex}-${lessonIndex}`;
                button.append(
                    make("span", "lesson-number", String(lessonIndex + 1)),
                    make("span", "lesson-name", lesson.title || `Bài ${lessonIndex + 1}`)
                );
                if (lesson.pdfUrl) button.append(make("span", "lesson-badge", "PDF"));
                else if (validVideoId(lesson.videoId)) button.append(make("span", "lesson-badge", "Video"));
                button.addEventListener("click", () => navigateToLesson(state.activeCourse.id, chapterIndex, lessonIndex));
                playlist.append(button);
            });
        });
    }

    function validVideoId(value) {
        return typeof value === "string" && /^[A-Za-z0-9_-]{11}$/.test(value.trim());
    }

    function renderLesson(chapterIndex, lessonIndex) {
        const lesson = state.activeCourse.content[chapterIndex].lessons[lessonIndex];
        state.activeChapter = chapterIndex;
        state.activeLesson = lessonIndex;
        document.querySelectorAll(".lesson-button[aria-current]").forEach((button) => button.removeAttribute("aria-current"));
        const activeButton = byId(`lesson-${chapterIndex}-${lessonIndex}`);
        if (activeButton) activeButton.setAttribute("aria-current", "page");

        byId("lesson-title").textContent = lesson.title || `Bài ${lessonIndex + 1}`;
        byId("lesson-description").textContent = lesson.desc || "";
        renderDownload(lesson.downloadUrl);
        renderLessonContent(lesson);
        renderMedia(lesson);
        document.title = `${lesson.title || "Bài học"} - ${state.activeCourse.title}`;
        if (window.matchMedia("(max-width: 47.99rem)").matches) closeDrawer(false);
    }

    function renderDownload(value) {
        const zone = byId("download-zone");
        zone.replaceChildren();
        const url = safeResourceUrl(value);
        if (!url) return;
        const link = make("a", "download-link");
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.append(icon("download-cloud"), make("span", "", "Tải tài liệu"));
        zone.append(link);
    }

    function renderLessonContent(lesson) {
        const target = byId("lesson-content");
        target.replaceChildren();
        if (typeof lesson.contentHtml === "string" && lesson.contentHtml.trim()) {
            target.append(sanitizeContent(lesson.contentHtml));
        } else if (Array.isArray(lesson.activities) && lesson.activities.length) {
            lesson.activities.forEach((activity) => {
                const card = make("section", "activity-card");
                card.append(make("strong", "", activity.type || "Hoạt động"), make("p", "", activity.content || ""));
                target.append(card);
            });
        }
        refreshIcons(target);
        if (needsMath(target.textContent)) typesetMath(target);
    }

    function sanitizeContent(markup) {
        const parsed = new DOMParser().parseFromString(String(markup), "text/html");
        const fragment = document.createDocumentFragment();
        parsed.body.childNodes.forEach((node) => fragment.append(cloneSafeNode(node)));
        return fragment;
    }

    function cloneSafeNode(node) {
        if (node.nodeType === Node.TEXT_NODE) return document.createTextNode(node.textContent || "");
        if (node.nodeType !== Node.ELEMENT_NODE) return document.createDocumentFragment();
        const tag = node.tagName.toUpperCase();
        if (DROP_WITH_CONTENT.has(tag)) return document.createDocumentFragment();
        if (!SAFE_CONTENT_TAGS.has(tag)) {
            const unwrapped = document.createDocumentFragment();
            node.childNodes.forEach((child) => unwrapped.append(cloneSafeNode(child)));
            return unwrapped;
        }

        const clean = document.createElement(tag.toLowerCase());
        copySafeAttributes(node, clean, tag);
        node.childNodes.forEach((child) => clean.append(cloneSafeNode(child)));
        return clean;
    }

    function copySafeAttributes(source, target, tag) {
        const className = source.getAttribute("class");
        if (className && !/(?:url\s*\(|expression\s*\(|javascript:|data:)/i.test(className)) target.className = className;
        if (tag === "DETAILS" && source.hasAttribute("open")) target.open = true;
        if (tag === "I") {
            const iconName = source.getAttribute("data-lucide") || "";
            if (/^[a-z0-9-]+$/.test(iconName)) target.setAttribute("data-lucide", iconName);
            target.setAttribute("aria-hidden", "true");
        }
        if (tag === "A") {
            const href = safeContentLink(source.getAttribute("href"));
            if (href) target.href = href;
            if (source.getAttribute("target") === "_blank") {
                target.target = "_blank";
                target.rel = "noopener noreferrer";
            }
        }
        if ((tag === "TD" || tag === "TH") && source.hasAttribute("rowspan")) {
            const rows = Number(source.getAttribute("rowspan"));
            if (Number.isInteger(rows) && rows >= 1 && rows <= 20) target.rowSpan = rows;
        }
        if (tag === "IFRAME") {
            const src = safeYouTubeEmbed(source.getAttribute("src"));
            if (src) target.src = src;
            else target.hidden = true;
            target.title = "Video bài học bổ sung";
            target.loading = "lazy";
            target.referrerPolicy = "strict-origin-when-cross-origin";
            if (source.getAttribute("frameborder") === "0") target.setAttribute("frameborder", "0");
            if (source.hasAttribute("allowfullscreen")) target.setAttribute("allowfullscreen", "");
        }
    }

    function needsMath(text) {
        return /\$[^$\n]+\$|\\\(|\\\[/.test(text || "");
    }

    function loadScriptOnce(url, globalTest) {
        if (globalTest()) return Promise.resolve();
        if (scriptPromises.has(url)) return scriptPromises.get(url);
        const promise = new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = url;
            script.async = true;
            script.referrerPolicy = "no-referrer";
            script.addEventListener("load", resolve, { once: true });
            script.addEventListener("error", reject, { once: true });
            document.head.append(script);
        });
        scriptPromises.set(url, promise);
        return promise;
    }

    function typesetMath(container) {
        if (!window.MathJax) {
            window.MathJax = {
                tex: { inlineMath: [["$", "$"], ["\\(", "\\)"]] },
                svg: { fontCache: "global" }
            };
        }
        loadScriptOnce(MATHJAX_URL, () => Boolean(window.MathJax && window.MathJax.typesetPromise))
            .then(() => window.MathJax.typesetPromise([container]))
            .catch(() => {
                if (!container.querySelector(".dependency-message")) {
                    container.append(make("p", "dependency-message", "Không thể tải bộ hiển thị công thức. Nội dung gốc vẫn được giữ nguyên."));
                }
            });
    }

    function resetMedia() {
        state.pdfGeneration += 1;
        state.pdfRendering = false;
        byId("video-wrapper").hidden = true;
        byId("pdf-wrapper").hidden = true;
        byId("media-empty").hidden = true;
        byId("main-video").src = "about:blank";
        byId("pdf-iframe").src = "about:blank";
        state.pdfDoc = null;
    }

    function renderMedia(lesson) {
        resetMedia();
        const generation = state.pdfGeneration;
        const pdfUrl = safeResourceUrl(lesson.pdfUrl);
        if (pdfUrl) {
            loadPdf(pdfUrl, lesson.title || "Tài liệu PDF", generation);
        } else if (validVideoId(lesson.videoId)) {
            byId("video-wrapper").hidden = false;
            byId("main-video").src = `https://www.youtube.com/embed/${lesson.videoId.trim()}?autoplay=1&rel=0`;
        } else {
            byId("media-empty").hidden = false;
        }
    }

    function toGoogleDriveEmbed(url) {
        const fileMatch = url.match(/drive\.google\.com\/file\/d\/([A-Za-z0-9_-]+)/);
        const openMatch = url.match(/drive\.google\.com\/open\?id=([A-Za-z0-9_-]+)/);
        const id = fileMatch ? fileMatch[1] : (openMatch ? openMatch[1] : null);
        return id ? { preview: `https://drive.google.com/file/d/${id}/preview`, download: `https://drive.google.com/uc?export=download&id=${id}` } : null;
    }

    function toOneDriveEmbed(url) {
        try {
            const host = new URL(url).hostname.toLowerCase();
            if (host === "onedrive.live.com" || host === "1drv.ms") {
                return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(url)}`;
            }
        } catch {
            return null;
        }
        return null;
    }

    async function loadPdf(url, filename, generation) {
        if (generation !== state.pdfGeneration) return;
        byId("pdf-wrapper").hidden = false;
        byId("pdf-filename").textContent = filename;
        byId("pdf-download").href = url;
        state.pdfPage = 1;
        state.pdfPages = 0;
        state.pdfDoc = null;
        resetPdfLoading();

        const drive = toGoogleDriveEmbed(url);
        const oneDrive = toOneDriveEmbed(url);
        if (drive || oneDrive) {
            byId("pdf-canvas-container").hidden = true;
            byId("pdf-iframe-container").hidden = false;
            byId("pdf-iframe").src = drive ? drive.preview : oneDrive;
            if (drive) byId("pdf-download").href = drive.download;
            byId("pdf-current-page").textContent = "–";
            byId("pdf-total-pages").textContent = "–";
            byId("pdf-prev").disabled = true;
            byId("pdf-next").disabled = true;
            return;
        }

        byId("pdf-canvas-container").hidden = false;
        byId("pdf-iframe-container").hidden = true;
        try {
            await loadScriptOnce(PDF_JS_URL, () => Boolean(window.pdfjsLib));
            if (generation !== state.pdfGeneration) return;
            window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDF_WORKER_URL;
            const task = window.pdfjsLib.getDocument(url);
            const pdfDocument = await task.promise;
            if (generation !== state.pdfGeneration) {
                pdfDocument.destroy();
                return;
            }
            state.pdfDoc = pdfDocument;
            state.pdfPages = pdfDocument.numPages;
            byId("pdf-total-pages").textContent = String(state.pdfPages);
            await renderPdfPage(1, generation, pdfDocument);
        } catch {
            if (generation === state.pdfGeneration) showPdfError(url);
        }
    }

    function resetPdfLoading() {
        const loading = byId("pdf-loading");
        loading.replaceChildren();
        const spinner = make("span", "spinner");
        spinner.setAttribute("aria-hidden", "true");
        loading.append(spinner, make("span", "", "Đang tải PDF…"));
        loading.hidden = false;
        byId("pdf-canvas").hidden = true;
        byId("pdf-current-page").textContent = "1";
        byId("pdf-total-pages").textContent = "?";
        byId("pdf-prev").disabled = true;
        byId("pdf-next").disabled = true;
    }

    function showPdfError(url) {
        const loading = byId("pdf-loading");
        loading.replaceChildren();
        const message = make("p", "", "Không thể tải file PDF.");
        const link = make("a", "download-link", "Mở trực tiếp");
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        loading.append(message, link);
    }

    async function renderPdfPage(pageNumber, generation = state.pdfGeneration, pdfDocument = state.pdfDoc) {
        if (!pdfDocument || state.pdfRendering || generation !== state.pdfGeneration) return;
        state.pdfRendering = true;
        try {
            const page = await pdfDocument.getPage(pageNumber);
            if (generation !== state.pdfGeneration) return;
            const container = byId("pdf-canvas-container");
            const base = page.getViewport({ scale: 1 });
            const scale = Math.min(1.8, Math.max(1, (container.clientWidth - 32) / base.width));
            const viewport = page.getViewport({ scale });
            const buffer = document.createElement("canvas");
            buffer.width = viewport.width;
            buffer.height = viewport.height;
            await page.render({ canvasContext: buffer.getContext("2d"), viewport }).promise;
            if (generation !== state.pdfGeneration) return;
            const canvas = byId("pdf-canvas");
            canvas.width = buffer.width;
            canvas.height = buffer.height;
            canvas.getContext("2d").drawImage(buffer, 0, 0);
            state.pdfPage = pageNumber;
            byId("pdf-current-page").textContent = String(pageNumber);
            byId("pdf-prev").disabled = pageNumber <= 1;
            byId("pdf-next").disabled = pageNumber >= state.pdfPages;
            byId("pdf-loading").hidden = true;
            canvas.hidden = false;
        } catch {
            if (generation === state.pdfGeneration) showPdfError(byId("pdf-download").href);
        } finally {
            if (generation === state.pdfGeneration) state.pdfRendering = false;
        }
    }

    function changePdfPage(delta) {
        const next = state.pdfPage + delta;
        if (next >= 1 && next <= state.pdfPages) renderPdfPage(next);
    }

    function syncDrawerAccessibility() {
        const sidebar = byId("lesson-sidebar");
        const hiddenOnMobile = window.matchMedia("(max-width: 47.99rem)").matches && !state.drawerOpen;
        sidebar.toggleAttribute("inert", hiddenOnMobile);
        if (hiddenOnMobile) sidebar.setAttribute("aria-hidden", "true");
        else sidebar.removeAttribute("aria-hidden");
    }

    function openDrawer() {
        state.drawerOpen = true;
        syncDrawerAccessibility();
        byId("lesson-sidebar").classList.add("is-open");
        byId("drawer-backdrop").hidden = false;
        byId("lesson-drawer-toggle").setAttribute("aria-expanded", "true");
        byId("lesson-drawer-close").focus();
    }

    function closeDrawer(restoreFocus = true) {
        state.drawerOpen = false;
        byId("lesson-sidebar").classList.remove("is-open");
        byId("drawer-backdrop").hidden = true;
        byId("lesson-drawer-toggle").setAttribute("aria-expanded", "false");
        syncDrawerAccessibility();
        if (restoreFocus) byId("lesson-drawer-toggle").focus();
    }

    function bindEvents() {
        byId("tools-open").addEventListener("click", openTools);
        byId("tools-close").addEventListener("click", closeTools);
        byId("tools-modal").addEventListener("mousedown", (event) => {
            if (event.target === byId("tools-modal")) closeTools();
        });
        byId("lesson-drawer-toggle").addEventListener("click", () => state.drawerOpen ? closeDrawer() : openDrawer());
        byId("lesson-drawer-close").addEventListener("click", () => closeDrawer());
        byId("drawer-backdrop").addEventListener("click", () => closeDrawer());
        byId("pdf-prev").addEventListener("click", () => changePdfPage(-1));
        byId("pdf-next").addEventListener("click", () => changePdfPage(1));
        window.matchMedia("(max-width: 47.99rem)").addEventListener("change", () => {
            if (!window.matchMedia("(max-width: 47.99rem)").matches) state.drawerOpen = false;
            syncDrawerAccessibility();
        });
        window.addEventListener("hashchange", handleRoute);
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && !byId("tools-modal").hidden) {
                event.preventDefault();
                closeTools();
                return;
            }
            if (event.key === "Escape" && state.drawerOpen) {
                event.preventDefault();
                closeDrawer();
                return;
            }
            trapModalFocus(event);
            if (!byId("pdf-wrapper").hidden && !state.modalTrigger) {
                if (event.key === "ArrowRight" || event.key === "ArrowDown") changePdfPage(1);
                if (event.key === "ArrowLeft" || event.key === "ArrowUp") changePdfPage(-1);
            }
        });
    }

    function initialize() {
        syncTeacher();
        renderDashboard();
        bindEvents();
        syncDrawerAccessibility();
        refreshIcons();
        if (!window.location.hash) window.history.replaceState(null, "", "#/");
        handleRoute();
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize, { once: true });
    else initialize();
})();
