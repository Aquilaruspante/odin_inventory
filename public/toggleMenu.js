const menu = document.querySelector('.genre-selection-menu');
const genreInput = document.querySelector('.genre-input');
const formInputs = document.querySelectorAll('.non-interactive');

formInputs.forEach(input => {
    input.addEventListener('click', () => {
        if (!menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
        };
    });
});

genreInput.addEventListener('focus', () => {
    menu.classList.toggle('hidden');
});

genreInput.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        menu.classList.add('hidden');
    };
});
