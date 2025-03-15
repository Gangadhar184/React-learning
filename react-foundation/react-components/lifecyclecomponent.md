# React Components - Functional Components and Class Components

## Functional vs Class Components

- Generally, we use **Functional Components** in our projects.
- However, it is important to understand **Class Components**, as they provide a clear understanding of the **React Lifecycle**.
- **Naming Convention**: Component names should start with a **capital letter**; otherwise, JSX will treat them as HTML elements.

## Creating a Class Component

To create a class component, we extend the `Component` class and define a `render` method:

```jsx
import React, { Component, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

class User extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>Name: {this.props.name}, Age: {this.props.age}</p>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <User name="Luffy" age="19" />
  </StrictMode>
);
```

- `render()` defines what UI will be displayed.
- Props (`this.props`) are **read-only** and passed from parent components.
- Always **call `super(props)`** inside the constructor if you need to access `this.props` within it.

## State in a Class Component

- **State** is an internal data storage mechanism in React components.
- Unlike `props`, state **can change** over time.
- A component consists of:

  ```jsx
  Component = State + UI (HTML + CSS) + Props
  ```

### Defining State

```jsx
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 };
  }

  render() {
    console.log(this.state); // Prints the state object
    return (
      <>
        <h2>Count is: {this.state.count}</h2>
      </>
    );
  }
}
```

- `this.state` holds the component’s state, initialized in the **constructor**.
- `this.state.count` is used inside JSX to dynamically display the count.

### Updating State with `setState`

To modify state, use `this.setState()`, which triggers a re-render:

```jsx
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <h2>Count is: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}
```

### Rules of `setState()`

1. **Do not modify state directly** (e.g., `this.state.count++` is incorrect).
2. **React batches state updates**, meaning multiple updates inside an event handler might be merged.
3. Use **functional `setState`** if the next state depends on the previous state:

   ```jsx
   this.setState((prevState) => ({ count: prevState.count + 1 }));
   ```

## React Lifecycle Methods in Class Components

Class components have lifecycle methods that run at different phases of a component’s existence.

### **1. Mounting (Component Creation)**

Methods called in this phase:

- `constructor()`: Initializes state and binds event handlers.
- `render()`: Renders UI.
- `componentDidMount()`: Runs **after** the component is rendered, useful for API calls.

Example:

```jsx
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    console.log("Component mounted");
    // Simulating API call
    setTimeout(() => {
      this.setState({ data: "Fetched Data" });
    }, 2000);
  }

  render() {
    return <h2>{this.state.data ? this.state.data : "Loading..."}</h2>;
  }
}
```

### **2. Updating (Re-rendering phase)**

- `shouldComponentUpdate()`: Determines if the component should update.
- `componentDidUpdate(prevProps, prevState)`: Runs **after** state/props change.

Example:

```jsx
class Example extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated", prevState);
  }
  render() { return <h2>Updated Component</h2>; }
}
```

### **3. Unmounting (Component Removal)**

- `componentWillUnmount()`: Runs **before** the component is removed, useful for cleanup.

Example:

```jsx
class Example extends Component {
  componentWillUnmount() {
    console.log("Component unmounted");
  }
  render() { return <h2>Unmounting Example</h2>; }
}
```

## Conclusion

- **Class Components** help understand React’s lifecycle but are rarely used in new projects due to **React Hooks**.
- **`this.setState()`** is the correct way to modify state.
- **Lifecycle methods** control what happens when a component mounts, updates, and unmounts.

For modern React development, **functional components + hooks (useState, useEffect, etc.)** are preferred.
