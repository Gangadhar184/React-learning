# HOOK-STATE Importance and why do we need HOOKSb(State hook)

``` jsx
import React from "react";
import ReactDOM from "react-dom/client";
let count = 0;
function Counter(){
  const increment = ()=>{
    console.log(count) // current value
    count++;
    console.log(count) //updated value
    root.render(<Counter/>)
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
```

Here we are trying to achieve the updating of count value with out state hook

## How react renders

- The first time ``` **root.render(<Counter/>)** ``` is called, React creates and renders the Counter component inside the root div.
The component function Counter() executes, and count is initially 0.

## what happens on button click?

-When you click the button:

- The increment function runs.
- console.log(count) prints the current value of count (e.g., 0 on the first click).
- count++ increases the value by 1 (but count is just a normal variable, not a state variable).
- console.log(count) prints the updated value.
- Then, ``` **root.render(<Counter/>)** ``` is called again, manually forcing  React to re-render the entire Counter component.

## here we are using without useState

- React usually does not track normal variables (let count = 0). Instead, it relies on state (useState) to trigger re-renders. However, in your approach:

- You are manually forcing the entire component tree to re-render using ``` **root.render(<Counter/>)** ``` each time.
- Since count is a global variable, its value persists across renders, so the UI gets updated.

## this is very inefficient

- Inefficient Re-Renders
  - Every time you call ``` **root.render(<Counter/>)** ```, React re-renders the whole application from scratch.
  - This is not how React is meant to work, as React's virtual    DOM optimizations are bypassed.

This is the reason we use state hook,
