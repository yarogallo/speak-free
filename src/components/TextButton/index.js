import React from 'react';
import PropTypes from 'prop-types';
import "./style/style.css";

function TextButton({text, customClasses, onClickHandler, disabled}) {
	const disabledStyle = {};
	if(disabled){
		disabledStyle.opacity = 0.5;
	}
	return (
		<button className={`text-button ${customClasses}`} onClick={onClickHandler} disabled={disabled} style={disabledStyle}>
			{text}
		</button>
	);
}

TextButton.propTypes = {
	text: PropTypes.string.isRequired,
	customClasses: PropTypes.string,
	onClickHandler: PropTypes.func,
	disabled: PropTypes.bool
}

TextButton.defaultProps = {
	text: 'click me',
	customClasses: '',
	onClickHandler: () => {},
	disabled: false
};

export default TextButton;