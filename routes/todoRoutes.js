// Get All Todos
// app.get("/todos", (req, res) => {
//   res.json({ data: todos, status: "success" });
// });

const express = require("express");
const todoRouter = express.Router();

const { fetchTodos, getTodoById, createTodo, updateTodo, deleteTodo } = require("../Controllers/todosController");
const authVerify = require("../middlewares/auth");


todoRouter.get("/", authVerify ,fetchTodos);
  
  
  
  // Get Single Todo by ID
  // app.get("/todos/:id", (req, res) => {
  //   const todo = todos.find((t) => t.id == req.params.id);
  //   if (todo) {
  //     res.json({ data: todo, status: "success" });
  //   } else {
  //     res.status(404).json({ message: "Todo not found" });
  //   }
  // });
  todoRouter.get("/:id",authVerify, getTodoById); 
  
  
  
  // Create a New Todo
  // app.post("/todos/create", (req, res) => {
  //   const newTodo = {
  //     id: todos.length + 1,
  //     title: req.body.title,
  //     description: req.body.description,
  //   };
  //   todos.push(newTodo);
  //   res.status(201).json({ data: newTodo, status: "success" });
  // });
  todoRouter.post("/create", authVerify ,createTodo);
  
  
  
  
  // Update a Todo by ID
  // app.put("/todos/update/:id", (req, res) => {
  //   let todo = todos.find((t) => t.id == req.params.id);
  //   if (todo) {
  //     todo.title = req.body.title || todo.title;
  //     todo.description = req.body.description || todo.description;
  //     res.json({ data: todo, status: "success" });
  //   } else {
  //     res.status(404).json({ message: "Todo not found" });
  //   }
  // });
  todoRouter.put("/update/:id",authVerify,updateTodo);
  
  
  
  
  // Delete a Todo by ID
  // app.delete("/todos/delete/:id", (req, res) => {
  //   let index = todos.findIndex((t) => t.id == req.params.id);
  //   if (index !== -1) {
  //     todos.splice(index, 1);
  //     res.json({ message: "Todo deleted successfully", status: "success" });
  //   } else {
  //     res.status(404).json({ message: "Todo not found" });
  //   }
  // });
  todoRouter.delete("/delete/:id",deleteTodo);
  
  module.exports = todoRouter;