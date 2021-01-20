import React from "react";

function Note({ note: { date, id, note, isImportant }, toggle_note }) {
  return (
    <div className="card m-2">
      <div className="card-header">{date}</div>
      <div className="card-body">{note}</div>
      <button className="btn mb-2" onClick={() => toggle_note(id)}>
        {isImportant ? "Remove from Important" : "Add to important"}
      </button>
    </div>
  );
}
export default Note;
