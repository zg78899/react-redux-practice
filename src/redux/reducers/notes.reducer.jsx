import { ADD_NOTE, TOGGLE_NOTE } from "../types";

const initialState = {
  notes: [
    {
      id: 1,
      date: "2021-01-21",
      isImportant: false,
      note: "im a student",
    },
  ],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, payload],
      };

    case TOGGLE_NOTE:
      const new_notes = state.notes.slice();
      const index = new_notes.findIndex((note) => note.id === payload);
      const note = new_notes[index];
      //new
      const new_note = {
        ...note,
        isImportant: !note.isImportant,
      };
      //기존dml
      new_notes[index] = new_note;
      return {
        ...state,
        notes: new_notes,
      };
    // setNotes(new_notes);
    default:
      return state;
  }
};

export default reducer;
