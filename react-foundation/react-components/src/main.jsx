import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Count.jsx'
import Counter1 from './Counter1.jsx'
import Control from './Counter1.jsx'

class User extends Component{
  constructor(props){
    super(props)
    console.log(this.props)
  }
  render() {
    // console.log(this.props)
    return(
      <div>
        <p>Name : {this.props.name}, Age : {this.props.age}</p>
      </div>
    )
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    {/* <User name='luffy' age = '19'/> */}
    {/* <Counter/> */}
    <Control/>
  </StrictMode>
)
