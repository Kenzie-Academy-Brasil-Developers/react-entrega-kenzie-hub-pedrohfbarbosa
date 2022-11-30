import styled, { css } from "styled-components";

export const Button = styled.button`
  cursor: pointer;

  border: none;
  border-radius: ${({ theme }) => theme.radiusOne};

  width: ${({ width }) => width};
  height: 3rem;
  padding: 0 1.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  font-weight: 500;

  color: ${({ theme }) => theme.white};

  ${({ btnType }) => {
    switch (btnType) {
      case "primary":
        return css`
          background-color: ${({ theme }) => theme.primary};

          &:hover {
            background-color: ${({ theme }) => theme.primaryFocus};
          }
        `;
      case "negative":
        return css`
          background-color: ${({ theme }) => theme.primaryNegative};
        `;
      case "disabled":
        return css`
          background-color: ${({ theme }) => theme.greyOne};

          &:hover {
            background-color: ${({ theme }) => theme.greyTwo};
          }
        `;
      case "btnMinor":
        return css`
          background-color: ${({ theme }) => theme.greyThree};
          height: 2rem;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0 1rem;
          &:hover {
            background-color: ${({ theme }) => theme.greyTwo};
          }
        `;

      default:
        return;
    }
  }}
`;
