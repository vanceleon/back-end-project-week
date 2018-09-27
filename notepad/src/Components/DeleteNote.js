import React from "react";
import { Link } from "react-router-dom";

const DeleteNote = props => {
  return (
    <form className="delete-container">
      <h4>Are you sure you want to delete this?</h4>
      <Link to="/notes">
        <div
          onClick={event =>
            props.deleteNote(event, props.match.params.id, props.history.push)
          }
        >
          DELETE
        </div>
      </Link>
      <Link to="/notes">
        <div>NO</div>
      </Link>
    </form>
  );
};

export default DeleteNote;
