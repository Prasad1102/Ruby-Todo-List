import React from "react";
import * as API from "../../utils/api";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const CompleteTodo = () => {
  const location = useLocation();
  const completedTodos = location.state?.completed || [];

  const handleDelete = (id) => {
    API.deleteTodo(id);
  };

  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <br />
      {completedTodos.length > 0 ? (
        <div>
          <p>This is Completed Todos from CompletedTodo.jsx</p>
          {completedTodos.map((todo) => (
            <div key={todo.id}>
              <p>ID: {todo.id}</p>
              <p>Title: {todo.title}</p>
              <p>Body: {todo.body}</p>
              <p>Created At: {todo.created_at}</p>
              <p>Updated At: {todo.updated_at}</p>
              <Link to="/" onClick={() => handleDelete(todo.id)}>
                Destroy This Todo{" "}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No completed todos found</p>
      )}
    </>
  );
};

export default CompleteTodo;
