import React from "react";
import { Btn } from "./Button.styles";
import { ButtonTypes } from "./Button.types";

export const Button: React.FC<ButtonTypes> = ({
  text,
  handleClick,
  bgColor,
  color,
  position,
  customCss,
}) => {
  return (
    <Btn
      onClick={handleClick}
      bgColor={bgColor}
      color={color}
      position={position}
      customCss={customCss}
    >
      {text}
    </Btn>
  );
};
