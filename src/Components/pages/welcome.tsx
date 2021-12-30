/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC } from "react";
import { RouterProps } from "../../interface";
import {
  LARGE_LOGO_Black,
  LARGE_LOGO_White,
  typeWriterMessages,
} from "../constants";
import TextButton from "../textButton";
import { ToggleDarkMode } from "../ToggleDarkMode";
import { useThemeContext } from "../themeContext";
const { useState, useEffect } = React;
const CONSTANTS = {
  DELETING_SPEED: 30,
  TYPING_SPEED: 150,
};

// static contextType = ThemeContext;

const TypeWriter: FC<RouterProps> = ({ setShowNav }) => {
  const messages = typeWriterMessages();
  const { dark } = useThemeContext();
  const [state, setState] = useState({
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: CONSTANTS.TYPING_SPEED,
  });

  useEffect(() => {
    setShowNav(false);
  }, []);

  useEffect(() => {
    let timer: any;
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

  function getCurrentText(currentState: any) {
    return currentState.isDeleting
      ? currentState.message?.substring(0, currentState.text.length - 1)
      : currentState.message?.substring(0, currentState.text.length + 1);
  }

  function getMessage(currentState: any, data: any) {
    if (!currentState || !data) return;
    return data[Number(currentState.loopNum) % Number(data.length)];
  }

  function getTypingSpeed(currentState: any) {
    return currentState.isDeleting
      ? CONSTANTS.TYPING_SPEED
      : CONSTANTS.DELETING_SPEED;
  }

  return (
    <>
      <div className="welcome-wrapper">
        <img
          className="welcome-logo"
          src={dark ? LARGE_LOGO_White : LARGE_LOGO_Black}
          alt="DA Logo"
        ></img>
        <h1 className="typewriter">
          <span>{state.text}</span>
          <span id="cursor" />
        </h1>
        <div className="learn-more">
          <TextButton text={"Learn More"} link={"/about"} />
        </div>
        <ToggleDarkMode />
      </div>
    </>
  );
};

export default TypeWriter;
