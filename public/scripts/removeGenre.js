

function createRemoveEvent(element, button) {
    button.addEventListener('click', () => {
        console.log(element.innerText);
        const menuItem = Array.from(toggleMenuItems).find(item => item.innerText === element.innerText);
        if (menuItem) {
            menuItem.classList.remove('hidden');
        };
        genreDisplay.removeChild(element);
        form.childNodes.forEach(element => {
            if (element.value === menuItem.innerText) form.removeChild(element);
        });
    });
};