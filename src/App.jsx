import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";

// Components
import Navbar from "./components/navbar/index.jsx";

// Page imports
import Home from "./pages/home.jsx";
import NotFound from "./pages/404.jsx";

function App() {
  // const paths = ["/", "home", "/#about"];
  // const is404 = !paths.includes(window.hash);
  return (
    <Router>
      <GlobalStyle/>
      {true && <Navbar />}
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
    <App />
  )
}


export default appWrapper;
