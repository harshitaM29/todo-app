import { useContext } from "react";
import TodoDetails from "./TodoDetails";
import TodoContext from "../../context/todo-context";
const TodoItem = (props) => {
  const token = localStorage.getItem("token");
  const todoCtx = useContext(TodoContext);
  const handleCompleted = (id, isCompleted) => {
    todoCtx.markAsCompleted(id, !isCompleted, token);
  };

  const deleteTodo = (id) => {
    todoCtx.deleteTodo(id, token);
  };
  return (
    <li>
      <TodoDetails
        id={props.id}
        des={props.des}
        isCompleted={props.isCompleted}
        handleCompleted={() => handleCompleted(props.id, props.isCompleted)}
        onRemove={deleteTodo.bind(null, props.id)}
      />
    </li>
  );
};

export default TodoItem;
