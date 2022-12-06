import styled from "styled-components";

export const CardButton = styled.button`
  opacity: 0.5;

  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 1rem;
  width: 1rem;

  background-color: transparent;
  color: ${({ theme }) => theme.white};

  &:hover {
    opacity: 1;
  }
`;