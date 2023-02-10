import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

import styled from "styled-components";

// Styles
import "./styles.css"

const ExpansionContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  background: transparent;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

function Expansion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ExpansionContainer>
      <MiddleSection>
        <motion.div
          layout
          data-isOpen={isOpen}
          initial={{ borderRadius: 50 }}
          className="parent"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div layout className="child" />
        </motion.div>
      </MiddleSection>
    </ExpansionContainer>
  )
}

export default Expansion;