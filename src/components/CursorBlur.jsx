import React, { useEffect, useRef } from 'react';
import "./Gradient.css"

function CursorBlur() {
  const cursorBlur = useRef();
  
  useEffect(() => {
    if (cursorBlur) {
      const element = cursorBlur.current;

      document.body.onpointermove = e => {
        const { clientX, clientY } = e;

        element.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, {
          duration: 2000,
          fill: "forwards"
        })
      }
    }
  }, [])

  return (
    <>
      <div className="cursor-blur" ref={cursorBlur}></div>
    </>
  );
}


export default CursorBlur;