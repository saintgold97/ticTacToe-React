import React, { useState } from "react";
import "./Grid.css";
import { Shape } from "../Shape/Shape";

export const Grid = () => {
  const [isNextX, setIsNextX] = useState(true);
  const [shape, setShape] = useState(Array(9).fill(null));

  const handleClick = (i: any) => {
    if (winnerAssigned(shape) || shape[i]) {
      console.log("Clicked");
      return;
    }
    const nextShape = shape.slice();
    if (isNextX) {
      nextShape[i] = "X";
    } else {
      nextShape[i] = "O";
    }
    setShape(nextShape);
    setIsNextX(!isNextX);
  };

  const winner = winnerAssigned(shape);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (isNextX ? 'X' : 'O');
  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <h2 className="player_indicator">{status}</h2>
      <div className="board">
        <div className="board_tile remove-left-border remove-top-border">
          <Shape value={shape[0]} onShapeClick={() => handleClick(0)} />
        </div>
        <div className="board_tile remove-top-border">
          <Shape value={shape[1]} onShapeClick={() => handleClick(1)} />
        </div>
        <div className="board_tile remove-right-border remove-top-border">
          <Shape value={shape[2]} onShapeClick={() => handleClick(2)} />
        </div>
        <div className="board_tile remove-left-border">
          <Shape value={shape[3]} onShapeClick={() => handleClick(3)} />
        </div>
        <div className="board_tile">
          <Shape value={shape[4]} onShapeClick={() => handleClick(4)} />
        </div>
        <div className="board_tile remove-right-border">
          <Shape value={shape[5]} onShapeClick={() => handleClick(5)} />
        </div>
        <div className="board_tile remove-left-border remove-bottom-border">
          <Shape value={shape[6]} onShapeClick={() => handleClick(6)} />
        </div>
        <div className="board_tile remove-bottom-border">
          <Shape value={shape[7]} onShapeClick={() => handleClick(7)} />
        </div>
        <div className="board_tile remove-right-border remove-bottom-border">
          <Shape value={shape[8]} onShapeClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
};

const winnerAssigned = (shape: any) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  for (let i = 0; i < lines.length; i++) {
    const [x, y, z] = lines[i];
    if (shape[x] && shape[x] === shape[y] && shape[x] === shape[z]) {
      return shape[x];
    }
  }
  return null;
};
