import { useRef, useState } from "react";

const list = [];

const App = () => {
  
  const [count, setCount] = useState(0);
  console.log("Component rendered");
  const reference = useRef({name:"gangadhar", age:23});
  // console.log(reference);
  list.push(reference);
  if(list.length === 2){
    console.log(list);
    console.log(list[0] === list[1])
  }
  return(
    <>
    <h2>useRef hook</h2>
    <p>Count is : {count}</p>
    <button onClick={()=>setCount(count+1)}>increment</button>
    </>
  )
}
export default App;
