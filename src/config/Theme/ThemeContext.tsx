import { createContext, useContext } from "react";

export enum Theme {
  Light = "light",
  Dark = "dark",
}

interface ThemeContextProps {
  themes: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  themes: Theme.Dark,
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
