import React from 'react';
import PropTypes from 'prop-types';
import './personal-card.css';

function PersonalCard(props) {
	const {
		firstName,
		email,
		date
	} = props.personalInfo;
	const { customClasses } = props;
	return(
		<article className={`personal-card ${customClasses}`}>
			<header className="personal-card__header">
				<p className="personal-card__header__name">{firstName}</p>
			</header>
			<div className="personal-card__info">	
				<p className="personal-card__info__email">{email}</p>
				<p className="personal-card__info__date">{`joined ${date[0]} ${date[1]}`}</p>
			</div>
		</article>
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