genreInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        counter++;
        if (counter === toggleMenuItems.length + 1) counter = 1;
    };

    if (e.key === 'ArrowUp') {
        counter--;
        if (counter <= 0) counter = toggleMenuItems.length;
    };

    toggleMenuItems.forEach((item, index) => {
        if (index + 1 === counter) { 
            item.classList.add('menu-item-focus');
        } else if (item.classList.contains('menu-item-focus')) {
            item.classList.remove('menu-item-focus');
        };
    });
});
