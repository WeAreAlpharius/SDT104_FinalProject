const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("nav");

let isOpen = false;

menuBtn.addEventListener("click", () => {
    isOpen = !isOpen;

    menu.classList.toggle("active");

    if (isOpen) {
      menuBtn.src = "images/menuClosed.svg";
    } else {
      menuBtn.src = "images/menu.svg";
    }
});