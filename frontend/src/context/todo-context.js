import React from "react";

const TodoContext = React.createContext({
  todoList: [],
  addTodo: () => {},
  markAsCompleted: () => {},
  fetchAllTodo: () => {},
  deleteTodo: () => {},
});

export default TodoContext;
