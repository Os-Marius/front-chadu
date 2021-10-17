import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/themes";
import Todo from "./pages/Todo";

import { Container } from "./styles/globalStyles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Todo />
      </Container>
    </ThemeProvider>
  );
};

export default App;
