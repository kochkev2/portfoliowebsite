

/* ===== LIGHT / DARK THEME TOGGLE ===== */
/* AI PROMPT: How can I use JavaScript localStorage to remember
 * a user's light or dark theme preference across multiple HTML
 * pages, while keeping the theme toggle functional if browser
 * storage is unavailable? */

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const page = document.documentElement;

// Retrieve the visitor's previously selected theme.
let savedTheme = null;

try {
    savedTheme = localStorage.getItem("portfolio-theme");
} catch (error) {
    // Continue without saved preferences if storage is unavailable.
}

// Apply the saved theme, or default to light mode.
page.dataset.theme = savedTheme === "dark" ? "dark" : "light";

// Update the button's icon and accessibility information.
function updateThemeButton() {
    if (!themeToggle || !themeIcon) {
        return;
    }

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

// Enable the theme toggle.
if (themeToggle && themeIcon) {
    updateThemeButton();

    themeToggle.addEventListener("click", function () {
        const isDark = page.dataset.theme === "dark";

        const newTheme = isDark ? "light" : "dark";

        // Change the page's theme.
        page.dataset.theme = newTheme;

        // Remember the visitor's selection.
        try {
            localStorage.setItem("portfolio-theme", newTheme);
        } catch (error) {
            // The toggle still works if storage is unavailable.
        }

        // Update the icon and accessibility label.
        updateThemeButton();
    });
}
