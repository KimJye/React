import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

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
    const personIndex = personsState.findIndex(p => {
      return p.id === id;
    });

    const person = {...personsState[personIndex]};

    person.name = event.target.name.value;

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

  const style={
    backgroundColor: "green",
    color: "white",
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: "pointer"
  };

  let persons = null;

  if(personsState.showPersons){
    persons = 
    (<div>
      {personsState.persons.map((person, index) => {
        return <Person 
          click={()=>deletePersonHandler(index)}
          name={person.name} 
          age={person.age}
          key={person.id}
          changed={(event)=> nameChangedHandler(event, person.id)}/>
      })}
    </div> 
    );

    style.backgroundColor = 'red'
  }

  const classes = []
  if(personsState.persons.length <=2){
    classes.push('red')
  }

  if(personsState.persons.length<=1){
    classes.push('bold')
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(' ')}>kimjye</p>
      <button
        style={style} 
        onClick={togglePersonsHandler}>toggle person</button>
        {persons}
    </div>
  );
}

export default App;
