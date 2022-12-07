import styled from "styled-components";

export const Input = styled.input`
  height: 3rem;
  max-width: ${({ width }) => width};
  width: 100%;
  padding: 0 1rem;

  font-size: 1rem;
  font-weight: 400;

  color: ${({ theme }) => theme.greyZero};

  outline: none;

  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radiusOne};

  background-color: ${({ theme }) => theme.greyTwo};

  &:focus {
    border: 1px solid ${({ theme }) => theme.greyZero};
  }

  &:focus::placeholder {
    color: ${({ theme }) => theme.greyZero};
  }

  &::placeholder {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.greyOne};
  }
`;
