const deleteButton = document.querySelector('.delete-button');
const messageElement = document.querySelector('.message');


deleteButton.addEventListener('click', async () => {
    const password = prompt('Password required...'); 
    const id = deleteButton.dataset.id;

    const response = await fetch(`/film/${id}/delete`, { 
        method: 'POST',
        body: JSON.stringify({ password }),
        headers: {
            "Content-Type": "application/json"
        } ,
    });
    const data = await response.json();
    
    if (data.status === 'success') {
        window.location.replace('/');
    } else if (data.status === 'denied') {
        messageElement.innerText = data.message;
        messageElement.classList.remove('hidden');
    };
});

