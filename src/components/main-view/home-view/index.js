import React, { Component } from 'react';
import './home-view.css';
import HomePersonalCard from './home-personal-card';

class HomeView extends Component {
	render() {
		return(
			<section className="home-view">
				<section className="home-view__left-column">
					<a href="#" className="home-view__profile-anchor">
						<HomePersonalCard/>
					</a>
				</section>
				<section className="home-view__center-column"></section>
				<section className="home-view__right-column"></section>
			</section>
		);
	}
}
export default HomeView;