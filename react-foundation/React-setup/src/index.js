import React from "react";
import ReactDOM from "react-dom/client";
import './style.css';

// const heading = React.createElement("h1", {id:"title"}, "Onepiece is Greatest of all time");

/* 
    <div class="container">
        <h1>onepiece<h1>
        <p>GOAT</p>
    </div>
*/
const name = "Luffy"
const isMyName = true
const container = 
<>
<h1>Onepiece</h1>
<p>{20+20}</p>
<h2>{name}</h2>
<h2>{isMyName ? "zoro" : "sanji"}</h2>
</>


const app = document.getElementById("app");

const root = ReactDOM.createRoot(app);
root.render(container);

//React + ReactDOM + ourcode => bundle.js
//we use webpack bunlder, 
//npx => node package executer

