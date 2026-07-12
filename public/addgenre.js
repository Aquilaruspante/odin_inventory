const closeButtonSVG = `
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="13" height="13" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        class="lucide lucide-x-icon lucide-x">
        <path d="M18 6 6 18"/>
        <path d="m6 6 12 12"/>
    </svg>    
`

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
    closeButton.innerHTML = closeButtonSVG;
    closeButton.setAttribute('type', 'button');
    return { newElement, closeButton };    
};

genreInput.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && counter !== 0) {
        toggleMenuItems.forEach((item, index) => {
            if (index + 1 === counter) {
                addItem(item, e);
            };
            manageVisibleItems(item, e);
        });
    };
    hideTogglemenuIfItemsHidden();
});