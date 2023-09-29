import React, { useState } from 'react';

function GuessInput({handleSubmitGuess}) {
  [tentativeGuess, setTentativeGuess] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.info({guess});
    setGuess("");
    handleSubmitGuess(guess);
  }

  const onChangeHandler = (event) => {
    setTentativeGuess(event.target.value.toUpperCase());
  }

  return (
    <>
    <GuessList guesses={guessList}/>
      <form className="guess-input-wrapper" onSubmit={onSubmitHandler}>
        <label htmlFor="guess-input">Enter Guess:</label>
        <input id="guess-input" type="text" value={tentativeGuess} onChange={onChangeHandler} pattern='[a-zA-Z]{5}'/>
      </form>
    </>

  );
}

export default GuessInput;