import React from 'react';
import PropTypes from 'prop-types';
import './style/style.css';

function PersonalCard(props) {
	const {
		firstName,
		email,
		date
	} = props.personalInfo;
	const { customClass } = props.customClass;
	return(
		<div className="personal-card">
			<p className="first-name">{firstName}</p>
			<p className="email">{email}</p>
			<p className="date">{`joined ${date[0]} ${date[1]}`}</p>
		</div>
	);
}

PersonalCard.propTypes = {
	personalInfo: PropTypes.object.isRequired,
	customClass: PropTypes.string
};

PersonalCard.defaultProps = {
	personalInfo: {
		firstName: "Jonh",
		email: "example@gmail.com",
		date: ["may", 2015]
	},
	customClass: ""
}


export default PersonalCard;