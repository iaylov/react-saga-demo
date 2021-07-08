import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/actions/todos";

const Todo = ({ id, title, completed }) => {
  const style = {
    border: "1px solid darkGrey",
    margin: "2px 1px",
    padding: "0 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const dispatch = useDispatch();

  return (
    <div style={style} onDoubleClick={() => dispatch(removeTodo(id))}>
      <p>{title}</p>
      <input type="checkbox" checked={completed} readOnly />
    </div>
  );
};

export default Todo;
