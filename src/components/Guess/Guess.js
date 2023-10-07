import React from 'react';
import { range } from '../../utils';

function Guess({guess, key}) {
  return (
    <p key={key} class="guess">
      {range(5).map((i) => {
        return <span key={`${i}-${Math.random()}`} className="cell">{guess ? guess[i] : undefined}</span>
      })}
    </p>
  );
}

export default Guess;
