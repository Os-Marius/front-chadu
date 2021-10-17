import styled from "styled-components";

export const Container = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  margin: 0;
  background: ${({ theme }) => theme.pallete.background.main};
  border-radius: 10px;
  flex-direction: column;
  text-align: center;
  padding: 0;
  h1 {
    color: ${({ theme }) => theme.pallete.text.sec};
  }

  p {
    color: ${({ theme }) => theme.pallete.text.sec};
  }
`;
