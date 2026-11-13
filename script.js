

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

    /* ===== SCROLLREVEAL ANIMATIONS ===== */
    /* AI PROMPT: How can I integrate the ScrollReveal JavaScript
     * library into my portfolio as users
    * scroll, while having reduced-motion preferences
    */
   
    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
        typeof ScrollReveal !== "undefined" &&
        !prefersReducedMotion
    ) {
        const sr = ScrollReveal({
            distance: "30px",
            duration: 800,
            easing: "ease-out",
            opacity: 0,
            reset: false,
            viewFactor: 0.1
        });

        sr.reveal(".hero-content", { origin: "left" });
        sr.reveal(".hero-character-placeholder", {
            origin: "right",
            delay: 150
        });
        sr.reveal("#about", { origin: "bottom", delay: 100 });
        sr.reveal(".garden-preview", { origin: "bottom" });
        sr.reveal("#projects article", {
            origin: "bottom",
            interval: 120
        });
        sr.reveal(".resume-panel", { origin: "bottom" });
        sr.reveal(".footer-content", {
            origin: "bottom",
            distance: "15px",
            duration: 600
        });

        // ScrollReveal now controls element visibility.
        document.documentElement.classList.remove("js");

    } else {
        // Show content normally if animations are unavailable.
        document.documentElement.classList.remove("js");
    }
}
