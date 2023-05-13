import React, { useState } from "react";
import "./Game.css";
import { Shape } from "./Shape/Shape";

export const Game = () => {
  const initialState = {
    turn: true,
    shape: Array(9).fill(null)
  }
  const [gameState, setGameState] = useState(initialState);

  const handleClick = (i: any) => {
    if (winnerAssigned(gameState.shape) || gameState.shape[i]) {
      return;
    }
    const nextShape = gameState.shape.slice();
    if (gameState.turn) {
      nextShape[i] = "X";
    } else {
      nextShape[i] = "O";
    }
    setGameState({
    ...gameState,
    shape: nextShape,
    turn: !gameState.turn
    })
  };

  const winner = winnerAssigned(gameState.shape);
  let status;
  if (winner) {
    if (winner === "Draw") {
      status = "Draw";
    } else {
      status = "Winner: " + winner;
    }
  } else {
    status = "Next player: " + (gameState.turn ? "X" : "O");
  }
  
  const reset = () => {
    setGameState(initialState);
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <button className="reset" onClick={reset}>Reset</button>
      <h2 className="player_indicator">{status}</h2>
      <div className="board">
        {gameState.shape.map((item, index) => (
          <div className="board_tile" key={`${index}`}>
            <Shape value={item} onShapeClick={() => handleClick(index)} />
          </div>
        ))}
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
      return shape[x]
    }
  }
  
if (isDraw(shape)) {
  return "Draw";
}

return null;
};

const isDraw = (shape: any) => {
return shape.every((item: any) => item !== null);
};

