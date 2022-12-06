import styled from "styled-components";

export const TechListStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div {
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
