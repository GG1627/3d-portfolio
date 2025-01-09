import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import WelcomeScreen from "./WelcomeScreen";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
