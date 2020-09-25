import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
import "./sass/basic-styles-scss/abstract-and-base.scss";
import { Provider } from 'react-redux';
import store from './redux/store/store';





import {
  HashRouter as Router
} from "react-router-dom";
 
ReactDom.render(<Provider store={store}><Router><App/></Router></Provider>, document.getElementById("root"));


if ('serviceWorker' in navigator) {
       window.addEventListener('load', () => {
         navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
           console.log('SW registered: ', registration);
         }).catch(registrationError => {
           console.log('SW registration failed: ', registrationError);
         });
       });
     }