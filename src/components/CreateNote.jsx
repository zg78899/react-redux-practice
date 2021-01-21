import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
// import { store } from "../redux/store";
import { add_new_note } from "../redux/actions/notes.action";

function CreateNote() {
  const [note, setNote] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      note,
      id: Math.floor(Math.random() * 1000),
      date: new Date().toJSON().slice(0, 10),
      isImportant: false,
    };
    console.log(data);
    dispatch(add_new_note(data));
    setNote("");
    // store.dispatch({
    //   type: "ADD_NOTE",
    //   payload: data,
    // });
    // createNote(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            name=""
            id=""
            cols="3"
            placeholder="Write your dream note;)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></input>
          <button type="submit" className="btn">
            ADD Note
          </button>
        </div>
      </form>
    </div>
  );
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     add_new_note: (data) =>
//       dispatch({
//         type: "ADD_NOTE",
//         payload: data,
//       }),
//   };
// };
// const add_new_note = (data) => async (dispatch) => {
//   dispatch({
//     type: "ADD_NOTE",
//     payload: data,
//   });
// };
// export default connect(null, { add_new_note })(CreateNote);
export default CreateNote;
