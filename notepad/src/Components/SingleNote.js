import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

class SingleNote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            notes: props.notes,
        };
    }

    render() {
        const note = this.props.notes.find(note => {
            return note.id === this.props.match.params.id;
        });
        console.log("notes-singleNotes: ", this.props.notes);
        return (
            <div className="note-container">
                {this.props.notes}
            </div>
        )
    }
}

export default SingleNote;