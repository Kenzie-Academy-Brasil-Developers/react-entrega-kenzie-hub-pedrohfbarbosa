import styled from "styled-components";

export const ButtonViewStyled = styled.button`
  cursor: pointer;

  position: absolute;
  top: 2.5rem;
  right: 1rem;

  padding: 0;

  width: fit-content;

  background-color: transparent;

  border: none;

  & svg {
    height: 1rem;
    width: 1rem;

    color: ${({ theme }) => theme.greyZero};
  }
`;
