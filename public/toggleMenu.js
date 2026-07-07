const menu = document.querySelector('.genre-selection-menu');
const genreInput = document.querySelector('.genre-input');
const toggleMenuItems = document.querySelectorAll('.genre-selection-element');

let counter = 0;

genreInput.addEventListener('focus', () => {
    counter = 0;
    toggleMenuItems.forEach((item) => {
        if (item.classList.contains('menu-item-focus')) {
            item.classList.remove('menu-item-focus');
        };
    });
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
