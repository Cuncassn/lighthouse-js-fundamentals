const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];
let x = 0;
let y = 0;
const finalPosition = function (moves) {
  for (let move of moves) {
    if (move === 'north') { 
      y += 1;
    } else if (move === 'south') {
      y -= 1;
    } else if (move === 'west') {
      x -= 1;
    } else if (move === 'east') {
      x += 1;
    }
  } return [x,y];
};

console.log(finalPosition(moves));