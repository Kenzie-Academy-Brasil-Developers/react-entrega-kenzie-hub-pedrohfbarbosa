import styled from "styled-components";

export const Select = styled.select`
  cursor: pointer;

  height: 48px;
  width: ${({ width }) => width};

  padding: 0 1rem;

  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.greyOne};

  outline: none;

  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radiusOne};

  background-color: ${({ theme }) => theme.greyTwo};

  &:focus {
    border: 1px solid ${({ theme }) => theme.greyZero};

    color: ${({ theme }) => theme.greyZero};
  }
`;
