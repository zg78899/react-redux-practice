import React from "react";
import Note from "./Note";

function AllNoteS({ notes, toggle_note }) {
  console.log(notes);
  return (
    <div className="my-3">
      <h5>All Notes</h5>
      <div className="row">
        {notes.map((note) => (
          <Note key={note.id} note={note} toggle_note={toggle_note} />
        ))}
      </div>
    </div>
  );
}
export default AllNoteS;
