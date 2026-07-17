const genreDisplayElements = document.querySelectorAll('.genre-display-element');
const closeButtons = document.querySelectorAll('.close-button');

closeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        genreDisplay.removeChild(genreDisplayElements[index]);
    });
});