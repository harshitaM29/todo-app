import React, { useState } from "react";
import classes from "./NewTodo.module.css";
import { Form, Container, Button } from "react-bootstrap";

const AddTodo = (props) => {
  const [enteredDes, setEnteredDes] = useState("");
  const updateDes = (e) => {
    setEnteredDes(e.target.value);
  };
  const addTodo = (e) => {
    e.preventDefault();
    props.onSaveTodoData({
      description: enteredDes,
      isCompleted: false,
    });
    setEnteredDes("");
    props.onCancel();
  };

  const cancelForm = (e) => {
    props.onCancel();
  };
  return (
    <Form onSubmit={addTodo}>
      <Container className={classes.controls}>
        <Form.Group className={classes.control} controlId="description">
          <Form.Label>TODO Description</Form.Label>
          <Form.Control type="text" value={enteredDes} onChange={updateDes} />
        </Form.Group>
      </Container>
      <Container className={classes.actions}>
        <Button type="button" onClick={cancelForm}>
          Cancel
        </Button>
        <Button type="submit">Add</Button>
      </Container>
    </Form>
  );
};

export default AddTodo;
