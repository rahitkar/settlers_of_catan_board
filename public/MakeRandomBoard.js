const generateRandomNum = numToMul => Math.floor(Math.random() * numToMul);

const getRandomResources = () => {
  const boardBlocks = [
    'ore',
    'ore',
    'ore',
    'brick',
    'brick',
    'brick',
    'wheat',
    'wheat',
    'wheat',
    'wheat',
    'sheep1',
    'sheep1',
    'sheep1',
    'sheep1',
    'lumber',
    'lumber',
    'lumber',
    'lumber',
    'desert'
  ];
  const randomCards = [];
  for (i = 19; i > 0; i--) {
    let randomNum = generateRandomNum(i);
    let [element] = boardBlocks.splice(randomNum, 1);
    randomCards.push(element);
  }
  return randomCards;
};
