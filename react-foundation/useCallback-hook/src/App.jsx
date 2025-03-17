import { useState, useCallback } from "react";

const refs = [];

const App = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("Function recreated!");
    setCount((prevCount) => prevCount + 1);
  }, [count < 2 ? 0 : count]);

  refs.push(increment);

  console.log(`Render - count: ${count}, increment reference:`, increment);

  if (refs.length === 3) {
    console.log("Comparing function references:");
    console.log("refs[0] === refs[1]:", refs[0] === refs[1]);
    console.log("refs[0] === refs[2]:", refs[0] === refs[2]);
  }

  return (
    <>
      <p>Count is: {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default App;
