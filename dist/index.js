import { project } from "./project.js";
// Responsive navbar 
const menuToggle = document.getElementById('menuToggle');
const menuLinks = document.getElementById('menuLinks');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
menuToggle.addEventListener('click', () => {
    menuLinks.classList.toggle('show');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});
// Highlight the active page link
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});
// Project Cards
const cardContainer = document.getElementById('cardContainer');
const showProjects = () => {
    cardContainer.innerHTML = '';
    project.map(project => {
        const card = document.createElement('div');
        card.title = project.title;
        card.classList.add('card');
        card.innerHTML = `
        <div class="overlay">
            <div class="overlay-content">
            <span class="title">${project.title}</span>
            <div class="links">
                <a href="${project.live}" class="link">Live</a>
                <a href="${project.github}" class="link">Code</a>
            </div>
            </div>
        </div>
        <div class="image-container">
            <img src="${project.image}" alt="${project.title}" class="image" />
        </div>`;
        cardContainer.insertAdjacentElement("beforeend", card);
    });
};
showProjects();
