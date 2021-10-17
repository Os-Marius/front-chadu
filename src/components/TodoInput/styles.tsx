import styled, { keyframes } from "styled-components";

const animationTime = "0.5s";

const FadeAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
    width: 0;
  }
  to {
    transform: translateY(0px);
    width: 100%;
    opacity: 1;
  }
`;

export const Container = styled.div`
  margin-top: 2.2rem;
  display: flex;

  input {
    opacity: 0;
    width: 0%;
    animation-name: ${FadeAnimation};
    animation-duration: ${animationTime};
    animation-fill-mode: forwards;
    animation-fill-mode: ease;

    padding: 1rem 1.5rem;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 2px 3px 32px rgba(0, 0, 0, 0.2);
    background: #fff;
    outline: none;
    transition: 0.3s;

    &:hover {
      transform: translateY(30px);
      background: #b10f7c;
      box-shadow: 2px 3px 32px rgba(177, 15, 124, 0.2);

      color: #fff;

      &::placeholder {
        color: #fff;
      }
    }
  }
`;

export const Send = styled.div`
  display: flex;

  width: 50px;
  height: 50px;
  background: red;

  border-top-right-radius: 100%;
  border-bottom-right-radius: 100%;

  cursor: pointer;

  &:after {
    content: "";
    display: block;
    background: #fff;
  }
`;
