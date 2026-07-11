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

genreInput.addEventListener('keydown', (e) => {
    genreInput.placeholder = 'Press Tab to add...';

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
});

toggleMenuItems.forEach(item => {
    item.addEventListener('mousedown', (e) => {
        addItem(item, e);
    });
});
