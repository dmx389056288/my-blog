import React from 'react';
import ReactDOM from 'react-dom';
import './sass/reset.css'
import './index.css';
import * as rem from'./js/rem.js'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
rem.rem(document, window)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
