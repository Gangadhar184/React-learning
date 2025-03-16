import { useEffect, useState } from "react"



//1st render = [10] -> dependency list
//2n render we click on increment, 2nd redner = cont-11 age -23 [11]->dependency list(changed dependency) and after 2nd render completed , callback fn is executed because dependency list has changed

//2nd eg with mul useEffect-> when we click on increment btn
function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(23);
  useEffect(() => {
    console.log("count is changed")
  }, [count]);
  //1st render = [10]
  //2nd render = [11]
  //callback fn is exec
  useEffect(()=>{
    console.log("age is changed");
  },[age]);
  //1st render = [23]
  //2nd render = [23]
  //cb fn is not exec
  useEffect(()=>{
    console.log(" count or age is changed")
  }, [age,count])
  //1st render = [23,10]
  //2nd render = [23,11]
  // only 1element is changed,then whole dependenyis changed so cb fn exec

  return <>
    <h1>useEffectHook</h1>
    <p>Count is : {count}</p>
    <p>Age is : {age}</p>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setAge(age+1)}>increment age</button>
  </>

}

export default App
