import React, { Component } from 'react';
import HeaderView from './header-view';
import Profile from './profile-view';
import HomeView from './home-view';
import './main-view.css';

class MainView extends Component {
	render() {
		return(
			<section>
          		<HeaderView/>
				  <div className="o-container">
				  	<HomeView/>  
				  </div>	
      		</section>
		);
	}
}


export default MainView;