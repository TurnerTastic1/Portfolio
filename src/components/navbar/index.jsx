import React from "react";

import styled from "styled-components";

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

function Navbar() {
  return (
    <NavbarContainer>
      <LeftSection>
        <HomeRedirect>
          <HomeRLink href="/">TN</HomeRLink>
        </HomeRedirect>
      </LeftSection>
      <RightSection>
        <Text>
          <Link href="/#about">About</Link>
        </Text>
        <Text>
          <Link href="/projects">Projects</Link>
        </Text>
        <Text>
          <Link href="/socials">Socials</Link>
        </Text>
      </RightSection>
    </NavbarContainer>
  )
}

export default Navbar;