import React, { useRef, useEffect, useState } from "react";

import { StyledPageWrapper } from "../styled";

import {
  StyledScoreTableWrapper,
  StyledScoreTable,
  StyledScoreTableHeader,
  StyledUserScore,
  StyledPosition,
  StyledUsername,
  StyledScore,
  StyledScrollButton,
} from "./styled";

const data = [];
for (var i = 1; i <= 200; i++) {
  data.push(i);
}

export const Score = () => {
  const scoreTableRef = useRef(null);
  const [scrollToUp, setScrollToUp] = useState(false);
  const [scrollToDown, setScrollToDown] = useState(false);

  const scrollTracking = ({ target }) => {
    if (target.scrollTop >= target.scrollHeight - target.clientHeight - 10) {
      setScrollToDown(false);
    } else {
      setScrollToDown(true);
    }
    if (target.scrollTop === 0) {
      setScrollToUp(false);
    } else {
      setScrollToUp(true);
    }
  };
  const moveUp = () => {
    scoreTableRef.current.scrollTo(0, 0);
  };
  const moveDown = () => {
    scoreTableRef.current.scrollTo(0, scoreTableRef.current.scrollHeight);
  };

  useEffect(() => {
    if (
      scoreTableRef.current.scrollHeight > scoreTableRef.current.clientHeight
    ) {
      scoreTableRef.current.addEventListener("scroll", scrollTracking);
      setScrollToDown(true);
    }
    return () => {
      scoreTableRef.current.removeEventListener("scroll", scrollTracking);
    };
  }, []);

  return (
    <StyledPageWrapper flexJC="center">
      <StyledScoreTableWrapper>
        <StyledScoreTableHeader>Score Table</StyledScoreTableHeader>
        <StyledScrollButton up disabled={!scrollToUp} onMouseDown={moveUp} />
        <StyledScoreTable ref={scoreTableRef}>
          {data.map((e, key) => (
            <StyledUserScore key={key}>
              <StyledPosition>#{e}</StyledPosition>
              <StyledUsername>username{e}</StyledUsername>
              <StyledScore>{e}</StyledScore>
            </StyledUserScore>
          ))}
        </StyledScoreTable>
        <StyledScrollButton disabled={!scrollToDown} onMouseDown={moveDown} />
      </StyledScoreTableWrapper>
    </StyledPageWrapper>
  );
};
