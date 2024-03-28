import React, {useState} from 'react';
import "./GameOverScreen.css"

function GameOverScreen({ winner, rematch }) {
  const [render, setRender] = useState(false);

  setTimeout(() => {
    setRender(prev => !prev)
  }, 5000)
  return (
    <section id="game-over-screen" onClick={rematch}>
      {winner && <main className="game-over">
        <span>{winner}</span> has Won!
      </main>}
      {!winner && <main className='game-over'>Draw! No one won</main>}

      
      {render && <div className="continue">Click anywhere to <u>rematch</u></div>}
    </section>
  );
}

export default GameOverScreen;