import styled, { css } from "styled-components";
import { ButtonTypes } from "./Button.types";

const positions = {
  fixed: css`
    position: fixed;
  `,
  relative: css`
    position: relative;
  `,
  absolute: css`
    position: absolute;
  `,
};

export const Btn = styled.button<Partial<ButtonTypes>>`
  display: block;
  ${({ position }) => position && positions[position]}
  ${({ customCss }) =>
    customCss &&
    css`
      ${customCss}
    `}
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `};
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;
