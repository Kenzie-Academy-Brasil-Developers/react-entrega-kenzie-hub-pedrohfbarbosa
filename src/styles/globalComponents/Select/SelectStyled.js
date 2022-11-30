import styled from "styled-components";

export const Select = styled.select`
  cursor: pointer;
  height: 48px;
  width: ${(props) => props.width};
  padding: 0 1rem;

  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.greyOne};

  outline: none;

  border: 1px solid transparent;
  border-radius: ${(props) => props.theme.radiusOne};

  background-color: ${(props) => props.theme.greyTwo};

  &:focus {
    border: 1px solid ${(props) => props.theme.greyZero};
    color: ${(props) => props.theme.greyZero};
  }
`;
