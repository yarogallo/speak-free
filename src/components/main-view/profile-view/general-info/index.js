import React from 'react';
import PropTypes from 'prop-types';
import './general-info.css';
import {NavLink} from 'react-router-dom';

function GeneralInfo(props) {
	const TABS = {
		opinions: 'opinions',
		following: 'following',
		followers: 'followers',
		likes: 'likes'
	};
	
	const { generalInfo } = props;
	const info = {
		[TABS.opinions]: generalInfo.numbOpinions,
		[TABS.following]: generalInfo.followingNumb,
		[TABS.followers]: generalInfo.followersNumb,
		[TABS.likes]: generalInfo.likesNumb,
	};
	
	const {
		changeTabHandler,
		selectedTab,
		customClasses,
		path
	} = props;
	
	const setClass = (tab) => {
		return tab === selectedTab ? 'general-info__item general-info__item_selected': 'general-info__item';
	};
	
	return(
		<ul className={`general-info ${customClasses}`}>
			{Object.keys(TABS).map( tab => {
				return (
					<li className={setClass(tab)} key={tab}>
						<NavLink to={`${path}/${tab}`}>
							<button className="general-info__item__content" onClick={() => changeTabHandler(tab)}>
								<span className="general-info__item__content__text">{tab}</span>
								<span className="general-info__item__content__number">
									{info[tab]}
								</span>
							</button>
						</NavLink>
					</li>
				);
			})}
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