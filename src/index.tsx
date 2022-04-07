import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './store/rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import { Provider } from 'react-redux';
import mySaga from './store/sagas/sagas';
import { HashRouter } from 'react-router-dom';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(mySaga);

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
