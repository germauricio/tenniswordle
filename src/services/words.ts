import axios from 'axios';
import { getAllPlayers } from './players';

const checkWordExists = async (word: string) => {
  const result = await axios.get('https://palabras-aleatorias-public-api.herokuapp.com/words/getOne', {params: {
    word: word,
    special: true,
  }})

  return result.data;
}

const isError = async (word: string, player: string[], setError: any) => {
  if(word.length !== player.join('').length) {
    setError('Llenar todas las casillas');
    return true;
  }
  const isPlayerName = getAllPlayers().find(el => {
    return el.toUpperCase().includes(word);
  });

  if(isPlayerName) return false;
  const wordExists = await checkWordExists(word).then( result => {
    return result
  });
  if(!wordExists?.body){
    setError('Esa palabra no existe');
    return true;
  }
  return false;
}

export {
  checkWordExists,
  isError
}