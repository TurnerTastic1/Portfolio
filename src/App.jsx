import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Component are used in pages

// Page imports
import Home from "./pages/home.jsx";
import NotFound from "./pages/404.jsx";

function App() {
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
    <App/>
  )
}


export default appWrapper;
