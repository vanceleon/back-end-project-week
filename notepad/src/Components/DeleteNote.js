import React from "react";
import { Link } from "react-router-dom";

const DeleteNote = props => {
  return (
    <div className="delete-container">
      <h4>Are you sure you want to delete this?</h4>
      <button>DELETE</button>
      <Link to="/notes">
        <button>NO</button>
      </Link>
    </div>
  );
};

export default DeleteNote;
