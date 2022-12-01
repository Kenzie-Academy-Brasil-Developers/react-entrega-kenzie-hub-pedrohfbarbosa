import styled from "styled-components";

export const RegisterPageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  padding: 2rem 1rem;

  & > div {
    width: 100%;
    max-width: 23.0625rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  & > div > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 100%;

    padding: 2.625rem 1.375rem;

    background-color: ${({ theme }) => theme.greyThree};
    border-radius: ${({ theme }) => theme.radiusOne};
  }

  & > div > div > h2 {
    text-align: center;
  }

  & > div > div > span {
    text-align: center;
  }
`;
