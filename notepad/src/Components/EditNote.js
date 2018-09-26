import React from "react";
import { Link } from "react-router-dom";

const EditNote = props => {
  return (
    <form>
      <input
        type="text"
        name="title"
        placeholder="Note Title"
        onChange={props.onChange}
        value={props.title}
      />
      <input
        className="note-content-input"
        type="text"
        placeholder="Note Content"
        onChange={props.onChange}
        value={props.content}
      />
      <Link to="/notes">
        <button onClick={() => props.editNote(props.notes.id)}>Save</button>
      </Link>
    </form>
  );
};

export default EditNote;

// asdfasdf
//look up prevState to have the old note in the field for editing
