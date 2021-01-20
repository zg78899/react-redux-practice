import React, { useEffect, useState } from "react";
import AllNotes from "./components/AllNotes";
import CreateNote from "./components/CreateNote";
import ImportantNote from "./components/ImportantNote";

import { store } from "./redux/store";
import { load_notes } from "./redux/actions/notes.action";
import { connect } from "react-redux";
function App({ loading }) {
  // const [notes, setNotes] = useState([]);

  // const createNote = (newNote) => {
  //   setNotes([...notes, newNote]);
  // };
  // const toggle_note = (id) => {
  //   const new_notes = notes.slice();
  //   const index = new_notes.findIndex((note) => note.id === id);

  //   const note = new_notes[index];

  //   //new
  //   const new_note = {
  //     ...note,
  //     isImportant: !note.isImportant,
  //   };
  //   //기존dml
  //   new_notes[index] = new_note;
  //   setNotes(new_notes);
  // };

  // console.log(notes);

  useEffect(() => {
    store.dispatch(load_notes());
  }, []);

  return (
    <div className="container mt-3 p-3">
      <CreateNote />
      <hr />
      {loading && (
        <div className="text-center">
          {" "}
          <div
            style={{
              position: "absolute",
              top: "11%",
              left: "16%",
            }}
            className="spinner-border my-3"
          ></div>
        </div>
      )}
      <ImportantNote />
      <hr />
      <AllNotes />
    </div>
  );
}
const mapStateToProps = (state) => ({
  loading: state.note_reducer.loading,
});
export default connect(mapStateToProps, null)(App);
