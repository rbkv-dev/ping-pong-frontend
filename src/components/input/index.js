import React, { useRef, useEffect, useState } from "react";
import { StyledInputWrapper, StyledInput } from "./styled";

export const Input = ({ type, id, placeholder, value, onChange }) => {
  useEffect(() => {}, [value]);
  // console.log(value);
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
