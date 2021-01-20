import React from "react";
import Note from "./Note";

function ImportantNote({ notes, toggle_note }) {
  return (
    <div className="importantNodes">
      <h4>Inportant Notes</h4>
      <div className="row">
        {notes
          .filter((note) => note.isImportant === true)
          .map((note) => (
            <Note note={note} toggle_note={toggle_note} key={note.id} />
          ))}
      </div>
    </div>
  );
}
export default ImportantNote;
