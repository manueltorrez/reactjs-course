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

  nameChangedHandler = event => {
    this.setState({
      people: [
        { name: "Manuel", age: 20 },
        { name: event.target.value, age: 34 },
        { name: "Charlie", age: 44 }
      ]
    });
  };

  deletePersonHandler = personIndex => {
    const people = this.state.people;
    people.splice(personIndex, 1);
    this.setState({ people: people });
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
          {this.state.people.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
              />
            );
          })}
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

        {people}
      </div>
    );
  }
}

export default App;
