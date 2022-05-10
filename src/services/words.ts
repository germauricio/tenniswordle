import axios from 'axios';
import { getAllPlayers } from './players';

const checkWordExists = async (word: string) => {
  const result = await axios.get('https://palabras-aleatorias-public-api.herokuapp.com/words/getOne', {params: {
    word: word,
    special: true,
  }})

  return result.data;
}

const isError = (word: string, player: string[], wordExists: any, setError: any) => {
  if(word.length !== player.join('').length) {
    setError('Llenar todas las casillas');
    return true;
  }
  const isPlayerName = getAllPlayers().find(el => {
    return el.toUpperCase().includes(word);
  });
  if(!isPlayerName && !wordExists?.body){
    setError('Esa palabra no existe');
    return true;
  }
  return false;
}

export {
  checkWordExists,
  isError
}