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
      // console.log("note id: ", note.id)
      // console.log("params id: ", this.props.match.params.id)
      if (note.id == this.props.match.params.id) {
        // const note = note;
        // console.log(note)
        return note;
      }
      // return note;
    });
    // console.log("params ", this.props.match.params.id)
    // console.log("note.id", this.state.note.id)
    //== vs === know the difference
    // console.log("note ", this.props.note.id)

    return (
      <React.Fragment>
        <div className="e_d-buttons">
          <Link to={`/notes/edit/${note.id}`}>
            <div>Edit</div>
          </Link>
          <Link to={`/notes/delete/${note.id}`}>
            <div>Delete</div>
          </Link>
        </div>
        <div className="note-container">
          <div>{note.title}</div>
          <div>{note.content}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default SingleNote;
