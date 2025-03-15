### State Hook

- useState() signature - Its a function, it will take one parameter and it will return array of two elements

**[stateValue, setState] = useState(initialState)**

- const arr = useState(0);
- console.log(arr); // [0,f]

- output will be stateValue and function expression(setter function)
- Instead of doing arr and doing arr[0] and arr[1], we can simply do destructuring
const [count, setCount] = useState(0)
- Never update stateValue directly, there will be no component rerender, it only updates in memory but not in ui
- Directly mutating state doesn't notify React that the state has changed, so the component won't re-render, and the UI will not reflect the updated state
- Always use state Setter function returned by useState to update state  This ensures that React correctly triggers a re-render of the component and updates the UI.
- Previous it will be 0, when we update count with setState(setCount), now useState statevalue, gives us updated state, instead of giving the initalState

function Counter(){
    const[count, setCount] = useState(0);
  const increment = ()=>{
    setCount(count + 1) //0+1 =1
  }
  return(
    <>
    <h1>Counter Component</h1>
    <h2>Count is {count}</h2>
    <button onClick={increment}>Increment</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter/>)

### Now lets see how Non-primitive data types work with useState

- We have to Focus on memory Reference and update state
- Lets suppose we passed object as an parameter into useState
let [user, setUser] = useState({age:19, name:"luffy"});
const increment = ()=>{
    console.log(user); //{age:19, name:"luffy"}
    user.age += 1; //{age:20, name:"luffy"}
    console.log(user);//{age:20, name:"luffy"}
    setUser(user);
}
- In memory the update of the age happens, but not in ui, because when vdom tree is created, setUser checks if there is any change happens, since it is a object it points to same address location, it thinks that there is no change so no need to rerender, It does, shallow check, not deep copy check.
- in order to update on ui we need to create a new object

### Understanding Non-Primitive Data Types with `useState`

Let's suppose we pass an object as a parameter into `useState`:

let [user, setUser] = useState({ age: 19, name: "Luffy" });

const increment = () => {
    console.log(user); // { age: 19, name: "Luffy" }
    user.age += 1; // { age: 20, name: "Luffy" }
    console.log(user); // { age: 20, name: "Luffy" }
    setUser(user);
};

Why Doesn't the UI Update?
The age value updates in memory, but the UI does not re-render.
When React creates the Virtual DOM (VDOM) tree, setUser(user) is called.
Since user is an object, React performs a shallow comparison (===) and checks if the reference has changed.
Since the reference remains the same, React assumes no change occurred and skips the re-render.
Correct Way to Update the State
To trigger a re-render, we must create a new object instead of mutating the existing one:

const increment = () => {
    setUser(prevUser => ({
        ...prevUser,
        age: prevUser.age + 1
    }));
};

### Why Does This Work?

{ ...prevUser } creates a new object in memory.
Since the reference is now different, React detects the change and triggers a re-render.

### Now lets discuss, Asynchronous nature of the state

- In this lets see how setState works, and lets see the async nature of setState

const[count, setCount] = useState(0);
const increment=()=>{
    //count = 10
    setCount(count + 1)
    setCount(count + 3)
    setCount(count + 2)
}

- whenever we call setState method, rerendering of data is not done immediately. React checks if data is changed or not, if data is changed it schedules rerender of the component
- In background react maintains queue DS
    -- Q= [11,13,12]
- when we click on the btn increment, remember count is 10 in this function scope
    //count = 10
  - setCount(count + 1) // setCount(11)
- still it has 2 more statements to finish this fucntion. After executing all the statements, it will schedule the rerender of the component

- In next step
    -count will be 10 only so setCount(count+3) //setCount(13);
- In next step
    -count will be 10 only so setCount(count+2) //setCount(12);

- Now all the statements are executed and pushed into queue, now call stack is free, now this component will rerender
- const[count, setCount] = useState(0); this statement will be executed first. we are invoking useState hook again(again we are passing 10 as initial state)
- so far Counter (count = 10), when useState is called, it will check if there is any updates in react queue in respective to counter component, in queue we have [11,13,12],
- now Counter component state will change to 11,(now we have 2 pending updates) again it will check it will be 13 (now we have one pending update) and at last it will be 12
- At last Counter (count = 12) after all pending updates
- So in 2nd render updated state will be 12
- this is reason we see 12 on UI

- when we click increment btn again
    now our count = 12(which is initial state)
- it will go the same process as above
    setCount(c+1) setCount(13)
    setCount(c+3) setCount(15)
    setCount(c+2) setCount(14) all we be pushed into queue
- on ui we see 14 on 3rd render we see 14 .

-If we observe carefully React is not doing cascading updates. Instead we are getting final increment in the function. So react implemented another method to setter function
**setState(callbackFn)**
**setState(callbackFn)=>(prev)=>nextValue**

import { useState } from "react";

const App = () => {

    //setState(callbackFn)=>prev=>nextVal
    //Q = [1, fn] => now we have only [fn], now fn will invoke, it see take prev as 1, return 1+1= 2
    //Q=[]
    //Q=[3,fn],fn will invoke and return 3+1=4
    //Q=[]
const [count, setCount] = useState(0);
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


### Lazy Initialisation

    function compute(){
        let sum = 0;
        for(let i = 0; i <= 100; i++){
            sum +=i;
        }
        return sum;
    }
    const[count, setCount]  = useState(compute());

- this compute function run loop for 100 times and returns sum
- I need initial state of the component as sum of 100 number, so we are passing compute() inside useState (basically we are invoking the function)
- There is a draw back, When component is rendering first time, useState function is called, there is compute() function which are calling inside useState(). compute will return sum,
- When we clikc on increment btn, setCount will be called, again component will rerender again useState will call happens and agian compute will be called. we are doing, uneccessary invocation. IT decreses the performance of the component
- Acutally from 2nd render we dont need to change the initialState , so instead of invoking compute in useState, just pass it as function expression.
- Here we are passing callback function to useState . This callback function on executes on first render. from 2nd render onwards it will be ignored
**useState(compute)**
