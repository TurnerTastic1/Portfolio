/* eslint-disable react/no-unknown-property */
import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  background: rgb(f, f, f);
`;

const LeftSection = styled.div`
  display: flex;
`;

const RightSection = styled.div`
  display: flex;
  flex: 2;
  justify-content: right;
  padding-right: 50px;
`;

const Text = styled.div`
  font-size: 20px;
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

`;

const HomeRedirect = styled.div`
  font-size: 30px;
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: #00BFFF;

`;

const HomeRLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  
  &:hover {
    color: #000000;
    border-top: 1px solid #000000;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  
  &:hover {
    color: #00BFFF;
    border-top: 1px solid #00BFFF;
  }
`;

const Emphasis = styled(motion.div)`
  color: inherit;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <LeftSection>
        <HomeRedirect>
          <Emphasis
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
          >
            <HomeRLink href="/">TN</HomeRLink>
          </Emphasis>
        </HomeRedirect>
        
      </LeftSection>
      <RightSection>
        <Text>
          <Emphasis
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
          >
            <Link href="/#about">About</Link>
          </Emphasis>
        </Text>
        <Text>
          <Emphasis
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
          >
            <Link href="/projects">Projects</Link>
          </Emphasis>
        </Text>
        <Text>
          <Emphasis
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
          >
            <Link href="/socials">Socials</Link>
          </Emphasis>
        </Text>
      </RightSection>
    </NavbarContainer>
  )
}

export default Navbar;