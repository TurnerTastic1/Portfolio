import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

// Page imports
import Site from "./pages/site.jsx";
import NotFound from "./pages/404.jsx";

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
