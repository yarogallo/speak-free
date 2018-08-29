import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HomePersonalCard from './home-personal-card';
import HomeSearchPeople from './home-search-people';
import OpinionThumbnail from '../../opinion-thumb';

import './home-view.css';
import SearchForm from '../../search-form';

class HomeView extends Component {
	render() {
		const { opinions } = this.props;
		return(
			<section className="home-view">
				<section className="home-view__left-column">
					<a href="#" className="home-view__profile-anchor">
						<HomePersonalCard customClasses="home-view_white-background"/>
					</a>
				</section>
				<section className="home-view__center-column">
					<div className="home-view-opinion-search">
						<SearchForm text="search opinions" customClass="home-view-input"/>
					</div>
					{opinions.map((opinion, index) => (
						<OpinionThumbnail key={index} opinionThum={opinion} customClass="home-view-opinion" editable={false}/>
					))}
				</section>
				<section className="home-view__right-column">
					<HomeSearchPeople customClass="home-view_white-background"/>
				</section>
			</section>
		);
	}
}

HomeView.propTypes = {
	opinions: PropTypes.array.isRequired,
};

HomeView.defaultProps = {
	opinions: [{
		subject: "This is a test",
		opinion: "This lorem ipsum generator is made for all the webdesigners, designers, webmasters and others who need lorem ipsum. Generator is made the way that everyone can use it, but especially for projects which need html markup. You can decide which html tags you want and our generator will generate just as you specified.This lorem ipsum generator is made for all the webdesigners, designers, webmasters and others who need lorem ipsum. Generator is made the way that everyone can use it, but especially for projects which need html markup. You can decide which html tags you want and our generator will generate just as you specified.",
		numComments: 5,
		numLikes: 26,
		date: {
			month: "september",
			day: 20,
			year: 2017
		},
		opinionId: 1
	}, {
		subject: "This is a test",
		opinion: "This lorem ipsum generator is made for all the webdesigners, designers, webmasters and others who need lorem ipsum. Generator is made the way that everyone can use it, but especially for projects which need html markup. You can decide which html tags you want and our generator will generate just as you specified.",
		numComments: 5,
		numLikes: 26,
		date: {
			month: "september",
			day: 20,
			year: 2017
		},
		opinionId: 2
	}, {
		subject: "This is a test",
		opinion: "This lorem ipsum generator is made for all the webdesigners, designers, webmasters and others who need lorem ipsum. Generator is made the way that everyone can use it, but especially for projects which need html markup. You can decide which html tags you want and our generator will generate just as you specified.",
		numComments: 5,
		numLikes: 26,
		date: {
			month: "september",
			day: 20,
			year: 2017
		},
		opinionId: 3
	}, {
		subject: "This is a test",
		opinion: "This lorem ipsum generator is made for all the webdesigners, designers, webmasters and others who need lorem ipsum. Generator is made the way that everyone can use it, but especially for projects which need html markup. You can decide which html tags you want and our generator will generate just as you specified.",
		numComments: 5,
		numLikes: 26,
		date: {
			month: "september",
			day: 20,
			year: 2017
		},
		opinionId: 4
	}]
};

export default HomeView;