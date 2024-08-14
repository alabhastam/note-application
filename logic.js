document.getElementById('button-style').addEventListener('click', function() {
    // Get the input value
    const inputField = document.querySelector('#input-text-area input');
    const noteText = inputField.value.trim();

    // Check if the input is not empty
    if (noteText !== '') {
        // Create a new div for the note
        const newNoteDiv = document.createElement('div');
        newNoteDiv.className = 'note p-3 mb-3 rounded border';
        newNoteDiv.style.backgroundColor = '#f8f9fa'; // Light background for the note

        // Create a paragraph element for the note text
        const noteParagraph = document.createElement('p');
        noteParagraph.textContent = noteText;

        // Append the paragraph to the note div
        newNoteDiv.appendChild(noteParagraph);

        // Append the new note to the content area
        document.getElementById('content-area').appendChild(newNoteDiv);

        // Clear the input field
        inputField.value = '';
    } else {
        alert('Please write a note before adding.');
    }
});
