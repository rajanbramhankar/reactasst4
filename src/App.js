import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Student from "./Components/Student";
import Contact from "./Components/Contact";

import "./Components/style.css"

function App() {
  return (
      <div className="styling">
      <BrowserRouter>
      <Nav />
      <Routes>
        
      <Route path="/home" element={ <Home /> } />
      <Route path="/student" element={ <Student /> } />
      <Route path="/contact" element={ <Contact /> } />

      </Routes>
      </BrowserRouter>
      </div>
  );
}


export default App;