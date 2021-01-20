import React, { useState } from "react";
import Note from "./Note";
// import { store } from "../redux/store";

import { connect, useSelector, useStore } from "react-redux";

function AllNoteS() {
  const notes = useSelector((state) => state.note_reducer.notes);

  const store = useStore();
  console.log(store.getState());
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
// const mapStateToProps = (state) => ({
//   notes: state.note_reducer.notes,
// });
// export default connect(mapStateToProps, null)(AllNoteS);
export default AllNoteS;
