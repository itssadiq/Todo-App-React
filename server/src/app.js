const express = require("express");
const todos = require("./data/todos");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());

app.use(express.json());

const PORT = 3000;

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.post("/todos", (req, res) => {
  const body = req.body;

  todos.push({ ...body, id: todos.length + 1, completed: false });

  const filePath = path.join(__dirname, "data", "todos.json");

  fs.writeFile(filePath, JSON.stringify(todos), (err, data) => {
    return res.json({ message: "Todo Added" });
  });
});

app.patch("/todos", (req, res) => {
  const id = req.body.id;
  const edit = todos.find((todo) => {
    if (todo.id === id) {
      todo.completed = true;
    }
  });

  res.send(todos[id - 1]);

  const filePath = path.join(__dirname, "data", "todos.json");

  fs.writeFile(filePath, JSON.stringify(todos), (err, data) => {
    return res.json({ message: "Todo Added" });
  });
});

app.listen(PORT, () => {
  console.log("Server is running on Port", PORT);
});
