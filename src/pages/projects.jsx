import React from "react"
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Main = styled.section`
  padding-bottom: 100%;
	color: #fff;
`;

export function ChangeTitle() {
  const location = useLocation();

  if (location.hash === "#about") {
    document.title = "Turner Naef - About";
  } else if (location.pathname === "/projects") {
    document.title = "Turner Naef - Projects";
  } else if (location.pathname === "/connect") {
    document.title = "Turner Naef - Connect";
  } else {
    document.title = "Turner Naef";
  }
}

function Projects() {
  ChangeTitle();
  return (
    <Main>
      <p>
				Projects!
      </p>
    </Main>
  )
}

export default Projects;