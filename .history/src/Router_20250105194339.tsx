import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import WelcomeScreen from "./WelcomeScreen";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <WelcomeScreen />
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
