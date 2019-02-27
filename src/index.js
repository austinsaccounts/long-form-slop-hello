import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

function liveTime() {
var greeting = React.createElement('h1', {}, 'hello, so called world');
var clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);
var app = React.createElement('div', {}, greeting, clock);

ReactDOM.render(
app,
document.getElementById('root')
);
}

setInterval(liveTime, 1000);
serviceWorker.unregister();
