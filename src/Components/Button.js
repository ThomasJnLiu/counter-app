import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => (props.isReset ? "50%" : "20%")};
  font-size: 0.5em;
  padding: 1em;
  margin: 1em 1em;
  background-color: #00adb5;
  border: 1px solid black;
  color: #393e46;
`;

// props being passed are the text displayed on button, function when button is pressed, and if the button is the reset button
// using array destructuring to pass in props to avoid typing props.text, etc.
const Button = ({ text, changeNumber, isReset }) => {
  return (
    <StyledButton onClick={changeNumber} isReset={isReset}>
      {text}
    </StyledButton>
  );
};

export default Button;
