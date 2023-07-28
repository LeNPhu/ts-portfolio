import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Index from "./pages/Home/Index";
import { ConfigProvider, theme } from "antd";
import { createContext, Dispatch, SetStateAction } from "react";

import { Theme, useTheme } from "./config/Theme/ThemeContext";

interface ThemeContextType {
  darkTheme: boolean;

  // this is the type for state setters
  setDarkTheme: Dispatch<SetStateAction<boolean>>;
}
export const ThemeContext = createContext<ThemeContextType>({
  darkTheme: false,
  setDarkTheme: () => {}, // no-op default setter
});

function App() {
  const { themes } = useTheme();
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm:
            themes === Theme.Light
              ? theme.defaultAlgorithm
              : theme.darkAlgorithm,
        }}
      >
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Index />}></Route>
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </ConfigProvider>
    </>
  );
}

export default App;
