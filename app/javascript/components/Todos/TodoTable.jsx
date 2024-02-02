import React from "react";
import * as API from "../../utils/api";
import styles from "./Index.module.css";
import EditTodo from "./EditTodo";
import DisplayTodo from "./DisplayTodo";
import { Link } from "react-router-dom";

const TodoTable = ({ todos, setTodos }) => {
  const handleCheckBoxChange = (id, checked) => {
    API.editTodo(id, { completed: checked }).then((response) => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: checked } : todo
        )
      );
    });
  };

  return (
    <>
      <table className={styles.table}>
        <thead className={styles.tablehead}>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Buttons</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody className={styles.tablebody}>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>
                <Link
                  to="/EditTodo"
                  styles={{ "text-decoration": "linethrough" }}
                  state={{ id: todo.id, title: todo.title }}
                >
                  Edit_{" "}
                </Link>
                <Link to="/DisplayTodo" state={{ todos: todo, id: todo.id }}>
                  Display
                </Link>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) =>
                    handleCheckBoxChange(todo.id, e.target.checked)
                  }
                />
              </td>
              <td>{todo.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoTable;
