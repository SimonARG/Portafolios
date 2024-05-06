// Get index subtitles and their replacements from DOM
const inlineWordContainer = document.querySelectorAll('.inline-word-container');

// Replace the index subtitles on hover
inlineWordContainer.forEach(function(container) {
    container.addEventListener("mouseenter", function() {
        container.classList.add("active");
    });
});

inlineWordContainer.forEach(function(container) {
    container.addEventListener("mouseleave", function() {
        setTimeout(function() {
            container.classList.remove("active");
        }, 1600);
    });
});

// Get projects button and redirect to projects page on click
const projectsBtn = document.querySelector('.projects-btn');

projectsBtn.addEventListener('click', function() {
    window.location.href = "projects.html";
})