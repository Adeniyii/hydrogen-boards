import React from "react";
import styled from "styled-components/macro";

const SIZES = {
  small: {
    "--borderRadius": 4 + "px",
    "--fontSize": 12 / 16 + "rem",
    "--padding": "4px 16px",
  },
  large: {
    "--borderRadius": 4 + "px",
    "--fontSize": 14 / 16 + "rem",
    "--padding": "10px 24px",
  },
};

const Button = ({ variant, size, children }) => {
  const styles = SIZES[size];

  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }

  return <Component style={styles}>{children}</Component>;
};

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  padding: var(--padding);
  border-radius: var(--borderRadius);

  &:focus {
    outline-color: var(--color-primary-500);
    outline-offset: 4px;
  }
`;

const FillButton = styled(ButtonBase)`
  background-color: var(--color-primary-600);
  color: var(--color-primary-100);

  &:hover {
    background-color: var(--color-primary-500);
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: var(--color-primary-100);
  color: var(--color-primary-600);
  border: 2px solid var(--color-copy-200);

  &:hover {
    background-color: var(--color-primary-200);
  }
`;

export default Button;
