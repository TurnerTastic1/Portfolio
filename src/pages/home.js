import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";


import { AnimatedTitle } from "../components/motion/AnimatedTitle.jsx";
import { motion } from "framer-motion"

const Main = styled.section`
  padding-bottom: 100%;
`;

const About = styled.section`
  
`;

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;
.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
padding: 2rem;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: space-evenly;
&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;
}
`

export function ChangeTitle() {
  const location = useLocation();

  if (location.hash === "#about") {
    document.title = "Turner Naef - About";
  } else if (location.pathname === "/projects") {
    document.title = "Turner Naef - Projects";
  } else if (location.pathname === "/social") {
    document.title = "Turner Naef - Social";
  } else {
    document.title = "Turner Naef";
  }
}

function Home() {
  ChangeTitle();
  // console.log("Home!");
  return (
    <div>
      <Main id="home">
        <motion.div
          initial={{height:0}}
          animate={{height: "55vh"}}
          transition={{ type: "spring", duration:2, delay:1 }}
        >
          <SubBox>
            <Text>
              <h1>Hello there,</h1>
              <h2>My name is Turner</h2>
            </Text>
          </SubBox>
          
        </motion.div>
        <SubBox>
          <h1>
            <AnimatedTitle input="Hello there,"/>
          </h1>
          <h1>
            <AnimatedTitle input="My name is Turner"/>
          </h1>
          
        </SubBox>
        
        
      </Main>

      <About id="about">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          <SubBox>
            <Text>
              <h1>Hello there,</h1>
              <h3>My name is Turner</h3>
            </Text>
          </SubBox>
          
        </motion.div>
      </About>
      
    </div>
  )
}

export default Home;