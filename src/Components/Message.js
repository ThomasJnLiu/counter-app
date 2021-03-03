import React from "react";
import styled from "styled-components";

const StyledMessage = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

// prop is capacity message
const Message = ({ text }) => {
  return <StyledMessage>{text}</StyledMessage>;
};

export default Message;
