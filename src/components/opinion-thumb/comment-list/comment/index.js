import React from 'react';
import PropTypes from 'prop-types';
import './comment.css';
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
			<header className="comment__header">
				<h3 className="comment__autor">
					<strong>{author}</strong>
				</h3>
				<small className="comment__date">{date}</small>
			</header>
			<div>
				<p className="comment__body">{body}</p>
			</div>
			<footer className="comment__footer">
				<ul className="comment__list">
					<li><TextButton text="like" customClasses="comment__button"/></li>
					<li><TextButton text="dislike" customClasses="comment__button"/></li>
				</ul>
				<div className="comment__likes">5</div>
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