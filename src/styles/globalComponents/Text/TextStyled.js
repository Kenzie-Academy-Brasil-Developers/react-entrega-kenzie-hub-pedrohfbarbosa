import styled from "styled-components";
import { Text } from "./TextBase";

export const TextStyled = styled(Text)`
  ${({ theme, fontType }) => theme[fontType]};

  color: ${({ theme, color }) => theme[color]};
`;
