import React from 'react';
import PropTypes from 'prop-types';
import './general-info.css';

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
		selectedTab,
		customClasses
	} = props;
	
	const setClass = (tab) => {
		return tab === selectedTab ? 'general-info__item general-info__item_selected': 'general-info__item';
	};
	
	return(
		<ul className={`general-info ${customClasses}`}>
			<li className={setClass(TABS.options)} >
				<button 
					className="general-info__item__content"
					onClick={ () => { changeTabHandler(TABS.options)} }>
					<span className="general-info__item__content__text">opinions</span>
					<span className="general-info__item__content__number">{numbOpinions}</span>
				</button>
			</li>
			<li className={setClass(TABS.following)}>
				<button className="general-info__item__content" onClick={() => changeTabHandler(TABS.following)}>
					<span className="general-info__item__content__text">following</span>
					<span className="general-info__item__content__number">{followingNumb}</span>
				</button>
			</li>
			<li className={setClass(TABS.followers)}>
				<button className="general-info__item__content" onClick={() => changeTabHandler(TABS.followers)}>
					<span className="general-info__item__content__text">followers</span>
					<span className="general-info__item__content__number">{followersNumb}</span>
				</button>
			</li>
			<li className={setClass(TABS.likes)} onClick={() => {changeTabHandler(TABS.likes)}}>
				<button className="general-info__item__content">
					<span className="general-info__item__content__text">likes</span>
					<span className="general-info__item__content__number">{likesNumb}</span>
				</button>
			</li>
		</ul>
	);
}

GeneralInfo.propTypes = {
	generalInfo: PropTypes.object.isRequired,
	changeTabHandler: PropTypes.func,
	selectedTab: PropTypes.string,
	customClasses: PropTypes.string,
}

GeneralInfo.defaultProps = {
	generalInfo: {
		numbOpinions: 0,
		followingNumb: 0,
		followersNumb: 0,
		likesNumb: 0
	},
	changeTabHandler: () => {},
	selectedTab: "",
	customClasses: "",
}

export default GeneralInfo;