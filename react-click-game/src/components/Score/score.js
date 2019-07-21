import React from "react";
import "./style.css";


const Score = props => (
  <div className="gameScore">
    <h3 className="score">Your Score {props.total}</h3>
    <h3 className="status">{props.status}</h3>
    <h3 className="highscore">High Score {props.highscore}</h3>
  </div>
);



export default Score;
