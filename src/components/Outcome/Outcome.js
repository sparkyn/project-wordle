import React from "react";

function Outcome({ answer, noOfGuesses, success }) {
  return (
    <>
      {success ? (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {noOfGuesses === 1 ? "1 guess" : `${noOfGuesses} guesses`}
            </strong>
            .
          </p>
        </div>
      ) : (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Outcome;
