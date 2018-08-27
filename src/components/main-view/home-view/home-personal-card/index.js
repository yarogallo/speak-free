import React from 'react';

import PropTypes from 'prop-types';
import './home-personal-card.css';

function HomePersonalCard({personalInfo, customClasses, numbOpinions, followersNumb, followingNumb}) {
	const {
		firstName,
		email
	} = personalInfo;
	return (
		<div className={`home-card ${customClasses}`}>
			<div className="home-card__blue-header"></div>
			<div className="home-card__personal-info">
				<h3 className="home-card__name">{firstName}</h3>
				<p className="home-card__mail">{email}</p>
			</div>
			<div  className="home-card__general-info">
				<ul className="home-card__ul">
					<li className="home-card__li">
						<span className="home-card__item">opinions</span>
						<span className="home-card__numb">{numbOpinions}</span>
					</li>
					<li className="home-card__li">
						<span className="home-card__item">followers</span>
						<span className="home-card__numb"b>{followersNumb}</span>
					</li>
					<li className="home-card__li">
						<span className="home-card__item">following</span>
						<span className="home-card__numb">{followingNumb}</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

HomePersonalCard.propTypes = {
	personalInfo: PropTypes.object.isRequired,
	customClasses: PropTypes.string,
	numbOpinions: PropTypes.number,
	followersNumb: PropTypes.number,
	followingNumb: PropTypes.number,
}

HomePersonalCard.defaultProps = {
	personalInfo: {
		firstName: "Jonh",
		email: "example@gmail.com",
		date: ["may", 2015]
	},
	customClasses: "",
	numbOpinions: 0,
	followersNumb: 0,
	followingNumb: 0,
}

export default HomePersonalCard;