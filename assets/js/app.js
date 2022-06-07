// Page Transition
const options = {
    linkSelector:
        'a[href^="' +
        window.location.origin +
        '"]:not([data-no-swup]), a[href^="./"]:not([data-no-swup])'
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

// Function to expand/close the read more
function readMoreLess(textToShow, btn) {
    btn.click(function () {
        var readmore = textToShow;
        var aText = readmore.is(':visible') ? 'Read More ▼' : 'Read Less ▲';
        $(this).text(aText);
        readmore.slideToggle();
    });
}

// Hook functions to buttons
readMoreLess($("#readmore-noi"), $("#a-noi"));
readMoreLess($("#readmore-np"), $("#a-np"));
readMoreLess($("#readmore-ctfsg"), $("#a-ctfsg"));
readMoreLess($("#readmore-ycep"), $("#a-ycep"));
readMoreLess($("#readmore-thc"), $("#a-thc"));
readMoreLess($("#readmore-ac"), $("#a-ac"));
readMoreLess($("#readmore-aycep"), $("#a-aycep"));
readMoreLess($("#readmore-bbcs"), $("#a-bbcs"));

// Every time swup transitions
document.addEventListener('swup:contentReplaced', () => {
    // Change active class after page transition
    navLink.forEach((link) => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    })

    // Rehook function to buttons on page reload
    readMoreLess($("#readmore-noi"), $("#a-noi"));
    readMoreLess($("#readmore-np"), $("#a-np"));
    readMoreLess($("#readmore-ctfsg"), $("#a-ctfsg"));
    readMoreLess($("#readmore-ycep"), $("#a-ycep"));
    readMoreLess($("#readmore-thc"), $("#a-thc"));
    readMoreLess($("#readmore-ac"), $("#a-ac"));
    readMoreLess($("#readmore-aycep"), $("#a-aycep"));
    readMoreLess($("#readmore-bbcs"), $("#a-bbcs"));
})


