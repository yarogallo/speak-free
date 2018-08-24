import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './edit-opinion-form.css';
import TextButton from '../../text-button';
import Textarea from 'react-textarea-autosize';

class EditOpinionForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.opinion
		};
		this.modifyContentHandler = this.modifyContentHandler.bind(this);
		this.submitEditedOpinion = this.submitEditedOpinion.bind(this);
		this.textareaRef = null;
		this.setRef = elem => {
			this.textareaRef = elem;
		};
	}
	componentDidMount() {
		if(this.textareaRef) {
			this.textareaRef.focus();
		}
	}
	
	modifyContentHandler(evt) {
		this.setState({
			value: evt.target.value
		});
	}
	
	submitEditedOpinion() {
		alert(this.state.value);
	}
	
	render() {
		const customStyle = {
			border: 0,
			letterSpacing: 0.5,
			lineHeight: 1.54,
			outline: 0,
			paddingTop: "10px",
			fontSize: "inherit",
			fontFamily: "'Roboto', sans-serif",
			color: "var(--main-color-gray)",
			width: "100%"
		};
		const {
			opinion
		} = this.props;
		const { value } = this.state;
		return(
			<form className="edit-opinion-form" onSubmit={this.submitEditedOpinion}>
				<Textarea
					defaultValue={value}
					onChange={evt => this.modifyContentHandler(evt)}
					style={customStyle}
					maxRows={6}
					inputRef={tag => this.textareaRef = tag}
				/>
				<TextButton text="edit" customClasses="edit-opinion__button" onClickHandler={this.submitEditedOpinion}/>
			</form>
		);
	}
}

EditOpinionForm.propTypes = {
	opinion: PropTypes.string.isRequired
}

EditOpinionForm.defaultProps = {
	opinion: ""
}

export default EditOpinionForm;