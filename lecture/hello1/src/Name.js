import React from 'react';
import './Name.css';

class Name extends React.Component{
    render(){
        return (
         <div className="name" onClick={this.handleClick.bind(this)}>
            {this.props.value}
        </div>
        );
    }

    handleClick(e){
        alert(`${this.props.value} (${this.props.index})`);
    }
}

Name.defaultProps = {
    value: 'anonymouse',
};

export default Name;