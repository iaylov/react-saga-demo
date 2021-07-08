import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/actions/todos";
import Todo from "./Todo";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <>
      <button onClick={() => dispatch(getTodos())}>Refresh</button>
      <hr />
      {!todos.loading &&
        todos.data.map((todo) => <Todo {...todo} key={todo.id} />)}
    </>
  );
};

export default Todos;
