// Page Transition
const options = {
    linkSelector:
        'a[href^="' +
        window.location.origin +
        '"]:not([data-no-swup]), a[href^="./"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])'
};
const swup = new Swup(options);

// Nav hamburger code
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Show burger when click
burger.addEventListener("click", () => {
   ul.classList.toggle("show"); 
});

// Hide burger when select
const navLink = document.querySelectorAll(".nav_link");

navLink.forEach((link) => {
        link.addEventListener("click", () => {
            ul.classList.remove("show");
        })
    }
);

// Change active class after page transition
document.addEventListener('swup:contentReplaced', () => {
    navLink.forEach((link) => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    })
})