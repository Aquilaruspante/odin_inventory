let counter = 0;

genreInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        console.log(counter++);
    };
});