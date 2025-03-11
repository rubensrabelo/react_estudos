import { useState } from "react";

import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer(gameTurns) {
  let currentPlay = "X";

  if(gameTurns.length > 0 && gameTurns[0].player === "X")
    currentPlay = "O";

  return currentPlay;
}

function App() {
  const [players, setPlayers ] = useState({
    X: "Player 1",
    O: "Player 2",
  }); 
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(arr => [...arr])];

    for(const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

  let winner = null;

  for(const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if(
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const currentPlay = deriveActivePlayer(prevTurns);

      const updatedTurns= [{ square: {row: rowIndex, col: colIndex}, player: currentPlay },
        ...prevTurns
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }

  return (
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} onChangeName={handlePlayerNameChange} />
            <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} onChangeName={handlePlayerNameChange} />
          </ol>
          {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
          <GameBoard onSelectedSquare={handleSelectSquare} board={gameBoard} />
        </div>

        <Log turns={gameTurns} />
      </main>
    );
}

export default App;
