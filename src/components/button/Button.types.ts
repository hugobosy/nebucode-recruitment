import { Position } from "../../types";

export interface ButtonTypes {
  text: string;
  handleClick: () => void;
  bgColor?: string;
  color?: string;
  position?: Position;
  customCss?: string;
}
