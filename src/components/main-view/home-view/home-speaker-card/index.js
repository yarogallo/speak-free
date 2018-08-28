import React from 'react';
import PropTypes from 'prop-types';
import TextButton from '../../../text-button';
import './home-speaker-card.css';

function HomeSpeakerCard({ personalInfo, onFollow, customClasses, onCloseUserCard }) {
	const {
		firstName,
		email
	} = personalInfo;
	const endIndex = email.indexOf('@') + 1;
	return(
		<div className={`home-speker-card ${customClasses}`}>
			<div className="home-speaker__header">
				<a href="#" className="home-speaker__profile-link">{`${firstName} - `}<small className="home-speaker__email">{`${email.slice(0, endIndex)}...`}</small></a>
				<div><TextButton text="x" customClasses="home-speaker__close-button" onClickHandler={ onCloseUserCard }/></div>
			</div>
			<TextButton text="follow" customClasses="home-speaker__follow-button" onClickHandler={ onFollow }/>
		</div>
	);	
}

HomeSpeakerCard.propTypes = {
	personalInfo: PropTypes.object.isRequired,
	onFollow: PropTypes.func,
	customClasses: PropTypes.string
}

HomeSpeakerCard.defaultProps = {
	personalInfo: {
		firstName: "yani",
		email: "yani@gmail.com"
	},
	onFollow: PropTypes.func,
	customClasses: PropTypes.string
}

export default HomeSpeakerCard;