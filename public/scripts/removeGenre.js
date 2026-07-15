function createRemoveEvent(element, button) {
    button.addEventListener('click', () => {
        const menuItem = Array.from(toggleMenuItems).find(item => item.innerText === element.innerText);
        if (menuItem) {
            menuItem.classList.remove('hidden');
        };
        genreDisplay.removeChild(element);
    });
};