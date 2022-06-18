import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import GlobalStyle from "./globalStyles";
import ScrollButton from "./components/ScrollToTop";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <ScrollButton/>
    </Router>
  );
}

export default App;
