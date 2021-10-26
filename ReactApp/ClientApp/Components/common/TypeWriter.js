import React, { useState, useEffect } from "react";

function TypeWriter({ message, classes, typingSpeed = 300 }) {
  const [state, setState] = useState({
    text: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: typingSpeed,
  });

  useEffect(() => {
    let timer = "";
    const handleType = () => {
      setState((cs) => ({
        ...cs, // cs means currentState
        text: getCurrentText(cs),
        typingSpeed: typingSpeed,
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [message]);

  
  function getCurrentText(currentState) {
    return currentState.isDeleting
      ? message.substring(0, currentState.text.length - 1)
      : message.substring(0, currentState.text.length + 1);
  }

  return <span className={classes}>{state.text}</span>;
}

export default TypeWriter;
