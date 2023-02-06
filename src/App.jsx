import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

// Components
import Navbar from "./components/navbar/index.jsx";

// Page imports
import Home from "./pages/home.jsx";
import NotFound from "./pages/404.jsx";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #111;
  postion: fixed;
`;

function App() {
  // const paths = ["/", "home", "/#about"];
  // const is404 = !paths.includes(window.hash);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

const appWrapper = () => {
  return (
    <AppContainer>
      <Navbar />
      <App />
    </AppContainer>
  )
}


export default appWrapper;
