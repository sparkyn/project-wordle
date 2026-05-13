import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((letterIndex) => (
        <span className="cell" key={letterIndex}>
          {guess ? guess[letterIndex] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
