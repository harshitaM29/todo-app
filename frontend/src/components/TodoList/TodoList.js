import { Card } from "react-bootstrap";
import classes from "./TodoList.module.css";
import { Fragment } from "react";
import TodoItem from "./TodoItem";
const TodoList = (props) => {
  let data = Object.values(props.items || []);

  return (
    <Fragment>
      <Card className={classes.list}>
        <ul>
          {data.map((key) => (
            <TodoItem
              key={key._id}
              des={key.description}
              id={key._id}
              isCompleted={key.isCompleted}
            />
          ))}
        </ul>
      </Card>
    </Fragment>
  );
};

export default TodoList;
