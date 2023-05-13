import React, { useEffect, useState } from "react";
import "./Grid.css";

type BasicOption = "X" | "O";

type Option = BasicOption | "";

export const GameProf = () => {
  const [turn, setTurn] = useState<BasicOption>("X");
  const [winner, setWinner] = useState<Option>("");
  const [grid, setGrid] = useState<Option[][]>([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const handleClick = (index1: number, index2: number) => {
    if (winner || grid[index1][index2]) return;
    grid[index1][index2] = turn;
    setGrid([...grid]);
  };

  const reset = () => {
    setGrid([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setWinner("");
    setTurn("X");
  };

  useEffect(() => {
    if (checkWinner()) {
      setWinner(turn);
    } else {
      setTurn(turn === "X" ? "O" : "X");
    }
  }, [grid]);

  const checkWinner = () =>
    (grid[0][0] && grid[0][0] === grid[0][1] && grid[0][1] === grid[0][2]) ||
    (grid[1][0] && grid[1][0] === grid[1][1] && grid[1][1] === grid[1][2]) ||
    (grid[2][0] && grid[2][0] === grid[2][1] && grid[2][1] === grid[2][2]) ||
    (grid[0][0] && grid[0][0] === grid[1][0] && grid[1][0] === grid[2][0]) ||
    (grid[0][1] && grid[0][1] === grid[1][1] && grid[1][1] === grid[2][1]) ||
    (grid[0][2] && grid[0][2] === grid[1][2] && grid[1][2] === grid[2][2]) ||
    (grid[0][0] && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) ||
    (grid[0][2] && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]);
  return (
    <>
      <button onClick={reset}>Reset</button>
      <p>The turn is for: {turn}</p>
      {winner && <p>The winner is: {winner}</p>}
      <div className="grid">
        {grid.map((item, index1) =>
          item.map((subItem, index2) => (
            <div
              key={`${index1}-${index2}`}
              onClick={() => {
                handleClick(index1, index2);
              }}
            >
              _{subItem}_
            </div>
          ))
        )}
      </div>
    </>
  );
};
