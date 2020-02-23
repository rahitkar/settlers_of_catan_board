const getRandomResources = () => {
  const boardTiles = {
    0: ['ore', 3],
    1: ['brick', 3],
    2: ['wheat', 4],
    3: ['lumber', 4],
    4: ['sheep1', 4],
    5: ['desert', 1]
  };

  const generateRandomCardNumber = () => {
    const num = Math.floor(Math.random() * 6);
    if (boardTiles[num][1] !== 0) {
      boardTiles[num][1]--;
      return num;
    }
    return generateRandomCardNumber();
  };

  const randomArrangement = [];
  for (let i = 0; i < 19; i++) {
    const randomCardNumber = generateRandomCardNumber();
    randomArrangement.push(boardTiles[randomCardNumber][0]);
  }

  return randomArrangement;
};
