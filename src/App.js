import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Is this working?</p>
        <Person name="Manuel" age="20"/>
        <Person name="Ashton" age="34">My hobbies: to be a bad actor.</Person>
        <Person name="Charlie" age="44"/>
      </div>
    );
  }
}

export default App;
