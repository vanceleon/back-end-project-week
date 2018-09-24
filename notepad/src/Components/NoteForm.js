import React from "react";
import { Link } from "react-router-dom";

const NoteForm = props => {
  return (
    <div>
      <form action="note-form">
        <h1>Create New Note:</h1>
        <input name="title" type="text" placeholder="Note Title" />
        <input
          className="newNote-Content"
          name="textBody"
          placeholder="Note Content"
        />
        <button>Save</button>
      </form>
    </div>
  );
};

export default NoteForm;