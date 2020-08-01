import React, { useRef, useEffect, useState } from "react";
import { StyledInputWrapper, StyledInput } from "./styled";

export const Input = ({ type, placeholder, value, onChange }) => {
  useEffect(() => {}, []);

  return (
    <StyledInputWrapper>
      <StyledInput
        type={type}
        placeholder={placeholder}
        spellCheck={false}
        value={value}
        onChange={onChange}
      />
    </StyledInputWrapper>
  );
};
