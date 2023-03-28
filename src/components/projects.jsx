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

function Projects() {
  return (
    <AboutContainer>
      <Text>Projects page!</Text>
    </AboutContainer>
  )
}

export default Projects;