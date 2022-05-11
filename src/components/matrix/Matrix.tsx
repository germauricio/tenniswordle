import React, {useState, useRef} from 'react';
import Input from '../input/Input';
import UndoneTries from '../undoneTries/UndoneTries';
import Tries from '../tries/Tries';
import { checkWordExists, isError } from '../../services/words';

const namespace = 'matrix';

type MatrixType = {
  squares: string[],
  player: string[],
}

const Matrix = ({squares, player}: MatrixType) => {
  const ref = useRef<any>();
  const [word, setWord] = useState<string[]>([]);
  const [triesLeft, setTriesLeft] = useState<number>(4);
  const [lost, setLost] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [won, setWon] = useState<boolean>(false);
  const [guesses, setGuesses] = useState<string[]>([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const wordString = word.join('');

    if(await isError(wordString, player, setError)) return;
    
    setGuesses([...guesses, wordString]);

    if(wordString === player.join('')){
      setWon(true);
      return;
    }

    if(triesLeft - 1 < 0) {
      setLost(true);
      return;
    }
    setTriesLeft(triesLeft - 1);
  }

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 8) {
      const prevInput = ref.current.firstChild.children[4-triesLeft]?.children[parseInt(e.target.name) - 1];
      if(prevInput && !e.target.value) prevInput.focus();  
    }
  }

  const handleChange = (e: any) => {
    const nextInput = ref.current.firstChild.children[4-triesLeft]?.children[parseInt(e.target.name) + 1];
    if(nextInput && e.target.value) nextInput.focus();

    setError('');
    let actualWord = word
    const letter = e.target.value ? e.target.value.toUpperCase() : e.target.value;
    actualWord[e.target.name] = letter;
    
    setWord(actualWord);
  }

  return (
    <form ref={ref} onSubmit={handleSubmit} className="App">
      <div className={`${namespace}__container`}>
        {(triesLeft < 4 || won ) && <Tries player={player} guesses={guesses} />}
        {!won && !lost && (
          <Input player={player} onKeyDown={handleKeyDown} onChange={handleChange} squares={squares} />
        )}
        {[...Array(triesLeft)].map(() => <UndoneTries squares={squares}/>)}
      </div>
      {error && <p className={`${namespace}__error-message`}>{error}</p>}
      {won ? <p>Ganastes</p> : (
        <>
          {lost && <p>Perdistes: {squares}</p>}
          <button className={`${namespace}__button`}type="submit">Submit</button>
        </>
      )}
    </form>
  );
}

export default Matrix;