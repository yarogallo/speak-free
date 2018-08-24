import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './pop-up.css';

function PopUp(props) {	
	const { text, customClass, closePopUp, visibility } = props;
	const {top, right, bottom, left} = props.position;
	
	return visibility 
				? ( <div className={`pop-up ${customClass}`} 
					style={{
							top: `${top}px`,
							right: `${right}px`,
							bottom: `${bottom}px`,
							left: `${left}px`
					}}>
					<button className="pop-up__button" onClick={closePopUp}>x</button>
					<p className= "pop-up__text">{text}</p>
				</div>)
				: null;
}

PopUp.propTypes = {
	text: PropTypes.string.isRequired,
	customClass: PropTypes.string,
	closePopUp: PropTypes.func,
	visibility: PropTypes.bool.isRequired,
	position: PropTypes.object.isRequired
};

PopUp.defaultProps = {
	text: "pop up",
	customClass: "",
	closePopUp: () => {},
	visibility: false,
	position: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
	}
};

export default PopUp;