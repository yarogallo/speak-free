import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GeneralInfo from './general-info';
import PersonalCard from './personal-card';
import './profile-view.css';
import TextButton from '../../text-button';
import OpinionThumbnail from '../../opinion-thumb';
import Modal from '../../modal';
import SpeakerForm from '../../speaker-form';
import { Route } from 'react-router-dom';

function renderOpinions(opinions) {
	return opinions.map((opinionThum, index) => {
		return (
			<div key={index} className="profile-main__opinion-thumb">
				<OpinionThumbnail 
					opinionThum={opinionThum}/>
			</div>
		);
	});
}

function renderPeople(users) {
	return users.map((user, index) => (
				<PersonalCard
					key={index}
					customClasses="profile-main__personal-card_white"
					personalInfo={{
							firstName: "Jonh",
							email: "example@gmail.com",
							date: ["may", 2015]
					}}/>
		));
}

function renderLikes(match) {
	return(
		<h1>{match}</h1>
	);
}

const TABS = {
	opinions: 'opinions',
	following: 'following',
	followers: 'followers',
	likes: 'likes'
};

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			selectedTab: props.selectedTab
		};
		this.showModalHandler = this.showModalHandler.bind(this);
		this.closeModalHandler = this.closeModalHandler.bind(this);
		this.selectNewTab = this.selectNewTab.bind(this);
	}
	
	selectNewTab(tab) {
		this.setState({
			selectedTab: tab
		});
	}
	
	showModalHandler() {
		this.setState({
			showModal: true
		});
	}
	closeModalHandler() {
		this.setState({
			showModal: false
		});
	}
	
	render() {
		console.log(this.props);
		const {
			personalInfo,
			opinions,
			followers,
			following,
			url
		} = this.props;
		
		const {
			showModal,
			selectedTab
		} = this.state;
		
		const generalInfo = {
			numbOpinions: opinions.length,
			followersNumb: followers.length,
			followingNumb: following.length,
			likesNumb: 6
		}
		
		const profileInfo = {
			[TABS.opinions] : () => renderOpinions(opinions),
			[TABS.followers]: () => renderPeople(followers),
			[TABS.following]: () => renderPeople(following),
			[TABS.likes]: () => renderOpinions(opinions)
		};
		
		return(
			<section className="profile">
				<header className="profile-header">
				 	<section className="profile-header__blue-section"></section>
					<GeneralInfo 
						customClasses="profile-header__navigation"
						generalInfo={generalInfo} 
						selectedTab={selectedTab}
						changeTabHandler={this.selectNewTab}
						selectedTab={selectedTab}
						path={url}/>
				 	<section className="profile-header__edit">
						 <TextButton 
							 text="edit profile" 
							 customClasses={"profile-header__edit__button_round"} 
							 onClickHandler={this.showModalHandler}/>
					</section>
				</header>
				<main className="profile-main">	
					<PersonalCard 
						customClasses={"profile-main__personal-card"}
						personalInfo={personalInfo}/>
					<section className="profile-main-center-container">
						<Route path={`${url}/:selectedTab?`} render={props => {
							const tag = props.match.params.selectedTab || selectedTab;
							return profileInfo[tag]();
						}}/>						
					</section>
				</main>
				{showModal 
					? <Modal children={() => <SpeakerForm textHeader="edit profile"/>} onCloseModal={this.closeModalHandler}/>
					: null
				}
			</section>
		);
	}
}

Profile.propTypes = {
	personalInfo: PropTypes.object.isRequired,
	selectedTab: PropTypes.string.isRequired,
	opinions: PropTypes.array,
	followers: PropTypes.array,
	following: PropTypes.array,
	url: PropTypes.string.isRequired
};

Profile.defaultProps = {
	url: "/profile",
	selectedTab: 'opinions',
	followers: [1, 2, 3, 4, 6, 7, 8, 9],
	following: [7,9,0],
	personalInfo: {
		firstName: "yanisleidi",
		email: "yrgallo@gmail.com",
		date: ["september", 2013]	
	},
	opinions: [{
		subject: "This is a test",
		opinion: "This lorem ipsum generator is made for all the webdesigners, designers, webmasters and others who need lorem ipsum. Generator is made the way that everyone can use it, but especially for projects which need html markup. You can decide which html tags you want and our generator will generate just as you specified.",
		numComments: 5,
		numLikes: 26,
		date: {
			month: "september",
			day: 20,
			year: 2017
		},
		opinionId: 1
	}, {
		subject: "This is a test",
		opinion: "This lorem ipsum generator is made for all the webdesigners, designers, webmasters and others who need lorem ipsum. Generator is made the way that everyone can use it, but especially for projects which need html markup. You can decide which html tags you want and our generator will generate just as you specified.",
		numComments: 5,
		numLikes: 26,
		date: {
			month: "september",
			day: 20,
			year: 2017
		},
		opinionId: 2
	}, {
		subject: "This is a test",
		opinion: "This lorem ipsum generator is made for all the webdesigners, designers, webmasters and others who need lorem ipsum. Generator is made the way that everyone can use it, but especially for projects which need html markup. You can decide which html tags you want and our generator will generate just as you specified.",
		numComments: 5,
		numLikes: 26,
		date: {
			month: "september",
			day: 20,
			year: 2017
		},
		opinionId: 3
	}, {
		subject: "This is a test",
		opinion: "This lorem ipsum generator is made for all the webdesigners, designers, webmasters and others who need lorem ipsum. Generator is made the way that everyone can use it, but especially for projects which need html markup. You can decide which html tags you want and our generator will generate just as you specified.",
		numComments: 5,
		numLikes: 26,
		date: {
			month: "september",
			day: 20,
			year: 2017
		},
		opinionId: 4
	}],	
};


export default Profile;