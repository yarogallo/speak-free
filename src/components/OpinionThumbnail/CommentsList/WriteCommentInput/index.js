import React, {Component} from 'react';
import TextButton from '../../../TextButton/index';
import PropTypes from 'prop-types';
import './style/style.css';


class WriteCommentInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ""
		};
		this.changeValueHandler = this.changeValueHandler.bind(this);
		this.postCommentHandler = this.postCommentHandler.bind(this);
	}
	changeValueHandler(evt) {
		this.setState({
			value: evt.target.value
		});
	}
	
	postCommentHandler(evt) {
		evt.preventDefault();
		this.props.onPostComment(this.state.value);
	}
	
	render() {
		const {
			value
		} = this.state;
		return(
			<div className="write-comment-container">
				<form className="write-comment-form" onSubmit={(evt) => this.postCommentHandler(evt)}>
					<input 
						type="text" 
						className="write-comment-input" 
						placeholder="write comment" 
						value={value} 
						onChange={ (evt) => this.changeValueHandler(evt)}/>
					<TextButton 
						text="comment" 
						customClasses="send-comment-button" 
						disabled={value.length > 0 ? false: true} 
						onClickHandler={(evt) => this.postCommentHandler(evt)}/>
				</form>
			</div>
		);
	}
}

WriteCommentInput.propTypes = {
	onPostComment: PropTypes.func,
}

WriteCommentInput.defaultProps = {
	onPostComment: () => {}
}

export default WriteCommentInput;