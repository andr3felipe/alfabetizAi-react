import React, { ComponentProps } from "react";
import { Button } from "./styles";
import { NavLink } from "react-router-dom";

export interface NavButtonProps extends ComponentProps<typeof NavLink> {
  children: React.ReactNode;
  to: string;
  onClick?: () => void;
  color?: "white" | "blue-light";
  backgroundColor: "blue-light" | "red-dark" | "white";
}

const NavButton = ({ children, ...rest }: NavButtonProps) => {
  return <Button {...rest}>{children}</Button>;
};

export default NavButton;
