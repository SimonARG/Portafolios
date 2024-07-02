const socialsCloser = document.querySelector('.socials-closer');
const aboutCloser = document.querySelector('.about-closer');
const cvCloser = document.querySelector('.cv-closer');

// Close popup on click of its closer button
const checkAndclosePopup = (popup, reactive) => {
  if (popup.classList.contains('active')) {
    popup.classList.remove('active');
    reactive = false;
  }
}

aboutCloser.addEventListener('click', () =>
  checkAndclosePopup(about, aboutShow)
);

socialsCloser.addEventListener('click', () =>
  checkAndclosePopup(socials, socialsShow)
);

cvCloser.addEventListener('click', () =>
  checkAndclosePopup(cv, cvShow)
);

// Close any open popup on click of the window
const eventTargetRollOver = (event, container, button, closer, reactive, popup) => {
  if (!(event.target.closest(container)) && !(event.target.closest(button)) && !(event.target.closest(closer))) {
    checkAndclosePopup(popup, reactive);
  }
}

window.addEventListener('click', (event) => {
  eventTargetRollOver(event, '.socials-container', '.menu-socials', '.socials-closer', socialsShow, socials);

  eventTargetRollOver(event, '.about-container', '.menu-about', '.about-closer', aboutShow, about);

  eventTargetRollOver(event, '.cv-container', '.menu-cv', '.cv-closer', cvShow, cv);
});