const arrow = document.querySelector(".arrow");
const menu = document.querySelector("nav");

arrow.addEventListener("click", function () {
    arrow.classList.toggle("active");
    menu.classList.toggle("active");
})
