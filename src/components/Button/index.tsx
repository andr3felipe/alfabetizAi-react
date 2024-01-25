import React, { ComponentProps } from "react";
import * as S from "./styles";
import { colors } from "../../@types/colors";

export interface ButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
  color?: keyof colors;
  backgroundcolor: keyof colors;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <S.Button {...rest}>{children}</S.Button>;
};
