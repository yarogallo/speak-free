import React, { Component } from "react";
import TextButton from '../text-button';
import SpeakerForm from '../SpeakerForm';
import Modal from '../Modal';
import "./styles/style.css";

class LogIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false	
		};
		this.showModalHandler = this.showModalHandler.bind(this);
		this.closeModalHandler = this.closeModalHandler.bind(this);
	}
	showModalHandler() {
		this.setState({
			showModal: true
		});
	}
	closeModalHandler() {
		this.setState({
			showModal: false
		});
	}
	render(){
		return (
			<section className="row log-in">
				 <header className="col-12">
					 <div>
						 <h1 className="title">Welcome to SpeakFree</h1>
					 </div>
				</header>
				 <section className="col-12 flex column align-center">
					 <div>
						 <TextButton text="new speaker" onClickHandler={this.showModalHandler}/>
					 </div>
					 <div>
						 <p className="or">-or-</p>
					 </div>
					 <div>
						 <form className="flex column align-end">
							<input id="email" type="email" required placeholder="example@domain.com"/>
							<input id="password" type="email" required placeholder="password"/>
							 <div>
								 <TextButton text="log in"/>
							 </div>
						 </form>
					 </div>
				 </section>
				 {this.state.showModal? <Modal children={() => <SpeakerForm textHeader="new account"/>} onCloseModal={this.closeModalHandler}/> : null}
			</section>
		);
	}
}

export default LogIn;