
var game = function() {
  //private

  var winner;
  var gameOver = false;
  var count = 1;

  const checkForGameOver = function() {
    if (gameOver === true) {
      console.log("Game Over");
      return;
    }
  };
  const isEqual = function(arr) {
    for (var i = 0; i < 2; i++) {
      if (arr[i] !== arr[i + 1]) {
        return false;
      } else if (arr[i] === " ") {
        return false;
      }
    }
    winner = arr[0];
    return true;
  };

  const checkInput = function(position, char) {
    if (position > 8) {
      console.log("please enter position between 1 to 9.");
      return;
    } else if (numbers[position] !== " ") {
      console.log("spot has already token.");
      return;
    }
    if (char === "x" || char === "X") {
      numbers[position] = "X";
    } else if (char === "o" || char === "O") {
      numbers[position] = "O";
    } else {
      console.log("please enter a valid letter! X or O");
    }
  };

  const findWinner = function() {
    if (
      //check row:
      isEqual([numbers[0], numbers[1], numbers[2]]) ||
      isEqual([numbers[3], numbers[4], numbers[5]]) ||
      isEqual([numbers[6], numbers[7], numbers[8]]) ||
      //check col:
      isEqual([numbers[0], numbers[3], numbers[6]]) ||
      isEqual([numbers[1], numbers[4], numbers[7]]) ||
      isEqual([numbers[2], numbers[5], numbers[8]]) ||
      //check diagonal
      isEqual([numbers[0], numbers[4], numbers[8]]) ||
      isEqual([numbers[2], numbers[4], numbers[6]])
    ) {
      return true;
    }
  };

  return {
    showBoard: function(init) {
      //show board with numbers if just started
      if (init) {
        numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        console.log("Welcome to play tictactoe");
      }
      var row1 = numbers[0] + " | " + numbers[1] + " | " + numbers[2] + "\n";
      var row2 = numbers[3] + " | " + numbers[4] + " | " + numbers[5] + "\n";
      var row3 = numbers[6] + " | " + numbers[7] + " | " + numbers[8] + "\n";
      var line = "--|---|--" + "\n";
      console.log(row1);
      console.log(line);
      console.log(row2);
      console.log(line);
      console.log(row3);
      //blank board
      if (init) {
        numbers = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
      }
    },
    place: function(position, choice) {
      if (gameOver === true) {
        checkForGameOver();
        return;
      }
      //check for user input
      checkInput(position, choice);
      count++;
      if (findWinner()) {
        this.showBoard();
        console.log("the winner is " + winner + "!");
        gameOver = true;
      } else if (count > 9) {
        console.log("tie");
      } else {
        this.showBoard();
      }
    },
    newGame: function() {
      numbers = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
      count = 1;
      gameOver = false;
      this.showBoard(true);
    }
  };
};

var tictactoe = game();
//start
tictactoe.showBoard(true);