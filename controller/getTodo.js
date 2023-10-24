const Todo = require("../models/todo");

exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({ msg: "got sucessfully", data: todos });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "faild to get todos" });
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });
    res.status(200).json({
      msg: "found sucessfully",
      data: todo,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "not found",
    });
  }
};
