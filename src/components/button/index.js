import React from "react";
import { StyledButtonWrapper, StyledButton } from "./styled";

export const Button = ({ text, type, eventFunction }) => {
  return (
    <StyledButtonWrapper>
      <StyledButton type={type} onMouseDown={eventFunction}>
        {text}
      </StyledButton>
    </StyledButtonWrapper>
  );
};
