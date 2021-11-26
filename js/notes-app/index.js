let params = {
    filter: null,
    sortBy: null
}

window.onload = function(e) {
    renderNotes();
}

document.getElementById('sort-dropdown').addEventListener('change', function(e) {
    params.sortBy = e.target.value;
    renderNotes();
})

document.getElementById('note-input-button').addEventListener('click', function() {
    let note = {
        id: uuidv4(),
        title: document.getElementById('note-input-title').value,
        body: document.getElementById('note-input-body').value,
        createdAt: new Date(),
        updateAd: new Date(),
    }
    createNote(note);
    renderNotes();
});

const renderNotes = () => {
    let notes = loadNotes();
    // notes = sortNotes(notes);
    const displayNotesDiv = document.getElementById("display-notes");
    displayNotesDiv.innerHTML = '';
    notes.forEach(note => {
        const noteDiv = document.createElement('div');

        const notetitleHeading = document.createElement('h4');
        notetitleHeading.innerHTML = note.title;

        const noteBodyDiv = document.createElement('div');
        noteBodyDiv.innerHTML = note.body
        
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete Note';
        deleteButton.addEventListener('click', function() {
            deleteNote(note.id);
        });

        noteDiv.appendChild(notetitleHeading);
        noteDiv.appendChild(noteBodyDiv);
        noteDiv.appendChild(deleteButton);
        
        displayNotesDiv.appendChild(noteDiv);
    });
}

const sortNotes = (notes) => {
    if (!params.sortBy) {
        return notes;
    }
    if (params.sortBy === 'title') {
        return notes.sort((a, b) => {
            // a, b
            // if we want a to come before b we return -1
            // if we want a to come after b we return 1
            // else we return 0
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                // cat, dat -> cat < dog -> -1
                return -1;
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                // dog, cat -> dog > cat -> 1
                return 1;
            } else {
                return 0;
            }
        });
    } else if (params.sortBy === 'createdAt') {

    }
    return notes;
}

const createNote = (note) => {
    let notes = loadNotes();
    notes.push(note);
    saveNotes();
}

const loadNotes = () => {
    const notes = localStorage.getItem('notes');
    try {
        return notes ? JSON.parse(notes) : [];
    } catch (e) {
        return [];
    }
}

const deleteNote = (id) => {
    let notes = loadNotes();
    notes = notes.filter((note) => note.id !== id);
    saveNotes(notes);
    renderNotes();
}

const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
}