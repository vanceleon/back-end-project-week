import React from "react";
import { Link } from "react-router-dom";

const NoteForm = props => {
  return (
    <div>
      <form>
        <h1>Create New Note:</h1>
        <input
          name="title"
          type="text"
          placeholder="Note Title"
          value={props.title}
          onChange={props.noteChange}
        />
        <input
          type="textarea"
          name="content"
          placeholder="Note Content"
          value={props.content}
          onChange={props.noteChange}
        />
        
        <Link to="/notes">
          <button onClick={event => props.newNote(event, props.history.push)}>Save</button>
        </Link>
      </form>
    </div>
  );
};

export default NoteForm;
