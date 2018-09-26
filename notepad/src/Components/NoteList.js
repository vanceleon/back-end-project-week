import React from "react";
import Note from "./Note";

const NoteList = props => {
  return (
    <React.Fragment>
      <h2>Your Notes:</h2>
      <div className="note-cards">
        {props.notes.map(note => {
          return (
            <div>
              <Note key={props.id} note={note} getById={props.getById}/>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default NoteList;
