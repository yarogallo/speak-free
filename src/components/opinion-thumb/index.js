import React, { Component } from 'react';
import OpinionNav from './opinion-nav';
import PropTypes from 'prop-types';
import './opinion-thumb.css';
import CommentsList from './comment-list';
import EditOpinionForm from './edit-opinion-form';
import OpinionBody from './opinion-body';

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
			editable,	
		 } = this.props;
		const {
			showComments,
			editMode
		} = this.state;
		return(
			<article className={`opinion-thumb ${customClass}`}>
				<header className="opinion-thumb__header">
					<h2 className="opinion-thumb__title"><span className="opinion-thumb_red-text">subject:</span>{subject}</h2>
					<p className="opinion-thumb__date">{`${date.month}-${date.day}-${date.year}`}</p>
				</header>
				<div className="opinion-thumb__br"></div>				
				{editMode 
					?<EditOpinionForm opinion={opinion}/>
					:<OpinionBody opinion={opinion}/>
				}			
				<div className="opinion-thumb__br"></div>
				<footer className="opinion-thumb__footer">
					<OpinionNav 
						numComments={numComments} 
						numLikes={numLikes}
						onClickComment={this.toggleCommentList}
						allowEdit={editable}
						onClickEdit={this.toggleEditMode}/>						
						{showComments ? <CommentsList/> : null}
					<div className="opinion-thumb__br"></div>
				</footer>
			</article>
		);
	}
}
OpinionThumbnail.propTypes = {
	opinionThum: PropTypes.object,
	editable: PropTypes.bool,
	customClass: PropTypes.string,
};

OpinionThumbnail.defaultProps = {
	customClass: '',
	editable: true,
}

export default OpinionThumbnail;