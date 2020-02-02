import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja'

class App extends Component{
state = {
  ninjas:[
    {name:'james',age:23,id:1},
    {name:'ali',age:22,id:2},
    {name:'zabi',age:20,id:3}
  ]
}
addNinja = (ninja) =>{
  console.log(ninja);
  ninja.id = Math.random();
  let ninjas = [...this.state.ninjas,ninja];
  this.setState({
    ninjas:ninjas
  })
}
deleteNinja = (id) =>{
  console.log(id);
  let ninjas = this.state.ninjas.filter(ninja =>{
    return ninja.id !== id
  });
  this.setState({
    ninjas:ninjas
  })
}
componentDidMount(){
  console.log('componentDidMount');
}
componentDidUpdate(prevProps,prevState){
  console.log('componentDidUpdate');
  console.log(prevProps,prevState);
}
render() {
  return (
    <div className="App">
      <h1>My First React app!</h1>
      <p>Welcome :)</p>
    {/* <Ninjas name="Muhammad Idrees" age="27" birthday="18 January 1994" /> */}
    <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}  />

    <AddNinja addNinja={this.addNinja} />
    </div>
  );
}
}
export default App;
