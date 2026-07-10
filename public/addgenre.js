const genreDisplay = document.querySelector('.genre-display');

function createGenreComponent(value) {
    const newElement = document.createElement('div');
    newElement.classList.add('genre-display-element');
    newElement.innerText = value;
    return newElement;    
};

genreInput.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && counter !== 0) {
        e.preventDefault();
        toggleMenuItems.forEach((item, index) => {
            if (index + 1 === counter) {
                genreDisplay.appendChild(createGenreComponent(item.innerText));
                item.classList.add('hidden');
            };
        });
    };
});