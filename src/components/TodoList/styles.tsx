import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 50vh;
  margin: 20px auto 0 auto;
  overflow-y: scroll;
  padding: 20px 10px;
  background: ${({ theme }) => theme.pallete.background.primary};
`;
