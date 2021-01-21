import {
  ADD_NOTE,
  TOGGLE_NOTE,
  LOAD_NOTE,
  SET_LOADER,
  DELETE_NOTE,
} from "../types";
import { db } from "../../firebase";

export const add_new_note = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADER,
    });
    await db.collection("notes").doc(data.id.toString()).set(data);
    dispatch({
      type: ADD_NOTE,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const delete_note = (id) => async (dispatch) => {
  try {
    // dispatch({
    //   type: SET_LOADER,
    // });
    const snapshot = db.collection("notes").doc(id.toString());
    const data = (await snapshot.get()).data();
    console.log(data);
    snapshot.delete(data);
    dispatch(load_notes());
  } catch (error) {
    console.log(error.message);
  }
};

export const toggle_note = (id) => async (dispatch) => {
  try {
    // dispatch({
    //   type: SET_LOADER,
    // });
    const snapshot = db.collection("notes").doc(id.toString());
    const data = (await snapshot.get()).data();

    snapshot.update({
      isImportant: !data.isImportant,
    });
    dispatch(load_notes());
    // dispatch({
    //   type: TOGGLE_NOTE,
    //   payload: id,
    // });
  } catch (error) {
    console.log(error.message);
  }
};

export const load_notes = () => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADER,
    });
    const snapshot = await db.collection("notes").get();

    const all_notes = snapshot.docs.map((doc) => doc.data());
    dispatch({
      type: LOAD_NOTE,
      payload: all_notes,
    });
  } catch (error) {
    console.log(error.message);
  }
};
