import React from "react";
import styled from "styled-components/macro";
import { COLORS } from "../../constants";

const SIZES = {
  small: {
    "--borderRadius": 4 + "px",
    "--fontSize": 12 / 16 + "rem",
    "--padding": "4px 16px",
  },
  medium: {
    "--borderRadius": 4 + "px",
    "--fontSize": 14 / 16 + "rem",
    "--padding": "19px 24px",
  },

  large: {
    "--borderRadius": 4 + "px",
    "--fontSize": 14 / 16 + "rem",
    "--padding": "18px 70px",
  },
};

const COLOR = {
  primary: {
    "--background-color": COLORS.primary[600],
    "--hover-color": COLORS.primary[500],
    "--hover-color-outline": COLORS.primary[200],
    "--font-color": COLORS.primary[100],
  },

  accent: {
    "--background-color": COLORS.accent[600],
    "--hover-color": COLORS.accent[500],
    "--hover-color-outline": COLORS.accent[200],
    "--font-color": COLORS.accent[100],
  },

  plain: {
    "--background-color": COLORS.white,
    "--hover-color": COLORS.primary[100],
    "--hover-color-outline": COLORS.primary[100],
    "--font-color": COLORS.primary[600],
  },
};

const Button = ({ variant, size, children, type = "primary", delegated }) => {
  const styles = { ...SIZES[size], ...COLOR[type] };

  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }

  return (
    <Component style={styles} {...delegated}>
      {children}
    </Component>
  );
};

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  line-height: 1.2;

  &:focus {
    outline-color: var(--color-primary-500);
    outline-offset: 4px;
  }
`;

const FillButton = styled(ButtonBase)`
  background-color: var(--background-color);
  color: var(--font-color);

  &:hover {
    background-color: var(--hover-color);
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: var(--font-color);
  color: var(--background-color);
  border: 2px solid var(--color-copy-200);

  &:hover {
    background-color: var(--hover-color-outline);
  }
`;

export default Button;
