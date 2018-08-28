import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../../../search-form';
import HomeSpeakerCard from '../home-speaker-card/index';

import './home-search-people.css';


class HomeSearchPeople  extends Component {
	render() {
		const { 
			customClass,
			searchResultUsers
		 } = this.props;
		return(
			<div className={`home-search ${customClass}`}>
				<h3 className="home-search__title">Find people to follow...</h3>
				<SearchForm text="search people" customClass="home-search__form"/>
				<div className="home-search__result">
					<ul className="home-search__ul">
						{searchResultUsers.map((user, index) => (
							<li className="home-search__li" key={index}><HomeSpeakerCard/></li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

HomeSearchPeople.propTypes = {
	customClass: PropTypes.string,
	searchResultUsers: PropTypes.array,
};

HomeSearchPeople.defaultProps = {
	customClass: "",
	searchResultUsers: [],
};

export default HomeSearchPeople;