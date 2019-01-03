import React from 'react';
import classes from  './Person.module.css';

const person = (props) => {
    const random = Math.random();
    
    if(random > 0.7) {
        throw new Error ('Something went wrong.');
    }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm a {props.name}, I guess. And I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}

export default person;