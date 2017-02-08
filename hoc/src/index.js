import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import thunk from 'redux-thunk';


import App from './components/app';
import Home from './components/Home';
import Reactroids from './components/Astroids';
import ReactBuild from './components/TestGame';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/astroids" component={Reactroids} />
      <Route path="/testgame" component={ReactBuild} />
    </Router>
  </Provider>  
  , document.querySelector('.app-container'));