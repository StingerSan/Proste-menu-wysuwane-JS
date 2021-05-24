const arrow = document.querySelector(".arrow");
const icon = document.querySelector(".fas fa-arrow-circle-up");
const menu = document.querySelector("nav");

arrow.addEventListener("click", function () {
    arrow.classList.toggle("active");
    menu.classList.toggle("active");
})