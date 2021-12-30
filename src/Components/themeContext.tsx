import React, { useState, FC, useContext, useEffect } from "react";
import { IThemeContext } from "../interface";
import { getSessionStorageOrDefault } from "./SessionStorage";

const userTheme =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
export const useThemeContext = () => useContext(ThemeContext);
export const ThemeContext = React.createContext<IThemeContext>({
  dark: userTheme,
});

export const ThemeProvider: FC = ({ children }) => {
  const [dark, setDark] = useState(getSessionStorageOrDefault("dark", false));

  useEffect(() => {
    if (!sessionStorage.getItem("dark")) {
      sessionStorage.setItem("dark", JSON.stringify(userTheme || false));
      setDark(userTheme);
    }
  }, []);

  useEffect(() => {
    changeTheme();
    setSessionStorage("dark", dark);
  }, [dark]);

  const setSessionStorage = (key: string, value: boolean | string) => {
    sessionStorage.setItem(key, JSON.stringify(value));
    // setDark(userTheme);
  };

  const changeTheme = () => {
    if (dark) {
      document.body.style.backgroundColor = "black";
      document.querySelector(".App")?.classList.add("dark-mode");
      document.querySelector(".App")?.classList.remove("light-mode");
    } else {
      document.body.style.backgroundColor = "white";
      document.querySelector(".App")?.classList.remove("dark-mode");
      document.querySelector(".App")?.classList.add("light-mode");
    }
  };
  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
