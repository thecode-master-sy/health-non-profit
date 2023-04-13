"use client";
import { createContext, useContext, useEffect, useState } from "react";

export interface ThemeContextInterface {
  mode: string | null;
  updateMode: () => void;
}

const themeContext = createContext<ThemeContextInterface | null>(null);

export const useTheme = () => {
  return useContext(themeContext);
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  let defaultMode = "light";

  if (
    localStorage.mode === "dark" ||
    (!("mode" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    defaultMode = "dark";
  } else {
    document.documentElement.classList.remove("dark");
  }

  const [mode, setMode] = useState(defaultMode);

  useEffect(() => {
    document.documentElement.classList.add(mode);
  }, [mode]);

  const updateMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("mode", "dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mode", "light");
    }
  };

  return (
    <themeContext.Provider value={{ mode, updateMode }}>
      {children}
    </themeContext.Provider>
  );
};
