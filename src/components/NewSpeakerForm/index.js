import React, { Component } from 'react';
import TextButton from '../TextButton';
import './style/style.css';

function isValidPassword(pass) {
	"use strict";
	const symb = /\W/;
	const numb = /[0-9]/;
	const upper = /[A-Z]/;
	
	return pass.length >= 5 && symb.test(pass) && numb.test(pass) && upper.test(pass);
}
class NewSpeakerForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			lastname: '',
			mail: '',
			phone: '',
			password: '',
			reppass: ''
		};
		this.fillFormHandler = this.fillFormHandler.bind(this);
		this.submitInfo = this.submitInfo.bind(this);
	}
	
	submitInfo(evt) {
		const pass = this.state.password;
		const repPass = this.state.reppass;
		evt.preventDefault();
		return isValidPassword(pass) && pass === repPass;
	}
	
	fillFormHandler(evt) {
		const elem = evt.target.name;
		const value = evt.target.value;
		this.setState({
			[elem]: value
		});	
	}
	
	render() {
		const {
			name, 
			lastname,
			mail,
			phone,
			password,
			reppass
		} = this.state;
		
		return(
			<form className="new-speaker-form" onSubmit={this.submitInfo}>
				<h2 className="form-title">Create you account</h2>
				
				<label htmlFor="name"><span className="label">name:</span></label>			
				<input id="name" type="text" placeholder="Jonh" value={name} onChange={this.fillFormHandler} name="name"/>
				
				<label htmlFor="lastname"><span className="label">last name:</span></label>
				<input id="lastname" type="text" placeholder="Doe" value={lastname} onChange={this.fillFormHandler} name="lastname"/>
				
				<label htmlFor="mail"><span className="label">email:</span></label>
				<input id="mail" type="email" placeholder="jonh@gmail.com" value={mail} onChange={this.fillFormHandler} name="mail"/>
				
				<label htmlFor="phone"><span className="label">phone:</span></label>
				<input id="phone" type="number" placeholder="555-555-5555" value={phone} onChange={this.fillFormHandler} name="phone"/>
				
				<label htmlFor="pass"><span className="label">password:</span></label>
				<input id="pass" type="password" placeholder="Th1sIs1523@3" 
					value={password} onChange={this.fillFormHandler} name="password"/>
				
				<label htmlFor="rep-pass"><span className="label">repeat password:</span></label> 
				<input id="rep-pass" type="password" placeholder="Th1sIs1523@3" value={reppass} onChange={this.fillFormHandler} name="reppass"/>
				
				<TextButton text="create" customClasses="submit-button" onClickHandler={this.submitInfo}/>
			</form>
		);
	}
}

export default NewSpeakerForm;