document.getElementById('button-style').addEventListener('click', function() {

    const inputField = document.querySelector('#input-text-area input');
    const noteText = inputField.value.trim();

    if (noteText !== '') {
        const newNoteDiv = document.createElement('div');
        newNoteDiv.className = 'note p-3 mb-3 rounded border';
        newNoteDiv.style.backgroundColor = '#f8f9fa'; // Light background for the note

        const noteParagraph = document.createElement('p');
        noteParagraph.textContent = noteText;

        const trashIcon = document.createElement('img');
        trashIcon.src = '/trash-icon.png';
        trashIcon.className = 'position-absolute top-50 start-50';

    
        newNoteDiv.appendChild(noteParagraph);

        document.getElementById('content-area').appendChild(newNoteDiv);

        inputField.value = '';
    } else {
        alert('Please write a note before adding.');
    }
});
