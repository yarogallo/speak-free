import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment/index';
import './style/style.css';
import TextButton from '../../TextButton/index';
import WriteCommentInput from './WriteCommentInput';

class CommentsList extends Component {
	constructor(props) {
		super(props);
		this.onPostComment = this.onPostComment.bind(this);
	}

	onPostComment(value) {
		alert(value);
	}
	
	render(){
		const {
			customClasses,
			listComments
		} = this.props;
	
		return(
			<section className={`list-comments ${customClasses}`}>			
				<ul className="comments-items">
					{listComments.map((comment, index) => (
						<li key={index}><Comment comment={comment}/></li>
					))}
				</ul>
				<div>
					<WriteCommentInput onPostComment={this.onPostComment}/> 
				</div>
			</section>
		);
	}
}

CommentsList.propTypes = {
	listComments: PropTypes.array.isRequired,
	customClasses: PropTypes.string
};

CommentsList.defaultProps = {
	customClasses: "",
	listComments: [
			{	author: "yane doe",
				date: "September-20-2015",
				body: "this is a comment, respect to the article",
			}, 
			{
				author: "yane doe",
				date: "September-20-2015",
				body: "this is a comment, respect to the article",
			}
	]
};

export default CommentsList;