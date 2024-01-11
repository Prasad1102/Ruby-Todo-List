import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DisplayTodo from "./DisplayTodo";
import * as API from "../../utils/api";

const EditTodo = (props) => {
  let { state } = useLocation();
  console.log(state);

  const [title, setTitle] = useState(state.title);

  const handleTodoUpdate = (e) => {
    console.log(state.id);
    API.editTodo(state.id, { title: title });
    //sending id and title to api
  };

  const handleInputChange = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };

  return (
    <div>
      <form action="">
        Title{" "}
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleInputChange}
        />
        <Link
          to="/"
          onClick={(event) => {
            handleTodoUpdate(event);
          }}
        >
          Edit Todo
        </Link>
      </form>
    </div>
  );
};

export default EditTodo;
