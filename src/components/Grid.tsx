import React from "react";
import Cell from "./Cell";

type GridProps = {
  grid: (string | null)[];
  onCellClick: (index: number) => void;
  active: boolean;
  tie: boolean;
  winningCells: number[] | null;
  playerTurn: string;
}

const Grid: React.FC<GridProps> = ({
  grid,
  onCellClick,
  active,
  tie,
  winningCells,
  playerTurn,
}) => {
  return (
    <div className={`Grid ${tie ? "Grid--tie" : ""}`}>
      {grid.map((cell, index) => (
        <Cell
          key={index}
          player={cell}
          index={index}
          onCellClick={onCellClick}
          active={active}
          winningCell={winningCells?.includes(index) || false}
          playerTurn={playerTurn}
        />
      ))}
    </div>
  );
};

export default Grid;
