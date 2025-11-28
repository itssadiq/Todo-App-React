import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import InputPage from "./pages/InputPage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="input" element={<InputPage />} />
      </Routes>
    </>
  );
}

export default App;
