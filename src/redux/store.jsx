import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore } from "redux";
import note_reducer from "./reducers/notes.reducer";

// const initialState = {
//   notes: ["note1", "note2"],
// };
// const reducer = (initialState) => initialState;
// const rootReducer = combineReducers({});
export const store = createStore(note_reducer, composeWithDevTools());
