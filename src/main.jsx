import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import "./styles/zelda-test.css";
import "./styles/opening.css";
import "./styles/case-select.css";
import "./styles/case-page-terminal.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
