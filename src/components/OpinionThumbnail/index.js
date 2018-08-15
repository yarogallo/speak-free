import React, { Component } from 'react';
import OpinionNav from '../OpinionNav';
import PropTypes from 'prop-types';
import './style/style.css';

class OpinionThumbnail extends Component {
	render() {
		const {
			subject,
			opinion,
			numComments,
			numLikes,
			date
		} = this.props.opinionThum;
		const { customClass } = this.props;
		return(
			<article className={`opinion-thumb ${customClass}`}>
				<header>
					<h2><span className="subject">subject:</span>{subject}</h2>
					<p className="date">{date}</p>
				</header>
				<div className="opinion-container">
					<p><span className="opinion">opinion:</span>{opinion}</p>
				</div>
				<footer>
					<OpinionNav numComments={numComments} numLikes={numLikes}/>
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
	opinionThum:  {
		subject: "This is a test",
		opinion: "This lorem ipsum generator is made for all the webdesigners, designers, webmasters and others who need lorem ipsum. Generator is made the way that everyone can use it, but especially for projects which need html markup. You can decide which html tags you want and our generator will generate just as you specified.",
		numComments: 5,
		numLikes: 26,
		date: "april/20/20018"
	},
	customClass: ''
}

export default OpinionThumbnail;