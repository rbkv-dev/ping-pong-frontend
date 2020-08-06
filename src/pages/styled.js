import styled, { keyframes } from "styled-components";

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

export const StyledBubbleMessage = styled.div`
  position: relative;
  display: inline-block;
  width: calc(100% - 20px);
  margin-top: 5px;
  margin-bottom: 0px;
  margin-left: 8px;
  margin-right: 0px;

  text-align: center;
  font-weight: 700;
  background-color: #fff;
  color: #000;
  padding: 5px;
  box-shadow: 0 -3px #fff, 0 -6px #000, 3px 0 #fff, 3px -3px #000, 6px 0 #000,
    0 3px #fff, 0 6px #000, -3px 0 #fff, -3px 3px #000, -6px 0 #000,
    -3px -3px #000, 3px 3px #000, 3px 9px #aaa, 6px 6px #aaa, 9px 3px #aaa;
  transition: all 0.3s ease;
  box-sizing: border-box;
  font-size: 20px;
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    transition: all 0.3s ease;
    box-sizing: border-box;
    left: 30px;
  }
  &:after {
    background: #fff;
    width: 9px;
    height: 3px;
    bottom: -14px;
    margin-left: 6px;
    box-shadow: -3px 0 #000, 3px 0 #000, 3px 3px #fff, 0px 3px #000,
      6px 3px #000, 9px 3px #aaa, 3px 6px #000, 6px 6px #000, 9px 6px #aaa,
      6px 9px #aaa;
  }
  &:before {
    width: 15px;
    height: 8px;
    background: #fff;
    bottom: -11px;
    border-left: 3px solid #000;
    border-right: 3px solid #000;
  }
`;

export const StyledBackButton = styled.div`
  font-size: 2em;
  margin: 16px;
  position: absolute;
  bottom: 0;
  left: calc((100vw - 90vw) / 2);
  z-index: 1;
  padding: 4px 10px;
  cursor: pointer;
  @media (max-width: 576px) {
    left: 50%;
    transform: translate(-50%);
    margin: 16px 0px;
  }
`;
