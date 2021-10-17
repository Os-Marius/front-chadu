import React from "react";
import { Container } from "./styles";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const todos = [
    { title: "Lorem, ipsum.", done: true },
    { title: "bafdsagas", done: false },
    { title: "ccxx", done: true },
    { title: "dzzz", done: false },
    { title: "Lorem, ipsum.", done: false },
    { title: "Lorem, ipsum.", done: true },
    { title: "Lorem, ipsum.", done: false },
    { title: "Lorem, ipsum.", done: false },
    { title: "Lorem, ipsum.", done: false },
    { title: "Lorem, ipsum.", done: true },
    { title: "Lorem, ipsum.", done: false },
    { title: "a123", done: false },
    { title: "a444", done: true },
  ];

  return (
    <Container>
      {todos.map((todoItem) => (
        <TodoItem title={todoItem.title} done={todoItem.done} />
      ))}
    </Container>
  );
};

export default TodoList;
