import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handelInput } from "../redux/slice/todo.slice";
import { getTodoList } from "../redux/services/todo.services";

function Input() {
  let dispatch = useDispatch();
  let { newTodo } = useSelector((state) => state.todoSlice);

  useEffect(() => {
    dispatch(getTodoList());
  }, []);
  return (
    <>
      <input
        type="text"
        value={newTodo}
        onChange={(event) => dispatch(handelInput(event.target.value))}
      />
    </>
  );
}

export default Input;
