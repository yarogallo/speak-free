import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './header-view.css';
import SearchForm from '../../search-form';

class HeaderView extends Component {
	render() {
		return(
			<header className="header-view">
				<nav className="header-view-navigation">
					<a href="#" className="header-view-navigation__item header-view-navigation__item_blue">home</a>
					<a href="#" className="header-view-navigation__item header-view-navigation__item_lila">profile</a>
					<a href="#" className="header-view-navigation__item header-view-navigation__item_red">comment</a>
				</nav>
			</header>
		);
	}
}

HeaderView.propTypes = {
	
}

export default HeaderView;