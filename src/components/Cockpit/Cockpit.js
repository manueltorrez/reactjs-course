import React from "react";
import classes from "./Cockpit.module.css";

const cockpit = props => {
  let assignedClasses = [];
  let btnClass = classes.Button;

  if (props.showPeople) {
    btnClass = [classes.Button, classes.Red].join(" ");
  }

  if (props.people.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.people.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>Is this working?</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle people
      </button>
    </>
  );
};

export default cockpit;
