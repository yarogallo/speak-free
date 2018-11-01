import React, { Component } from 'react';
import LogIn from './log-in';
import MainView from './main-view';
import { Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import { store } from '../store/index';



class App extends Component {
  render() {
    return (        
       <Provider>
         <div>
            <Route path="/" exact component={LogIn} />
            <Route path="/:mainview" render={ props => {
              return (
                <MainView {...props}/>
              );
            }}/>
          </div>
      </Provider>
    );
  }
}
export default App;
