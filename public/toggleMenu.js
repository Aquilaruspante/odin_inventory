const menu = document.querySelector('.genre-selection-menu');
const genreInput = document.querySelector('.genre-input');
const toggleMenuItems = document.querySelectorAll('.genre-selection-element');
const genreDisplay = document.querySelector('.genre-display');
const genreDisplayPlaceholder = document.querySelector('.genre-display-placeholder');

let counter = 0;

function checkGenreDisplayForElement(item) {
    for (let i = 0; i < genreDisplay.childNodes.length; i++) {
        if (genreDisplay.childNodes[i].innerText === item.innerText && !item.classList.contains('hidden')) item.classList.add('hidden');
    };
};

function hideTogglemenuIfItemsHidden() {
    if (Array.from(toggleMenuItems).every(item => item.classList.contains('hidden'))) { 
        menu.classList.add('hidden'); 
    } else {
        menu.classList.remove('hidden');
    };
};

function manageVisibleItems(item, e) {
    if (!item.innerText.includes(e.target.value)) {
        item.classList.add('hidden');
    } else {
        item.classList.remove('hidden');
        checkGenreDisplayForElement(item);
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
