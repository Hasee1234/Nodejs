const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Title is required
  },
  description: {
    type: String,
    required: true, // Description is required
  },
  completed: {
    type: Boolean,
    default: false, // By default, a todo is not completed
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set creation date
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
