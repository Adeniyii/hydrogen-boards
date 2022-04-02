import React from "react";
import styled from "styled-components/macro";
import Bg from "../../assets/images/auth-bg.jpg";
import Header from "../Header";

const RegisterPage = () => {
  return (
    <>
      <Header slug="register" />
      <PageWrapper>
        <RegisterWrapper>
          <Heading>Register</Heading>
          <SubHeading>
            Fill in your details below to create an account and get your job
            searching process started with HydrogenHR.
          </SubHeading>
        </RegisterWrapper>
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.section`
  padding-top: 100px;
  height: 100vh;
  background-image: url(${Bg});
  display: grid;
  place-content: center;
`;

const RegisterWrapper = styled.div`
  width: 450px;
  height: 495px;
  background-color: var(--color-white);
  border-radius: 4px;
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  color: var(--color-copy-500);
  font-weight: var(--font-weight-500);
  font-size: calc(28 / 16 * 1rem);
  margin-bottom: 16px;
`;

const SubHeading = styled.p`
  color: var(--color-copy-500);
  font-weight: var(--font-weight-400);
  font-size: calc(14 / 16 * 1rem);
  margin-bottom: 24px;
`;

export default RegisterPage;
