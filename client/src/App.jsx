import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import InputPage from "./pages/InputPage";
import WelcomePage from "./pages/WelcomePage";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      // TODO: Add error handling here.
      const todos = await fetch("http://localhost:3000/todos");

      const data = await todos.json();

      setTodos(data);
    }

    fetchTodos();
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="home" element={<HomePage todos={todos} />} />
        <Route path="input" element={<InputPage />} />
      </Routes>
    </>
  );
}

export default App;
