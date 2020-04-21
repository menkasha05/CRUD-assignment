
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  './App.css';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import Reducer from './Container/Reducer'
//import { composeWithDevTools } from 'redux-devtools-extension'
//import {BrowserRouter as Router} from 'react-router-dom'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store=createStore(Reducer,composeEnhancers(applyMiddleware(thunk)))
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

