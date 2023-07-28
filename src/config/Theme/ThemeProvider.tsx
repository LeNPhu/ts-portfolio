import React, { useState } from "react";
import ThemeContext, { Theme } from "./ThemeContext";
interface ThemeProviderProps {
  children: React.ReactNode;
}
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themes, setTheme] = useState<Theme>(Theme.Light);

  return (
    <ThemeContext.Provider value={{ themes, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
