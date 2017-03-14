import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './pages/app/app'
import Home from './pages/home/home'
import Login from './pages/login/login'
// const store = createStore(counter);

const rootEl = document.getElementById('root');

hashHistory.listen( location => {
  console.log(location);
});

const router = (
	<Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home }/>
		  <Route path="/login" component={ Login } />
		</Route>
	</Router>
	);

const render = () => ReactDOM.render(
  router,
  rootEl
);

render();
// store.subscribe(render);