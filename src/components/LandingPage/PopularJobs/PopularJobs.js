import React from "react";
import styled from "styled-components/macro";
import PopularJobsCard from "../PopularJobsCard/PopularJobsCard";

// Dummy
const JobsData = [
  {
    title: "Product",
    jobCount: "143",
  },
  {
    title: "FrontEnd",
    jobCount: "143",
  },
  {
    title: "Backend",
    jobCount: "143",
  },
  {
    title: "Marketing",
    jobCount: "143",
  },
];

const PopularJobs = () => {
  return (
    <Wrapper>
      <PopularJobsHeading>Popular Job Categories</PopularJobsHeading>
      <PopularJobsRow>
        <JobsGrid>
          {JobsData.map((job) => {
            return (
              <PopularJobsCard
                key={job.title}
                title={job.title}
                jobCount={job.jobCount}
              />
            );
          })}
        </JobsGrid>
        <ExploreCell>
          <LinkLogo alt="" src="/images/ArrowLink.svg" />
          <p>Explore all</p>
        </ExploreCell>
      </PopularJobsRow>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 52px;
`;

const PopularJobsHeading = styled.h2`
  font-weight: var(--font-weight-bold);
  font-size: calc(40 / 16 * 1rem);
  color: var(--color-copy-600);
  text-transform: capitalize;
`;

const PopularJobsRow = styled.div`
  display: flex;
  height: 308px;
  margin-left: -128px;
  margin-right: -128px;
`;

const JobsGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1 1 0;
  padding-inline: 126px 117px;
  background-color: var(--color-primary-600);
`;

const ExploreCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: var(--color-error-400);
  padding: 0 119px;
  gap: 16px;

  & > p {
    font-size: calc(17 / 16 * 1rem);
    font-weight: var(--font-weight-bold);
    color: var(--color-copy-600);
  }
`;

const LinkLogo = styled.img`
  width: 34px;
  align-self: center;
`;

export default PopularJobs;
