import React, { useRef, useEffect, useState, useContext } from "react";
import { AuthContext } from "../../components/auth";
import { useHistory } from "react-router-dom";

import { StyledPageWrapper, StyledSignOut, StyledBackButton } from "../styled";

import { StyledName, StyledScore, StyledCanvas } from "./styled";

import { Button } from "../../components/button";

import { Game } from "./gameEvents";

import { getUserInfoApi } from "../../helpers/api";

export const PingPong = () => {
  const history = useHistory();
  const { isAuth, onSignOut } = useContext(AuthContext);
  // console.log(isAuth);

  const canvasRef = useRef(null);
  const gameRef = useRef(null);
  const [gameState, setGameState] = useState(false);
  const [gameScore, setGameScore] = useState(0);

  useEffect(() => {
    window.oncontextmenu = () => false;

    gameRef.current = new Game(
      canvasRef,
      () => setGameState(false),
      (score) => setGameScore(score),
      () => getUserInfoApi(isAuth)
      // () => setGameScoreApi()
    );
    gameRef.current.initField();
    return () => {
      gameRef.current.stopGame();
    };
  }, []);

  // useEffect(() => {
  //   console.log(gameScore);
  // }, [gameScore]);

  const startGame = () => {
    gameRef.current.startGame();
    setGameState(true);
  };

  return (
    <StyledPageWrapper ref={gameRef} flexJC="start">
      <StyledSignOut onMouseDown={onSignOut}>Sign Out</StyledSignOut>
      <StyledName>PING - PONG</StyledName>
      <StyledScore>score: {gameScore}</StyledScore>
      <StyledCanvas ref={canvasRef} width="700" height="420"></StyledCanvas>
      {!gameState && <Button text="START" eventFunction={startGame} />}
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
