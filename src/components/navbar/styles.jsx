import styled from "styled-components";
import { motion } from "framer-motion";

export const Text = styled.div`
  color: #fff;
  font-size: 20px;
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const HomeRedirect = styled.div`
  font-size: 30px;
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: #00BFFF;

`;

export const HomeRLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  
  &:hover {
    color: #fff;
    border-top: 1px solid #fff;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  
  &:hover {
    color: #00BFFF;
    border-top: 1px solid #00BFFF;
  }
`;

export const Emphasis = styled(motion.div)`
  color: inherit;
`;