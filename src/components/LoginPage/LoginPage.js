import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Form from "./SubComponents/Form";
import styled from "styled-components/macro";
import { onChange } from "../../helpers/utility";
import { login } from "../../services/authService";
import { setAccessToken } from "../../services/apiAdapter";

export default function Login() {
  let [state, setState] = useState({
    formLogin: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const handleChange = (e: HTMLInputElement) => {
    onChange(e, setState);
  };

  const onSubmit = async (params: any) => {
    try {
      let {
        formLogin: { email, password },
      } = state;
      console.log(email, password);
      // const loginData = new URLSearchParams();
      // loginData.append("username", email);
      // loginData.append("password", password);
      // loginData.append("grant_type", process.env.REACT_APP_GRANTTYPE);

      // let { data } = await login(loginData);
      // setAccessToken(data.access_token);
      // localStorage.setItem("loginData", JSON.stringify(data));
      // localStorage.setItem("empId", data.empId);

      // window.location.href = "/documentstorage";
    } catch (error) {
      toast.error(
        error?.response?.data?.error_description || "An error occured"
      );
    }
  };

  const onRememberChecked = () => {
    setState((prev) => {
      return {
        ...prev,
        formLogin: {
          ...prev.formLogin,
          agree: !prev.formLogin.remember,
        },
      };
    });
  };

  return (
    <LoginWrapper>
      <Heading>Login</Heading>
      <SubHeading>
        Fill in your details below to Login and get your job searching process
        started with HydrogenHR.
      </SubHeading>
      <Form
        formControl={state.formLogin}
        formName={"formLogin"}
        onChange={handleChange}
        onSubmit={onSubmit}
        onRememberChecked={onRememberChecked}
      />

      <NewAccountCTAWrapper>
        <NewAccountCTA>
          I don’t have an account. <Link to="/auth/register">Sign up here</Link>
        </NewAccountCTA>
      </NewAccountCTAWrapper>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
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
  margin-top: 24px;
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
