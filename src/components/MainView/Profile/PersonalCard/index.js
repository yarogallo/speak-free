import React from 'react';
import PropTypes from 'prop-types';
import './style/style.css';

function PersonalCard(props) {
	const {
		firstName,
		email,
		date
	} = props.personalInfo;
	const { customClasses } = props;
	return(
		<div className={`personal-card ${customClasses}`}>
			<p className="first-name">{firstName}</p>
			<p className="email">{email}</p>
			<p className="date">{`joined ${date[0]} ${date[1]}`}</p>
		</div>
	);
}

PersonalCard.propTypes = {
	personalInfo: PropTypes.object.isRequired,
	customClasses: PropTypes.string
};

PersonalCard.defaultProps = {
	personalInfo: {
		firstName: "Jonh",
		email: "example@gmail.com",
		date: ["may", 2015]
	},
	customClasses: ""
}


export default PersonalCard;