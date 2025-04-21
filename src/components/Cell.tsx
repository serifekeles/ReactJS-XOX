import React from "react";

type CellProps = {
  player: string | null;
  index: number;
  onCellClick: (index: number) => void;
  active: boolean;
  winningCell: boolean;
  playerTurn: string;
}

const Cell: React.FC<CellProps> = ({
  player,
  index,
  onCellClick,
  active,
  winningCell,
  playerTurn,
}) => {
  const handleClick = () => {
    if (!player && active) {
      onCellClick(index);
    }
  };

  return (
    <div
      className={`Cell ${!player ? "Cell--selectable" : ""} ${
        active ? "Cell--active" : ""
      } ${winningCell ? "Cell--winning" : ""} ${
        active ? `Cell--turn-${playerTurn}` : ""
      }`}
      onClick={handleClick}
    >
      {player || ""}
    </div>
  );
};

export default Cell;
