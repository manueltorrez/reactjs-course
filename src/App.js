import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    people: [
      { id: 'jfo', name: "Manuel", age: 20 },
      { id: 'uio', name: "Ashton", age: 34 },
      { id: 'qkj', name: "Charlie", age: 44 }
    ],
    otherState: "Some other value",
    showPeople: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.people[personIndex]
    }

    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person;

    this.setState({ people: people });
  };

  deletePersonHandler = personIndex => {
    //const people = this.state.people.slice();
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({ people: people });
  };

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({ showPeople: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
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
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
    }

    let classes = [];
    if(this.state.people.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if(this.state.people.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>Is this working?</p>
        <button style={style} onClick={this.togglePeopleHandler}>
          Toggle people
        </button>

        {people}
      </div>
    );
  }
}

export default App;
