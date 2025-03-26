import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Discuss from "./pages/Discuss";
import Contest from "./pages/Contest";
import Navbar from "./Navbar";
import ProblemSet from "./pages/ProblemSet";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/home" Component={Home}/> */}
          <Route index Component={Home} />
          <Route path="/profile" element={<p>Profile page</p>} />
          <Route path="/problemset/:subjectName" Component={ProblemSet}/>
          <Route path="/discuss" Component={Discuss}>
            <Route path="interview-experience" element={<p>Interview-experience</p>}/>
            <Route path="interview-questions" element={<p>Interview-question</p>}/>
          </Route>
          <Route>
            <Route path="/contest/:contestId/:userId?" Component={Contest} />
          </Route>
          <Route path="*" element={<p>page not found</p>} /> 
        </Routes>
      </BrowserRouter> 
    </>
  );
};
export default App;

