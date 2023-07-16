import React from "react";
import cheems from "../img/cheems.png";
import { useTransition, animated } from "@react-spring/web";
import { createPortal } from "react-dom";

function TextGlobe({ show, text, close }) {
  const transition = useTransition(show, {
    from: { x: 100, y: 500, opacity: 0 },
    enter: { y: 200, x: 50, opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <>
      {transition(
        (style, item) =>
          item && (
            <animated.div style={style} className="position-absolute">
              <div className="response-container">
                <div className="text-globe">
                  <textarea readOnly value={text} />
                </div>
                <img src={cheems} width="300px" />
                <button onClick={close}>cerrar</button>
              </div>
            </animated.div>
          )
      )}
    </>
  );
}

export default TextGlobe;
