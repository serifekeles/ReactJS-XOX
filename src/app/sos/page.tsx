"use client";

import React, { useState } from "react";
import "../styles/global.css";
import Grid from "@/components/Grid";
import Status from "@/components/Status";

const PLAYER_X = "x";
const PLAYER_O = "o";

const WINNING_STATES = [
  [0, 1, 2],
  [3, 4, 5],
  [2, 5, 8],
  [0, 3, 6],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [1, 4, 7],
];

export default function Sos() {
  const generateGrid = () => Array(9).fill(null);

  const [grid, setGrid] = useState<(string | null)[]>(generateGrid());
  const [winner, setWinner] = useState<string | null>(null);
  const [tie, setTie] = useState(false);
  const [turnCounter, setTurnCounter] = useState(1);
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [winningCells, setWinningCells] = useState<number[] | null>(null);

  const resetGame = () => {
    setGrid(generateGrid());
    setWinner(null);
    setTie(false);
    setTurnCounter(1);
    setPlayerTurn(PLAYER_X);
    setWinningCells(null);
  };

  const checkWinner = (grid: (string | null)[], turn: string) => {
    for (const state of WINNING_STATES) {
      const match = state.filter((i) => grid[i] === turn);
      if (match.length === 3) return { winner: turn, winningCells: match };
    }
    return { winner: null, winningCells: null };
  };

  const onCellClick = (index: number) => {
    if (grid[index] || winner) return;

    const newGrid = [...grid];
    newGrid[index] = playerTurn;
    setGrid(newGrid);

    const { winner: newWinner, winningCells: newWinningCells } = checkWinner(newGrid, playerTurn);

    if (newWinner) {
      setWinner(newWinner);
      setWinningCells(newWinningCells);
    } else {
      const nextTurn = turnCounter + 1;
      setTurnCounter(nextTurn);
      if (nextTurn > 9) {
        setTie(true);
      } else {
        setPlayerTurn(playerTurn === PLAYER_X ? PLAYER_O : PLAYER_X);
      }
    }
  };

  return (
    <div className="TicTacToe">
      <h1>Üç Taş Oyunu</h1>
      <Status winner={winner} playerTurn={playerTurn} tie={tie} turnCounter={turnCounter} />
      <Grid
        grid={grid}
        onCellClick={onCellClick}
        active={!winner}
        tie={tie}
        winningCells={winningCells}
        playerTurn={playerTurn}
      />
      <button className="Reset" onClick={resetGame}>Yenile</button>
    </div>
  );
}
