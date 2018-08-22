import React from 'react';
import PropTypes from 'prop-types';
import './style/style.css';

function GeneralInfo(props) {
	const TABS = {
		options: 'options',
		following: 'following',
		followers: 'followers',
		likes: 'likes'
	};
	
	const { 
		numbOpinions,
		followersNumb,
		followingNumb,
		likesNumb
	} = props.generalInfo;
	
	const {
		changeTabHandler,
		selectedTab
	} = props;
	
	const setClass = (tab) => {
		return tab === selectedTab ? 'elem selected': 'elem';
	};
	
	return(
		<ul className="general-list">
			<li className={setClass(TABS.options)} >
				<button 
					className="content"
					onClick={ () => { changeTabHandler(TABS.options)} }>
					<span className="text">opinions</span>
					<span className="number">{numbOpinions}</span>
				</button>
			</li>
			<li className="elem">
				<button className="content" onClick={() => changeTabHandler(TABS.following)}>
					<span className="text">following</span>
					<span className="number">{followingNumb}</span>
				</button>
			</li>
			<li className="elem">
				<button className="content" onClick={() => changeTabHandler(TABS.followers)}>
					<span className="text">followers</span>
					<span className="number">{followersNumb}</span>
				</button>
			</li>
			<li className="elem" onClick={() => {changeTabHandler(TABS.likes)}}>
				<button className="content">
					<span className="text">likes</span>
					<span className="number">{likesNumb}</span>
				</button>
			</li>
		</ul>
	);
}

GeneralInfo.propTypes = {
	generalInfo: PropTypes.object.isRequired,
	changeTabHandler: PropTypes.func,
	selectedTab: PropTypes.string
}

GeneralInfo.defaultProps = {
	generalInfo: {
		numbOpinions: 0,
		followingNumb: 0,
		followersNumb: 0,
		likesNumb: 0
	},
	changeTabHandler: () => {},
	selectedTab: 'options'
}

export default GeneralInfo;