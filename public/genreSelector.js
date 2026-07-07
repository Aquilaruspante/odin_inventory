genreInput.addEventListener('keydown', (e) => {
    genreInput.placeholder = 'Press Tab to add...';

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

genreInput.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && counter !== 0) {
        e.preventDefault();
        toggleMenuItems.forEach((item, index) => {
            if (index + 1 === counter) {
                genreInput.value = genreInput.value + `${item.innerText} `;
            }
        });
    };
});

toggleMenuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log('click');
        genreInput.value = genreInput.value + `${item.innerText} `;
    })
})
