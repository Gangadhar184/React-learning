//useEffect callback

import { useEffect } from "react";

//signature for cleaning 
//callback() : undefined | function
const Clean = () => {
    useEffect(()=>{
        console.log("compoenet mouted");
        return ()=>{
            console.log("inside cleanup fn")
        }
    },[])
    return <>
        <p>Clean Component</p>
    </>
}
export default Clean;

/* return ()=>{
    console.log("inside cleanup fn")
}
    This return callback fn is called cleanup fn
    - this is execute after component unmounting
*/

