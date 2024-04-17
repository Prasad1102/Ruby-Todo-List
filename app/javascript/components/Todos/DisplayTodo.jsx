import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const DisplayTodo = (props) => {
  const location = useLocation();
  const { todos, id } = location.state || {};
  let { state } = useLocation();
  console.log(state);
  return (
    <>
      {todos && (
        <div>
          <p>
            This is DisplayTodo.jsx{" "}
            {console.log("welcome to DisplayTodo.jsx" + todos, id)}
          </p>
          <p>ID: {todos.id}</p>
          <p>Title: {todos.title}</p>
          <p>Body: {todos.body}</p>
          <p>Created At: {todos.created_at}</p>
          <p>Updated At: {todos.updated_at}</p>
        </div>
      )}
      <Link to="/">Home</Link>
    </>
  );
};

export default DisplayTodo;
