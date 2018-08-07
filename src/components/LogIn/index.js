import React from "react";
import TextButton from '../TextButton';
import logo from '../../images/speech-bubbles.svg';
import "./styles/style.css";

function LogIn() {
	return (
		<section className="row log-in">
		 	<header className="col-12">
				 <div>
					 <h1 className="title">Welcome to SpeakFree</h1>
				 </div>
			</header>
			 <section className="col-12 flex column align-center">
				 <div>
					 <TextButton text="new speaker"/>
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
		</section>
	);
}

export default LogIn;