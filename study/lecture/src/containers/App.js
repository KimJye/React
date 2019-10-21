import React, { useState } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

const App = () => {
  const [personsState, setPersonsState] = useState({
    persons:[
      { id: 'asfa1', name: "max", age: 28 },
      { id: 'asfa2', name: "Manu", age: 29 },
      { id: 'asfa3', name: "RUBY", age: 26 }
    ],
    showPersons: false
  });

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...personsState.persons[personIndex]};
 
    person.name = event.target.value;
  
    const persons = [...personsState.persons];

    persons[personIndex] = person;

    setPersonsState({ persons: persons, showPersons: true});
  }

  const deletePersonHandler = (personIndex) => {
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({ persons: persons, showPersons:true})
  }

  const togglePersonsHandler = () => {
    const doesShow = personsState.showPersons;
    setPersonsState({
      persons: [
        { id: 'asfa1', name: "max", age: 28 },
        { id: 'asfa2', name: "Manu", age: 29 },
        { id: 'asfa3', name: "RUBY", age: 26 }
      ],
      showPersons: !doesShow
    });
  }

  let persons = null;

  if(personsState.showPersons){
    persons = <Persons 
        persons = {personsState.persons}
        clicked = {deletePersonHandler}
        changed = {nameChangedHandler}/>;
  }

  return (
    <div className={classes.App}>
      <Cockpit
        showPersons={personsState.showPersons}
        persons = {personsState.persons}
        clicked = {togglePersonsHandler}/>
      {persons}
    </div>
  );
}

export default App;
