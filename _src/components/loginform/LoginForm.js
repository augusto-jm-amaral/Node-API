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