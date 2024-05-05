// Get about, socials and cv popups and buttons
const socials = document.querySelector(".socials-container");
const socialsOpen = document.querySelector(".menu-socials");
const about = document.querySelector(".about-container");
const aboutOpen = document.querySelector(".menu-about");
const cv = document.querySelector(".cv-container");
const cvOpen = document.querySelector(".menu-cv");

let socialsShow = false;
let aboutShow = false;
let cvShow = false;

aboutOpen.addEventListener("click", () => {
  if (socialsShow == true) {
    socials.classList.remove("active");
    socialsShow = false;
  }

  if (cvShow == true) {
    cv.classList.remove("active");
    cvShow = false;
  }

  if (aboutShow == false) {
    about.classList.add("active");
    aboutShow = true;
  } else {
    about.classList.remove("active");
    aboutShow = false;
  }
});

// Open socials popup
socialsOpen.addEventListener("click", () => {
  if (aboutShow == true) {
    about.classList.remove("active");
    aboutShow = false;
  }

  if (cvShow == true) {
    cv.classList.remove("active");
    cvShow = false;
  }

  if (socialsShow == false) {
    socials.classList.add("active");
    socialsShow = true;
  } else {
    socials.classList.remove("active");
    socialsShow = false;
  }
});

// Open cv popup
cvOpen.addEventListener("click", () => {
  if (aboutShow == true) {
    about.classList.remove("active");
    aboutShow = false;
  }

  if (socialsShow == true) {
    socials.classList.remove("active");
    socialsShow = false;
  }

  if (cvShow == false) {
    cv.classList.add("active");
    cvShow = true;
  } else {
    socials.classList.remove("active");
    cvShow = false;
  }
});

const githubBtn = document.querySelector(".menu-github");
const linkedinBtn = document.querySelector(".menu-linkedin");

githubBtn.addEventListener('click', function () {
  window.open('https://github.com/SimonARG', '_blank');
});

linkedinBtn.addEventListener('click', function () {
  window.open('https://www.linkedin.com/in/simonpaul99/', '_blank');
});