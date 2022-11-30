import styled from "styled-components";

export const Input = styled.input`
  height: 48px;
  width: ${(props) => props.width};
  padding: 0 1rem;

  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.greyZero};

  outline: none;

  border: 1px solid transparent;
  border-radius: ${(props) => props.theme.radiusOne};

  background-color: ${(props) => props.theme.greyTwo};

  &:focus {
    border: 1px solid ${(props) => props.theme.greyZero};
  }

  &:focus::placeholder {
    color: ${(props) => props.theme.greyZero};
  }

  &::placeholder {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.greyOne};
  }
`;
