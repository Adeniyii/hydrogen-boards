import React from "react";
import styled from "styled-components/macro";

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <HeroArticleWrapper>
        <HeroHeading>
          Your <span>dream job</span> awaits. Come find it here.
        </HeroHeading>
        <HeroParagraph>
          Sit morbi id rhoncus consectetur in. Volutpat nibh vel id aliquam eget
          consequat risus nec. Nisl, mi platea tellus imperdiet tincidunt
          volutpat lorem. Consectetur enim, eget in turpis massa id volutpat.
          Facilisis euismod.
        </HeroParagraph>
      </HeroArticleWrapper>
      <HeroWrapper>
        <DecorativeBox>
          <HeroImageWrapper>
            <HeroImage alt="" src="/images/Victory.avif" />
          </HeroImageWrapper>
        </DecorativeBox>
        <JobCard>
          <JobIconWrapper></JobIconWrapper>
          <JobTitle>
            <h3>Senior UX Designer</h3>
            <span>Apply</span>
          </JobTitle>
          <JobAddress>
            <span>Facebook</span>
            <span></span>
            <span>San Fracisco, USA</span>
          </JobAddress>
        </JobCard>
        <HeroHiringBlock>
          <HirirngInfoWrapper>
            <GraphHeading>34k</GraphHeading>
            <GraphBadge>65 added</GraphBadge>
          </HirirngInfoWrapper>
          <HiringGraphWrapper>
            <GraphImage alt="" src="/images/Graph.svg" />
          </HiringGraphWrapper>
        </HeroHiringBlock>
      </HeroWrapper>
    </HeroSectionWrapper>
  );
};

const HeroSectionWrapper = styled.section`
  display: flex;
  gap: 32px;
  justify-content: space-between;
`;

const HeroArticleWrapper = styled.div`
  max-width: 490px;
`;

const HeroWrapper = styled.div`
  padding-top: 56px;
  padding-right: 95px;
  padding-left: 176px;
  position: relative;
`;

const HeroHeading = styled.h1`
  max-width: 460px;
  font-weight: var(--font-weight-bold);
  font-size: 60px;
  color: var(--color-copy-600);
  text-transform: capitalize;
  line-height: 72px;

  & > span {
    color: var(--color-primary-600);
  }
`;

const HeroParagraph = styled.p`
  font-size: 1rem;
  margin-top: 40px;
  margin-bottom: 52px;
  color: var(--color-copy-400);
`;

const HeroImageWrapper = styled.div`
  position: absolute;
  width: 700px;
  top: -60px;
  left: -180px;
`;

const HeroImage = styled.img``;

const HeroHiringBlock = styled.div`
  width: 353px;
  height: 237px;
  bottom: 0;
  backdrop-filter: blur(10px);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.7);
  transform: translateX(90px);
  position: absolute;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
`;

const HirirngInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HiringGraphWrapper = styled.div``;

const GraphImage = styled.img``;

const GraphHeading = styled.h1`
  font-size: calc(42 / 16 * 1rem);
  font-weight: var(--font-weight-bold);
  color: var(--color-copy-600);
`;

const GraphBadge = styled.div`
  font-size: calc(10 / 16 * 1rem);
  color: var(--color-copy-600);
  background-color: white;
  text-align: center;
  padding: 9px 12px 10px 17px;
  border-radius: 4px;
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

const JobCard = styled.div`
  display: grid;
  padding: 12px 20px;
  backdrop-filter: blur(10px);
  border-radius: 8px;
  align-items: center;
  width: 407px;
  height: 115px;
  position: absolute;
  top: 0;
  transform: translate(-50%, 167px);
  background-color: rgba(255, 255, 255, 0.7);
  grid-template-areas:
    "icon title"
    "icon address";
`;

const JobIconWrapper = styled.div`
  grid-area: icon;
  width: 91px;
  height: 91px;
  border-radius: 8px;
  background-color: rgba(66, 103, 178, 1);
`;
const JobTitle = styled.div`
  grid-area: title;
  display: flex;
  align-items: baseline;
  gap: 32px;

  & > h3 {
    font-size: calc(17 / 16 * 1rem);
    font-weight: var(--font-weight-bold);
    color: var(--color-copy-600);
  }

  & > span {
    font-size: calc(14 / 16 * 1rem);
    font-weight: var(--font-weight-normal);
    color: var(--color-primary-600);
  }
`;
const JobAddress = styled.div`
  grid-area: address;
  display: flex;
  gap: 8px;
  color: var(--color-primary-400);
  font-size: calc(12 / 16 * 1rem);
  font-weight: var(--font-weight-normal);
`;

export default HeroSection;
