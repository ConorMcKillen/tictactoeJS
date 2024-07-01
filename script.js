const GameBoard = (function () {
  const gameBoard = ['', '', '', '', '', '', '', '', ''];

  return { gameBoard };
})();
console.log(GameBoard.gameBoard);
const players = (function (playerOne = 'Player One', playerTwo = 'Player Two') {
  return { playerOne, playerTwo };
})();

const playGame = (function () {
  console.log(`${players.playerOne} has X`);
  console.log(`${players.playerOne} placed it in the top middle`);
  GameBoard.gameBoard.splice(1, 0, 'X');
  console.log(GameBoard.gameBoard);
})();

console.log(players);
