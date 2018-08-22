import React, { Component } from 'react';
import OpinionNav from './OpinionNav';
import PropTypes from 'prop-types';
import './style/style.css';
import TextButton from '../TextButton/index';
import CommentsList from './CommentsList/index';
import EditOpinionForm from './EditOpinionForm/index';

class OpinionThumbnail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showComments: false,
			editMode: false,
			openModal: false,
		};
		this.toggleCommentList = this.toggleCommentList.bind(this);
		this.toggleEditMode = this.toggleEditMode.bind(this);
	}
	
	toggleCommentList() {
		this.setState( prevState => ({
			showComments: !prevState.showComments,
		}));
	}
	
	toggleEditMode() {
		this.setState( prevState => ({
			editMode: !prevState.editMode,
		}));
	}
	
	render() {
		const {
			subject,
			opinion,
			numComments,
			numLikes,
			date,
		} = this.props.opinionThum;
		const { 
			customClass,
			onDeleteOpinion
		 } = this.props;
		const {
			showComments,
			editMode
		} = this.state;
		return(
			<article className={`opinion-thumb ${customClass}`}>
				<header>
					<h2><span className="subject">subject:</span>{subject}</h2>
					<p className="date">{`${date.month}-${date.day}-${date.year}`}</p>
				</header>
				<div className="br"></div>
				<div className="opinion-container">
					{editMode 
						?<EditOpinionForm opinion={opinion}/>
						:<p><span className="opinion">opinion:</span>{opinion}</p> 
					}
				</div>
				<div className="br"></div>
				<footer>
					<OpinionNav 
						numComments={numComments} 
						numLikes={numLikes}
						onClickComment={this.toggleCommentList}
						onClickEdit={this.toggleEditMode}/>						
						{showComments ? <CommentsList/> : null}
					<div className="separator"></div>
				</footer>
			</article>
		);
	}
}
OpinionThumbnail.propTypes = {
	opinionThum: PropTypes.object,
	customClass: PropTypes.string,
};

OpinionThumbnail.defaultProps = {
	customClass: ''
}

export default OpinionThumbnail;