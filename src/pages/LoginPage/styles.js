import styled from "styled-components";

export const LoginPageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;

  & > div > div > legend {
    text-align: center;
  }

  & > div > div > span {
    text-align: center;
  }

  & > div {
    width: 100%;
    max-width: 23.0625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  & > div > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    background-color: ${({ theme }) => theme.greyThree};
    border-radius: ${({ theme }) => theme.radiusOne};
    padding: 2.625rem 1.375rem;
  }
`;
