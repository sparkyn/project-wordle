import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((guessIndex) => {
        const thisGuess = guesses[guessIndex]
          ? guesses[guessIndex]["guess"]
          : undefined;
        return <Guess key={guessIndex} guess={thisGuess} />;
      })}
    </div>
  );
}

export default Guesses;
