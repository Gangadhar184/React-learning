import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Eg from './Eg.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StrictMode>
  <Eg/>
  </StrictMode>)
