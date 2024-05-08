// Animate index subtitles
const inlineWordContainer = document.querySelectorAll('.inline-word-container');

inlineWordContainer.forEach(function (container) {
  container.addEventListener('mouseenter', function () {
    container.classList.add('active');
  });
});

inlineWordContainer.forEach(function (container) {
  container.addEventListener('mouseleave', function () {
    setTimeout(function () {
      container.classList.remove('active');
    }, 1600);
  });
});

// Get projects button and redirect to projects page on click
const projectsBtn = document.querySelectorAll('.projects-btn');

for (let index = 0; index < projectsBtn.length; index++) {
  projectsBtn[index].addEventListener('click', function () {
    window.location.href = 'projects.html';
  })
}