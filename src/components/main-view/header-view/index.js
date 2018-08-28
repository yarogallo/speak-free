import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './images/speech-bubbles.svg';
import './header-view.css';
import SearchForm from '../../search-form';

class HeaderView extends Component {
	render() {
		const {onSearchOpinions} = this.props;
		return(
			<header className="header-view-container">
				<div className="header-view">
								
					<nav className="header-view-navigation">
						<a href="#" className="header-view-navigation__item"><span>home</span></a>
						<a href="#" className="header-view-navigation__item"><span>say something</span></a>
					</nav>
					
					<div className="header-view-logo header-view-logo_center">
						<img src={Logo} alt="main logo"/>
					</div>
					
					<div  className="header-view-search header-view-search_center">	
						<SearchForm text="search opinions" onPressSearch={onSearchOpinions}/>
					</div>
					
				</div>
			</header>
		);
	}
}

HeaderView.propTypes = {
	onSearchOpinions: PropTypes.func
}

export default HeaderView;