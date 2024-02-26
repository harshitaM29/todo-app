import classes from "./NewTodo.module.css";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import AddTodo from "./AddTodo";

const NewTodo = (props) => {
  const [isShown, setIsShown] = useState(false);
  const saveTodoHandler = (enteredTodoData) => {
    const todoData = {
      ...enteredTodoData,
    };
    props.onAddTodo(todoData);
  };
  const openForm = () => {
    setIsShown(true);
  };

  const closeForm = () => {
    setIsShown(false);
  };
  return (
    <Card className={classes.todo}>
      {!isShown && <Button onClick={openForm}>Add Expense</Button>}
      {isShown && (
        <AddTodo onSaveTodoData={saveTodoHandler} onCancel={closeForm} />
      )}
    </Card>
  );
};

export default NewTodo;
