import React from 'react';
import { range } from '../../utils';

function Guess({guess}) {
  let splitGuess;

  if (guess) {
    splitGuess = [...guess].map((letter) => {
      return (<span key={`${letter}-${Math.random()}`} class="cell">{letter}</span>)
    });
  } else {
    splitGuess = range(5).map((i) => {
      return (<span key={`${i}-${Math.random()}`} class="cell">{""}</span>)
    })
  }

  return (
    <p class="guess">
      {...splitGuess}
    </p>
  );
}

export default Guess;
