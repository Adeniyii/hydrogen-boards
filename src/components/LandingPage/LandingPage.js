import React from "react";
import styled from "styled-components/macro";
import HeroSection from "../HeroSection";
import LandingBody from "../LandingBody/LandingBody";
import MaxWidthWrapper from "../MaxWidthWrapper";
import PopularJobs from "../PopularJobs";

const LandingPage = () => {
  return (
    <PageWrapper>
      <MaxWidthClone>
        <HeroSection />
        <PopularJobs />
      </MaxWidthClone>
      <LandingBody />
    </PageWrapper>
  );
};

const PageWrapper = styled.section`
  padding-top: 100px;
  isolation: isolate;
`;

const MaxWidthClone = styled(MaxWidthWrapper)`
  padding-top: 45px;
  background-color: var(--color-primary-200);
`;

export default LandingPage;
