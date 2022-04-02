import React from "react";
import styled from "styled-components/macro";
import Button from "../../Button/Button";
import FolkWang from "../../../assets/images/folkwang.svg";
import Almeda from "../../../assets/images/almeda.svg";
import Bt from "../../../assets/images/blockT.svg";
import WinterMute from "../../../assets/images/wintermute.svg";
import Dapperman from "../../../assets/images/Dapperman.svg";

const CTALanding = () => {
  return (
    <MainWrapper>
      <CTAWrapper>
        <Heading>
          Get matched the most valuable jobs. All we need is for you to sign up
        </Heading>
        <Button size="large" variant="fill" color="plain" weight="medium">
          Get Started for free
        </Button>
        <LogoWrapper>
          <img alt="" src={Dapperman}></img>
        </LogoWrapper>
      </CTAWrapper>
      <CompanyUsageWrapper>
        <UsageHeading>
          We are loved by the <span>top brands</span>
        </UsageHeading>
        <CompanyRow>
          <CompanyLogoWrapper alt="" src={FolkWang} />
          <CompanyLogoWrapper alt="" src={Almeda} />
          <CompanyLogoWrapper alt="" src={Bt} />
          <CompanyLogoWrapper alt="" src={WinterMute} />
          <CompanyLogoWrapper alt="" src={Bt} />
        </CompanyRow>
        <CompanyRow>
          <CompanyLogoWrapper alt="" src={FolkWang} />
          <CompanyLogoWrapper alt="" src={Almeda} />
          <CompanyLogoWrapper alt="" src={Bt} />
          <CompanyLogoWrapper alt="" src={WinterMute} />
        </CompanyRow>
        <CompanyRow></CompanyRow>
      </CompanyUsageWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  margin-top: 200px;
`;

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 210px;
  padding-top: 137px;
  padding-bottom: 102px;
  align-items: flex-start;
  background-color: var(--color-copy-600);
  margin-left: -128px;
  margin-right: -128px;
  gap: 46px;
  position: relative;
`;

const CompanyUsageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 112px;
  padding-bottom: 178px;
  align-items: center;
  margin-left: -128px;
  margin-right: -128px;
`;

const CompanyRow = styled.div`
  display: flex;
  gap: 66px;
  align-items: baseline;

  &:first-of-type {
    margin-bottom: 36px;
  }
`;
const CompanyLogoWrapper = styled.img``;

const Heading = styled.h1`
  color: var(--color-white);
  max-width: 693px;
  font-size: calc(40 / 16 * 1rem);
  font-weight: var(--font-weight-bold);

  & > span {
    color: var(--color-primary-600);
  }
`;

const UsageHeading = styled(Heading)`
  color: var(--color-copy-600);
  margin-bottom: 54px;
`;

const LogoWrapper = styled.div`
  position: absolute;
  width: 440px;
  height: 594px;
  bottom: 0;
  right: 154px;
`;

export default CTALanding;
