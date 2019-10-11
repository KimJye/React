import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons:[
      { name: "max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "RUBY", age: 26 }
    ]
  });

  const [userState, setUserState] = useState({
    username: "kimjye"
  });
  
  const switchNameHandler = (newName) => {
    // console.log("Was clicked!");
    // DON'T DO THIS : state.persons[0].name = "KimJye";
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "RUBY", age: 30 }
      ]
    });
  };

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "RUBY", age: 30 }
      ]
    });
  }

  // user
  const usernameChangedHandler = (event) => {
    setUserState({username: event.target.value});
  };

  const style={
    backgroundColor: "white",
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: "pointer"
  };

  return (
  <div className="App">
    <h1>Hi, I'm a React App</h1>
    <p>kimjye</p>
    <button
      style={style} 
      onClick={() => switchNameHandler('newName')}>Switch Name</button>
    <Person 
      name={personsState.persons[0].name} 
      age={personsState.persons[0].age} />
    <Person 
      name={personsState.persons[1].name} 
      age={personsState.persons[1].age}
      click={switchNameHandler.bind(this, 'new')}
      changed = {nameChangedHandler}> My Hobbies: Racing </Person>
    <Person 
      name={personsState.persons[2].name}
      age={personsState.persons[2].age}/>
    
    <br></br>
    <UserInput 
      changed={usernameChangedHandler}
      currentName={userState.username}/>
    <UserOutput userName={userState.username} />
    <UserOutput userName={userState.username}/>
    <UserOutput userName="MAX"/>
  </div>
  );
  //return React.createElement("div",{className:"App"},React.createElement('h1',null,"Does this work now?"));
}

export default App;
