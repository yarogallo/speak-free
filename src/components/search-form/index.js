import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchIcon from './images/magnifier.svg';
import './search-form.css';

class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
		};
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.handlerSubmit = this.handlerSubmit.bind(this);
	}
	
	onChangeHandler(evt) {
		this.setState({
			value: evt.target.value
		}, () => {
			this.props.onChange(this.state.value);
		});
	}
	
	handlerSubmit(evt) {
		evt.preventDefault();
		this.props.onPressSearch();
	}
	
	render() {
		const { text, customClass } = this.props;
		const { value } = this.state;
		return(
			<form className={`search-form ${customClass}`} onSubmit={this.handlerSubmit}>
				<input className="search-form__input" type="text" onChange={this.onChangeHandler} value={value} placeholder={text}/>
				<button className="search-form__button" onClick={this.handlerSubmit}><img src={SearchIcon} alt="search icon"/></button>
			</form>
		);
	}
};

SearchForm.propTypes = {
	onPressSearch: PropTypes.func,
	onChange: PropTypes.func,
	customClass: PropTypes.string
};

SearchForm.defaultProps = {
	onPressSearch: () => {},
	onChange : () => {},
	customClass: ""
}

export default SearchForm;