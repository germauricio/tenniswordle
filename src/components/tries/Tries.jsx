import Input from "../input/Input";

const Tries = ({guesses, player}) => (
  <>
    {guesses.map((guess) => {
      return <Input player={player} squares={guess.split('')} isGuess disabled={true}/>
    })}
  </>
);

export default Tries;