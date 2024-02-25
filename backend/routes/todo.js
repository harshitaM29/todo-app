const express = require("express");

const router = express.Router();

const userAuthentication = require("../middleware/authenticate");
const todoController = require("../controller/todo");

router.get("/todo", userAuthentication.authenticate, todoController.getTodo);

router.post(
  "/todo",
  userAuthentication.authenticate,
  todoController.postTodoData
);
router.put(
  "/change/:id",
  userAuthentication.authenticate,
  todoController.changeIsCompleted
);

router.delete(
  "/todo-delete/:id",
  userAuthentication.authenticate,
  todoController.deleteTodo
);

module.exports = router;
