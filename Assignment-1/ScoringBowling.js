const validateInput = (...args) => {
  if (args.filter(x => x > 10).length === 0) {
    return true;
  }
  return false;
};
const isStrike = (first) => {
  if (first === 10) {
    return true;
  }
  return false;
};
const isSpare = (first, second) => {
  if (first + second === 10) {
    return true;
  }
  return false;
};
const setOfValuesPerFrame = (...inputs) => {
  if (isStrike(inputs[0])) {
    return ([[inputs[0], inputs[1], inputs[2]], 0]);
  } if (isSpare(inputs[0], inputs[1])) {
    return ([[inputs[0], inputs[1], inputs[2]], 1]);
  }
  return ([[inputs[0], inputs[1]], 1]);
};
const score = (scoreFrames) => {
  scoreFrames = scoreFrames.filter(x => x.includes(undefined) !== true);
  return scoreFrames.map(x => x.reduce((a, b) => a + b, 0)).reduce((x, y) => x + y, 0);
};

const rolls = (...allRolls) => {
  const scoreFrames = [];
  if (validateInput(...allRolls)) {
    let i = 0;
    for (i = 0; i < allRolls.length; i++) {
      const framesAndSkip = setOfValuesPerFrame(allRolls[i], allRolls[i + 1], allRolls[i + 2], allRolls[i + 3]);
      scoreFrames.push(framesAndSkip[0]);
      i += framesAndSkip[1];
    }
    return scoreFrames;
  }
  return 'Invalid input';
};
const main = (...args) => {
  const scoreFrames = rolls(...args);
  if (scoreFrames !== 'Invalid input') {
    return (score(scoreFrames));
  }
  return scoreFrames;
};
// console.log(setOfValuesPerFrame(10,10,2,3));
console.log(main(10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,10));
console.log(main(3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6));
console.log(main(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10));
console.log(main(6, 4, 3, 0, 10, 10,5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
console.log(main(13,14)); 
module.exports = {
  validateInput, isStrike, isSpare, setOfValuesPerFrame, score, rolls, main,
};
