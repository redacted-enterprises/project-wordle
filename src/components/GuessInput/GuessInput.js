import React, { useState } from 'react';

function GuessInput() {
  [guess, setGuess] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.info({guess});
    setGuess("");
  }

  const onChangeHandler = (event) => {
    setGuess(event.target.value.toUpperCase());
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmitHandler}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input id="guess-input" type="text" value={guess} onChange={onChangeHandler} pattern='[a-zA-Z]{5}'/>
    </form>
  );
}

export default GuessInput;