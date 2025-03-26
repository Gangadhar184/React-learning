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

  // Function to handle increment
  const increment = () => {
    dispatch({ type: "Increment" });
  };

  // Function to handle decrement
  const decrement = () => {
    dispatch({ type: "Decrement" });
  };

  // Function to update step
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
