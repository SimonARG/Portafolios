// Get project popups
const blog = document.querySelector(".blog-pu");
const portfolio = document.querySelector(".portfolio-pu");
const ambient = document.querySelector(".ambient-pu");
const mixtorrents = document.querySelector(".mixtorrents-pu");

// Get projects buttons
const btnBlog = document.querySelectorAll(".blog-btn");
const btnPortfolio = document.querySelectorAll(".portfolio-btn");
const btnAmbient = document.querySelectorAll(".ambient-btn");
const btnMixtorrents = document.querySelectorAll(".mixtorrents-btn");

// Get project videos
const portfolioVid = document.querySelector(".portfolio-vid");
const blogVid = document.querySelector(".blog-vid");
const ambientVid = document.querySelector(".ambient-vid");
const mixtorrentsVid = document.querySelector(".mixtorrents-vid");

// For the open and close buttons, open or close the project popup
btnBlog.forEach(btn => {
    btn.addEventListener("click", () => {
        blog.classList.toggle("active");
        if (blogVid.paused) {
            blogVid.play();
        } else {
            blogVid.pause();
        }
    });
});

btnPortfolio.forEach(btn => {
    btn.addEventListener("click", () => {
        portfolio.classList.toggle("active");
        if (portfolioVid.paused) {
            portfolioVid.play();
        } else {
            portfolioVid.pause();
        }
    });
});

btnAmbient.forEach(btn => {
    btn.addEventListener("click", () => {
        ambient.classList.toggle("active");
        if (ambientVid.paused) {
            ambientVid.play();
        } else {
            ambientVid.pause();
        }
    });
});

btnMixtorrents.forEach(btn => {
    btn.addEventListener("click", () => {
        mixtorrents.classList.toggle("active");
        if (mixtorrentsVid.paused) {
            mixtorrentsVid.play();
        } else {
            mixtorrentsVid.pause();
        }
    });
});

// Close any open popup on click of the window
window.addEventListener('click', function (event) {
    if (!(event.target.closest(".portfolio-btn")) && !(event.target.closest(".portfolio-pu"))) {
        if (portfolio.classList.contains("active")) {
            portfolio.classList.toggle("active");
            portfolioVid.pause();
        }
    }

    if (!(event.target.closest(".ambient-btn")) && !(event.target.closest(".ambient-pu"))) {
        if (ambient.classList.contains("active")) {
            ambient.classList.toggle("active");
            ambientVid.pause();
        }
    }

    if (!(event.target.closest(".blog-btn")) && !(event.target.closest(".blog-pu"))) {
        if (blog.classList.contains("active")) {
            blog.classList.toggle("active");
            blogVid.pause();
        }
    }

    if (!(event.target.closest(".mixtorrents-btn")) && !(event.target.closest(".mixtorrents-pu"))) {
        if (mixtorrents.classList.contains("active")) {
            mixtorrents.classList.toggle("active");
            mixtorrentsVid.pause();
        }
    }
});