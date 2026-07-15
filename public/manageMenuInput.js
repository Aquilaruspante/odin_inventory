function manageItemFocus() {
    if (counter >= toggleMenuItems.length + 1) counter = 1;
    if (counter < 0) counter = toggleMenuItems.length;
    toggleMenuItems.forEach((item, index) => {
        if (index + 1 === counter) { 
            item.classList.add('menu-item-focus');
        } else if (item.classList.contains('menu-item-focus')) {
            item.classList.remove('menu-item-focus');
        };
    });
};

function firstVisibleItem() {
    // returns first non hidden element
    for (let i = 0; i < toggleMenuItems.length; i++) {
        if (!toggleMenuItems[i].classList.contains('hidden')) return { element: toggleMenuItems[i], index: i };
    };
};


genreInput.addEventListener('keydown', (e) => {
    genreInput.placeholder = 'Press Tab to add...';

    // Manage arrow up and down
    if (e.key === 'ArrowDown') {
        counter++;
        if (counter >= toggleMenuItems.length + 1) counter = 1;
        if (toggleMenuItems[counter - 1].classList.contains('hidden')) counter++;   
    };

    if (e.key === 'ArrowUp') {
        counter--;
        if (counter <= 0) counter = toggleMenuItems.length;
        if (toggleMenuItems[counter - 1].classList.contains('hidden')) counter--;
    };

    manageItemFocus();
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

toggleMenuItems.forEach(item => {
    // Manage click selection
    item.addEventListener('mousedown', (e) => {
        addItem(item, e);
        hideTogglemenuIfItemsHidden();
    });
});

genreInput.addEventListener('input', (e) => {
    // Manage user typing
    manageItemFocus();
    toggleMenuItems.forEach((item) => {
        item.classList.remove('menu-item-focus');
        manageVisibleItems(item, e);
    });
    const item = firstVisibleItem();
    if (item) {
        item.element.classList.add('menu-item-focus');
        counter = item.index + 1;
    };
    hideTogglemenuIfItemsHidden();
});
