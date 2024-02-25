const Todo = require("../models/todo");

exports.getTodo = async (req, res) => {
  try {
    const TODO = await Todo.find({ userId: req.user._id });
    res.status(200).json(TODO);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.postTodoData = async (req, res) => {
  const { description, isCompleted } = req.body;
  try {
    const todoData = new Todo({
      description,
      isCompleted,
    });
    await Todo.save();
    res.status(201).json(todoData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.changeIsCompleted = async (req, res) => {
  const id = req.params.id;
  const isCompleted = req.body.isCompleted;
  try {
    const todo = await Todo.findOne({
      _id: id,
    });
    if (todo) {
      await todo.updateOne({ isCompleted: isCompleted });
    }
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.deleteTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const todoData = await Todo.findByIdAndDelete({ _id: id });
    res.status(200).json(todoData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
