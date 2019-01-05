import React, { Component } from "react";
import PropTypes from 'prop-types';

import classes from "./Person.module.css";
import withClass from '../../../hoc/withClass';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside constructor", props);
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount");
  }

  render() {
    console.log('[Person.js] Inside render()');
    return (
      <>
        <p onClick={this.props.click}>
          I'm a {this.props.name}, I guess. And I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
