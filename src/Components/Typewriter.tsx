/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const CONSTANTS = {
  DELETING_SPEED: 30,
  TYPING_SPEED: 150,
};

interface TypeWriterProps {
  messages: string[];
  heading: string;
}

export default function TypeWriter(props: TypeWriterProps) {

  const {messages, heading} = props;

  const [state, setState] = useState({
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: CONSTANTS.TYPING_SPEED,
  });

  useEffect(() => {
    let timer:any;
    const handleType = () => {
      setState((cs) => ({
        ...cs, // cs means currentState
        text: getCurrentText(cs),
        typingSpeed: getTypingSpeed(cs),
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [state.isDeleting]);

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message) {
      setTimeout(() => {
        setState((cs) => ({
          ...cs,
          isDeleting: true,
        }));
      }, 500);
    } else if (state.isDeleting && state.text === "") {
      setState((cs) => ({
        ...cs, // cs means currentState
        isDeleting: false,
        loopNum: cs.loopNum + 1,
        message: getMessage(cs, messages),
      }));
    }
  }, [state.text, state.message, state.isDeleting, messages]);

  function getCurrentText(currentState:any) {
    return currentState.isDeleting
      ? currentState.message.substring(0, currentState.text.length - 1)
      : currentState.message.substring(0, currentState.text.length + 1);
  }

  function getMessage(currentState:any, messages:any) {
    return messages[Number(currentState.loopNum) % Number(messages.length)];
  }

  function getTypingSpeed(currentState:any) {
    return currentState.isDeleting
      ? CONSTANTS.TYPING_SPEED
      : CONSTANTS.DELETING_SPEED;
  }

  return (
    <h1 className="typewriter">
      <span>{state.text}</span>
      <span id="cursor" />
    </h1>
  );
}
