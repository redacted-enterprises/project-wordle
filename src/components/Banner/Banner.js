import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Banner({guesses, answer}) {
  if (guesses.includes(answer)) {
    return (
      <div class="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guesses.length} guesses</strong>.
        </p>
      </div>
    )
  } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
    return (
      <div class="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    )
  } else {
    return <div></div>;
  }
}

export default Banner;
