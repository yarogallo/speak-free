import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from '../../images/speech-bubbles.svg';
import './style/style.css';
import BasicSearchInput from '../BasicSearchInput/index';

class MainHeader extends Component {
	render() {
		const {onSearchOpinions} = this.props;
		return(
			<header className="row main-header">
				<div className="header-container">					
					<nav className="navigation">
						<a href="#"><span>home</span></a>
						<a href="#"><span>say something</span></a>
					</nav>
					<div className="logo center">
						<img src={Logo} alt="main logo"/>
					</div>
					<div  className="search center">	
						<BasicSearchInput text="search opinions" onPressSearch={onSearchOpinions}/>
					</div>
				</div>
			</header>
		);
	}
}

MainHeader.propTypes = {
	onSearchOpinions: PropTypes.func
}

export default MainHeader;