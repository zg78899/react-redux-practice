import React from "react";
import { connect } from "react-redux";
import Note from "./Note";

function ImportantNote({ notes }) {
  return (
    <div className="importantNodes">
      <h4>Inportant Notes</h4>
      <div className="row">
        {notes
          ?.filter((note) => note.isImportant === true)
          .map((note) => (
            <Note note={note} key={note.id} />
          ))}
      </div>
    </div>
  );
}

const maptStateToProps = (state) => ({
  notes: state.note_reducer.notes,
});
export default connect(maptStateToProps, null)(ImportantNote);
