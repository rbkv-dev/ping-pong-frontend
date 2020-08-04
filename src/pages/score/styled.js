import styled from "styled-components";

export const StyledScoreTableWrapper = styled.div`
  font-size: 2em;
  width: 90vw;
  max-height: 85vh;
  height: 85vh;
  border-style: solid;
  border-width: 0.125em 0;
  box-shadow: -0.25em 0 0 -0.125em, 0.25em 0 0 -0.125em;
  margin: 0 0.375em;
  margin-top: 5.5vh;
  padding: 0 20px 0.5em 20px;

  position: relative;
  z-index: 1;
  background-color: #000;
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
`;

export const StyledScoreTable = styled.div`
  height: calc(100% - 52px);
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 576px) {
    font-size: 26px;
  }
`;

export const StyledScoreTableHeader = styled.h2`
  width: fit-content;
  margin: 0;
  padding: 0 10px;
  position: absolute;
  top: -30px;
  left: 60px;
  background-color: #000;
  @media (max-width: 576px) {
    top: -24px;
    left: 50%;
    transform: translate(-50%);
    font-size: 36px;
  }
`;

export const StyledUserScore = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 6px 0px;
`;

export const StyledPosition = styled.div`
  width: 20%;
  text-align: left;
  position: relative;
  &::after {
    content: "";
    display: block;
    height: 100%;
    width: 2px;
    background: #fff;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const StyledUsername = styled.div`
  width: 60%;
  text-align: center;
  position: relative;
  &::after {
    content: "";
    display: block;
    height: 100%;
    width: 2px;
    background: #fff;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const StyledScore = styled.div`
  width: 20%;
  text-align: right;
`;

export const StyledScrollButton = styled.button`
  &:disabled {
    opacity: 0;
    cursor: default;
  }
  height: 30px;
  width: 100px;
  cursor: pointer;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  &,
  &:focus,
  &:active {
    outline: none;
    border: none;
  }
  /* border: 2px solid #fff; */
  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 30px;
    height: 2px;
    background-color: #fff;
  }
  &:before {
    transform: translate(-3%, 0%)
      ${(props) => `rotate(${props.up ? "20deg" : "-20deg"})`};
  }
  &:after {
    transform: translate(-97%, 0%)
      ${(props) => `rotate(${props.up ? "-20deg" : "20deg"})`};
  }
`;

export const StyledBackButton = styled.div`
  /* border: 2px solid #fff; */
  font-size: 2em;
  margin: 16px;
  /* border-style: solid; */
  /* border-width: 0.125em 0; */
  position: absolute;
  bottom: 0;
  left: calc((100vw - 90vw) / 2);
  z-index: 1;
  padding: 4px 10px;
  cursor: pointer;
  /* &:before {
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
  } */
  @media (max-width: 576px) {
    left: 50%;
    transform: translate(-50%);
    margin: 16px 0px;
  }
`;
