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
`;
