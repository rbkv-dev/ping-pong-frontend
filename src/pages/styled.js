import styled from "styled-components";

export const StyledPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.flexJC};
  align-items: center;
  background-color: #000;
  position: relative;
`;

export const StyledForm = styled.form`
  width: fit-content;
  height: fit-content;
`;

export const StyledTitle = styled.h2`
  text-align: center;
  font-size: 30px;
  color: #fff;
`;

export const StyledText = styled.p`
  text-align: center;
  font-size: 20px;
  color: #fff;
`;

export const StyledSignOut = styled.div`
  border: 2px solid #fff;
  font-size: 2em;
  margin: 16px;
  border-style: solid;
  border-width: 0.125em 0;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  padding: 4px 10px;
  cursor: pointer;
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
