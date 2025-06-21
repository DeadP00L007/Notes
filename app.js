const notesContainer = document.getElementById("notesContainer");
const addButton = document.getElementById("addNote");
const textArea = document.getElementById("noteText");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes() {
    notesContainer.innerHTML = ""; // Clear current
    notes.forEach((note, index) => {
        const div = document.createElement("div");
        div.classList.add("note");
        div.innerHTML = `
            <p>${note}</p>
            <span class="delete" data-index="${index}">&times;</span>
        `;
        notesContainer.appendChild(div);
    });
}

addButton.addEventListener("click", () => {
    const text = textArea.value.trim();
    if (!text) return;

    notes.push(text);
    saveNotes();
    renderNotes();
    textArea.value = ""; // Clear the text area
});

notesContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        const index = e.target.getAttribute("data-index");
        notes.splice(index, 1);
        saveNotes();
        renderNotes();
    }
});

// Initial load
renderNotes();
