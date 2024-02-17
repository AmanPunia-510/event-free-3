const menu = document.querySelector(".menubar");
let nav = document.querySelector(".nav-items")

menu.addEventListener("click", function () {
    nav.classList.toggle("show")
})

