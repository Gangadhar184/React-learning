import { createContext, useContext } from "react"


const ThemeContext = createContext("defaultThemem");

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
  const theme = useContext(ThemeContext)  ;
  console.log("navbar", theme);
  return <>
    <h1>Navbar component</h1>
  </>
}
export default App
