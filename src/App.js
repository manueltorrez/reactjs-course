import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { name: 'Manuel', age: 20 },
      { name: 'Ashton', age: 34 },
      { name: 'Charlie', age: 44 }
    ],
    otherState: 'Some other value'
  }

  switchNameHandler = (newName) => {
    // DO NOT DO THIS: this.state.people[0].name = 'MANUELOTE';
    this.setState({ 
      people: [
        { name: newName, age: 20 },
        { name: 'ASHTON', age: 34 },
        { name: 'CHARLIE', age: 45 }
      ]
     });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Is this working?</p>
        <button onClick={ () => this.switchNameHandler('MIMIMIMIIMIMIMI') }>Switch name</button>
        <Person 
          name={this.state.people[0].name} 
          age={this.state.people[0].age} />
        <Person 
          name={this.state.people[1].name} 
          age={this.state.people[1].age}
          click={this.switchNameHandler.bind(this, 'MAX!')} >My hobbies: to be a bad actor.</Person>
        <Person 
          name={this.state.people[2].name} 
          age={this.state.people[2].age} />
      </div>
    );
  }
}

export default App;
