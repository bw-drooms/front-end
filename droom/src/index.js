import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './utils/reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


