import React, { Component } from 'react'

import LoginForm from './../../components/loginform/LoginForm'

class Login extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-4 col-md-4 offset-xs-4 offset-md-4">
						<LoginForm />
					</div>
				</div>
			</div>
		);
	}
}

export default Login;