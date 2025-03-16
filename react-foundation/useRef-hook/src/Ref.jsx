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

// after mounting of the element , the current element ( which we have {curren : null} ) it becomes h1 element dom reference because of ref attribute

//eg: forms, popover, we can use ref and useRef
//when we want to do actions on child component from the parent component we can use ref and other imperative hook and forward
