import React, { PureComponent } from "react";
import classes from "./App.module.css";
import People from "../components/People/People";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside constructor", props);
    this.state = {
      people: [
        { id: "jfo", name: "Manuel", age: 20 },
        { id: "uio", name: "Ashton", age: 34 },
        { id: "qkj", name: "Charlie", age: 44 }
      ],
      otherState: "Some other value",
      showPeople: false,
      toggleClicked: 0,
      authenticated: false
    };
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount");
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount");
  }

  /*shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    return nextState.people !== this.state.people || nextState.showPeople !== this.state.showPeople;
  }*/

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE App.js] Inside componentWillUpdate",
      nextProps,
      nextState
    );
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "[UPDATE App.js] Inside getDerivedStateFromProps",
      nextProps,
      prevState
    );

    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log("[UPDATE App.js] Inside getSnapshotBeforeUpdate");
  }

  componentDidUpdate() {
    console.log("[UPDATE App.js] Inside componentDidUpdate");
  }

  /*state = {
    people: [
      { id: "jfo", name: "Manuel", age: 20 },
      { id: "uio", name: "Ashton", age: 34 },
      { id: "qkj", name: "Charlie", age: 44 }
    ],
    otherState: "Some other value",
    showPeople: false
  };*/

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
    this.setState((prevState, props) => {
      return {
        showPeople: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      };
    });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {
    console.log("[App.js] Inside render()");
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
      <>
        <button
          onClick={() => {
            this.setState({ showPeople: true });
          }}
        >
          Show People
        </button>
        <Cockpit
          showPeople={this.state.showPeople}
          people={this.state.people}
          login={this.loginHandler}
          clicked={this.togglePeopleHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {people}
        </AuthContext.Provider>
      </>
    );
  }
}

export default withClass(App, classes.App);
