// ========== 1. DARK / LIGHT MODE ==========

const themeButton = document.querySelector("#theme-toggle");

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
    });
}


// ========== 2. HAMBURGER MENU ==========

const menuButton = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuButton.setAttribute("aria-expanded", isOpen);

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuButton.textContent = isOpen ? "✕" : "☰";
    });


    // Close the menu after clicking a link

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {
            navLinks.classList.remove("active");

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuButton.textContent = "☰";
        });

    });

}