# React Routing

```jsx
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';

const App = () => {
  return (
  
  <>
    <BrowserRouter>
        <Routes>
            {/* <Route path="/home" Component={Home}/> */}
            <Route index Component={Home}/>
            <Route path="/profile" element={<p>Profile page</p>}/>
            <Route path="*" element={<p>page not found</p>}/>
        </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
```
