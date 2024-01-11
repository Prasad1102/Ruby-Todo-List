(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["app_javascript_components_sync_recursive_"],{

/***/ "./app/javascript/components sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./app/javascript/components/ sync ^\.\/.*$ ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./Dashboard": "./app/javascript/components/Dashboard.jsx",
	"./Dashboard.jsx": "./app/javascript/components/Dashboard.jsx",
	"./Todos/CompleteTodo": "./app/javascript/components/Todos/CompleteTodo.jsx",
	"./Todos/CompleteTodo.jsx": "./app/javascript/components/Todos/CompleteTodo.jsx",
	"./Todos/DisplayTodo": "./app/javascript/components/Todos/DisplayTodo.jsx",
	"./Todos/DisplayTodo.jsx": "./app/javascript/components/Todos/DisplayTodo.jsx",
	"./Todos/EditTodo": "./app/javascript/components/Todos/EditTodo.jsx",
	"./Todos/EditTodo.jsx": "./app/javascript/components/Todos/EditTodo.jsx",
	"./Todos/Index": "./app/javascript/components/Todos/Index.jsx",
	"./Todos/Index.jsx": "./app/javascript/components/Todos/Index.jsx",
	"./Todos/Index.module.css": "./app/javascript/components/Todos/Index.module.css",
	"./Todos/NewTodo": "./app/javascript/components/Todos/NewTodo.jsx",
	"./Todos/NewTodo.jsx": "./app/javascript/components/Todos/NewTodo.jsx",
	"./Todos/Paginate": "./app/javascript/components/Todos/Paginate.jsx",
	"./Todos/Paginate.jsx": "./app/javascript/components/Todos/Paginate.jsx",
	"./Todos/TodoTable": "./app/javascript/components/Todos/TodoTable.jsx",
	"./Todos/TodoTable.jsx": "./app/javascript/components/Todos/TodoTable.jsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/javascript/components sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./app/javascript/components/Dashboard.jsx":
/*!*************************************************!*\
  !*** ./app/javascript/components/Dashboard.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Todos_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todos/Index */ "./app/javascript/components/Todos/Index.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _Todos_EditTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todos/EditTodo */ "./app/javascript/components/Todos/EditTodo.jsx");
/* harmony import */ var _Todos_DisplayTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Todos/DisplayTodo */ "./app/javascript/components/Todos/DisplayTodo.jsx");
/* harmony import */ var _Todos_NewTodo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Todos/NewTodo */ "./app/javascript/components/Todos/NewTodo.jsx");
/* harmony import */ var _Todos_CompleteTodo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Todos/CompleteTodo */ "./app/javascript/components/Todos/CompleteTodo.jsx");







const DashBoard = () => {
  const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/EditTodo",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Todos_EditTodo__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/CompleteTodo",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Todos_CompleteTodo__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/DisplayTodo",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Todos_DisplayTodo__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/NewTodo",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Todos_NewTodo__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Todos_Index__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (DashBoard);

/***/ }),

/***/ "./app/javascript/components/Todos/CompleteTodo.jsx":
/*!**********************************************************!*\
  !*** ./app/javascript/components/Todos/CompleteTodo.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/api */ "./app/javascript/utils/api.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");




const CompleteTodo = () => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  const completedTodos = location.state?.completed || [];
  const handleDelete = id => {
    _utils_api__WEBPACK_IMPORTED_MODULE_1__.deleteTodo(id);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), completedTodos.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "This is Completed Todos from CompletedTodo.jsx"), completedTodos.map(todo => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: todo.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "ID: ", todo.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Title: ", todo.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Body: ", todo.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Created At: ", todo.created_at), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Updated At: ", todo.updated_at), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/",
    onClick: () => handleDelete(todo.id)
  }, "Destroy This Todo", " ")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No completed todos found"));
};
/* harmony default export */ __webpack_exports__["default"] = (CompleteTodo);

/***/ }),

/***/ "./app/javascript/components/Todos/DisplayTodo.jsx":
/*!*********************************************************!*\
  !*** ./app/javascript/components/Todos/DisplayTodo.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");



const DisplayTodo = props => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  const {
    todos,
    id
  } = location.state || {};
  let {
    state
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  console.log(state);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, todos && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "This is DisplayTodo.jsx", " ", console.log("welcome to DisplayTodo.jsx" + todos, id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "ID: ", todos.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Title: ", todos.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Body: ", todos.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Created At: ", todos.created_at), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Updated At: ", todos.updated_at)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/"
  }, "Home"));
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayTodo);

/***/ }),

