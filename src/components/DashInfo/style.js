import styled from "styled-components";

export const DashInfoStyled = styled.section`
  min-height: 7.375rem;

  display: flex;
  align-items: center;

  border-top: 1px solid ${({ theme }) => theme.greyThree};
  border-bottom: 1px solid ${({ theme }) => theme.greyThree};

  & > div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 56.25rem) {
    & > div {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
  }
`;
