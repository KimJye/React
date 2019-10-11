import React from 'react'; 
import './Person.css'; 

class Person extends React.Component {   
    render() {     
        let person = this.props.value;     
        return (       
        <table className="Person">         
            <tr>           
                <td>name</td>           
                <td>{ person.name }</td>         
            </tr>         
            <tr>           
                <td>age</td>          
                <td>{ person.age }</td>         
            </tr>       
        </table>     
        );   
    }
} 
export default Person; 
