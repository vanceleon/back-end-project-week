import React, { Component } from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import NoteList from "./Components/NoteList";
import NoteForm from "./Components/NoteForm";
import SingleNote from "./Components/SingleNote";
import DeleteNote from "./Components/DeleteNote";
import EditNote from "./Components/EditNote";


const url = "http://localhost:8000/notes";

class App extends Component {
  state = {
    notes: [],
    id: "",
    title: "",
    content: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    axios
      .get(url)
      .then(response => {
        this.setState({
          notes: response.data
        });
      })
      .catch(error => console.log("Error: ", error));
  }

  newNote = event => {
    event.preventDefault();
    const notes = this.state.notes;
    notes.push({
      id: this.state.id,
      title: this.state.title,
      content: this.state.content
    });
    this.setState({ notes, id: "", title: "", content: "" });
  };

  render() {
    const id = req.params.id;
    return (

      <div className="App">
        <div className="side-bar">
          <aside className="sidebar-left">
            <h1>Lambda Notes</h1>
            <Link to="/notes">
              <button>View Your Notes</button>
            </Link>
            <Link to="/noteform">
              <button>Create New Note</button>
            </Link>
          </aside>
        </div>

        <Route
          exact
          path="/notes"
          render={props => {
            return <NoteList {...props} notes={this.state.notes} />;
          }}
        />
        <Route
          exact
          path="/noteform"
          render={props => {
            return (
              <NoteForm
                {...props}
                noteChange={this.onChange}
                newNote={this.newNote}
                id={this.state.id}
                title={this.state.title}
                content={this.state.content}
              />
            );
          }}
        />
        <Route
          exact
          path="/notes/:id"
          render={props => {
            return <SingleNote {...props} notes={this.state.notes} />;
          }}
        />
        <Route
          exact
          path={`/notes/edit/${id}`}
          render={props => {
            return (
              <EditNote
                {...props}
                onChange={this.onChange}
                handleEdit={this.handleEdit}
              />
            );
          }}
        />

        <Route
          exact
          path={`/notes/delete/${id}`}
          render={props => {
            return <DeleteNote notes={this.state.notes} />;
          }}
        />
      </div>
    );
  }
}

export default App;
