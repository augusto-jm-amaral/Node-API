import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './pages/app/app'
import Home from './pages/home/home'
import Login from './pages/login/Login'
import AppStore from './reducers';

import { changeRoute } from './actions';

const rootEl = document.getElementById('root');
const store = createStore(AppStore);

const authorizationHandle = (e) => {
	if(!store.getState().token){
		hashHistory.push('/login');
	}
}

const router = (
  <Provider store={ store }>
  	<Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } onEnter={authorizationHandle}/>
  		  <Route path="/login" component={ Login } />
  		</Route>
  	</Router>
  </Provider>
	);

const render = () => ReactDOM.render(
  router,
  rootEl
);

render();
