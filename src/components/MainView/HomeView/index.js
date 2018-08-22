import React, { Component } from 'react';
import './style/style.css';

class HomeView extends Component {
	render() {
		return(
			<section className="row home">
				<section className="left-column lateral-margins"></section>
				<section className="center-column lateral-margins"></section>
				<section className="right-column lateral-margins"></section>
			</section>
		);
	}
}
export default HomeView;