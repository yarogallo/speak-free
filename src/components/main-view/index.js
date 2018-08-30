import React, { Component } from 'react';
import HeaderView from './header-view';
import { Route } from 'react-router-dom';
import Profile from './profile-view';
import HomeView from './home-view';
import './main-view.css';

class MainView extends Component {
	render() {
		return(
			<section>
          		<HeaderView/>
				  <div className="o-container">
				  	<Route path="/home" component={HomeView}/>  
				  	<Route path="/profile" component={Profile}/>  
				  </div>	
      		</section>
		);
	}
}


export default MainView;