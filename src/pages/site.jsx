import React from "react";
import styled from "styled-components";

import Home from "../components/home.jsx";
import About from "../components/about.jsx";

import ParticlesComponent from "../components/particles/stars.jsx";


function Site() {

  return (
    <div>
      <ParticlesComponent />
      <Home />
      <About />
    </div>
  )
}

export default Site;
