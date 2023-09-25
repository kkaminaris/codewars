// Introduction

// We all love to play games especially as children. I have fond memories playing Connect 4 with my brother so decided to create this Kata based on the classic game. Connect 4 is known as several names such as “Four in a Row” and “Captain’s Mistress" but was made popular by Hasbro MB Games

// Connect 4
// Task

// The game consists of a grid (7 columns and 6 rows) and two players that take turns to drop their discs. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.

// Your task is to create a Class called Connect4 that has a method called play which takes one argument for the column where the player is going to place their disc.

// Rules

// If a player successfully has 4 discs horizontally, vertically or diagonally then you should return "Player n wins!” where n is the current player either 1 or 2.

// If a player attempts to place a disc in a column that is full then you should return ”Column full!” and the next move must be taken by the same player.

// If the game has been won by a player, any following moves should return ”Game has finished!”.

// Any other move should return ”Player n has a turn” where n is the current player either 1 or 2.
 
// Player 1 starts the game every time and alternates with player 2.

// The columns are numbered 0-6 left to right.

// Good luck and enjoy!

// My solution

function Connect4 (){
    // Code Here
    Connect4.prototype.moveNo = 1;
    Connect4.prototype.gameOver = false;
    Connect4.prototype.grid = new Array(6).fill(0).map(() => new Array(7).fill(0));
    Connect4.prototype.player1 = true;
  
    console.log('new game');
    console.log(Connect4.prototype.moveNo);
  };
  
  Connect4.prototype.play = function (col){
    // Code Here
    //if (game.moveNo==1)
    console.log('move number ' + game.moveNo);
    game.moveNo++;
    const pog = game.player1 ? 'X' : 'O';
    const field = game.grid;
    let pogPlace = [];
    
    if (game.gameOver)
      return "Game has finished!";
    
    // Place pog  
    for (let i=5; i>=0; i--) {
      if (field[i][col] == '0'){
        field[i][col] = pog;
        pogPlace.push(i, col);
        break;
      }
      if (i==0)
        return "Column full!";
    }
    
    // Check 4s
    if (pogPlace[0]<3) {
      // Check vertical
      for (let i=0; i<4; i++) {
        if (field[pogPlace[0]+i][pogPlace[1]] != pog){
          break;
        }
        if (i==3) {
          game.gameOver = true;
          return "Player " + (game.player1 ? '1' : '2') + " wins!"
        }
      }
      // Check diagonal
      if (pogPlace[1]>2) {
        for (let i=0; i<4; i++) {
          if (field[pogPlace[0]+i][pogPlace[1]-i] != pog){
            break;
          }
          if (i==3) {
            game.gameOver = true;
            return "Player " + (game.player1 ? '1' : '2') + " wins!"
          }
        }
      }
      if (pogPlace[1]<4) {
        for (let i=0; i<4; i++) {
          if (field[pogPlace[0]+i][pogPlace[1]+i] != pog){
            break;
          }
          if (i==3) {
            game.gameOver = true;
            return "Player " + (game.player1 ? '1' : '2') + " wins!"
          }
        }
      }
    }
    // Check horizontal
    if (pogPlace[1]>2) {
      for (let i=0; i<4; i++) {
        if (field[pogPlace[0]][pogPlace[1]-i] != pog){
          break;
        }
        if (i==3) {
          game.gameOver = true;
          return "Player " + (game.player1 ? '1' : '2') + " wins!"
        }
      }
    }
    if (pogPlace[1]<4) {
      for (let i=0; i<4; i++) {
        if (field[pogPlace[0]][pogPlace[1]+i] != pog){
          break;
        }
        if (i==3) {
          game.gameOver = true;
          return "Player " + (game.player1 ? '1' : '2') + " wins!"
        }
      }
    }
    
    // Give turn
    game.player1 = !game.player1;
    console.log("Player " + (game.player1 ? '2' : '1') + " has a turn");
    console.log(col);
    console.table(game.grid);
    return "Player " + (game.player1 ? '2' : '1') + " has a turn";
};