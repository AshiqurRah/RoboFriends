import React from 'react';
// react package that we need to write react
// React is a view package

import ReactDOM from 'react-dom/client';
// ReactDom which connects the React package
// to the DOM

import './index.css';
// where we add the design

import App from './containers/App';
// might have noticed that there is no .js to it
// it is assumed that it is js

import reportWebVitals from './reportWebVitals';
// configuration files that are nice to have
import 'tachyons'

import {robots} from './robots'
// for components that are not default,
// they have to be destructured

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// we are using HTML like syntax
// plus creating our own custom HTML
// like syntax using JSX
