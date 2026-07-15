const menu = document.querySelector('.genre-selection-menu');
const genreInput = document.querySelector('.genre-input');
const toggleMenuItems = document.querySelectorAll('.genre-selection-element');
const genreDisplay = document.querySelector('.genre-display');
const genreDisplayPlaceholder = document.querySelector('.genre-display-placeholder');

let counter = 0;

function checkGenreDisplayForElement(item) {
    // hides item if already added to the display
    for (let i = 0; i < genreDisplay.childNodes.length; i++) {
        if (genreDisplay.childNodes[i].innerText === item.innerText && !item.classList.contains('hidden')) item.classList.add('hidden');
    };
};

function hideTogglemenuIfItemsHidden() {
    // hides menu if all items hidden
    if (Array.from(toggleMenuItems).every(item => item.classList.contains('hidden'))) { 
        menu.classList.add('hidden'); 
    } else {
        menu.classList.remove('hidden');
    };
};

function manageVisibleItems(item, e) {
    // if the item does not include the text passed by event "e" hide the item
    if (!item.innerText.includes(e.target.value)) {
        item.classList.add('hidden');
    } else {
        item.classList.remove('hidden');
        checkGenreDisplayForElement(item);
    };
};

function addItem(item, e) {
    // add item to the display
    if (!Array.from(genreDisplay.childNodes).find(element => element.innerText === item.innerText)) {
        e.preventDefault();
        genreDisplayPlaceholder.classList.add('hidden');
        const { newElement, closeButton } = createGenreComponent(item.innerText);
        genreDisplay.appendChild(newElement);
        createRemoveEvent(newElement, closeButton);
        item.classList.add('hidden');
        genreInput.value = '';
        genreInput.placeholder = 'Search or add genre...';
    };
};

genreInput.addEventListener('focus', () => {
    counter = 0;
    toggleMenuItems.forEach((item) => {
        checkGenreDisplayForElement(item);
        if (item.classList.contains('menu-item-focus')) {
            item.classList.remove('menu-item-focus');
        };
    });
    hideTogglemenuIfItemsHidden();
});

genreInput.addEventListener('blur', () => {
    genreInput.placeholder = 'Search or add genre...';
    menu.classList.add('hidden');
});
