import React, { Component } from "react";
import Person from "./Person/Person";

class People extends Component {
  constructor(props) {
    super(props);
    console.log("[People.js] Inside constructor", props);
  }

  componentWillMount() {
    console.log("[People.js] Inside componentWillMount");
  }

  componentDidMount() {
    console.log("[People.js] Inside componentDidMount");
  }

  render() {
    console.log('[People.js] Inside render()');
    return this.props.people.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          click={() => this.props.clicked(index)}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default People;
