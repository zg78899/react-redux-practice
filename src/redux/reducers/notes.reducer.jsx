import {
  ADD_NOTE,
  DELETE_NOTE,
  LOAD_NOTE,
  SET_LOADER,
  TOGGLE_NOTE,
} from "../types";

const initialState = {
  notes: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_NOTE:
      return {
        ...state,
        loading: false,
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
        loading: false,
      };

    case LOAD_NOTE:
      return {
        ...state,
        notes: payload,
        loading: false,
      };
    // setNotes(new_notes);

    case SET_LOADER:
      return {
        ...state,
        loading: true,
      };

    case DELETE_NOTE:
      const newNote = state.notes.slice();

      const idx = newNote.findIndex((note) => note.id === payload);
      const filter_notes = new_notes.slice(0, idx);
      return {
        ...state,
        notes: filter_notes,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
