import React from "react";

import { ButtonStyled, Container } from "./styles";

interface ButtonsProps {
  color?: string;
  size?: string;
  children: React.ReactNode;
}

const Button = ({ children, color, size }: ButtonsProps) => {
  return (
    <Container>
      <ButtonStyled color={color} size={size}>
        {children}
      </ButtonStyled>
    </Container>
  );
};

Button.defaultProps = {
  colors: "",
  size: "",
};

export default Button;
