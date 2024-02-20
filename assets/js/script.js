// navbar

let menu = document.querySelector(".menuicons");
let navItems = document.querySelector(".navbar-item");

menu.addEventListener("click", function () {
    navItems.classList.toggle("show")
})


// for comeback on top



let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// for create post

let post_comment = document.querySelector(".post-comment");
let boxWithHeight = document.querySelector(".upper-box-with-height");
let body = document.querySelector("body");
let createbutton = document.querySelector(".create-button");
let createpostbox = document.querySelector(".create-post-box")

post_comment.addEventListener("click", function () {
    boxWithHeight.style.display = "flex"
    boxWithHeight.classList.add("upper-box-js")
    body.classList.add("overflow")
})

createbutton.addEventListener("click", function () {
    boxWithHeight.style.display = "none"
    body.classList.remove("overflow")
})