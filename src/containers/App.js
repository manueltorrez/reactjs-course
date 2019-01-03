import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "../components/People/Person/Person";

class App extends Component {
  state = {
    people: [
      { id: "jfo", name: "Manuel", age: 20 },
      { id: "uio", name: "Ashton", age: 34 },
      { id: "qkj", name: "Charlie", age: 44 }
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
    };

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
    let people = null;
    let btnClass = "";

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if (this.state.people.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.people.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>Is this working?</p>
        <button className={btnClass} onClick={this.togglePeopleHandler}>
          Toggle people
        </button>

        {people}
      </div>
    );
  }
}

export default App;
