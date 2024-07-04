const GameBoard = (function () {
  let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  let firstRow = gameBoard[0];
  let secondRow = gameBoard[1];
  let thirdRow = gameBoard[2];
  let firstColumn;
  let secondColumn;
  let thirdColumn;
  let diagonalLeft;
  let diagonalRight;

  return {
    gameBoard,
    firstRow,
    secondRow,
    thirdRow,
    firstColumn,
    secondColumn,
    thirdColumn,
    diagonalLeft,
    diagonalRight,
  };
})();

const compareArray = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

const players = (function (playerOne = 'Player One', playerTwo = 'Player Two') {
  const playersArr = [
    {
      name: playerOne,
      token: 'X',
    },
    {
      name: playerTwo,
      token: 'O',
    },
  ];

  return { playersArr };
})();

const promptMessage = (playerNumber) => {
  console.log(
    `${players.playersArr[playerNumber].name}'s turn. With the token ${players.playersArr[playerNumber].token}`
  );
  let row = prompt(
    `Enter which row you want to place the token. Player ${
      playerNumber + 1
    } GAMEBOARD:\n ${GameBoard.firstRow}\n ${GameBoard.secondRow} \n ${
      GameBoard.thirdRow
    }`
  );
  let col = prompt('Enter which col youw want it in?');
  GameBoard.gameBoard[row][col] = players.playersArr[playerNumber].token;
};

const setArrays = function () {
  GameBoard.firstColumn = [
    GameBoard.firstRow[0],
    GameBoard.secondRow[0],
    GameBoard.thirdRow[0],
  ];
  GameBoard.secondColumn = [
    GameBoard.firstRow[1],
    GameBoard.secondRow[1],
    GameBoard.thirdRow[1],
  ];
  GameBoard.thirdColumn = [
    GameBoard.firstRow[2],
    GameBoard.secondRow[2],
    GameBoard.thirdRow[2],
  ];
  GameBoard.diagonalLeft = [
    GameBoard.firstRow[0],
    GameBoard.secondRow[1],
    GameBoard.thirdRow[2],
  ];
  GameBoard.diagonalRight = [
    GameBoard.firstRow[2],
    GameBoard.secondRow[1],
    GameBoard.thirdRow[0],
  ];
};

const setCompare = function (token) {
  const winnerX = ['X', 'X', 'X'];
  const winnerO = ['O', 'O', 'O'];
  let winner;
  winner = token === 'X' ? winnerX : winnerO;
  return (
    compareArray(GameBoard.firstRow, winner) ||
    compareArray(GameBoard.secondRow, winner) ||
    compareArray(GameBoard.thirdRow, winner) ||
    compareArray(GameBoard.firstColumn, winner) ||
    compareArray(GameBoard.secondColumn, winner) ||
    compareArray(GameBoard.thirdColumn, winner) ||
    compareArray(GameBoard.diagonalLeft, winner) ||
    compareArray(GameBoard.diagonalRight, winner)
  );
};

const playGame = (function () {
  console.log(GameBoard.firstRow);
  console.log(GameBoard.secondRow);
  console.log(GameBoard.thirdRow);

  for (let i = 0; i < 9; i++) {
    if (i === 0) {
      promptMessage(0); // First go for X
    } else if (i === 1) {
      promptMessage(1); // First go for O
    } else if (i === 2) {
      promptMessage(0); // Second go for X
    } else if (i === 3) {
      promptMessage(1); // Second go for O
    } else if (i === 4) {
      promptMessage(0); // Third go for X
      // Check for a winner as three have been entered
      setArrays();

      if (setCompare('X')) {
        console.log('Player One wins!');
        console.log(GameBoard.gameBoard);
        return;
      }
    } else if (i === 5) {
      promptMessage(1); // Third go for O
      setArrays();

      if (setCompare('O')) {
        console.log('Player Two wins!');
        console.log(GameBoard.gameBoard);
        return;
      }
    } else if (i === 6) {
      promptMessage(0); // Fourth go for X
      setArrays();
      if (setCompare('X')) {
        console.log('Player One wins!');
        console.log(GameBoard.gameBoard);
        return;
      }
    } else if (i === 7) {
      promptMessage(1); // Fourth go for O
      setArrays();
      if (setCompare('O')) {
        console.log('Player Two wins!');
        console.log(GameBoard.gameBoard);
        return;
      }
    } else if (i === 8) {
      promptMessage(0); // Fifth go for X
      setArrays();
      if (setCompare('X')) {
        console.log('Player One wins!');
        console.log(GameBoard.gameBoard);
        return;
      } else {
        alert('It is a draw');
      }
    }
  }

  console.log(GameBoard.gameBoard);
})();
