import React from "react";

import { Container, Send } from "./styles";

const TodoInput = () => {
  return (
    <Container>
      <input type="text" placeholder="Adicione uma tarefa" />
      <Send></Send>
    </Container>
  );
};

export default TodoInput;
