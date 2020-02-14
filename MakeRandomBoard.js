const generateRandomNum = numToMul => Math.floor(Math.random() * numToMul);

const getRandomRecourses = () => {
  const boardBlocks = [
    'stone',
    'stone',
    'stone',
    'break',
    'break',
    'break',
    'crop',
    'crop',
    'crop',
    'crop',
    'sheep',
    'sheep',
    'sheep',
    'sheep',
    'wood',
    'wood',
    'wood',
    'wood',
    'desert'
  ];
  const randomCards = [];
  for (i = 19; i > 0; i--) {
    let randomNum = generateRandomNum(i);
    let [element] = boardBlocks.splice(randomNum, 1);
    console.log(randomNum);

    randomCards.push(element);
  }
  return randomCards;
};

console.log(getRandomRecourses());
