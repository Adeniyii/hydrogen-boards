import React from "react";
import styled from "styled-components/macro";
import Button from "../Button/Button";
import MaxWidthWrapper from "../MaxWidthWrapper";
import ReviewsSection from "../ReviewsSection/ReviewsSection";

const LandingBody = () => {
  return (
    <Wrapper>
      <BodyHeading>
        Because ,<span>the old fashioned way sucks,</span> We’ve designed ours
        to be better
      </BodyHeading>

      <Article>
        <ArticleInputWrapper>
          <FakeInputWrapper>
            <FakeInput />
            <FakeInput />
            <FakeInput>
              <ButtonWrapper>
                <Button size="large" variant="fill" type="accent">
                  Register
                </Button>
              </ButtonWrapper>
            </FakeInput>
            <EllipseWrapper>
              <EllipseImg alt="" src="/images/Ellipse41.svg" />
            </EllipseWrapper>
          </FakeInputWrapper>
        </ArticleInputWrapper>
        <ArticleTextWrapper>
          <h2>Sign up for Free</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id amet,
            sit eros, dolor et, lectus vitae. Amet, scelerisque blandit eu
            blandit at vel augue sed. Sed massa enim venenatis vulputate
            dignissim imperdiet. Sed sit dignissim eget purus suscipit viverra
            consequat semper non. Phasellus amet hendrerit ultrices pulvinar.{" "}
          </p>
          <Button size="medium" variant="fill">
            Get Started
          </Button>
        </ArticleTextWrapper>
      </Article>

      <SecondArticle>
        <ArticleTextWrapper>
          <h2>Complete your Registration</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id amet,
            sit eros, dolor et, lectus vitae. Amet, scelerisque blandit eu
            blandit at vel augue sed. Sed massa enim venenatis vulputate
            dignissim imperdiet. Sed sit dignissim eget purus suscipit viverra
            consequat semper non. Phasellus amet hendrerit ultrices pulvinar.{" "}
          </p>
          <Button size="medium" variant="fill">
            Get Started
          </Button>
        </ArticleTextWrapper>

        <ArticleRegistrationWrapper>
          <RegistrationHeader>
            <p>Complete your registration</p>
          </RegistrationHeader>
          <Registrationbody>
            <h3>Personal details</h3>
            <FakeInputOutline></FakeInputOutline>
            <FakeInputOutline></FakeInputOutline>
            <h3>Education Details</h3>
            <FakeInputOutline></FakeInputOutline>
            <UploadLogoBackground>
              <UploadLogoWrapper>
                <UploadLogo alt="" src="/images/UploadIcon.svg" />
              </UploadLogoWrapper>
            </UploadLogoBackground>
            <UsageWrapper></UsageWrapper>
          </Registrationbody>
        </ArticleRegistrationWrapper>
      </SecondArticle>

      <ThirdArticle>
        <JobCardsWrapper>
          <JobCard>
            <JobIconWrapper>
              <FacebookContainer></FacebookContainer>
            </JobIconWrapper>
            <JobTitle>Senior UX Designer</JobTitle>
            <JobAddress>
              <span>Facebook</span>
              <span></span>
              <span>San Fracisco, USA</span>
            </JobAddress>
          </JobCard>
          <JobCard>
            <JobIconWrapper>
              <img alt="" src="/images/Microsoft_logo.svg"></img>
            </JobIconWrapper>
            <JobTitle>Senior UX Designer</JobTitle>
            <JobAddress>
              <span>Facebook</span>
              <span></span>
              <span>San Fracisco, USA</span>
            </JobAddress>
          </JobCard>
          <JobCard>
            <JobIconWrapper>
              <img alt="" src="/images/Apple_logo_black.svg"></img>
            </JobIconWrapper>
            <JobTitle>Senior UX Designer</JobTitle>
            <JobAddress>
              <span>Facebook</span>
              <span></span>
              <span>San Fracisco, USA</span>
            </JobAddress>
          </JobCard>
        </JobCardsWrapper>

        <ArticleTextWrapper>
          <h2>Search and apply for your dream Job</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id amet,
            sit eros, dolor et, lectus vitae. Amet, scelerisque blandit eu
            blandit at vel augue sed. Sed massa enim venenatis vulputate
            dignissim imperdiet. Sed sit dignissim eget purus suscipit viverra
            consequat semper non. Phasellus amet hendrerit ultrices pulvinar.{" "}
          </p>
          <Button size="medium" variant="fill">
            Get Started
          </Button>
        </ArticleTextWrapper>
      </ThirdArticle>
      <ReviewsSection />
    </Wrapper>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  padding-top: 122px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white);
`;

const BodyHeading = styled.h1`
  font-size: calc(40 / 16 * 1rem);
  font-weight: var(--font-weight-bold);
  color: var(--color-copy-600);
  max-width: 796px;
  text-align: center;
  margin-bottom: 175px;

  & > span {
    color: var(--color-primary-600);
  }
`;

const Article = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SecondArticle = styled(Article)`
  margin-top: 260px;
  align-items: flex-start;
  gap: 82px;
`;

const ThirdArticle = styled(Article)`
  margin-top: 188px;
  align-items: flex-end;
  gap: 277px;
`;

const ArticleInputWrapper = styled.div`
  position: relative;
  flex: 1;
  /* transform: translateX(-260px); */
  padding-right: 230px;
`;

const FakeInputWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 18px;
  filter: drop-shadow(0px 100px 214px rgba(81, 65, 165, 0.15))
    drop-shadow(0px 38.5185px 68.163px rgba(0, 0, 0, 0.0425185))
    drop-shadow(0px 8.14815px 17.437px rgba(0, 0, 0, 0.0274815));
`;

const FakeInput = styled.div`
  width: 325px;
  height: 55px;
  position: relative;
  background-color: var(--color-white);
  border-radius: 8px;

  &:after {
    content: "";
    top: 20px;
    left: 19px;
    position: absolute;
    width: 120px;
    height: 8px;
    border-radius: 2px;
    background-color: var(--color-copy-200);
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(0, calc(100% + 18px));
`;

const EllipseWrapper = styled.div`
  width: 167px;
  position: absolute;
  top: 0;
  transform: translate(50%, -50%);
`;

const EllipseImg = styled.img``;

const ArticleTextWrapper = styled.div`
  display: flex;
  gap: 19px;
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  max-width: 557px;

  & > h2 {
    font-size: calc(28 / 16 * 1rem);
    font-weight: var(--font-weight-bold);
    color: var(--color-primary-600);
  }

  & > p {
    font-size: 1rem;
    color: var(--color-copy-600);
  }
`;

const ArticleRegistrationWrapper = styled.div`
  max-width: 489px;
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`;

const RegistrationHeader = styled.div`
  padding: 24px 30px;
  background-color: var(--color-copy-600);

  & > p {
    font-size: calc(12 / 16 * 1rem);
    color: var(--color-copy-200);
    font-weight: var(--font-weight-medium);
  }
`;

const Registrationbody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  & > h3 {
    text-transform: capitalize;
    font-size: calc(14 / 16 * 1rem);
    font-weight: var(--font-weight-bold);
    color: var(--color-copy-600);

    &:last-of-type {
      margin-top: 12px;
    }
  }
`;

const FakeInputOutline = styled(FakeInput)`
  width: 412px;
  height: 47px;
  border: 1px solid #eeecf6;
`;

const UploadLogoBackground = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: inset 0px -1px 5px hsl(0deg 0% 0% / 0.25);
  backdrop-filter: blur(10px);
  display: grid;
  row-gap: 36px;
  column-gap: 16px;
  place-content: center;
`;

const UploadLogoWrapper = styled.div`
  width: 67.5px;
`;

const UsageWrapper = styled.div`
  width: 352px;
  height: 150px;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(145px, 17px);
  border-radius: 8px;
  background-color: var(--color-white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15), var(--shadow-elevation-high);
`;

const UploadLogo = styled.img``;

const FacebookContainer = styled.div`
  height: 49px;
  border-radius: 8px;
  background-color: rgba(66, 103, 178, 1);
`;

const JobCardsWrapper = styled.div`
  --card-wrapper-height: 288px;
  display: flex;
  flex-direction: column;
  width: 363px;
  height: var(--card-wrapper-height);
  justify-content: space-between;
  position: relative;
`;

const JobCard = styled.div`
  box-shadow: 0px 100px 214px rgba(81, 65, 165, 0.32),
    0px 38.5185px 68.163px rgba(0, 0, 0, 0.0425185),
    0px 8.14815px 17.437px rgba(0, 0, 0, 0.0274815);
  border-radius: 8px;
  display: grid;
  padding: 32px 42px;
  background-color: var(--color-white);
  grid-template-areas:
    "icon title"
    "icon address";

  &:nth-of-type(2) {
    position: absolute;
    width: 100%;
    transform: translate(136px, calc(var(--card-wrapper-height) / 2 - 50%));
  }
`;

const JobIconWrapper = styled.div`
  grid-area: icon;
  width: 49px;
`;
const JobTitle = styled.div`
  grid-area: title;
  font-size: calc(17 / 16 * 1rem);
  font-weight: var(--font-weight-bold);
  color: var(--color-copy-600);
`;
const JobAddress = styled.div`
  grid-area: address;
  display: flex;
  gap: 8px;
  color: var(--color-primary-400);
  font-size: calc(12 / 16 * 1rem);
  font-weight: var(--font-weight-normal);
`;

export default LandingBody;
