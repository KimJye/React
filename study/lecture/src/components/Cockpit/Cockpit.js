import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
  
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(()=>{
      alert('sssaved data')
    },1000)
  }, []);

  

  const assignedClasses = [];

  let btnClass = '';

  if(props.showPersons){
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red)
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <div className = {classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>kimjye</p>
      <button className={btnClass}
        onClick={props.clicked}>toggle person</button>
    </div>
  );
};

export default Cockpit