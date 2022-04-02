import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Button from "../Button";
import styled from "styled-components/macro";
import HydrogenLogo from "../../assets/images/hydrogenwhite.svg";

const Footer = () => {
  const handleSubmit = () => {};
  const handleChange = () => {};

  return (
    <MaxWidthWrapper>
      <FooterWrapper>
        <SubFooter>
          <Heading>Never want to miss any job news?</Heading>
          <InputWrapper>
            <SubscriptionInput
              onChange={handleChange}
              placeholder="Enter your email"
            />
            <ButtonCopy variant="fill" size="medium" onClick={handleSubmit}>
              Search
            </ButtonCopy>
          </InputWrapper>
        </SubFooter>
        <MainFooter>
          <LogoWrapper href="#">
            <img alt="" src={HydrogenLogo} />
          </LogoWrapper>
          <SocialWrapper>
            <p>Send us an email</p>
            <h3>contact@hydrogen.com</h3>
            <Socials>
              <p>Socials</p>
              <IconRow></IconRow>
            </Socials>
          </SocialWrapper>
          <ColumnWrapper>
            <h3 href="#">Company</h3>
            <a href="/">About us</a>
            <a href="/">Careers</a>
            <a href="/">Blog</a>
          </ColumnWrapper>
          <ColumnWrapper>
            <h3 href="#">Products</h3>
            <a href="/">HR</a>
            <a href="/">Payroll</a>
          </ColumnWrapper>
          <ColumnWrapper>
            <h3 href="#">Legals</h3>
            <a href="/">Privacy Policies</a>
            <a href="/">Terms & Condition</a>
          </ColumnWrapper>
        </MainFooter>
      </FooterWrapper>
    </MaxWidthWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 0 -128px;
`;

const SubFooter = styled.div`
  padding-block: 82px;
  padding-left: 200px;
  display: flex;
  align-items: center;
  background-color: var(--color-copy-600);
`;

const Heading = styled.h1`
  color: var(--color-white);
  max-width: 365px;
  font-size: calc(40 / 16 * 1rem);
  font-weight: var(--font-weight-bold);
`;

const InputWrapper = styled.form`
  position: relative;
`;

const SubscriptionInput = styled.input`
  width: 718px;
  height: 78px;
  border-radius: 8px;
  padding-left: 34px;
  padding-right: 200px;
  margin-left: 96px;

  &::placeholder {
    font-size: 1rem;
    color: var(--color-primary-300);
  }
`;

const ButtonCopy = styled(Button)`
  position: absolute;
  top: 0;
  right: 18px;
  transform: translateY(calc(calc(78px - 100%) / 2));
`;

const MainFooter = styled.div`
  padding-top: 124px;
  padding-bottom: 140px;
  padding-left: 72px;
  background-color: rgba(17, 12, 53, 1);
  display: flex;
  font-size: calc(14 / 16 * 1rem);
  color: var(--color-copy-400);
`;

const LogoWrapper = styled.a`
  align-items: baseline;
  margin-right: 54px;
  height: 48px;
`;

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 160px;

  & > h3 {
    font-weight: var(--font-weight-medium);
    font-size: calc(20 / 16 * 1rem);
    color: var(--color-accent-600);
  }
`;
const ColumnWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  margin-left: 128px;

  & > h3 {
    font-weight: var(--font-weight-medium);
    font-size: calc(20 / 16 * 1rem);
    color: var(--color-white);
  }
`;

const Socials = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

const IconRow = styled.div`
  display: flex;
  gap: 24px;
`;

export default Footer;
