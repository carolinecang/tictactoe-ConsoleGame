var game = function() {
  //private
  var winner;
  var gameOver = false;
  var count = 0;
  const checkForGameOver = function() {
    if (gameOver === true) {
      console.log('Game Over');
      return;
    }
  }
  const isEqual = function(arr) {
    for (var i = 0; i+1 <= 3; i++) {
      if (arr[i] === arr[i+1]) {
        winner = arr[0];
      } else if (arr[i] === ' ') {
        return false;
      } else {
        return false;
      }
    }
  }

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
  }
  const checkInput = function(position, char) {
    
  }


  return{
    showBoard: function(init) {
      //show board with numbers if just started
      if (init) {
        var numbers = [1,2,3,4,5,6,7,8,9];
        console.log('Welcome to play tictactoe');

      }
      var row1 = numbers[0] + ' | ' + numbers[1] + ' | ' + numbers[2] + '\n';
      var row2 = numbers[3] + ' | ' + numbers[4] + ' | ' + numbers[5] + '\n';
      var row3 = numbers[6] + ' | ' + numbers[7] + ' | ' + numbers[8] + '\n';
      var line = '--|---|--' + '\n';
      console.log(row1);
      console.log(line);
      console.log(row2);
      console.log(line);
      console.log(row3);
      //blank board
      if (init) {
        numbers = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
      }
    },
    place: function(position, choice) {

    }
  }
}

var tictactoe = game();
//start
tictactoe.showBoard(true);