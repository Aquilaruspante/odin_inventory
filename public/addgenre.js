function createGenreComponent(value) {
    const newElement = document.createElement('div');
    newElement.classList.add('genre-display-element');
    newElement.innerText = value;
    return newElement;    
};

genreInput.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && counter !== 0) {
        
        toggleMenuItems.forEach((item, index) => {
            if (index + 1 === counter) {
                if (!Array.from(genreDisplay.childNodes).find(element => element.innerText === item.innerText)) {
                    e.preventDefault();
                    genreDisplayPlaceholder.classList.add('hidden');
                    genreDisplay.appendChild(createGenreComponent(item.innerText));
                    item.classList.add('hidden');
                    genreInput.value = '';
                    genreInput.placeholder = 'Search or add genre...';
                };
            };
            manageVisibleItems(item, e);
        });
    };
    hideTogglemenuIfItemsHidden();
});