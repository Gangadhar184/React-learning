# useRef Hook

```text
  * useRef Hook:
  * Signature of useRef & it's functionality
  * Real time usecases of useRef
```

- useRef is reference, it is going to use the heap memory reference. In js we have primitive and non-primitive datatypes, Non-primtive datatypes are stored in heap memory, pointing to same address(it holds the memory address), not the value

- We use useRef when we want to hold the same refrence to the nonprimitive datatype throughout the function Component, until its life cycle .

- It uses the reference across the life cycle of the component

## Need of useRef

```jsx
import { useState } from "react";

const list = [];

const App = () => {
  
  const [count, setCount] = useState(0);
  const user = {name:"gangadhar", age:23}; //it hold heap memory address (eg : 23423) in 1st render
  //2nd render user will point to 23424
  console.log(user);
  list.push(user);
  if(list.length === 2){
    console.log(list);
    console.log(list[0] === list[1]); //false
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

```

- In react if we want to rerender the component for somecase. if the rerender happens it the whole object is created in new memory location(which we know the object behaviour in js) and user object will point to new memory address(data will be same but references are diff)

- In the above example when ever we click on increment btn, the component will rerender again in that case definately reference of the object will be changed, we seen it by comparing l[0] and l[1]

## In useRef Example

- **useRef(InitialValue) => {current : initialValue}**
- useRef will take intialValue and it return object which as currentValue(currentValue will be definetly present in the object)

```jsx
import { useRef, useState } from "react";

const list = [];

const App = () => {
  
  const [count, setCount] = useState(0);
  console.log("Component rendered");
  const reference = useRef({name:"gangadhar", age:23});
  // console.log(reference);
  //{current : T} => 232342 (on first render)
  //2nd render = reference = {current:T} => 232342
  //3nd render = reference = {current:T} => 232342
  list.push(reference);
  if(list.length === 2){
    console.log(list);
    console.log(list[0] === list[1])//true
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

```

- In useRef, first it will take the initialValue when the component is rendered first time, but from the secondRender, it takes the same object which it has returned previously. It returns the same object in 3rd 4th render .... useRef maintains the same reference throughout the component lifecycle

## difference between useRef and useState

- in useState data is maintained and its mutable . with setState method we can mutate the data.when we change the data, componenet will automatically rerender the data
- but in useRef , when we change the data, the component wont be rerender, in memory data updates manually

## Practice Use cases of useRef

- majors when we want to acces the realDOM elements to add custom events or to do direct mutations we use useRef

- In react we have **ref** attribute to give to every react element
- In ref attribute we can give an object, It should be ```{current:T}```,
- The purpose of ref is when element is mounted on ui, the ref object in the element, Inside current propery of the ref object realDOM element is injected

```jsx
import { useEffect, useRef } from "react";

function Ref(){
    //const element = {current : null};
   //after mounting we are printing the element
   const element = useRef(null);
   //{current:null} in first render when this object is created, the val is null , until the component unmounted same object is used
    useEffect(()=>{
        console.log(element);
        element.current.textContent = "Onepiece" //here we are directly manipulating the realDOM using ref
    },[])
    return(
        <>
        <h1 ref={element}>useRef hook</h1>
        </>
    )
}
export default Ref;
```

-after mounting of the element , the current element ( which we have {curren : null} ) it becomes h1 element dom reference because of ref attribute

- eg: forms, popover, we can use ref and useRef
- when we want to do actions on child component from the parent component we can use ref and other imperative hook and forward
