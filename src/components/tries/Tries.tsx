import Input from "../input/Input";
import React from 'react';

type TriesProps = {
  guesses: Array<string>,
  player: Array<string>,
}

const Tries = ({guesses, player}: TriesProps) => (
  <>
    {guesses.map((guess) => (
      <Input 
        player={player} 
        squares={guess.split('')} 
        isGuess 
        disabled={true}
      />
    ))}
  </>
);

export default Tries;