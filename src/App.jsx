import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

// Components
import Navbar from "./components/navbar/index.jsx";
import Nav from "./components/Nav/index.jsx";

// Page imports
import Home from "./pages/home.jsx";
import Projects from "./pages/projects.jsx";
import NotFound from "./pages/404.jsx";

import ParticlesComponent from "./components/particles/stars.jsx";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  postion: fixed;
`;

function App() {
  // const paths = ["/", "home", "/#about"];
  // const is404 = !paths.includes(window.hash);
  return (
    <AppContainer>
      <Nav />
      <ParticlesComponent />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

const appWrapper = () => {
  return (
    <App />
  )
}


export default appWrapper;
