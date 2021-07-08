import { call, put, takeLeading } from "redux-saga/effects";
import { getTodosSuccess } from "../actions/todos";
import * as type from "../types";

const apiUrl = "https://jsonplaceholder.typicode.com/todos";

function fetchTodos() {
  return fetch(apiUrl)
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* getTodos() {
  try {
    const todos = yield call(fetchTodos);
    yield put(getTodosSuccess(todos));
  } catch (error) {
    yield put({ type: type.GET_TODOS_FAILED, payload: error.message });
  }
}

function* todoSaga() {
  yield takeLeading(type.GET_TODOS, getTodos);
}

export default todoSaga;
