import React, { useEffect, useContext, useState } from "react";
import { StyledPageWrapper, StyledSignOut } from "../styled";
import { AuthContext } from "../../components/auth";
import { getScoreApi } from "../../helpers/api";
import {
  StyledBestScore,
  StyledHeader,
  StyledMainWrapper,
  StyledLinkWrapper,
  StyledLink,
  StyledLinkPlay,
  StyledLinkScore,
  StyledAnimatedBall,
  StyledAnimatedBallShadow,
  StyledFooter,
} from "./styled";

export const Home = () => {
  const { onSignOut, isAuth } = useContext(AuthContext);
  const [bestPlayer, setBestPlayer] = useState(null);

  useEffect(() => {
    (async function fetchData() {
      const _data = await getScoreApi();
      if (_data.length > 0) {
        const bestScore = _data.reduce((acc, curr) =>
          acc.score > curr.score ? acc : curr
        );
        setBestPlayer(bestScore);
      }
    })();
    return () => {};
  }, []);

  return (
    <StyledPageWrapper flexJC="center">
      <StyledHeader>
        {bestPlayer && (
          <StyledBestScore>
            <span>Best player:</span>
            <span>
              {bestPlayer.username} ({bestPlayer.score})
            </span>
          </StyledBestScore>
        )}
        8-bit PING PONG
        <span>v 0.1</span>
      </StyledHeader>

      {isAuth ? (
        <>
          <StyledSignOut onMouseDown={onSignOut}>Sign Out</StyledSignOut>
          <StyledMainWrapper>
            <StyledLinkPlay to="/ping-pong">
              {"-> "}
              <span>PLAY</span>
              {" <-"}
            </StyledLinkPlay>
            <StyledLinkScore to="/score">
              {"< "}
              <span>Score</span>
              {" >"}
            </StyledLinkScore>
          </StyledMainWrapper>
        </>
      ) : (
        <StyledMainWrapper>
          <StyledLinkWrapper>
            <StyledLink to="/sign-in">Sign In</StyledLink>
            <span>&nbsp;&nbsp;or&nbsp;&nbsp;</span>
            <StyledLink to="/sign-up">Sign Up</StyledLink>
          </StyledLinkWrapper>
          <span>TO START GAME</span>
        </StyledMainWrapper>
      )}

      <StyledAnimatedBall />
      <StyledAnimatedBallShadow />

      <StyledFooter>
        <span>
          Designed and developed by{" "}
          <a href="https://github.com/rbkv-dev"> rbkv-dev</a>.
        </span>
        {/* <span>
          &copy; Copyright {new Date().getFullYear()} Nikita Rebrikov. All
          Rights Reserved
        </span> */}
      </StyledFooter>
    </StyledPageWrapper>
  );
};
