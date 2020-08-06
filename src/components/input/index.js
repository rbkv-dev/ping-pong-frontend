import React from "react";
import { StyledInputWrapper, StyledInput } from "./styled";

export const Input = ({ type, id, placeholder, value, onChange }) => {
  return (
    <StyledInputWrapper>
      <StyledInput
        type={type}
        id={id}
        placeholder={placeholder}
        spellCheck={false}
        value={value}
        onChange={onChange}
      />
    </StyledInputWrapper>
  );
};
