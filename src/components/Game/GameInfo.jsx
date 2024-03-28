import React from 'react';
import Player from './Player';

function GameInfo({ selectedSquare, onChangeName }) {
  return (
    <div className="game-info highlight-turn">
      <Player
        id="player-one"
        player="Player one"
        symbol="X"
        selectedSquare={selectedSquare}
        onChangeName={onChangeName}
      />
      <Player
        id="player-two"
        player="Player two"
        symbol="O"
        selectedSquare={selectedSquare}
        onChangeName={onChangeName}
      />
    </div>
  );
}

export default GameInfo;