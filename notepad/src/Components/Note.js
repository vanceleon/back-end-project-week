import React from "react";
import { Link } from "react-router-dom";


const Note = props => {
    return (
        <div key={props._id}>
            <div className="note-header">{props.note.title}</div>
            <div className="note-content">{props.note.content}</div>
        </div>
    );
};

export default Note;