var game = function() {
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
    }
  }
}

var tictactoe = game();
//start
tictactoe.showBoard(true);