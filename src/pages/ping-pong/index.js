import React, { useRef, useEffect, useState, useContext } from "react";
import { AuthContext } from "../../components/auth";
import { StyledPageWrapper, StyledSignOut } from "../styled";

import { StyledName, StyledScore, StyledCanvas } from "./styled";
import { Button } from "../../components/button";

import { Game } from "./gameEvents";

export const PingPong = () => {
  const { onSignOut } = useContext(AuthContext);
  // console.log(onSignOut);

  const canvasRef = useRef(null);
  const gameRef = useRef(null);
  const [gameState, setGameState] = useState(false);
  const [gameScore, setGameScore] = useState(0);

  useEffect(() => {
    window.oncontextmenu = () => false;

    gameRef.current = new Game(
      canvasRef,
      () => setGameState(false),
      (score) => setGameScore(score)
    );
    gameRef.current.initField();
    return () => {
      gameRef.current.stopGame();
    };
  }, []);

  const startGame = () => {
    gameRef.current.startGame();
    setGameState(true);
  };

  return (
    <StyledPageWrapper ref={gameRef} flexJC="start">
      <StyledName>PING - PONG</StyledName>
      <StyledScore>score: {gameScore}</StyledScore>
      <StyledCanvas ref={canvasRef} width="700" height="420"></StyledCanvas>
      {!gameState && <Button text="START" eventFunction={startGame} />}
      <StyledSignOut onMouseDown={onSignOut}>Sign Out</StyledSignOut>
    </StyledPageWrapper>
  );
};
