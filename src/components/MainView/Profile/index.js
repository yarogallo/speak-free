import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GeneralInfo from './GeneralInfo';
import PersonalCard from './PersonalCard';
import './style/style.css';
import TextButton from '../../TextButton';
import OpinionThumbnail from '../../OpinionThumbnail';
import Modal from '../../Modal';
import SpeakerForm from '../../SpeakerForm';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		};
		this.showModalHandler = this.showModalHandler.bind(this);
		this.closeModalHandler = this.closeModalHandler.bind(this);
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
			generalInfo,
			personalInfo,
			opinions
		} = this.props;
		const {
			showModal,
		} = this.state;
		return(
			<section className="row profile">
				<header className="profile-header grid">
				 	<section className="profile-blue-header"></section>
				 	<section className="profile-nav-container">
						<GeneralInfo generalInfo={generalInfo}/>
					</section>
				 	<section className="profile-edit-button">
					 	<TextButton text="edit profile" customClasses={"edit-button"} onClickHandler={this.showModalHandler}/>
					</section>
				</header>
				<main className="profile-main grid">
					<section className="personal-info">
						<PersonalCard personalInfo={personalInfo} customClasses={'bottom-card'}/>
					</section>
					<section className="opinions-container">
					 	{opinions.map((opinion, index) => (
							 <div key={index}>
								 <OpinionThumbnail/>
							 </div>
						 ))}
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
	generalInfo: PropTypes.object.isRequired,
	personalInfo: PropTypes.object.isRequired,
	opinions: PropTypes.array,
};

Profile.defaultProps = {
	generalInfo: {
		numbOpinions: 0,
		followersNumb: 0,
		followingNumb: 0,
		likesNumb: 6
	},
	personalInfo: {
		firstName: "yanisleidi",
		email: "yrgallo@gmail.com",
		date: ["september", 2013]	
	},
	opinions: [1, 2, 3, 4, 5],	
};


export default Profile;