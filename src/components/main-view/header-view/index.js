import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './header-view.css';

class HeaderView extends Component {
	render() {
		const TABS = {
			home: 'home',
			profile: 'profile',
			comment: 'comment'
		};
		const {
			activeTab
		} = this.props;
		
		const borderBottom = {
			borderColor: "var(--main-color-gray)" 
		};
		return(
			<header className="header-view">
				<nav className="header-view-navigation">
					<a href="#" 
						className="header-view-navigation__item header-view-navigation__item_blue"
						style={activeTab === TABS.home ? borderBottom : {}}>home</a>
					<a 
						href="#" 
						className="header-view-navigation__item header-view-navigation__item_lila"
						style={activeTab === TABS.profile ? borderBottom : {}}>profile</a>
					<a 
						href="#" 
						className="header-view-navigation__item header-view-navigation__item_red"
						style={activeTab === TABS.comment ? borderBottom : {}}>comment</a>
				</nav>
			</header>
		);
	}
}

HeaderView.propTypes = {
	activeTab: PropTypes.string.isRequired,
}

HeaderView.defaultProps = {
	activeTab: 'home'
}

export default HeaderView;