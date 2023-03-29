import React from "react";
import styled from "styled-components";
import mountainGif from "../assets/img/mountains.gif";

const AboutContainer = styled.section`
  width: 100%;
	height: 100%;
  background: #111;
	display: flex;
  align-items: center;
  padding-bottom: 40%;
  padding-top: 3%;
`;

const LeftSection = styled.div`
	display: flex;
	justify-content: left;
`;

const RightSection = styled.div`
	flex: 50%
  display: flex;
	justify-content: right;
`;

const Text = styled.div`
	text-align: left;
  padding-left: 8%;
	color: #21c6db;
  font-size: calc(1em + 1.2vw);
	padding: 2rem;
  justify-content: space-evenly;
	&>*:last-child{
			font-size: calc(0.5rem + 1vw);
			font-weight:300;
	}
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
	width: 100%;
  padding-left: 8%;
`;

const LogoImg = styled.div`
  img {
    border-radius: 20px;
    width: 80%;
    height: 100%;
  }
`;

function About() {
  return (
    <AboutContainer>
      <LeftSection>
        <Text>
          <h1>Hi! My name is Turner</h1>
          <p>
            I am a student studying Computer Science and Business. I love to hike, lift and rock climb. My other passion is writing code.
          </p>
        </Text>
      </LeftSection>
      <RightSection>
        <LogoWrapper>
          <LogoImg>
            <img src={mountainGif} alt="wait until the page loads" />
          </LogoImg>
        </LogoWrapper>
      </RightSection>
    </AboutContainer>
  )
}

export default About;