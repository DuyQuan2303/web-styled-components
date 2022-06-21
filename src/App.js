import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import GlobalStyle from "./globalStyles";
import ScrollButton from "./components/ScrollToTop";
import BgColor from "./components/Slider/hooks/bgColor";
function App() {
  return (
    <BgColor>
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <ScrollButton/>
    </Router>
    </BgColor>
  );
}

export default App;
