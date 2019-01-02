import React from 'react';
import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm a {props.name}, I guess. And I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}

export default person;