import React, { Component } from 'react';
import MainHeader from '../MainHeader';
import Profile from '../Profile';

class MainView extends Component {
	render() {
		return(
			<div className="container">
          		<MainHeader/>
				<Profile/>
      		</div>
		);
	}
}


export default MainView;