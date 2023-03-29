import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import ParticlesComponent from "../components/particles/stars.jsx";

const Main = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  padding-bottom: 100%;
  padding-top: 10px;
	color: #fff;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(118, 111, 232);
  
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

const Link = styled.a`
  color: #4682B4;
  font-weight: 300;
  font-size: 25px;
  text-decoration: none;
`;

export function ChangeTitle() {
  const location = useLocation();

  if (location.hash === "#about") {
    document.title = "Turner Naef - About";
  } else if (location.pathname === "/projects") {
    document.title = "Turner Naef - Projects";
  } else if (location.pathname === "/connect") {
    document.title = "Turner Naef - Connect";
  } else {
    document.title = "Turner Naef";
  }
}

function Projects() {
  ChangeTitle();
  // const [isExpanded, setExpanded] = useState(false);

  

  
  
 
  
  return (
    <Main>
      <Link href="/">
        Take me home
      </Link>
      <p>
				Projects!
      </p>
    </Main>
  )
}

export default Projects;