function firstVisibleItem() {
    for (let i = 0; i < toggleMenuItems.length; i++) {
        if (!toggleMenuItems[i].classList.contains('hidden')) return { element: toggleMenuItems[i], index: i };
    };
};

genreInput.addEventListener('input', (e) => {
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