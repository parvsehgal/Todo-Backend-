const Todo = require("../models/todo");

exports.deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ msg: "deletion sucessfull" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "deletion failed" });
  }
};
