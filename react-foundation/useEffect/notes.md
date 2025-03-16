# UseEffect Hook

    - what is useEffect hook and why we need it?
    - Signature of useEffect hook
    - Dependency list adn it's usage
    - working of useEffect in updating / unmounting phase

- useEffect is the hook, with the help of useEffect we can execute side effects inside the component
- Side effect means interacting with the outer world of the functional component
        - Eg: data fetching from remote server , interaction with remoter server
        - Setting timer, using setTimeout, extracting geolocation, adding eventlistener to the components, these are examples of side effect

## Signature

    - useEffect(callback,dependencyList) 

```jsx
    function App() {
        const [count, setCount] = useState(10);
        useEffect(()=>{
        console.log("inside useEffect")
    })
    return<>
        <h1>useEffectHook</h1>
        
    </>
    
}
```

- In component life cycle we have mounting phase, updating phase, unmounting phase

- After component mounting done, the callback function is executed and painted on the screen

```jsx
    
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("inside useEffect")
  })
  const increment = () => {
    setCount(count + 1);
  }
  return <>
    <h1>useEffectHook</h1>
    <p>Count is : {count}</p>
    <button onClick={increment}>Increment</button>
  </>

}
```

- useEffect callback when we pass only the callback, component is mounted and for ever update the callback will execute

- When ever we want to execute a task which shold happen afte component mounted and updated then we can use useEffect hook.

## Dependency list

- It is an array data structure.
- Sometimes we dont want to trigger callback fn every time, we want to trigger only selective times then we use dependency list
- advantage of dependency list, suppose we are at ith render we have one dependency list , and due to some state updates we need to go to i+1 th render, if ith render dependency list and i+1th dependency list , if these 2 dependency list have some change then i+1 th also have that change

```jsx

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("inside useEffect")
  }, [])
  const increment = () => {
    setCount(count + 1);
  }
  return <>
    <h1>useEffectHook</h1>
    <p>Count is : {count}</p>
    <button onClick={increment}>Increment</button>
  </>
}
```

- from the above example we can see, we are passing [], on first render count will be 10 after mounting and updating, callback fn will execute and prints inside useEffect.  
- When we increment the count we are on the 2nd render, same thing happens, but now callback fn will not execute because there is no change in [], in both cases dependency list is empty
- callback only execute if there is a change in dependency list

## now lets see unmounting Cleaning up




## Understanding `useEffect` Behavior

## 1. When No Dependency Array is Provided (`useEffect(() => {...})`)

- The callback runs **after every render**, including **initial mount** and **every update** (re-render).
- In your code, `"inside useEffect"` will be logged every time the component re-renders.

### Example

```jsx
useEffect(() => {
  console.log("inside useEffect");
});
```

- When You Want to Run an Effect Only After the Component Mounts and Updates
If you want an effect to run on mount and every update, you can leave out the dependency array, just like in your code.
When to Use useEffect Without Dependencies:
Logging state or props on every render
Running animations that should update on every state change
Fetching or syncing data on every render
- If You Want It to Run Only Once After Mount
Use an empty dependency array ([]):

Example:

```jsx
useEffect(() => {
  console.log("Component mounted");
}, []);  // Runs only once when the component mounts
```

- If You Want It to Run Only When count Changes

### Provide count as a dependency

```jsx
useEffect(() => {
  console.log("Count updated:", count);
}, [count]);  // Runs when `count` changes
```

Your understanding is almost correct, but just remember that without a dependency array, the effect runs on every render (not just mount and update, but also unnecessary renders).

This will render correctly in Markdown with syntax highlighting.
