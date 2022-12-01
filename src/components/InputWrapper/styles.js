import styled from "styled-components";

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  position: relative;

  border: none;

  & label {
    ${({ theme, fontType }) => theme[fontType]};

    color: ${({ theme, color }) => theme[color]};
  }
`;
