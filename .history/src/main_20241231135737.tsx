import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Edit from "./Edit.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Edit />
  </StrictMode>
);