import { ADD_NOTE, TOGGLE_NOTE } from "../types";

export const add_new_note = (data) => async (dispatch) => {
  dispatch({
    type: ADD_NOTE,
    payload: data,
  });
};

export const toggle_note = (id) => async (dispatch) => {
  dispatch({
    type: TOGGLE_NOTE,
    payload: id,
  });
};
