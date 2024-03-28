import React, { useState } from 'react';

function Player({ player, symbol, id, selectedSquare, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [savedName, setSavedName] = useState("");

  function handleChange(e) {
    setSavedName(e.target.value)
  }
  
  function handleClick() {
    setIsEditing(prev => !prev);

    if (isEditing) {
      onChangeName(symbol, savedName)
    }
  }

  let playerName = <input type="text" placeholder={player} className='name input' style={{border: "1px solid rgba(255, 255, 255, 0)"}} readOnly /> ;

  if (isEditing) {
    playerName = <input type="text" placeholder={player} className='name input editing' value={savedName} onChange={handleChange} maxLength="10" required />
  }

  return (
    <div id={id} className={selectedSquare === symbol ? "active" : undefined}>
      <div className="player-wrapper">
        <span>
          {playerName}
          <span className="symbol">{symbol}</span>
        </span>

        <button className={`${isEditing ? "save" : "edit"}`} onClick={handleClick}>{isEditing ? "save" : "edit"}</button>
      </div>
    </div>
  );
}

export default Player;