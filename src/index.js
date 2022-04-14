import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const fs = require('fs');

export const MARIAGE_PICS = fs.readdirSync(`./images/mariage`)
export const DECORATION_PICS = fs.readdirSync(`./images/decoration`)

ReactDOM.render(<App />, document.getElementById('root'));
