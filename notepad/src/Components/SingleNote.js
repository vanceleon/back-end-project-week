import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SingleNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.note,
      title: "",
      content: ""
    };
  }

  render() {
      const note = this.state.notes.find(note => {
          console.log("note id: ", note.id) 
          console.log("params id: ", this.props.match.params.id)    
        if (note.id == this.props.match.params.id) {
          // const note = note;
          console.log(note)
          return note;
        };
        // return note;
          });
          // console.log("params ", this.props.match.params.id)
          // console.log("note.id", this.state.note.id)
          //== vs === know the difference
            // console.log("note ", this.props.note.id)
          
          return (
      <div className="note-container">
        
        <Link to={`/notes/edit/${note.id}`}>
          <div>Edit</div>
        </Link>
        <Link to={`/notes/delete/${note.id}`}>
          <div>Delete</div>
        </Link>
        <h1>{note.title}</h1>
        <h1>{note.content}</h1>
        

      </div>
    );
  }
}

export default SingleNote;
