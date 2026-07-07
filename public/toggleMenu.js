const menu = document.querySelector('.genre-selection-menu');
const genreInput = document.querySelector('.genre-input');
const body = document.querySelector('body');

genreInput.addEventListener('focus', () => {
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
