// Introduction

// Snakes and Ladders is an ancient Indian board game regarded today as a worldwide classic. It is played between two or more players on a gameboard having numbered, gridded squares. A number of "ladders" and "snakes" are pictured on the board, each connecting two specific board squares. (Source Wikipedia)

// Task

// Your task is to make a simple class called SnakesLadders. The test cases will call the method play(die1, die2) independantly of the state of the game or the player turn. The variables die1 and die2 are the die thrown in a turn and are both integers between 1 and 6. The player will move the sum of die1 and die2.

// The Board
// Rules

// 1.  There are two players and both start off the board on square 0.

// 2.  Player 1 starts and alternates with player 2.

// 3.  You follow the numbers up the board in order 1=>100

// 4.  If the value of both die are the same then that player will have another go.

// 5.  Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).

// 6.  Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).

// 7.  Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)

// 8.  If the Player rolled a double and lands on the finish square “100” without any remaining moves then the Player wins the game and does not have to roll again.

// Returns

// Return Player n Wins!. Where n is winning player that has landed on square 100 without any remainding moves left.

// Return Game over! if a player has won and another player tries to play.

// Otherwise return Player n is on square x. Where n is the current player and x is the sqaure they are currently on.

// Good luck and enjoy!

// My solution

function SnakesLadders() {
    this.players = [0, 0];
    this.currentPlayer = 0;
    this.hasAnotherTurn = false;
    this.gameOver = false;
    this.ladders = [[2,38],[15,26],[7,14],[8,31],[28,84],[21,42],[36,44],[51,67],[78,98],[71,91],[87,94]];
    this.snakes = [[16,6],[46,25],[49,11],[62,19],[64,60],[74,53],[89,68],[92,88],[95,75],[99,80]];
};
  
  SnakesLadders.prototype.play = function(die1, die2) {
    console.log(this.players, this.currentPlayer+1, die1, die2);
    this.hasAnotherTurn = false;
    let steps = die1 + die2;
    let landingSquare = this.players[this.currentPlayer];
    
    // check game over
    if (this.gameOver)
      return "Game over!";
    
    if (die1==die2)
      this.hasAnotherTurn = true;
    
    landingSquare += steps;
    
    // check overflow
    if (landingSquare>100)
      landingSquare = 200 - landingSquare;
    
    //check ladders
    this.ladders.forEach(([start,finish]) => {
      if (start == landingSquare)
        landingSquare = finish;
    });
  
    //check snakes
    this.snakes.forEach(([start,finish]) => {
      if (start == landingSquare)
        landingSquare = finish;
    });
  
    console.log('landing at ' + landingSquare);
    
    // check winner
    if (landingSquare==100) {
      this.gameOver = true;
      return "Player " + (this.currentPlayer + 1) + " Wins!";
    }
    
    // make the move  
    this.players[this.currentPlayer] = landingSquare;
    
    const result = "Player " + (this.currentPlayer + 1) + " is on square " + landingSquare;
    
    // give next turn
    if (this.hasAnotherTurn == false)
      this.currentPlayer = (this.currentPlayer + 1) % 2;
    
    console.log('next player: ' + (this.currentPlayer + 1));
    
    // next turn
    console.log(result + '\n');
    return result;
}