import React from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  padding-bottom: 100%;
  background: #111;
`;

const Text = styled.div`
	flex: 50%
	text-align: center;
	color: #fff;
`;

function About() {
  return (
    <AboutContainer>
      <Text>About page!</Text>
    </AboutContainer>
  )
}

export default About;