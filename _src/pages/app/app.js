import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Store } from 'redux';

class App extends Component {
	constructor (props) {
		super(props);
	}

	componentWillMount() {

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

App.contextTypes = { store: React.PropTypes.object };

export default App; 