import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './write-opinion-form.css';
import TextButton from '../../../text-button/index';
import Textarea from 'react-textarea-autosize';

class WriteOpinionForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
		};
		this.textareaRef = React.createRef();
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.postOpinionHandler = this.postOpinionHandler.bind(this);
	}
	
	componentDidMount() {
		this.textareaRef.focus();
	}
	
	postOpinionHandler() {
		this.props.onPostOpinion(this.state.value);
		this.setState({
			value: ""
		});
	}
	
	onChangeHandler(evt) {
		this.setState({
			value: evt.target.value
		});	
	}
	
	render() {
		const {
			value,
		} = this.state;
		return (
			<form 
				className="header-view__opinion-form"
				onSubmit={this.postOpinionHandler}>
				<label className="header-view__opinion-label">say something</label>
				<Textarea 
					style={{
						fontSize: '15px',
						padding: '10px',
						marginBottom: '10px'
					}}
					inputRef={tag => {this.textareaRef = tag}}
					value={value}
					onChange={ e => this.onChangeHandler(e)}
					minRows={3}
    				maxRows={6}/>
				<TextButton 
					text="post" 
					customClasses="header-view__opinion-button" 
					disabled={value === "" ? true : false}/>
			</form>
		);	
	}
}

WriteOpinionForm.propTypes = {
	onPostOpinion: PropTypes.func
};

WriteOpinionForm.defaultProps = {
	onPostOpinion: () => {}
}

export default WriteOpinionForm;