import React, { useState } from "react";

function CreateNote({ createNote }) {
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      note,
      id: Math.floor(Math.random() * 1000),
      date: new Date().toJSON().slice(0, 10),
      isImportant: false,
    };
    createNote(data);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            className="form-control"
            name=""
            id=""
            cols="3"
            placeholder="Write your dream note;)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
          <button type="submit" className="btn">
            ADD Note
          </button>
        </div>
      </form>
    </div>
  );
}
export default CreateNote;
