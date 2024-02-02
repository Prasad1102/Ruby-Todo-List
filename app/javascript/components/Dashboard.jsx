import React, { useState, useEffect } from "react";
import Index from "./Todos/Index";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EditTodo from "./Todos/EditTodo";
import DisplayTodo from "./Todos/DisplayTodo";
import NewTodo from "./Todos/NewTodo";
import CompleteTodo from "./Todos/CompleteTodo";

const DashBoard = () => {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/EditTodo" element={<EditTodo />} />
            <Route path="/CompleteTodo" element={<CompleteTodo />} />
            <Route path="/DisplayTodo" element={<DisplayTodo />} />
            <Route path="/NewTodo" element={<NewTodo />} />
            <Route path="/" element={<Index />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default DashBoard;
