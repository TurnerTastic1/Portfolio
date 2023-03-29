import React from "react";
import styled from "styled-components";

const ProjectContainer = styled.section`
  width: 100%;
	height: 100%;
  background: #111;
	display: flex;
  align-items: center;
  padding-bottom: 100%;
  padding-top: 3%;
`;

const LeftSection = styled.div`
	flex: 50%
	display: flex;
	justify-content: left;
`;

const RightSection = styled.div`
	flex: 50%
  display: flex;
	justify-content: right;
`;

const Text = styled.div`
	flex: 50%
	text-align: center;
	color: #fff;
`;

function About() {
  return (
    <ProjectContainer>
      <LeftSection>
        <Text>projects - Left section!</Text>
      </LeftSection>
      <RightSection>
        <Text>projects - Right section!</Text>
      </RightSection>
    </ProjectContainer>
  )
}

export default About;