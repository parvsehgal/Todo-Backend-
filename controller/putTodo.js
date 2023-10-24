const Todo = require("../models/todo");

exports.putTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { id } = req.params;
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, createdAt: Date.now() }
    );
    res.status(200).json({ msg: "sucess", data: todo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "updation failed" });
  }
};
