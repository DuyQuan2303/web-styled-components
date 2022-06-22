import React from "react";
import styled from "styled-components";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import GlobalStyle from "./globalStyles";
import ScrollButton from "./components/ScrollToTop";
import BgColor from "./components/Slider/hooks/bgColor";
function App() {
  return (
    <>
      <BgColor>
        <Router>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
          <ScrollButton />
        </Router>
      </BgColor>
    </>
  );
}

export default App;

const RootWrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  overflow-x: hidden;
`;
