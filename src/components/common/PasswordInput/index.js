import React, { useState } from "react";
import EyeIcon from "./EyeIcon";
import PasswordIcon from "./PasswordIcon";
import { Row, Col } from "reactstrap";
import CheckIcon from "./CheckIcon";
import styled from "styled-components/macro";

const PasswordInput = ({
  invalid,
  withRequirements,
  setFieldError,
  ...props
}) => {
  const uppercaseText = "uppercase";
  const specialText = "special";
  const numberText = "number";
  const lengthText = "length";

  const [show, setShow] = useState(false);
  const [validationArray, setValidationArray] = useState([]);
  const handleChange = (e) => {
    props.onChange(e);
    if (withRequirements) {
      let value = e.target.value;
      let upperCaseRegex = /.*[A-Z]/;
      let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      let numbrRegex = /\d+/;
      let arrToSet = [];

      if (upperCaseRegex.test(value)) {
        arrToSet.push(uppercaseText);
      }
      if (specialChars.test(value)) {
        arrToSet.push(specialText);
      }
      if (numbrRegex.test(value)) {
        arrToSet.push(numberText);
      }
      if (value.length >= 8) {
        arrToSet.push(lengthText);
      }
      if (arrToSet.length === 0) {
        setFieldError("Invalid Password");
      }
      setValidationArray(arrToSet);
    }
  };
  return (
    <>
      <InputWrapper>
        <IconWrapper>
          <PasswordIcon />
        </IconWrapper>
        <CustomInput
          type={show ? "text" : "password"}
          {...props}
          onChange={handleChange}
        />
        <RightIconWrapper>
          <EyeIcon
            className="ml-auto mr-0 cursor-pointer"
            onClick={() => setShow((prev) => !prev)}
          />
        </RightIconWrapper>
      </InputWrapper>
      {withRequirements && (
        <div className="my-4 requirements">
          <h6 className="small">Requirements</h6>
          <Row>
            <Col md="6">
              <div className="d-flex align-items-center">
                <CheckIcon
                  className={`${
                    validationArray.includes(lengthText) ? "checked" : ""
                  }`}
                />{" "}
                <p className="ml-2 mb-0 text-muted small">
                  minmum 8 characters
                </p>
              </div>
            </Col>
            <Col md="6">
              <div className="d-flex align-items-center">
                <CheckIcon
                  className={`${
                    validationArray.includes(uppercaseText) ? "checked" : ""
                  }`}
                />{" "}
                <p className="ml-2 mb-0 text-muted small">1 UPPERCASE</p>
              </div>
            </Col>
            <Col md="6">
              <div className="d-flex align-items-center">
                <CheckIcon
                  className={`${
                    validationArray.includes(numberText) ? "checked" : ""
                  }`}
                />{" "}
                <p className="ml-2 mb-0 text-muted small">1 number</p>
              </div>
            </Col>
            <Col md="6">
              <div className="d-flex align-items-center">
                <CheckIcon
                  className={`${
                    validationArray.includes(specialText) ? "checked" : ""
                  }`}
                />{" "}
                <p className="ml-2 mb-0 text-muted small">special character</p>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 18px;
  width: 20px;
  /* pointer-events: none; */
  cursor: pointer;
`;

const RightIconWrapper = styled(IconWrapper)`
  left: auto;
  right: 18px;
`;

const CustomInput = styled.input`
  width: 100%;
  padding-block: 8px;
  padding-inline: 56px;
  border: 1px solid var(--color-copy-200);
  border-radius: 4px;
  outline: none;
  font-size: calc(14 / 16 * 1rem);
  color: var(--color-copy-600);

  &::placeholder {
    font-size: calc(14 / 16 * 1rem);
    color: var(--color-copy-400);
  }
`;

export default PasswordInput;
