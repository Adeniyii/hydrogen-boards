import React from "react";
import * as Yup from "yup";
import Button from "../../Button";
import styled from "styled-components/macro";
import NameInput from "../../common/NameInput";
import EmailInput from "../../common/EmailInput";
import PasswordInput from "../../common/PasswordInput";
import FormsWrapper, { showFieldError } from "../../Forms/Formik";

const validation = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required").min(5, "Invalid Password"),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Password dont match"),
});

const Form = (props) => {
  let { formControl, onChange, onSubmit, formName, onAgreeChecked } = props;
  return (
    <FormsWrapper
      values={formControl}
      handleSubmit={onSubmit}
      handleChange={onChange}
      validationSchema={validation}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          handleBlur,
          handleChange,
          isSubmitting,
          isValid,
          setFieldError,
          handleSubmit,
        } = props;
        return (
          <form name={formName} onChange={onChange} onSubmit={handleSubmit}>
            <InputSection>
              <CustomLabel>Full Name</CustomLabel>
              <NameInput
                name="name"
                onBlur={handleBlur}
                value={values.name}
                invalid={errors.name && touched.name}
                onChange={handleChange}
              />
              {showFieldError("name", errors, touched)}
            </InputSection>

            <InputSection>
              <CustomLabel>Email Address</CustomLabel>
              <EmailInput
                name="email"
                onBlur={handleBlur}
                value={values.email}
                invalid={touched.email && errors.email}
                onChange={handleChange}
              />
              {showFieldError("email", errors, touched)}
            </InputSection>

            <InputSection>
              <CustomLabel>Password</CustomLabel>
              <PasswordInput
                name="password"
                onBlur={handleBlur}
                value={values.password}
                invalid={errors.password && touched.password}
                onChange={handleChange}
                // withRequirements
              />
              {showFieldError("password", errors, touched)}
            </InputSection>

            <InputSection>
              <CustomLabel>Confirm Password</CustomLabel>
              <PasswordInput
                name="confirmPassword"
                onBlur={handleBlur}
                value={values.confirmPassword}
                invalid={errors.confirmPassword && touched.confirmPassword}
                onChange={handleChange}
                // withRequirements
              />
              {showFieldError("confirmPassword", errors, touched)}
            </InputSection>

            <AgreeWrapper>
              <AgreeInput
                type="checkbox"
                name="agree"
                onBlur={handleBlur}
                checked={formControl.agree}
                onChange={onAgreeChecked}
                onClick={onAgreeChecked}
              />
              <p>
                I agree to the terms and conditions set forward by
                HydrogenBoards{" "}
              </p>
            </AgreeWrapper>
            <FullButton
              variant="fill"
              size="medium"
              weight="bold"
              type="submit"
              loading={isSubmitting}
              disabled={!isValid}
            >
              Create Account
            </FullButton>
          </form>
        );
      }}
    </FormsWrapper>
  );
};

const CustomLabel = styled.label`
  font-size: calc(12 / 16 * 1rem);
  color: var(--color-copy-500);
  margin-bottom: 4px;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:first-of-type) {
    margin-top: 16px;
  }
`;

const AgreeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  margin-bottom: 44px;

  & > p {
    font-size: calc(12 / 16 * 1rem);
    color: var(--color-copy-400);
  }
`;

const AgreeInput = styled.input`
  accent-color: var(--color-primary-600);
  color: var(--color-copy-200);
  border-color: inherit;
`;

const FullButton = styled(Button)`
  width: 100%;
`;

export default Form;
