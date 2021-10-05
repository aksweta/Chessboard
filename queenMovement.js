// const queenPosition = {
//     x : 2,
//     y : 3,
// }
// const queenIcon = "♛"
// document.getElementById(queenPosition.x.toString() + queenPosition.y.toString()).innerHTML = queenIcon;
// When the user clicks the any of the buttons
//  If the movement is not allowed - Then alert box needs to be displayed saying "Movement is not allowed" and queen's positions should not be updated
//  If the movement is  allowed - Then queen's positions should updated according to the movement
//  Add a text box next to the button and get the no of positions should move ie. currently the default is only 1

var queen = {
  x: 5,
  y: 6,
  moveRight: function ({ x, y }) {
    queenpositioncurrent(queen.x,queen.y)
    console.log("queen can move Right", (queen.x = x + 1), (queen.y = y));
    queenposition(queen.x, queen.y);
  },
  moveLeft: function ({ x, y }) {
    queenpositioncurrent(queen.x,queen.y)
    console.log("queen can move Left", (queen.x = x - 1), (queen.y = y));
    queenposition(queen.x, queen.y);
  },
  moveUp: function ({ x, y }) {
    queenpositioncurrent(queen.x,queen.y)
    console.log("queen can move Up", (queen.x = x), (queen.y = y - 1));
    queenposition(queen.x, queen.y);
  },
  moveDown: function ({ x, y }) {
    queenpositioncurrent(queen.x,queen.y)
    console.log("queen can move Down", (queen.x = x), (queen.y = y + 1));
    queenposition(queen.x, queen.y);
  },
  isMovementNotAllowed: function ({ x, y }) {
    if (x === 8 && y === 8) {
      return false;
    } else {
      return true;
    }
  },
  isMovementNotRightAllowed: function ({ x, y }) {
    if (x === 8 && y < 8) {
      return alert("Movement right is not allowed");
    } else {
      return this.moveRight({ x, y });
    }
  },
  isMovementNotDownAllowed: function ({ x, y }) {
    if (x < 8 && y === 8) {
      return alert("Movement Down is not allowed");
    } else {
      return this.moveDown({ x, y });
    }
  },
};

const queenIcon = "♛";
const queenposition = (x, y) =>
  (document.getElementById(x.toString() + y.toString()).innerHTML = queenIcon);


const queenpositioncurrent = (x, y) =>
    (document.getElementById(x.toString() + y.toString()).innerHTML = '');

queenposition(queen.x, queen.y);


function playerTurn(move) {
  if (move === "moveRight" || move === "moveDown") {
    if (queen.isMovementNotAllowed(queen) === false) {
      alert("Movement is not allowed");
    } else if (move === "moveRight") {
      queen.isMovementNotRightAllowed(queen);
    } else if (move === "moveDown") {
      queen.isMovementNotDownAllowed(queen);
    } else {
      queen[move](queen);
    }
  } else {
    queen[move](queen);
  }
}  






    



