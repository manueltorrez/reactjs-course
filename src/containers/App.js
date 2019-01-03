import React, { Component } from "react";
import classes from "./App.module.css";
import People from "../components/People/People";
import Cockpit from "../components/Cockpit/Cockpit";

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

    if (this.state.showPeople) {
      people = (
        <People
          people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPeople={this.state.showPeople}
          people={this.state.people}
          clicked={this.togglePeopleHandler}
        />
        {people}
      </div>
    );
  }
}

export default App;
