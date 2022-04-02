import React from "react";
import styled from "styled-components/macro";

const ReviewsSection = () => {
  return (
    <Wrapper>
      <ReviewsHeading>
        Reviews from <span>people who have found Jobs</span> through Hydrogen
      </ReviewsHeading>
      <ReviewCardWrapper>
        <ReviewsCard>
          <QuoteIconWrapper>
            <img alt="" src="/images/quote.svg"></img>
          </QuoteIconWrapper>
          <p>
            A vulputate pharetra nibh faucibus. Odio ornare cursus nulla egestas
            augue vel ultricies bibendum ornare. Vulputate sit hac in nunc
            rhoncus condimentum non sed. Consequat faucibus est integer leo et{" "}
          </p>
        </ReviewsCard>
        <ReviewSwitcher>
          <p>3/5</p>
          <ButtonRow>
            <SwitcherButton>
              <span>&#60;</span>
            </SwitcherButton>
            <SwitcherButton>
              <span>&#62;</span>
            </SwitcherButton>
          </ButtonRow>
        </ReviewSwitcher>
      </ReviewCardWrapper>
      <AvatarRow></AvatarRow>
      <DecorativeBox />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  flex-direction: column;
  position: relative;
  isolation: isolate;
`;

const ReviewsHeading = styled.h1`
  font-size: calc(40 / 16 * 1rem);
  font-weight: var(--font-weight-bold);
  color: var(--color-copy-600);
  max-width: 680px;
  text-align: center;
  margin-bottom: 80px;

  & > span {
    color: var(--color-primary-600);
  }
`;

const QuoteIconWrapper = styled.div`
  width: 76px;
  height: 52px;
`;

const ReviewCardWrapper = styled.div`
  width: 730px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 2px var(--color-primary-300);
  position: relative;
  z-index: 1;
  margin-bottom: 32px;
`;

const ReviewsCard = styled.div`
  /* height: 326px; */
  padding: 50px 89px 34px;
  display: flex;
  gap: 34px;
  flex-direction: column;

  & p {
    font-size: 1rem;
    color: var(--color-copy-400);
  }
`;

const ReviewSwitcher = styled.div`
  border-top: 1px solid var(--color-primary-300);
  display: flex;
  padding: 12px 89px 0px 54px;
  height: 76px;
  justify-content: space-between;

  & > p {
    color: var(--color-copy-600);
    font-size: 1rem;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
`;

const SwitcherButton = styled.button`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: grid;
  place-content: center;
  background-color: var(--color-primary-300);

  & > span {
    color: var(--color-primary-600);
    transform: translateY(-2px);
    font-weight: var(--font-weight-bold);
  }
`;

const AvatarRow = styled.div`
  display: flex;
  gap: 16px;
  height: 84px;
  width: 320px;
  background-color: var(--color-primary-600);
`;

const DecorativeBox = styled.div`
  height: 712px;
  width: 348px;
  border-radius: 240px 0px;
  background-image: linear-gradient(
    180deg,
    rgba(81, 65, 165, 0.25) 0%,
    rgba(131, 119, 194, 0.08) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-85%, 0%);
`;

export default ReviewsSection;
