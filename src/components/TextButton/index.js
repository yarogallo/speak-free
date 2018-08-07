import React from 'react';
import PropTypes from 'prop-types';
import "./style/style.css";

function TextButton({text, style}) {
	const customClass = style || ""; 
	return (
		<button className={`text-button ${customClass}`}>
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