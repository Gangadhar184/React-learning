import React from "react";



const Eg = ()=>{
    const [count, setCount] = React.useState(0);
    
    const reference = React.useRef({name:"abc", age:23});
    console.log(reference);

    function updateName(){
        reference.current.name = "moneky D Luffy";
    }
    return<>
    <p>Example of useRef not rendering when data is changed</p>
    <p>Count is : {count}</p>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={updateName}>Change the name</button>
    </>
}
export default Eg;

/**
 * when ever     function updateName() {
        reference.current.name = "Luffy"
    } this is executed the component wont rerender, we are updating only in memory. It wont tract like state hook
 */
