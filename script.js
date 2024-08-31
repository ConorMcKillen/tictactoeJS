const gameGrid = document.querySelector('.game-grid');
const activePlayers = document.querySelector('.active-players');
const playerOne = document.querySelector('.player-one');
const playerTwo = document.querySelector('.player-two');
const result = document.querySelector('.result');
const editButton = document.querySelector('.edit-names');
const modal = document.getElementById('myModal');
const closeBtn = document.querySelector('.close');
const playerOneName = document.getElementById('playerOneName');
const playerTwoName = document.getElementById('playerTwoName');
const updatePlayerOne = document.getElementById('updatePlayerOne');
const updatePlayerTwo = document.getElementById('updatePlayerTwo');

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

const updatePlayerNames = (function () {
  playerOne.innerHTML = players.playersArr[0].name;
  playerTwo.innerHTML = players.playersArr[1].name;
})();

updatePlayerOne.addEventListener('click', () => {
  players.playersArr[0].name = playerOneName.value;
  console.log(players.playersArr[0].name);
  playerOne.innerHTML = playerOneName.value;
});

updatePlayerTwo.addEventListener('click', () => {
  players.playersArr[1].name = playerOneName.value;
  console.log(players.playersArr[1].name);
  playerTwo.innerHTML = playerTwoName.value;
});

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

const displayGame = {
  newGameBoard: GameBoard.gameBoard,
  firstRow: GameBoard.firstRow,
  secondRow: GameBoard.secondRow,
  thirdRow: GameBoard.thirdRow,
  displayBoard: function () {
    let sectionId = 0;
    for (let i = 0; i < 3; i++) {
      const gameSection = document.createElement('div');
      gameSection.classList.add('game-section');
      gameSection.id = sectionId;
      sectionId++;
      let squareId = 0;
      for (let j = 0; j < 3; j++) {
        const square = document.createElement('div');

        square.classList.add('square');
        square.id = squareId;
        squareId++;
        // square.textContent = this.newGameBoard[i][j];
        gameSection.appendChild(square);
      }

      gameGrid.appendChild(gameSection);
    }
  },
};

const newGame = Object.create(displayGame);
newGame.displayBoard();

const playGame = (function () {
  let currentPlayerIndex = 0;
  let roundsPlayed = 0;
  playerOne.style.backgroundColor = '#f8b400';
  playerTwo.style.backgroundColor = '#faf5e4';

  document.querySelectorAll('.square').forEach((item) => {
    item.addEventListener('click', (e) => {
      roundsPlayed++;

      let currentPlayer = players.playersArr[currentPlayerIndex].name;
      let currentToken = players.playersArr[currentPlayerIndex].token;

      if (currentToken === 'X') {
        playerOne.style.backgroundColor = '#faf5e4';
        playerTwo.style.backgroundColor = '#f8b400';
      }

      if (currentToken === 'O') {
        playerTwo.style.backgroundColor = '#faf5e4';
        playerOne.style.backgroundColor = '#f8b400';
      }

      e.target.textContent = currentToken;
      console.log(currentPlayer);

      console.log(e.target.parentNode.id);
      GameBoard.gameBoard[e.target.parentNode.id][e.target.id] = currentToken;
      console.log(GameBoard.gameBoard);
      console.log(roundsPlayed);

      if (roundsPlayed === 5) {
        setArrays();
        if (setCompare('X')) {
          console.log('Player One wins');
          result.innerHTML = 'Player One wins';
        }
      } else if (roundsPlayed === 6) {
        setArrays();
        if (setCompare('O')) {
          console.log('Player Two wins');
        }
      } else if (roundsPlayed === 7) {
        setArrays();
        if (setCompare('X')) {
          console.log('Player One wins');
        }
      } else if (roundsPlayed === 8) {
        setArrays();
        if (setCompare('O')) {
          console.log('Player Two wins');
        }
      } else if (roundsPlayed === 9) {
        setArrays();
        if (setCompare('X')) {
          console.log('Player One wins');
        }
      } else if (roundsPlayed > 9) {
        console.log('It is a draw');
      }

      currentPlayerIndex = (currentPlayerIndex + 1) % players.playersArr.length;
    });
  });
})();

editButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
};

// const playGame = (function () {
//   console.log(GameBoard.firstRow);
//   console.log(GameBoard.secondRow);
//   console.log(GameBoard.thirdRow);

//   for (let i = 0; i < 9; i++) {
//     if (i === 0) {
//       promptMessage(0); // First go for X
//     } else if (i === 1) {
//       promptMessage(1); // First go for O
//     } else if (i === 2) {
//       promptMessage(0); // Second go for X
//     } else if (i === 3) {
//       promptMessage(1); // Second go for O
//     } else if (i === 4) {
//       promptMessage(0); // Third go for X
//       // Check for a winner as three have been entered
//       setArrays();

//       if (setCompare('X')) {
//         console.log('Player One wins!');
//         console.log(GameBoard.gameBoard);
//         return;
//       }
//     } else if (i === 5) {
//       promptMessage(1); // Third go for O
//       setArrays();

//       if (setCompare('O')) {
//         console.log('Player Two wins!');
//         console.log(GameBoard.gameBoard);
//         return;
//       }
//     } else if (i === 6) {
//       promptMessage(0); // Fourth go for X
//       setArrays();
//       if (setCompare('X')) {
//         console.log('Player One wins!');
//         console.log(GameBoard.gameBoard);
//         return;
//       }
//     } else if (i === 7) {
//       promptMessage(1); // Fourth go for O
//       setArrays();
//       if (setCompare('O')) {
//         console.log('Player Two wins!');
//         console.log(GameBoard.gameBoard);
//         return;
//       }
//     } else if (i === 8) {
//       promptMessage(0); // Fifth go for X
//       setArrays();
//       if (setCompare('X')) {
//         console.log('Player One wins!');
//         console.log(GameBoard.gameBoard);
//         return;
//       } else {
//         alert('It is a draw');
//       }
//     }
//   }

//   console.log(GameBoard.gameBoard);
// })();
