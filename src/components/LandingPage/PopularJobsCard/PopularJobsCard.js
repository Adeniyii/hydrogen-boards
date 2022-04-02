import React from "react";
import styled from "styled-components/macro";

const PopularJobsCard = ({ title, jobCount }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <p>{jobCount}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  color: var(--color-white);
  justify-content: center;

  & h3 {
    font-size: calc(25 / 16 * 1rem);
    font-weight: var(--font-weight-bold);
  }

  & p {
    font-size: calc(18 / 16 * 1rem);
    font-weight: var(--font-weight-normal);
  }
`;

export default PopularJobsCard;
