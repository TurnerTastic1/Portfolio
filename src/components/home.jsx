import React from "react";
import styled from "styled-components";

import img from "../assets/img/homeIMG.png";

const PageContainer = styled.section`
	width: 100%;
	height: 100%;
  background: #111;
	display: flex;
  align-items: center;
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
	color: #21c6db;
	font-size: calc(1em + 1.5vw);
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	&>*:last-child{
			font-size: calc(0.5rem + 1.5vw);
			font-weight:300;
	}

	&:hover {
    cursor: pointer;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
	width: 100%;
`;

const LogoImg = styled.div`
  img {
    border-radius: 10px;
    width: 80%;
    height: 100%;
  }
`;

function Home() {
  
  return (
    <div>
      <PageContainer>
        <LeftSection>
          <LogoWrapper>
            <LogoImg>
              <img src={img} alt="myIMG" />
            </LogoImg>
          </LogoWrapper>
        </LeftSection>
				
        <RightSection>
          <Text>
            <h1>Hello there,</h1>
            <h3>My name is Turner</h3>
          </Text> 
        </RightSection>
      </PageContainer>
    </div>
  )
}

export default Home;


/*

const ImgContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-image: url(${img});
position:relative;
`;

*/