import React from "react";
import styled from "styled-components/macro";
import AppRoutes from "../../routes/Routes";

const App = () => {
  return (
    <Wrapper>
      <AppRoutes />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100%;
`;

export default App;
