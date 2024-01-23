import React from "react";
import { Button } from "./styles";

interface NavButtonProps {
  children: React.ReactNode;
  to: string;
  onClick?: () => void;
}

const NavButton = ({ to, onClick, children }: NavButtonProps) => {
  return (
    <Button to={to} onClick={onClick}>
      {children}
    </Button>
  );
};

export default NavButton;
