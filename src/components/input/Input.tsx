import GuessSquare from "../guessSquare/GuessSquare";
import React from "react";

const namespace = 'input';

type InputType = {
  onChange?: (e: any) => void,
  squares?: Array<string>,
  disabled?: boolean,
  isGuess?: boolean,
  player: Array<string>,
  onKeyDown?: (e: any) => void,
}

const Input = ({onChange, squares, disabled, isGuess, player, onKeyDown}: InputType) => {
  const color = disabled || isGuess ? 'grey' : 'white';

  return (
    <div className="container">
      {squares?.map( (letter, i) => {
        return (
          <>
            {isGuess ? <GuessSquare player={player} index={i} letter={letter} /> : (
              <input onKeyDown={onKeyDown} name={i.toString()} maxLength={1} className={`${namespace}__square color__${color}`} pattern="[a-zA-Z]" onChange={onChange}></input>
            )}
          </>
        )}
      )}
    </div>
  );
}

export default Input;