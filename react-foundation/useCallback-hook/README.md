# useCallback Hook

- useCallback is used for caching function across multiple renders

- we functions are nonprimitive in js, so they are stored in heap memory

```jsx
import { useState } from 'react'
import './App.css'

const refs = [];
function App() {
  const [count, setCount] = useState(0);
  
  function increment(){
    setCount((count)=>count+1);
  }
      //1st render  increment => 1232 memory address
      //2st render  increment => 1233 memory address
  refs.push(increment);
  if(refs.length === 2){
    // console.log(refs);
    console.log(refs[0] === refs[1]) //false, fn is each time recreating
  }

  return (
    <>
    <p>count is : {count}</p>

     <button onClick={increment}>increment</button>
     <SomeComponent increment= {increment}/>
    </>
  )
}

export default App

```

- whenever component is rendered the function is recreated

- lets suppose we passes increment fn to some other component , so everytime the other component is also rerenderd when increment prop is changed (this is a problem)

- To tackle this issue we can use useCallback()

## Signature

**useCallback(fn,[])**

- useCallback takes fn and deps and returns cachedFn, (here cacheFn is whatever fn we passed into callback it holds the reference of it and it returns)
- In order to avoid the recreating of fn eachtime the component is rendered, **we need to cache the function** so next when we want to use the fn we retrieve.
- during 1st render

```jsx
    import { useCallback, useState } from 'react'
import './App.css'

const refs = [];
function App() {
  const [count, setCount] = useState(0);

    //1st render increment => 2334 memoryadress, deps = []
    //1st render increment=> 2334, deps = []

  const increment = useCallback(()=>{
    setCount((count)=>count+1);
  } , [])
  refs.push(increment);
  if(refs.length === 2){
    // console.log(refs);
    console.log(refs[0] === refs[1])
  }

  return (
    <>
    <p>count is : {count}</p>
     <button onClick={increment}>increment</button>
    </>
  )
}

export default App

```

- to know what memory address is on 2nd render we need to look in dependency list
- suppose depslist is changed wrt to previous render, it will reconstruct fn and points to new memory location .
- if there is no change , then it takes cache memory reference and returns it

### Now lets see how dependecy list changes and how it works in useCallback

 (memory reference)

- 2nd render (cnt = 0) , deps =[0], increment -> 1232 (since deps list is same as previous , it will cache and points to same memory)

- 3rd render (cnt = 0) , deps =[1], increment -> 1233 (now deps is changed) it now more return the cached fn. It will create other fn with the same defination .
