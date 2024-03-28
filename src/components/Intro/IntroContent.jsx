import React, { useRef, useEffect } from 'react';
import introTextDivider from "../../assets/intro-divider.jpg"

function IntroContent({ onAnimationDone }) {
  const nameElem = useRef();

  useEffect(() => {
    if (nameElem) {
      const element = nameElem.current;

      element.addEventListener('animationend', () => {
        onAnimationDone(true)
      })
    }
  }, [])

  return (
    <section className='intro-text'>
      <span className='document-title'>tic tac toe</span>
      <img src={introTextDivider} alt="|" />
      <span className='my-name' ref={nameElem}>Kenzo Bunyi</span>
    </section>
  );
}

export default IntroContent;