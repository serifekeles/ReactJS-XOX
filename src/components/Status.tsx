import React from "react";

type StatusProps = {
  winner: string | null;
  tie: boolean;
  turnCounter: number;
  playerTurn: string;
}

const Status: React.FC<StatusProps> = ({ winner, tie, turnCounter, playerTurn }) => {
  let status = `Tur ${turnCounter}: ${(playerTurn == 'x') ? 'X in sırası' : 'O nun sırası'}  `;
  if (winner) status = `Kazanan ${(winner.toUpperCase())}`;
  else if (tie) status = "BERABERE BİTTİ";

  return <div className="Status">{status}</div>;
};

export default Status;
