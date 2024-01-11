import axios from './axios';

export const getTodos = (params) => {
  console.log("params", params)
  return axios.get('/todos', {params})
}

export const deleteTodo = (id) =>{
  return axios.delete(`/todos/${id}`);
}

export const editTodo = (id, params) =>{
  return axios.put(`/todos/${id}`, { todo: params });
}

export const createTodo = (params) => {
  return axios.post('/todos', params)
};