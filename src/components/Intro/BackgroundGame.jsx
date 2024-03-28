import React from 'react';
import frame from "../../assets/TIfull-board.png"


function BackgroundGame() {
  return (
    <section className='illustration-wrapper'>
      <div className='game-intro-illustration'>
        <img src={frame} alt="frame" draggable="false" />
      </div>
    </section>
  );
}

export default BackgroundGame;