import React, {Component} from 'react';

class Ninjas extends Component{
render(){
    // console.log(this.props);
    const {name,age,birthday } = this.props;
    return(
        <div className="ninja">
        <div>Name: {name }</div>
        <div>Age: { age }</div>
        <div>Birthday: {birthday }</div>
        </div>
    )
}
}

export default Ninjas