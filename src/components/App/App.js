import React from "react";
import Header from "../Header";
import LandingPage from "../LandingPage";
import styled from "styled-components/macro";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <LandingPage />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100%;
`;

export default App;
