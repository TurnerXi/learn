import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router'
import Layout from './layout'
import * as serviceWorker from './serviceWorker';
import './index.css';

let root = document.getElementById('root');
ReactDOM.render(<Layout><Router></Router></Layout>, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
