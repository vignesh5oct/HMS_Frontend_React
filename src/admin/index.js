import React from 'react';
import ReactDOM from "react-dom/client";

import App from './App';


// boostrap

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';
// import './assets/css/select2.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import "react-datepicker/src/stylesheets/datepicker.scss";
import './assets/css/fontawesome.min.css';
import './assets/css/feathericon.min.css';
// import './assets/js/select2.min.js';
// import './assets/js/script.js';
//style


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <App />
  </>
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

