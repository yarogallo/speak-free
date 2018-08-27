import React from 'react';
import CommentLogo from '../images/comment-white-oval-bubble.svg';
import LikeLogo from '../images/heart-outline.svg';
import EditLogo from '../images/edit.svg';
import PropTypes from 'prop-types';
import './opinion-nav.css';

function OpinionNav(props) {	
	const {
		customClass, 
		numComments, 
		numLikes,
		onClickComment,
		onClickEdit,
		allowEdit
	} = props;
	
	return(
		<section className={`opinion-nav ${customClass}`}>
			<button className="opinion-nav__button" type="button" onClick={() => {onClickComment()}}>
				<div className="opinion-nav__content">
					<img src={CommentLogo} alt="comment icon" className="opinion-nav__image"/>
					<span className="opinion-nav__span">{numComments? numComments : ""}</span>
				</div>
			</button>
			<button className="opinion-nav__button" type="button">
				<div className="opinion-nav__content">
					<img src={LikeLogo} alt="like icon" className="opinion-nav__image"/>
					<span className="opinion-nav__span">{numLikes? numLikes : ""}</span>
				</div>
			</button>
			{ allowEdit 
				? <button className="opinion-nav__button" type="opinion-nav__content" onClick={() => {onClickEdit()}}>
					<div className="opinion-nav__content">
					<img src={EditLogo} alt="edit icon" className="opinion-nav__image"/>
				</div>
			</button>
			: null}
		</section>
	);
}

OpinionNav.propTypes = {
	customClass: PropTypes.string,
	numComments: PropTypes.number,
	numLikes: PropTypes.number,
	onClickComment: PropTypes.func,
	onClickEdit: PropTypes.func,
	allowEdit: PropTypes.bool,
};

OpinionNav.defaultProps = {
	customClass: '',
	numComments: 0,
	numLikes: 0,
	allowEdit: true,
};

export default OpinionNav;