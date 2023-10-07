import React from 'react';

function GuessResults({ guesses }) {

  return (
    <div className="guess-results">
      {guesses.map((guess) => {
        return <p key={`${crypto.randomUUID()}`} className="guess">{guess}</p>
      })}
    </div>
  );
}

export default GuessResults;
