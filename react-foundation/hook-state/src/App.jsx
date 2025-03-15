import { useState } from "react";

const App = () => {

    function compute(){
        console.log("inside compute")
        let sum = 0;
        for(let i = 0; i <= 100; i++){
            sum +=i;
        }
        return sum;
    }
    const[count, setCount]  = useState(compute);
    //setState(callbackFn)=>prev=>nextVal
    //Q = [1, fn] => now we have only [fn], now fn will invoke, it see take prev as 1, return 1+1= 2
    //Q=[]
    //Q=[3,fn],fn will invoke and return 3+1=4
    //Q=[]
//const [count, setCount] = useState(0);
    //1st render count = 0
    //2nd render count = 2
    //3rd render
const increment = ()=>{
    setCount(count + 1); //setCount(1) //setCount(3)
    setCount((prev)=>{
        return prev+1;
    })
}
return<>
    <h1>Counter Component</h1>
    <h2>Count is : {count}</h2>
    <button onClick={increment}>Increment</button>
</>






}
export default App;

//lets see how setState works here
//why this is async, react is not immediately rerender the setState value, Component is scheduled to callback queue
//basically component is scheduled to rerender
