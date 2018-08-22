import React, { Component } from 'react';
import MainHeader from './MainHeader';
import Profile from './Profile';
import HomeView from './HomeView';

class MainView extends Component {
	render() {
		return(
			<section>
          		<MainHeader/>
				  <div className="container">
				  	<HomeView/>  
				  </div>	
      		</section>
		);
	}
}


export default MainView;