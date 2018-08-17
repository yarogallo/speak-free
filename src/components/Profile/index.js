import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextButton from '../TextButton';
import GeneralInfo from './GeneralInfo';
import PersonalCard from './PersonalCard';
import './style/style.css';
import OpinionThumbnail from '../OpinionThumbnail';

class Profile extends Component {
	render() {
		const {
			generalInfo,
			personalInfo,
			opinions
		} = this.props;
		return(
			<section className="row profile">
				<header className="profile-header grid">
				 	<section className="profile-blue-header"></section>
				 	<section className="profile-nav-container">
						<GeneralInfo generalInfo={generalInfo}/>
					</section>
				 	<section className="profile-edit-button">
					 	<TextButton text="edit profile" customClasses={"edit-button"}/>
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