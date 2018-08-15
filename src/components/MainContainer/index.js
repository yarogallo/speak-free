import React, { Component } from 'react';
import MainHeader from '../MainHeader';
import MainView from '../MainView';


class MainContainer extends Component {
	render() {
		return(
			<div className="container">
          		<MainHeader/>
				<MainView/>
      		</div>
		);
	}
}


export default MainContainer;