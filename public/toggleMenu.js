const menu = document.querySelector('.genre-selection-menu');
const genreInput = document.querySelector('.genre-input');
const formInputs = document.querySelectorAll('.non-interactive');

formInputs.forEach(input => {
    input.addEventListener('click', () => {
        if (!menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
        }
    })
})

genreInput.addEventListener('click', () => {
    menu.classList.toggle('hidden');
})
