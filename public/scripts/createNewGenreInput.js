const form = document.querySelector('.form');

function createNewInput(value) {
    console.log('value', value);
    if (value !== '') {
        const newInput = document.createElement('input');
        newInput.setAttribute('type', 'hidden');
        newInput.setAttribute('name', 'genre[]');
        newInput.setAttribute('value', value);
        form.appendChild(newInput);
    };
};
