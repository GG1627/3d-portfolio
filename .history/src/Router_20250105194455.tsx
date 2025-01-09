import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import WelcomeScreen from "./WelcomeScreen";

function Router() {
  return (
    <BrowserRouter>
      <WelcomeScreen />
      <Routes>
        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
