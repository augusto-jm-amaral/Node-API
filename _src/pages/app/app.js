import React, { Component } from 'react';

class App extends Component {
	constructor (props) {
		super(props);

	}

	render () {
		return (
			<div>
				<div className="appContent">
				{ this.props.children }
				</div>
			</div>
		);
	}
}

export default App; 