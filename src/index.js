// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const rootEl = document.getElementById('root');
if (rootEl != null) ReactDOM.render(<App />, rootEl);
