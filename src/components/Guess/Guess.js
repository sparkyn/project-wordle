import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const validateGuess = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((letterIndex) => (
        <span
          className={`cell ${
            validateGuess ? validateGuess[letterIndex]["status"] : ""
          }`}
          key={letterIndex}
        >
          {guess ? guess[letterIndex] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
