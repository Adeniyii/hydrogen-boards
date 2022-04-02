import React from "react";
import styled from "styled-components/macro";
import Button from "../Button";
import HydrogenLogo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";

const Header = ({ slug }) => {
  return (
    <header>
      <MainHeader>
        <LogoWrapper to="/">
          <img alt="" src={HydrogenLogo} />
        </LogoWrapper>
        <Nav>
          <CustomLink to="/">Find jobs</CustomLink>
          <CustomLink to="/">How it works</CustomLink>
          <CustomLink to="/">Blog</CustomLink>
          <CustomLink to="/">Career Tips</CustomLink>
        </Nav>
        <ActionRow>
          {slug === "landing" && (
            <Link to="/auth/login">
              <Button size="medium" variant="outline">
                Login
              </Button>
            </Link>
          )}
          {slug === "login" && (
            <Link to="/auth/register">
              <Button size="medium" variant="outline">
                Sign Up
              </Button>
            </Link>
          )}
          {slug === "register" && (
            <Link to="/auth/login">
              <Button size="medium" variant="outline">
                Login
              </Button>
            </Link>
          )}
          {slug === "landing" && (
            <Link to="/">
              <Button size="medium" variant="fill">
                Get Started
              </Button>
            </Link>
          )}
        </ActionRow>
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  background-color: var(--color-white);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 80px;
  isolation: isolate;
  z-index: 1;
`;

const LogoWrapper = styled(Link)`
  align-items: baseline;
  margin-right: 54px;
  height: 48px;
`;

const Nav = styled.div`
  display: flex;
  align-items: baseline;
  gap: 54px;
  font-weight: var(--font-weight-normal);
  color: var(--color-copy-400);
`;

const ActionRow = styled.div`
  display: flex;
  gap: 16px;
  margin-left: auto;
  align-items: center;
`;

const CustomLink = styled(Link)`
  font-size: calc(14 / 16 * 1rem);
`;

export default Header;
