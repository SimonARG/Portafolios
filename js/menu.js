// Get about, socials and cv popups and buttons
const socials = document.querySelector(".socials-container");
const socialsBtn = document.querySelector(".menu-socials");
const about = document.querySelector(".about-container");
const aboutBtn = document.querySelector(".menu-about");
const cv = document.querySelector(".cv-container");
const cvBtn = document.querySelector(".menu-cv");

let socialsShow = false;
let aboutShow = false;
let cvShow = false;

// Toggle popups
const togglePopup = (popup, reactive) => {
  popup.classList.toggle('active');
  reactive = !reactive;
}

aboutBtn.addEventListener('click', () => {
  togglePopup(about, aboutShow);
});

socialsBtn.addEventListener('click', () => {
  togglePopup(socials, socialsShow);
});

cvBtn.addEventListener('click', () => {
  togglePopup(cv, cvShow);
});

// Open GitHub and LinkedIn on a new window on click of their sidebar items
const githubBtn = document.querySelector('.menu-github');
const linkedinBtn = document.querySelector('.menu-linkedin');

githubBtn.addEventListener('click', () => window.open('https://github.com/SimonARG', '_blank'));

linkedinBtn.addEventListener('click', () => window.open('https://www.linkedin.com/in/simonpaul99/', '_blank'));