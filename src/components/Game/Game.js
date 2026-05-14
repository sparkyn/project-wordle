import React from "react";

import GuessInput from "../GuessInput";
import Guesses from "../Guesses";
import Outcome from "../Outcome";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  function handleSubmitGuess(guess) {
    const nextGuess = { id: crypto.randomUUID(), guess };
    const nextGuesses = [...guesses, nextGuess];
    setGuesses(nextGuesses);
    if (guess === answer || nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true);
      if (guess === answer) {
        setSuccess(true);
      }
    }
  }

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      {gameOver && (
        <Outcome
          answer={answer}
          noOfGuesses={guesses.length}
          success={success}
        />
      )}
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameOver={gameOver} />
    </>
  );
}

export default Game;
