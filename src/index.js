import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

var heading =React.createElement('h1', {}, ' Less than helpful queue');
var ticketLocation = React.createElement('h3', {}, '3a');
var ticketName = React.createElement('h3', {}, 'Tom and Jerry');
var ticketIssue = React.createElement('h3', {}, 'Some sort of help request');
var app = React.createElement('div', {}, heading, ticketLocation, ticketName, ticketIssue);

ReactDOM.render(
app,
document.getElementById('root')
);

serviceWorker.unregister();
