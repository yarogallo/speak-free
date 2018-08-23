import React from 'react';
import PropTypes from 'prop-types';
import './style/style.css';
import TextButton from '../../../text-button';

function Comment(props) {
	const {
		author,
		date,
		body
	} = props.comment;
	const {customClasses} = props;
	return(
		<article className={`comment ${customClasses}`}>
			<header className="comment-header-container">
				<h3 className="comment-autor">
					<strong>{author}</strong>
				</h3>
				<small className="comment-date">{date}</small>
			</header>
			<div className="comment-body-container">
				<p>{body}</p>
			</div>
			<footer>
				<ul>
					<li><TextButton text="like" customClasses="like-button"/></li>
					<li><TextButton text="dislike" customClasses="like-button"/></li>
				</ul>
				<div className="like-comment">5</div>
			</footer>
		</article>
	);
}

Comment.propTypes = {
	comment: PropTypes.object.isRequired,
	customClasses: PropTypes.string,
	onLikeComment: PropTypes.func,
	onDislikeComment: PropTypes.func,
};

Comment.defaultProps = {
	comment: {},
	customClasses: ""
};

export default Comment;