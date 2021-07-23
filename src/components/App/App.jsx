import React from 'react';
import './App.css';
import Header from './../Header/Header';
import SearchBox from './../SearchBox/SearchBox';
import Result from './../Result/Result';

const name = require('@rstacruz/startup-name-generator');
class App extends React.Component {
	state = {
		headertext: 'Name It',
		headerExpanded: true,
		suggestedNames: [],
	};
	handleInputChange = (inputText) => {
		//console.log('input text', inputText);
		this.setState({ headerExpanded: inputText.length > 0 ? false : true });
		this.setState({ suggestedNames: inputText.length > 0 ? name(inputText) : [] });
	};
	render() {
		return (
			<div>
				<Header
					titlechange={this.state.headertext}
					headerExpand={this.state.headerExpanded}
				/>
				<SearchBox onInputChange={this.handleInputChange} />
				<Result ans={this.state.suggestedNames} />
			</div >
		);
	}
}

export default App