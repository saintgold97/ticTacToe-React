import React from "react";
import { Grid } from "./Grid/Grid";
import "./Game.css"

export const Game = () => {
  return (
    <div>
      <Grid />
      <div className="modal">
        <div className="modal_body">
          <div className="message"></div>
          <button className="reset_btn">Play Again</button>
        </div>
      </div>
    </div>
  );
};
