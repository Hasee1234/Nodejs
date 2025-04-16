// controllers are the function of request the code start from async   
const Todos=require("../models/TodoModel")
const fetchTodos=async (req, res) => {
    try {
      const todos = await Todos.find(); // Fetch all todos from MongoDB
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
  module.exports={
    fetchTodos,
  }