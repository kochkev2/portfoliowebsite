
/* ===== LIGHT / DARK THEME TOGGLE ===== */

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const page = document.documentElement;

function updateThemeButton() {
    const isDark = page.dataset.theme === "dark";

    themeIcon.textContent = isDark ? "☀" : "☾";

    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );

    themeToggle.setAttribute(
        "aria-pressed",
        String(isDark)
    );
}

if (themeToggle && themeIcon) {
    updateThemeButton();

    themeToggle.addEventListener("click", function () {
        const isDark = page.dataset.theme === "dark";

        page.dataset.theme = isDark ? "light" : "dark";

        updateThemeButton();
    });
}
