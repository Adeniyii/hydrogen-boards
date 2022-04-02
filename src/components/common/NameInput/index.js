import React from "react";
import UserIcon from "./UserIcon";
import styled from "styled-components/macro";

const NameInput = ({ invalid, ...props }) => {
  return (
    <InputWrapper>
      <IconWrapper>
        <UserIcon />
      </IconWrapper>
      <CustomInput type="text" {...props} placeholder="James Bond" />
    </InputWrapper>
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

export default NameInput;
