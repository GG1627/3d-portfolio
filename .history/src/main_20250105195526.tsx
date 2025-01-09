import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Router.tsx";
import App from "./App.tsx";
import WelcomeScreen from "./WelcomeScreen.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WelcomeScreen />
    {/* <App /> */}
  </StrictMode>
);
