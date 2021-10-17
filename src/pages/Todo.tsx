import React from "react";
import TodoHeader from "../components/TodoHeader/TodoHeader";
import TodoInput from "../components/TodoInput/TodoInput";
import TodoList from "../components/TodoList/TodoList";

const Todo = () => {
  return (
    <>
      <TodoHeader />
      <TodoList />
      <TodoInput />
    </>
  );
};

export default Todo;
