import * as type from "../types";

export function getTodos(todos) {
  return {
    type: type.GET_TODOS,
  };
}

export function getTodosSuccess(todos) {
  return {
    type: type.GET_TODOS_SUCCESS,
    payload: todos,
  };
}

export function removeTodo(id) {
  return {
    type: type.REMOVE_TODO,
    payload: id,
  };
}
