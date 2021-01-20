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
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, payload],
      };
    default:
      return state;
  }
};

export default reducer;
