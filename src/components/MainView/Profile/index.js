import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GeneralInfo from './GeneralInfo';
import PersonalCard from './PersonalCard';
import './style/style.css';
import TextButton from '../../text-button';
import OpinionThumbnail from '../../OpinionThumbnail';
import Modal from '../../Modal';
import SpeakerForm from '../../SpeakerForm';

function renderOptions(opinions) {
	return opinions.map((opinionThum, index) => {
		return (
			<div key={index}>
				<OpinionThumbnail 
					opinionThum={opinionThum}/>
			</div>
		);
	});
}

function renderFollowers(speakers) {
	return (
		<div className="followers">
			{speakers.map((speaker, index) => (
				<PersonalCard
					key={index}
					customClasses="personal-info-card"
					personalInfo={{
							firstName: "Jonh",
							email: "example@gmail.com",
							date: ["may", 2015]
					}}/>
			))}
		</div>
	);
}

const TABS = {
	options: 'options',
	following: 'following',
	followers: 'followers',
	likes: 'likes'
};

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			selectedTab: TABS.options
		};
		this.showModalHandler = this.showModalHandler.bind(this);
		this.closeModalHandler = this.closeModalHandler.bind(this);
		this.setNewTab = this.setNewTab.bind(this);
		this.showTabSelectedContent = this.showTabSelectedContent.bind(this);
	}
	
	showTabSelectedContent() {
		switch (this.state.selectedTab) {
			case TABS.options:
				return renderOptions(this.props.opinions);
			case TABS.followers: 
				return renderFollowers(this.props.followers);
			case TABS.following:
				return renderFollowers(this.props.following);
			default:
				return null;
		}
	}
	
	setNewTab(tab) {
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
		const {
			personalInfo,
			opinions,
			followers,
			following
		} = this.props;
		
		const {
			showModal,
			selectedTab
		} = this.state;
		
		const generalInfo = {
			numbOpinions: opinions.length + 1,
			followersNumb: followers.length + 1,
			followingNumb: following.length + 1,
			likesNumb: 6
		}
		
		return(
			<section className="row profile">
				<header className="profile-header grid">
				 	<section className="profile-blue-header"></section>
				 	<section className="profile-nav-container">
						<GeneralInfo 
							generalInfo={generalInfo} 
							selectedTab={selectedTab}
							changeTabHandler={this.setNewTab}/>
					</section>
				 	<section className="profile-edit-button">
						 <TextButton 
							 text="edit profile" 
							 customClasses={"edit-button"} 
							 onClickHandler={this.showModalHandler}/>
					</section>
				</header>
				<main className="profile-main grid">
					<section className="personal-info">
						<PersonalCard 
							personalInfo={personalInfo} 
							customClasses={'bottom-card'}/>
					</section>
					<section className="main-container">
					 	{this.showTabSelectedContent(selectedTab)}
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
	opinions: PropTypes.array,
	followers: PropTypes.array,
	following: PropTypes.array,
};

Profile.defaultProps = {
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