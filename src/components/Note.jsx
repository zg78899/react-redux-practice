import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { delete_note, toggle_note } from "../redux/actions/notes.action";

function Note({
  note: { date, id, note, isImportant },
  toggle_note,
  // delete_note,
}) {
  const dispatch = useDispatch();

  return (
    <div className="card m-2">
      <button
        className="btn btn-close"
        onClick={() => dispatch(delete_note(id))}
      >
        x
      </button>
      <div className="card-header">{date}</div>
      <div className="card-body">{note}</div>
      <button className="btn mb-2" onClick={() => toggle_note(id)}>
        {isImportant ? "Remove from Important" : "Add to important"}
      </button>
    </div>
  );
}
export default connect(null, { toggle_note, delete_note })(Note);
// export default Note;
