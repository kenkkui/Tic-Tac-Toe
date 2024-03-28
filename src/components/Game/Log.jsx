import React from 'react';
import "./Log.css"

function Log({ turns }) {
  return (
    <div id='log-container'>
      {turns.map((turn, i) => {
        return <div key={`${turn.square.row}${turn.square.col}`} id='log'>{turn.player} selected {turn.square.row},{turn.square.col}</div>
      })}
    </div>
  );
}

export default Log;