import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  [gameState, setGameState] = React.useState('running');
  [guesses, setGuesses] = React.useState([]);

  const handleSubmitGuess = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess.toUpperCase() === answer) {
      setGameState('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState('lost');
    }
  } 

  return (
    <>
      {gameState === "won" && (
        <WonBanner numOfGuesses={guesses.length}/>
      )}
      {gameState === "lost" && (
        <LostBanner answer={answer}/>
      )}
      <GuessResults guesses={guesses} answer={answer}/>
      <GuessInput gameState={gameState} handleSubmitGuess={handleSubmitGuess} /> 
    </>
  );
}

export default Game;
