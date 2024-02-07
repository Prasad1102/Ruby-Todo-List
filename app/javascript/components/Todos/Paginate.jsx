import React, { useState } from "react";

const Paginate = ({ currentPage, setCurrentPage, fetchTodos, todos }) => {
  const [pageInput, setPageInput] = useState(1);
  const changePage = (page) => {
    if (page >= 1 && todos.length > 0) {
      setCurrentPage(page);
      fetchTodos();
    }
  };

  const handlePageInput = (event) => {
    setPageInput(event.target.value);
  };

  return (
    <>
      <div>
        <button onClick={() => changePage(currentPage - 1)}>Prev</button>
        ...
        <button
          onClick={() => {
            changePage(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            changePage(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            changePage(3);
          }}
        >
          3
        </button>
        ...
        <button onClick={() => changePage(currentPage + 1)}>Next</button>
      </div>
      <input
        type="number"
        value={pageInput}
        placeholder="Enter a Page Number to Check"
        onChange={handlePageInput}
      />
      <button
        onClick={() => {
          changePage(pageInput);
        }}
      >
        Submit
      </button>
    </>
  );
};

export default Paginate;
