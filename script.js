const GameBoard = (function () {
  let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  let firstRow = gameBoard[0];
  let secondRow = gameBoard[1];
  let thirdRow = gameBoard[2];
  let firstColumn = firstRow[0].concat(secondRow[0], thirdRow[0]);
  let secondColumn = firstRow[1].concat(secondRow[1], thirdRow[1]);
  let thirdColumn = firstRow[2].concat(secondRow[2], thirdRow[2]);
  let diagonalLeft = firstRow[0].concat(secondRow[1], thirdRow[2]);
  let diagonalRight = firstRow[2].concat(secondRow[1], thirdRow[0]);

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
  let row = prompt('Enter which row you want to place the token');
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
      promptMessage(0);
    } else if (i === 1) {
      promptMessage(1);
    } else if (i === 2) {
      promptMessage(0);
    } else if (i === 3) {
      promptMessage(1);
    } else if (i === 4) {
      promptMessage(0);
    } else if (i === 5) {
      promptMessage(1);
    } else if (i === 6) {
      promptMessage(0);
    } else if (i === 7) {
      promptMessage(1);
    } else if (i === 8) {
      promptMessage(0);
    }
  }

  console.log(GameBoard.gameBoard);

  if (compareArray(GameBoard.gameBoard[0], winnerX)) {
    console.log('HEllo');
  }
})();
