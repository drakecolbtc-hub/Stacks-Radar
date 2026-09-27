// ==========================================
// STACKS RADAR - JAVASCRIPT
// ==========================================


// ===============================
// SIDEBAR MENU
// ===============================

const menuButton = document.querySelector(".menu-button");
const sidebar = document.querySelector(".sidebar");
const closeMenu = document.querySelector(".close-menu");


if (menuButton && sidebar) {

    menuButton.addEventListener("click", function () {

        sidebar.classList.add("open");

    });

}


if (closeMenu && sidebar) {

    closeMenu.addEventListener("click", function () {

        sidebar.classList.remove("open");

    });

}


const sidebarLinks = document.querySelectorAll(".sidebar-nav a");


sidebarLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        sidebar.classList.remove("open");

    });

});


// ===============================
// READY
// ===============================

console.log(
    "STACKS RADAR JavaScript loaded successfully."
);