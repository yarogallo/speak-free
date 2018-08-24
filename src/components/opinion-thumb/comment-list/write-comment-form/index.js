import React, {Component} from 'react';
import TextButton from '../../../text-button';
import PropTypes from 'prop-types';
import './write-comment-form.css';


class WriteCommentForm extends Component {
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
			<form className="write-comment-form" onSubmit={(evt) => this.postCommentHandler(evt)}>
				<input 
					type="text" 
					className="write-comment__input" 
					placeholder="write comment" 
					value={value} 
					onChange={ (evt) => this.changeValueHandler(evt)}/>
				<TextButton 
					text="comment" 
					customClasses="write-comment__button" 
					disabled={value.length > 0 ? false: true} 
					onClickHandler={(evt) => this.postCommentHandler(evt)}/>
			</form>
		);
	}
}

WriteCommentForm.propTypes = {
	onPostComment: PropTypes.func,
}

WriteCommentForm.defaultProps = {
	onPostComment: () => {}
}

export default WriteCommentForm;