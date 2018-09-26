import React, { Component } from "react";
import { Link } from "react-router-dom";

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
              return note.id === this.props.match.params.id;
          });
          console.log("params ", this.props.match.params.id)
          console.log("note.id", this.state.note.id)
          //== vs === know the difference
            console.log("note ", this.props.note)
          
          return (
      <div className="note-container">
        
        <Link to={`/notes/edit/${this.state.notes.id}`}>
          <div>Edit</div>
        </Link>
        <Link to={`/notes/delete/${this.state.notes.id}`}>
          <div>Delete</div>
        </Link>
        {}
        <h1>{note}</h1>
        
        {/* {this.state.note} */}

      </div>
    );
  }
}

export default SingleNote;
