# Context API

- The two main library of react are react routerDOM and redux(global state management)
- These 2 libararies are directly depend on context api

```text
    - What is prop drilling
    - What is context api
    - provider & consumer components
    - useContext Hook
```

- To avoid the problem of prop drilling context api is introduced by react

## Lets see Prop Drilling

- Lets say we have home page in that we have navbar and various categories of the home .
- Theme is generally used in all applications. we dont keep theme separate of each components .
- Theme is application level data. It is global data for entire application. So this should be maintained in root level
- We have a Home page that contains a Navbar and Categories components. The theme is managed at the App level and passed down as props.
- This leads to prop drilling, where intermediate components have to pass the theme prop even if they don’t use it directly.

```jsx

const Product = ({theme}) =>{
  return<>
  <h2>Product component</h2>
  <button style={{border: theme === 'light'?"1px solid blue":"none"}}>add to cart</button>
  </>
}

const Categories = ({theme}) => {
  return <>
  <h1>Categories component</h1>
  <Product theme = {theme}/>
  </>
}

const NavBar = () =>{
  return <>
    <h1>Navbar component</h1>
  </>
}


const App = ()=> {
  const theme = "light"; //light | dark
  return  <>
    <NavBar/>
    <Categories theme={theme}/>
  </>
}

export default App

```

### issues with prop drilling

- Every component has to pass theme even if it doesn’t use it.
- Adding new components requires passing theme manually, - increasing complexity.
- Difficult to maintain as the app grows.

### To solve the above issue we use ContextAPI

- context api has provider and consumer. provider provides the data and consumer consumes the data

- IN home component if we provide the theme, there descendents only can consume the data. This can be achieved without setting props to each.

- TO use context api we have **createContext**. It creates a context object. Each context object have 2components one is provider and other is consumer.

- I want to make App component as provider component. This provider component takes one prop
**```<ThemeContext.Provider value={theme}>```**
-Now every consumer of this provider can use the injected value, here it is theme value.
- Only Provider Children Component can use the theme value can consume it

```jsx
    <ThemeContext.Provider value={theme}>
      <Categories theme={theme}/> //children
    </ThemeContext.Provider>
```

- But our interest is on Product Component should consume theme. Now **Category component is children of the Provider. Then Product Component is also children of the Provider**. Because Product is the children of cateogry and Category is children of Provider.

- Now we can use **```<ThemeContext.Consumer></ThemeContext.Consumer>``**. Consumer component takes one function as a chidlren, the fn will get a parameter of provided value

```jsx  
const Product = () =>{
  return<>
  <ThemeContext.Consumer>
    {
      (theme)=>{
      return <div>
          <h2>Product component</h2>
          <button style={{border: theme === 'light'?"1px solid blue":"none"}}>add to cart</button>
      </div>
      }
    }
  </ThemeContext.Consumer>
  </>
}
```

- with the theme is passing as a parameter, we can render the jsx whatever we want on ui.
- This above pattern is used in class components.because in class components we can use hooks.
- For function component the above syntax is too messy

### For Functional Component useContext

- we use **useContext** Hook

```jsx

const Product = () => {
  const theme = useContext(ThemeContext);
  return <>

    <h2>Product component</h2>
    <button style={{ border: theme === 'light' ? "1px solid blue" : "none" }}>add to cart</button>

  </>
}

```

- This how we use useContext, Context API in react. The main advatage of using this hook is, **we are no passing data as props**
- In context api, we setting Providere component inside the root component and we are passing the data which it want to serve.

```jsx
    
const App = () => {
  const theme = "light"; //light | dark
  return <>
    <ThemeContext.Provider value={theme}>
      <Categories />
    </ThemeContext.Provider>
    <NavBar />

  </>
}
```

### example

```jsx

    import { createContext, useContext } from "react"

const ThemeContext = createContext();

const Product = () => {
  const theme = useContext(ThemeContext);
  return <>

    <h2>Product component</h2>
    <button style={{ border: theme === 'light' ? "1px solid blue" : "none" }}>add to cart</button>

  </>
}

const Categories = () => {
  return <>
    <h1>Categories component</h1>
    <Product />
  </>
}

const App = () => {
  const theme = "light"; //light | dark
  return <>
    <ThemeContext.Provider value={theme}>
      <Categories />
    </ThemeContext.Provider>
    <NavBar />

  </>
}

const NavBar = () => {
  return <>
    <h1>Navbar component</h1>
  </>
}
export default App

```

- We are not interuppting the other components which are in the middle of that.

### we have to understand 2 more things

- What if the Product component is not the children of the Provider.

- Lets see what happnes, In above example we have Navbar. Navbar is not the children of the theme Provider. It has only Categories has chidlren

- Lets consume same thing in Navbar and see what happens

```jsx
    const NavBar = () => {
  const theme = useContext(ThemeContext)  ;
  console.log("navbar", theme);
  return <>
    <h1>Navbar component</h1>
  </>
}
export default App

```

- we get undefined. because navbar is not the children of the Provdier component so we cant get the data.

- **to solve this type of cases** we have **default value**. When we are creating context object we can provide default value directly. If non-descendnt components try to access the the same context value . It gets the default value

```jsx
    const ThemeContext = createContext("defaultThemem");

    const NavBar = () => {
  const theme = useContext(ThemeContext)  ;
  console.log("navbar", theme);
  return <>
    <h1>Navbar component</h1>
  </>
}
```

- Now we get default theme as output. If we make Navbar as children to Provider we get light as output,it can consume the context value

```jsx
  <ThemeContext.Provider value={theme}>
      <Categories />
    </ThemeContext.Provider>
```

- this Provider component is like a wrapper. and we are passing children

- One more thing is **what if we have multiple Provider component as same context object**

- if i create one more wrapper around it .like for example

```jsx
    <ThemeContext.Provider value= "dummytheme">
        <ThemeContext.Provider value={theme}>
            <Categories />
        </ThemeContext.Provider>
        <Navbar/>
    </ThemeContext.Provider>
```

- **The way context work as always it takes the value the nearest Provider context value in the tree**

- in the above example for categories nearest Provider is theme which is light in our example
- but of Navbar Component nearest Provider is "dummytheme" as context value.
- It is hypothetical, we wont use this type of scenorioes

