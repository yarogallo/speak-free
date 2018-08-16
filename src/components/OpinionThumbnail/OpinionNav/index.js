import React, { Component } from 'react';
import CommentLogo from '../images/comment-white-oval-bubble.svg';
import LikeLogo from '../images/heart-outline.svg';
import EditLogo from '../images/edit.svg';
import PropTypes from 'prop-types';
import './style/style.css';

class OpinionNav extends Component {
	render() {
		const {customClass, numComments, numLikes} = this.props;
		return(
			<section className={`opinion-nav ${customClass}`}>
				<button type="button">
					<div className="button-content">
						<img src={CommentLogo} alt="comment icon"/>
						<span className="numb">{numComments? numComments : ""}</span>
					</div>
				</button>
				<button type="button">
					<div className="button-content">
						<img src={LikeLogo} alt="like icon"/>
						<span className="numb">{numLikes? numLikes : ""}</span>
					</div>
				</button>
				<button type="button-content">
					<div className="edit">
						<img src={EditLogo} alt="edit icon"/>
					</div>
				</button>
			</section>
		);
	}
}

OpinionNav.propTypes = {
	customClass: PropTypes.string,
	numComments: PropTypes.number,
	numLikes: PropTypes.number,
};

OpinionNav.defaultProps = {
	customClass: '',
	numComments: 0,
	numLikes: 0,
};

export default OpinionNav;