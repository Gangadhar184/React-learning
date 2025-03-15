# React Components  - Functional Components and Class Components

- Generally we use Functional Components in our projects
- But it is important to know the class Components, By class Components it is easy to understand the react Life Cycle Phase
- Remeber name the component with capital letter only, if we write in small letter jsx will treat it as html element, to avoid this React team defined component name should be with capital Letter

- To create a class component

```jsx
    class User extends Component{
        render(){

        }
    }
```

- when ever we create a class component we have to define render method, (this define what ui we want to display )
- The render method should return valid JSX.
- This render will override and update on ui

```jsx
class User extends Component{
  render() {
    console.log(this.props)
    return(
      <div>
        <p>Name : Luffy, Age : 19</p>
      </div>
    )
  }
}
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <User name='luffy' age = '19'/>
  </StrictMode>
)
```

- if we check the browser , console we can see object

- Since we are using class we can use constructor for the props

```jsx
class User extends Component{
    constructor(props){
    super(props); // Must call super(props) to pass props to the parent Component
    console.log(this.props)
    }
  render() {
    return(
      <div>
        <p>Name : Luffy, Age : 19</p>
      </div>
    )
  }
}
```

- Since constructor call happens early in the class when we create a instance, props will be passed as a parameter to constructor.
- Inside constructor we have to call the parent object
- We have to call super,since we inherting

- console.log(this.props) gives undefined in the constructor (this.props will only be undefined inside the constructor if super(props) is missing.)
- If we want to have our props in the constructor, we have pass props to parent constructor,
- super(props) ensures that this.props is available inside the constructor.

## State in a class component

- State in react , it is some some data, it can be number, boolean, object, array, map anything
- State can be changed later. data that could be changes inside the component
- Component = > state + ui(html + css) + props

- In class components, state is property with in the Component class

```jsx
class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {count : 10};
    }
    render(){
        console.log(this.state); //print the object
        return <>
        <h2>Count is : {this.state.count}</h2>
        </>
    }
}
```

- super(props): Calls the parent class (Component) constructor and passes props to ensure this.props works inside the class.
- this.state = { count: 10 }:
  - This initializes the state object with a property count set to 10.
  - The state is specific to this component and cannot be accessed directly by other components.

- The render method is responsible for displaying the UI.
- console.log(this.state) prints { count: 10 }, meaning this.state is an object.
- {this.state.count}:
    -- We use {} inside JSX to dynamically display values from the state.

## Incrementing the value manually

- But this is wrong way to do it , only for expaination purpose

```jsx
import { Component } from "react";


class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {count : 10};
    }
    increment = ()=>{
        console.log(this.state.count);
        this.state.count += 1;
        console.log(this.state.count);
        this.forceUpdate(); // Force React to re-render , we are rerendering onemore immediately, updating in memory and ui
       
    };
    
    render() {
        console.log(this.state);
        return <>
        <h2>Count is : {this.state.count}</h2>  
        <button onClick={this.increment}>Increment</button>
        </>
    }
}

export default Counter;
```

- here we created button to increment the value of count , by using onClick,  this.state.count += 1;
        console.log(this.state.count);
        this.forceUpdate(); // Force React to re-render , we are rerendering onemore immediately, updating in memory and ui

- Here component is going through rerenders. So this the bad way to do

```jsx
    increment = ()=>{
        console.log(this.state.count);
      
        //we use setState
        this.setState({count : this.state.count + 1});
    };
```

-this.setState is very powerfull, if there is change in state, it is going to rerender automatically

### Component life cycle methods

1. Mounting 2. updating 3. Unmounting

- In mounting phase, when control goes to render method, here in render method we are returning jsx , now after returning jsx, virtual dom is created and reconciliation is done
- Immediatly after executing render method, we can see on the screen ui is updated

```jsx
    constructor(props){
        super(props);
        this.state = {count : 10};
    }
    increment = ()=>{
        
        this.setState({count : this.state.count + 1});
    };
    
    render() {
        //console.log(this.state);
        return <>
        <h2>Count is : {this.state.count}</h2>  
        <button onClick={this.increment}>Increment</button>
        </>
    }
    componentDidMount(){
        console.log("component mounted")
    }
```

- componentDidMount method is only executed after render method is executed(after ui is mounted on the screen)

- Remember constructor is only executed once, in the entire lifecycle of the component(it may be class or functional component) and componentDidMount() also execute only once
- Render method can be executed multiple times

### Updating phase

