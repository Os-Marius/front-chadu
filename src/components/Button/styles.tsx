import styled from "styled-components";

export const ButtonStyled = styled.button<{
  size?: string;
  color?: string;
}>`
  color: ${({ color }) => (color ? color : "black")};
  font-size: ${({ size }) => (size ? size : "1em")};
`;

export const Container = styled.div``;
