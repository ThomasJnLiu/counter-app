import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import Message from "./Message";

const StyledNumber = styled.div`
  font-size: 3em;
`;

// handles adding, subracting, and resetting counter through states
// passes capacity message to message.js by checking counter value through useEffect
const Display = () => {
  // states for the counter and the capacity message
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState("");

  // functions for modifying the value of the number, called when corresponding button is pressed
  // capacity has been changed to 10 for quick debugging
  const addNumber = () => {
    if (number <= 9) setNumber(number + 1);
  };
  const subtractNumber = () => {
    if (number > 0) setNumber(number - 1);
  };
  const resetNumber = () => {
    setNumber(0);
  };

  // use useEffect to check value of count after render, and display message if capacity is reached
  // getting a warning here, not sure how to address
  useEffect(() => {
    if (number === 10) {
      setMessage("Max capacity is reached!");
    } else {
      setMessage("");
    }
  });

  return (
    <div>
      <StyledNumber>{number}</StyledNumber>
      <Message text={message} />
      <div>
        <Button text="-" changeNumber={subtractNumber} />
        <Button text="+" changeNumber={addNumber} />
      </div>
      <Button text="Reset" changeNumber={resetNumber} isReset />
    </div>
  );
};

export default Display;
