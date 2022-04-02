import React from "react";
import * as Yup from "yup";
import Button from "../../Button";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import EmailInput from "../../common/EmailInput";
import PasswordInput from "../../common/PasswordInput";
import FormsWrapper, { showFieldError } from "../../Forms/Formik";

const validation = Yup.object().shape({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required").min(5, "Invalid Password"),
});

const Form = (props) => {
  let { formControl, onChange, onSubmit, formName, onRememberChecked } = props;
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
          handleSubmit,
        } = props;
        return (
          <form name={formName} onChange={onChange} onSubmit={handleSubmit}>
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
            <SecondaryRow className="d-flex mt-1 mb-4 align-items-center">
              <RememberWrapper>
                <RememberInput
                  type="checkbox"
                  name="agree"
                  className="mr-2 ml-0"
                  onBlur={handleBlur}
                  checked={formControl.agree}
                  onChange={onRememberChecked}
                  onClick={onRememberChecked}
                />
                <p>Remember me</p>
              </RememberWrapper>
              <ForgotWrapper to="/auth/forgot">Forgot password?</ForgotWrapper>
            </SecondaryRow>
            <FullButton
              variant="fill"
              size="medium"
              weight="bold"
              type="submit"
              loading={isSubmitting}
              disabled={!isValid}
            >
              Login
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

const RememberWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & > p {
    font-size: calc(12 / 16 * 1rem);
    color: var(--color-copy-400);
  }
`;

const RememberInput = styled.input`
  accent-color: var(--color-primary-600);
  color: var(--color-copy-200);
  border-color: inherit;
`;

const SecondaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 36px;
`;

const ForgotWrapper = styled(Link)`
  color: var(--color-primary-600);
  font-size: calc(14 / 16 * 1rem);
`;

const FullButton = styled(Button)`
  width: 100%;
`;

export default Form;
