import React, {Component} from 'react';
import Ninjas from './Ninjas';

class App extends Component{

render() {
  return (
    <div className="App">
      <h1>My First React app!</h1>
      <p>Welcome :)</p>
    <Ninjas name="Muhammad Idrees" age="27" birthday="18 January 1994" />
    <Ninjas name="Muhammad Bilal" age="22" birthday="22 May 1999" />
    </div>
  );
}
}
export default App;
