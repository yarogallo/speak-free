import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './write-opinion-form.css';
import TextButton from '../../../text-button/index';
import Textarea from 'react-textarea-autosize';

class WriteOpinionForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			body: "",
			subject: ""
		};
		this.inputRef = React.createRef();
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.postOpinionHandler = this.postOpinionHandler.bind(this);
	}
	
	componentDidMount() {
		this.inputRef.current.focus();
	}
	
	postOpinionHandler() {
		this.props.onPostOpinion({
			body: this.state.body,
			subject: this.state.subject
		});
		this.setState({
			body: "",
			subject: ""
		});
	}
	
	onChangeHandler(evt) {
		const name = evt.target.name;
		this.setState({
			[name]: evt.target.value
		});	
	}
	
	render() {
		const {
			body,
			subject
		} = this.state;
		return (
			<form 
				className="header-view__opinion-form"
				onSubmit={this.postOpinionHandler}>
				<label className="header-view__opinion-label">subject</label>
				<input 
					type="text"
					name="subject"
					ref={this.inputRef}
					value={subject}
					className="header-view__input"
					onChange={e => this.onChangeHandler(e)}/>
				<label className="header-view__opinion-label">body</label>
				<Textarea 
					style={{
						fontSize: '15px',
						padding: '10px',
						marginBottom: '10px'
					}}
					value={body}
					name="body"
					onChange={ e => this.onChangeHandler(e)}
					minRows={3}
    				maxRows={6}/>
				<TextButton 
					text="post" 
					customClasses="header-view__opinion-button" 
					disabled={body === "" || subject ==="" ? true : false}/>
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