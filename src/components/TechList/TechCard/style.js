import styled from "styled-components";

export const CardStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  min-height: 3.2rem;

  padding: 1rem;

  background-color: ${({ theme }) => theme.greyFour};

  border-radius: ${({ theme }) => theme.radiusOne};

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & > div > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 21.875rem) {
    flex-direction: column;

    & > div {
      flex-direction: column;
    }
  }
`;
