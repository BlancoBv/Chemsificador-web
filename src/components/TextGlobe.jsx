import React from "react";
import cheems from "../img/cheems.png";
import cheemsAngry from "../img/cheems_angry.png";
import { useTransition, animated } from "@react-spring/web";

function TextGlobe({ show, text, close, error }) {
  console.log(error);
  const screenWidth = document.body.clientWidth;
  const MIN_SCREEN_SIZE = 500;

  const transition = useTransition(show, {
    from: {
      x: screenWidth >= MIN_SCREEN_SIZE ? screenWidth / 3 : 100,
      y: 500,
      opacity: 0,
    },
    enter: {
      y: screenWidth >= MIN_SCREEN_SIZE ? 300 : 400,
      x: screenWidth >= MIN_SCREEN_SIZE ? screenWidth / 3 : 100,
      opacity: 1,
    },
    leave: {
      x: screenWidth >= MIN_SCREEN_SIZE ? screenWidth / 3 : 100,
      y: 500,
      opacity: 0,
    },
  });
  return (
    <>
      {transition(
        (style, item) =>
          item && (
            <animated.div style={style} className="position-absolute">
              <div className="response-container">
                <div className="text-globe">
                  <textarea className="resize-none" readOnly value={text} />
                </div>
                <img src={error ? cheemsAngry : cheems} width="300px" />
                <div className="response-actions">
                  <button onClick={close}>cerrar</button>
                </div>
              </div>
            </animated.div>
          )
      )}
    </>
  );
}

export default TextGlobe;
