const menuToggle = document.getElementById("menuToggle");
const menuToggleIcon = document.getElementById("menuToggleIcon");
const menuNav = document.getElementById("menuNavbar");

function openMenu() {
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggleIcon.src = "./assets/shared/icon-close.svg";
    menuToggle.setAttribute("aria-label", "Fechar menu");
    menuNav.classList.add("menu__navbar--open");
}
function closeMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggleIcon.src = "./assets/shared/icon-hamburger.svg";
    menuToggle.setAttribute("aria-label", "Abrir menu");
    menuNav.classList.remove("menu__navbar--open");
}

menuToggle.addEventListener("click", function () {
    const expanded = menuToggle.getAttribute("aria-expanded");
    if (expanded === "false") {
        openMenu()
    } else {
        closeMenu()
    }
})
