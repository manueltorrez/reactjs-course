import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { name: 'Manuel', age: 20 },
      { name: 'Ashton', age: 34 },
      { name: 'Charlie', age: 44 }
    ]
  }

  switchNameHandler() {
    console.log('Clicked');
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Is this working?</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age}/>
        <Person name={this.state.people[1].name} age={this.state.people[1].age}>My hobbies: to be a bad actor.</Person>
        <Person name={this.state.people[2].name} age={this.state.people[2].age}/>
      </div>
    );
  }
}

export default App;
