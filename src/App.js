import React, { useState } from "react";
import AllNotes from "./components/AllNotes";
import CreateNote from "./components/CreateNote";
import ImportantNote from "./components/ImportantNote";

function App() {
  const [notes, setNotes] = useState([]);

  const createNote = (newNote) => {
    setNotes([...notes, newNote]);
  };
  const toggle_note = (id) => {
    const new_notes = notes.slice();
    const index = new_notes.findIndex((note) => note.id === id);

    const note = new_notes[index];

    //new
    const new_note = {
      ...note,
      isImportant: !note.isImportant,
    };
    //기존dml
    new_notes[index] = new_note;
    setNotes(new_notes);
  };

  console.log(notes);

  return (
    <div className="container mt-3 p-3">
      <CreateNote createNote={createNote} />
      <hr />
      <ImportantNote notes={notes} toggle_note={toggle_note} />
      <hr />
      <AllNotes notes={notes} toggle_note={toggle_note} />
    </div>
  );
}

export default App;