/***/ "./app/javascript/components/Todos/EditTodo.jsx":
/*!******************************************************!*\
  !*** ./app/javascript/components/Todos/EditTodo.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _DisplayTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisplayTodo */ "./app/javascript/components/Todos/DisplayTodo.jsx");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api */ "./app/javascript/utils/api.js");




const EditTodo = props => {
  let {
    state
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  console.log(state);
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(state.title);
  const handleTodoUpdate = e => {
    console.log(state.id);
    _utils_api__WEBPACK_IMPORTED_MODULE_2__.editTodo(state.id, {
      title: title
    });
    //sending id and title to api
  };
  const handleInputChange = event => {
    setTitle(event.target.value);
    console.log(title);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    action: ""
  }, "Title", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    id: "title",
    value: title,
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/",
    onClick: event => {
      handleTodoUpdate(event);
    }
  }, "Edit Todo")));
};
/* harmony default export */ __webpack_exports__["default"] = (EditTodo);

/***/ }),

/***/ "./app/javascript/components/Todos/Index.jsx":
/*!***************************************************!*\
  !*** ./app/javascript/components/Todos/Index.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/api */ "./app/javascript/utils/api.js");
/* harmony import */ var _Index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.module.css */ "./app/javascript/components/Todos/Index.module.css");
/* harmony import */ var _TodoTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoTable */ "./app/javascript/components/Todos/TodoTable.jsx");
/* harmony import */ var _Paginate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Paginate */ "./app/javascript/components/Todos/Paginate.jsx");
/* harmony import */ var _EditTodo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditTodo */ "./app/javascript/components/Todos/EditTodo.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");







const Index = () => {
  const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const perPage = 3;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchTodos();
  }, [currentPage]);
  const fetchTodos = () => {
    console.log(currentPage, perPage);
    _utils_api__WEBPACK_IMPORTED_MODULE_1__.getTodos({
      page: currentPage,
      per_page: perPage
    }).then(response => {
      setTodos(response.data.todos);
    }).catch(function (error) {
      console.log(error);
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, console.log(todos)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: "/NewTodo",
    className: _Index_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].newTodo
  }, "New Todo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: "/CompleteTodo",
    className: _Index_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].completeTodo,
    state: {
      completed: todos.filter(todo => todo.completed)
    }
  }, "Completed Todo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TodoTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
    todos: todos,
    setTodos: setTodos
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Paginate__WEBPACK_IMPORTED_MODULE_4__["default"], {
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    fetchTodos: fetchTodos,
    todos: todos
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./app/javascript/components/Todos/NewTodo.jsx":
/*!*****************************************************!*\
  !*** ./app/javascript/components/Todos/NewTodo.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/api */ "./app/javascript/utils/api.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index */ "./app/javascript/components/Todos/Index.jsx");




const NewTodo = () => {
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [priority, setPriority] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const newTodo = {
    title: title,
    body: body,
    priority: priority
  };
  const handleTodoCreate = () => {
    _utils_api__WEBPACK_IMPORTED_MODULE_1__.createTodo({
      todo: newTodo
    }).then(response => {
      console.log(response);
    });
  };
  const handleInputTitle = event => {
    setTitle(event.target.value);
    console.log(title);
  };
  const handleInputBody = event => {
    setBody(event.target.value);
    console.log(body);
  };
  const handlePriorityChange = event => {
    setPriority(event.target.value);
    console.log(priority);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    id: "title",
    value: title,
    onChange: handleInputTitle,
    placeholder: "Title :"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    id: "body",
    value: body,
    onChange: handleInputBody,
    placeholder: "Body :"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    id: "priority",
    value: priority,
    onChange: handlePriorityChange,
    placeholder: "Priority :"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/",
    onClick: handleTodoCreate
  }, "Add Todo"));
};
/* harmony default export */ __webpack_exports__["default"] = (NewTodo);

/***/ }),

