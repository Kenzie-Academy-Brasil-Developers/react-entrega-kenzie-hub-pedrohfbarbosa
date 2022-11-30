import { Link as LinkRouter } from "react-router-dom";
import styled, { css } from "styled-components";

export const Link = styled(LinkRouter)`
  cursor: pointer;

  border: none;
  border-radius: ${(props) => props.theme.radiusOne};

  width: ${(props) => props.width};
  height: 3rem;
  padding: 0 1.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;

  color: ${(props) => props.theme.white};

  ${(props) => {
    switch (props.type) {
      case "primary":
        return css`
          background-color: ${(props) => props.theme.primary};

          &:hover {
            background-color: ${(props) => props.theme.primaryFocus};
          }
        `;
      case "negative":
        return css`
          background-color: ${(props) => props.theme.primaryNegative};
        `;
      case "disabled":
        return css`
          background-color: ${(props) => props.theme.greyOne};

          &:hover {
            background-color: ${(props) => props.theme.greyTwo};
          }
        `;
      case "linkMinor":
        return css`
          background-color: ${(props) => props.theme.greyThree};
          height: 2rem;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0 1rem;
          &:hover {
            background-color: ${(props) => props.theme.greyTwo};
          }
        `;

      default:
        return;
    }
  }}
`;
