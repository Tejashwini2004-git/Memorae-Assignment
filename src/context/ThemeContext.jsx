import React, { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    const s = localStorage.getItem("theme");
    return s ? JSON.parse(s) : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(dark));
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
