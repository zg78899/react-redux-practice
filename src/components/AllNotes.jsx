import React from "react";
import Note from "./Note";
import { store } from "../redux/store";

import { connect } from "react-redux";

function AllNoteS({ toggle_note }) {
  const notes = store.getState().notes;
  return (
    <div className="my-3">
      <h5>All Notes</h5>
      <div className="row">
        {notes?.map((note) => (
          <Note key={note.id} note={note} toggle_note={toggle_note} />
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  note: state.notes,
});
export default connect(mapStateToProps)(AllNoteS);
