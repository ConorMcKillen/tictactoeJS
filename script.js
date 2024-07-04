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

const playGame = (function () {
  const winnerX = ['X', 'X', 'X'];
  const winnerO = ['O', 'O', 'O'];

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
      if (
        compareArray(GameBoard.firstRow, winnerX) ||
        compareArray(GameBoard.secondRow, winnerX) ||
        compareArray(GameBoard.thirdRow, winnerX) ||
        compareArray(GameBoard.firstColumn, winnerX) ||
        compareArray(GameBoard.secondColumn, winnerX) ||
        compareArray(GameBoard.thirdColumn, winnerX) ||
        compareArray(GameBoard.diagonalLeft, winnerX) ||
        compareArray(GameBoard.diagonalRight, winnerX)
      ) {
        console.log('Player One wins!');
        console.log(GameBoard.gameBoard);
        return;
      }
    } else if (i === 5) {
      promptMessage(1); // Third go for O
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
      if (
        compareArray(GameBoard.firstRow, winnerO) ||
        compareArray(GameBoard.secondRow, winnerO) ||
        compareArray(GameBoard.thirdRow, winnerO) ||
        compareArray(GameBoard.firstColumn, winnerO) ||
        compareArray(GameBoard.secondColumn, winnerO) ||
        compareArray(GameBoard.thirdColumn, winnerO) ||
        compareArray(GameBoard.diagonalLeft, winnerO) ||
        compareArray(GameBoard.diagonalRight, winnerO)
      ) {
        console.log('Player Two wins!');
        console.log(GameBoard.gameBoard);
        return;
      }
    } else if (i === 6) {
      promptMessage(0); // Fourth go for X
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
      if (
        compareArray(GameBoard.firstRow, winnerX) ||
        compareArray(GameBoard.secondRow, winnerX) ||
        compareArray(GameBoard.thirdRow, winnerX) ||
        compareArray(GameBoard.firstColumn, winnerX) ||
        compareArray(GameBoard.secondColumn, winnerX) ||
        compareArray(GameBoard.thirdColumn, winnerX) ||
        compareArray(GameBoard.diagonalLeft, winnerX) ||
        compareArray(GameBoard.diagonalRight, winnerX)
      ) {
        console.log('Player One wins!');
        console.log(GameBoard.gameBoard);
        return;
      }
    } else if (i === 7) {
      promptMessage(1); // Fourth go for O
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
      if (
        compareArray(GameBoard.firstRow, winnerO) ||
        compareArray(GameBoard.secondRow, winnerO) ||
        compareArray(GameBoard.thirdRow, winnerO) ||
        compareArray(GameBoard.firstColumn, winnerO) ||
        compareArray(GameBoard.secondColumn, winnerO) ||
        compareArray(GameBoard.thirdColumn, winnerO) ||
        compareArray(GameBoard.diagonalLeft, winnerO) ||
        compareArray(GameBoard.diagonalRight, winnerO)
      ) {
        console.log('Player Two wins!');
        console.log(GameBoard.gameBoard);
        return;
      }
    } else if (i === 8) {
      promptMessage(0); // Fifth go for X
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
      if (
        compareArray(GameBoard.firstRow, winnerX) ||
        compareArray(GameBoard.secondRow, winnerX) ||
        compareArray(GameBoard.thirdRow, winnerX) ||
        compareArray(GameBoard.firstColumn, winnerX) ||
        compareArray(GameBoard.secondColumn, winnerX) ||
        compareArray(GameBoard.thirdColumn, winnerX) ||
        compareArray(GameBoard.diagonalLeft, winnerX) ||
        compareArray(GameBoard.diagonalRight, winnerX)
      ) {
        console.log('Player One wins!');
        console.log(GameBoard.gameBoard);
        return;
      }
    }
  }

  console.log(GameBoard.gameBoard);
})();
