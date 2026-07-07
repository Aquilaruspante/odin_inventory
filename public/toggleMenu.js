const menu = document.querySelector('.genre-selection-menu');
const genreInput = document.querySelector('.genre-input');
const body = document.querySelector('body');

let counter = 0;

genreInput.addEventListener('focus', () => {
    counter = 0;
    menu.classList.toggle('hidden');
});

genreInput.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        menu.classList.add('hidden');
    };
});

genreInput.addEventListener('blur', () => {
    menu.classList.add('hidden');
});
