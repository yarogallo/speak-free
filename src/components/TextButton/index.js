import React from 'react';
import PropTypes from 'prop-types';
import "./style/style.css";

function TextButton({text, customClasses, onClickHandler}) {
	return (
		<button className={`text-button ${customClasses || ""}`} onClick={onClickHandler}>
			{text}
		</button>
	);
}

TextButton.propTypes = {
	text: PropTypes.string.isRequired
}

TextButton.defaultProps = {
	text: 'click me'
};

export default TextButton;