- Component only updates, whenever we change the state, the compnenent will rerender(here it creates vdom, then do diffing and reconciliation)
- as soon as component get updated, render()method is executed and data can be seen on ui. Then componentDidUpdate() method is executed
- Whenever we click on increment button, it executes render() again, goes through diffing and reconcilaition process, then Ui update happens on screen(here it change from 10 to 11) then it immediately go to componentDidUpdate() method executed
- componentDidUpdate can we executed multiple times, based on the changes we make
- componentDidUpdate() takes parameters prevProps, prevState(go and play in console.log in browser)

```jsx
import { Component } from "react";
class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {count : 10};
    }
    increment = ()=>{
        //console.log(this.state.count);
       // this.state.count += 1;
        //console.log(this.state.count);
        //this.forceUpdate(); // Force React to re-render , we are rerendering onemore immediately, updating in memory and ui
       
        //we use setState
        this.setState({count : this.state.count + 1});
    };
    
    render() {
        //console.log(this.state);
        return <>
        <h2>Count is : {this.state.count}</h2>  
        <button onClick={this.increment}>Increment</button>
        </>
    }
    componentDidMount(){
        console.log("component mounted")
    }
    componentDidUpdate(prevProps, prevState){
        console.log(prevProps, prevState);
        console.log(this.props, this.state);
        console.log("component did update")
    }
}

export default Counter;
```

### Unmounting phase

- Whenever component, detaches from ui, this phase is called unmounting phase
-(in class component, this componentWillUnmount() method, before component is unmounted , method will execute ) and In function component, method will execute after unmount.

```jsx
import { Component } from "react";
import { createRoot } from "react-dom/client";


class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {count : 10};
    }
    increment = ()=>{
        //we use setState
        this.setState({count : this.state.count + 1});
    };

    unmount = () => {
        console.log("Unmount button clicked");
        if (window.rootInstance) {
            window.rootInstance.unmount(); // This properly unmounts the component
            console.log("Component unmounted");
        }
    };
    
    render() {
        //console.log(this.state);
        return <>
        <h2>Count is : {this.state.count}</h2>  
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.unmount}>Unmount component</button>
        </>
    }
    componentDidMount(){
        console.log("component mounted")
    }
    componentDidUpdate(prevProps, prevState){
        console.log(prevProps, prevState);
        console.log(this.props, this.state);
        console.log("component did update")
    }
    componentWillUnmount(){
        console.log("component is about to unmount")
    }
}
const rootElement = document.getElementById("root");
window.rootInstance = createRoot(rootElement);
window.rootInstance.render(<Counter />);

export default Counter;
```

### Mount again

```jsx
import { Component } from "react";
import { createRoot } from "react-dom/client";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 10 };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    unmount = () => {
        console.log("Unmount button clicked");
        if (window.rootInstance) {
            window.rootInstance.unmount(); // This properly unmounts the component
            console.log("Component unmounted");
        }
    };

    render() {
        return (
            <>
                <h2>Count is: {this.state.count}</h2>  
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.unmount}>Unmount component</button>
                <button onClick={mountCounter}>Mount component</button>
            </>
        );
    }

    componentDidMount() {
        console.log("Component mounted");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState);
        console.log(this.props, this.state);
        console.log("Component did update");
    }

    componentWillUnmount() {
        console.log("Component is about to unmount");
    }
}

const rootElement = document.getElementById("root");

// Function to mount the component
const mountCounter = () => {
    if (!window.rootInstance) {
        window.rootInstance = createRoot(rootElement);
    }
    window.rootInstance.render(<Counter />);
    console.log("Component mounted again");
};

// Initial mount when the app starts
mountCounter();

export default Counter;
```

## Using Functional Component

Explanation of Mounting, Updating, Unmounting (Only Using useState)

- Mounting (Initial Render)
Initially, showCounter = true, so ```<Counter />``` is rendered.
The count state inside Counter is set to 10.
No useEffect, so we don’t explicitly log the mount event, but we see the UI.
- Updating (Re-render on State Change)
Clicking "Increment" updates count using setCount(count + 1), causing Counter to re-render.
Since React automatically updates the UI when state changes, it reflects the new count.
There’s no useEffect, so we don’t explicitly log updates, but the UI updates.
- Unmounting (Removing Component)
Clicking "Unmount Counter" sets showCounter = false, so ```<Counter />``` is removed from the DOM.
Since we’re not using useEffect, there's no log for unmounting.
- Remounting (Bringing Component Back)
Clicking "Mount Counter" sets showCounter = true, so ```<Counter />```  is re-created.
Since it’s a new instance, count resets to 10.

### Key Takeaways

- Mounting happens when showCounter = true.
- Updating happens when setCount() changes state.
- Unmounting happens when showCounter = false.
- Remounting resets the state because a new Counter instance is created.
- Even though this approach doesn’t explicitly track lifecycle events, it still follows the fundamental React     principles using just useState.
