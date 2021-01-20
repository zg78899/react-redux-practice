import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import note_reducer from "./reducers/notes.reducer";
import thunk from "redux-thunk";

// const initialState = {
//   notes: ["note1", "note2"],
// };
// const reducer = (initialState) => initialState;
const rootReducer = combineReducers({
  note_reducer,
});
const middleWare = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);
