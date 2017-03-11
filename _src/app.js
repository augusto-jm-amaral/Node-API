import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import counter from './reducers';
import Counter from './components/Counter';

// let store = createStore(myReducer);

// store.subscribe(() =>
//   console.log(store.getState())
// );

// store.dispatch({ type: 'INCREMENT' })
// // 1
// store.dispatch({ type: 'INCREMENT' })
// // 2
// store.dispatch({ type: 'DECREMENT' })
// // 1

const store = createStore(counter);
const rootEl = document.getElementById('root');

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
);

render();
store.subscribe(render);