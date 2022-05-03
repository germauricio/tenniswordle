import {useState, useRef} from 'react';
import Input from '../input/Input';
import UndoneTries from '../undoneTries/UndoneTries';
import Tries from '../tries/Tries'

const namespace = 'matrix';

const Matrix = ({squares, player}) => {
  const ref = useRef();
  const [word, setWord] = useState([]);
  const [triesLeft, setTriesLeft] = useState(4);
  const [lost, setLost] = useState(false);
  const [error, setError] = useState('');
  const [won, setWon] = useState(false);
  const [guesses, setGuesses] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(word.join('').length !== player.join('').length) {
      setError('Llenar todas las casillas');
      return;
    }
    setGuesses([...guesses, word.join('')]);

    if(word.join('') === player.join('')){
      setWon(true);
      return;
    }

    if(triesLeft - 1 < 0) {
      setLost(true);
      return;
    }
    setTriesLeft(triesLeft - 1);
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 8) {
      const prevInput = ref.current.firstChild.children[4-triesLeft]?.children[parseInt(e.target.name) - 1];
      if(prevInput && !e.target.value) prevInput.focus();  
    }
  }

  const handleChange = (e) => {
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
        {[...Array(triesLeft)].map(() => <UndoneTries squares={squares} disabled={true}/>)}
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