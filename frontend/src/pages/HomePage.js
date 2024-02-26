import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Fragment } from "react";
import NewTodo from "../components/NewTodo/NewTodo";
import TodoContext from "../context/todo-context";
import LoginContext from "../context/login-context";
import { useHistory } from "react-router-dom";
import TodoList from "../components/TodoList/TodoList";

const HomePage = () => {
  const todoCtx = useContext(TodoContext);
  const loginCtx = useContext(LoginContext);
  const history = useHistory();
  const todoList = todoCtx.todoList;
  const token = localStorage.getItem("token");

  useEffect(() => {
    todoCtx.fetchAllTodo(token);
  }, []);

  const addTodoHandler = (todo) => {
    todoCtx.addTodo(todo, token);
  };
  const logoutHandler = () => {
    loginCtx.logout();
    history.replace("/");
  };
  return (
    <Fragment>
      <Button
        style={{
          marginLeft: "90%",
          marginBottom: "3rem",
          marginTop: "1rem",
          backgroundColor: "teal",
        }}
        onClick={logoutHandler}
      >
        Logout
      </Button>
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todoList.length !== 0 ? todoList : ""} />
    </Fragment>
  );
};

export default HomePage;
