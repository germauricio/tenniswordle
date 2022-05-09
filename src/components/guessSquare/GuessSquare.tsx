import React from 'react';

const namespace = 'guess-square';

type GuessSquareType = {
  player: string[],
  letter: string,
  index: number,
}

const GuessSquare = ({player, letter, index}: GuessSquareType) => {
  var guessColor = player.find(l => l === letter ) ? 'orange' : 'grey';
  guessColor = player[index] === letter ? 'green' : guessColor;

  return (
    <div className={`${namespace}__block color__${guessColor}`}>
      <div className={`${namespace}__content`}>{letter}</div>
    </div>
  )
}

export default GuessSquare;