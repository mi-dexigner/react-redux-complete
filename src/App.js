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
render() {
  return (
    <div className="App">
      <h1>My First React app!</h1>
      <p>Welcome :)</p>
    {/* <Ninjas name="Muhammad Idrees" age="27" birthday="18 January 1994" /> */}
    <Ninjas ninjas={this.state.ninjas}  />

    <AddNinja />
    </div>
  );
}
}
export default App;
