# useReducer Hook

- In react useState is used to manage component state. However as the state logic grows complex such as when multiple related state vlaues needs to be updated together - it becomes hard to manage.

```jsx
    import { useState } from "react";

const App = ()=>{
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount(count + step);
  }
  const decrement = () => {
    setCount(count - step);
  }
  const updateStep = (value) => {
    setStep(Number(value));
  }
  return(
    <>
      <h1>useReduce Hook</h1>
      <p>Count is : {count}</p>
      <p>Current Step : {step}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div>
      <label>
          Set Step:
          <input
            type="number"
            value={step}
            onChange={(e) => updateStep(e.target.value)}
            min="1"
          />
        </label>
      </div>
    </>
  )
}

export default App;

```

- As a logic grows multiple useState calls make it harder to maintain and debug

- We use useReducer, with help of useReducer hook , it centralize state logic into a single function(call reducer)
- It makes state transitions predictable using an action-based approach
- It is useful when state chages involves multiple values

## useReducer signature and working

- the useReducer takes 2 arguments
**const [state, dispatch] = useReducer(reducer, initialState)**

- **reducer** : a function that takes the current state and an action , then returns a new state.
- **initialState** : The starting value of the state.
- **dispatch** : A function that sends an action to update the state


```jsx
    import { useReducer } from "react";


const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return { ...state, count: state.count + state.step };
      case "Decrement":
        return { ...state, count: state.count - state.step };
      case "SET_STEP":
        return { ...state, step: action.payload };
      default:
        return state;
    }
  };

  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "Increment" });
  };

  const decrement = () => {
    dispatch({ type: "Decrement" });
  };

  const updateStep = (newStep) => {
    dispatch({ type: "SET_STEP", payload: Number(newStep) });
  };

  return (
    <>
      <h1>useReducer Hook</h1>
      <p>Count is: {state.count}</p>
      <p>Current Step: {state.step}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div>
        <label>
          Set Step:
          <input
            type="number"
            min="1"
            value={state.step}
            onChange={(e) => updateStep(e.target.value)}
          />
        </label>
      </div>
    </>
  );
};

export default App;

```

What is useReducer?
useReducer is a React hook that helps you manage state when the state logic is complex. It's a more powerful alternative to useState, particularly useful when:

The next state depends on the previous one.
You need to perform complex state updates involving multiple sub-values.
You want to manage state using actions.
useReducer is based on the reducer pattern, which is similar to how state management is handled in Redux.

How useReducer works here
Here’s a step-by-step breakdown:

The Reducer Function:

```jsx
const reducer = (state, action) => {
  switch(action.type) {
    case "Increment":
      return { ...state, count: state.count + state.step };
    case "Decrement":
      return { ...state, count: state.count - state.step };
    case "SET_STEP":
      return { ...state, step: action.payload };
    default:
      return state;
  }
};
```

Reducer function: This function defines how the state should change in response to specific actions. It receives two parameters:
state: The current state of the component.
action: An object describing the change to be made to the state.
The reducer uses a switch statement to handle different types of actions. For example:
When the action type is "Increment", it updates the count by adding the step value.
When the action type is "Decrement", it subtracts the step value from count.
When the action type is "SET_STEP", it updates the step value in the state.
The return statement in each case returns a new state object, because React state should always be updated immutably (i.e., the old state should not be directly mutated).

Action:

```jsx
const increment = () => {
  dispatch({ type: "Increment" });
};

const decrement = () => {
  dispatch({ type: "Decrement" });
};

const updateStep = (newStep) => {
  dispatch({ type: "SET_STEP", payload: Number(newStep) });
};
```

An action is an object that describes a change to be made to the state. It has a type (which defines what action is being performed) and may also contain a payload (additional data required to perform the action).

In this example:

For "Increment" and "Decrement", the actions only have a type (indicating the action to perform).
For "SET_STEP", the action has a type and a payload. The payload carries the new value for the step.
The dispatch() function is used to send the action to the reducer.

Initial State:

**const initialState = { count: 0, step: 1 };**

initialState is the starting state of the application. It defines the initial values of the state variables:
count starts at 0.
step starts at 1.
Dispatching Actions:

**const [state, dispatch] = useReducer(reducer, initialState);**

useReducer(reducer, initialState) is a hook that initializes the state with the initialState object and binds it to the reducer function.
dispatch is a function that lets you send actions to the reducer.
When you call dispatch(), it triggers the reducer, which then updates the state based on the type of the action.
State Management:

The state returned from useReducer is an object that contains count and step. These are the variables that store the current values of the counter and the step size.

When you call dispatch with an action, the reducer modifies the state accordingly, and React re-renders the component with the updated state.

Key Concepts
Action:

An action is a plain JavaScript object that describes what happened and usually has a type property.
It can optionally have a payload to pass data that might be needed to perform the action (like the new step value).
Payload:

The payload is a property of an action that contains the necessary data for the action.
For example, when updating the step, the payload is the new value entered by the user.
Initial State:

initialState is the starting point of the state before any actions have been dispatched. It defines the initial values of your state variables (count and step in this case).
Reducer:

The reducer function takes the current state and an action, and returns a new state based on the action type.
It is a pure function that doesn't mutate the original state but returns a new object with the updated state.

### Overall

useReducer provides an alternative to useState when state logic becomes more complex

You define a reducer function that specifies how to modify the state based on different action types.

You dispatch actions to the reducer to change the state, and the reducer uses the action to determine how the state should be updated.

The initialState defines the starting values for the state, and the state is updated immutably within the reducer.
By using useReducer, you can manage complex state changes and ensure your state updates are predictable and maintainable.
