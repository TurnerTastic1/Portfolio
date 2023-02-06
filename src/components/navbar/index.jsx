import React from "react";
import styled from "styled-components";

// Importing custom components
import { 
  Text, 
  HomeRedirect,
  HomeRLink,
  Link,
  Emphasis
} from "./styles.jsx";

const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px #fff;
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
            <Link href="/connect">Connect</Link>
          </Emphasis>
        </Text>
      </RightSection>
    </NavbarContainer>
  )
}

export default Navbar;