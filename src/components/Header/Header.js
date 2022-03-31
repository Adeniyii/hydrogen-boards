import React from "react";
import styled from "styled-components/macro";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <MainHeader>
        <LogoWrapper href="#">
          <Logo />
        </LogoWrapper>
        <Nav>
          <Link href="#">Find jobs</Link>
          <Link href="#">How it works</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Career Tips</Link>
        </Nav>
        <ActionRow>
          <Button size="medium" variant="outline">
            Login
          </Button>
          <Button size="medium" variant="fill">
            Get Started
          </Button>
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
  height: 100px;
  isolation: isolate;
  z-index: 1;
`;

const LogoWrapper = styled.a`
  align-items: baseline;
  margin-right: 54px;
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

const Link = styled.a`
  font-size: calc(14 / 16 * 1rem);
`;

export default Header;
