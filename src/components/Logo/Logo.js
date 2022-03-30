import React from "react";
import styled from "styled-components/macro";

const Logo = () => {
  return <Wrapper alt="" src="/images/Logo.svg" />;
};

const Wrapper = styled.img`
  display: block;
  height: 48px;
`;

export default Logo;
