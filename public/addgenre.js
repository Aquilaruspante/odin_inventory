function createGenreComponent(value) {
    const newElement = document.createElement('div');
    newElement.classList.add('genre-display-element');
    newElement.innerText = value;
    return newElement;    
};

genreInput.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && counter !== 0) {
        console.log(counter);
        toggleMenuItems.forEach((item, index) => {
            if (index + 1 === counter) {
                addItem(item, e);
            };
            manageVisibleItems(item, e);
        });
    };
    hideTogglemenuIfItemsHidden();
});