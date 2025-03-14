import React from "react";
import ReactDOM from "react-dom/client";
import './style.css';

const heading = React.createElement("h1", {id:"title"}, "Onepiece is Greatest of all time");

/* 
    
*/

const app = document.getElementById("app");

const root = ReactDOM.createRoot(app);
root.render(heading);

//React + ReactDOM + ourcode => bundle.js
//we use webpack bunlder, 
//npx => node package executer

