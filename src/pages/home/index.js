import React, { useEffect, useContext } from "react";
import { StyledPageWrapper, StyledSignOut } from "../styled";
import { AuthContext } from "../../components/auth";

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
  console.log(isAuth);
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <StyledPageWrapper flexJC="center">
      <StyledHeader>
        <StyledBestScore>
          <span>Best player:</span>
          <span>username (1000)</span>
        </StyledBestScore>
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
