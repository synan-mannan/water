import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark"); // Force light theme
  }, []);

  const noOp = () => {}; // Disable toggle
  return [false, noOp];
};
