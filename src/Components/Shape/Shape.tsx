import React from "react";
import "./Shape.css";

export const Shape = ({ value, onShapeClick }: any) => {
  return (
    <button onClick={onShapeClick} className="board-shape">
      {value}
    </button>
  );
};
