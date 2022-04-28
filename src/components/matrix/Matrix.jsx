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
    console.log(word);
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

  const handleChange = (e) => {
    const nextInput = ref.current.children[4-triesLeft]?.children[parseInt(e.target.name) + 1];
    if(nextInput && e.target.value) nextInput.focus();

    setError('');
    let actualWord = word
    actualWord[e.target.name] = e.target.value;
    
    setWord(actualWord);
  }

  return (
    <form ref={ref} onSubmit={handleSubmit} className="App">
      {(triesLeft < 4 || won ) && <Tries player={player} guesses={guesses} />}
      {!won && !lost && (
        <Input player={player} onChange={handleChange} squares={squares} />
      )}
      {[...Array(triesLeft)].map(() => <UndoneTries squares={squares} disabled={true}/>)}
      {error && <p className={`${namespace}__error-message`}>{error}</p>}
      {won ? <p>Ganastes</p> : (
        <>
          {lost && <p>perdistes: {squares}</p>}
          <button className={`${namespace}__button`}type="submit">Submit</button>
        </>
      )}
    </form>
  );
}

export default Matrix;