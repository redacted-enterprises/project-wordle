import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessInput from '../GuessInput'
import GuessList from '../GuessList'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  [guesses, setGuesses] = React.useState([]);

  const handleSubmitGuess = (guess) => {
    setGuesses([...guesses, guess]); 
  } 

  return (
    <>
      <GuessList guesses={guesses}/>
      <GuessInput handleSubmitGuess={handleSubmitGuess}/> 
    </>
  );
}

export default Game;
