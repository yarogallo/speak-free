import React, { Component } from 'react';
import TextButton from '../TextButton';
import GeneralInfo from './GeneralInfo';
import PersonalCard from './PersonalCard';
import './style/style.css';
import OpinionThumbnail from '../OpinionThumbnail';

class Profile extends Component {
	render() {
		const generalInfo = {
			numbOpinions: 10,
			followersNumb: 20,
			followingNumb: 5,
			likesNumb: 6
		};
		const personalInfo = {
			firstName: "yanisleidi",
			email: "yrgallo@gmail.com",
			date: ["september", 2013]	
		};
		const opinions = [1, 2, 3, 4, 5];
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
						<PersonalCard personalInfo={personalInfo}/>
					</section>
					<section className="opinions-container">
					 	{opinions.map((opinion, index) => (
							 <div key={index} className="opinion">
								 <OpinionThumbnail/>
							 </div>
						 ))}
					</section>
				</main>
				<footer className="profile-footer grid"></footer>
			</section>
		);
	}
}


export default Profile;