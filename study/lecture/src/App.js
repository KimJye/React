import React, { useState } from 'react';
import classes from './App.css';

import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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

  let persons = null;
  let btnClass = '';

  if(personsState.showPersons){
    persons = 
    (<div>
      {personsState.persons.map((person, index) => {
        return <ErrorBoundary>
          <Person 
            click={()=>deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event)=> nameChangedHandler(event, person.id)}/>
        </ErrorBoundary>
      })}
    </div> 
    );

    btnClass = classes.Red;
  }

  const assignedClasses = []
  if(personsState.persons.length <=2){
    assignedClasses.push( classes.red)
  }

  if(personsState.persons.length<=1){
    assignedClasses.push( classes.bold)
  }

  return (
    <div className={classes.App}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>kimjye</p>
      <button className={btnClass}
        onClick={togglePersonsHandler}>toggle person</button>
        {persons}
    </div>
  );
}

export default App;
