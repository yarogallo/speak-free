import React, { Component } from 'react';
import './home-view.css';

class HomeView extends Component {
	render() {
		return(
			<section className="home-view">
				<section className="home-view__left-column"></section>
				<section className="home-view__center-column"></section>
				<section className="home-view__right-column"></section>
			</section>
		);
	}
}
export default HomeView;