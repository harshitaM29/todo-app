import { Container, Button } from "react-bootstrap";
import classes from "./TodoItem.module.css";

const TodoDetails = (props) => {
  return (
    <Container>
      <div className={classes.description}>
        <input
          type="checkbox"
          checked={props.isCompleted}
          onChange={props.handleCompleted}
        />
        <h2>{props.des}</h2>
      </div>
      <Container className={classes.action}>
        <Button onClick={props.onRemove}>Delete</Button>
      </Container>
    </Container>
  );
};

export default TodoDetails;
