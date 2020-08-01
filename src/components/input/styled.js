import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  font-size: 2em;
  margin: 16px 10px;
  border-style: solid;
  border-width: 0.125em 0;
  position: relative;
  z-index: 1;
  &:before {
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    left: -0.125em;
    right: -0.125em;
    border: inherit;
    border-width: 0 0.125em;
    pointer-events: none;
    z-index: -1;
  }
`;

export const StyledInput = styled.input`
  margin: 0 auto;
  width: 280px;
  height: 40px;
  background-color: #000;
  padding: 0 14px;
  font-size: 24px;
  caret-color: #fff;
  cursor: pointer;
  &,
  &:focus,
  &:active {
    border: none;
    outline: none;
  }
  &:focus,
  &:active {
    background-color: #101010;
  }
`;
