import React from "react";
import styled from "styled-components/macro";
import CTALanding from "./CTALanding";
import HeroSection from "./HeroSection";
import LandingBody from "./LandingBody";
import MaxWidthWrapper from "../MaxWidthWrapper";
import PopularJobs from "./PopularJobs";
import Footer from "../Footer";
import Header from "../Header";

const LandingPage = () => {
  return (
    <>
      <Header slug="landing" />
      <PageWrapper>
        <MaxWidthClone>
          <HeroSection />
          <PopularJobs />
        </MaxWidthClone>
        <LandingBody />
        <MaxWidthWrapper>
          <CTALanding />
        </MaxWidthWrapper>
        <Footer />
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.section`
  padding-top: 80px;
  isolation: isolate;
`;

const MaxWidthClone = styled(MaxWidthWrapper)`
  padding-top: 45px;
  background-color: var(--color-primary-200);
`;

export default LandingPage;
