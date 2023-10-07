import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';

function GuessResults({ guesses }) {

  return (
    <div className="guess-results">
      {range(6).map((i) => {
        return <Guess guess={guesses.length > i ? guesses[i] : undefined }/> 
      })}
    </div>
  );
}

export default GuessResults;
