/**
 * @file main.jsx
 * @author Alex Kachur
 * @since 2025-09-29
 * @purpose Bootstraps the React application and applies global styles.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./styles/base.css";

// Grab the root DOM node created by Vite's index.html
const rootEl = document.getElementById("root");

// Create a React root and render our App.
// React.StrictMode helps catch common problems in development.
createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>
);
