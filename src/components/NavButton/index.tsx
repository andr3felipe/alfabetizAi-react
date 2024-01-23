import React from 'react';
import { Button } from './styles';

interface NavButtonProps {
  children: React.ReactNode;
  to: string;
}

const NavButton = ({ to, children }: NavButtonProps) => {
  return <Button to={to}>{children}</Button>;
};

export default NavButton;
