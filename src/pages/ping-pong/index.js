import React, { useRef, useEffect, useState, useContext } from "react";
import { AuthContext } from "../../components/auth";
import { useHistory } from "react-router-dom";

import { getUserInfoApi } from "../../helpers/api";
import { Button } from "../../components/button";
import { Game } from "./gameEvents";

import { StyledPageWrapper, StyledSignOut, StyledBackButton } from "../styled";
import { StyledName, StyledScore, StyledCanvas } from "./styled";

export const PingPong = () => {
  const history = useHistory();
  const { isAuth, onSignOut } = useContext(AuthContext);

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
    );
    gameRef.current.initField();
    return () => {
      gameRef.current.stopGame();
    };
  }, [isAuth]);

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
