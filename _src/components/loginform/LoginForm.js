import React, { Component, PropTypes } from 'react'
import './LoginForm.scss'

class LoginForm extends Component {

	constructor (props) {
		super(props);

	}

	render() {
		const {} = this.props
		return (
			<div className="card">
				<h3 className="card-header">Login</h3>
				<div className="card-block">
					<form>
						<div className="form-group">
							<label for="name">Name</label>
							<input type="text" className="form-control" ref="name" name="name" placeholder="João"/>
						</div>
						<div className="form-group">
							<label for="email">Email</label>
							<input type="email" className="form-control" ref="email" name="email" placeholder="joao@email.com"/>
						</div>
						<div className="form-group">
							<label for="password">Password</label>
							<input type="password" className="form-control" ref="password" name="password" />
						</div>
					</form>
				</div>
			</div>
			)
	}
}

LoginForm.propTypes = {
	// value: PropTypes.number.isRequired,
	// onIncrement: PropTypes.func.isRequired,
	// onDecrement: PropTypes.func.isRequired
};


export default LoginForm