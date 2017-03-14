import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
	constructor (props) {
		super(props);

	}

	render () {
		return (
			<div>
				<h1>Aplicação</h1>
				<Link to="/login">Go to login</Link>
			</div>
		);
	}
}

export default Home; 