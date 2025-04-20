// controllers are the function of request the code start from async   
const Todos=require("../models/TodoModel")

const fetchTodos=async (req, res) => {
    try {
      let todos = await Todos.find(); // Fetch all todos from MongoDB
      res.json({
         data: todos,
          status: "success"
         });
    } catch (error) {
      res.status(500).json({ 
        data:[],
        status: "error",
         error: error.message 
        });
    }
  }

const getTodoById=async (req, res) => {
    try {
      const todo = await Todos.findById(req.params.id); // Find by MongoDB ID
      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }
      res.json({ data: todo, status: "success" });
    } catch (error) {
      res.status(500).json({ status: "error", error: error.message });
    }
  }

const createTodo=async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTodo = new Todos({ title, description });
    await newTodo.save(); // Save todo to MongoDB
    res.status(201).json({ data: newTodo, status: "success" });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
}

const updateTodo= async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const updatedTodo = await Todos.findByIdAndUpdate(
      req.params.id,
      { title, description, completed },
      { new: true } // Returns updated document
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json({ data: updatedTodo, status: "success" });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
}

const deleteTodo= async (req, res) => {
  try {
    const deletedTodo = await Todos.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json({ message: "Todo deleted successfully", status: "success" });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
}

  module.exports={
    fetchTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
  }