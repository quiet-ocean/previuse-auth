import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';

import './assets/css/resets.css';
import './assets/css/fonts.css';

import Root from './common/routes';
import rootReducer, { RootState } from './common/reducers';
import * as serviceWorker from './serviceWorkerRegistration';
import initiateServices from './common/services/initiate';

let middlewares;

if (process.env.NODE_ENV === 'production') {
  serviceWorker.register();
  middlewares = applyMiddleware(thunk);
} else {
  middlewares = applyMiddleware(thunk);
}

const store: Store<RootState> = createStore(rootReducer, middlewares);
const services = initiateServices(store);

ReactDOM.render(
  <Root store={store} services={services} />,
  document.getElementById('root')
);
