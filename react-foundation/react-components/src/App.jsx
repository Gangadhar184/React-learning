// export default function App(props) {
//   return (
//     <>
//       <h1>Name : {props.name} , Age : {props.age} </h1>
//     </>
//   )
// }

export default function App({name, age}) {
  return (
    <>
      <h1>Name : {name} , Age : {age} </h1>
    </>
  )
}

