const closeButton = document.querySelector('.side-menu-close');
const sideMenu = document.querySelector('.side-menu');

const menuIcon = document.querySelector('.menu-icon');

closeButton.addEventListener('click', () => {
    sideMenu.classList.remove('visible');
});

menuIcon.addEventListener('click', () => {
    sideMenu.classList.add('visible');
});