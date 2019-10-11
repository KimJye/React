import React from 'react';
import Name from './Name';

 class Ex1 extends React.Component { 
       render() {    
            let p = [];  
            for (let i = 0; i < this.props.count; i++) 
                    p.push(<Name value={this.props.name} index={i}/>);   
           
             return (      
                <div>       
                     <h3>{ p } ({ this.props.count })</h3>      
                 </div> 
                );
            }
         }
Ex1.defaultProps = {  
     count: 1,   
     name: 'anonymouse', 
}; 
export default Ex1; 
