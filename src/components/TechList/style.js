import styled from "styled-components";

export const TechListStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 2rem 1rem;

    background-color: ${({ theme }) => theme.greyThree};

    border-radius: ${({ theme }) => theme.radiusOne};
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const EmptyList = styled.div`
  padding: 2rem 0;

  text-align: center;
  border: 1px solid ${({ theme }) => theme.greyThree};

  border-radius: ${({ theme }) => theme.radiusOne};
`;
