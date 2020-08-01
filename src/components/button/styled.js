import styled from "styled-components";

export const StyledButtonWrapper = styled.div`
  font-size: 2em;
  margin: 16px 10px;
  margin-top: 30px;
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

export const StyledButton = styled.button`
  width: 280px;
  height: 40px;
  background-color: #202020;
  padding: 0 14px;
  font-size: 24px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  &,
  &:focus,
  &:active {
    border: none;
    outline: none;
  }
  &:active {
    background-color: #000;
  }
`;
