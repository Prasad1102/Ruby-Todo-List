import React, { useState } from "react";
import * as API from "./../../utils/api";
import { Link } from "react-router-dom";
import Index from "./Index";

const NewTodo = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState(0);

  const newTodo = {
    title: title,
    body: body,
    priority: priority,
  };

  const handleTodoCreate = () => {
    API.createTodo({ todo: newTodo }).then((response) => {
      console.log(response);
    });
  };

  const handleInputTitle = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };

  const handleInputBody = (event) => {
    setBody(event.target.value);
    console.log(body);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
    console.log(priority);
  };

  return (
    <>
      <input
        type="text"
        id="title"
        value={title}
        onChange={handleInputTitle}
        placeholder="Title :"
      />
      <input
        type="text"
        id="body"
        value={body}
        onChange={handleInputBody}
        placeholder="Body :"
      />
      <input
        type="number"
        id="priority"
        value={priority}
        onChange={handlePriorityChange}
        placeholder="Priority :"
      />
      <Link to="/" onClick={handleTodoCreate}>
        Add Todo
      </Link>
    </>
  );
};

export default NewTodo;
