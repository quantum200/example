document.addEventListener("DOMContentLoaded", () => {
    let currentMode = "";

    async function loadContent(file, mode) {
        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error("Ошибка загрузки " + file);

            const html = await response.text();
            if (currentMode !== mode) return;

            // заменяем содержимое
            document.getElementById("app").innerHTML = html;

            // !!! каждый раз инициализируем UI после подгрузки
            initUI();
        } catch (err) {
            document.getElementById("app").innerHTML =
                "<p style='color:red'>Не удалось загрузить " + file + "</p>";
            console.error(err);
        }
    }

    function checkScreenSize() {
        const width = window.innerWidth;
        let newMode = width <= 425 ? "mobile" : "desktop";

        if (newMode !== currentMode) {
            currentMode = newMode;
            if (newMode === "mobile") {
                loadContent("main_phone.html", "mobile");
            } else {
                loadContent("desktop_index.html", "desktop");
            }
        }
    }

    function initUI() {
        document.querySelectorAll(".filter-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                document
                    .querySelectorAll(".filter-btn")
                    .forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");
            });
        });
        const burger = document.querySelector(".burger-menu");
        const actions = document.querySelector(".actions");
        if (burger && actions) {
            burger.addEventListener("click", function () {
                this.classList.toggle("active");
                actions.classList.toggle("active");
            });
        }
    }
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
});