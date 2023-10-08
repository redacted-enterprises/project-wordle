import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({answer, guess, key}) {
  const checkedGuess = checkGuess(guess, answer);

  return (
    <p key={key} class="guess">
      {range(5).map((i) => {
        return (
          <span 
            key={`${i}-${Math.random()}`}
            className={`cell ${checkedGuess ? checkedGuess[i].status : ""}`}>
              {guess ? guess[i] : undefined}
          </span>
        )
      })}
    </p>
  );
}

export default Guess;
