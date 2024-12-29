// burgermenu + slider JS

const burgerMenu = document.querySelector(".burgermenu")
const navbarSlider = document.querySelector(".Navbar-resp")
const stripOne = document.querySelector(".burgermenu-strip-1")
const stripTwo = document.querySelector(".burgermenu-strip-2")
const stripThree = document.querySelector(".burgermenu-strip-3")
const anchors = document.querySelectorAll(".anchor")

burgerMenu.addEventListener("click", function() {
    navbarSlider.classList.toggle("Slide");
})

document.addEventListener("click", function(event) {
    const targetElement = event.target
    if (!targetElement.closest(".burgermenu") && !targetElement.closest(".Navbar-resp")) {
        navbarSlider.classList.remove("Slide")
    }
})

anchors.forEach(anchor => {
    anchor.addEventListener("click", function() {
        setTimeout(() => {
            navbarSlider.classList.remove("Slide");
            burgerMenu.classList.remove("active");
            stripOne.classList.remove("strip-1-active");
            stripTwo.classList.remove("strip-2-active");
            stripThree.classList.remove("strip-3-active");
        }, 500); 
    });
});

burgerMenu.addEventListener("click", function() {
    burgerMenu.classList.toggle("active")
})

document.addEventListener("click", function(event) {
    const targetElement = event.target
    if (!targetElement.closest(".burgermenu") && !targetElement.closest(".Navbar-resp")) {
        burgerMenu.classList.remove("active")
    }
})

burgerMenu.addEventListener("click", function() {
    stripOne.classList.toggle("strip-1-active")
    stripTwo.classList.toggle("strip-2-active")
    stripThree.classList.toggle("strip-3-active")
})

document.addEventListener("click", function(event) {
    const targetElement = event.target
    if (!targetElement.closest(".burgermenu") && !targetElement.closest(".Navbar-resp")) {
        stripOne.classList.remove("strip-1-active")
        stripTwo.classList.remove("strip-2-active")
        stripThree.classList.remove("strip-3-active")
    }
})