import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "./components/CoolContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
