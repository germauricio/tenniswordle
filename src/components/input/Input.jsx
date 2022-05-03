import GuessSquare from "../guessSquare/GuessSquare";

const namespace = 'input';

const Input = ({onChange, squares, disabled, isGuess, player, onKeyDown}) => {
  const color = disabled || isGuess ? 'grey' : 'white';

  return (
    <div className="container">
      {squares.map( (letter, i) => {
        return (
          <>
            {isGuess ? <GuessSquare player={player} index={i} letter={letter} /> : (
              <input onKeyDown={onKeyDown} name={i} maxLength="1" className={`${namespace}__square color__${color}`} pattern="[a-zA-Z]" onChange={onChange}></input>
            )}
          </>
        )}
      )}
    </div>
  );
}

export default Input;