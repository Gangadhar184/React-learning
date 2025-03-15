import React, { useState } from "react";

import ReactDOM from "react-dom/client";
import App from "./App";

//[stateValue, setState] = useState(initialState)
// setState(newState)
function Counter(){
    //const[count, setCount] = useState(0);
    const[user, setUser] = useState({age:23, name:"gangadhar"})
    // #user object point to #500 address
  const increment = ()=>{
    // setCount(count + 1) //0+1 =1
    console.log(user); // #500={age:23, name:"gangadhar"
    user.age += 1;// #500 ={age:24, name:"gangadhar"
    console.log(user);//#500 ={age:24, name:"gangadhar"
    //setUser(user);//#500 this will also points to 500, there is no deepcopy check, inorder to update on ui, we need to point obj to new memory location, so it will render on ui
    setUser({...user})
  }
  return(
    <>
    <h1>Counter Component</h1>
    <h2>Name is {user.name} age : {user.age}</h2>
    <button onClick={increment}>Increment</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)



