import styled from "styled-components";
import { Text } from "./TextBase";

export const TextStyled = styled(Text)`
  ${(props) => props.theme[props.fontType]};
  color: ${(props) => props.theme[props.color]};
`;
