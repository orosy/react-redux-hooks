import React from "react";
import Counter from "./components/Counter";
import styled from "styled-components";

const App = () => {
  return (
    <Box>
      <Counter />
    </Box>
  );
};

export default App;

const Box = styled.div`
  width: 500px;
`;
