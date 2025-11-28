const express = require("express");
const todos = require("./data/todos");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 3000;

app.use("/todos", (req, res) => {
  res.send(todos);
});

app.listen(PORT, () => {
  console.log("Server is running on Port", PORT);
});
