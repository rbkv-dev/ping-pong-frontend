import React, { useRef, useEffect, useState } from "react";
import { StyledButtonWrapper, StyledButton } from "./styled";

export const Button = ({ text, type, eventFunction }) => {
  useEffect(() => {}, []);

  return (
    <StyledButtonWrapper>
      <StyledButton type={type} onMouseDown={eventFunction}>
        {text}
      </StyledButton>
    </StyledButtonWrapper>
  );
};
