import React, { useEffect, useState } from "react";
import * as API from "../../utils/api";
import styles from "./Index.module.css";
import TodoTable from "./TodoTable";
import Paginate from "./Paginate";
import EditTodo from "./EditTodo";
import { Link } from "react-router-dom";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 3;

  useEffect(() => {
    fetchTodos();
  }, [currentPage]);

  const fetchTodos = () => {
    console.log(currentPage, perPage);
    API.getTodos({ page: currentPage, per_page: perPage })
      .then((response) => {
        setTodos(response.data.todos);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <p>{console.log(todos)}</p>
      <Link to="/NewTodo" className={styles.newTodo}>
        New Todo
      </Link>

      <Link
        to="/CompleteTodo"
        className={styles.completeTodo}
        state={{ completed: todos.filter((todo) => todo.completed) }}
      >
        Completed Todo
      </Link>

      <TodoTable todos={todos} setTodos={setTodos}></TodoTable>

      <Paginate
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        fetchTodos={fetchTodos}
        todos={todos}
      />
    </>
  );
};

export default Index;