/***/ "./app/javascript/components/Todos/Paginate.jsx":
/*!******************************************************!*\
  !*** ./app/javascript/components/Todos/Paginate.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Paginate = ({
  currentPage,
  setCurrentPage,
  fetchTodos,
  todos
}) => {
  const [pageInput, setPageInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const changePage = page => {
    if (page >= 1 && todos.length > 0) {
      setCurrentPage(page);
      fetchTodos();
    }
  };
  const handlePageInput = event => {
    setPageInput(event.target.value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => changePage(currentPage - 1)
  }, "Prev"), "...", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => {
      changePage(1);
    }
  }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => {
      changePage(2);
    }
  }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => {
      changePage(3);
    }
  }, "3"), "...", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => changePage(currentPage + 1)
  }, "Next")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    value: pageInput,
    placeholder: "Enter a Page Number to Check",
    onChange: handlePageInput
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => {
      changePage(pageInput);
    }
  }, "Submit"));
};
/* harmony default export */ __webpack_exports__["default"] = (Paginate);

// {[...Array(totalPages).keys()].map((page) => (
//           <button key={page + 1} onClick={() => changePage(page + 1)}>
//             {page + 1}
//           </button>
//         ))}

/***/ }),

/***/ "./app/javascript/components/Todos/TodoTable.jsx":
/*!*******************************************************!*\
  !*** ./app/javascript/components/Todos/TodoTable.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/api */ "./app/javascript/utils/api.js");
/* harmony import */ var _Index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.module.css */ "./app/javascript/components/Todos/Index.module.css");
/* harmony import */ var _EditTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditTodo */ "./app/javascript/components/Todos/EditTodo.jsx");
/* harmony import */ var _DisplayTodo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DisplayTodo */ "./app/javascript/components/Todos/DisplayTodo.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");






const TodoTable = ({
  todos,
  setTodos
}) => {
  const handleCheckBoxChange = (id, checked) => {
    _utils_api__WEBPACK_IMPORTED_MODULE_1__.editTodo(id, {
      completed: checked
    }).then(response => {
      setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? {
        ...todo,
        completed: checked
      } : todo));
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: _Index_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].table
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", {
    className: _Index_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].tablehead
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Buttons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Priority"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
    className: _Index_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].tablebody
  }, todos.map(todo => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: todo.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, todo.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, todo.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/EditTodo",
    styles: {
      "text-decoration": "linethrough"
    },
    state: {
      id: todo.id,
      title: todo.title
    }
  }, "Edit_", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/DisplayTodo",
    state: {
      todos: todo,
      id: todo.id
    }
  }, "Display_"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: todo.completed,
    onChange: e => handleCheckBoxChange(todo.id, e.target.checked)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, todo.priority))))));
};
/* harmony default export */ __webpack_exports__["default"] = (TodoTable);

/***/ }),

/***/ "./app/javascript/utils/api.js":
/*!*************************************!*\
  !*** ./app/javascript/utils/api.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodo: function() { return /* binding */ createTodo; },
/* harmony export */   deleteTodo: function() { return /* binding */ deleteTodo; },
/* harmony export */   editTodo: function() { return /* binding */ editTodo; },
/* harmony export */   getTodos: function() { return /* binding */ getTodos; }
/* harmony export */ });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axios */ "./app/javascript/utils/axios.js");

const getTodos = params => {
  console.log("params", params);
  return _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/todos', {
    params
  });
};
const deleteTodo = id => {
  return _axios__WEBPACK_IMPORTED_MODULE_0__["default"].delete(`/todos/${id}`);
};
const editTodo = (id, params) => {
  return _axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(`/todos/${id}`, {
    todo: params
  });
};
const createTodo = params => {
  return _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/todos', params);
};

/***/ }),

/***/ "./app/javascript/utils/axios.js":
/*!***************************************!*\
  !*** ./app/javascript/utils/axios.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const axios = __webpack_require__(/*! axios */ "./node_modules/axios/dist/browser/axios.cjs");
const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Accept': "application/json"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./app/javascript/components/Todos/Index.module.css":
/*!**********************************************************!*\
  !*** ./app/javascript/components/Todos/Index.module.css ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"table":"TNFt4qC17jnOTldN2cMW","completeTodo":"P45HOSnnem4fgW2JX_Rx"});

/***/ })

}]);
//# sourceMappingURL=app_javascript_components_sync_recursive_.js.map