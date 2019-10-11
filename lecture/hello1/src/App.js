import React from 'react';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
class App extends React.Component{
    render(){
        return(
            <div>
              <Ex1/>
              <Ex1 name="user1" count="5"/>
              <Ex1 name="사용자"/>
              <Ex1 count="3"/>

              <Ex2/>
            </div>
        );
    }
}
export default App;