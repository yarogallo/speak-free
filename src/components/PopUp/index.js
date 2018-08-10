import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style/style.css';

class PopUp extends Component {
	render() {
		const { text, customClass, closePopUp, visibility } = this.props;
		const elem = visibility 
		             	? ( <div className={`pop-up ${customClass}`}>
								<button className="pop-up-button" onClick={closePopUp}>x</button>
								<p className= "pop-up-text">{text}</p>
							</div>)
						: null	
		return elem;
	}
}

PopUp.propTypes = {
	text: PropTypes.string.isRequired,
	customClass: PropTypes.string,
	closePopUp: PropTypes.func,
	visibility: PropTypes.bool.isRequired,
};

PopUp.defaultProps = {
	text: "pop up",
	customClass: "",
	closePopUp: () => {},
	visibility: false
};

export default PopUp;