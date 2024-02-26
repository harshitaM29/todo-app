import axios from "axios";
import TodoContext from "./todo-context";
import { useState } from "react";

const TodoContextProvider = (props) => {
  const [list, setList] = useState([]);
  const addTodo = async (data, token) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/todo`,
        data,
        {
          headers: { Authorization: token },
        }
      );
      setList([...list, response.data]);
    } catch (error) {
      throw new Error(error);
    }
  };
  const fetchAllTodo = async (token) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/todo`,
        {
          headers: { Authorization: token },
        }
      );
      setList(response.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  const markAsCompleted = async (id, isCompleted, token) => {
    try {
      const index = list.findIndex((item) => item._id === id);
      list[index].isCompleted = isCompleted;
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/change/${id}`,
        { isCompleted: isCompleted },
        {
          headers: { Authorization: token },
        }
      );
      setList([...list]);
    } catch (error) {
      throw new Error(error);
    }
  };

  const deleteTodo = async (id, token) => {
    try {
      const newList = list.filter((item) => item._id !== id);

      await axios.delete(`${process.env.REACT_APP_API_URL}/todo-delete/${id}`, {
        headers: { Authorization: token },
      });
      setList([...newList]);
    } catch (error) {
      throw new Error(error);
    }
  };
  const todoContext = {
    todoList: list,
    addTodo: addTodo,
    fetchAllTodo: fetchAllTodo,
    markAsCompleted: markAsCompleted,
    deleteTodo: deleteTodo,
  };
  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
