import React, { useEffect, useState } from 'react';
import "./App.css"

import Game from './components/Game/Game';
import Intro from './components/Intro/Intro';
import CursorBlur from './components/CursorBlur';

const toRender = [
  <CursorBlur />,
  <Game />
]

function App() {
  const [ renderTimer, setRenderTimer ] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderTimer(prevValue => !prevValue)
    }, 2800)

    return () => clearTimeout(timer);
  }, [])

  return (
    <>
      {renderTimer ? <Intro /> : toRender}
    </>
  );
}

export default App;