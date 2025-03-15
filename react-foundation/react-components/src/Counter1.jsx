import { useState } from "react";

function Counter1(){
    const [count, setCount] = useState(10);
    return (
        <>
            <h2>Count is {count}</h2>
            <button onClick={
                ()=>setCount(count+1)
            }>Increment</button>
        </>
    )
}
function Control(){
    const [showCounter, setShowCounter] = useState(true);
    return (
        <div>
             {/* Mounting & Unmounting controlled by state */}
             {showCounter && <Counter1 />}
            
            {/* Toggle Button */}
            <button onClick={() => setShowCounter(!showCounter)}>
                {showCounter ? "Unmount Counter" : "Mount Counter"}
            </button>
        </div>
    )
}
export default  Control;


//using functional component, this can be well explained by useEffect, lets see in future
