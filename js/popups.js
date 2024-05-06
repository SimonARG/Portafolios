const socialsClose = document.querySelector(".socials-closer");
const aboutClose = document.querySelector(".about-closer");
const cvClose = document.querySelector(".cv-closer");

// Close about popup
aboutClose.addEventListener("click", () => {
    about.classList.remove("active");
    aboutShow = false;
});

// Close socials popup
socialsClose.addEventListener("click", () => {
    socials.classList.remove("active");
    socialsShow = false;
});

// Close cv popup
cvClose.addEventListener("click", () => {
    cv.classList.remove("active");
    cvShow = false;
});

// Close any open popup on click of the window
window.addEventListener('click', function (event) {
    if (!(event.target.closest(".socials-container")) && !(event.target.closest(".menu-socials")) && !(event.target.closest(".socials-closer"))) {
        if (socials.classList.contains("active")) {
            socials.classList.remove("active");
            socialsShow = false;
        }
    }

    if (!(event.target.closest(".about-container")) && !(event.target.closest(".menu-about")) && !(event.target.closest(".about-closer"))) {
        if (about.classList.contains("active")) {
            about.classList.remove("active");
            aboutShow = false;
        }
    }

    if (!(event.target.closest(".cv-container")) && !(event.target.closest(".menu-cv")) && !(event.target.closest(".cv-closer"))) {
        if (cv.classList.contains('active')) {
            cv.classList.remove('active');
            cvShow = false;
        }
    }
});