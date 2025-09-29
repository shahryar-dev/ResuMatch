/**
 * File: src/main.jsx
 * Purpose: App entry; mounts <App /> to the DOM.
 * Author: Alex Kachur
 * Date: 2025-09-29
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Grab the root DOM node created by Vite's index.html
const rootEl = document.getElementById("root");

// Create a React root and render our App.
// React.StrictMode helps catch common problems in development.
createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>
);
