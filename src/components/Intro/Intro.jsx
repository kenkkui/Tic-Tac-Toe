import React, { useState, useRef } from 'react';
import "./Intro.css";

import IntroContent from '../Intro/IntroContent';
import BackgroundGame from '../Intro/BackgroundGame';


function Intro() {
  const [animationDone, setAnimationDone] = useState(false);
  const introPage = useRef();

  if (animationDone && introPage) {
    const element = introPage.current;

    element.animate({
      opacity: 0,
      filter: "blur(8px)",
      translate: "2% 0%",
    }, {
      duration: 700,
      fill: "forwards",
      easing: "cubic-bezier(0, 0, 0, 1)"
    })
  }

  return (
    <div className='intro-page' ref={introPage}>
      <BackgroundGame />
      <IntroContent 
        onAnimationDone={setAnimationDone}
      />
    </div>
  );
}
 
 export default Intro;