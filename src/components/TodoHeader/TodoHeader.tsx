import React from "react";

import { Container } from "./styles";

const TodoHeader = () => {
  return (
    <Container>
      <h1>Todo</h1>
      <p>List {`:>`}</p>
    </Container>
  );
};

export default TodoHeader;
