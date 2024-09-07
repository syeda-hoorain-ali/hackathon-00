import { project } from "./project.js";


// Responsive navbar 

const menuToggle = document.getElementById('menuToggle') as HTMLElement;
const menuLinks = document.getElementById('menuLinks') as HTMLElement;
const menuIcon = document.getElementById('menuIcon') as HTMLElement;
const closeIcon = document.getElementById('closeIcon') as HTMLElement;

menuToggle.addEventListener('click', () => {
    menuLinks.classList.toggle('show');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

// Highlight the active page link
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link') as NodeListOf<HTMLAnchorElement>;

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});


// Project Cards

const cardContainer = document.getElementById('cardContainer') as HTMLDivElement;

const showProjects = () => {
    cardContainer.innerHTML = ''
    project.map(project => {
        const card: HTMLDivElement = document.createElement('div');
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
        </div>`

        cardContainer.insertAdjacentElement("beforeend", card)
    })
}

showProjects()

