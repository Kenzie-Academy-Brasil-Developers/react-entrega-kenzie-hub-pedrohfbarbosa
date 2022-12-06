import styled from "styled-components";

export const CardStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.greyFour};

  padding: 1rem;

  border-radius: ${({ theme }) => theme.radiusOne};

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  /* @media (max-width: 500px) {
    flex-direction: column;
    gap: 2rem;

    & > div {
      flex-direction: column;
    }
  } */
`;
