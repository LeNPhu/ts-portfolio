import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "animate.css/animate.min.css";
import ThemeProvider from "./config/Theme/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
