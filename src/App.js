import React from "react";
import { AppContainer } from "./components/Container.style";
import { StyledButton } from "./components/Button.style";
import { GlobalStyles } from "./components/Global.style";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <StyledButton buttonLabel="Click Here" backgroundColor="violet"></StyledButton>
    </AppContainer>
  );
}

export default App;
