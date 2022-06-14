import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage/Home'
import { Navbar } from "./components";
import GlobalStyle from "./globalStyles";
function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
      <Routes>
        <Route  path="/"  element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;