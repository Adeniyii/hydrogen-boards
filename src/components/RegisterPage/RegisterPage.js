import { SUCCESS_CODE } from "../../helpers/constants";
import { apiErrorHandler, onChange } from "../../helpers/utility";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../services/authService";
import Form from "./SubComponents/Form";
import styled from "styled-components/macro";

export default function Register() {
  let [state, setState] = useState({
    formRegister: {
      firstname: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
      agree: false,
    },
  });

  const handleChange = (e: HTMLInputElement) => {
    onChange(e, setState);
  };

  const onAgreeChecked = () => {
    setState((prev) => {
      return {
        ...prev,
        formRegister: {
          ...prev.formRegister,
          agree: !prev.formRegister.agree,
        },
      };
    });
  };

  const onSubmit = async (params: any, formikProps: any) => {
    try {
      let dataToSend = {
        firstName: state.formRegister.firstname,
        surname: state.formRegister.surname,
        otherName: "",
        sex: "",
        email: state.formRegister.email,
        password: state.formRegister.password,
        cPassword: state.formRegister.confirmPassword,
      };

      let { data } = await register(dataToSend);

      if (data.statusCode === SUCCESS_CODE) {
        toast.success(data.statusMessage);
        formikProps.resetForm();
        setState((prev) => ({
          ...prev,
          formRegister: {
            firstname: "",
            surname: "",
            email: "",
            password: "",
            confirmPassword: "",
            agree: false,
          },
        }));
      } else {
        toast.error(data.statusMessage);
      }
    } catch (error) {
      apiErrorHandler(error);
    }
  };
  return (
    <RegisterWrapper>
      <Heading>Create account</Heading>
      <SubHeading>
        Fill in your details below to create an account and get your job
        searching process started with HydrogenHR.
      </SubHeading>
      <Form
        formControl={state.formRegister}
        formName={"formRegister"}
        onChange={handleChange}
        onSubmit={onSubmit}
        onAgreeChecked={onAgreeChecked}
      />

      <NewAccountCTAWrapper>
        <NewAccountCTA>
          I have an account. <Link to="/auth/login">Sign in here</Link>
        </NewAccountCTA>
      </NewAccountCTAWrapper>
    </RegisterWrapper>
  );
}

const RegisterWrapper = styled.div`
  width: 450px;
  background-color: var(--color-white);
  border-radius: 4px;
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  color: var(--color-copy-500);
  font-weight: var(--font-weight-medium);
  font-size: calc(28 / 16 * 1rem);
  margin-bottom: 16px;
`;

const SubHeading = styled.p`
  color: var(--color-copy-500);
  font-weight: var(--font-weight-normal);
  font-size: calc(14 / 16 * 1rem);
  margin-bottom: 24px;
`;

const NewAccountCTAWrapper = styled.div`
  margin-top: 32px;
  align-self: center;
`;

const NewAccountCTA = styled.p`
  color: var(--color-copy-500);
  font-weight: var(--font-weight-normal);
  font-size: calc(12 / 16 * 1rem);

  & > a {
    color: var(--color-primary-600);
  }
`;
