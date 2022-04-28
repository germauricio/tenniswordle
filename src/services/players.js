const getRandomPlayer = () => {
  const random = Math.trunc(Math.random() * 100 / 4);
  const players = getAllPlayers();

  return getLastName(players[random]);
}

const getLastName = (name) => {
  const names = name.split(" ");
  return names[names.length - 1];
}

const getAllPlayers = () => {
  return ["Novak Djokovic", "Daniil Medvedev", "Rafael Nadal", "Alexander Zverev", "Stefanos Tsitsipas", "Andrey Rublev", "Matteo Berrettini", "Taylor Fritz", "Casper Ruud", "Felix Auger-Aliassime", "Hubert Hurkacz", "Jannik Sinner", "Cameron Norrie", "Denis Shapovalov", "Carlos Alcaraz", "Diego Schwartzman", "Roberto Bautista Agut", "Reilly Opelka", "Pablo Carreno Busta", "Nikoloz Basilashvili", "John Isner", "Lorenzo Sonego", "Gael Monfils", "Marin Cilic", "Grigor Dimitrov", "Roger Federer"];
}

export {
  getAllPlayers,
  getRandomPlayer
}