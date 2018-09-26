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
      // // const note = this.state.notes.find(note, id => {
          // //     console.log("single Note: ", note, id)
          // //     // return note.id === props.match.params.id;
          // });
          console.log("singlenote ", this.state.notes)
          
          return (
      <div className="note-container">
        {console.log("notes-singleNotes: ", this.state.notes)}
        <Link to={`/notes/edit/${this.state.notes.id}`}>
          <div>Edit</div>
        </Link>
        <Link to={`/notes/delete/${this.state.notes.id}`}>
          <div>Delete</div>
        </Link>
        {}
        <h1>{this.state.notes.title}</h1>
        
        {/* {this.state.note} */}

      </div>
    );
  }
}

export default SingleNote;
