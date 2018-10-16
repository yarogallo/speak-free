import React, { Component } from 'react';
import HeaderView from './header-view';
import { Route } from 'react-router-dom';
import Profile from './profile-view';
import HomeView from './home-view';
import './main-view.css';


class MainView extends Component {
	render() {
		console.log(this.props, "dgfjhsdfgj");
		const { mainview } = this.props.match.params;
		const { url } = this.props.match.url;
		return(
			<section>
          		<HeaderView/>

				<div className="o-container">
					{ mainview === "home" 
					? <HomeView/>
					: <Profile selectedTab = "opinions" url={url}/>}
				</div>	
      		</section>
		);
	}
}


export default MainView;