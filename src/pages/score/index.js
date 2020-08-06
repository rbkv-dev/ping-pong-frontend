import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { StyledPageWrapper, StyledBackButton } from "../styled";

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

import { getScoreApi } from "../../helpers/api";

export const Score = () => {
  const history = useHistory();
  const scoreTableRef = useRef(null);
  const [scrollToUp, setScrollToUp] = useState(false);
  const [scrollToDown, setScrollToDown] = useState(false);
  const [userData, setUserData] = useState(null);

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
    (async function fetchData() {
      const _data = await getScoreApi();
      setUserData(_data);
    })();

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
    <StyledPageWrapper flexJC="start">
      <StyledScoreTableWrapper>
        <StyledScoreTableHeader>Score Table</StyledScoreTableHeader>
        <StyledScrollButton up disabled={!scrollToUp} onMouseDown={moveUp} />
        <StyledScoreTable ref={scoreTableRef}>
          {userData &&
            userData.map(({ username, score }, key) => (
              <StyledUserScore key={key}>
                <StyledPosition>#{key + 1}</StyledPosition>
                <StyledUsername>{username}</StyledUsername>
                <StyledScore>{score}</StyledScore>
              </StyledUserScore>
            ))}
        </StyledScoreTable>
        <StyledScrollButton disabled={!scrollToDown} onMouseDown={moveDown} />
      </StyledScoreTableWrapper>
      <StyledBackButton
        onMouseDown={() => {
          history.goBack();
        }}
      >
        {"< "} Go Back
      </StyledBackButton>
    </StyledPageWrapper>
  );
};
