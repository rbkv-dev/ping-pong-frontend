import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.h1`
  font-size: 92px;
  /* margin-top: -80px; */
  letter-spacing: 4px;
  margin-bottom: 50px;
  text-shadow: 0px 5px 0px rgba(150, 150, 150, 1);
  position: relative;
  & > span {
    text-shadow: 0px 3px 0px rgba(150, 150, 150, 1);
    margin-left: 10px;
    font-size: 24px;
    position: absolute;
    top: 0;
    width: fit-content;
  }
`;

export const StyledBestScore = styled.p`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 36px;
  position: absolute;
  margin: 0;
  top: -70px;
  left: -150px;
  transform: rotate(-22deg);
  text-shadow: 0px 2px 0px rgba(150, 150, 150, 1);
`;

export const StyledMainWrapper = styled.div`
  font-size: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLinkWrapper = styled.div`
  padding-bottom: 40px;
`;

export const StyledLink = styled(Link)`
  font-size: 40px;
  cursor: pointer;
`;

export const StyledLinkPlay = styled(Link)`
  /* font-size: 1.5em;
  padding: 10px 50px;
  background-color: #202020;
  border-style: solid;
  border-width: 0.125em 0;
  position: relative;
  z-index: 1;
  text-decoration: none;
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
  &:active {
    position: relative;
    top: 5px;
  } */

  font-size: 1.5em;
  padding: 10px 50px;
  border-style: solid;
  border-width: 0.125em 0;
  box-shadow: -0.25em 0 0 -0.125em, 0.25em 0 0 -0.125em;
  margin: 0 0.375em;
  position: relative;
  z-index: 1;
  background-color: #202020;
  text-decoration: none;
  cursor: pointer;
  span {
    cursor: pointer;
  }
  &:before {
    background-color: inherit;
    border: inherit;
    border-width: 0 0.125em;
    bottom: 0.25em;
    content: "";
    left: -0.375em;
    pointer-events: none;
    position: absolute;
    top: 0.25em;
    right: -0.375em;
    z-index: -1;
  }

  &:after {
    background: inherit;
    border: inherit;
    border-width: 0 0.125em;
    bottom: 0.125em;
    content: "";
    left: -0.25em;
    position: absolute;
    top: 0.125em;
    right: -0.25em;
    z-index: -2;
  }

  &:active {
    position: relative;
    top: 5px;
  }
`;

export const StyledLinkScore = styled(Link)`
  font-size: 1.6em;
  padding: 10px 30px;
  margin-top: 30px;
  text-decoration: none;
  cursor: pointer;
  span {
    text-decoration: underline;
    cursor: pointer;
  }
  &:active {
    position: relative;
    top: 5px;
  }
`;

export const StyledFooter = styled.div`
  font-size: 24px;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 16px;
  display: flex;
  flex-direction: column;
  a {
    cursor: pointer;
    &:active {
      position: relative;
      top: 2px;
    }
  }
  span:nth-child(2) {
    margin-top: 4px;
    font-size: 18px;
  }
`;

const ball = keyframes`
  0% { bottom: 36px; }
  20% { bottom: 256px; }
  40% { bottom: 36px; }
  45% { bottom: 136px; }
  60% { bottom: 36px; }
  65% { bottom: 86px; }
  75% { bottom: 36px; }
  85% { bottom: 56px; }
  90% { bottom: 36px; }
  95% { bottom: 46px; } 
  100% { bottom: 36px; }
`;

const ballShadow = keyframes`
  0% { height: 20px; width: 50px; right: 50px; }
  20% { height: 24px; width: 70px; right: 40px; }
  40% { height: 20px; width: 50px; right: 50px; }
  45% { height: 22px; width: 60px; right: 45px; }
  60% { height: 20px; width: 50px; right: 50px; }
  65% { height: 21px; width: 56px; right: 47px; }
  75% { height: 20px; width: 50px; right: 50px; }
  85% { height: 20px; width: 54px; right: 48px; }
  90% { height: 20px; width: 50px; right: 50px; }
  95% { height: 20px; width: 52px; right: 49px; } 
  100% { height: 20px; width: 50px; right: 50px; }
`;

export const StyledAnimatedBall = styled.div`
  background-color: #fff;
  opacity: 0.6;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: absolute;
  bottom: 256px;
  right: 50px;
  animation: ${ball} 2.2s infinite;
  animation-timing-function: ease-in-out;
  box-shadow: 0px 4px 0px rgba(150, 150, 150, 1);
`;

export const StyledAnimatedBallShadow = styled.div`
  background-color: #202020;
  height: 20px;
  opacity: 0.6;
  width: 50px;
  border-radius: 50%;
  position: absolute;
  bottom: 16px;
  right: 50px;
  animation: ${ballShadow} 2.2s infinite;
  animation-timing-function: ease-in-out;
  box-shadow: 0px 3px 0px #101010;
`;
