import React from 'react'
import { useSearchParams } from 'react-router-dom';

const ProblemSet = () => {
    console.log("rendered")
    // const params = useParams();
    // console.log(params);
    const [queryParams, setQueryParams] = useSearchParams();
    
    //hook it gives 2 values, queryParams, setQueryParams, queryParams gives u object
    //console.log(queryParams.get("page")); //on qqueryParams it takes methods like get(key), getAll(key), append(key, value) , set(k,v), forEach(v,k)=> void. , hash(k,v) delete(k,v), never try to update on queryParams(if we do only it only updates in memory, it wont rerender on ui), we have to use setQueryParams
    console.log(queryParams.getAll("name"));
    console.log("page", queryParams.getAll("page"))
    console.log(queryParams.has("name"))
    queryParams.forEach((value, key)=>{
        console.log(value , key)
    })
    const appendParam = () => {
        setQueryParams(prev => {
            prev.append("name", "luffy");
            prev.set("page", 2);
            return prev;
        })
    }
    const deleteParams = () => {
        setQueryParams(prev => {
            prev.delete("name", "luffy")
            return prev;
        })
    }
  return (
   <div>
    <p>Problemset</p>
    <button onClick={appendParam}>Append query param</button>
    <button onClick={deleteParams}>Delete</button>
   </div>
  )
}

export default ProblemSet
