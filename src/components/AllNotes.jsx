import React from "react";
import Note from "./Note";
// import { store } from "../redux/store";

import { connect } from "react-redux";

function AllNoteS({ notes }) {
  return (
    <div className="my-3">
      <h5>All Notes</h5>
      <div className="row">
        {notes?.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  notes: state.note_reducer.notes,
});
export default connect(mapStateToProps, null)(AllNoteS);
