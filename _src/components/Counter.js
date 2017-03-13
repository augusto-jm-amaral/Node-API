import React, { Component, PropTypes } from 'react'
import './Counter.scss';

class Counter extends Component {

  constructor (props) {
    super(props);
  
    this.incrementIfOdd = () => {
      if (this.props.value % 2 !== 0) {
        this.props.onIncrement()
      }
    }

    this.incrementAsync = () => {
      setTimeout(this.props.onIncrement, 1000)
    }
  }


  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};


export default Counter