import React, { useState } from 'react';
import "./Game.css"
import GameGame from './GameGame';
import GameInfo from './GameInfo';
import Log from './Log';
import { WINNING_COMBINATIONS } from './Winning-combinations';
import GameOverScreen from './GameOverScreen';

function deriveActivePlayer(gameTurn) {
  let currentPlayer = "X";
      
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

const PLAYERS = {
  X: "Player one",
  O: "Player two"
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveWinner(gameBoard, players) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function deriveGame(gameTurn) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  for (const turn of gameTurn) {
    const {square, player} = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function Game() {
  const [gameTurn, setGameTurn] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  const activePlayer = deriveActivePlayer(gameTurn)

  const gameBoard = deriveGame(gameTurn)
  
  const winner = deriveWinner(gameBoard, players)

  const hasDraw = gameTurn.length == 9 && !winner;

  function playerTurnFun(colIndex, rowIndex) {
    setGameTurn((prevValue) => {
      let playerTurn = deriveActivePlayer(prevValue)

      const updatedGameTurn = [{ square: { col: colIndex, row: rowIndex},  player: playerTurn}, ...prevValue];

      return updatedGameTurn;
    })
  }

  function handleRematch() {
    setGameTurn([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prev => {
      return {
        ...prev,
        [symbol]: newName
      }
    })
  }
  
  return (
    <section className="game-page">
      <GameInfo 
        selectedSquare={activePlayer}
        onChangeName={handlePlayerNameChange}
      />
      <GameGame 
        onSelectedSquare={playerTurnFun}
        board={gameBoard}
      />
      <Log 
        turns={gameTurn}
      />
      {(winner || hasDraw) && <GameOverScreen 
        winner={winner}
        rematch={handleRematch}
      />}
    </section>
  );
}

export default Game;