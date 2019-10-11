import React from 'react';

class Details extends React.Component{
    constructor(props){
        super(props);

        this.state={
            currentIndex: -1,
        };
    }
    render(){

        let r =[]
        for(let i=0; i<this.props.count; i++){
           r.push(<span key={i} onClick={this.handlerClick.bind(this,
        i)}>
            {i <= this.state.currentIndex ? '★':'☆'}
            </span>);
        
        }
        return <div className="details">
            {r}
        </div>;
    }
    handlerClick(i){
        this.setState({currentIndex:i});
    }

}
export default Details;