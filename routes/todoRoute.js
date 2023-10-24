const express = require("express");
const router = express.Router();

const { createTodo } = require("../controller/createTodo");
const { getTodo, getById } = require("../controller/getTodo");
const { putTodo } = require("../controller/putTodo");
const { deleteById } = require("../controller/deleteById");

router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getById);
router.put("/putTodo/:id", putTodo);
router.delete("/delete/:id", deleteById);

module.exports = router;
