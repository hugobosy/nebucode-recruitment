import React from "react";
import { Btn } from "./Button.styles";
import { ButtonTypes } from "./Button.types";

export const Button: React.FC<ButtonTypes> = ({ text }) => {
  return <Btn>{text}</Btn>;
};
