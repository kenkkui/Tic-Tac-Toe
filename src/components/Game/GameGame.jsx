import React from 'react';
import "./GameBoard.css"



function GameGame({ onSelectedSquare, board }) {
  return (
    <div className="game">
      <main className='game-board'>
        {board.map((row, rowIndex) => <div className='row' key={rowIndex}>
          {row.map((playerSymbol, columnIndex) => <div className='column' key={columnIndex}>
            <button className='check-box' 
              onClick={() => onSelectedSquare(columnIndex, rowIndex)}
              disabled={playerSymbol !== null}
            >
              {playerSymbol}
            </button>
          </div>)}
        </div>)}
      </main>
    </div>
  );
}

export default GameGame;