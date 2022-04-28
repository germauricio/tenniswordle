const namespace = 'guess-square';

const GuessSquare = ({player, letter, index}) => {
  var guessColor = player.find(l => l === letter ) ? 'orange' : 'grey';
  guessColor = player[index] === letter ? 'green' : guessColor;

  return (
    <div className={`${namespace}__block color__${guessColor}`}>
      <div className={`${namespace}__content`}>{letter}</div>
    </div>
  )
}

export default GuessSquare;