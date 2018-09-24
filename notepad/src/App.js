import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';
import NoteList from './Components/NoteList';
import NoteForm from './Components/NoteForm';


const url = "http://localhost:8000/notes";



class App extends Component {
  state = {
    notes: [],
    id: "",
    title: "",
    content: "",

  }


  onChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  componentDidMount() {
    axios
      .get(url)
      .then(response => {
        this.setState ({
          notes: response.data
        });
      })
      .catch(error => console.log("Error: ", error))
  }

  newNote = event => {
    event.preventDefault();
    const notes = this.state.notes;
    notes.push({
        id: this.state.id,
        title: this.state.title,
        content: this.state.content
    });
    this.setState({notes, id: "", title: "", content: ""});
  };



  render() {
    return (
      <div className="App">
        <Route exact path="/notes"
         render={props => {
           return<NoteList {...props} notes={this.state.notes}/>;
        }}
        />
        <Route
          exact path="/noteform"
          render={props => {
            return (
              <NoteForm 
                {...props}
                noteChange={this.onChange}
                newNote={this.newNote}

              />
            )
          }}
        />
      </div>
    );
  }
}

export default App;
