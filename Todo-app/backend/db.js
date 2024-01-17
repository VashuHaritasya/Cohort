const mongoose = require("mongoose");
// mongodb+srv://admin:vashuharitasya@cluster0.58zbnty.mongodb.net/todos
mongoose.connect(
  "mongodb+srv://admin:vashuharitasya@cluster0.58zbnty.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo,
};
