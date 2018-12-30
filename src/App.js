import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    people: [
      { name: "Manuel", age: 20 },
      { name: "Ashton", age: 34 },
      { name: "Charlie", age: 44 }
    ],
    otherState: "Some other value",
    showPeople: false
  };

  switchNameHandler = newName => {
    // DO NOT DO THIS: this.state.people[0].name = 'MANUELOTE';
    this.setState({
      people: [
        { name: newName, age: 20 },
        { name: "ASHTON", age: 34 },
        { name: "CHARLIE", age: 45 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      people: [
        { name: "Manuel", age: 20 },
        { name: event.target.value, age: 34 },
        { name: "Charlie", age: 44 }
      ]
    });
  };

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({ showPeople: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "0.5rem",
      cursor: "pointer"
    };

    let people = null;

    if (this.state.showPeople) {
      people = (
        <div>
          { this.state.people.map(person => {
            return <Person name={person.name} age={person.age} />
          }) }

        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Is this working?</p>
        <button style={style} onClick={this.togglePeopleHandler}>
          Toggle people
        </button>

        { people }
      </div>
    );
  }
}

export default App;
