import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

// Components
import Navbar from "./components/navbar/index.jsx";
import Nav from "./components/Nav/index.jsx";

// Page imports
import Site from "./pages/site.jsx";
import NotFound from "./pages/404.jsx";

import ParticlesComponent from "./components/particles/stars.jsx";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Site />} />
          <Route path="/home" element={<Site />} />
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
