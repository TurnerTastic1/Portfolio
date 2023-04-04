import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  width: 100wh;
  height: 100vh;
  background: #fff;
`;

const HeaderItem = styled.h1`
    height: 20vh;
    padding: 0 1.1em;
    color: #4682B4;
    font-weight: 500;
    
    align-items: center;
    justify-content: center;
    display: flex;
    border-top: 2px solid transparent;
    transition: all 220ms ease-in-out;
`;

const LinkItem = styled.li`
  height: 0vh;
  padding: 0 1.1em;
  color: #fff;
  font-weight: 500;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
  
  transition: all 220ms ease-in-out;

`;

const Link = styled.a`
  color: #4682B4;
  font-weight: 300;
  font-size: 25px;
  text-decoration: none;
`;

const Emphasis = styled(motion.div)`
  color: inherit;
`;

function Profile() {

  return(
    
    <PageContainer>
      <HeaderItem>
        Page not found
      </HeaderItem>
      <LinkItem>
        <Emphasis
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.8 }}
        >
          <Link href="/">
            Take me home
          </Link>
        </Emphasis>
      </LinkItem>
    </PageContainer>
  );
}

export default Profile;