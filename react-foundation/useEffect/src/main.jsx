import React from 'react'
import  ReactDOM  from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Clean from './Clean.jsx'

function unmount(){
  root.render(<p>Component unmount</p>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Clean/>
  <button onClick={unmount}>unmount app</button>
  </>
  
)



