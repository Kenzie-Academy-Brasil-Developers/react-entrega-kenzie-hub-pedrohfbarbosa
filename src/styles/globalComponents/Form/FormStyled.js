import styled from "styled-components";

export const Form = styled.form` 

  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
  }

  & .btnShow {
    cursor: pointer;
    position: absolute;
    top: 2.5rem;
    right: 1rem;
    padding: 0;
    width: fit-content;
    background-color: transparent;
    border: none;
  }

  & .btnShow svg {
    height: 1rem;
    width: 1rem;
    color: ${props => props.theme.greyZero};
  }
`;
