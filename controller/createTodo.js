const Todo = require("../models/todo");

exports.createTodo = async (req, res) => {
  const { title, description } = req.body;
  const response = await Todo.create({ title, description });
  res.status(200).json({ msg: "created todo sucessfully" });
};
