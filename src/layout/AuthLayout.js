import React from "react";
import styled from "styled-components/macro";
import Bg from "../assets/images/auth-bg.jpg";
import { Card, CardBody } from "reactstrap";
import Header from "../components/Header";

const AuthLayout = ({ children, slug }) => {
  return (
    <>
      <Header slug={slug} />
      <AuthWrapper>
        <Card>
          <CardBody>{children}</CardBody>
        </Card>
      </AuthWrapper>
    </>
  );
};

const AuthWrapper = styled.div`
  padding-top: 80px;
  background: url(${Bg});
  background-size: cover;
  height: 100vh;
  overflow: auto;
  display: grid;
  place-content: center;
`;

export default AuthLayout;
