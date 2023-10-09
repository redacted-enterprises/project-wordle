import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

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
      <Banner guesses={guesses} answer={answer}/>
      <GuessResults guesses={guesses} answer={answer}/>
      <GuessInput answer={answer} handleSubmitGuess={handleSubmitGuess} guesses={guesses}/> 
    </>
  );
}

export default Game;
