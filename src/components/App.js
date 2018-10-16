import React, { Component } from 'react';
import LogIn from './log-in';
import MainView from './main-view';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (        
       <div>
          <Route path="/" exact component={LogIn} />
          <Route path="/:mainview" render={ props => {
            return (
              <MainView {...props}/>
            );
          }}/>
      </div>
    );
  }
}
export default App;
