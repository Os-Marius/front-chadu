import styled, { keyframes } from "styled-components";

const switchAnimation = keyframes`
    from {
        display: none;
    }

    to {
        display: block;
    }
`;

export const Container = styled.div<{ done?: boolean; isOpen?: boolean }>`
  background: ${({ done }) => (done ? "tomato" : "indigo")};
  width: 98%;
  margin: 0 auto 20px auto;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  min-height: 30px;
  padding: 10px 0;

  p {
    margin: 0 0 0 20px;
  }

  span {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  }
`;
