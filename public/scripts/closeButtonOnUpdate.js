const genreDisplayElements = document.querySelectorAll('.genre-display-element');
const closeButtons = document.querySelectorAll('.close-button');

closeButtons.forEach((button, index) => {
    createRemoveEvent(genreDisplayElements[index], closeButtons[index]);    
});