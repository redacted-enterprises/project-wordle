import React from 'react';

function GuessInput({handleSubmitGuess, gameState}) {
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
      <input 
        disabled={gameState !== "running"}
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={onChangeHandler}
        pattern='[a-zA-Z]{5}'
      />
    </form>
  );
}

export default GuessInput;