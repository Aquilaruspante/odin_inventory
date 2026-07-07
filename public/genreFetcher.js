genreInput.addEventListener('input', (e) => {
    toggleMenuItems.forEach((item) => {
        if (!item.innerText.includes(e.target.value)) {
            item.classList.add('hidden');
        } else {
            item.classList.remove('hidden');
        };
    });
});