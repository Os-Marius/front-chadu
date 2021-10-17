import React, { useState } from "react";
import { Container } from "./styles";

interface TodoItemProps {
  id?: number;
  title?: string;
  content?: string;
  done?: boolean;
  isOpen?: boolean;
}

const TodoItem = ({ id, title, content, done, isOpen }: TodoItemProps) => {
  const [active, setActive] = useState<boolean>(false);

  const handleSetActive = () => {
    setActive(!active);
  };

  return (
    <Container done={done} isOpen={active} onClick={handleSetActive}>
      <p>{title}</p>
      <span>{content}</span>
    </Container>
  );
};

TodoItem.defaultProps = {
  id: Math.random(),
  title: "title",
  content: "lorem ipsum",
  done: false,
  isOpen: true,
};

export default TodoItem;
