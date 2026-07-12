function createGenreComponent(value) {
    // create display genre button
    const newElement = document.createElement('div');
    const newTextElement = document.createElement('div');
    const closeButton = document.createElement('button');

    newElement.appendChild(newTextElement);
    newElement.appendChild(closeButton);

    newElement.classList.add('genre-display-element');
    closeButton.classList.add('close-button');
    newTextElement.innerText = value;
    closeButton.innerHTML = '<img src="/Close.png" />';
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