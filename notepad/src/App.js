import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';
import NoteList from './Components/NoteList';


const url = "http://localhost:8000/notes";



class App extends Component {
  state = {
    notes: [],
  }

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

  render() {
    return (
      <div className="App">
        <Route exact path="/notes"
         render={props => {
           return<NoteList {...props} notes={this.state.notes}/>;
        }}
        />
      </div>
    );
  }
}

export default App;
