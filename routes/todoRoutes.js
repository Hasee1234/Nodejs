// Get All Todos
// app.get("/todos", (req, res) => {
//   res.json({ data: todos, status: "success" });
// });
app.get("/todos", authVerify ,);
  
  
  
  // Get Single Todo by ID
  // app.get("/todos/:id", (req, res) => {
  //   const todo = todos.find((t) => t.id == req.params.id);
  //   if (todo) {
  //     res.json({ data: todo, status: "success" });
  //   } else {
  //     res.status(404).json({ message: "Todo not found" });
  //   }
  // });
  app.get("/todos/:id",authVerify, async (req, res) => {
    try {
      const todo = await Todo.findById(req.params.id); // Find by MongoDB ID
      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }
      res.json({ data: todo, status: "success" });
    } catch (error) {
      res.status(500).json({ status: "error", error: error.message });
    }
  }); 
  
  
  
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
  app.post("/todos/create", authVerify ,async (req, res) => {
    try {
      const { title, description } = req.body;
      const newTodo = new Todo({ title, description });
      await newTodo.save(); // Save todo to MongoDB
      res.status(201).json({ data: newTodo, status: "success" });
    } catch (error) {
      res.status(500).json({ status: "error", error: error.message });
    }
  });
  
  
  
  
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
  app.put("/todos/update/:id", async (req, res) => {
    try {
      const { title, description, completed } = req.body;
      const updatedTodo = await Todo.findByIdAndUpdate(
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
  });
  
  
  
  
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
  app.delete("/todos/delete/:id", async (req, res) => {
    try {
      const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
      if (!deletedTodo) {
        return res.status(404).json({ message: "Todo not found" });
      }
      res.json({ message: "Todo deleted successfully", status: "success" });
    } catch (error) {
      res.status(500).json({ status: "error", error: error.message });
    }
  });
  