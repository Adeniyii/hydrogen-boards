import React from "react";
import styled from "styled-components/macro";
import MaxWidthWrapper from "../MaxWidthWrapper";

const LandingPage = () => {
  return (
    <Page>
      <MaxWidthClone>
        <HeroSection>
          <HeroArticleWrapper>
            <HeroHeading>
              Your <span>dream job</span> awaits. Come find it here.
            </HeroHeading>
            <HeroParagraph>
              Sit morbi id rhoncus consectetur in. Volutpat nibh vel id aliquam
              eget consequat risus nec. Nisl, mi platea tellus imperdiet
              tincidunt volutpat lorem. Consectetur enim, eget in turpis massa
              id volutpat. Facilisis euismod.
            </HeroParagraph>
          </HeroArticleWrapper>
          <HeroWrapper>
            <DecorativeBox>
              <HeroImageWrapper>
                <HeroImage alt="" src="/images/Victory.avif" />
              </HeroImageWrapper>
            </DecorativeBox>
          </HeroWrapper>
        </HeroSection>
      </MaxWidthClone>
    </Page>
  );
};

const Page = styled.section`
  padding-top: 100px;
  isolation: isolate;
`;

const MaxWidthClone = styled(MaxWidthWrapper)`
  padding-top: 45px;
  background-color: var(--color-primary-300);
`;

const HeroSection = styled.section`
  display: flex;
  gap: 32px;
  justify-content: space-between;
`;

const HeroArticleWrapper = styled.div``;

const HeroHeading = styled.h1`
  max-width: 460px;
  font-weight: var(--font-weight-bold);
  font-size: 60px;
  color: var(--color-copy-600);
  text-transform: capitalize;
  line-height: 72px;
`;

const HeroParagraph = styled.p`
  font-size: 1rem;
  margin-top: 40px;
  margin-bottom: 52px;
  color: var(--color-copy-400);
  font-weight: var(--font-weight-normal);
`;

const HeroWrapper = styled.div`
  padding-top: 56px;
  padding-right: 146px;
  padding-left: 176px;
`;

const HeroImageWrapper = styled.div`
  position: absolute;
  width: 700px;
  top: -60px;
  left: -180px;
`;

const DecorativeBox = styled.div`
  height: 712px;
  width: 348px;
  border-radius: 0px 240px;
  background-image: linear-gradient(
    180deg,
    rgba(81, 65, 165, 0.25) 0%,
    rgba(131, 119, 194, 0.08) 100%
  );
  position: relative;
`;

const HeroImage = styled.img``;

export default LandingPage;
