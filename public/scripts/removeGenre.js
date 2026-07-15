function createRemoveEvent(element, button) {
    button.addEventListener('click', () => {
        Array.from(toggleMenuItems).find(item => item.innerText === element.innerText).classList.remove('hidden');
        genreDisplay.removeChild(element);
    });
};