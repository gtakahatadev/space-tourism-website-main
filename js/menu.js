const menuToggle = document.getElementById("menuToggle");
const menuToggleIcon = document.getElementById("menu__toggle-icon");
const menuNav = document.getElementById(".menu");
const menuLinks = document.querySelectorAll("navbar__item");

function openMenu () {
    menuToggle.setAttribute("aria-expanded", "true")
    menuToggleIcon.src = "./assets/shared/icon-close.svg";
    menuToggle.setAttribute("aria-label", "Fechar Menu")
}
function closeMenu () {    
    menuToggle.setAttribute("aria-expanded", "false")
    menuToggleIcon.src = "./assets/shared/icon-hamburger.svg";
    menuToggle.setAttribute("aria-label", "Abrir Menu")
}

menuToggle.addEventListener("click", function() {
    const expanded = menuToggle.getAttribute("aria-expanded");
    if (expanded === "false") {
        openMenu()
    } else {
        closeMenu()
    }
})