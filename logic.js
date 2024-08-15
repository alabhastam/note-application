function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(note => {
        addNoteToPage(note);
    });
}

function addNoteToPage(noteText) {
    const newNoteDiv = document.createElement('div');
    newNoteDiv.className = 'note p-3 mb-3 rounded border position-relative';

    const noteParagraph = document.createElement('p');
    noteParagraph.textContent = noteText;

    const trashIcon = document.createElement('img');
    trashIcon.src = 'trash-icon.png';
    trashIcon.className = 'trash-icon';
    trashIcon.alt = 'Delete note';
    trashIcon.addEventListener('click', function() {
        newNoteDiv.remove();
        removeNoteFromLocalStorage(noteText);
    });

    newNoteDiv.appendChild(noteParagraph);
    newNoteDiv.appendChild(trashIcon);

    document.getElementById('content-area').appendChild(newNoteDiv);
}

function saveNoteToLocalStorage(noteText) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(noteText);
    localStorage.setItem('notes', JSON.stringify(notes));
}

function removeNoteFromLocalStorage(noteText) {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes = notes.filter(note => note !== noteText);
    localStorage.setItem('notes', JSON.stringify(notes));
}

document.getElementById('button-style').addEventListener('click', function() {
    const inputField = document.querySelector('#input-text-area input');
    const noteText = inputField.value.trim();

    if (noteText !== '') {
        addNoteToPage(noteText);
        saveNoteToLocalStorage(noteText);
        inputField.value = '';
    } else {
        alert('Please write a note before adding.');
    }
});

window.addEventListener('load', loadNotes);
