import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessInput({handleSubmitGuess, guesses, answer}) {
  [tentativeGuess, setTentativeGuess] = React.useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.info({tentativeGuess});
    setTentativeGuess("");
    handleSubmitGuess(tentativeGuess);
  }

  const onChangeHandler = (event) => {
    setTentativeGuess(event.target.value.toUpperCase());
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmitHandler}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input disabled={guesses.includes(answer) || guesses.length >=  NUM_OF_GUESSES_ALLOWED} id="guess-input" type="text" value={tentativeGuess} onChange={onChangeHandler} pattern='[a-zA-Z]{5}'/>
    </form>
  );
}

export default GuessInput;