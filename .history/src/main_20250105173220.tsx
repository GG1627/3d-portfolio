import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes } from "react-router-dom"; // Import BrowserRouter for routing
import "./index.css";
import App from "./App";
import WelcomeScreen from "./WelcomeScreen";

// Create the root of your React app and set up routing
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <WelcomeScreen />

      <Routes></Routes>
    </BrowserRouter>
  </StrictMode>
);
