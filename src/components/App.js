import React, { Component } from 'react';
import LogIn from './log-in';
import MainView from './main-view';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (        
       <div>
          <Route path="/" exact component={LogIn} />
          <Route path="/home" component={MainView} /> 
      </div>
    );
  }
}
export default App;
