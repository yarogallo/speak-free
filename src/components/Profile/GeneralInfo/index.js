import React from 'react';
import PropTypes from 'prop-types';
import './style/style.css';

function GeneralInfo(props) {
	const { 
		numbOpinions,
		followersNumb,
		followingNumb,
		likesNumb
	} = props.generalInfo;
	return(
		<ul className="general-list">
			<li className="elem">
				<div className="content">
					<span className="text">opinions</span>
					<span className="number">{numbOpinions}</span>
				</div>
			</li>
			<li className="elem">
				<div className="content">
					<span className="text">following</span>
					<span className="number">{followingNumb}</span>
				</div>
			</li>
			<li className="elem">
				<div className="content">
					<span className="text">followers</span>
					<span className="number">{followersNumb}</span>
				</div>
			</li>
			<li className="elem">
				<div className="content">
					<span className="text">likes</span>
					<span className="number">{likesNumb}</span>
				</div>
			</li>
		</ul>
	);
}

GeneralInfo.propTypes = {
	generalInfo: PropTypes.object.isRequired
}

GeneralInfo.defaultProps = {
	generalInfo: {
		numbOpinions: 0,
		followingNumb: 0,
		followersNumb: 0,
		likesNumb: 0
	}
}

export default GeneralInfo;